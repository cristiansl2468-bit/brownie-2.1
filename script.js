// MOTOR DE WHATSAPP
document.addEventListener('submit', function(e) {
    if (e.target && e.target.id === 'orderForm') {
        e.preventDefault(); 
        const nombre = document.getElementById('nombre').value;
        const cantidad = document.getElementById('cantidad').value;
        const direccion = document.getElementById('direccion').value;
        const miTelefono = "525669188409"; 
        
        const mensaje = `*NUEVO PEDIDO KUKULCAO* 🟤%0A%0A` +
                        `*Nombre:* ${nombre}%0A` +
                        `*Pedido:* ${cantidad}%0A` +
                        `*Dirección:* ${direccion}%0A%0A` +
                        `_Enviado desde el sitio web_`;
        
        const url = `https://wa.me/${miTelefono}?text=${mensaje}`;
        window.open(url, '_blank');
    }
});
