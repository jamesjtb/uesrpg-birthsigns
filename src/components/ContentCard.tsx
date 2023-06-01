import React, { PropsWithChildren } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const ContentCard = (props: PropsWithChildren) => {
    return (
        <Card sx={{ width: '70%', margin: 'auto', mt: '5%', textAlign: 'center', pt: '40px', pb: '40px' }}>
            <CardContent>
                {props.children}                
            </CardContent>
        </Card>
    );
};

export default ContentCard;