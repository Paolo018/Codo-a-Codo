function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });} //Es para el btnInicio


 //Es para el modal del login
document.getElementById("clearButton").addEventListener("click", function() {
document.getElementById("loginForm").reset();});

document.getElementById('product-form').addEventListener('submit', function(event) {
    let products = document.querySelectorAll('input[name="product"]:checked');
    let size = document.querySelector('input[name="size"]:checked');

    if (products.length === 0) {
        alert('Por favor, seleccione al menos una prenda.');
        event.preventDefault();
        return;
    }

    if (!size) {
        alert('Por favor, seleccione un talle.');
        event.preventDefault();
        return;
    }
});

document.querySelectorAll('.product-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const talleSection = this.closest('article').querySelector('.SeleccionTalle');
        if (this.checked) {
            talleSection.style.display = 'block';
        } else {
            talleSection.style.display = 'none';
        }
    });
});

document.getElementById('realizar-pedido-btn').addEventListener('click', function() {
    const form = document.createElement('form');
    form.innerHTML = `
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required>
        <label for="lastname">Apellido:</label>
        <input type="text" id="lastname" name="lastname" required>
        <label for="firstname">Nombre:</label>
        <input type="text" id="firstname" name="firstname" required>
        <label for="payment">Medio de Pago:</label>
        <select id="payment" name="payment" required>
            <option value="credit-card">Tarjeta de crédito</option>
            <option value="debit-card">Tarjeta de débito</option>
            <option value="cash">Efectivo</option>
            <option value="bank-transfer">Transferencia Bancaria</option>
            <option value="virtual-wallet">Transferencia Billetera Virtual</option>
        </select>
        <label for="province">Provincia:</label>
        <input type="text" id="province" name="province" required>
        <label for="locality">Localidad:</label>
        <input type="text" id="locality" name="locality" required>
        <button type="submit" class="btn btn-primary">Aceptar</button>
        <button type="button" class="btn btn-secondary" id="cancel-btn">Cancelar</button>
    `;
    document.body.appendChild(form);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = form.email.value;
        const lastname = form.lastname.value;
        const firstname = form.firstname.value;
        const payment = form.payment.value;
        const province = form.province.value;
        const locality = form.locality.value;

        const products = [];
        document.querySelectorAll('input[name="product"]:checked').forEach(checkbox => {
            const article = checkbox.closest('article');
            const name = checkbox.value;
            const price = article.querySelector('p').textContent;
            const size = article.querySelector('input[name^="size"]:checked').value;
            const quantity = article.querySelector('input[name^="quantity"]').value;
            products.push({ name, price, size, quantity });
        });

        const totalAmount = products.reduce((total, product) => total + (parseFloat(product.price.replace('$', '')) * product.quantity), 0);
        const orderDetails = `
            Email: ${email}
            Nombre: ${firstname}
            Apellido: ${lastname}
            Medio de Pago: ${payment}
            Provincia: ${province}
            Localidad: ${locality}
            Productos:
            ${products.map(p => `${p.name} - ${p.price} - Talle: ${p.size} - Cantidad: ${p.quantity}`).join('\n')}
            Total: $${totalAmount}
        `;

        // Send email logic here (using an email sending service/API)

        alert('Pedido enviado con éxito');
        form.remove();
    });

    document.getElementById('cancel-btn').addEventListener('click', function() {
        form.remove();
    });
});

