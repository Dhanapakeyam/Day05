//IFFE Function
(function primeNumber(n)
{
    var count = 0
    var temp =[]
    for(var i =0; i<n.length; i++)
{
    for(var j=1; j<=n[i];j++)
    {
      if(n[i]%j == 0)
      {
          count++
      }
    }
    if(count<=2)
    {
      temp.push(n[i]) 
    }
    count =0
}
console.log("Prime Numbers in an Array(IIFE Function) : ",...temp )
})([10,11,12,13,14,23,33,21,25])

//Anonymous Function
var n = [10,11,12,13,14,23,33,21,25]
var count = 0
var temp =[]
var primeNum = function(n)
{
for(var i =0; i<n.length; i++)
{
    for(var j=1; j<=n[i];j++)
    {
      if(n[i]%j == 0)
      {
          count++
      }
    }
    if(count<=2)
    {
      temp.push(n[i]) 
    }
    count =0
}
return temp
}
console.log("Prime Numbers in an Array(Anonymous Function) : ", primeNum(n))

//Arrow Function
var temp = []
var prime = (n)=>
{
  for(var i =0; i<n.length; i++)
  {
      for(var j=1; j<=n[i];j++)
      {
        if(n[i]%j == 0)
        {
            count++
        }
      }
      if(count<=2)
      {
        temp.push(n[i]) 
      }
      count =0
  }
  return temp
}
console.log("Prime Numbers in an Array(Anonymous Function) : ", primeNum(n))