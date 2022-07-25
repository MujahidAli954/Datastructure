// check if the string is anagram or not ;
// 'hello' and  'llheo'

function isAnagram(string1,string2){
    if(string1.length != string2.length)
    {
        return false;
    }
    let counter = {};
    for(let letters of string1)
    {
        counter[letters]=(counter[letters] || 0) + 1;
        console.log(counter[letters]);
        
    }
    for(let items of string2)
    {
        if(!counter[items])
        {
            return false;
        }
        counter[items] -=1.
       
    }
    return true;
}

const check = isAnagram('hello','llheo');
console.log(check);