import warriorImg from '../assets/birthsign-images/warrior.jpg';
import mageImg from '../assets/birthsign-images/mage.jpg';
import thiefImg from '../assets/birthsign-images/thief.jpg';

export interface BirthsignArchetype {
    img: string;
    displayName: string;
    key: string;
    description: string;
    birthsignRollTable: { [roll: number]: string };
}

const birthsignArchetypes: BirthsignArchetype[] = [
    {
        img: warriorImg,
        displayName: 'Warrior',
        key: 'warrior',
        description:
            '“The Warrior is the first Guardian Constellation and he protects his charges during their Seasons. The Warrior’s own season is Last Seed when his Strength is needed for the harvest. His Charges are the Lady, the Steed, and the Lord. Those born under the sign of the Warrior are skilled with weapons of all kinds, but prone to short tempers.”',
        birthsignRollTable: {
            1: 'warrior',
            2: 'lady',
            3: 'steed',
            4: 'lord',
        },
    },
    {
        img: thiefImg,
        displayName: 'Thief',
        key: 'thief',
        description:
            '“The Thief is the last Guardian Constellation, and her Season is the darkest month of Evening Star. Her Charges are the Lover, the Shadow, and the Tower. Those born under the sign of the Thief are not typically thieves, though they take risks more often and only rarely come to harm. They will run out of luck eventually, however, and rarely live as long as those born under other signs.”',
        birthsignRollTable: {
            1: 'thief',
            2: 'lover',
            3: 'shadow',
            4: 'tower',
        },
    },
    {
        img: mageImg,
        displayName: 'Mage',
        key: 'mage',
        description:
            '“The Mage is a Guardian Constellation whose Season is Rain’s Hand when magicka was first used by men. His Charges are the Apprentice, the Golem, and the Ritual. Those born under the Mage have more magicka and talent for all kinds of spellcasting, but are often arrogant and absent-minded.”',
        birthsignRollTable: {
            1: 'mage',
            2: 'apprentice',
            3: 'atronach',
            4: 'ritual',
        },
    },
];

export default birthsignArchetypes;
