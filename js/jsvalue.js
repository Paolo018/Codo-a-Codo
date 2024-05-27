function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });} //Es para el btnInicio


 //Es para el modal del login
document.getElementById("clearButton").addEventListener("click", function() {
document.getElementById("loginForm").reset();});

document.addEventListener('DOMContentLoaded', () => {
    // Validación del formulario de registro
    const registroForm = document.getElementById('registroForm');
    if (registroForm) {
        registroForm.addEventListener('submit', (event) => {
            const password = document.getElementById('password').value;
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

            if (!passwordRegex.test(password)) {
                alert('La contraseña debe tener al menos una mayúscula, una minúscula, un carácter especial y un número.');
                event.preventDefault();
            }
        });
    }

    // Habilitar campos de selección de talles y cantidad al seleccionar productos
    const productCheckboxes = document.querySelectorAll('.product-checkbox');
    productCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (event) => {
            const parentArticle = event.target.closest('article');
            const sizeRadios = parentArticle.querySelectorAll('input[type="radio"]');
            const quantityInput = parentArticle.querySelector('input[type="number"]');
            sizeRadios.forEach(radio => radio.disabled = !event.target.checked);
            quantityInput.disabled = !event.target.checked;
        });
    });

    // Validación al enviar el formulario de productos
    const productForm = document.getElementById('product-form');
    if (productForm) {
        productForm.addEventListener('submit', (event) => {
            let valid = true;
            const selectedProducts = document.querySelectorAll('.product-checkbox:checked');
            selectedProducts.forEach(checkbox => {
                const parentArticle = checkbox.closest('article');
                const selectedSize = parentArticle.querySelector('input[type="radio"]:checked');
                const quantity = parentArticle.querySelector('input[type="number"]').value;
                if (!selectedSize || !quantity) {
                    valid = false;
                }
            });

            if (!valid) {
                alert('Debe seleccionar un talle y una cantidad para cada producto.');
                event.preventDefault();
            }
        });
    }

    // Enviar los datos básicos del usuario y los datos del pedido por correo
    const realizarPedidoBtn = document.getElementById('realizar-pedido-btn');
    if (realizarPedidoBtn) {
        realizarPedidoBtn.addEventListener('click', () => {
            const selectedProducts = document.querySelectorAll('.product-checkbox:checked');
            let pedido = [];
            selectedProducts.forEach(checkbox => {
                const parentArticle = checkbox.closest('article');
                const selectedSize = parentArticle.querySelector('input[type="radio"]:checked').value;
                const quantity = parentArticle.querySelector('input[type="number"]').value;
                pedido.push({
                    producto: checkbox.value,
                    talle: selectedSize,
                    cantidad: quantity
                });
            });

            const user = {
                nombre: document.getElementById('Name').value,
                apellido: document.getElementById('Apellido').value,
                email: document.getElementById('Email').value
            };

            const data = {
                usuario: user,
                pedido: pedido
            };

            fetch('https://example.com/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                alert('Pedido enviado con éxito.');
            })
            .catch(error => {
                alert('Error al enviar el pedido.');
            });
        });
    }

    // Fetch para obtener la cotización del peso argentino contra otras monedas
    fetch('https://api.exchangerate-api.com/v4/latest/ARS')
        .then(response => response.json())
        .then(data => {
            const rates = data.rates;
            document.getElementById('cotizacion-USD').textContent = rates.USD;
            document.getElementById('cotizacion-EUR').textContent = rates.EUR;
            document.getElementById('cotizacion-BRL').textContent = rates.BRL;
            document.getElementById('cotizacion-UYU').textContent = rates.UYU;
        })
        .catch(error => {
            console.error('Error fetching exchange rates:', error);
        });
});

