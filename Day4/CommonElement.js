function commonElement(arr1,arr2){
    let result =[];
    let k=0;
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]===arr2[j]){
                result[k]=arr1[i];
                k++;
                break;
            }
        }
    }
    return result;
}
console.log(commonElement([1,2,3,4],[3,4,5,6]));