// js/characteristics.js

// 1. Base de dados das características
export const characteristicsData = [
    {
        id: "especialista-sobrevivencia",
        name: "Especialista em Sobrevivência",
        prerequisite: "Nenhum",
        levels: [
            "Identifica recursos básicos e água potável a curta distância.",
            "Aumenta em 15% a eficácia de itens de cura aplicados a si mesmo.",
            "Reduz o dano sofrido por ambientes contaminados em um estágio.",
            "Imune a infecções leves por mordidas de nível baixo.",
            "Regeneração passiva leve de vida fora de combate."
        ]
    },
    {
        id: "reflexos-taticos",
        name: "Reflexos Táticos",
        prerequisite: "Agilidade 3+",
        levels: [
            "+1 de bônus em testes de esquiva contra ataques à distância.",
            "Permite realizar um passo rápido (dash) gastando menos estamina.",
            "Pode sacar armas secundárias como ação livre.",
            "Chance de evitar completamente ataques furtivos surpresa.",
            "Ação de esquiva concede um contra-ataque imediato."
        ]
    },
    {
        id: "mestre-armeiro",
        name: "Mestre Armeiro",
        prerequisite: "Inteligência 3+ / Bancada",
        levels: [
            "Conserta armas danificadas usando menos materiais.",
            "Desbloqueia modificações de coronha e empunhadura nível 1.",
            "Aumenta o dano crítico de armas fabricadas ou modificadas.",
            "Reduz a chance de emperramento de armas de fogo em 50%.",
            "Capacidade de criar munições especiais avançadas."
        ]
    },
    {
        id: "condicionamento-extremo",
        name: "Condicionamento Extremo",
        prerequisite: "Vigor 3+",
        levels: [
            "Aumenta a vida máxima em +10 pontos.",
            "Resistência aprimorada contra atordoamentos e empurrões.",
            "Reduz o cansaço acumulado ao correr com peso extra.",
            "Suporta sangramentos por mais turnos antes de desmaiar.",
            "Ignora penalidades de movimento com ferimentos graves."
        ]
    },
    {
        id: "frase-de-efeito",
        name: "Frase de Efeito",
        prerequisite: "Vigor 3+",
        levels: [
            "Aumenta a vida máxima em +10 pontos.",
            "Resistência aprimorada contra atordoamentos e empurrões.",
            "Reduz o cansaço acumulado ao correr com peso extra.",
            "Suporta sangramentos por mais turnos antes de desmaiar.",
            "Ignora penalidades de movimento com ferimentos graves."
        ]
    }
];

// 2. Função principal para inicializar a seção de Características em qualquer container
export function initCharacteristicsModule(containerId = "content-area") {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Injeta a estrutura HTML (Barra de pesquisa + Grade de 4 colunas)
    container.innerHTML = `
        <div class="space-y-6">
            <div>
                <h2 class="text-2xl font-bold text-red-500 tracking-wide uppercase">Lista de Características</h2>
                <p class="text-zinc-400 text-sm mt-1">Consulte as habilidades, talentos e progressões de nível disponíveis para os personagens.</p>
            </div>

            <!-- Barra de Pesquisa -->
            <div class="relative">
                <input 
                    type="text" 
                    id="search-characteristics" 
                    placeholder="Pesquisar característica por nome ou pré-requisito..." 
                    class="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 pl-10 text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors shadow-inner text-sm"
                >
                <svg class="w-5 h-5 text-zinc-500 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </div>

            <!-- Grade ajustada para até 4 colunas em telas grandes -->
            <div id="characteristics-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"></div>
        </div>
    `;

    const gridContainer = document.getElementById("characteristics-grid");
    const searchInput = document.getElementById("search-characteristics");

    // Função interna para renderizar os cards dinamicamente
    const renderGrid = (filterText = "") => {
        gridContainer.innerHTML = "";

        const filtered = characteristicsData.filter(char => 
            char.name.toLowerCase().includes(filterText.toLowerCase()) ||
            char.prerequisite.toLowerCase().includes(filterText.toLowerCase())
        );

        if (filtered.length === 0) {
            gridContainer.innerHTML = `
                <div class="col-span-full text-center py-12 text-zinc-500 bg-zinc-900/50 border border-zinc-800 rounded-xl text-sm">
                    Nenhuma característica encontrada para "${filterText}".
                </div>
            `;
            return;
        }

        filtered.forEach(char => {
            let levelsHtml = char.levels.map((desc, index) => `
                <div class="bg-zinc-900/90 border border-zinc-800/80 rounded p-1.5 text-[11px]">
                    <span class="text-red-400 font-bold">Nível ${index + 1}:</span> 
                    <span class="text-zinc-300">${desc}</span>
                </div>
            `).join('');

            const card = document.createElement("div");
            card.className = "bg-zinc-900/40 border border-zinc-800 rounded-xl p-3.5 flex flex-col justify-between hover:border-zinc-700 transition-all shadow-lg";
            card.innerHTML = `
                <div>
                    <!-- Usando a nova classe CSS criada -->
                    <div class="char-title-box">
                        <h4 class="text-red-400 font-bold text-sm tracking-wide uppercase">${char.name}</h4>
                    </div>

                    <div class="mb-2.5">
                        <span class="inline-block bg-zinc-900 text-zinc-400 text-[11px] px-2 py-0.5 rounded border border-zinc-800">
                            <strong>Pré-req:</strong> ${char.prerequisite}
                        </span>
                    </div>
                    <div class="space-y-1 mt-2">
                        <p class="text-[9px] font-semibold text-zinc-500 uppercase tracking-widest mb-1">Progressão</p>
                        ${levelsHtml}
                    </div>
                </div>
            `;
            gridContainer.appendChild(card);
        });
    };

    // Renderiza inicialmente todos os cards
    renderGrid();

    // Ativa o evento de busca em tempo real
    searchInput.addEventListener("input", (e) => {
        renderGrid(e.target.value);
    });
}