enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}

enum Decision {
    Yes = 1,
    No = calcEnum()
}

function calcEnum() {
    return 2
}

function runEnum(obj: {Up: string}) {

}

runEnum(Direction)

enum TestA {
    A
}
let testA = TestA.A
let nameA = TestA[testA]

const enum ConstEnum {
    A
}

let c1 = ConstEnum.A

enum Dice {
    One =1,
    Two,
    Three
}

function ruDice(dice: Dice) {
    switch (dice) {
        case Dice.One:
            return 'один'
        case Dice.Two:
            return 'два'
        case Dice.Three:
            return 'три'
        default:
            const a: never = dice
    }
}

