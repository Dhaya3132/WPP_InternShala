function reverse(x){
    
    const stack = [];
    
    for(let i=0;i<x.length;i++){
        stack.push(x[i]);
    }
    
    let reversed = '';
    while(stack.length > 0){
        let x = stack.pop();
        
        reversed = reversed + x;
        
    }
    console.log(reversed);
    
}

reverse('hello');