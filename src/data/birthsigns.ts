import apprenticeImg from '../assets/birthsign-images/apprentice.jpg';
import atronachImg from '../assets/birthsign-images/atronach.jpg';
import ladyImg from '../assets/birthsign-images/lady.jpg';
import lordImg from '../assets/birthsign-images/lord.jpg';
import loverImg from '../assets/birthsign-images/lover.jpg';
import mageImg from '../assets/birthsign-images/mage.jpg';
import ritualImg from '../assets/birthsign-images/ritual.jpg';
import shadowImg from '../assets/birthsign-images/shadow.jpg';
import steedImg from '../assets/birthsign-images/steed.jpg';
import thiefImg from '../assets/birthsign-images/thief.jpg';
import towerImg from '../assets/birthsign-images/tower.jpg';
import warriorImg from '../assets/birthsign-images/warrior.jpg';

export interface Birthsign {
    img: string;
    displayName: string;
    key: string;
    description: string;
    rule: string;
    starCursedRule: string;
}

const birthsigns: Birthsign[] = [
    {
        key: 'apprentice',
        displayName: 'The Apprentice',
        img: apprenticeImg,
        description:
            '“The Apprentice’s Season is Sun’s Height. Those born under the sign of the apprentice have a special affinity for magick of all kinds, but are more vulnerable to magick as well.”',
        rule: 'Those born under the sign of the Apprentice gain the Power Well(25) trait and the Weakness(mage, 2) trait',
        starCursedRule: 'Those born under the Star-Cursed sign of the Apprentice gain the Power Well(50) trait and the Weakness(magic, 3) trait.',
    },
    {
        key: 'atronach',
        displayName: 'The Atronach',
        img: atronachImg,
        description:
            '“The Atronach (often called the Golem) is one of the Mage’s Charges. Its season is Sun’s Dusk. Those born under this sign are natural sorcerers with deep reserves of magicka, but they cannot generate magicka of their own.”',
        rule: 'Those born under the sign of the Atronach gain the Power Well (50) trait, the Spell Absorption (5) trait, and the Stunted Magicka trait.',
        starCursedRule:
            'Those born under the Star-Cursed sign of the Atronach gain the Power Well (75) trait, the Spell Absorption (5) trait, and the Stunted Magicka trait. Additionally, they lose 5 Agility or Endurance (pick one).',
    },
    {
        key: 'lady',
        displayName: 'The Lady',
        img: ladyImg,
        description:
            '"The Lady is one of the Warrior’s Charges and her Season is Heartfire. Those born under the sign of the Lady are kind and tolerant.”',
        rule: 'Those born under the sign of the Lady gain 5 Personality.',
        starCursedRule: 'Those born under Star-Cursed the sign of the Lady gain 5 Personality. Additionally, they gain 5 Endurance and lose 5 Strength.',
    },
    {
        key: 'lord',
        displayName: 'The Lord',
        img: lordImg,
        description:
            '“The Lord’s Season is First Seed and he oversees all of Tamriel during the planting. Those born under the sign of the Lord are stronger and healthier than those born under other signs.”',
        rule: 'Those born under the sign of the Lord double their natural healing rate.',
        starCursedRule: 'Those born under the Star-Cursed sign of the Lord double their natural healing rate. Additionally, they gain 5 Endurance and the Weakness (fire, 2) trait.',
    },
    {
        key: 'lover',
        displayName: 'The Lover',
        img: loverImg,
        description:
            '“The Lover is one of the Thief’s Charges and her season is Sun’s Dawn. Those born under the sign of the Lover are graceful and passionate.”',
        rule: 'Those born under the sign of the Lover gain 5 Agility.',
        starCursedRule:
            'Those born under the Star-Cursed sign of the Lover gain 5 Agility. Additionally, they gain 5 Personality and lose 5 Willpower or Strength (choose one).',
    },
    {
        key: 'mage',
        displayName: 'The Mage',
        img: mageImg,
        description: '“The Mage is a Guardian Constellation whose Season is Rain’s Hand when magicka was first used by men. His Charges are the Apprentice, the Golem, and the Ritual. Those born under the Mage have more magicka and talent for all kinds of spellcasting, but are often arrogant and absent-minded.”',
        rule: 'Those born under the sign of the Mage gain the Power Well (10) trait.',
        starCursedRule: 'Those born under the Star-Cursed sign of the Mage gain Power Well (25) and lose 5 Perception, Strength, or Personality (pick one).',
    },
    {
        key: 'ritual',
        displayName: 'The Ritual',
        img: ritualImg,
        description: '“The Ritual is one of the Mage’s Charges and its Season is Morning Star. Those born under this sign have a variety of abilities depending on the aspects of the moons and the Divines.”',
        rule: 'Those born under the sign of the Ritual may choose to gain one of the following powers at the beginning of each day: Blessed Touch, Blessed Word, Mara’s Gift. They have this power until their next long rest, when they can make another choice if they wish.',
        starCursedRule: 'Those born under the Star-Cursed sign of the Ritual permanently gain the following powers: Blessed Touch, Blessed Word, Mara’s Gift. Additionally, they lose 5 luck.',
    },
    {
        key: 'shadow',
        displayName: 'The Shadow',
        img: shadowImg,
        description: '“The Shadow’s Season is Second Seed. The Shadow grants those born under her sign the ability to hide in shadows.”',
        rule: 'Those born under the sign of the Shadow gain the Moonshadow power.',
        starCursedRule: 'Those born under the Star-Cursed sign of the Shadow gain the Moonshadow power. Additionally, they gain 5 Perception and lose 5 Personality or Strength (pick one).',
    },
    {
        key: 'steed',
        displayName: 'The Steed',
        img: steedImg,
        description: '“The Steed is one of the Warrior’s Charges, and her Season is Mid Year. Those born under the sign of the Steed are impatient and always hurrying from one place to another.”',
        rule: 'Those born under the sign of the Steed increase Speed by 2.',
        starCursedRule: 'Those born under the Star-Cursed sign of the Steed increase Speed by 2. Additionally, they gain 5 Agility and lose 5 Willpower or Perception (pick one).',
    },
    {
        key: 'thief',
        displayName: 'The Thief',
        img: thiefImg,
        description: '“The Thief is the last Guardian Constellation, and her Season is the darkest month of Evening Star. Her Charges are the Lover, the Shadow, and the Tower. Those born under the sign of the Thief are not typically thieves, though they take risks more often and only rarely come to harm. They will run out of luck eventually, however, and rarely live as long as those born under other signs.”',
        rule: 'Those born under the sign of the Thief roll an extra lucky number that they never lose regardless of their Luck score. Characters who roll The Thief naturally can choose the star-cursed version of The Thief instead.',
        starCursedRule: 'Those born under the Star-Cursed sign of the Thief roll an extra lucky number that they never lose regardless of their Luck score. Additionally, they replace their rolled Luck score with 50, gain the Akaviri DangerSense power, and the Running Out of Luck trait. Characters cannot spend Luck to choose this birth-sign. Instead, it is available as a choice for any character who naturally rolled the Thief sign.',
    },
    {
        key: 'tower',
        displayName: 'The Tower',
        img: towerImg,
        description: '“The Tower is one of the Thief’s Charges and its Season is Frostfall. Those born under the sign of the Tower have a knack for finding gold and can open locks of all kinds.”',
        rule: 'Those born under the sign of the Tower gain the Treasure Seeker power and 5 Perception.',
        starCursedRule: 'Those born under the Star-Cursed sign of the Tower gain the Treasure Seeker power and 5 Perception. Additionally, they gain 5 Agility and lose 5 Willpower or Strength (pick one).',
    },
    {
        key: 'warrior',
        displayName: 'The Warrior',
        img: warriorImg,
        description: '“The Warrior is the first Guardian Constellation and he protects his charges during their Seasons. The Warrior’s own season is Last Seed when his Strength is needed for the harvest. His Charges are the Lady, the Steed, and the Lord. Those born under the sign of the Warrior are skilled with weapons of all kinds, but prone to short tempers.”',
        rule: 'Those born under the sign of the Warrior increase their SP maximum by 1.',
        starCursedRule: 'Those born under the Star-Cursed sign of the Warrior increase their SP maximum by 1, gain 5 Strength, and lose 5 Willpower.',
    },
];

export default birthsigns;
