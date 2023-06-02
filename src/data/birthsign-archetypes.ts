import warriorImg from '../assets/birthsign-images/warrior.jpg';
import mageImg from '../assets/birthsign-images/mage.jpg';
import thiefImg from '../assets/birthsign-images/thief.jpg';

export interface BirthsignArchetype {
    img: string;
    displayName: string;
    key: string;
    birthsigns: string[];
}

const birthsignArchetypes: BirthsignArchetype[] = [
    {
        img: warriorImg,
        displayName: 'The Warrior',
        key: 'warrior',
        birthsigns: ['warrior', 'lady', 'steed', 'lord'],
    },
    {
        img: mageImg,
        displayName: 'The Mage',
        key: 'mage',
        birthsigns: ['mage', 'apprentice', 'atronach', 'ritual'],
    },
    {
        img: thiefImg,
        displayName: 'The Thief',
        key: 'thief',
        birthsigns: ['thief', 'lover', 'shadow', 'tower'],
    },
];

export default birthsignArchetypes;
