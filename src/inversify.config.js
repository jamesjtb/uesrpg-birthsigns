import {Container} from 'inversify';
import TYPES from './types';
import rollDice from './lib/rollDice';

const container = new Container();

container.bind(TYPES.rollDice).to(rollDice);

export default container;
