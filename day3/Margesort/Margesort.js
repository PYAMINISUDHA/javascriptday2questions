function mergeArray(arr1,arr2){
    let result=[];
    let i=0;
    let j=0;
    let k=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            result[k]=arr1[i];
            i++;
        }else{
            result[k]=arr2[j];
            j++;
        }
        k++;
    }
    while(i<arr1.length){
        result[k]=arr1[i];
        i++;
        k++;
    }while(j<arr2.length){
        result[k]=arr2[j];
        j++;
        k++;
    }
    return result;
}
console.log(mergeArray([1,3,5],[2,7,8]));