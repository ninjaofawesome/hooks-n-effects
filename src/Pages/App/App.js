import React from 'react';
import UseStateRow from '../../Components/Rows/UseStateRow/UseStateRow';
import UseEffectRow from '../../Components/Rows/UseEffectRow/UseEffectRow';
import AsyncRow from '../../Components/Rows/AsyncRow/AsyncRow';
import { Header1, Paragraph } from '../../Components/UtilityComponents';
import { colors, sizes } from '../../utils/constants';
import { AppWrapper } from './App.styles.js';

const App = () => (
    <AppWrapper>
        <Header1 paraColor={colors.black} fontSize={sizes.xlarge}>Hooks n Effects</Header1> 
        <Paragraph>A cheat sheet of various hooks and effects for reference on the fly. </Paragraph>       
        <UseStateRow />
        <UseEffectRow />
        <AsyncRow />
    </AppWrapper>
);

export default App;
