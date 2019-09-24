

function palindrome(myString){
    var reversed = myString.split("").reverse().join("");
    console.log(myString)
    console.log(myString.split(""))
    console.log(myString.split("").reverse())
    console.log(myString.split("").reverse().join(""))
    // console.log()
    // if (reversed === str)return true;
    // else {return false;

    if (reversed === myString){
        return true
    }
    else{
        return false

    }
}


console.log(  palindrome("Cramer")  )