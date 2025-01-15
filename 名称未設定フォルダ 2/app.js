document.addEventListener('DOMContentLoaded', function() {
    // Simulated CMS data
    const cmsData = {
        navigation: [
            { text: "睡眠課題", href: "#challenges" },
            { text: "睡眠知識", href: "#knowledge" },
            { text: "睡眠バランス", href: "#balance" },
            { text: "専門家の声", href: "#expert" },
            { text: "お問い合わせ", href: "#contact" }
        ],
        hero: {
            title: "睡眠バランス研究PROJECT",
            subtitle: "睡眠バランスを整えて、良質な睡眠をめざしましょう",
            imageUrl: "https://ucarecdn.com/89bd5a8b-8b19-466a-b909-13ae3b0754fd/-/format/auto/"
        },
        challenges: {
            title: "睡眠課題",
            subtitle: "不眠大国ニッポン",
            description: "日本人の睡眠課題について",
            content: "睡眠時間の少なさによるリスクを紹介します。",
            tags: ["#睡眠不足", "#睡眠障害"],
            imageUrl: "https://ucarecdn.com/373018dc-b12f-4e74-9a84-98899259b57e/-/format/auto/"
        },
        // Add more sections here...
    };

    function createNavigation() {
        const nav = document.getElementById('main-nav');
        const ul = document.createElement('ul');
        cmsData.navigation.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = item.href;
            a.textContent = item.text;
            li.appendChild(a);
            ul.appendChild(li);
        });
        nav.appendChild(ul);
    }

    function createHeroSection() {
        const hero = document.getElementById('hero');
        hero.innerHTML = `
            <div class="container">
                <h1>${cmsData.hero.title}</h1>
                <p>${cmsData.hero.subtitle}</p>
                <img src="${cmsData.hero.imageUrl}" alt="睡眠中の脳とREM・non-REMのイラスト" />
            </div>
        `;
    }

    function createChallengesSection() {
        const challenges = document.getElementById('challenges');
        challenges.innerHTML = `
            <div class="container">
                <h2>${cmsData.challenges.title}</h2>
                <h3>${cmsData.challenges.subtitle}</h3>
                <h4>${cmsData.challenges.description}</h4>
                <p>${cmsData.challenges.content}</p>
                <div>
                    ${cmsData.challenges.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <img src="${cmsData.challenges.imageUrl}" alt="オフィスで伸びをする女性と日本地図のイラスト" />
            </div>
        `;
    }

    // Call functions to create sections
    createNavigation();
    createHeroSection();
    createChallengesSection();
    // Add more function calls for other sections...

    // Footer
    const footer = document.getElementById('main-footer');
    footer.innerHTML = `
        <div class="container">
            <p>&copy; 2025 睡眠バランス研究PROJECT. All rights reserved.</p>
        </div>
    `;
});

