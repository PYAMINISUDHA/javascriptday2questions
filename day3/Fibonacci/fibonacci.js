function fibonacci(num){
    let a=0;
    let b=1;
    let result=[];
    while(a<=num){
        result[result.length]=a;
        let next=a+b;
        a=b;
        b=next;
    }
    return result;
}
console.log(fibonacci(15));