/*const form = document.getElementById('formIndex');
form.addEventListener('submit', sendEmail)

const serviceId = 'service_kl3065j'
const templateId = 'template_v98joke'
const apiKey = '6LC59AszJuZqQ4oF9'


function sendEmail(event) {
    event.preventDefault()
    emailjs.init(serviceId)

    emailjs.sedForm(serviceId,templateId,form,apiKey)
    .then(result => Swal.fire("su mensaje se ha enviado con exito"))
    .catch((error) => {
        Swal.fire({
            icon: "error",
            tittle: "Oops...",
            text: "Hubo un error al enviar el mensaje, intentelo más tarde"
        })
    })
}*/

const form = document.getElementById('formIndex');
form.addEventListener('submit', sendEmail);

const serviceId = 'service_kl3065j';
const templateId = 'template_v98joke';
const apiKey = '6LC59AszJuZqQ4oF9';

function sendEmail(event) {
    event.preventDefault();
    
    emailjs.init(apiKey);
    
    emailjs.sendForm(serviceId, templateId, form)
        .then(result => {
            Swal.fire("Su mensaje se ha enviado con éxito");
        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Hubo un error al enviar el mensaje, inténtelo más tarde"
            });
        });
}