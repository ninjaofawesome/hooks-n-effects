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
	margin-top: 0;
	@media ${device.desktopL} {
	  width: 750px;
	  margin-top: ${sizes.small};
	}
	@media ${device.desktop} {
	  width: 750px;
	  margin-top: ${sizes.small};
	}
	@media ${device.laptopL} { 
	  width: 600px;
	  margin-top: ${sizes.small};
	}

	@media ${device.laptop} { 
	  width: 500px;
	  margin-top: ${sizes.small};
	}

	@media ${device.tablet} { 
	  width: 450px;
	  margin-top: ${sizes.small};
	}
`;

