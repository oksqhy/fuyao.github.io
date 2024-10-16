const characters = [
    {
        name: '符瑶',
        description: '一个可爱的女仆狗狗。',
        largeImg: 'img/character1-large.jpg',
        smallImg: 'img/character1-small.jpg',
    },
    {
        name: '触手萝莉',
        description: '神秘的触手萝莉角色。',
        largeImg: 'img/character2-large.jpg',
        smallImg: 'img/character2-small.jpg',
    },
    {
        name: '成熟大狗狗',
        description: '成熟稳重的大狗狗。',
        largeImg: 'img/character3-large.jpg',
        smallImg: 'img/character3-small.jpg',
    },
    {
        name: '鲨鱼狗狗',
        description: '可爱的鲨鱼狗狗。',
        largeImg: 'img/character4-large.jpg',
        smallImg: 'img/character4-small.jpg',
    },
    {
        name: 'Q版符瑶',
        description: 'Q版的符瑶形象。',
        largeImg: 'img/character5-large.jpg',
        smallImg: 'img/character5-small.jpg',
    },
];

const largeImgElement = document.getElementById('character-large-img');
const nameElement = document.getElementById('character-name');
const descriptionElement = document.getElementById('character-description');
const thumbnailBlocks = document.querySelectorAll('.thumbnail-block');

thumbnailBlocks.forEach((block, index) => {
    block.addEventListener('click', () => {
        // Update the selected character
        const character = characters[index];
        largeImgElement.src = character.largeImg;
        nameElement.textContent = character.name;
        descriptionElement.textContent = character.description;

        // Add selected class to the clicked thumbnail, remove from others
        thumbnailBlocks.forEach(b => b.classList.remove('selected'));
        block.classList.add('selected');
    });

    block.addEventListener('mouseenter', () => {
        block.classList.add('hovered');
    });

    block.addEventListener('mouseleave', () => {
        block.classList.remove('hovered');
    });
});

// Default to first character
thumbnailBlocks[0].click();
