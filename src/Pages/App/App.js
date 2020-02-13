import React from 'react';
import CodeBlock from '../../Components/CodeBlock/CodeBlock';
import UseStateButton from '../../Components/UseStateButton/UseStateButton';
import { 
  Wrapper,
  Container, 
  Paragraph 
} from '../../Components/UtilityComponents';
import { colors } from '../../utils/constants';
import { AppWrapper } from './App.styles.js';

const App = () => (
    <AppWrapper>
        <h1>Hooks n' Effects</h1>
        <Wrapper>
            <Container>
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
    </AppWrapper>
);

export default App;
