import Svg, {SvgProps, Path} from 'react-native-svg';
export const Complete = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 20 20" {...props}>
    <Path
      fill="#32a852"
      fillRule="evenodd"
      d="M3 10a7 7 0 0 1 9.307-6.611 1 1 0 0 0 .658-1.889 9 9 0 1 0 5.98 7.501 1 1 0 0 0-1.988.22A7 7 0 1 1 3 10zm14.75-5.338a1 1 0 0 0-1.5-1.324l-6.435 7.28-3.183-2.593a1 1 0 0 0-1.264 1.55l3.929 3.2a1 1 0 0 0 1.38-.113l7.072-8z"
    />
  </Svg>
);
