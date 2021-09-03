let a: number = 5
let b: string = 'TypeScript'

let d: string[] = ['Spring', 'Boot']
const e: any = ['Spring', 'Spring Boot', 3, 'Reactive', false]
const f: any = 10

function test1(a: string):boolean | string {
    return true
}

const test2 = (a: number): number => {
    return a * 4/2
}

d.map(s => s.toLocaleUpperCase())

function countCoord(coord: {lat: number, long?: number}) {

}

function getSum(a: number | number[]): number[] {
    if(typeof a === 'number') {
        return [a * 2]
    } else if(Array.isArray(a)) {
        return a.map(value => value * 10).filter(value => value > 10)
    }
    return []
}