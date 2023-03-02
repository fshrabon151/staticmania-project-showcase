import Button from "@components/atoms/Button";
import ButtonOutline from "@components/atoms/ButtonOutline";
import H1 from "@components/atoms/H1";
import H2 from "@components/atoms/H2";
import H3 from "@components/atoms/H3";
import H4 from "@components/atoms/H4";
import H5 from "@components/atoms/H5";
import H6 from "@components/atoms/H6";
import P from "@components/atoms/P";

export default function Home() {
  return (
    <div className="space-y-9 p-10">
      <div className="flex space-x-9">
        <div className="space-y-6">
          <H1>Heading 1</H1>
          <H2>Heading 2</H2>
          <H3>Heading 3</H3>
          <H4>Heading 4</H4>
          <H5>Heading 5</H5>
          <H6>Heading 6</H6>
        </div>
        <div>
          <P>Body Text</P>
          <P className="max-w-sm">
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle.{" "}
          </P>
        </div>
      </div>
      <div className="space-y-6">
        <H4>Components</H4>
        <div className="space-x-6">
          <Button>Button</Button>
          <ButtonOutline>Secondary</ButtonOutline>
        </div>
      </div>
    </div>
  );
}
