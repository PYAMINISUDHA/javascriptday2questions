function randomeNumber(min,max){
    return Math.floor(Math.randome()*(max-min+1))+min;
}
console.log(randomeNumber(1,10))