let idade = 62;
if (idade < 0 || idade > 125){
    console.log("Digite uma idade válida");
} else {
    let status = idade >= 18 ? "Maior de idade" : "Menor"
    console.log(status);
}