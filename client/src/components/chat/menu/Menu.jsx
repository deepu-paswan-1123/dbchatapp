import React, { useState } from 'react';
import Header from './Header';
import Search from './Search';
import { styled,Box, StepContext } from '@mui/material';
import Conversation from './Conversation';


const Menu = () => {
    const [text,setText]=useState('');
    return (
        <Box>
            <Header/>
            <Search setText={setText}/>
            <Conversation text={text}/>
        </Box>
    );
}

export default Menu;
