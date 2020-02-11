import styled from "styled-components"; 
import { darken } from 'polished'
import { sizes } from '../../utils/constants';

export const StyledButton = styled.button`
	background-color: ${props => props.buttonColor};
	color: ${props => props.textColor};
	padding: ${sizes.xsmall} ${sizes.small};
	border: 0;
	border-radius: ${sizes.xsmall};
  	transition: 0.3s;

	&:hover {
		background-color: ${props => darken(0.2, props.buttonColor)};
	}
`;