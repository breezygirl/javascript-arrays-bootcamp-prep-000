const expect = ('chai');
const fs = ('fs');
const jsdom =('mocha-jsdom');
const path = ('path');


var  chocolateBars= [ 'snickers', 'hundred grand', 'kitkat','skittles'];

function  addElementToBeginningOfArray (array, element){
  return [element,...array]
  }
 
function destructivelyAddElementToBeginningOfArray(array, element){
array.unshift(element)
  return array 
}
 
 function addElementToEndOfArray(array, element){
 
var array2= array.concat(element)
return array2
   
 }

  
  function destructivelyAddElementToEndOfArray(array, element){
    array.push(element)
    return array
  }

function accessElementInArray( array, index)
{ 
}


function destructivelyRemoveElementFromBeginningOfArray(array=[1,2,3]){ 
 array.shift() 

return array[0][1]
}

function destructivelyRemoveElementFromBeginningOfArray(array=[1,2,3]){
  array= array.slice(1)
 return array 
}