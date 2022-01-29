let array=[];

let count=0;
function handleKey(e){
   
    
    if(count>6 && count!=0){
        array.push(e.key);
        array.splice(0,1);
    }else{
        array.push(e.key);
        
    }
    count=count+1;
    console.log(array,count);
}

document.addEventListener('keypress',(e)=>handleKey(e));