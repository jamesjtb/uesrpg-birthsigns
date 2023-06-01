import React from 'react';
import ContentCard from '../components/ContentCard';
import { Typography, Grid } from '@mui/material';
import BirthsignCard from '../components/BirthsignCard';

interface birthsignArchetype {
    imgSrc: string;
    displayName: string;
    key: string;
    birthsigns: string[];
}

const birthsignArchetypes: birthsignArchetype[] = [
    {
        imgSrc: '/images/warrior.jpg',
        displayName: 'The Warrior',
        key: 'warrior',
        birthsigns: ['warrior', 'lady', 'steed', 'lord']
    },
    {
        imgSrc: '/images/mage.jpg',
        displayName: 'The Mage',
        key: 'mage',
        birthsigns: ['mage', 'apprentice', 'atronach', 'ritual']
    },
    {
        imgSrc: '/images/thief.jpg',
        displayName: 'The Thief',
        key: 'thief',
        birthsigns: ['thief', 'lover', 'shadow', 'tower']
    }
]

const SelectBirthsign = () => {
    return (
        <ContentCard>
            <Typography color='primary' variant='h2'>Choose Your Birthsign Archetype</Typography>
            <Grid container spacing={2}>
                {birthsignArchetypes.map(bsa => (
                    <Grid item xs={4}>
                        <BirthsignCard onClick={() => alert(`${bsa.displayName} selected`)} sx={{maxWidth: '100%', minHeight: '100%'}}>
                            <img style={{maxWidth: '100%'}} src={bsa.imgSrc} alt={bsa.displayName} />
                            <Typography variant="h3">{bsa.displayName}</Typography>
                        </BirthsignCard>
                    </Grid>
                ))}
            </Grid>
        </ContentCard>
    )
};

export default SelectBirthsign;