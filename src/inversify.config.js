import {Container} from 'inversify';
import TYPES from './types';
import rollDice from './lib/rollDice';

const container = new Container();

container.bind(TYPES.iRollDice).toConstantValue(rollDice);

export default container;
