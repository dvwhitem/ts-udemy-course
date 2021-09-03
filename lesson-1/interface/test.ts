interface PointInterface {
    x: number,
    y: number
}
interface PointExtInterface extends PointInterface{
    z: number
}

function print(coord: PointInterface) {
}
const pointFunc = (point: PointInterface) => {
    const newPointFunc: PointExtInterface = point as PointExtInterface
}

interface Test {
    a:number
}
interface Test {
    b: string
}

function test(print: Test) {
    print.a
    print.b
}
