function powerOf(arr){
    let result=[];
    for(let i=0;i<arr.length;i++){
        let num=arr[i];
        if(num<=0){
            result.push(false);
            continue;
        }
        while (num%3===0){
            num=num/3;
        }
        result.push(num===1);
    }
    return result;
}
console.log(powerOf([3,8,9,27,65,81]))