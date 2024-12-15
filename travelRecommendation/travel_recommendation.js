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
            <div class="ourTeamPeople">
                <p class="ourTeam__name">${people.name}</p>
                <p class="common">${people.name} is responsible for...</p>
                <p class="ourTeam__position">${people.position}</p>
            </div>
            
        `
    })
    equipo.innerHTML = agregarContenido;
    
})


function borrarContenido(){
    document.getElementById("buscador").value = "";
    let mostrar = document.getElementById('resultadoBusqueda')
    mostrar.innerHTML = ""
}

function buscar(){
    let busqueda = document.getElementById('buscador').value.toLowerCase();
    let mostrar = document.getElementById('resultadoBusqueda')
    let agregarContenido = ""
    fetch("/travelRecommendation/travel_recommendation_api.json")
    .then(response => response.json())
    .then(data =>{
        let keys = Object.keys(data)
        keys.forEach(key => {
            if (key.includes(busqueda)) {
                data[key].forEach(valor => {
                    agregarContenido += `
                    <img src="${valor.imageUrl}">
                    <p>${valor.name}</p>
                    <p>${valor.description}</p>
                    `;
                });
                mostrar.innerHTML = agregarContenido;
                agregarContenido = "";
            }
        })        
    })

}
