import Button from "@components/atoms/Button";
import Heading2 from "@components/atoms/Heading2";
import Paragraph from "@components/atoms/Paragraph";

const EpisodeHeading = () => (
  <div className="flex items-center justify-between flex-wrap gap-9">
    <div className="space-y-4">
      <Heading2>Recent Episodes</Heading2>
      <Paragraph className="max-w-sm">
        Apparently we had reached a great height in the atmosphere, for the sky
        was a dead black.
      </Paragraph>
    </div>
    <Button>See All Episodes</Button>
  </div>
);

export default EpisodeHeading;
