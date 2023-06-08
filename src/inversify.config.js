import {Container} from 'inversify';
import TYPES from './types';
import DiceRoller from './lib/Dice';

const container = new Container();

container.bind(TYPES.IDiceRoller).to(DiceRoller);

export default container;
