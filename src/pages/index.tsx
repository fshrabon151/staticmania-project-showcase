import PodcastSection from "@components/molecules/PodcastSection";
import HeroSection from "@components/organisms/HeroSection";
import Layout from "@Layouts/Layout";

const Home = () => (
  <Layout>
    <div className="space-y-10">
      <HeroSection />
      <PodcastSection />
    </div>
  </Layout>
);

export default Home;
