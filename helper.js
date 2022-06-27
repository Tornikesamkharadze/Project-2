const COLORS = ["seagreen","royalblue","cadetblue","darkslategrey","dodgerblue","#9B2335"];
const BUTTON = document.getElementById("clickme");

export const BTN = BUTTON.addEventListener("click",() =>{
    document.body.style.backgroundColor = COLORS[GETRANDOMNUMS()];
})

const GETRANDOMNUMS = function (){
    return Math.floor(Math.random() * (COLORS.length + 1))
}

/* weather app */

const weatherApi = "https://weatherdbi.herokuapp.com/data/weather/tbilisi";
const temperature = document.querySelector(".temp_num");
const comment = document.querySelector(".comment");
const windKm = document.querySelector(".wind_km");
const weath = document.querySelector(".weather")
const dayHour = document.querySelector(".dayhour")


const weatherData = async () => {
    const {currentConditions} = await fetch(weatherApi)
    .then(response => response.json());
    temperature.innerHTML = currentConditions.temp.c;
    comment.innerHTML = currentConditions.comment;
    windKm.innerHTML = currentConditions.wind.km;
    weath.style.backgroundImage =`url(${currentConditions.iconURL})`;
    dayHour.innerHTML = currentConditions.dayhour;
    console.log(currentConditions)
}

weatherData()

export const container = document.createElement("div")
document.body.appendChild(container)



/* TODO LIST CODING */


let input = document.querySelector(".entered-list")
let addBtn = document.querySelector(".add-list")
let tasks = document.querySelector(".tasks")

input.addEventListener("keyup", ()=>{
    if(input.value != 0){
        addBtn.classList.add("active")
    }else{
        addBtn.classList.remove("active")
    }
})

/* export const myFunction =  */addBtn.addEventListener("click", ()=> {
    if(input.value != 0){
        let newItem = document.createElement("div");
        newItem.classList.add("item");
        newItem.innerHTML = `<p> ${input.value}<p>
        <div class="item completed">
            <div class="item-btn">
                <i class="fa-solid fa-check"></i>
                <i class="fa-solid fa-circle-minus"></i>
            </div>
        </div>`
        /*  */
        tasks.appendChild(newItem);
        input.value = " "
    }else{
        alert ("გთხოვთ შეავსოთ ველი")
    }
})

tasks.addEventListener("click", (e)=>{
    if(e.target.classList.contains("fa-circle-minus")){
        e.target.parentElement.parentElement.parentElement.remove();
    }
})


tasks.addEventListener("click", (e)=>{
    if(e.target.classList.contains("fa-check")){
        e.target.parentElement.parentElement.parentElement.classList.toggle("completed");
    }
})