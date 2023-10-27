import Svg, {Path, SvgProps} from 'react-native-svg';
export const Search = (props: SvgProps) => (
  <Svg width={26} height={26} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      d="M12 3c-7.412 0-9 1.588-9 9s1.588 9 9 9 9-1.588 9-9-1.588-9-9-9Zm-.5 4.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z"
      clipRule="evenodd"
      opacity={0.1}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 6a5 5 0 0 1 5 5m.659 5.655L21 21m-2-10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
    />
  </Svg>
);
