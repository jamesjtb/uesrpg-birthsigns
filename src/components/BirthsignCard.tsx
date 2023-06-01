import React, { MouseEventHandler, PropsWithChildren } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { SxProps } from '@mui/material';

interface BirthsignArchetypeProps {
    onClick: MouseEventHandler<HTMLDivElement>;
    sx?: SxProps;
}

const BirthsignCard = (props: PropsWithChildren<BirthsignArchetypeProps>) => {
    return (
        <Card
            elevation={9}
            onClick={props.onClick}
            sx={{
                cursor: 'pointer',
                width: 'fit-content',
                transition: 'all .2s ease',
                '&:hover': {
                    transform: 'translate3D(0,-1px,0) scale(1.03)',
                    transition: 'all .2s ease',
                },
                '&:active': {
                    transform: 'translate3D(0,-1px,0) scale(1.03)',
                    transition: 'all .2s ease',
                },
                ...props.sx
            }}
        >
            <CardContent>
                {props.children}
            </CardContent>
        </Card>
    );
};

export default BirthsignCard;