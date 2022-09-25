//IIFE Function
(function removeduplicates(arr)
{
    var temp = [];
    for(var i=0; i < arr.length; i++){ 
        if(temp.indexOf(arr[i]) === -1) { 
            temp.push(arr[i]); 
        } 
    }
    console.log("After Removing Dulpicates(Using IIFE Function) : ",temp);
})(["apple","mango","apple","orange","mango","apple"])

var arr = ["apple","mango","apple","orange","mango","apple"]
var removeDuplicates = function(arr)
{
    var temp = [];
    for(var i=0; i < arr.length; i++){ 
        if(temp.indexOf(arr[i]) === -1) { 
            temp.push(arr[i]); 
        } 
    }
    return temp;
}
console.log("After Removing Dulpicates(Using Anonymous Function) : ",removeDuplicates(arr));