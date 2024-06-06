let x = 90 , y = 95;
function findingclosetvalue(x,y){
    if(x!=y){
        let X = Math.abs(x-100);
        let Y = Math.abs(y-100);
        if(X<Y){
            return x;
        }
        else{
            return y;
        }
    }
    else{
        return false;
    }
}

const result = findingclosetvalue(x,y);
console.log(result);