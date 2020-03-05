import React from 'react';
import UseStateRow from '../../Components/Rows/UseStateRow/UseStateRow';
import UseEffectRow from '../../Components/Rows/UseEffectRow/UseEffectRow';
import { Header1 } from '../../Components/UtilityComponents';
import { colors } from '../../utils/constants';
import { AppWrapper } from './App.styles.js';

const App = () => (
    <AppWrapper>
        <Header1 paraColor={colors.black}>Hooks n Effects</Header1>        
        <UseStateRow />
        <UseEffectRow />
    </AppWrapper>
);

export default App;
