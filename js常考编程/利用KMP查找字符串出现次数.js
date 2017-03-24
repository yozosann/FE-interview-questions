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

function kmpSearch(sourceStr, SearchStr) {
    let k, result = 0;
    const partMatch = kmpGetStrPartMatchValue(SearchStr);

    for (let i = 0; i < sourceStr.length; i++) {
        for (let j = 0; j < SearchStr.length; j++) {
            // k是父串的下标
            k = i + j
            if (SearchStr[j] == sourceStr[k]) {
                // console.log(SearchStr, ' --> ', sourceStr[k]);
                if (k - i == SearchStr.length - 1) {
                    result++ ;
                    break;
                }
            } else {
                // 如果不匹配，返回，父串下标移动
                if (j > 1 && partMatch[j - 1] > 0) {
                    i += (j - 1 - partMatch[j - 1]);
                }
                break;
            }
            // console.log(j, ' --> ', k);
        }
    }
    return result;
}

var s = "BBC ABCDAB ABCDABCDABDE";
var t = "CD";
console.log(kmpSearch(s, t));