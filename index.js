let startValue = document.getElementById("startValue");
let result = document.getElementById("result");
let add = document.getElementById("add");
let partExpression = document.getElementById("partExpression");
let list = document.getElementById("list");
let sign = document.getElementById("sign");

let index = 0;                                          //счетчик для количества добавленных в процессе вычисления новых текстовых полей
let arrId = [];                                         //массив для хранения идентификаторов текстовых полей, добавленных в процессе вычисления
let arrVal = [];                                        //массив для хранения значений текстовых полей, добавленных в процессе вычисления
let arrSign = [];                                       //массив для хранения идентификаторов меток, добавленных в процессе вычисления

function chooseSign() {                                 //функция выбора знака внутри выражения
    if (list.value == 'sum') {                          //если в выпадающем списке выбрано действие "Сумма", то внутри выражения будут стоять знаки "+"
        sign.innerHTML = "+";
    } else if (list.value == 'dif') {                   //если в выпадающем списке выбрано действие "Разность", то внутри выражения будут стоять знаки "-"
        sign.innerHTML = "-";
    } else if (list.value == "div") {                   //если в выпадающем списке выбрано действие "Деление", то внутри выражения будут стоять знаки "/"
        sign.innerHTML = "/";
    } else if (list.value == "mul") {                   //если в выпадающем списке выбрано действие "Умножение", то внутри выражения будут стоять знаки "*"
        sign.innerHTML = "*";
    }
}

function addElement() {                                                             //функция добавления нового элемента в выражение
    list.disabled = true;                                                           //выпадающий список блокируется, чтобы нельзя было создать выражение, содержащее разные знаки
    
    let newLabel = document.createElement('label');                        //создаем новую метку
    if (list.value == 'sum') {                                                      //если в выпадающем списке выбрано действие "Сумма", то метка принимает значение "+", ей присваивается id с ее порядковым номером (используем переменную index), id заносится в массив arrSign
        newLabel.innerHTML = '+';
        newLabel.setAttribute("id", "plus" + index);
        arrSign[index] = "plus" + index;
    } else if (list.value == 'dif') {                                               //если в выпадающем списке выбрано действие "Разность", то метка принимает значение "-", ей присваивается id с ее порядковым номером (используем переменную index), id заносится в массив arrSign
        newLabel.innerHTML = "-";
        newLabel.setAttribute("id", "minus" + index);           
        arrSign[index] = "minus" + index;
    } else if (list.value == "div") {                                               //если в выпадающем списке выбрано действие "Деление", то метка принимает значение "/", ей присваивается id с ее порядковым номером (используем переменную index), id заносится в массив arrSign
        newLabel.innerHTML = "/";
        newLabel.setAttribute("id", "division" + index);        
        arrSign[index] = "division" + index;
    } else if (list.value == "mul") {                                               //если в выпадающем списке выбрано действие "Умножение", то метка принимает значение "*", ей присваивается id с ее порядковым номером (используем переменную index), id заносится в массив arrSign
        newLabel.innerHTML = "*";
        newLabel.setAttribute("id", "multiplication" + index);  
        arrSign[index] = "multiplication" + index;
    }
    partExpression.appendChild(newLabel);                                           //добавляем эту метку как дочерний элемент partExpression
    
    let newText = document.createElement('input');                        //создаем новое поле
    newText.setAttribute("type", "text");                       //добавляем этому полю тип "text" и присваиваем id с его порядковым номером (используем переменную index)
    newText.setAttribute("id", "val" + index);
    arrId[index] = "val" + index;                                                   //id заносится в массив arrId
    
    partExpression.appendChild(newText);                                            //добавляем это текстовое поле как дочерний элемент partExpression
    
    index++;                                                                        //увеличиваем значение счетчика на 1
}

function createArrVal() {                               //функция, добавляющщая в массив значения из добавленных в процессе вычисления текстовых полей
    let arr = [];                                       //массив для хранения результата
    let str;
    let el;
    
    for (let i = 0; i < index; i++)                     //идем по количеству созданных текстовых полей (index хранит их количество)
    {
        str = arrId[i].toString();                      //для текущего поля получаем его id из массива arrId
        el = document.getElementById(str);
        arr[i] = parseFloat(el.value);                  //по этому id получаем значение, записанное в это поле, и заносим его в массив arr
    }
    
    return arr;
}

function Sum(array) {                                                   //функция суммы (в качестве параметра передаем массив элементов, которые нужно добавить к сумме)
    let myCalc = new SqrCalc(parseFloat(startValue.value));             //создаем объект класса SqrCalc (в качестве начального значения передается значение из первого текстового поля)
    let res = myCalc.sum(parseFloat(add.value), array);                 //получаем результат выполнения функции класса
    if (isNaN(res)) {                                                   //если получили NaN в качестве результата, то выводим сообщение о некорректности введенных данных, блокируем текстовое поле для результата и ничего туда не выводим
        alert("Введите корректные значения!");
        result.value = "";
        result.disabled = true;
    } else {                                                            //если все корректно, то в текстовое поле результата выводим полученный результат
        result.value = res;
    }
}

