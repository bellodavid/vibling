import Svg, { Path, G, Polygon } from "react-native-svg";
const LeftArrow = (prop) => (
  <Svg
    width="300px"
    height="400px"  
    color="white"
    viewBox="100 48 48"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
    {...prop}
  >
    <Path d="M0 0h48v48H0z" fill="none" />
    <G id="Shopicon">
      <Polygon points="30.586,6.586 13.171,24 30.586,41.414 33.414,38.586 18.829,24 33.414,9.414  " />
    </G>
  </Svg>
);

export default LeftArrow;