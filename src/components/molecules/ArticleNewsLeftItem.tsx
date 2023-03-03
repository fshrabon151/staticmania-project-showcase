import ArticleNewsAudioTrackShape from "@components/atoms/ArticleNewsAudioTrackShape";
import Heading2 from "@components/atoms/Heading2";
import SecondaryButton from "@components/atoms/SecondaryButton";

const ArticleNewsLeftItem = () => (
  <div className="bg-staticOffWhite relative overflow-hidden">
    <div className="space-y-4 p-10">
      <Heading2 className="max-w-[250px]">Read our articles & news</Heading2>
      <SecondaryButton>See More</SecondaryButton>
    </div>
    <div className="relative w-full h-full overflow-hidden">
      <div
        className="flex flex-col items-center justify-between gap-20 absolute bottom-0 left-0 lg:bottom-14 lg:-left-10 w-full"
        style={{ transform: "rotate(-47deg)" }}
      >
        <ArticleNewsAudioTrackShape color="blue" width="w-[232px]" />
        <ArticleNewsAudioTrackShape color="green" width="w-[740px]" />
        <ArticleNewsAudioTrackShape color="blue" width="w-[600px]" />
      </div>
    </div>
  </div>
);

export default ArticleNewsLeftItem;
