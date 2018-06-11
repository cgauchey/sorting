describe('Bubble Sort', function(){

  const window = {};
  window.swap = function () {
    return 'swapped';
  };
  window.getSorted = function () {
    this.swap();
    return 'got sorted';
  };

  beforeAll(function () {
    spyOn(window, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
  });

  it('gets the number of swaps', function () {
    window.getSorted();
    expect(window.swap.calls.count()).toEqual(arr.length);
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('sorts an array', function(){
    expect( bubbleSort([2,5,3,4,1,6,8,7]) ).toEqual( [1,2,3,4,5,6,7,8] );
  });

});


