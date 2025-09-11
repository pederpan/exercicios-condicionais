let dia = -15;
let resp;

if (dia <= 0 || dia >= 8){
    resp = "Digite um dia da semana válido";
} else {
    switch (dia){
        case 1:
            resp = "Domingo";
            break;
        case 2:
            resp = "Segunda";
            break;
        case 3:
            resp = "Terça";
            break;
        case 4:
            resp = "Quarta";
            break;
        case 5:
            resp = "Quinta";
            break;
        case 6:
            resp = "Sexta";
            break;
        case 7:
            resp = "Sábado";
            break;
    }
}

console.log(resp);