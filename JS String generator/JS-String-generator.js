//MADE BY DD2476

///README///

//set the length of the string at line 6
//write the characters it can use at line 22 (example: "abcd1234", they must have no spaces between them!)

//IMPORTANT: To run it, install node.js and save the file as -something-.js . Then, open cmd, navigate to the directory of -something-.js and type "node -something-.js". That will use node.js to run your file.

//it will generate strings with the characters you gave it

let x = 0;

function script() {
    
    console.log(generate(16))
    
}

script()

function generate(length) {
    
    let allowed = "01"
    let result = "";
        
    for(var i=0; i < length; i++){
        
        let rere = rand(0, allowed.length)
        
        result = result + allowed.substring(rere, rere + 1)
        
    }
    
    return result;
    
}

function rand(min, max) {
    
    return Math.floor(Math.random() * (max - min) ) + min;
    
}