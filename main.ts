
let number1 = 0;

input.onGesture(Gesture.Shake, function() {
    let number2 = Math.randomRange(1,6)
    basic.showNumber(number2, 250);
    
    if (number2 = 6) {
        number1 += 1;
        basic.showNumber(number1);
        music.playTone(Note.C, 250);

        let number2 = 0
    }

    if (number1 = 3) {
        basic.showNumber(number1, 300);
        music.playTone(Note.E, 100);
        music.playTone(Note.F, 100);
        music.playTone(Note.G, 100);
    }
})
