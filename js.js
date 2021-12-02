let fechaActual = new Date();
let caducidadEnMs = fechaActual.getTime() + 1000 * 60 * 60 * 365;
let caducidad = new Date(caducidadEnMs);
if (confirm("¿Accede a guardar cookies?")) {
    let visitas = 0;
    if (document.cookie == '') {
        document.cookie = `visitas=0;expires=${caducidad.toUTCString()}`;
    } else {
        visitas = Number(document.cookie.split(";")[0].split("=")[1]);
        visitas++;
        document.cookie = `visitas=${visitas}`;
        alert(`Visitas: ${visitas}`);
    }
} else {
    document.cookie = `visitas=0;expires=${fechaActual.getTime()-1000}`;
}
console.log(document.cookie);