function logTime<T>(num: T): T {
    console.log(new Date())
    return num
}

logTime<number>(10)

interface NumInterface {
    transform: <T, V> (a: T) => V
}

class MyGenClass<T> {
    value: T

    constructor(value: T) {
        this.value = value;
    }
}

const genClass = new MyGenClass<number>(19)

interface TimeStamp {
    stamp: number
}

function logTimeStamp<T extends TimeStamp>(num: T): T {
    console.log(num.stamp)
    return num
}

