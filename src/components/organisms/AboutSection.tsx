import Button from "@components/atoms/Button";
import Heading1 from "@components/atoms/Heading1";
import Paragraph from "@components/atoms/Paragraph";

const AboutSection = () => (
  <div className="container xl:px-56 pt-24 pb-20">
    <div className="space-y-8 lg:space-y-6">
      <Heading1 className="lg:max-w-md leading-[53px]">
        About Finsweet Podcast
      </Heading1>
      <Paragraph className="lg:max-w-[480px]">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </Paragraph>

      <div className="flex items-center mx-auto">
        <Button>Subscribe Now!</Button>
      </div>
    </div>
  </div>
);
export default AboutSection;
