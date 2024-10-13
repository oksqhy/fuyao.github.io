// Fetch the Bilibili stats JSON file and update the numbers
fetch('https://fuyao.github.io/bilibili-stats.json')
  .then(response => response.json())
  .then(data => {
    const fansCount = data.data.card.fans;  
    const viewsCount = data.data.archive.view;  
    
    document.getElementById('bilibili-fans').textContent = fansCount;
    document.getElementById('bilibili-views').textContent = viewsCount;
  })
  .catch(error => console.error('Error fetching Bilibili stats:', error));
