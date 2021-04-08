var primeiroValor = parseInt(prompt('Digite o primeiro valor: '))

var segundoValor = parseInt(prompt('Digite o segundo valor: '))

//exemplo fazendo em outra linha ----primeiroValorInt = parseInt(primeiroValor)
var resultado = primeiroValor / segundoValor

var operacao = prompt("digite 1 para fazer uma divisão, 2 para multiplicação, 3 para soma e 4 para subtração:  ")


// divisao
if  (operacao == 1) {

   var resultado = primeiroValor / segundoValor

document.write("<h2>" + primeiroValor +" / " + segundoValor + " = " + resultado + "</h2>")


}// multiplicação 
else if (operacao == 2) {

 var resultado = primeiroValor * segundoValor

document.write("<h2>" + primeiroValor +" * " + segundoValor + " = " + resultado + "</h2>")


}//soma
else if (operacao == 3) {

 var resultado = primeiroValor + segundoValor

document.write("<h2>" + primeiroValor +" + " + segundoValor + " = " + resultado + "</h2>")


}
//subtração
else if (operacao == 4) {

 var resultado = primeiroValor - segundoValor

document.write("<h2>" + primeiroValor +" - " + segundoValor + " = " + resultado + "</h2>")

} else {
 
document.write("<h2> Opção Invalida</h2>")
}







