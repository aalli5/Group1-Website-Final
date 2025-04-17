async function buildHomepage() {
    const res = await fetch('words.json');
    const words = await res.json();
  
    // Popular (first 4)
    const popular = words.slice(0, 4);
    const list = document.querySelector('.popular-words');
    list.innerHTML = popular.map(w => `
      <li onclick="location.href='word.html?id=${w.id}'">
        <div class="word-title">${w.word}</div>
        <div class="word-meaning">${w.definition}</div>
        <span class="age-group">${w.ageGroup}</span>
        <div class="word-stats">
          <div>↑ ${w.ratings.helpful}</div>
          <div>💬 ${w.comments.length}</div>
        </div>
      </li>
    `).join('');
  
    // Full list view (all words)
    const fullList = document.querySelector('.words-list');
    fullList.innerHTML = words.map(w => `
      <div class="word-item" onclick="location.href='word.html?id=${w.id}'">
        <div class="word-info">
          <div class="word-title">${w.word}</div>
          <div class="word-meaning">${w.definition}</div>
          <span class="age-group">${w.ageGroup}</span>
        </div>
        <div class="word-stats">
          <div>↑ ${w.ratings.helpful}</div>
          <div>💬 ${w.comments.length}</div>
        </div>
      </div>
    `).join('');
  }
  
  window.addEventListener('DOMContentLoaded', buildHomepage);
  