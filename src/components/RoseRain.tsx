'use client';

import { useEffect, useRef, useState } from 'react';

interface Rose {
  id: number;
  x: number;
  y: number;
  startX: number;
  vx: number;
  size: number;
  duration: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  delay: number;
  type: number;
}

export default function RoseRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rosesRef = useRef<Rose[]>([]);
  const idRef = useRef(0);
  const timeRef = useRef(0);
  const isAnimatingRef = useRef(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Rose emojis with variations
    const roseEmojis = ['🌹', '🌷', '🌸'];

    // Create roses
    const createRose = () => {
      const rose: Rose = {
        id: idRef.current++,
        x: Math.random() * canvas.width,
        startX: Math.random() * canvas.width,
        y: -100,
        vx: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 25 + 20,
        duration: Math.random() * 4 + 6,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.15,
        opacity: Math.random() * 0.6 + 0.4,
        delay: Math.random() * 0.5,
        type: Math.floor(Math.random() * roseEmojis.length),
      };
      rosesRef.current.push(rose);
    };

    // Animation loop
    let animationFrameId: number;
    let frameCount = 0;

    const animate = () => {
      frameCount++;
      timeRef.current += 1 / 60;
      
      // Only animate if animation is enabled
      if (!isAnimatingRef.current) {
        // Clear canvas when animation stops
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      // Clear canvas with slight fade effect
      ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create new roses
      if (frameCount % 12 === 0) {
        createRose();
      }

      // Update and draw roses
      rosesRef.current = rosesRef.current.filter((rose) => {
        const timeSinceStart = timeRef.current - rose.delay;
        if (timeSinceStart < 0) return true;

        const progress = (timeSinceStart % rose.duration) / rose.duration;

        // Fall down with easing
        rose.y = -100 + progress * (canvas.height + 200);

        // Horizontal wave motion
        const wave = Math.sin(progress * Math.PI * 3) * 40;
        rose.x = rose.startX + wave + rose.vx * timeSinceStart * 20;

        // Rotation
        rose.rotation += rose.rotationSpeed;

        // Calculate opacity (fade in and out)
        let opacity = rose.opacity;
        if (progress < 0.15) {
          opacity *= progress / 0.15;
        }
        if (progress > 0.85) {
          opacity *= (1 - progress) / 0.15;
        }

        // Add glow effect
        ctx.save();
        ctx.globalAlpha = opacity * 0.3;
        ctx.fillStyle = '#ff69b4';
        const glowSize = rose.size * 1.5;
        ctx.fillRect(rose.x - glowSize / 2, rose.y - glowSize / 2, glowSize, glowSize);
        ctx.restore();

        // Draw rose
        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.translate(rose.x, rose.y);
        ctx.rotate(rose.rotation);
        ctx.font = `${rose.size}px serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.shadowColor = 'rgba(255, 105, 180, 0.5)';
        ctx.shadowBlur = 8;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.fillText(roseEmojis[rose.type], 0, 0);
        ctx.restore();

        // Keep rose if still visible
        return rose.y < canvas.height + 200;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Face detection setup
  useEffect(() => {
    const initializeFaceDetection = async () => {
      try {
        const video = videoRef.current;
        if (!video) return;

        // Request camera access
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user', width: { ideal: 320 }, height: { ideal: 240 } },
        });

        video.srcObject = stream;
        setIsLoading(false);

        // Load face detection model and start detection
        const loadScript = (src: string): Promise<void> => {
          return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.onload = () => resolve();
            script.onerror = reject;
            document.head.appendChild(script);
          });
        };

        // Load face-api.js
        await loadScript('https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/face-api.min.js');

        // Wait for models to be available
        const checkModels = setInterval(async () => {
          if (typeof (window as any).faceapi !== 'undefined') {
            clearInterval(checkModels);

            try {
              const MODEL_URL = 'https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/weights/';
              await (window as any).faceapi.nets.tinyFaceDetector.load(MODEL_URL);

              // Start face detection loop
              const detectFaces = async () => {
                if (video.readyState === video.HAVE_ENOUGH_DATA) {
                  try {
                    const detections = await (window as any).faceapi.detectAllFaces(
                      video,
                      new (window as any).faceapi.TinyFaceDetectorOptions()
                    );

                    if (detections.length > 0) {
                      // Face detected - stop animation
                      isAnimatingRef.current = false;
                    } else {
                      // No face detected - continue animation
                      isAnimatingRef.current = true;
                    }
                  } catch (error) {
                    console.log('Face detection error:', error);
                  }
                }
                requestAnimationFrame(detectFaces);
              };

              detectFaces();
            } catch (error) {
              console.error('Error loading face detection models:', error);
            }
          }
        }, 100);

        return () => {
          stream.getTracks().forEach((track) => track.stop());
          clearInterval(checkModels);
        };
      } catch (error) {
        console.log('Camera access denied or unavailable:', 

        error

        );
        // If no camera, just keep animation running
        isAnimatingRef.current = true;
        setIsLoading(false);
      }
    };

    initializeFaceDetection();
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        style={{ display: 'none' }}
      />
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1, background: 'transparent' }}
      />
    </>
  );
}
