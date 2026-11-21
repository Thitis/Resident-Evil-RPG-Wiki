import { wikiData } from "./data.js";
// 1. Importe a função do seu arquivo characteristics.js criado anteriormente
import { initCharacteristicsModule } from './modules/characteristics.js';

export function renderMenu(filter = "") {
    const categoryListEl = document.getElementById("categoryList");
    const normalizedFilter = filter.toLowerCase();

    categoryListEl.innerHTML = "";

    wikiData.forEach(category => {
        const filteredTopics = category.topics.filter(topic =>
            topic.title.toLowerCase().includes(normalizedFilter) ||
            topic.content.toLowerCase().includes(normalizedFilter) ||
            category.name.toLowerCase().includes(normalizedFilter)
        );

        if (filter && filteredTopics.length === 0) return;

        const categoryContainer = document.createElement("div");
        categoryContainer.className = "space-y-1";

        const categoryHeader = document.createElement("div");
        categoryHeader.className = "flex items-center justify-between px-3 py-2 text-xs font-mono-custom text-gray-400 uppercase tracking-wider bg-gray-900/60 rounded cursor-pointer hover:bg-gray-900 hover:text-white transition-colors";
        categoryHeader.innerHTML = `
            <span class="flex items-center gap-2"><i class="fa-solid ${category.icon} text-red-500"></i> ${category.name}</span>
            <i class="fa-solid fa-chevron-down text-[10px] transition-transform"></i>
        `;

        const topicsContainer = document.createElement("div");
        topicsContainer.className = "pl-3 space-y-1 mt-1 border-l border-gray-800 ml-3";

        const topicsToRender = filter ? filteredTopics : category.topics;

        topicsToRender.forEach(topic => {
            const topicButton = document.createElement("button");
            topicButton.className = "w-full text-left px-3 py-1.5 rounded text-xs text-gray-400 hover:text-white hover:bg-red-950/30 transition-all flex items-center justify-between group";
            topicButton.innerHTML = `
                <span>${topic.title}</span>
                <i class="fa-solid fa-chevron-right text-[9px] opacity-0 group-hover:opacity-100 text-red-500 transition-opacity"></i>
            `;
            topicButton.addEventListener("click", () => loadTopic(category.name, topic));
            topicsContainer.appendChild(topicButton);
        });

        categoryHeader.addEventListener("click", () => {
            topicsContainer.classList.toggle("hidden");
            const icon = categoryHeader.querySelector(".fa-chevron-down");
            icon.style.transform = topicsContainer.classList.contains("hidden")
                ? "rotate(-90deg)"
                : "rotate(0deg)";
        });

        categoryContainer.append(categoryHeader, topicsContainer);
        categoryListEl.appendChild(categoryContainer);
    });
}

export function loadTopic(categoryName, topic) {
    const welcomeStateEl = document.getElementById("welcomeState");
    const articleContainerEl = document.getElementById("articleContainer");
    const articleCategoryEl = document.getElementById("articleCategory");
    const articleTitleEl = document.getElementById("articleTitle");
    const articleBodyEl = document.getElementById("articleBody");
    const currentCategoryTitleEl = document.getElementById("currentCategoryTitle");
    const contentViewerEl = document.getElementById("contentViewer");

    welcomeStateEl.classList.add("hidden");
    articleContainerEl.classList.remove("hidden");
    articleCategoryEl.textContent = categoryName.toUpperCase();
    articleTitleEl.textContent = topic.title;
    articleBodyEl.innerHTML = topic.content;
    currentCategoryTitleEl.textContent = `${categoryName} / ${topic.title}`;
    contentViewerEl.scrollTop = 0;

    // 2. ADICIONE ESTE BLOCO ABAIXO:
    // Se o usuário clicou no tópico de características, inicializa a grade e a busca interativa
    if (topic.id === "caracteristicas") {
        initCharacteristicsModule("characteristics-page-container");
    }
}
