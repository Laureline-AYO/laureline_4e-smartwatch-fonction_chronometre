let tps_chrono = 0
function Chronometre () {
    tps_chrono = 0
    while (input.buttonIsPressed(Button.A)) {
        basic.pause(100)
        tps_chrono += 0.1
    }
    basic.showNumber(tps_chrono)
    if (input.buttonIsPressed(Button.B)) {
        tps_chrono = 0
    }
}
basic.forever(function () {
    Chronometre()
})
