function Palindrome(str){
let rev="";
for(let i=str.length-1;i>=0;i--){
rev=rev+str.charAt(i);
}
if(str!=rev){
    console.log("not a palindrome");
    
}else{
    console.log("Palindrome");
}
}
Palindrome("amma");