//1.对数组中的元素去重。
var arr=[1,2,3,3,4,'a','a','b','c'];
function reduce(arr){
  var res=[];
  //code
  for (var item of arr) {
    if(res.includes(item)==false){
        res.push(item);
    }
  }
  return res;
}
console.log(reduce(arr));  //[1, 2, 3, 4, "a", "b", "c"]