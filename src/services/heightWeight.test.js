const { convertInchesToFriendly, getHeightWeight, races } = require('./heightWeight');

function getFakeRoller(desiredTotal) {
  return {
    roll: expression => {
      return {
        total: desiredTotal
      };
    }
  };
}

describe('heightWeight', () => {
  describe('convertInchesToFriendly', () => {
    it('should convert inches to feet+inches', () => {
      expect(convertInchesToFriendly(48)).toEqual(`4'`);
      expect(convertInchesToFriendly(49)).toEqual(`4' 1"`);
    });
  });

  describe('getHeightWeight', () => {
    it('should generate height and weight for all races as expected', () => {
      races.forEach((race, i) => {
        const result = getHeightWeight(i, getFakeRoller(1));
        expect(result.height).toEqual(race.baseHeight + 1);
        expect(result.friendlyHeight).toEqual(convertInchesToFriendly(race.baseHeight + 1));
        expect(result.weight).toEqual(race.baseWeight + 1);
      });
    });
  });
});
