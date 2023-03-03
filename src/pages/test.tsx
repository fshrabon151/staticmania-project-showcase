import Button from "@components/atoms/Button";
import ButtonOutline from "@components/atoms/ButtonOutline";
import Heading1 from "@components/atoms/Heading1";
import Heading2 from "@components/atoms/Heading2";
import Heading3 from "@components/atoms/Heading3";
import Heading4 from "@components/atoms/Heading4";
import Heading5 from "@components/atoms/Heading5";
import Heading6 from "@components/atoms/Heading6";
import Paragraph from "@components/atoms/Paragraph";
import Header from "@Layouts/Header";

export default function Test() {
  return (
    <div>
      <Header />
      <div className="space-y-9 p-10">
        <div className="flex space-x-9">
          <div className="space-y-6">
            <Heading1>Heading 1</Heading1>
            <Heading2>Heading 2</Heading2>
            <Heading3>Heading 3</Heading3>
            <Heading4>Heading 4</Heading4>
            <Heading5>Heading 5</Heading5>
            <Heading6>Heading 6</Heading6>
          </div>
          <div>
            <Paragraph>Body Text</Paragraph>
            <Paragraph className="max-w-sm">
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle.{" "}
            </Paragraph>
          </div>
        </div>
        <div className="space-y-6">
          <Heading4>Components</Heading4>
          <div className="space-x-6">
            <Button>Button</Button>
            <ButtonOutline>Secondary</ButtonOutline>
          </div>
        </div>
      </div>
    </div>
  );
}
