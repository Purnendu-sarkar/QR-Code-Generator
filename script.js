const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');

// Populate size options dynamically
for (let i = 100; i <= 1000; i += 100) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = `${i}x${i}`;
    sizes.appendChild(option);
}

let size = sizes.value;

generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    generateQRCode();
});

sizes.addEventListener('change', (e) => {
    size = e.target.value;
});

downloadBtn.addEventListener('click', () => {
    const img = qrContainer.querySelector('img');
    downloadBtn.href = img ? img.src : document.querySelector('canvas').toDataURL();
});

function generateQRCode() {
    if (!qrText.value) {
        alert("Enter the text or URL to generate your QR code");
        return;
    }
    
    qrContainer.innerHTML = ""; // Clear previous QR code
    new QRCode(qrContainer, {
        text: qrText.value,
        height: size,
        width: size,
        colorLight: "#fff",
        colorDark: "#000",
    });
}

