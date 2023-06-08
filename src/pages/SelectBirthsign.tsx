import React, { useState } from 'react';
import ContentBox from '../components/ContentBox';
import { Typography, Grid } from '@mui/material';
import BirthsignCard from '../components/BirthsignCard';
import birthsignArchetypes, { BirthsignArchetype } from '../data/birthsign-archetypes';
import birthsigns, { Birthsign } from '../data/birthsigns';
import { useInjection } from 'inversify-react';
import iRollDice from '../interfaces/iRollDice';
import TYPES from '../types';

interface RolledBirthsignState {
    birthsign?: Birthsign;
    starCursed: boolean;
}

const SelectBirthsign = () => {
    const [rolledBirthsign, setRolledBirthsign] = useState<RolledBirthsignState>({
        birthsign: undefined,
        starCursed: false,
    });

    const rollDice: iRollDice = useInjection(TYPES.iRollDice);
    
    const rollForBirthsign = (archetype: BirthsignArchetype, starCursed = false): void => {

        const rollResult = rollDice('1d5');

        if (rollResult === 5) {
            console.log(`Rolled a ${rollResult}, rerolling for a Star-Cursed sign.`);
            return rollForBirthsign(archetype, true);
        }

        const birthsign = birthsigns.find(b => b.key === archetype.birthsignRollTable[rollResult]);
        if (!birthsign) {
            throw new Error(
                `Something has gone horribly wrong. There was no birthsign found on the ${archetype.displayName} archetype with the roll ${rollResult}`
            );
        }
        setRolledBirthsign({
            birthsign,
            starCursed,
        });
    };

    return (
        <>
            <ContentBox>
                <Typography variant="h2" color="white">
                    Choose Your Birthsign Archetype
                </Typography>
                <Grid container spacing={3}>
                    {birthsignArchetypes.map(bsa => (
                        <Grid item xs={12} lg={4} key={bsa.key}>
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
                {rolledBirthsign.birthsign ? (
                    <BirthsignCard
                        img={rolledBirthsign.birthsign.img}
                        displayName={
                            rolledBirthsign.starCursed
                                ? `Star-Cursed ${rolledBirthsign.birthsign.displayName}`
                                : rolledBirthsign.birthsign.displayName
                        }
                        description={rolledBirthsign.birthsign.description}
                        rule={
                            rolledBirthsign.starCursed
                                ? rolledBirthsign.birthsign.starCursedRule
                                : rolledBirthsign.birthsign.rule
                        }
                    />
                ) : null}
            </ContentBox>
        </>
    );
};

export default SelectBirthsign;
