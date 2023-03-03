import PodcastSection from "@components/molecules/PodcastSection";
import ArticlesNewsSection from "@components/organisms/ArticlesNewsSection";
import EpisodeSection from "@components/organisms/EpisodeSection";
import HeroSection from "@components/organisms/HeroSection";
import Layout from "@Layouts/Layout";

const Home = () => (
  <Layout title="Home">
    <div className="space-y-10 py-11">
      <HeroSection />
      <PodcastSection />
      <EpisodeSection />
      <ArticlesNewsSection />
    </div>
  </Layout>
);

export default Home;
