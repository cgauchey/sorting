function bubbleSort(arr) {
  if (arr.length = 0){
    return arr
  }

  for (var i = 0 j=i+1; i<arr.length; i++){
    while (j < arr.length){
      if (arr[i]>arr[j]){
        arr[i] = arr[j]
        arr[j] = arr[i]
      }
    }
  }


  /* your code here */

}
