import React from 'react';
import CodeBlock from '../../CodeBlock/CodeBlock';
import UseEffectList from '../../UseEffectList/UseEffectList';
import FetchStateList from '../../FetchStateList/FetchStateList';
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
		        <Paragraph>This is an example of fetching data with the useEffect hook.  In this case, the listData is being set with the effect setListData which is equivalent to the this setState function.</Paragraph>
		        <UseEffectList />
		    </Container>
		    <Container>
		        <Paragraph>Here's how it works under the hood.</Paragraph>
		        <CodeBlock 
		            children={`
		            	const UseEffect = () => {
		                	const [listData, setListData] = useState([]);

		                	useEffect(() => {
		                		fetch('https://api.adviceslip.com/advice')
		                			.then(response => response.json())
		                			.then(data => setListData(data));

		                	}, []);

		                	const data = [listData];
		                	return (
		                		<div>{data[0].slip !== undefined ? data[0].slip.advice : ''}</div>
		                	);
		                };  
		            `}
		        />
		    </Container>
		</Wrapper>
		<Wrapper>
		    <Container>
		        <Header2 paraColor={colors.black}>Old School Example:  Fetched List.</Header2>
		        <Paragraph>This is an example of how you would do the same thing, but without the useEffect hook. As mentioned above, this uses the setState function, once the data has been fetched on mount.  To also account for an empty state, another method was added for a loading state as the data will not render until the components are fetched.</Paragraph>
		        <FetchStateList />
		    </Container>
		    <Container>
		        <Paragraph>Here's how it works under the hood.</Paragraph>
		        <CodeBlock 
		            children={`
			            class FetchStateList extends Component {
			            	constructor() {
			            		super();
			            		this.state={
			            			listData: {}
			            		};

			            		this.renderData = this.renderData.bind(this);
			            	}

			            	componentDidMount() {
			            		fetch('https://api.adviceslip.com/advice')
			            			.then(response => response.json())
			            			.then(data => this.setState({listData: data}));
			            	}

			            	renderData() {
			            		const dataObj = this.state.listData;
			            		return Object.keys(dataObj).length === 0 && dataObj.constructor === Object ? 'loading' : dataObj.slip.advice;
			            	}

			            	render() {		
			            		return (
			            			<div>{this.renderData()}</div>
			            		);
			            	}
			            };
		            `}
		        />
		    </Container>
		</Wrapper>
	</UseEffectWrapper>
);

export default UseEffectRow;