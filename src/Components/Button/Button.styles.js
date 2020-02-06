import styled from "styled-components"; 
import { colors, sizes } from '../../utils/constants';

export const StyledButton = styled.button`
	backgroundColor: ${props.buttonColor => props.buttonColor};
	color: ${props.textColor => props.textColor ?  props.textColor : colors.white};
	padding: ${sizes.xsmall} ${sizes.small};
`;