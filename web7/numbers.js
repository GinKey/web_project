 function Num1(){
        var count = 0;
        var guess = prompt("Два конца, два кольца, Посредине гвоздик.");
        if (guess === "ножницы") {
            alert("верно :)");
            count++;
        }
        else{
            alert("неверно :(");
        }
        var guess = prompt("Висит груша нельзя скушать");
        if (guess === "лампочка") {
            alert("верно :)");
            count++;
        }
        else{
            alert("неверно :(");
        }
        alert("Количество отгадок "+ count)
}


function Num2(){
    var numbers = "";

    for (var i = 1; i <= 10; i++) {
      numbers += i + "\n";
    }
    alert("Откройте консоль")
    console.log(numbers);
}


function Num3(){
    var answer;

    do {
      answer = prompt("Еще по одной? Введите 1, чтобы закончить.");
    } while (answer !== "1");

}


function Num4(){
    var num = parseInt(prompt("Введите ваш номер в журнале"));
    var factorial = 1;

    for (var i = 1; i <= num; i++) {
        factorial *= i;
    }

    alert("Факториал числа " + num + " равен " + factorial);
}


function Num5(){
    var surname = prompt("Введите фамилию");
    var reversedSurname = surname.split("").reverse().join("");

    if (surname === reversedSurname) {
      alert("Ваша фамилия является палиндромом.");
    } else {
      alert("Ваша фамилия не является палиндромом.");
    }

}


function Num6(){
    var n = parseInt(prompt("Введите ваш номер в журнале"));
    var primes = [];

    for (var i = 2; i <= n; i++) {
          primes[i] = true;
    }

    for (var i = 2; i <= n; i++) {
          if (primes[i]) {
                for (var j = i * i; j <= n; j += i) {
                  primes[j] = false;
                }
          }
    }

    var numbers = "";
    for (var i = 2; i <= n; i++) {
          if (primes[i]) {
             numbers += i + "\n";
          }
    }
    alert(numbers);
}
