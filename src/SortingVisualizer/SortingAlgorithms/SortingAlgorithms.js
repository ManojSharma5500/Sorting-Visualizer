//This is file contains all the Sortings


// Bubble sort

//Function animation
export function getBubbleSortAnimations(array){
    const animations = [];
    if(array.length <= 1) return array;
    BubbleSort(array,animations);
    return animations;
}



//Bubble Sort, input parrameter array
export const BubbleSort = (array, animations) => {
    const lengthOfArray = array.length;
    for(let i = 0; i < lengthOfArray; i++){
        for(let j = 0; j < lengthOfArray-i-1; j++){
            if(array[j] > array[j+1]){
                animations.push([j,j+1]);
                animations.push([j,j+1]);
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }

        }
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Merge Sort

export function getMergeSortAnitmations(array){ 
    const animations = [];
    if(array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length-1, auxiliaryArray, animations);
    return animations;
}

function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
){
    if(startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx)/2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations
){
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx+1;
    while(i <= middleIdx && j <= endIdx){
        // These are the value that we're comparing; we push them once
        // to change their color 
        animations.push([i, j]);
        // These are the value that we're comparing; we push them Second
        // to change their color 
        animations.push([i, j]);
        if(auxiliaryArray[i] <= auxiliaryArray[j]){
            // We overwrite the value at index k in the original array with the
            // value at index i in the auxiliary array.
            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        }else {
            // We overwrite the value at index k in the original array with the
            // value at index j in the auxiliary array.
            animations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];

        }
    }
    while(i <= middleIdx) {
        // These are the value that we're comparing; we push them once 
        // to change their color.
        animations.push([i, i]);
        // These are the value that we're comparing; we push them second 
        // to change their color.
        animations.push([i, i]);
        // we overwriter the value at index k in the original array with the 
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }
    while(j <= endIdx) {
        // These are the value that we're comparing; we push them once 
        // to change their color.
        animations.push([j, j]);
        // These are the value that we're comparing; we push them second 
        // to change their color.
        animations.push([j, j]);
        // we overwriter the value at index k in the original array with the 
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Quick Sort

export function getQuickSortAnitmations(array){ 
    const animations = [];
    if(array.length <= 1) return array;
    quickSort(array, 0, array.length-1, animations);
    return animations;
}


function quickSort(
    array,
    start, 
    end,
    animations,
    ){
    if(start < end){
        const pivotPlace = quickSortMerge(array,start,end, animations);
        quickSort(array,start,pivotPlace-1, animations);
        quickSort(array,pivotPlace+1, end, animations);
    }
    return array;
}

function quickSortMerge(array, start, end, animations){
    let pivot = array[end];
    let i = start - 1;
    let j = start;
    while(j !== end){
        if(array[j] <= pivot){
            animations.push([j, end]);
            animations.push([j, end]);
            i++;
            let temp = array[j];
            array[j] = array[i];
            array[i] = temp;
        }
        j++;
    }
    animations.push([i+1, end]);
    animations.push([i+1, end]);
    let temp1 = array[i+1];
    array[i+1] = array[end];
    array[end] = temp1;
    return i+1;
}