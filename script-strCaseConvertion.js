//IIFE FUNCTION
(function strConvert(arr)
  {
    var temp =[]
    for(var i=0; i<arr.length; i++)
    {
        temp.push(arr[i].toUpperCase())
    }
   console.log("String Conversion Using IIFE Function : ", ...temp)
  }
)(["apple","orange","mango","kiwi","guva"])

//Anonymous Function 
var arr = ["apple","orange","mango","kiwi","guva"]
  var temp=[]
  let strConvert = function()
  {
    for(var i=0; i<arr.length; i++)
    {
        temp.push(arr[i].toUpperCase())
    }
    return temp
  }
    console.log("String Conversion Using Anonymous Function : ",strConvert(arr))

//Arrow Function
var temp = []
var strConver = (arr)=>
{
  for(var i=0; i<arr.length; i++)
    {
        temp.push(arr[i].toUpperCase())
    }
    return temp
}
console.log("String Conversion Using Arrow Function : ",strConvert(arr))