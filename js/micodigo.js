const boton = document.getElementById("button-addon2")
//console.log(boton)//

//función estandar
//function nombre (){}

//función anonima
//function (){}

//función flecha
//()=>{}



const inputvalor = document.getElementById("inputvalorhora")

let valorhora = 0

let nombres = [];
let horasT = [];
let sueldo = [];
let salud = [];
let aux = [];
let total = [];


boton.addEventListener("dblclick" , ()=>{
    
    console.log(inputvalor.value)

    valorhora = parseFloat(inputvalor.value)
    
    document.getElementById("valor").innerHTML = inputvalor.value
})


// inputvalor.addEventListener("keyup" , ()=>{
   
//     document.getElementById("valor").innerHTML = inputvalor.value

//     valorhora = parseFloat(inputvalor.value)
// })


inputvalor.addEventListener("keydown" , ()=>{

    if (event.key === 'Enter') {

        valorhora = parseFloat(inputvalor.value)
        document.getElementById("valor").innerHTML = inputvalor.value

       
   }

    
})


const btagregar = document.getElementById("agregar")
const inputnombre = document.getElementById("nombre")
const inputhorasT = document.getElementById("horastrabajadas")

btagregar.addEventListener("click", () => {

    nombres.push(inputnombre.value)
    let horas = parseInt(inputhorasT.value)
    horasT.push(inputhorasT.value)

    let sueldobase = valorhora*horas;
    sueldo.push(sueldobase);

    let valorsalud = sueldobase * 0.04 
    salud.push(valorsalud);

    let auxilio = 0
    if (sueldobase < 2000000){
        auxilio = sueldobase * 0.08
    }
    aux.push(auxilio)

    let total_real = sueldobase - valorsalud + auxilio
    total.push(total_real)

    console.log(nombres)
    console.log(horasT)
    console.log(sueldo)
    console.log(salud)
    console.log(aux)
    console.log(total)
    imprimirarreglos()
})



// function imprimirarreglosgggg(){
//     let filas = ''
//     for(let i = 0; i < nombres.length; i++){
//         filas +=`<tr>
//                         <td>`+nombres[i]+`</td>
//                         <td>`+horasT[i]+`</td>
//                         <td>`+sueldo[i]+`</td>
//                         <td>`+salud[i]+`</td>
//                         <td>`+aux[i]+`</td>
//                         <td>`+total[i]+`</td>
//                 </tr>`;
//     }
//     document.getElementById("datos").innerHTML = filas
// }


function imprimirarreglos(){
    const cuerpotabla = document.getElementById("datos")

    for(let i = 0; i < nombres.length; i++){
        const fila = document.createElement("tr")
        const td1 = document.createElement("td")
        const td2 = document.createElement("td")
        const td3 = document.createElement("td")
        const td4 = document.createElement("td")
        const td5 = document.createElement("td")
        const td6 = document.createElement("td")

        td1.textContent = nombres[i]
        td2.textContent = horasT[i]
        td3.textContent = sueldo[i]
        td4.textContent = salud[i]
        td5.textContent = aux[i]
        td6.textContent = total[i]

        fila.appendChild(td1)
        fila.appendChild(td2)
        fila.appendChild(td3)
        fila.appendChild(td4)
        fila.appendChild(td5)
        fila.appendChild(td6)

        cuerpotabla.appendChild(fila)
    }

}
