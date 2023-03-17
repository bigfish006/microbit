input.onButtonPressed(Button.A, function () {
    radio.sendString("L")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("F")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString.includes("L")) {
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # # # .
            . . . . .
            `)
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 100)
        basic.pause(100)
        DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eLeftMotor)
    } else if (receivedString.includes("R")) {
        basic.showLeds(`
            . # . . .
            . # # # .
            . # . . #
            . # . . .
            . # . . .
            `)
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 100)
        basic.pause(100)
        DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eRightMotor)
    } else if (receivedString.includes("F")) {
        basic.showLeds(`
            . # # # #
            . # . . .
            . # # # .
            . # . . .
            . # . . .
            `)
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 100)
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 100)
        basic.pause(100)
        DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eLeftMotor)
        DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eRightMotor)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("R")
})
basic.forever(function () {
	
})
