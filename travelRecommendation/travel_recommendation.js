let equipo = document.getElementById('team')
let peoples = [
    {
        id:1,
        name:"Jhon Doe",
        position:"CEO"
    },
    {
        id:2,
        name:"Celina Thomas",
        position:"Team Lead"
    },
    {
        id:3,
        name:"Mike Tysen",
        position:"Delivery Head"
    }
];

let agregarContenido= "";
document.addEventListener("DOMContentLoaded",function(){

    peoples.forEach(people =>{
        agregarContenido += `
            <h2>${people.name}</h2>
            <p>${people.position}</p>
        `
    })
    equipo.innerHTML = agregarContenido;
    agregarContenido = "";
})