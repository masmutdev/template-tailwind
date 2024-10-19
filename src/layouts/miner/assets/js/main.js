function showModal() {
  const modalElement = document.getElementById("popup-modal");

  if (modalElement) {
    const modal = new Modal(modalElement, {
      backdrop: "dynamic",
      closable: true,
    });

    modal.show();
  }
}

function showImageModal() {
  const modalElement = document.getElementById("image-modal");

  if (modalElement) {
    const modal = new Modal(modalElement, {
      backdrop: "dynamic",
      closable: true,
    });

    modal.show();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("popup-modal")) {
    showModal();
  }
});

// Generate QR Code and display it in the "showQR" element
function generateQRCode(url) {
  var qrContainer = document.getElementById("showQR");

  if (qrContainer) {
    qrContainer.innerHTML = ""; // Clear previous QR if exists
    new QRCode(qrContainer, {
      text: url,
      width: 128,
      height: 128,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
    });
  }
}

// Call generateQRCode when the page loads
document.addEventListener("DOMContentLoaded", function () {
  var urlElement = document.getElementById("generateQR");

  if (urlElement) {
    var url = urlElement.getAttribute("href");
    generateQRCode(url);
  }
});

// Function to copy text to clipboard
function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(function () {
      alert("Teks berhasil disalin: " + text);
    })
    .catch(function (err) {
      alert("Gagal menyalin teks: ", err);
    });
}

// Add event listeners for the "Salin" buttons
document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll("#salin"); // Ambil semua elemen dengan ID atau class yang sesuai

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var textToCopy = this.previousElementSibling.tagName === "P" ? this.previousElementSibling.textContent : this.previousElementSibling.getAttribute("href");

      copyToClipboard(textToCopy);
    });
  });
});
