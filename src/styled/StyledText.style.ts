import styled from "styled-components";
import tw from "twin.macro";
import TextSizes from "../constants/ui/TextSizes";
import TextSize from "../models/TextSize.types";

const StyledText = styled.div<TextSize>`
  & {
    h1 {
      ${({ size }) => size === TextSizes.large && tw`text-8xl`}
      ${({ size }) => size === TextSizes.medium && tw`text-4xl`}
      ${({ size }) => size === TextSizes.small && tw`text-2xl`}
    }
  }
`;

export default StyledText;
