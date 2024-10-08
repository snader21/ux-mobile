import Svg, { Path } from "react-native-svg";

function MusicNoteIcon({ color = "#0A3AA3" }) {
  return (
    <Svg
      width="36"
      height="40"
      viewBox="0 0 36 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M15.25 16.9942L25.75 13.9942M25.75 20.547V24.297C25.75 25.3016 25.084 26.1845 24.1181 26.4605L22.7981 26.8376C21.6464 27.1666 20.5 26.3019 20.5 25.1041C20.5 24.2992 21.0336 23.5917 21.8076 23.3706L24.1181 22.7105C25.084 22.4345 25.75 21.5516 25.75 20.547ZM25.75 20.547V10.2442L15.25 13.2442V23.547M15.25 23.547V27.297C15.25 28.3016 14.5841 29.1845 13.6181 29.4605L12.2981 29.8376C11.1464 30.1666 10 29.3019 10 28.1041C10 27.2992 10.5336 26.5917 11.3076 26.3706L13.6181 25.7105C14.5841 25.4345 15.25 24.5516 15.25 23.547Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default MusicNoteIcon;
