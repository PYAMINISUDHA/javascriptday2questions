function findAvg(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum/arr.length;
}
console.log(findAvg([10,20,30,40]));