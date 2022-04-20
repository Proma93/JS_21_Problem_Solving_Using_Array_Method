/*1. Write a JavaScript function to check whether an `input` is an array or not. 
Test Data :
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
false
true*/

is_array = function(input) {
    if (toString.call(input) === "[object Array]")
      return true;
    return false;   
      };
  console.log(is_array('w3resource'));
  console.log(is_array([1, 2, 4, 0]));
  console.log("----first exercise is done------");


  /*Write a JavaScript function to clone an array. 
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]]*/
array_Clone = function(arra1) {
    return arra1.slice(0);
       };
   console.log(array_Clone([1, 2, 4, 0]));
   console.log(array_Clone([1, 2, [4, 0]]));
   console.log("----second exercise is done------");

/*Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[]*/

first =  function(array, n) {
    if (array == null) 
    return void 0;
  if (n == null) 
    return array[0];
  if (n < 0)
    return [];
  return array.slice(0, n);
};

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
console.log("----third exercise is done------");
/*4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. 
Test Data :
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
Expected Output :
-2
[9, 0, -2]
[7, 9, 0, -2]*/

last =  function(array, n) {
    if (array == null) 
      return void 0;
    if (n == null) 
       return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));  
    };
  
  console.log(last([7, 9, 0, -2]));
  console.log(last([7, 9, 0, -2],3));
  console.log(last([7, 9, 0, -2],6));
  console.log("----fourth exercise is done------");


  /*5. Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"*/

myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));
console.log("----fifth exercise is done------");



/*7. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.*/
str = 'The Quick Brown Fox';
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result = [];
  
  for(var x=0; x<str.length; x++)
  {
    if(UPPER.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toLowerCase());
    }
    else if(LOWER.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toUpperCase());
    }
    else 
    {
      result.push(str[x]);
    }
  }
console.log(result.join(''));

console.log("----seventh exercise is done------");



/*8. Write a JavaScript program which prints the elements of the following array. Go to the editor
Note : Use nested for loops.
Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
Sample Output :
"row 0"
" 1"
" 2"
" 1"
" 24"
"row 1"
------
------*/
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
 
for (var i in a) 
{
   console.log("row " + i);
   for (var j in a[i]) 
     {
      console.log(" " + a[i][j]);
     }
}
console.log("----8th exercise is done------");


/*9. Write a JavaScript program to find the sum of squares of a numeric vector.*/
function sum_sq(array) {
  var sum = 0, 
      i = array.length;
  while (i--) 
   sum += Math.pow(array[i], 2);
  return sum;
}
 
console.log(sum_sq([0,1,2,3,4]));
console.log("----9th exercise is done------");

/*10. Write a JavaScript program to compute the sum and product of an array of integers.*/

var array = [1, 2, 3, 4, 5, 6],
    s = 0,
    p = 1,
    i;
for (i = 0; i < array.length; i++) 
   {
    s += array[i];
    p *= array[i];
    }
console.log('Sum : '+s + ' Product :  ' +p); 
console.log("----10th exercise is done------");

/*Write a JavaScript program to shuffle an array*/

function shuffle(arra1) {
  var ctr = arra1.length, temp, index;

// While there are elements in the array
  while (ctr > 0) {
// Pick a random index
      index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
      ctr--;
// And swap the last element with it
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
  }
  return arra1;
}
var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffle(myArray));

console.log("----11th exercise is done------");


/*12. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.
Sample array :
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Expected Output :
[4, 5, 8, 10, 12, 13]*/


function Arrays_sum(array1, array2) 
{
  var result = [];
  var ctr = 0;
  var x=0;

  if (array1.length === 0) 
   return "array1 is empty";
  if (array2.length === 0) 
   return "array2 is empty";   

 while (ctr < array1.length && ctr < array2.length) 
  {
    result.push(array1[ctr] + array2[ctr]);
    ctr++;
  }

 if (ctr === array1.length) 
 {
    for (x = ctr; x < array2.length; x++)   {
      result.push(array2[x]);
    }
  } 
  else
  {
  for (x = ctr; x < array1.length; x++) 
    {
      result.push(array1[x]);
    }
  }
  return result;
}

