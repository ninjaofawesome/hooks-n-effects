import React from 'react';
import Button from './Components/Button/Button';
import CodeBlock from './Components/CodeBlock/CodeBlock';
import { colors } from './utils/constants';
import './App.css';

const App = () => (
    <div className="App">
      <h1>Hooks n' Effects</h1>
      <CodeBlock>
        <Button 
          textColor={colors.white}
          buttonColor={colors.ltNavy}
          onClick={() => console.log('hello world')}
          text="hello world"
        / >  
      </CodeBlock>
    </div>
);

export default App;
