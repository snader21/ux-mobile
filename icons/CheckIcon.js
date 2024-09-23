import Svg, { Path } from "react-native-svg";

function CheckIcon({ color = "#0A3AA3" }) {
  return (
    <Svg
      width="11"
      height="9"
      viewBox="0 0 11 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path d="M4 9L11 2L9.5 0.5L4 6L1.5 3.5L0 5L4 9Z" fill={color} />
    </Svg>
  );
}

export default CheckIcon;
