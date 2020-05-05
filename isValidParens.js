var isValid = function(s) {
    
    //Object for constant time lookup
    const matches = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    }
    
    //track openers
    let stack = [];
    
    for (i = 0; i < s.length; i++) {
        let chars = s.split("");
        let currentChar = chars[i];
        if (Object.keys(matches).includes(currentChar)) {
            stack.push(currentChar);
            console.log(stack);
        } else if (currentChar === matches[stack[stack.length - 1]]) {
            console.log(currentChar);
            console.log(matches[currentChar]);
            console.log(matches[stack[stack.length - 1]]);
            stack.pop();
            console.log(stack);
        }
        
    }
    return (stack.length === 0);
    
};

console.log(isValid("()"));
console.log(isValid("(]"));