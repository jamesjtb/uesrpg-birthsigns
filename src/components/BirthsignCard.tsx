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
            sx={{ cursor: 'pointer', width: 'fit-content', ...props.sx }}
        >
            <CardContent>
                {props.children}
            </CardContent>
        </Card>
    );
};

export default BirthsignCard;