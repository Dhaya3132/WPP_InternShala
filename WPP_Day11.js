function checking(x,y,z){
    if(y>x && z>y){
        console.log('strict mode');
    }
    else if(z > y){
        console.log('soft mode');
    }
    else{
        console.log('undefined');
    }
}


checking(10,11,13);
checking(8,5,7);
checking(5,2,1);