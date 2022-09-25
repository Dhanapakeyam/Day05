//IFFE Function
( function medianArray(arr1,arr2)
{
    var median = 0
    var group = [...arr1, ...arr2]
   // group.sort()
    var m1 =Math.round((group.length / 2))
    if(group.length%2 == 0)
    {
      median = (group[m1] + group[m1-1])/2
      console.log("Median of Array(Using IIFE Function) : ",median)
    }
    else
    {
        console.log("Median of Array(Using IIFE Function) : ", group[m1-1])
    }  
})([1,2,3,6],[4,6,8,10])
//Anonymous Function
var arr1 = [1,2,3,6]
var arr2 = [4,6,8,10]
var median = 0
var medianArray = function(arr1,arr2)
{
var group = [...arr1, ...arr2]
//group.sort()
var m1 =Math.round((group.length / 2))
if(group.length%2 == 0)
{
  median = (group[m1] + group[m1-1])/2
  //console.log("Median of Array(Using Anonymous Function) : ", median)
  return median
}
else
{
  //console.log("Median of Array(Using Anonymous Function) : ", group[m1-1])
  return group[m1-1]
}
}
console.log("Median of Array(Using Anonymous Function) : ", medianArray(arr1,arr2))