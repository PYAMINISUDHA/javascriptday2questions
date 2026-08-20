function findMissingNumber(arr){
    let n=arr.length;
    let total=n*(n+1)/2;
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return total-sum;
}
let arr=[3,0,1];
console.log(findMissingNumber(arr))