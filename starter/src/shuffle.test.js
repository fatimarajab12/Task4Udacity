import { expect } from 'chai';
import { shuffle } from './shuffle.js';

describe('shuffle()', () => {
  it('should return a new array with same length', () => {
    const original = [1, 2, 3, 4, 5];
    const result = shuffle(original);

    expect(result).to.be.an('array');
    expect(result).to.have.lengthOf(original.length);
  });

  it('should contain the same elements', () => {
    const original = [1, 2, 3, 4, 5];
    const result = shuffle(original);

   
    expect(result.sort()).to.deep.equal(original.sort());
  });

  it('should not return the same reference', () => {
    const original = [1, 2, 3];
    const result = shuffle(original);

    expect(result).to.not.equal(original);
  });

  it('should eventually return different order (not always same as original)', () => {
    const original = [1, 2, 3, 4, 5];
    const trials = 10;
    let sameOrderCount = 0;

    for (let i = 0; i < trials; i++) {
      const shuffled = shuffle(original);
      if (JSON.stringify(shuffled) === JSON.stringify(original)) {
        sameOrderCount++;
      }
    }


    expect(sameOrderCount).to.be.lessThan(trials);
  });
});
