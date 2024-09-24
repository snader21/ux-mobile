import Svg, { Path } from "react-native-svg";

function CheckIcon({ color = "#0A3AA3", size = 20 }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M5.20186 6.75609L9.99749 11.5517L14.7981 6.7511L15.6466 7.59963L9.99749 13.2488L4.35333 7.60462L5.20186 6.75609Z"
        fill={color}
      />
    </Svg>
  );
}

export default CheckIcon;
