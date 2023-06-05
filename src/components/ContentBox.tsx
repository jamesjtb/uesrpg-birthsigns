import React, { PropsWithChildren } from 'react';
import Box from '@mui/material/Box';

const ContentCard = (props: PropsWithChildren) => {
    return (
        <Box style={{ width: '70%', margin: 'auto', marginTop: '3vh', marginBottom: '3vh', textAlign: 'center' }}>
            {props.children}
        </Box>
    );
};

export default ContentCard;
