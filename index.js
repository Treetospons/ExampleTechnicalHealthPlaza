"use strict";
const findPrefix = (words) => {
    if (words.length === 0)
        return "";
    if (words.length > 200)
        return "";
    let prefix = words[0];
    for (let i = 1; i < words.length; i++) {
        if (prefix.length > 200)
            return "";
        while (words[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "")
                return "";
        }
    }
    return prefix;
};
let strs = [];
strs = ["flower", "flow", "flight"];
console.log("Example 1:");
console.log("Input: strs = ", strs);
console.log("Output:", findPrefix(strs));
strs = ["dog", "racecar", "car"];
console.log("Example 2:");
console.log("Input: strs = ", strs);
console.log("Output:", findPrefix(strs));
