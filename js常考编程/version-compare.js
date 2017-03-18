// v1 > v2 return 1 ,v1 = v2 return 0 ,v1 < v2 return -1

export default function (v1, v2) {
    if (typeof v1 !== 'string' || typeof v2 !== 'string') {
        console.log('传入版本号数据类型错误');
        return;
    }
    // 去掉头部v
    if (v1[0] === 'v') {
        v1 = v1.substring(1);
    }
    if (v2[0] === 'v') {
        v2 = v2.substring(1);
    }
    const v1Arr = v1.split('.');
    const v2Arr = v2.split('.');
    let length = Math.min(v1Arr.length, v2Arr.length);

    // 若有一个版本号只有v 则出错返回
    if (length === 0) {
        console.log('无具体版本号');
        return;
    }
    for (let i = 0; i < length; i++) {
        // 由于Math.floor('') 为零，以防出现 v1...2这样类似的情况
        if (v1Arr[i] === '' || v2Arr[i] === '') {
            console.log('传入版本号有错误');
            return;
        }
        if (Object.is(Math.floor(v1Arr[i]), NaN) || Object.is(Math.floor(v2Arr[i]), NaN)) {
            console.log('传入版本号有错误');
            return;
        }
        if (v1Arr[i] > v2Arr[i]) {
            return 1;
        }
        if (v1Arr[i] < v2Arr[i]) {
            return -1;
        }
    }

    // 前段版本号比较完了，数组长度越长的 版本号越大
    if (v1Arr.length === v2Arr.length) {
        return 0;
    } else {
        let result = v1Arr.length > v2Arr.length ? 1 : -1;
        let resultArrCheck = result === 1 ? v1Arr : v2Arr;
        // 以防后段版本号出现错误字符
        for (let i = length; i < resultArrCheck.length; i++) {
            if (resultArrCheck[i] === '' || Object.is(Math.floor(resultArrCheck[i]), NaN)) {
                console.log('传入版本号有错误');
                return;
            }
        }
        return result;
    }
};

