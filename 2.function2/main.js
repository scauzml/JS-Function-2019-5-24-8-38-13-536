
    
// - 新建main.js文件，编写一个函数，实现以下功能：判断一个字符串是否是回文串。（回文，一个字符串从前面读和从后面读都一样，例如：abcba就是回文串。）

function palindrome(message){
  // wirte your code here
  var array=[];
    for(let i=0;i<message.length;i++){
        array.push(message.charAt(i));
    }
    array.reverse();
    let value=array.reduce((pre,cur,index,array)=>pre+cur);
    let flag=false;
    if(message==value){
        flag=true;
    }
    return flag;
}
console.log(palindrome('hello')); // should return false
console.log(palindrome('abcba')); // should return true

