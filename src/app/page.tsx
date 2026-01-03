import Header from '@/components/Header';
import ProfileImage from '@/components/ProfileImage';
import AboutSection from '@/components/AboutSection';
import Gallery from '@/components/Gallery';
import SocialLinks from '@/components/SocialLinks';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="max-w-[1100px] mx-auto my-10 md:my-[40px] px-5 md:px-[20px]">
      <Header />
      <ProfileImage />
      <AboutSection />
      <Gallery />
      <SocialLinks />
      <Footer />
    </main>
  );
}
