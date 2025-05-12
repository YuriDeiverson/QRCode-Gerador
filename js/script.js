const container = document.querySelector('.container');
const qrCodeBtn = document.querySelector('#qr-form button ');

const qrCodeInput = document.querySelector('#qr-form input');
const qrCodeImg = document.querySelector('#qr-code img');
// Eventos
function generateQRCode() {
 const qrCodeInputeValue = qrCodeInput.value;
 
 if (!qrCodeInputeValue) return;

  qrCodeBtn.innerText = 'Gerando Código...';

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputeValue}`;

  qrCodeImg.addEventListener('load', () => {
    container.classList.add('active');
    qrCodeBtn.innerText = 'Código criado!';
  })

}
qrCodeBtn.addEventListener('click', () => {
  generateQRCode()

});

qrCodeInput.addEventListener("keydown", (e) => {
  if(e.code === 'Enter') {
    generateQRCode();
  }

});

// Limar área do QR Code
qrCodeInput.addEventListener("keyup", () => {
  if(!qrCodeInput.value) {
    container.classList.remove('active');
    qrCodeBtn.innerText = 'Gerar QR Code';
  };
});  

