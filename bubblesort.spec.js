describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([2,5,3,4,1,6,8,7]) ).toEqual( [1,2,3,4,5,6,7,8] );
  });
});

beforeAll(function () {
  spyOn(window, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
});
it('getting to the center of tootsiepop involves exactly three licks', function () {
  bubbleSort.getToCenter();
  expect(bubbleSort.lick.calls.count()).toEqual(arr.length);
});
