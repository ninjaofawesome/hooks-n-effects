import styled from "styled-components"; 
import { sizes } from '../../utils/constants';

export const StyledButton = styled.button`
	background-color: ${props => props.buttonColor};
	color: ${props => props.textColor};
	padding: ${sizes.xsmall} ${sizes.small};
	border: 0;
	border-radius: ${sizes.xsmall};
`;