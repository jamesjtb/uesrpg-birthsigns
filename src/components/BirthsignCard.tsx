import React, { MouseEventHandler, PropsWithChildren } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { SxProps, Typography } from '@mui/material';

interface BirthsignArchetypeProps {
    onClick: MouseEventHandler<HTMLDivElement>;
    img: string;
    displayName: string;
    sx?: SxProps;
}

const BirthsignCard = (props: BirthsignArchetypeProps) => {
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
            <CardMedia
                component="img"
                image={props.img}
                alt={props.displayName}
            /> 
            <CardContent>
                <Typography variant="h3">
                    {props.displayName}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default BirthsignCard;