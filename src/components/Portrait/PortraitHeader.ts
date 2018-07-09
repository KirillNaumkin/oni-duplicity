import styled from "@/theme";

import { TextProps, text } from "@/theme";

export interface PortraitHeaderProps extends TextProps {}
const PortraitHeader = styled<TextProps, "h4">("h4")`
  ${text};
  width: 100%;
  box-sizing: border-box;
  margin-top: 0;
  margin-bottom: 2px;
  text-align: center;
`;
PortraitHeader.displayName = "PortraitHeader";
export default PortraitHeader;
