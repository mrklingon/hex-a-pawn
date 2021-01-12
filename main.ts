function findXY (num: number) {
    X = xpos[num - 1]
    Y = ypos[num - 1]
}
input.onButtonPressed(Button.A, function () {
    NewBoard = BOARDS.shift()
    BOARDS.push(NewBoard)
    BLACK = []
    for (let index = 0; index <= 2; index++) {
        BLACK.push(parseFloat(NewBoard.substr(index, 1)))
    }
    WHITE = []
    for (let index = 0; index <= 2; index++) {
        WHITE.push(parseFloat(NewBoard.substr(index + 3, 1)))
    }
    ShowBoard()
})
function ShowBoard () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    for (let value of BLACK) {
        findXY(value)
        led.plotBrightness(X, Y, 113)
    }
    for (let value of WHITE) {
        findXY(value)
        led.plotBrightness(X, Y, 255)
    }
}
let NewBoard = ""
let Y = 0
let X = 0
let BOARDS: string[] = []
let WHITE: number[] = []
let BLACK: number[] = []
let ypos: number[] = []
let xpos: number[] = []
basic.showIcon(IconNames.Chessboard)
basic.pause(100)
basic.showIcon(IconNames.TShirt)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
xpos = [0, 2, 4, 0, 2, 4, 0, 2, 4]
ypos = [0, 0, 0, 2, 2, 2, 4, 4, 4]
BLACK = [1, 2, 3]
WHITE = [7, 8, 9]
BOARDS = ["123489", "123759", "143559", "123789"]
ShowBoard()
basic.forever(function () {
	
})