console.log(Arrays_sum([1,0,2,3,4], [3,5,6,7,8,13]));

console.log("----12th exercise is done------");


/*13. Write a JavaScript function to sort the following array of objects by title value. Go to the editor
Sample object :

var library = [ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];*/

   var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
 
 function compare_to_sort(x,y) 
  {
   if (x.title < y.title)
     return -1;
   if (x.title > y.title)
     return 1;
   return 0;
  }
 
 console.log(library.sort(compare_to_sort));
 console.log("----13th exercise is done------");

 /*14. Write a JavaScript function to find an array contains a specific element. Go to the editor

Test data :
arr = [2, 5, 9, 6];
console.log(contains(arr, 5));
[True] */

function contains(arr, element) {
  for (var i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
          return true;
      }
  }
  return false;
}
arr = [2, 5, 9, 6];
console.log(contains(arr, 5));
console.log("----14th exercise is done------");



/*15.Write a JavaScript script to empty an array keeping the original.*/
arr = [1, 3, 6, 3, -5];
console.log(arr);
arr.length = 0;
console.log(arr);
console.log("----15th exercise is done------");

/*16.Write a JavaScript function to get a random item from an array.*/


function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

var items = [254, 45, 212, 365, 2543];
console.log(random_item(items));
console.log("----16th exercise is done------");

/*Write a JavaScript function to create a specified number of elements with pre-filled numeric value array.
Test Data :
console.log(array_filled(6, 0));
[0, 0, 0, 0, 0, 0]
console.log(array_filled(4, 11));
[11, 11, 11, 11]*/
function array_filled(n, val)
{
    return Array.apply(null, Array(n)).map(Number.prototype.valueOf,val);
}

console.log(array_filled(6, 0));
console.log(array_filled(4, 11));
console.log("----17th exercise is done------");

/*18.Write a JavaScript function to create a specified number of elements with pre-filled string value array.

Test Data :
console.log(array_filled(3, 'default value'));
["default value", "default value", "default value"]
console.log(array_filled(4, 'password'));
["password", "password", "password", "password"]*/

function arr_filled(n, val)
{
    return Array.apply(null, Array(n)).map(String.prototype.valueOf,val);
}

console.log(arr_filled(3, 'default value'));
console.log(arr_filled(4, 'password'));
console.log("----18th exercise is done------");

/*19.Write a JavaScript function to filter false, null, 0 and blank values from an array.

Test Data :
console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
[58, "abcd", true]*/

function filter_array_values(arr) {
  arr = arr.filter(isEligible);
  return arr;
}

function isEligible(value) {
  if(value !== false || value !== null || value !== 0 || value !== "") {
    return value;
  }
}

console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
console.log("----19th exercise is done------");

/*20.Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by one from starting position. 

Test Data :
console.log(array_range(1, 4));
[1, 2, 3, 4]
console.log(array_range(-6, 4));
[-6, -5, -4, -3]*/

function array_range(start, len) 
     {
		var arr = new Array(len);
		for (var i = 0; i < len; i++, start++) 
        {
			arr[i] = start;
		}
      		return arr;
}


console.log(array_range(1, 4));
console.log(array_range(-6, 4));
console.log("----20th exercise is done------");


/*21.Write a JavaScript function to generate an array between two integers of 1 step length.

Test Data :
console.log(rangeBetwee(4, 7));
[4, 5, 6, 7]
console.log(rangeBetwee(-4, 7));
[-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]*/

function rangeBetwee(start, end) 
{
  
		if (start > end) {
			var arr1 = new Array(start - end + 1);
			for (var i = 0; i < arr1.length; i++, start--) {
				arr1[i] = start;
			}
			return arr1;
		} 
       else 
       {
			var arr2 = new Array(end-start+1);
         
		for (var j = 0; j < arr2.length; j++, start++) 
        {
			arr2[j] = start;
		}
      		return arr2;
		}
	}

console.log(rangeBetwee(4, 7));
console.log(rangeBetwee(-4, 7));
console.log("----21st exercise is done------");













