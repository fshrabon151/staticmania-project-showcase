import Button from "@components/atoms/Button";
import Heading1 from "@components/atoms/Heading1";
import Paragraph from "@components/atoms/Paragraph";
import classNames from "@utils/classes";
type Props = {
  className?: string;
};

const HeroLeftContent: React.FC<Props> = ({ className = "" }) => (
  <div className={classNames(className && className, "flex justify-center")}>
    <div className=" space-y-12 lg:space-y-6">
      <Heading1 className="lg:max-w-md leading-[53px]">
        Become The Hero Of Your Own Story
      </Heading1>
      <Paragraph className="lg:max-w-[480px]">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
      </Paragraph>

      <div className="flex items-center mx-auto">
        <input
          type="text"
          placeholder="Enter Your Email Id"
          className="bg-staticOffWhite outline-none py-3 w-full block px-4"
        />
        <Button>Subscribe</Button>
      </div>
    </div>
  </div>
);
export default HeroLeftContent;
