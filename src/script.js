editable = document.getElementById('q&a');

window.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('savedContent');
    if (saved !== null) {
      editable.innerHTML = saved;
    }
  });

  editable.addEventListener('input', () => {
    localStorage.setItem('savedContent', editable.innerHTML);
  });
