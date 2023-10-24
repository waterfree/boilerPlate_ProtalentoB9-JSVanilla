console.log("Estamos online")

const url = "http://localhost:3000/users"
async function traerDatos(){
try {

    
        const data = await fetch(url);
        let response = await data.json();
        console.log(response);
        return response;
    
    
} catch (error) {
    console.log({error: error});    
}
}

let buttonData = document.getElementById("data");
console.log(buttonData);

buttonData.addEventListener("click", async function(){
    await traerDatos();
});