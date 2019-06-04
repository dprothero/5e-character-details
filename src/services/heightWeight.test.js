const { convertInchesToFriendly, getHeightWeight, races } = require('./heightWeight');

function getFakeRoller(desiredTotal) {
  return {
    roll: () => {
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
      expect(convertInchesToFriendly(60)).toEqual(`5'`);
      expect(convertInchesToFriendly(66)).toEqual(`5' 6"`);
    });
  });

  describe('getHeightWeight', () => {
    races.forEach((race, i) => {
      it(`should calculate weight/height for a ${race.name}`, () => {
        const result = getHeightWeight(i, getFakeRoller(1));
        expect(result.height).toEqual(race.baseHeight + 1);
        expect(result.friendlyHeight).toEqual(convertInchesToFriendly(race.baseHeight + 1));
        expect(result.weight).toEqual(race.baseWeight + 1);
      });
    });
  });
});
