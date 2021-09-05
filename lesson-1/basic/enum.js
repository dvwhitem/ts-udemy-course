"use strict";
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
var Decision;
(function (Decision) {
    Decision[Decision["Yes"] = 1] = "Yes";
    Decision[Decision["No"] = calcEnum()] = "No";
})(Decision || (Decision = {}));
function calcEnum() {
    return 2;
}
function runEnum(obj) {
}
runEnum(Direction);
var TestA;
(function (TestA) {
    TestA[TestA["A"] = 0] = "A";
})(TestA || (TestA = {}));
var testA = TestA.A;
var nameA = TestA[testA];
var c1 = 0 /* A */;
var Dice;
(function (Dice) {
    Dice[Dice["One"] = 1] = "One";
    Dice[Dice["Two"] = 2] = "Two";
    Dice[Dice["Three"] = 3] = "Three";
})(Dice || (Dice = {}));
function ruDice(dice) {
    switch (dice) {
        case Dice.One:
            return 'один';
        case Dice.Two:
            return 'два';
        case Dice.Three:
            return 'три';
        default:
            var a_1 = dice;
    }
}
