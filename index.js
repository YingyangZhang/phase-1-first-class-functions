
function receivesAFunction(callback){
    return callback();
}


function returnsANamedFunction(){
    const namedFunc = () => {};
    return namedFunc;
}

function returnsAnAnonymousFunction(){
    return () => {};
} 
