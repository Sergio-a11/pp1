function mostrarAlerta()
{
    alert('Hola mundo');
}

function hacerClic()
{
    /*Vector de todos los parrafos del documento, al hacer click añade mostrarAlerta*/
    document.getElementsByTagName('p')[1].onclick = mostrarAlerta;
}
/*En toda la ventana carga el método hacerClic, hasta que ocurra el evento*/
window.onload = hacerClic;

function capturarNombre()
{
    var nombre = "";
    nombre = prompt("Escribe tu nombre: ", "");
    if(nombre.equals(null))
    {
        alert("Ey! no has ingresado nada");
    }
    else
    {
        alert("Binevenido " + nombre);
    }
}

function nPares()
{
    var r = "<style>table, td {padding: 7px; border: 1px solid black; border-collapse: collapse;}</style><table><tr>";
    for(var i = 2; i<=1000; i+=2)
    {
        r = r + "<td>"+i+"</td>";
        if(i % 50 === 0)
        {
            r = r + "</tr><tr>";
        }
        
    }
    r = r + "</tr></table>";
    document.write(r);
}



