import Svg, { Path } from "react-native-svg";

function PuzzleIcon({ color = "#0A3AA3" }) {
  return (
    <Svg
      width="39"
      height="40"
      viewBox="0 0 39 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M22 14.3369C22 13.9818 22.1861 13.6608 22.4012 13.3782C22.6221 13.0881 22.75 12.744 22.75 12.375C22.75 11.3395 21.7426 10.5 20.5 10.5C19.2574 10.5 18.25 11.3395 18.25 12.375C18.25 12.744 18.3779 13.0881 18.5988 13.3782C18.814 13.6608 19 13.9818 19 14.3369V14.3369C19 14.6982 18.7042 14.99 18.343 14.9796C16.9394 14.9391 15.5508 14.8384 14.1799 14.68C14.3663 16.2928 14.4727 17.9299 14.4951 19.5873C14.5001 19.9532 14.2029 20.25 13.8369 20.25V20.25C13.4818 20.25 13.1608 20.064 12.8782 19.8488C12.5881 19.6279 12.244 19.5 11.875 19.5C10.8395 19.5 10 20.5074 10 21.75C10 22.9926 10.8395 24 11.875 24C12.244 24 12.5881 23.8721 12.8782 23.6512C13.1608 23.436 13.4818 23.25 13.8369 23.25V23.25C14.1461 23.25 14.3916 23.5108 14.3689 23.8191C14.2431 25.5312 14.0274 27.2182 13.7267 28.8756C15.2446 29.0657 16.7845 29.1848 18.3431 29.2297C18.7042 29.2401 19.0001 28.9483 19.0001 28.587V28.587C19.0001 28.2318 18.8141 27.9108 18.5989 27.6282C18.378 27.3381 18.2501 26.994 18.2501 26.625C18.2501 25.5895 19.2575 24.75 20.5001 24.75C21.7428 24.75 22.7501 25.5895 22.7501 26.625C22.7501 26.994 22.6222 27.3381 22.4013 27.6282C22.1862 27.9108 22.0001 28.2318 22.0001 28.587V28.587C22.0001 28.9199 22.2781 29.1857 22.6105 29.1661C24.4492 29.0581 26.2602 28.8465 28.0376 28.5372C28.3071 26.9889 28.5023 25.4152 28.6196 23.8198C28.6423 23.5111 28.3966 23.25 28.0871 23.25V23.25C27.7319 23.25 27.4109 23.4361 27.1283 23.6513C26.8382 23.8721 26.4941 24 26.1251 24C25.0896 24 24.2501 22.9927 24.2501 21.75C24.2501 20.5074 25.0896 19.5 26.1251 19.5C26.4941 19.5 26.8382 19.628 27.1283 19.8488C27.4109 20.064 27.7319 20.25 28.0871 20.25V20.25C28.4534 20.25 28.7508 19.953 28.7459 19.5867C28.7213 17.7741 28.5963 15.9857 28.3761 14.227C26.4903 14.5692 24.566 14.8012 22.6103 14.9161C22.278 14.9356 22 14.6698 22 14.3369V14.3369Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default PuzzleIcon;
