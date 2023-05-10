function Num1(){
        const arr = Array.from({length: 15}, () => Math.floor(Math.random() * 41) - 10);


        const positiveNumbers = arr.filter(num => num > 0);
        const average = positiveNumbers.reduce((acc, num) => acc + num, 0) / positiveNumbers.length;

        alert(`Сгенерированный массив: ${arr}`);
        alert(`Положительные элементы: ${positiveNumbers}`);
        alert(`Среднее арифметическое положительных элементов: ${average}`);

}


function Num2(){

    const n = 15;
    const arr = Array.from({length: n}, () => Math.floor(Math.random() * 41) - 20);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        arr[i] = arr[i] ** 2;
      }
    }
    alert(`Сгенерированный массив: ${arr}`);

}


function Num3(){
    const arr = Array.from({length: 20}, () => Math.floor(Math.random() * 21) - 10);

    let sumPos = 0, countPos = 0, sumNeg = 0, countNeg = 0, countZero = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sumPos += arr[i];
        countPos++;
      } else if (arr[i] < 0) {
        sumNeg += arr[i];
        countNeg++;
      } else {
        countZero++;
      }
    }
    const averagePos = countPos > 0 ? sumPos / countPos : 0;
    const averageNeg = countNeg > 0 ? sumNeg / countNeg : 0;

    console.log(`Сгенерированный массив: ${arr}`);
    console.log(`Среднее арифметическое положительных чисел: ${averagePos}`);
    console.log(`Среднее арифметическое отрицательных чисел: ${averageNeg}`);
    console.log(`Количество нулей: ${countZero}`);


}


function Num4(){
        const simulationCount = 1000000;
        let redCount = 0, blackCount = 0, whiteCount = 0;

        for (let i = 0; i < simulationCount; i++) {
          const randomNumber = Math.floor(Math.random() * 3);

          if (randomNumber === 0) {
            redCount++;
          } else if (randomNumber === 1) {
            blackCount++;
          } else {
            whiteCount++;
          }
        }

        const maxRedCount = Math.max(redCount, blackCount, whiteCount);

        console.log(`Количество выпадений красного цвета: ${redCount}`);
        console.log(`Количество выпадений черного цвета: ${blackCount}`);
        console.log(`Количество выпадений белого цвета: ${whiteCount}`);
        console.log(`Максимальное количество выпадений красного цвета: ${maxRedCount}`);

}
