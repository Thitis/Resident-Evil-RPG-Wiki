# .clinerules - Diretrizes e Limites para o Cline

Este arquivo define as regras obrigatórias, restrições e limites técnicos que o Cline deve seguir ao desenvolver, estruturar e modificar arquivos neste repositório voltado para publicação no **GitHub Pages**.

## 1. Limites Técnicos do GitHub (Restrições Críticas)

O Cline **nunca** deve sugerir ou criar arquivos que violem os limites da plataforma:

* **Tamanho máximo por arquivo individual:** Nenhum arquivo enviado via Git pode ultrapassar **100 MB** (arquivos acima de 50 MB geram alertas). Para mídias pesadas ou grandes volumes de dados, deve-se usar soluções externas ou Git LFS.

* **Tamanho do repositório:** Manter o projeto leve. O repositório total não deve exceder **1 GB** (limite recomendado para evitar lentidão em clones).

* **Banda de tráfego:** O GitHub Pages possui um *soft limit* de **100 GB por mês**. Otimize ativos estáticos (imagens, vídeos e fontes) para manter o consumo baixo.

## 2. Arquitetura e Restrições de Servidor

* **Sem Backend / Execução de Servidor:** O GitHub Pages suporta apenas **conteúdo estático**. É estritamente proibido criar código que dependa de linguagens de servidor (como PHP, Python/Flask, Node.js backend, Ruby ou .NET).

* **Sem Banco de Dados Tradicional:** Não utilize bancos de dados relacionais ou NoSQL locais (como MySQL, SQLite, MongoDB). Utilize arquivos JSON estáticos salvos no repositório ou o `localStorage` do navegador para persistência client-side.

## 3. Estrutura de Pastas e Caminhos (Paths)

* **Página Principal:** O ponto de entrada obrigatório da aplicação na raiz (ou na pasta de publicação configurada) deve se chamar exatamente `index.html`.

* **Caminhos Relativos:** Sempre utilize **caminhos relativos** (ex: `./css/style.css`, `js/main.js`, `./assets/data.json`) em vez de caminhos absolutos começando com barra (`/css/style.css`). Isso evita quebras de links quando o site for hospedado em subdomínios ou subpastas do GitHub Pages (`https://usuario.github.io/repositorio/`).

## 4. Boas Práticas de Código e Módulos JavaScript

* **JavaScript Modular (ES Modules):** Sempre que dividir scripts em múltiplos arquivos `.js`, utilize o padrão de módulos ES (`import`/`export`) e declare o script principal no HTML com o atributo correto:

  ```
  <script type="module" src="./js/main.js"></script>
  
  ```

* **Performance e Organização:** Mantenha os arquivos limpos, bem comentados e divididos logicamente (separando estilos CSS, lógica de interface e dados JSON).

## 5. Diretrizes de Comportamento do Cline

* **Consistência:** Respeite a estrutura de arquivos existente e siga o mesmo padrão de vocabulário e estilo de código já adotado no projeto.

* **Validação de Limites:** Sempre que for sugerido o upload de arquivos grandes ou mídias para o repositório, lembre o usuário sobre o limite de 100 MB por arquivo do GitHub.

# Resident Evil TTRPG Wiki - Cline Rules & Architecture

## Tech Stack & Architecture
- **Type:** Single Page Application (SPA) Wiki for static hosting (GitHub Pages).
- **Core Technologies:** HTML5, Tailwind CSS, FontAwesome, Vanilla JavaScript (ES Modules).
- **Module Structure:**
  - `js/data.js`: Houses all wiki categories, topics, and HTML content strings (`wikiData`).
  - `js/ui.js`: Manages DOM manipulation, sidebar menu rendering, search filtering, and article loading (`loadTopic`).
  - `js/app.js`: Main entry point initializing listeners and DOMContentLoaded events.
- **Hosting Limits (GitHub Pages):** Max 1GB total site size, 100MB per file, 100GB monthly bandwidth, 10-minute build timeout. Keep assets optimized.

## Code Style & Conventions
- **Modularity:** Never mix raw data content (`wikiData`) with UI logic (`ui.js`). New content categories and articles must be added exclusively inside `js/data.js`.
- **Styling:** Adhere strictly to the tactical dark theme, custom monospaced fonts (`font-mono-custom`), and Tailwind utility classes (using dark grays, deep reds, and crisp white typography).
- **State Persistence:** Utilize `localStorage` where applicable for user preferences or persistent view states.
- **File Encoding:** UTF-8 mandatory for all files to support special Portuguese characters and diacritics correctly.

## Operational Directives for Cline
- When asked to add new wiki topics or categories, update `js/data.js` directly following the existing JSON schema structure.
- Ensure all ES module imports/exports (`import ... from ...` / `export ...`) use explicit relative paths with extensions (e.g., `./data.js`).
- Never suggest external heavy frameworks (like React, Vue, or Vite) unless explicitly requested; keep the project lightweight and compatible with standard static hosting.