it('adds 1 + 2 to equal 3 in TScript', ()=> {
    const sum = require('../src/sum.ts');
    expect(sum(1, 2)).toBe(3);
});
  
it('adds 1 + 2 to equal 3 in JavaScript', ()=> {
    const sum = require('../src/sum.js');
    expect(sum(1, 2)).toBe(3);
});