import { Grid, Modal, Typography } from '@mui/material';
import { useInjection } from 'inversify-react';
import React, { useState } from 'react';
import BirthsignCard from '../components/BirthsignCard';
import ContentBox from '../components/ContentBox';
import birthsignArchetypes, { BirthsignArchetype } from '../data/birthsign-archetypes';
import birthsigns, { Birthsign } from '../data/birthsigns';
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

    const [selectedArchetypeCard, setSelectedArchetypeCard] = useState<EventTarget | null>(null);

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

    const onSelectArchetype = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        birthsignArchetype: BirthsignArchetype
    ) => {
        rollForBirthsign(birthsignArchetype);
        setSelectedArchetypeCard(e.target);
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
                                onClick={e => onSelectArchetype(e, bsa)}
                                birthsign={{
                                    description: bsa.description,
                                    displayName: bsa.displayName,
                                    img: bsa.img,
                                    key: bsa.key,
                                }}
                                sx={{ maxWidth: '100%', minHeight: '100%' }}
                            />
                        </Grid>
                    ))}
                </Grid>
                {rolledBirthsign.birthsign ? (
                    <Modal
                        open={true}
                        onClose={() =>
                            setRolledBirthsign({ birthsign: undefined, starCursed: false })
                        }
                    >
                        <BirthsignCard
                            starCursed={rolledBirthsign.starCursed}
                            birthsign={rolledBirthsign.birthsign}
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: 'fit-content',
                                maxWidth: '500px',
                                maxHeight: '1000px',
                            }}
                        />
                    </Modal>
                ) : null}
            </ContentBox>
        </>
    );
};

export default SelectBirthsign;
