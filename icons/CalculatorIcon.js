import Svg, { Path } from "react-native-svg";

function CalculatorIcon({ color = "#0A3AA3" }) {
  return (
    <Svg
      width="35"
      height="40"
      viewBox="0 0 35 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M21.25 23.5V25.75M13.75 19H13.7575V19.0075H13.75V19ZM13.75 21.25H13.7575V21.2575H13.75V21.25ZM13.75 23.5H13.7575V23.5075H13.75V23.5ZM13.75 25.75H13.7575V25.7575H13.75V25.75ZM16.2476 19H16.2551V19.0075H16.2476V19ZM16.2476 21.25H16.2551V21.2575H16.2476V21.25ZM16.2476 23.5H16.2551V23.5075H16.2476V23.5ZM16.2476 25.75H16.2551V25.7575H16.2476V25.75ZM18.7524 19H18.7599V19.0075H18.7524V19ZM18.7524 21.25H18.7599V21.2575H18.7524V21.25ZM18.7524 23.5H18.7599V23.5075H18.7524V23.5ZM18.7524 25.75H18.7599V25.7575H18.7524V25.75ZM21.25 19H21.2575V19.0075H21.25V19ZM21.25 21.25H21.2575V21.2575H21.25V21.25ZM13.75 13.75H21.25V16H13.75V13.75ZM17.5 10C15.608 10 13.7416 10.1095 11.9067 10.3224C10.8061 10.4501 10 11.399 10 12.507V27.25C10 28.4926 11.0074 29.5 12.25 29.5H22.75C23.9926 29.5 25 28.4926 25 27.25V12.507C25 11.399 24.1939 10.4501 23.0933 10.3224C21.2584 10.1095 19.392 10 17.5 10Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default CalculatorIcon;
