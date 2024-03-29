type Props = {
  isHovering: boolean;
};

const PlayIcon: React.FC<Props> = ({ isHovering }) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      width={32}
      height={32}
      rx={16}
      fill={isHovering ? "#3E2DB2" : "#503AE7"}
    />
    <path
      d="M21.3334 16L12.4445 21.6452L12.4445 10.3548L21.3334 16Z"
      fill="white"
    />
  </svg>
);
export default PlayIcon;
