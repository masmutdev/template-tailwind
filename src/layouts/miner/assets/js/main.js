function showModal() {
  const modalElement = document.getElementById('popup-modal');
  
  if (modalElement) {
    const modal = new Modal(modalElement, {
      backdrop: 'dynamic', 
      closable: true     
    });
    
    modal.show(); 
  }
}

function showImageModal() {
  const modalElement = document.getElementById('image-modal');
  
  if (modalElement) {
    const modal = new Modal(modalElement, {
      backdrop: 'dynamic',
      closable: true
    });
    
    modal.show(); 
  }
}

document.addEventListener('DOMContentLoaded', function () {
  showModal(); 
});
