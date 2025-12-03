document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 模拟粉丝数获取 (因为没有后端，这里用假的数字演示效果)
    // 实际上线后，你可以寻找第三方的 Bilibili API 接口
    const biliTarget = 12580; // 替换成你想要展示的初始数字
    const ytTarget = 3420;

    function animateValue(id, start, end, duration) {
        const obj = document.getElementById(id);
        if (!obj) return;
        
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString();
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // 延迟一点执行动画，更有感觉
    setTimeout(() => {
        animateValue("bili-count", 0, biliTarget, 2000);
        animateValue("yt-count", 0, ytTarget, 2000);
    }, 500);

    // 2. 导航栏滚动效果 (滚动时背景变白)
    const nav = document.querySelector('.glass-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = "rgba(255, 255, 255, 0.95)";
            nav.style.padding = "10px 0";
            nav.style.boxShadow = "0 5px 20px rgba(0,0,0,0.05)";
        } else {
            nav.style.background = "rgba(255, 255, 255, 0.75)";
            nav.style.padding = "15px 0";
            nav.style.boxShadow = "none";
        }
    });

    // 3. 简单的入场动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });
    
    // 这里的 CSS 配合 style.css 里的 fade-in-up 类使用（如果需要更复杂的动画）
    // 目前主要靠 CSS 的 transition
});

 function formatToWan(number) {
                    if (number >= 10000) {
                        return (number / 10000).toFixed(2) + 'w';
                    }
                    return number; // 如果小于一万，直接返回原始值
                }
            
                async function fetchFansCount() {
                    try {
                        const response = await fetch('https://oksqhy.github.io/fuyao.github.io/bilibili-stats.json');
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        const data = await response.json();
                        console.log(data);
            
                        // 获取粉丝数
                        const fansCount = data.follower;
            
                        // 格式化
                        const formattedFansCount = formatToWan(fansCount);
            
                        // 更新 HTML 元素
                        document.getElementById('fans-count').innerText = formattedFansCount;
                    } 
                    catch (error) {
                        console.error('获取 B站 粉丝数失败:', error);
                        document.getElementById('fans-count').innerText = '获取失败';
                    }
                }
                fetchFansCount();
            
                async function fetchSubscribersCount() {
                    try {
                        const response = await fetch('https://oksqhy.github.io/fuyao.github.io/youtube-stats.json');
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        const data = await response.json();
                        console.log(data);
            
                        // 获取订阅数
                        const subscribersCount = data.subscribers;
            
                        // 格式化
                        const formattedSubscribersCount = formatToWan(subscribersCount);
            
                        // 更新 HTML 元素
                        document.getElementById('subscribers-count').innerText = formattedSubscribersCount;
                    } 
                    catch (error) {
                        console.error('获取 YouTube 订阅数失败:', error);
                        document.getElementById('subscribers-count').innerText = '获取失败';
                    }
                }
                fetchSubscribersCount();