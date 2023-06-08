import { DiceRoll } from '@dice-roller/rpg-dice-roller';
import IDice from '../interfaces/IDice';
import { injectable } from 'inversify';

@injectable()
class Dice implements IDice {
    roll(diceNotation: string): number {
        const diceRoller = new DiceRoll(diceNotation);

        return diceRoller.total;
    }
}

export default Dice;
