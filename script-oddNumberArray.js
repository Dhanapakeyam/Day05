//IIFE Function

(function oddNum(arr){
  var temp =[]
  for(var i=0; i<arr.length; i++)
    {
        if(arr[i]%2 != 0)
        {
            temp.push(arr[i])
        }
   }
    console.log("Odd Numbers Using IIFE Function : ", ...temp)
  
})([1,2,3,4,5,6])

//Anonymous Function
var arr = [1,2,3,4,5,6]
  var temp=[]
  
  let oddNumber = function()
  {
    for(var i=0; i<arr.length; i++)
    {
        if(arr[i]%2 != 0)
        {
            temp.push(arr[i])
        }
    }
    return temp
  }
    console.log("Odd Numbers Using Anonymos Function : ", oddNumber(arr))

//Arrow Function
var temp = []
var oddNum = (arr)=>
{
  for(var i=0; i<arr.length; i++)
  {
      if(arr[i]%2 != 0)
      {
          temp.push(arr[i])
      }
  }
  return temp
}
  console.log("Odd Numbers Using Arrow Function : ", oddNum(arr))


