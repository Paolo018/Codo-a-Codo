function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document.addEventListener('DOMContentLoaded', function() {
    let cotizacionUSD = 0;
    let cotizacionEUR = 0;

    async function mostrarCotizaciones() {
        try {
            const response = await fetch('https://api.bluelytics.com.ar/v2/latest');
            const data = await response.json();
            document.getElementById("cotizacion-USD").textContent = data.oficial.value_buy;
            document.getElementById("cotizacion-EUR").textContent = data.oficial_euro.value_buy;
            cotizacionUSD = data.oficial.value_buy;
            cotizacionEUR = data.oficial_euro.value_buy;
        } catch (error) {
            console.error("Error al obtener las cotizaciones:", error);
            document.getElementById("cotizacion-USD").textContent = "N/A";
            document.getElementById("cotizacion-EUR").textContent = "N/A";
        }
    }

    mostrarCotizaciones();

    function calcularCosto() {
        let totalARS = 0;
        let selectedProducts = [];
        let productTitles = [];
        document.querySelectorAll('.product-checkbox:checked').forEach(function(checkbox) {
            const article = checkbox.closest('article');
            const precio = parseFloat(article.querySelector('.precio').textContent);
            const titulo = article.querySelector('h4').textContent;

            totalARS += precio;
            selectedProducts.push(checkbox.value);
            productTitles.push(titulo);
        });

        let totalUSD = 0;
        let totalEUR = 0;
        if (cotizacionUSD > 0) {
            totalUSD = totalARS / cotizacionUSD;
        }
        if (cotizacionEUR > 0) {
            totalEUR = totalARS / cotizacionEUR;
        }
        document.getElementById('cantidadProductos').textContent = selectedProducts.length;
        document.getElementById('costoARS').textContent = totalARS.toFixed(2);
        document.getElementById('costoUSD').textContent = totalUSD.toFixed(2);
        document.getElementById('costoEUR').textContent = totalEUR.toFixed(2);
        document.getElementById('detalleProductos').textContent = productTitles.join(' + ');
    }

    document.querySelectorAll('.product-checkbox').forEach(function(checkbox) {
        checkbox.addEventListener('change', calcularCosto);
    });

    document.getElementById('calcular-costo-btn').addEventListener('click', calcularCosto);
});


function toggleCompra() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var algunSeleccionado = Array.from(checkboxes).some(checkbox => checkbox.checked);
    var datosCompra = document.getElementById('datoscompra');
    var botonesFin = document.getElementById('botones-fin');

    datosCompra.style.display = algunSeleccionado ? 'block' : 'none';
    botonesFin.style.display = algunSeleccionado ? 'block' : 'none';
}
document.addEventListener('DOMContentLoaded', toggleCompra);

var checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', toggleCompra);
});

// Función para obtener los datos del pedido
function obtenerDatosPedido() {
    var tablaCompra = document.getElementById('tabla-compra');
    var filas = tablaCompra.querySelectorAll('tr');
    var datosPedido = 'Pedido ---> ';
    filas.forEach(fila => {
        var cells = fila.querySelectorAll('td');
        cells.forEach(cell => {
            datosPedido += cell.textContent + '\n';
        });
    });
    datosPedido += '\n' + '\n';
    datosPedido += 'Ingrese si realizará retiro en local o necesita envío: \n';
    datosPedido += '\n';
    datosPedido += 'Indique moneda con la que abonará: \n';
    datosPedido += '\n';
    datosPedido += 'Indique medio de pago: \n';
    datosPedido += '\n';
    datosPedido += 'Si eligió envío localidad y código postal: \n';
    datosPedido += '\n';
    datosPedido += 'Muchas gracias por su contacto, un asesor se comunicará dentro de las próximas 24hs';
    return datosPedido;
}

function enviarPedido() {
    var datosPedido = obtenerDatosPedido();
    var asunto = '2';
    var consulta = datosPedido;
    var url = '/components/contacto.html?Asunto=' + encodeURIComponent(asunto) + '&Message=' + encodeURIComponent(consulta);
    window.location.href = url;
}
var realizarPedidoBtn = document.getElementById('realizar-pedido-btn');
realizarPedidoBtn.addEventListener('click', enviarPedido);