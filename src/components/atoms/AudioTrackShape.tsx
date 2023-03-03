import classNames from "@utils/classes";

type Props = {
  color: "blue" | "green";
  height: string;
};

const AudioTrackShape: React.FC<Props> = ({ color, height }) => (
  <div
    className={classNames(
      "w-8",
      color === "blue" && "bg-staticBlue",
      color === "green" && "bg-staticGreen",
      height
    )}
  />
);

export default AudioTrackShape;
