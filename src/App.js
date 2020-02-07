import React from 'react';
import Button from './Components/Button/Button';
import { colors } from './utils/constants';
import './App.css';

const App = () => (
    <div className="App">
      <h1>Hooks n' Effects</h1>
      <Button 
        textColor={colors.white}
        buttonColor={colors.ltNavy}
        onClick={() => console.log('hello world')}
        text="hello world"
      / >  
    </div>
);

export default App;
