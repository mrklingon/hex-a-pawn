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
input.onButtonPressed(Button.B, function () {
    if (MOVNUM == 2) {
        MOVNUM = 4
        BOARDS = BOARD4
    } else {
        if (MOVNUM == 4) {
            MOVNUM = 6
            BOARDS = BOARD6
        }
    }
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
        led.plotBrightness(X, Y, 66)
    }
    for (let value of WHITE) {
        findXY(value)
        led.plotBrightness(X, Y, 255)
    }
}
let NewBoard = ""
let Y = 0
let X = 0
let BOARD6: string[] = []
let BOARDS: string[] = []
let BOARD4: string[] = []
let WHITE: number[] = []
let BLACK: number[] = []
let ypos: number[] = []
let xpos: number[] = []
let MOVNUM = 0
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
MOVNUM = 2
xpos = [0, 2, 4, 0, 2, 4, 0, 2, 4]
ypos = [0, 0, 0, 2, 2, 2, 4, 4, 4]
BLACK = [1, 2, 3]
WHITE = [7, 8, 9]
let BOARD2 = ["123489", "123759"]
BOARD4 = ["143559", "235449", "133458", "122469", "235667", "423567", "134668", "126459", "223559", "233557", "133449"]
BOARDS = BOARD2
BOARD6 = ["453666", "111456", "224556", "226445", "145666", "356444", "334555", "255444", "225666", "144555", "663555"]
ShowBoard()
