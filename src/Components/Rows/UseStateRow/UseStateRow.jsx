import React from 'react';
import CodeBlock from '../../CodeBlock/CodeBlock';
import UseStateButton from '../../UseStateButton/UseStateButton';
import StatefulButton from '../../StatefulButton/StatefulButton';
import {
    Header1,
    Header2, 
    Wrapper,
    Container, 
    Paragraph 
} from '../../UtilityComponents';
import { UseStateWrapper } from './UseStateRow.styles';
import { colors } from '../../../utils/constants';

const UseStateRow = () => (
	<UseStateWrapper>
		<Wrapper>
		    <Container>
		        <Header2 paraColor={colors.black}>useState Example:  Button State.</Header2>
		        <Paragraph>This is an example of a button that uses the useState hook.  It serves the same purpose as setState to store state locally.  Try it yourself by clicking the button!</Paragraph>
		        <UseStateButton />
		    </Container>
		    <Container>
		        <Paragraph>Here's how it works under the hood.</Paragraph>
		        <CodeBlock 
		            children={`
		                /* useState is the equivalent of setting the state in a class.  It stores state within the component. */
		                import React, { useState } from 'react';

		                const UseStateButton = () => {
		                    /* These are destructured props.  Note the first index is the text to change, while the second one is the function to set the copy.  On load, the copy will be what is in useState. */
		                    const [copy, setCopy] = useState('Click Here');
		                    
		                    return (
		                        <button onClick={() => setCopy('Clicked!')}>
		                        {copy}
		                        </button>
		                    );
		                };
		             `}
		        />
		    </Container>
		</Wrapper>
		<Wrapper>
		    <Container>
		        <Header2 paraColor={colors.black}>Local State Example:  Button State.</Header2>
		        <Paragraph>This is an example of a button that uses the state locally, for reference.  On click, the state is set in the constructor.  Click the button and see how it works! </Paragraph>
		        <StatefulButton />
		    </Container>
		    <Container>
		        <Paragraph>Here's how it works under the hood.</Paragraph>
		        <CodeBlock 
		            children={`
		                /* This is the exact same thing as shown above with useState.  On click the copy will be set to the new string. */
		                class StatefulButton extends Component {
		                    constructor() {
		                        super();

		                        this.state = {
		                            copy: 'Click Here'
		                        }

		                        this.setCopy = this.setCopy.bind(this);
		                    }

		                    setCopy() {
		                        this.setState({ copy: 'Clicked!'})
		                    }

		                    render() {
		                        return(
		                            <Button 
		                                onClick={() => this.setCopy('Clicked!')}
		                                text={this.state.copy}
		                                buttonColor={colors.green}
		                            />
		                        );
		                    }
		                };
		             `}
		        />
		    </Container>
		</Wrapper>
	</UseStateWrapper>
);

export default UseStateRow;