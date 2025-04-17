document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button[type="submit"]').addEventListener('click', () => {
      const word = document.getElementById('word').value.trim();
      const def  = document.getElementById('definition').value.trim();
      if (!word || !def) {
        alert('Please fill in both fields.');
        return;
      }
      let suggestions = JSON.parse(localStorage.getItem('suggestions')||'[]');
      suggestions.push({ word, definition: def, timestamp: Date.now() });
      localStorage.setItem('suggestions', JSON.stringify(suggestions));
      alert('Thanks! Your suggestion has been recorded.');
      document.getElementById('word').value = '';
      document.getElementById('definition').value = '';
    });
  });
  