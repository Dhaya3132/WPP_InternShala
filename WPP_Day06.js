function ismultiple(n) {
    if (n < 0) {
        console.log('flase');
    }
    else if(n%3 == 0 || n%7==0){
        console.log('True');
    }
    else{
        console.log('False');
    }

}

ismultiple(2);