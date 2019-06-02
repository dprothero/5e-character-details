import { DiceRoller } from 'rpg-dice-roller';
import races from './races.json';

function convertInchesToFriendly(heightInches) {
  const inches = heightInches % 12 ? ` ${heightInches % 12}"` : '';
  return `${Math.floor(heightInches / 12)}'${inches}`;
}

function getHeightWeight(selectedRace, injectedRoller) {
  const roller = injectedRoller || new DiceRoller();
  const race = races[selectedRace];

  const heightModifier = roller.roll(race.heightModifier).total;
  const newHeight = heightModifier + race.baseHeight;
  const weightMultiplier = roller.roll(race.weightMultiplier).total;
  const newWeight = heightModifier * weightMultiplier + race.baseWeight;

  return {
    height: newHeight,
    friendlyHeight: convertInchesToFriendly(newHeight),
    weight: newWeight
  };
}

module.exports = {
  convertInchesToFriendly,
  getHeightWeight,
  races
};
