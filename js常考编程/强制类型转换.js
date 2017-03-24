// var foo = {n: 1};
var bar = function(foo){
    console.log(foo)
    var foo = {n:2};
}
bar(foo);
