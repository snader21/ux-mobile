import Svg, { Path } from "react-native-svg";

function Qr({ color = "#0A3AA3" }) {
  return (
    <Svg
      width="40"
      height="45"
      viewBox="0 0 40 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M13.75 15.1192C13.75 14.4979 14.2537 13.9942 14.875 13.9942H19.375C19.9963 13.9942 20.5 14.4979 20.5 15.1192V19.6192C20.5 20.2405 19.9963 20.7442 19.375 20.7442H14.875C14.2537 20.7442 13.75 20.2405 13.75 19.6192V15.1192Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13.75 24.8692C13.75 24.2479 14.2537 23.7442 14.875 23.7442H19.375C19.9963 23.7442 20.5 24.2479 20.5 24.8692V29.3692C20.5 29.9905 19.9963 30.4942 19.375 30.4942H14.875C14.2537 30.4942 13.75 29.9905 13.75 29.3692V24.8692Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M23.5 15.1192C23.5 14.4979 24.0037 13.9942 24.625 13.9942H29.125C29.7463 13.9942 30.25 14.4979 30.25 15.1192V19.6192C30.25 20.2405 29.7463 20.7442 29.125 20.7442H24.625C24.0037 20.7442 23.5 20.2405 23.5 19.6192V15.1192Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16.75 16.9942H17.5V17.7442H16.75V16.9942Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16.75 26.7442H17.5V27.4942H16.75V26.7442Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M26.5 16.9942H27.25V17.7442H26.5V16.9942Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M23.5 23.7442H24.25V24.4942H23.5V23.7442Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M23.5 29.7442H24.25V30.4942H23.5V29.7442Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M29.5 23.7442H30.25V24.4942H29.5V23.7442Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M29.5 29.7442H30.25V30.4942H29.5V29.7442Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M26.5 26.7442H27.25V27.4942H26.5V26.7442Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default Qr;
