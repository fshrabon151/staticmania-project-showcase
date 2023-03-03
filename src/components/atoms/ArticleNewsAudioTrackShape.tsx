import classNames from "@utils/classes";

type Props = {
  color: "blue" | "green";
  width: string;
};

const ArticleNewsAudioTrackShape: React.FC<Props> = ({ color, width }) => (
  <div
    className={classNames(
      "h-[74px]",
      color === "blue" && "bg-staticBlue",
      color === "green" && "bg-staticGreen",
      width
    )}
  />
);

export default ArticleNewsAudioTrackShape;
