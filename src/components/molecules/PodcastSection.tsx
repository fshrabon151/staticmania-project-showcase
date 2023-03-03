import Heading3 from "@components/atoms/Heading3";
import Image from "next/image";

const PodcastSection = () => (
  <div className="container py-16">
    <div className="flex-wrap items-center justify-center lg:justify-between gap-10 md:gap-6 flex">
      <Heading3 className="w-full text-center lg:w-auto">
        Podcast Available On
      </Heading3>
      <Image
        src="/assets/applePodcast.png"
        alt="applePodcast.png"
        width={185}
        height={37}
      />
      <Image
        src="/assets/soundCloud.png"
        alt="soundCloud.png"
        width={174}
        height={37}
      />
      <Image
        src="/assets/googlePodcast.png"
        alt="googlePodcast.png"
        width={203}
        height={37}
      />
      <Image
        src="/assets/Spotify.png"
        alt="Spotify.png"
        width={131}
        height={37}
      />
    </div>
  </div>
);

export default PodcastSection;
