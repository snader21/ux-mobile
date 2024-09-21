import Svg, { Path } from "react-native-svg";

function Key({ color = "#0A3AA3" }) {
  return (
    <Svg
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M23.5 13.9081C25.1569 13.9081 26.5 15.2512 26.5 16.9081M29.5 16.9081C29.5 20.2218 26.8137 22.9081 23.5 22.9081C23.1493 22.9081 22.8055 22.878 22.4713 22.8202C21.9083 22.723 21.312 22.8461 20.908 23.2501L18.25 25.9081H16V28.1581H13.75V30.4081H10V27.5901C10 26.9933 10.2371 26.421 10.659 25.9991L17.158 19.5001C17.562 19.0961 17.6851 18.4998 17.5878 17.9368C17.5301 17.6025 17.5 17.2588 17.5 16.9081C17.5 13.5944 20.1863 10.9081 23.5 10.9081C26.8137 10.9081 29.5 13.5944 29.5 16.9081Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default Key;
