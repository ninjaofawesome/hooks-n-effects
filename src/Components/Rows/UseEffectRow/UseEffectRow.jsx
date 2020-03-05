import React from 'react';
import CodeBlock from '../../CodeBlock/CodeBlock';
import {
    Header2, 
    Wrapper,
    Container, 
    Paragraph 
} from '../../UtilityComponents';
import { UseEffectWrapper } from './UseEffectRow.styles';
import { colors } from '../../../utils/constants';

const UseEffectRow = () => (
	<UseEffectWrapper>
		<Wrapper>
		    <Container>
		        <Header2 paraColor={colors.black}>useEffect Example:  A fetched list.</Header2>
		        <Paragraph>This is an example of fetching data with the useEffect hook.</Paragraph>
		    </Container>
		    <Container>
		        <Paragraph>Here's how it works under the hood.</Paragraph>
		        <CodeBlock 
		            children={`
		                /* More info TK */  
		             `}
		        />
		    </Container>
		</Wrapper>
		<Wrapper>
		    <Container>
		        <Header2 paraColor={colors.black}>Old School Example:  Fetched List.</Header2>
		        <Paragraph>This is an example of how you would do the same thing, but without the useEffect hook.</Paragraph>
		    </Container>
		    <Container>
		        <Paragraph>Here's how it works under the hood.</Paragraph>
		        <CodeBlock 
		            children={`
		            /* More info TK */
		             `}
		        />
		    </Container>
		</Wrapper>
	</UseEffectWrapper>
);

export default UseEffectRow;