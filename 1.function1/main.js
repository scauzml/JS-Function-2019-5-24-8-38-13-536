function reverseString(message){
    // wirte your code here
    var array=[];
    for(let i=0;i<message.length;i++){
        array.push(message.charAt(i));
    }
    array.reverse();
    let value=array.reduce((pre,cur,index,array)=>pre+cur);
    return value;
    
  }
  
  console.log(reverseString('hello')); // should return 'olleh'