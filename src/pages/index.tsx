import PodcastSection from "@components/molecules/PodcastSection";
import EpisodeSection from "@components/organisms/EpisodeSection";
import HeroSection from "@components/organisms/HeroSection";
import Layout from "@Layouts/Layout";

const Home = () => (
  <Layout>
    <div className="space-y-10 py-11">
      <HeroSection />
      <PodcastSection />
      <EpisodeSection />
    </div>
  </Layout>
);

export default Home;