function Dif(array) {                                                   //функция разности (в качестве параметра передаем массив элементов, которые нужно добавить к разности)
    let myCalc = new SqrCalc(parseFloat(startValue.value));             //создаем объект класса SqrCalc (в качестве начального значения передается значение из первого текстового поля)
    let res = myCalc.dif(parseFloat(add.value), array);                 //получаем результат выполнения функции класса
    if (isNaN(res)) {                                                   //если получили NaN в качестве результата, то выводим сообщение о некорректности введенных данных, блокируем текстовое поле для результата и ничего туда не выводим
        alert("Введите корректные значения!");
        result.value = "";
        result.disabled = true;
    } else {                                                            //если все корректно, то в текстовое поле результата выводим полученный результат
        result.value = res;
    }
}

function Div(array) {                                                   //функция деления (в качестве параметра передаем массив элементов, которые нужно добавить к частному)
    let myCalc = new SqrCalc(parseFloat(startValue.value));             //создаем объект класса SqrCalc (в качестве начального значения передается значение из первого текстового поля)
    let res = myCalc.div(parseFloat(add.value), array);                 //получаем результат выполнения функции класса
    if (isNaN(res)) {                                                   //если получили NaN в качестве результата, то выводим сообщение о некорректности введенных данных, блокируем текстовое поле для результата и ничего туда не выводим
        alert("Введите корректные значения!");
        result.value = "";
        result.disabled = true;
    } else if (res == 0) {                                              //если результат равен нулю (это значит, что попытались поделить на ноль), выводим сообщение о том, что на 0 делить нельзя, блокируем текстовое поле для результата и ничего туда не выводим
        alert("На ноль делить нельзя!");
        result.value = "";
        result.disabled = true;
    } else {                                                            //если все корректно, то в текстовое поле результата выводим полученный результат
        result.value = res;
    }
}

function Mul(array) {                                                   //функция умножения (в качестве параметра передаем массив элементов, которые нужно добавить к произведению)
    let myCalc = new SqrCalc(parseFloat(startValue.value));             //создаем объект класса SqrCalc (в качестве начального значения передается значение из первого текстового поля)
    let res = myCalc.mul(parseFloat(add.value), array);                 //получаем результат выполнения функции класса
    if (isNaN(res)) {                                                   //если получили NaN в качестве результата, то выводим сообщение о некорректности введенных данных, блокируем текстовое поле для результата и ничего туда не выводим
        alert("Введите корректные значения!");
        result.value = "";
        result.disabled = true;
    } else {                                                            //если все корректно, то в текстовое поле результата выводим полученный результат
        result.value = res;
    }
}

function count() {                                      //функция, вычисляющая значение выражения
    result.disabled = false;                            //разблокируем текстовое поле для результата 
    arrVal = createArrVal();                            //получаем массив значений из добавленных в процессе вычисления текстовых полей
    if (list.value == 'sum') {                          //если в выпадающем списке выбрано действие "Сумма", то вызываем функцию суммы с полученным массивом значений в качестве аргумента
        Sum(arrVal);
    } else if (list.value == 'dif') {                   //если в выпадающем списке выбрано действие "Разность", то вызываем функцию разности с полученным массивом значений в качестве аргумента
        Dif(arrVal);
    } else if (list.value == "div") {                   //если в выпадающем списке выбрано действие "Деление", то вызываем функцию деления с полученным массивом значений в качестве аргумента
        Div(arrVal);
    } else if (list.value == "mul") {                   //если в выпадающем списке выбрано действие "Умножение", то вызываем функцию умножения с полученным массивом значений в качестве аргумента
        Mul(arrVal);
    }
}

function reset() {                                      //функция сброса данных
    let str1;
    let str2;
    let el;
    let s;
    
    list.disabled = false;                              //разблокируем выпадающий список, для нового выбора действия
    result.disabled = true;                             //блокируем текстовое поле для результата, чтобы ничего в него не вводили

    for (let i = 0; i < index; i++)                     //удаляем все текстовые поля, которые были добавлены в процессе вычислений, по их id
    {
        str1 = arrId[i].toString();
        el = document.getElementById(str1);
        partExpression.removeChild(el);
    }

    for (let i = 0; i < index; i++)                      //удаляем все метки со знаками, которые были добавлены в процессе вычислений, по их id
    {
        str2 = arrSign[i].toString();
        s = document.getElementById(str2);
        partExpression.removeChild(s);
    }
    
    index = 0;                                          //обнуляем счетчик добавленных элементов, так как теперь их нет

    startValue.value = "";                              //очищаем значения первого и второго текстовых полей, и поля для результата
    add.value = "";                                     
    result.value = "";
}