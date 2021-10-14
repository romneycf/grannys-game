/* Data Types: 
undefined, null, boolean, string, symbol, number, and object
*/

/*var myName = "Romney Freire";
myName = 30;
let curso = "freeCodeCamp";
const pi = 3.14;
*/

/*
//Initialize these three variables;
var a = 2;
var b = 5;
var c = "exemplo de ";
//Do not change code below this line
a = a + 1;
b = b + 5;
c = c + "string!";
console.log(a, b, c);
*/

/*para saber se um número é impar ou par usa-se o operator remainder (%), 
se vc dividir o numero por 2 e o remainder for 0, significa que ele é par:
40 % 2, retornará 0, por tanto par. 17 % 2, retornará 1, por tanto impar.
17/2 é 8 e sobra 1.(sobra = remainder)
 
var remainder;
remainder = 11 % 3;
console.log(remainder);
*/

/*Escape Character (backslash-barra invertida \ antes dos ")
Serve para, dentro de uma string extender a string após o ".

var string = "Sou um string com \"duas aspas\" dentro";
console.log(string);

// Outra forma é usar ' simples ao invés do duplo na string ou ` também funciona.
var string = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(string);
*/

/*
CODE  OUTPUT
\'    single quote
\"    double quote
\\    backslash
\n    newline
\r    carriage return
\t    tab
\b    backspace
\f    from feed


var string = "FirsLine\n\t\\SecondLine\n\ThirdLide";
console.log(string);
*/

//Para pegar a última letra de uma string.(para escolher outras é só mudar o -1)
/*var firstName = "Carlos"
var lastLetterOfFirstName = firstName[firstName.length -1];
console.log(lastLetterOfFirstName);
*/

// var myArray = [50,60,70];
// var myData = myArray[0];
// console.log(myData);

// //Se o arranjo tiver um subarranjo só adicionar outro [] para acessar as posições:

// var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
// var myData = myArray [3][2];
// console.log(myData);

/*array.push para adicionar coisas ao arranjo na última posição
array.pop para remover na última posição do arranjo
array.shift para remover a primeira posição do arranjo
array.unshift para adicionar na primeira posição
*/

/*
var myGlobal = 10;

function fun1() {
    oopsGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();
*/

/* variaveis com mesmo nome, valores locais tomam prioridade sobre globais:
var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "sweater";

    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);
*/

//Para verificar se um variavél é igual a algo usa-se == (=, somente, define a variavel) === para checar até mesmo o tipo.
/*function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual(10));
*/

//= define, == converte os tipos 10 == "10", === não converte 10 !=== "10"

//&& significa "and", || siginifica "or".

/*
function testSize(num) {
    if (num < 5) {
        return "Tiny"
    } else if (num < 10) {
        return "Samll"
    } else if (num < 15) {
        return "Medium"
    } else if (num < 20) {
        return "Large"
    } else {
        return "Huge"
    }
}
console.log(testSize(40));
*/

/*
//var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]
const names = {
    HOLE_IN_ONE: "Hole-in-one!",
    EAGLE: "Eagle",
    BIRDIE: "Birdie",
    PAR: "Par",
    BOGEY: "Bogey",
    DOUBLE_BOGEY: "Double Bogey",
    GO_HOME: "Go Home!"
}
class Score {
    static isHoleInOne(strokes) {
        return strokes === 1;
    }
    static isEagle(par, strokes) {
        return strokes <= par - 2;
    }
    static isBirdie(par, strokes) {
        return (strokes === par - 1);
    }
}
function golfScore(par, strokes) {
    if (Score.isHoleInOne(strokes)) return names.HOLE_IN_ONE;
    if (Score.isEagle(par, strokes)) return names.EAGLE;
    if (Score.isBirdie(par, strokes)) return names.BIRDIE;

}
    /*
    if (strokes === 1) {
        return names[0]
    } else if (strokes <= par - 2) {
        return names[1]
    } else if (strokes === par - 1) {
        return names[2]
    } else if (strokes === par) {
        return names[3]
    } else if (strokes === par + 1) {
        return names[4]
    } else if (strokes === par + 2) {
        return names[5]
    } else (strokes >= par + 3) 
        return names[6]
    
console.log(golfScore(5, 4));
*/

/*function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gama";
            break;
        case 4:
            answer = "delta";
            break;
        default:
            answer = "outros"
            break;

    }

    return answer;
}
console.log(caseInSwitch(5));
*/

//se nao colocar o break; todos os cases retornarão a mesma answer;

//todos os operadors de comparação retorna um boolean statement.
/*function isLess(a, b) {
/*    if (a < b) {
        return true;
    } else {
        return false;
    }
}
    return a < b;
}
    console.log(isLess(10, 15));
*/

/*
var count = 0;

function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
var holdbet = "Hold"
if (count > 0) {
    holdbet = "bet"
}

    return count + " " + holdbet;
}

cc(2); cc(2); cc(10); cc(4); cc("A");
console.log(cc(4));
*/

//Objetcts .notation ou [notation]
/*var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};
testObj["24"] = "Hempshire"
var playerNumber = 24;
var player = testObj[playerNumber];
console.log(player);
delete testObj[12];
console.log(testObj);
*/

/*
function phoneticLookup(val) {
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "foxtrot": "Frank"
    };
    result = lookup[val];
    return result;
}
console.log(phoneticLookup("charlie"));
*/

/*
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not Found"
    }
}
console.log(checkObj("churima"));
*/

//Pode se colocar um objeto dentro de um array, ficaria assim:
/*
var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },

    {
        "artist": "Beau Carnes",
        "title": "Cereal Man",
        "release_year": 2003,
        "formats": [
            "YouTube video"
        ]
    }
];
 */

