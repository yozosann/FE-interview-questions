function normalize(arr) {
    // 判断传入的是否是数组
    if (arr && Object.prototype.toString.call(arr) !== '[object Array]') {
        return;
    }

    // 当作为对象属性时，会发生强制类型转换，为了区别类型，创建不同对象来去重。
    // 例如： 1，'1' 都会被转化为 obj['1']，导致去重出错, 故区别类型。
    const objectSet = {};

    // Object.create(null), 以防和原型上的函数名冲突。
    // 例如： obj[toString]， 本来是没有重复的，但是obj[toString]会查找到
    // 原型上的toString方法，“temp in map”会为true，故利用Object.create(null)
    // 使原型为空
    objectSet.number = Object.create(null);
    objectSet.string = Object.create(null);
    objectSet.array = Object.create(null);
    objectSet.boolean = Object.create(null);
    objectSet.object = Object.create(null);
    objectSet.undefined = Object.create(null);

    let len = arr.length, temp, type, map;

    for (let i = len - 1; i >= 0; i--) {
        temp = arr[i];
        // 取相应的去重对象。
        if(Object.prototype.toString.call(temp) === '[object Array]'){
            map = objectSet.array;
        }else{
            type = typeof temp;
            map = objectSet[type];
        }
        if (temp in map) {
            arr.splice(i, 1);
        } else {
            map[temp] = true;
        }
    }
    return arr;
}

const arr = [1, '1', 1, 'toString', ['toString'], 1, '', 2, '', null, 'null', 2, 2, null, 3, 3];
console.log(normalize(arr));

