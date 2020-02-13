import styled from "styled-components"; 
import {sizes} from "../utils/constants";

// by no means exhaustive.  Add more as necessary.

export const Paragraph = styled.p`
	color: ${props => props.paraColor};
`;

export const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: flex-start;
	width: 100%;
	height: auto;
`;

export const Container = styled.div`
	display: inline-flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-start;
	width: 300px;
`;

export const List = styled.ul`
	list-style-type: ${props => props.bullets ? 'disc' : 'none'};
	margin: 0;
	padding: 0;
	display: inline-block;
`;

export const ListItem = styled.li`
	padding: ${sizes.xsmall} 0; 
`;

export const Header1 = styled.h1`
	color: ${props => props.paraColor};
`;

export const Header2 = styled.h2`
	color: ${props => props.paraColor};
`;

export const Header3 = styled.h3`
	color: ${props => props.paraColor};
`;

export const Header4 = styled.h4`
	color: ${props => props.paraColor};
`;

export const Header5 = styled.h5`
	color: ${props => props.paraColor};
`;

export const Header6 = styled.h6`
	color: ${props => props.paraColor};
`;