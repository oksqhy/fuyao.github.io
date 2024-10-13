// 使用 fetch 获取 JSON 文件
fetch('./bilibili-stats.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // 从 JSON 文件中获取粉丝数和播放量
    const fansCount = data.data.card.fans; 
    const viewsCount = data.data.archive.view;

    // 更新页面上的数字
    document.getElementById('bilibili-fans').textContent = fansCount.toLocaleString();
    document.getElementById('bilibili-views').textContent = viewsCount.toLocaleString();
  })
  .catch(error => {
    console.error('Error fetching Bilibili stats:', error);
    document.getElementById('bilibili-fans').textContent = "无法加载";
    document.getElementById('bilibili-views').textContent = "无法加载";
  });
