import { SxProps, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import React, { MouseEventHandler } from 'react';

interface BirthsignArchetypeProps {
    onClick: MouseEventHandler<HTMLDivElement>;
    img: string;
    displayName: string;
    description?: string;
    rule?: string;
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
                ...props.sx,
            }}
        >
            <CardMedia component="img" image={props.img} alt={props.displayName} />
            <CardContent>
                <Typography variant="h3" color="primary">
                    {props.displayName}
                </Typography>
                <Divider />
            </CardContent>
            <CardContent>
                <Typography variant="body2" color="initial">
                    {props.description}
                </Typography>
            </CardContent>
            {props.rule ? (
                <CardContent>
                    <Divider />
                    <Typography variant="body1" color="initial">
                        {props.rule}
                    </Typography>
                </CardContent>
            ) : null}
        </Card>
    );
};

export default BirthsignCard;
