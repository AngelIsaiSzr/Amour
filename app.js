function openPage() {
    const container = document.querySelector('.card');
    container.classList.add('fade-out');
  
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 600);
  }