 function guessNumber(){
        var secretNumber = Math.floor(Math.random() * 100) + 1;
        var guessCount = 0;
        while (true) {
                var guess = parseInt(prompt("Угадайте число от 1 до 100:"));
                guessCount++;

                if (guess === secretNumber) {
                        alert("Вы угадали число за " + guessCount + " попыток!");
                        break;
                } else if (guess < secretNumber) {
                        alert("Загаданное число больше. Попробуйте еще раз.");
                } else {
                        alert("Загаданное число меньше. Попробуйте еще раз.");
                }
        }
}