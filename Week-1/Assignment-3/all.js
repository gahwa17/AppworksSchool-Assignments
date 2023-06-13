function delayedResult(n1, n2, delayTime, callback) {
    /* 
    1. n1 + n2 was passed as an argument(result) to callback function
    2. After delay time, the callback function is executed and print the result
    */ 
    setTimeout(()=>{
        callback(n1 + n2);
    }, delayTime);
}

delayedResult(4, 5, 3000, function (result) {
    console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds

delayedResult(-5, 10, 2000, function (result) {
    console.log(result);
}); // 5 (-5+10) will be shown in the console after 2 seconds