import styled from "styled-components";
import { 
	colors, 
	sizes,
	device,  
} from '../../utils/constants'; 

export const CodeBlockWrapper = styled.pre`
	display: block;
`;

export const CodeBlockCode = styled.code`
	display: block;
	background-color: ${colors.dkNavy};
	color: ${colors.borderGray};
	padding: ${sizes.xsmall};
	width: 300px;
	height: auto;
	border-radius: ${sizes.xsmall}
	overflow: hidden;
	overflow-x: auto;
	@media ${device.desktopL} {
	  width: 750px;
	}
	@media ${device.desktop} {
	  width: 750px;
	}
	@media ${device.laptopL} { 
	  width: 600px;
	}

	@media ${device.laptop} { 
	  width: 500px;
	}

	@media ${device.tablet} { 
	  width: 450px;
	}
`;

