const form = document.getElementById('formIndex');
form.addEventListener('submit', sendEmail)

const seviceId = 'service_kl3065j'
const templateId = 'template_v98joke'
const apiKey = '6LC59AszJuZqQ4oF9'


function sendEmail(event) {
    event.preventDefault()
    emailjs.init(seviceId)

    emailjs.sedForm(seviceId,templateId,form,apiKey)
    .then(result => Swal.fire("su mensaje se ha enviado con exito"))
    .catch(error => {
        Swal.fire({
            icon: 'error',
            tittle: 'Oops...',
            text: 'Hubo un error al enviar el mensaje, intentelo más tarde'
        })
    })
}