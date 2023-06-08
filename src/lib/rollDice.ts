import { DiceRoll } from '@dice-roller/rpg-dice-roller';

function rollDice(diceNotation: string): number {
    const diceRoller = new DiceRoll(diceNotation);
    return diceRoller.total;
}

export default rollDice;
