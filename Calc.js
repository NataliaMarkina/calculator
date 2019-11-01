﻿class Calc {                                                        //базовый класс
    #result;                                                        //создаем инкапсулированную переменную для хранения результата
    
    constructor(elem = 0) {                                         //конструктор базового класса, добавляем в результат начальное значение (первый элемент выражения)
        this.#result = elem;
    }
    
    sum(...item) {                                                  //функция суммы (item - элементы (могут быть переданы в виде массива), которые хотим добавить в сумму)
        for (let elem in arguments) {                               //проходимся по каждому из аргументов
            if (Array.isArray(arguments[elem])) {                   //если это массив, то проходимся по каждому элементу массива и добавляем его к сумме
                for (let e in arguments[elem]) {
                    this.#result += arguments[elem][e];
                }
            } else {
                this.#result += arguments[elem];                    //иначе, если передано просто число, то бовавляем его к сумме
            }
        }
        return this.#result;
    }

    dif(...item) {                                                  //функция разности (item - элементы (могут быть переданы в виде массива), которые хотим добавить в разность)
        for (let elem in arguments) {                               //проходимся по каждому из аргументов
            if (Array.isArray(arguments[elem])) {                   //если это массив, то проходимся по каждому элементу массива и добавляем его к разности
                for (let e in arguments[elem]) {
                    this.#result -= arguments[elem][e];
                }
            } else {                                                //иначе, если передано просто число, то бовавляем его к разности
                this.#result -= arguments[elem];
            }
        }

        return this.#result;
    }

    div(...item) {                                                  //функция деления (item - элементы (могут быть переданы в виде массива), которые хотим добавить в частное)
        for (let elem in arguments) {                               //проходимся по каждому из аргументов
            if (Array.isArray(arguments[elem])) {                   //если это массив, то проходимся по каждому элементу массива и, если он не равен нулю, добавляем его к частному
                for (let e in arguments[elem]) {
                    if (arguments[elem][e] !== 0)
                    {
                        this.#result /= arguments[elem][e];
                    } else {                                        //если текущий элемент равен нулю, то делить на него не можем, поэтому возвращаем 0
                        return 0;
                    }
                }
            } else {                                                //иначе, если передано просто число, то, если оно не равно нулю, бовавляем его к частному
                if (arguments[elem] !== 0)
                {
                    this.#result /= arguments[elem];
                } else {                                            //если элемент равен нулю, то делить на него не можем, поэтому возвращаем 0
                    return 0;
                }
            }
        }

        return this.#result;
    }

    mul(...item) {                                                  //функция умножения (item - элементы (могут быть переданы в виде массива), которые хотим добавить в произведение)
        for (let elem in arguments) {                               //проходимся по каждому из аргументов
            if (Array.isArray(arguments[elem])) {                   //если это массив, то проходимся по каждому элементу массива и добавляем его к произведению
                for (let e in arguments[elem]) {
                    this.#result *= arguments[elem][e];
                }
            } else {                                                //иначе, если передано просто число, то бовавляем его к произведению
                this.#result *= arguments[elem];
            }
        }

        return this.#result;
    }
}

class SqrCalc extends Calc {                                        //класс, унаследованный от базового
    constructor(elem) {                                             //конструктор этого класса, вызывает конструктор базового класса
        super(elem);
    }
    
    sum(...item) {                                                  //переопределение функции суммы
        let res = super.sum(...item);                               //результат, полученный в функции суммы базового класса, возводится в квадрат
        return res * res;
    }

    dif(...item) {                                                  //переопределение функции разности
        let res = super.dif(...item);                               //результат, полученный в функции разности базового класса, возводится в квадрат
        return res * res;
    }

    div(...item) {                                                  //переопределение функции деления
        let res = super.div(...item);                               //результат, полученный в функции деления базового класса, возводится в квадрат
        return res * res;
    }

    mul(...item) {                                                  //переопределение функции умножения
        let res = super.mul(...item);                               //результат, полученный в функции умножения базового класса, возводится в квадрат
        return res * res;
    }
}
