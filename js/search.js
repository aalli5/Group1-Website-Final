window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const query = (params.get('q') || '').toLowerCase();
    document.getElementById('search-query').textContent = `Showing results for "${query}"`;
  
    fetch('words.json')
      .then(res => res.json())
      .then(words => {
        const results = words.filter(w => w.word.toLowerCase().includes(query));
        const resultsDiv = document.getElementById('results');
        if (results.length === 0) {
          resultsDiv.innerHTML = '<p>No results found.</p>';
        } else {
          resultsDiv.innerHTML = results.map(w => `
            <div class="result" onclick="location.href='word.html?id=${w.id}'">
              <div><strong>${w.word}</strong> — ${w.definition}</div>
              <small>Category: ${w.category} | Age: ${w.ageGroup}</small>
            </div>
          `).join('');
        }
      });
  });
  