import IntroHero from "@/components/IntroHero";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ImageGallery from "@/components/image-gallery";

export default function Home() {
  return (
    <>
      <Header />
      <IntroHero />
      <ImageGallery />
      <Footer />
    </>
  );
}
