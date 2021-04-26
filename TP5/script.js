var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
var diasDelMes = ["31","28","31","30","31","30","31","31","30","31","30","31"];

//primero me fijo que meses tienen 31 dias
for (let i = 0; i < 12; i++) {
    if (diasDelMes[i] == 31 ) {
        console.log(meses[i]);
    }
    
}

//segundio me fijo que meses tienen 30 dias
for (let i = 0; i < 12; i++) {
    if (diasDelMes[i] == 30 ) {
        console.log(meses[i]);
    }
    
}