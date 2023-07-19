// Remove all dollar signs of String
function removeAllDollarSign(string){
    let result = string.replaceAll('$', '')
    return result
}

let string1 = '$80% percent of $life is to show $up'

let newString = removeAllDollarSign(string1);
console.log(newString)


//2. Binary Agents

function binaryAgent (string){
    let binaryAgentArray = string.split(" ")
    console.log(binaryAgentArray)
    let result= ''
    binaryAgentArray.forEach(function(number){
        result = result + String.fromCharCode(parseInt(number,2));
    })
    return result
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"))
// Aren't bonfires fun!?


//3. Beans counting

function courtB (str){
    let result= 0;
    for(let i=0; i<str.length; i++){
        if(str[i]==='b' || 'B'){
            result++
            console.log(result)
        }
    }
    return result
}



courtB('Lab labBBB lab')

function courtChar(str, char){
    let result = 0
    for(let i = 0; i<str.length; i++){
        if(str[i]===char){
            result++
            console.log(result)
        }
    }
    return result
}



courtChar('Hello world','o')


//