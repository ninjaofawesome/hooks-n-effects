import React from 'react';
import Button from '../../Components/Button/Button';
import CodeBlock from '../../Components/CodeBlock/CodeBlock';
import { colors } from '../../utils/constants';
import { AppWrapper } from './App.styles.js';

const App = () => (
    <AppWrapper>
      <h1>Hooks n' Effects</h1>
      <CodeBlock>
        <Button 
          textColor={colors.white}
          buttonColor={colors.ltNavy}
          onClick={() => console.log('hello world')}
          text="hello world"
        / >  
      </CodeBlock>
    </AppWrapper>
);

export default App;
