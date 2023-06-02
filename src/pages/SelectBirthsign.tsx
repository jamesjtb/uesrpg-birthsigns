import React from 'react';
import ContentCard from '../components/ContentCard';
import { Typography, Grid } from '@mui/material';
import BirthsignCard from '../components/BirthsignCard';
import warriorImg from '../assets/birthsign-images/warrior.jpg';
import mageImg from '../assets/birthsign-images/mage.jpg';
import thiefImg from '../assets/birthsign-images/thief.jpg';


interface birthsignArchetype {
    img: string;
    displayName: string;
    key: string;
    birthsigns: string[];
}

const birthsignArchetypes: birthsignArchetype[] = [
    {
        img: warriorImg,
        displayName: 'The Warrior',
        key: 'warrior',
        birthsigns: ['warrior', 'lady', 'steed', 'lord']
    },
    {
        img: mageImg,
        displayName: 'The Mage',
        key: 'mage',
        birthsigns: ['mage', 'apprentice', 'atronach', 'ritual']
    },
    {
        img: thiefImg,
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
                    <Grid item xs={12} md={4}>
                        <BirthsignCard
                            img={bsa.img}
                            displayName={bsa.displayName}
                            onClick={() => alert(`${bsa.displayName} selected`)} sx={{maxWidth: '100%', minHeight: '100%'}}
                        />
                    </Grid>
                ))}
            </Grid>
        </ContentCard>
    )
};

export default SelectBirthsign;