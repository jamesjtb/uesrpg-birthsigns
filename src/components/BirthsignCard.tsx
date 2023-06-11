import { SxProps, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import React, { MouseEventHandler } from 'react';
import { Birthsign } from '../data/birthsigns';

interface BirthsignCardProps {
    onClick?: MouseEventHandler<HTMLDivElement>;
    birthsign: Birthsign;
    starCursed?: boolean;
    sx?: SxProps;
}

const BirthsignCard = ({onClick, birthsign, starCursed, sx}: BirthsignCardProps) => {
    return (
        <Card
            elevation={9}
            onClick={onClick}
            sx={sx ? sx : {
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
                maxWidth: '500px',
                maxHeight: '1000px',
                minHeight: '100%'
            }}
        >
            <CardMedia component="img" image={birthsign.img} alt={birthsign.displayName} />
            <CardContent>
                <Typography variant="h3" color="primary">
                    The {birthsign.displayName}
                </Typography>
                <Divider />
            </CardContent>
            <CardContent>
                <Typography variant="body2" color="initial">
                    {birthsign.description}
                </Typography>
            </CardContent>
            {birthsign.rule || birthsign.starCursedRule ? (
                <CardContent>
                    <Divider />
                    <Typography variant="body1" color="initial">
                        {starCursed ? birthsign.starCursedRule : birthsign.rule}
                    </Typography>
                </CardContent>
            ) : null}
        </Card>
    );
};

export default BirthsignCard;
