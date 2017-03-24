// kmp子串匹配表
function kmpGetStrPartMatchValue(str) {
    var prefix = [];
    var suffix = [];
    var partMatch = [];
    for (var i = 0, j = str.length; i < j; i++) {
        var newStr = str.substring(0, i + 1);
        if (newStr.length == 0) {
            partMatch[i] = 0;
        } else {
            for (var k = 0; k < i; k++) {
                prefix[k] = newStr.slice(0, k + 1);
                suffix[k] = newStr.slice(-1 - k);
                if (prefix[k] == suffix[k]) {
                    partMatch[i] = prefix[k].length;
                }
            }
        }
        if (!partMatch[i]) {
            partMatch[i] = 0;
        }
    }
    return partMatch;
}

let str = 'aaronaac';
console.log(kmpGetStrPartMatchValue(str));
