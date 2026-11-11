document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
    const whatsappLink = document.getElementById("whatsappLink");

    const telefono = "523315263990";
    const mensaje = "Me gustaría solicitar una cotización";

    whatsappLink.href = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
});