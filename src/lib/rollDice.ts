import { DiceRoll } from '@dice-roller/rpg-dice-roller';
import iRollDice from '../interfaces/iRollDice';

const rollDice: iRollDice = (diceNotation: string) => {
    const diceRoll =  new DiceRoll(diceNotation);

    return diceRoll.total;
};

export default rollDice;
