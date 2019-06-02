import { DiceRoller } from 'rpg-dice-roller';
import races from './races.json';

module.exports = (selectedRace, roller) => {
    const race = races[selectedRace];

    const roller = roller || new DiceRoller();
    const heightModifier = roller.roll(race.heightModifier).total;
    const newHeight = heightModifier + race.baseHeight;
    const weightMultiplier = roller.roll(race.weightMultiplier).total;
    const newWeight = (heightModifier * weightMultiplier) + race.baseWeight;

    const result = {
        height: newHeight,
        friendlyHeight: `${Math.floor(newHeight / 12)}' ${newHeight % 12}"`,
        weight: newWeight
    }

    return result;
}
