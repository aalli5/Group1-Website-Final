async function loadWord() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const res = await fetch('words.json');
    const words = await res.json();
    const w = words.find(x => x.id === id);
    if (!w) {
      document.querySelector('.container').innerHTML = '<p>Word not found.</p>';
      return;
    }
  
    document.querySelector('.word-title').textContent = w.word;
    document.querySelector('.age-group').textContent = w.ageGroup;
    document.querySelector('.word-definition p').textContent = w.definition;
    document.querySelector('.accuracy-percentage').textContent = `Definition Accuracy: ${w.accuracy}%`;
  
    const commentsDiv = document.querySelector('.sample-comments');
    commentsDiv.innerHTML = w.comments.map(c => `
      <div class="sample-comment">
        <div class="comment-text">${c.text}</div>
      </div>
    `).join('');
  }
  
  window.addEventListener('DOMContentLoaded', loadWord);
  