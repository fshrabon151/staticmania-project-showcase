import AudioTrackShape from "@components/atoms/AudioTrackShape";
import classNames from "@utils/classes";
type Props = {
  padding?: string;
  className?: string;
};
const HeroRightContent: React.FC<Props> = ({ className = "" }) => (
  <div
    className={classNames(
      "flex justify-center items-center space-x-10",

      className && className
    )}
  >
    <AudioTrackShape color="blue" height="h-[99px]" />
    <AudioTrackShape color="green" height="h-[256px]" />
    <AudioTrackShape color="blue" height="h-[178px]" />
    <AudioTrackShape color="green" height="h-[99px]" />
    <AudioTrackShape color="blue" height="h-[256px]" />
    <AudioTrackShape color="green" height="h-[178px]" />
  </div>
);
export default HeroRightContent;
