/*6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.*/

var num=window.prompt();
var str = num.toString();
var result = [str[0]];
  
for(var x=1; x<str.length; x++)
  {
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
     {
      result.push('-', str[x]);
     }
    else
     {
      result.push(str[x]);
     }
  }
console.log(result.join(''));


/*8. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.*/

str = 'c';
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result = [];

for (var x=0; x<str.length; x++){
  if(UPPER.indexOf(str[x]) !== -1)
  {
    result.push(str[x].toLowerCase());
  }
  else if (LOWER.indexOf(str[x]) !== -1)
  {
    result.push(str[x].toUpperCase());
  }
  else 
  {
    result.push(str[x]);
  }
}
console.log(result.join(''));