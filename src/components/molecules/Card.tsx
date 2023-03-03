import Heading3 from "@components/atoms/Heading3";
import MicIcon from "@components/atoms/MicIcon";
import Paragraph from "@components/atoms/Paragraph";
import SecondaryButton from "@components/atoms/SecondaryButton";
import Image from "next/image";

type Props = {
  src: string;
  heading: string;
  description: string;
  btnLabel: string;
  hasBtnIcon?: boolean;
  hasImageIcon?: boolean;
};

const Card: React.FC<Props> = ({
  src,
  heading,
  description,
  btnLabel,
  hasBtnIcon = false,
  hasImageIcon = false,
}) => (
  <div>
    <div className="relative">
      <Image
        src={src}
        alt={heading}
        className="object-cover w-full"
        height={hasImageIcon ? 256 : 320}
        width={416}
      />
      {hasImageIcon && (
        <div className="absolute top-4 right-4">
          <MicIcon />
        </div>
      )}
    </div>
    <div className="py-5 space-y-4">
      <Heading3>{heading}</Heading3>
      <Paragraph className="pr-5">{description}</Paragraph>
      <div>
        <SecondaryButton hasBtnIcon={hasBtnIcon}>{btnLabel}</SecondaryButton>
      </div>
    </div>
  </div>
);

export default Card;
