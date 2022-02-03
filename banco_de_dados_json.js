//JSON
funcionarios = {
    nome: ["Jose", " Maria", " Ana"],
    idade: 30,
    cidade: "nova york"
}
console.log(funcionarios);
console.log('JSON');
console.log('IDADE: ' + funcionarios.idade);
console.log("Nome dos funcionarios: " + funcionarios.nome);
console.log("Nome do segundo funcionario: " + funcionarios.nome[1]);

console.log("\n");
//conversão de json para js
const obj = JSON.parse('{"name":"Jonny", "age":22, "city":"Washington"}');
console.log(obj);
console.log('CONVERSÃO DE JSON PARA JS');
console.log('idade do objeto convertido: ' + obj.age);

console.log('\n');
//conversão com array
console.log('CONVERSÃO COM ARRAY');
const text = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(text);
console.log(myArr[2]);


console.log('\n');
//repetição no objeto
console.log('REPETIÇÃO NO OBJETO')
const myJSON2 = '{"name":"João", "age":12, "car":null}';
const myObj = JSON.parse(myJSON2);
let text2 = "";
for (const x in myObj) {
    text2 += x + ", ";
    console.log('x: ' + x)
    console.log('text2: ' + text2);
}
console.log(text2);

console.log('\n');
//conversão com um objeto data no meio
console.log('CONVERSÃO COM UM OBJETO DATA NO MEIO')
const texto = '{"name":"Mariana", "birth":"1986-12-14", "city":"São Paulo"}';
const objeto = JSON.parse(texto);
objeto.birth = new Date(objeto.birth);
console.log(objeto)

console.log('\n');
//converter string para data com reviver
console.log('CONVERSÃO STRING PARA DATA COM REVIVER');
const frase = '{"name":"José", "birth":"1986-12-14", "city":"Rio de Janeiro"}';
const objeto2 = JSON.parse(frase, function (key, value) {
    if (key == "birth") {
        return new Date(value);
    } else {
        return value;
    }
});
console.log(objeto2.birth);

console.log('\n');
//converter string para função
console.log('CONVERTER STRING PARA FUNÇÃO');
const text3 = '{"name":"Lucas", "age":"function () {return 15}", "city":"Campinas"}';
const obj3 = JSON.parse(text3);
obj3.age = eval("(" + obj3.age + ")");
console.log(obj3.age)
console.log(obj3.age());

console.log('\n');
//conversão de objeto para string
console.log('CONVERSÃO DE OBJETO PARA STRING. VALE PARA ARRAY TAMBEM');
const obj2 = { name: "Fernanda", age: 80, city: "Susano" };
const myJSON = JSON.stringify(obj2);
console.log("objeto: " + myJSON)

console.log('\n');
//conversão de array para string
console.log('CONVERSÃO DE ARRAY PARA STRING');
const arr = ["John", "Peter", "Sally", "Jane"];
const myJSON3 = JSON.stringify(arr);
console.log(myJSON3)

console.log('\n');
//armazenar dados
console.log('ARMAZENAR DADOS');
const myObj2 = { name: "Milton", age: 72, city: "São Paulo" };
const myObj3 = { name: "Mayumi", age: 20, city: "São Paulo" };
const myJSON4 = JSON.stringify(myObj2);
localStorage.setItem("testJSON", myJSON4);
let text4 = localStorage.getItem("testJSON");
let obj4 = JSON.parse(text4);
const myJSON5 = JSON.stringify(myObj3);
localStorage.setItem("testJSON", myJSON5);
let text5 = localStorage.getItem("testJSON");
let obj5 = JSON.parse(text5);
console.log(obj4);
console.log(obj5);

