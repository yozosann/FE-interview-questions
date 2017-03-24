function bfSearch(sourceStr, SearchStr) {
    let k,result;
    for (let i = 0; i < sourceStr.length; i++) {
        for (let j = 0; j < SearchStr.length; j++) {
            // k是父串的下标
            k = i + j
            if (SearchStr[j] == sourceStr[k]){
                // console.log(SearchStr, ' --> ', sourceStr[k]);
                if(k - i == SearchStr.length - 1){
                    result = i;
                    break;
                }
            }else{
                // 如果不匹配，返回，父串下标移动
                break;
            }
            // console.log(j, ' --> ', k);
        }
        if(result || result == 0){
            return result;
        }
    }

    if(result == undefined){
        return -1;
    }
}

var s = "BBC ABCDAB ABCDABCDABDE";
var t = "aDAB";
console.log(bfSearch(s, t));