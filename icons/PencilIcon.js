import Svg, { Path } from "react-native-svg";

function PencilIcon({ color = "#0A3AA3", size = 21 }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M14.8617 3.48667L16.5492 1.79917C17.2814 1.06694 18.4686 1.06694 19.2008 1.79917C19.9331 2.53141 19.9331 3.71859 19.2008 4.45083L8.58218 15.0695C8.05351 15.5981 7.40144 15.9868 6.68489 16.2002L4 17L4.79978 14.3151C5.01323 13.5986 5.40185 12.9465 5.93052 12.4178L14.8617 3.48667ZM14.8617 3.48667L17.5 6.12499M16 13V17.75C16 18.9926 14.9926 20 13.75 20H3.25C2.00736 20 1 18.9926 1 17.75V7.24999C1 6.00735 2.00736 4.99999 3.25 4.99999H8"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default PencilIcon;
