console.log("Estamos online")

const url = "http://localhost:3000/users"

async function traerDatos(){
    const data = await fetch(url);
    let response = await data.json();
    console.log(response);
    return response;
}

let buttonData = document.getElementById("data");
console.log(buttonData);

buttonData.addEventListener("click", async function(){
    await traerDatos();
});