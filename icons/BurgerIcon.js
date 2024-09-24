import Svg, { Path } from "react-native-svg";

function BurgerIcon({ color = "#0A3AA3", size = 24 }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill={color} />
    </Svg>
  );
}

export default BurgerIcon;
