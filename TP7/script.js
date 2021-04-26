var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
var diasDelMes = ["31","28","31","30","31","30","31","31","30","31","30","31"];
var mesigual31 = document.querySelector("#fila");
var mesmenor31 = document.querySelector("#fila2");

async function esperar(ms) {
   return new Promise(resolve => setTimeout(resolve,ms));
}

async function cargarmeses(){
   for (let i = 0; i < meses.length; i++) {
      creartr(i);
      await esperar(1000); 
   }        
}

function creartr(i) {
            
   const tr = document.createElement('tr');

   const tdmes = document.createElement('td');
   const tdmestxt = document.createTextNode(meses[i]);
   tdmes.appendChild(tdmestxt);

   const tdcantdias = document.createElement('td');
   const tdcantdiastxt = document.createTextNode(diasDelMes[i]);
   tdcantdias.appendChild(tdcantdiastxt);

   tr.appendChild(tdmes);
   tr.appendChild(tdcantdias); 

   if (diasDelMes[i]==31) {
      mesigual31.appendChild(tr);
   } else{
      mesmenor31.appendChild(tr);
   }      
}

