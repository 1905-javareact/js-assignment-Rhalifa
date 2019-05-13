/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {

    let temp

    for (let i = 0; i < numArray.length; i++) {
        for (let j = 0; j < numArray.length; j++) {

            if (numArray[i] < numArray[j]) {

                temp = numArray[i]
                numArray[i] = numArray[j]
                numArray[j] = temp
            }
        }


    }

    return numArray
}

arr = [10,6,4,3,9]

console.log(bubbleSort(arr))