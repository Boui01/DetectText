/* 
Detect word or sentence in Text you in put such as "hello world" check "hello" or "lo" output is true
Type
    1 ===  word
    2 ===  sentence
*/
function DetectText (text , detect , type){
    let result = false;

    if(type === 1 || type === 'word'){
        for(let position = 0; position < text.length ; position++){
            if (text[position] === detect) {
                console.warn('Text detected.',text)
                result = true;
                break;
            }
        }
        console.warn('The text parameter must be a string.',text)
    }
    else if(type === 2 || type === 'sentence'){
        if( text.includes(detect)){
            result = true;
        }
    }

    return result
}

export default DetectText
