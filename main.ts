input.onButtonPressed(Button.A, function () {
    num += 1
    basic.showString("" + (num))
})
input.onButtonPressed(Button.B, function () {
    if (order == 0) {
        basic.showString("+")
        Sum += num
        order += 1
    } else {
        basic.showString("=")
        Sum += num
        basic.showNumber(Sum)
        order = 0
        Sum = 0
    }
    num = 0
})
let order = 0
let num = 0
let Sum = 0
Sum = 0
num = 0
order = 0
