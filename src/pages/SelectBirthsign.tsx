import React from 'react';
import ContentCard from '../components/ContentCard';
import { Typography, Grid } from '@mui/material';
import BirthsignCard from '../components/BirthsignCard';
import birthsignArchetypes, { BirthsignArchetype } from '../data/birthsign-archetypes';
import birthsigns, { Birthsign } from '../data/birthsigns';
import { DiceRoll } from '@dice-roller/rpg-dice-roller';

const SelectBirthsign = () => {
    const rollForBirthsign = (
        archetype: BirthsignArchetype,
        starCursed = false,
    ): void => {
        const roll = new DiceRoll('1d5');
        if (roll.total === 5) {
            console.log(`Rolled a ${roll.total}, rerolling for a Star-Cursed sign.`)
            return rollForBirthsign(archetype, true);
        }

        const birthsign = birthsigns.find(b => b.key === archetype.birthsignRollTable[roll.total]);
        if (!birthsign) {
            throw new Error(
                `Something has gone horribly wrong. There was no birthsign found on the ${archetype.displayName} archetype with the roll ${roll.total}`
            );
        }
        console.log(`Rolled The ${starCursed ? 'Star-Cursed ': ''}${birthsign.displayName} with a ${roll.total}`);

    };
    
    const renderBirthsign = (birthsign: Birthsign, starCursed: boolean) => {

    };

    return (
        <ContentCard>
            <Typography variant="h2">Choose Your Birthsign Archetype</Typography>
            <Grid container spacing={3}>
                {birthsignArchetypes.map(bsa => (
                    <Grid item xs={12} md={4} key={bsa.key}>
                        <BirthsignCard
                            img={bsa.img}
                            displayName={bsa.displayName}
                            description={bsa.description}
                            onClick={() => rollForBirthsign(bsa)}
                            sx={{ maxWidth: '100%', minHeight: '100%' }}
                        />
                    </Grid>
                ))}
            </Grid>
        </ContentCard>
    );
};

export default SelectBirthsign;
