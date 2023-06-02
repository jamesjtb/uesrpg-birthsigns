import React from 'react';
import ContentCard from '../components/ContentCard';
import { Typography, Grid } from '@mui/material';
import BirthsignCard from '../components/BirthsignCard';
import birthsignArchetypes from '../data/birthsign-archetypes';

const SelectBirthsign = () => {
    return (
        <ContentCard>
            <Typography variant="h2">
                Choose Your Birthsign Archetype
            </Typography>
            <Grid container spacing={3}>
                {birthsignArchetypes.map(bsa => (
                    <Grid item xs={12} md={4} key={bsa.key}>
                        <BirthsignCard
                            img={bsa.img}
                            displayName={bsa.displayName}
                            description={bsa.description}
                            onClick={() => alert(`${bsa.displayName} selected`)}
                            sx={{ maxWidth: '100%', minHeight: '100%' }}
                        />
                    </Grid>
                ))}
            </Grid>
        </ContentCard>
    );
};

export default SelectBirthsign;
