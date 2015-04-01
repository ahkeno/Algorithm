/*** Bubble Sort
O(n2) algorithms

The algorithm works by comparing each item in the list with the item next to it, and swapping them if required. In other words, the largest element has bubbled to the top of the array. The algorithm repeats this process until it makes a pass all the way through the list without swapping any items
 ***/

var testArray = [7, 9,3,8,1,5,4];

sortArray(testArray);
function sortArray(test){
    for(var i = (testArray.length)-1; i >= 0; i--){
        for (var j = 1;j <= i; j++){
            if (test[j-1] > test[j]){
                var temp = test[j-1];
                test[j-1]= test[j];
                test[j]= temp;
                
            }
        }
    }
    return test;
}