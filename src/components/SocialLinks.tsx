'use client';

export default function SocialLinks() {
  const socialLinks = [
    {
      href: 'https://www.facebook.com/share/1AXwghqUrX/',
      icon: '📘',
      label: 'Facebook',
    },
    {
      href: 'https://www.instagram.com/biking_singh_rathor?igsh=MTJudDUwczdoaHE0cg==',
      icon: 'myprofile',
      label: 'Instagram',
    },
    {
      href: 'https://sites.google.com/view/hightechwithaditya/works',
      icon: '🌐',
      label: "Friend's Website",
    },
  ];

  return (
    <section>
      <style>{`
        .social-links {
          text-align: center;
          margin: 80px 0;
        }
        .social-links a {
          display: inline-block;
          margin: 0 25px;
          font-size: 2em;
          width: 80px;
          height: 80px;
          line-height: 80px;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border-radius: 50%;
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          text-decoration: none;
        }
      `}</style>
      <div className="social-links">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            title={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </section>
  );
}
