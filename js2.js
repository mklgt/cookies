let color = prompt("Introduce un color:");



function cookieColor (color){
    document.cookie=`color=${color}`;
}

function cambiarColor() {
    document.cookie.split(";").forEach(elemento => {
        if (elemento.includes("color")) {
            document.body.style.background=elemento.split("=")[1];
            console.log(elemento.split("=")[1])
        }
    });
}

cookieColor(color);
cambiarColor();