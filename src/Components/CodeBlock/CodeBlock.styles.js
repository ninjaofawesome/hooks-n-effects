import styled from "styled-components";
import { colors, sizes } from '../../utils/constants'; 

export const CodeBlockWrapper = styled.pre`
	display: block;
`;

export const CodeBlockCode = styled.code`
	display: block;
	background-color: ${colors.dkNavy};
	padding: ${sizes.xsmall};
	width: 300px;
	height: auto;
	border-radius: ${sizes.xsmall}
`;

