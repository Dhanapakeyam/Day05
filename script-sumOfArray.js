
//IIFE Function
(function sumArr(arr)
{
  sum =0
  for(var i=0; i<arr.length; i++)
  {
      sum = sum + arr[i]    
  }
  console.log("Sum Of Array Nmbers Using IIFE Function :  ",sum)
})([1,2,3,4,5,6,21,43]);

//Anonymous Function
var arr = [1,2,3,4,5,6,21,43]
  var sum = 0
  let sumArray = function()
  {
    for(var i=0; i<arr.length; i++)
    {
        sum = sum + arr[i]    
    }
    return sum
  }
    console.log("Sum Of Array Numbers Using Anonymous Fuction : ",sumArray(arr))
  
//Arrow Function
var sum1 = 0
var sumArr = (arr)=>
{
  for(var i=0; i<arr.length; i++)
  {
      sum1 = sum1 + arr[i]    
  }
  return sum1
}
console.log("Sum Of Array Numbers Using Arrow Fuction : ",sumArr(arr))