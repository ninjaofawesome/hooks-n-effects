import React from 'react';
import CodeBlock from '../../CodeBlock/CodeBlock';
import {
    Header2, 
    Wrapper,
    Container, 
    Paragraph 
} from '../../UtilityComponents';
import { AsyncRowWrapper } from './AsyncRow.styles';
import { colors } from '../../../utils/constants';

const AsyncRow = () => (
	<AsyncRowWrapper>
		<Wrapper>
			<Header2 paraColor={colors.black}>One more thing on useEffect and Async operations.</Header2>
		</Wrapper>
		<Wrapper>
		    <Container>
		        <Paragraph>You cannot return a promise using an effect, only a function.  So with asynchronous actions, which always return a promise, the code will have to be refactored.  In the fetch example from above, here's how that might look.</Paragraph>
		    </Container>
		    <Container>
		        	<CodeBlock 
		            children={`
		            	const UseEffectList = () => {
		                	const [listData, setListData] = useState([]);

		                	async function getData() {
		                		// Promises, promises
		                		const response = await fetch('https://api.adviceslip.com/advice');
		                		const data = await response.json();
		                		setListData(data);

		                	}, []);

		                	useEffect(() => {
		                		//Hey Presto!
		                		getData();
		                	})

		       		        return (
		                		<div>{data[0].slip !== undefined ? data[0].slip.advice : ''}</div>
		                	);
		                };  
		            `}
		        />
		    </Container>
		</Wrapper>
	</AsyncRowWrapper>
);

export default AsyncRow;