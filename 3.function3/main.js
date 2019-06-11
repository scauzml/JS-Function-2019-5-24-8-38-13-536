function alphabetSort(message){
    // wirte your code here
    var array=[];
    for(let i=0;i<message.length;i++){
        array.push(message.charAt(i));
    }
    array.sort();
    let value=array.reduce((pre,cur,index,array)=>pre+cur);
    return value;
  }
 console.log(alphabetSort('hello')); // should return 'ehllo'