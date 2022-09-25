//IFFE Function
(function palindrome(arr)
{
    var str
    var temp = []
    var palin = []
    for(var i =0; i<arr.length; i++)
    {
        str = arr[i].toString()
        for(var j=str.length-1; j>=0; j--)
        {
            temp.push(str[j])
        }
        str = temp.join("").toString()
        if(arr[i] == str)
        {
            palin.push(arr[i])
            temp = []
        }
    }
    console.log("Palinddrome in an array(Using IIFE Function) : ",palin)
})(["amma","appa","121","guvi"])

//Anonymous function
var arr = ["amma","appa","121","guvi"]
var str
var temp = []
var palin = []
var palindrome = function (arr)
{
for(var i =0; i<arr.length; i++)
{
  str = arr[i].toString()
  for(var j=str.length-1; j>=0; j--)
  {
    temp.push(str[j])
  }
  str = temp.join("").toString()
  if(arr[i] == str)
  {
    palin.push(arr[i])
    temp = []
  }
}
return palin
}
console.log("Palindrome in array(Using Anonymous Function) : ",palindrome(arr))

//Arrow Function
var arr = ["amma","appa","121","guvi"]
var str
var temp = []
var palin = []
var palindrome = (arr)=>
{
for(var i =0; i<arr.length; i++)
{
  str = arr[i].toString()
  for(var j=str.length-1; j>=0; j--)
  {
    temp.push(str[j])
  }
  str = temp.join("").toString()
  if(arr[i] == str)
  {
    palin.push(arr[i])
    temp = []
  }
}
return palin
}
console.log("Palindrome in array(Using Anonymous Function) : ",palindrome(arr))