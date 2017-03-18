let patt = /\d+/g;
let str = 'abcd12345ed125ss123456789';
let arr = str.split(patt);
let aa = str.match(patt);
console.log(aa);

function aaa(line) {
    if (line.length > 255) {
        return;
    }
    var arr = line.match(patt);
    var index = 0, max = arr[0].length;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i].length > max) {
            index = i;
            max = arr[i];
        }
    }
    console.log(arr[index]);
}
aaa(str);