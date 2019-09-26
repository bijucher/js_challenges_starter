(function(){
    let word = "amazon";
    let letter ="p";
    let counter=0;

    for (let i=0 ;i< word.length ;i++){
        // console.log(word[i])
        if(word[i]===letter){
            // console.log("Hey")
            counter++;
            
        }
    }
    
    // console.log(  "Yeah, the letter " + letter + " exists "+counter+" times in my word"   )
    // console.log("Nope, that letter doesn't exist in my word.")

    
    if(counter===0){
        console.log("Nope, that letter doesn't exist in my word.")
        
    }
    else {
        console.log(  "Yeah, the letter " + letter + " exists "+counter+" times in my word"   )
    }
    
})();
