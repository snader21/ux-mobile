import Svg, { Path } from "react-native-svg";

function BackIcon({ color = "#fff", size = 40 }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M15.825 21L21.425 26.6L20 28L12 20L20 12L21.425 13.4L15.825 19H28V21H15.825Z"
        fill={color}
      />
    </Svg>
  );
}

export default BackIcon;
