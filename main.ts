radio.onReceivedNumber(function (receivedNumber) {
    pos = pins.map(
    receivedNumber,
    -1023,
    1023,
    20,
    150
    )
    pins.servoWritePin(AnalogPin.P0, pos)
})
let pos = 0
radio.setGroup(1)
