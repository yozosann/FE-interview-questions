/*实现一个LazyMan，可以按照以下方式调用:
LazyMan(“Hank”)输出:
Hi! This is Hank!

LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
Hi! This is Hank!
//等待10秒..
Wake up after 10
Eat dinner~

LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
Hi This is Hank!
Eat dinner~
Eat supper~

LazyMan(“Hank”).sleepFirst(5).eat(“supper”)输出
//等待5秒
Wake up after 5
Hi This is Hank!
Eat supper

以此类推。*/

function LazyMan(name) {
    const people = new People(name);
    people.sayName();

    setTimeout(function () {
        this.allEvents = this.firstEvents.concat(this.secondEvents);
        this.allEvents.reduce(function (prePro, currentPro) {
            return prePro.then(function () {
                return currentPro();
            })
        }, Promise.resolve());
    }.bind(people), 0);
    return people;
}

function People(name) {
    this.name = name;
    this.firstEvents = [];
    this.secondEvents = [];
}

People.prototype.sayName = function () {
    let _self = this;
    let func = function () {
        return new Promise(function (resolve, reject) {
            console.log(`Hi! This is ${this.name}!`);
            resolve();
        }.bind(_self));
    }
    this.secondEvents.push(func);
    return this;
}

People.prototype.sleep = function (time) {
    let _self = this;
    let func = function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log(`Wake up after ${time}`);
                resolve();
            }.bind(_self), time * 1000);
        });
    }
    this.secondEvents.push(func);
    return this;
}

People.prototype.sleepFirst = function (time) {
    let _self = this;
    let func = function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log(`Wake up after ${time}`);
                resolve();
            }.bind(_self), time * 1000);
        });
    }
    this.firstEvents.push(func);
    return this;
}

People.prototype.eat = function (food) {
    let func = function () {
        return new Promise(function (resolve, reject) {
            console.log(`Eat ${food}!`);
            resolve();
        });
    }
    this.secondEvents.push(func);
    return this;
}

LazyMan("Hank").eat("dinner").sleepFirst(1).eat("supper");