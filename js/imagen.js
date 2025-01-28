let imagen = "";

fetch("https://api.nasa.gov/planetary/apod?api_key=6AeHO6agR9HVx8tMi3e1T5T7yLRhgY3Odo1mw2kY")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        imagen = data.hdurl;
        // Actualiza la imagen tan pronto como se obtenga el url
        actualizarImagen();
    })

window.addEventListener('load', (event) => {
    actualizarImagen()
})

function actualizarImagen() {
    const apiImg = document.getElementById("img");
    // Elimina la antigua imagen si existe
    apiImg.innerHTML = "";

    // Crea y añade la nueva imagen
    let img = document.createElement("img");
    img.className = "imagen";
    img.src = imagen;
    img.alt = "";
    
    apiImg.appendChild(img);
}

   