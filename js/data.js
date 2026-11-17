export const wikiData = [
    {// Introdução
        id: "introducao",
        name: "Introdução",
        icon: "fa-book-atlas",
        topics: [
            {
                id: "introducao",
                title: "Introdução",
                content: `
                    <h3 class="text-lg font-semibold text-white mt-4 font-mono-custom">O QUE É UM RPG DE MESA</h3>
                    <p>Um RPG de mesa (Role-Playing Game) é um jogo onde você interpreta um personagem dentro de uma história. Diferente de jogos tradicionais, aqui não existe um vencedor definido — o foco está na experiência, nas escolhas e na narrativa construída em grupo.</p>
                    <p>Um dos participantes assume o papel de Mestre (ou Narrador), responsável por descrever o mundo, controlar inimigos e apresentar desafios. Os demais jogadores interpretam sobreviventes, tomando decisões, explorando ambientes e enfrentando perigos.</p>
                    <p>As ações dos personagens são resolvidas através de regras e rolagens de dados, que determinam se algo dá certo ou errado.</p>

                    <h3 class="text-lg font-semibold text-white mt-6 font-mono-custom">SOBRE O SISTEMA</h3>
                    <p>Este é um sistema de RPG focado em sobrevivência, escassez de recursos e horror biológico.</p>
                    <p>Os jogadores assumem o papel de pessoas comuns (ou não tão comuns assim) tentando sobreviver em um mundo devastado por infecções, experimentos fora de controle e criaturas grotescas.</p>
                    <p>O sistema foi projetado para simular:</p>
                    <ul class="list-disc pl-6 space-y-1">
                        <li>tensão constante</li>
                        <li>combate perigoso</li>
                        <li>decisões difíceis</li>
                        <li>gerenciamento de recursos</li>
                        <li>crescimento através do trauma</li>
                    </ul>
                    <p>Aqui, cada bala importa. Cada escolha tem peso. E sobreviver nem sempre significa vencer.</p>

                    <h3 class="text-lg font-semibold text-white mt-6 font-mono-custom">RESUMO DO SISTEMA</h3>
                    <h4 class="text-base font-semibold text-white mt-4 font-mono-custom">GÊNEROS</h4>
                    <p>A proposta do sistema brilha principalmente nestes estilos:</p>
                    <h5 class="text-sm font-semibold text-red-400 mt-3">Horror</h5>
                    <p>O perigo está sempre presente. Criaturas desconhecidas dominam o cenário e desafiam qualquer enfrentamento direto.</p>
                    <h5 class="text-sm font-semibold text-red-400 mt-3">Sobrevivência</h5>
                    <p>Escassez define tudo. Cada item, cada segundo e cada munição contam.</p>
                    <h5 class="text-sm font-semibold text-red-400 mt-3">Ação Tática</h5>
                    <p>Conflitos são intensos e fatais. A posição, o alvo e o uso correto de habilidades moldam o resultado.</p>
                    <h5 class="text-sm font-semibold text-red-400 mt-3">Drama</h5>
                    <p>Os personagens vivem conflitos internos, marcas do passado e motivações fortes. Suas escolhas movem a história.</p>

                    <h4 class="text-base font-semibold text-white mt-6 font-mono-custom">MECÂNICAS PRINCIPAIS</h4>
                    <h5 class="text-sm font-semibold text-red-400 mt-3">Testes</h5>
                    <p>Quando um personagem tenta algo com risco real, ele faz um teste. O resultado indica sucesso, falha ou sucesso crítico. A dificuldade varia conforme a cena.</p>
                    <h5 class="text-sm font-semibold text-red-400 mt-3">Vantagem e Desvantagem</h5>
                    <p>Situações favoráveis trazem vantagem. Situações desfavoráveis trazem desvantagem. Elas podem se acumular dentro de um limite e podem se anular.</p>
                    <h5 class="text-sm font-semibold text-red-400 mt-3">Estresse</h5>
                    <p>O estresse mostra como o personagem está mentalmente. Ele aparece em momentos de perigo, uso intenso de habilidades, traumas ou decisões pesadas. Quanto mais estresse, mais instável o personagem pode ficar.</p>
                    <h5 class="text-sm font-semibold text-red-400 mt-3">Pontos de Trama</h5>
                    <p>São gatilhos narrativos que fazem a história avançar. Surgem quando falhas internas influenciam ações, traumas pesam nas escolhas ou o personagem encara suas fraquezas. Permitem mudanças importantes e cenas fortes.</p>
                    <h5 class="text-sm font-semibold text-red-400 mt-3">Combate</h5>
                    <p>O combate é rápido e mortal.</p>
                    <ul class="list-disc pl-6 space-y-1">
                        <li>escolher onde acertar altera o impacto</li>
                        <li>inimigos podem ser derrubados ou mutilados</li>
                        <li>posição faz diferença</li>
                        <li>usar recursos na hora certa é crucial</li>
                    </ul>
                    <h5 class="text-sm font-semibold text-red-400 mt-3">Recursos</h5>
                    <p>A sobrevivência gira em torno da falta.</p>
                    <ul class="list-disc pl-6 space-y-1">
                        <li>munição é pouca</li>
                        <li>cura é rara</li>
                        <li>itens são valiosos</li>
                    </ul>
                    <p>Muitas vezes, o melhor caminho é não lutar.</p>
                    <h5 class="text-sm font-semibold text-red-400 mt-3">Condições e Dano</h5>
                    <p>Além do dano físico, personagens sofrem efeitos como:</p>
                    <ul class="list-disc pl-6 space-y-1">
                        <li>sangramento</li>
                        <li>envenenamento</li>
                        <li>fogo</li>
                        <li>desorientação</li>
                    </ul>
                    <p>Esses efeitos podem ser tão perigosos quanto o dano direto.</p>

                    <h4 class="text-base font-semibold text-white mt-6 font-mono-custom">O QUE ESPERAR</h4>
                    <p>Este sistema não trata de campeões invulneráveis. Ele trata de:</p>
                    <ul class="list-disc pl-6 space-y-1">
                        <li>tentar sobreviver</li>
                        <li>enfrentar escolhas difíceis</li>
                        <li>lidar com perdas</li>
                        <li>encarar o desconhecido</li>
                    </ul>
                    <p>E, às vezes… entender até onde vale ir para não morrer.</p>
                `
            },
            {
                id: "guia-para-iniciantes",
                title: "Guia para Iniciantes",
                content: `
                    <h3 class="text-lg font-semibold text-white mt-4 font-mono-custom">COMO O RPG DE MESA GERALMENTE FUNCIONA</h3>
                    <p>O jogo acontece por meio de uma conversa.</p>
                    <p>O Mestre descreve a situação:</p>
                    <blockquote class="border-l-2 border-red-600 pl-4 text-gray-400">“Você está em um corredor escuro. Há sons vindo do outro lado.”</blockquote>
                    <p>E você decide o que fazer:</p>
                    <blockquote class="border-l-2 border-red-600 pl-4 text-gray-400">“Eu me aproximo devagar e tento ouvir melhor.”</blockquote>
                    <p>Quando existe risco ou chance de falha, o jogo utiliza testes com dados para determinar o resultado.</p>

                    <h3 class="text-lg font-semibold text-white mt-6 font-mono-custom">O QUE SÃO TESTES</h3>
                    <p>Um teste é uma rolagem de dado para saber se sua ação dá certo ou não.</p>
                    <p>Exemplo:</p>
                    <p>Você tenta abrir uma porta trancada.<br>O Mestre pede um teste.<br>Você rola o dado, aplica seus modificadores e compara com a dificuldade.</p>
                    <p>Resultado possível:</p>
                    <ul class="list-disc pl-6 space-y-1">
                        <li><strong>sucesso</strong> → você abre a porta</li>
                        <li><strong>falha</strong> → a porta continua fechada</li>
                        <li><strong>Sucesso Crítico (Ou no caso desse sistema sucesso absoluto)</strong> → algo especial acontece ao seu favor</li>
                        <li><strong>Falha Crítica</strong> → catastrofe</li>
                    </ul>

                    <h3 class="text-lg font-semibold text-white mt-6 font-mono-custom">OS DADOS</h3>
                    <p>Os dados são a base do sistema.</p>
                    <p>Eles representam o acaso — o fator imprevisível das suas ações.</p>
                    <p>Abaixo estão os dados geralmente utilizados por sistemas de RPG:</p>
                    <ul class="list-disc pl-6 space-y-1">
                        <li>d4 (4 lados)</li>
                        <li>d6 (6 lados)</li>
                        <li>d8 (8 lados)</li>
                        <li>d10 (10 lados)</li>
                        <li>d12 (12 lados)</li>
                        <li>d20 (20 lados)</li>
                        <li>d100 (100 lados)</li>
                    </ul>

                    <h3 class="text-lg font-semibold text-white mt-6 font-mono-custom">COMO LER UM DADO</h3>
                    <p>Quando você vê algo como:</p>
                    <ul class="list-disc pl-6 space-y-1">
                        <li><code>1d6</code> → significa rolar 1 dado de 6 lados</li>
                        <li><code>2d8</code> → rolar 2 dados de 8 lados</li>
                        <li><code>1d10 + 2</code> → rolar 1 dado de 10 lados e somar +2</li>
                    </ul>
                `
            }
        ]
    },//Topicos de Regras Básicas
    {
        id: "regras-basicas",
        name: "Regras Básicas",
        icon: "fa-book",
        topics: [
            {//Sistema de Rolagens
                id: "sistema-de-rolagens",
                title: "Sistema de rolagens",
                content: `
                    <h3 class="text-lg font-semibold text-white mt-4 font-mono-custom">REGRAS DE TESTE DE ROLAGENS</h3>
                    <p>
                    O sistema de rolagens é a mecânica central do jogo, determinando o sucesso ou falhados personagens. 
                    Ele utiliza dados para introduzir elementos de aleatoriedade e incerteza, refletindo a imprevisibilidade das 
                    situações enfrentadas pelos personagens. Quando seu personagem tenta realizar uma ação arriscada 
                    (como disparar contra um zumbi, arrombar uma porta trancada ou esconder-se de um perigo), 
                    precisamos rolar dados para descobrir se você consegue ou não realizar tal tarefa com sucesso.
                    
                    <p> A rolagem é dividida em três etapas: a rolagem do dado progenitor, 
                    a aplicação de modificadores e dados extras e a comparação com a dificuldade da ação.

                    </p>

                    <h5 class="text-sm font-semibold text-red-400 mt-3">ETAPA 1: O DADO PROGENITOR</h5>
                    <hr>
                    <p>
                    Toda rolagem se utiliza de um dado progenitor. 
                    Qual dado que deve ser utilizado pode variar de tamanho dependendo do seu equipamento ou da sua habilidade, 
                    indo desde um dado de 4 lados (1d4) até um dado de 12 lados (1d12). 
                    Você joga esse dado e olha o resultado, podendo acontecer uma das seguintes situações:

                
                    <p> Falha Crítica: Se o seu dado cair no número 1, a ação falha instantaneamente, 
                    independente da dificuldade do teste.
                    É o momento em que sua situação falha por completo.
                    (Também quando o a desvantagem de um personagem está em ação na cena e ele  rola uma falha crítica,
                    o narrador pode decidir que a falha crítica é ainda mais catastrófica, 
                    podendo levar a consequências narrativas mais graves.)

                    <p> Sucesso Evolutivo: Se o seu dado cair no maior número possível daquele dado 
                    (por exemplo, tirar um 4 em um dado de 4 lados, ou um 12 em um dado de 12 lados), 
                    você deve rolar mais um dado igual do mesmo tipo que o dado progenitor. 
                    Se tirar o valor máximo de novo, joga de novo, 
                    e pode continuar repetindo enquanto continuar tirando o valor máximo! 
                    No final, você soma todos esses resultados máximos.

                    <h5 class="text-sm font-semibold text-red-400 mt-3">ETAPA 2: DADOS EXTRAS E MODIFICADORES</h5>
                    <hr>

                    <p>Depois de terminar de rolar o seu dado progenitor (e as eventuais repetições de valor máximo), 
                    é hora de somar o restante:
                    
                    <P>Dados Extras e o Limite de Perícias: Por padrão, 
                    um jogador só pode receber no máximo 1 dado extra em sua rolagem 
                    (vindo de itens de apoio, vantagens ou cenários favoráveis). 
                    Sendo que quando ele uma quantia de dados extras acima do seu limite para a rolagem,
                    o jogador deve escolher quais dados ele quer utilizar, descartando os demais.

                    <P>A Exceção das Perícias: A perícia por si só não concede dados extras, 
                    mas ela permite que você ultrapasse esse limite. 
                    Se você possuir uma perícia que faça sentido para a ação 
                    (como Perícia em Armas de Fogo ao disparar um fuzil contra um zumbi), 
                    você poderá somar uma quantidade de dados extras de qualquer fonte igual a 
                    $1 + \text{nível da perícia}$.

                    <h5 class="text-sm font-semibold text-red-400 mt-3">ETAPA 3: DIFICULDADE DO TESTE</h5>
                    <hr>

                    <p>Depois de somar todos os resultados, você compara o total com a dificuldade do teste ou DT 
                    como normalmente aparecerá no sistema. 
                    Caso o resultado seja igual ou maior que a dificuldade, você teve sucesso! Caso seja menor, você falhou.

                    <p> Dificuldade Padrão (Média): Por padrão, qualquer teste no jogo tem uma dificuldade de 4. 
                    Se caso o sistema não especificar uma dificuldade, você deve assumir que a dificuldade é 4.

                    <p> Ajustes do Narrador: O Narrador do Jogo 
                    pode mudar essa dificuldade para cima ou para baixo dependendo da situação. 
                    Um teste fácil pode ter uma dificuldade menor, 
                    enquanto arrombar um cofre ultrassecreto ou sobreviver a uma situação extrema pode exigir uma dificuldade 
                    muito mais alta. Essa mudança de dificuldade pode ser feita a qualquer momento, porém é recomendado que ela 
                    seja feita fora de conflitos. (veja conflitos em ...)

                    <p> Dificuldade Secreta: Como opção, o narrador pode decidir manter a dificuldade do teste de um jogador em segredo.
                    Porém, ele deve informar que a dificuldade é secreta antes do jogador realizar a rolagem e caso o jogador falhe
                    no teste, o jogador recebe 1 ponto de trama como compensação por ter falhado sem saber a dificuldade do teste.

                    <h3 class="text-lg font-semibold text-white mt-4 font-mono-custom">ROLAGENS EFECICIENTES E INEFECICIENTES</h3>

                    <p> Rolagens Ineficientes: Quando uma rolagem é ineficiente, significa que caso caia no resultado 1 ou 2, o resultado
                    é uma falha crítica.

                    <p> Rolagens Eficientes: Quando uma roalgem é eficientes, significa que caso  o valor de um dado caia em um resultado de 1
                    numero menor que o valor máximo ele conta como um sucesso Evolutivo.

                    <p> Anulando Efeitos: Caso o o teste de um personagem possua efeitos que tornem a rolagem eficiente e 
                    ineficiente ao mesmo tempo, os efeitos se anulam e a rolagem é considerada normal.

                    <h3 class="text-lg font-semibold text-white mt-4 font-mono-custom">PERÍCIAS</h3>

                    <p>As perícias representam o conhecimento, treinamento e experiência de um personagem em uma determinada área.
                    Elas permitem que o personagem tenha vantagens em situações específicas, 
                    aumentando suas chances de sucesso em testes relacionados a área de especialização que o personagem possui 
                    perícia. Cada perícia possui uma quantidade de usos por cena, que é igual ao nível da perícia e o nível 
                    máximo é 5. 
                    Usos esses que podem ser gastos a qualquer etapa do teste:
                    
                    <ul>
                    <li>Rerolar um dado do teste.</li>
                    <li>Aumentar o limite de dados extras em 1.</li>
                    <li>Tornar o teste eficiente.</li>
                    </ul>
                    </p>

                    <p>
                    Um personagem não pode utilizar mais de uma perícia em um mesmo teste, 
                    porém ele pode utilizar diferentes perícias em testes diferentes dentro da mesma cena.
                    </p>

                    <p> Melhorando perícias: Um personagem pode melhorar suas perícias gastando pontos de experiência. 
                    Para comprar o nível 1 de uma perícia, o personagem deve gastar 1 ponto de experiência, 
                    sendo que cada nível subsequente custa a mesma quantidade de pontos de expericie que o 
                    valor nível a ser adquirido.

                `
            },
            {//Sistema de Cenas
                id: "sistema-de-cenas",
                title: "Sistema de Cenas",
                content: `
                    <h3 class="text-lg font-semibold text-white mt-4 font-mono-custom">REGRAS DE CENAS</h3>
                    
                `
            },
            {//Ações Básicas
                id: "pontos de trama",
                title: "Pontos de Trama",
                content: `
                    <h3 class="text-lg font-semibold text-white mt-4 font-mono-custom">PONTOS DE TRAMA</h3>

                    <p>
                    Descrição aqui
                    </p>

                `
            },
            {//Sistema de Metragem
                id: "sistema-de-metragem",
                title: "Sistema de Metragem",
                content: `
                    <h3 class="text-lg font-semibold text-white mt-4 font-mono-custom">REGRAS DE METRAGEM</h3>

                    <p>
                    O sistema de metragem define a distância entre personagens, inimigos e objetos no jogo. 
                    Ele influencia a eficácia de ataques, habilidades e interações.</p>

                    <h4 class="text-base font-semibold text-white mt-6 font-mono-custom">REGRAS DE FAIXAS DE ALCANCE</h4>
                    
                    <p>
                    O sistema de alcance organiza a distância entre personagens e alvos
                    usando faixas narrativas de distância. Essas faixas indicam quem pode
                    agir contra quem, quais ações estão disponíveis e o nível de desafio
                    envolvido.

                    <P>
                    Quando o combate não utiliza grid, as categorias de distância ainda são
                    usadas para definir posicionamento de forma abstrata. Em vez de contar
                    espaços, o Mestre descreve a distância entre os personagens com base nas
                    faixas de alcance.


                    </p>

                    
                `
            },
            {//Sistema de Saúde e Dano
                id: "sistema-de-saude-e-dano",
                title: "Sistema de Saúde e Dano",
                content: `
                    <h3 class="text-lg font-semibold text-white mt-4 font-mono-custom">REGRAS DE SAÚDE E DANO</h3>

                    <p>
                    O sistema de saúde e dano define como os personagens são afetados por ataques e habilidades no jogo. 
                    Ele determina a quantidade de dano que um personagem pode receber e como isso impacta seu estado de saúde.
                    </p>

                    <p>
                `
            },
            {//Sistema de Ações
                id: "regras de ação",
                title: "Regras de Ação",
                content: `
                    <h3 class="text-lg font-semibold text-white mt-4 font-mono-custom">REGRAS DE AÇÃO</h3>

                    <p>
                    As ações são mecanicas do sistema que servem para representar as capacidades narrativas de um personagem.
                    Durante cenas de conflito, os personagens dentro do conflito devem utilizar
                    as mecânicas de ações do sistema. As ações são a principal forma de determinar
                    o que um personagem é capaz de realizar durante o seu turno e fora dele. 
                    Personagens podem possuir multiplas opções de ações, sendo que por padrão todo personagem possui acesso
                    a todas as ações básicas listadas em (...), certas mecânicas como características podem conceder mais ações a um personagem.
                    Por padrão todo personagem possui 4 usos de ações, ou seja, 4 pontos de estamina.
                    Durante o conflito no final de toda rodada todos os personagens recuperam sua estamina gasta.
                    
                    </p>

                    <h4 class="text-base font-semibold text-white mt-6 font-mono-custom">UTILIZANDO AÇÕES</h4>

                    <p> 
                    Para utilizar uma ação, o jogador ou mestre deve declarar qual ação deseja realizar, assim devendo obecedecer as 
                    regras de utilização da ação, as quais são determinadas pelo tipo de ação, descritores de ação, e
                    sua descrição. Caso uma regra descrita dentro de uma ação seja contrária a outra regra que
                    abrangem as partes gerais do sistema, a regra especificada dentro da ação possui prioridade para ser seguida e
                    caso a um características de personagem sobreponha uma regra de ação, a regra da característica possui 
                    prioridade para ser seguida. 
                    </p>

                    <h4 class="text-base font-semibold text-white mt-6 font-mono-custom">AÇÕES FORA DE CONFLITO</h4>

                    <p>
                    Fora de conflito, as ações podem ser utilizadas livremente, desde que o narrador permita. 
                    O narrador pode permitir que certas ações sejam utilizadas fora de conflito, caso a ação 
                    seja plausível dentro da narrativa, além de que caso a ação peça dificuldade, 
                    o narrador pode determinar a dificuldade da ação, 
                    assim como se essa ação pode levar a consequências como inicio de um conflito.
                    </p>

                    <h4 class="text-base font-semibold text-white mt-6 font-mono-custom">TIPOS DE AÇÕES</h4>

                    <p> 
                    Os tipos de ações são divididas em: ação comum, reação e ação livre. 
                    (Seu funcionamento está listado logo abaixo)
                    </p>

                     <h5 class="text-sm font-semibold text-red-400 mt-3">Ação Comum</h5>
                    <p>
                    A ação comum é a forma principal de interagir com o ambiente e os outros personagens. 
                    Pode ser utilizada para mover-se, atacar, defender-se, ou realizar outras ações específicas.
                    A ação comum ao ser utilizada consome 1 de estamina do personagem.
                    </p>

                    <h5 class="text-sm font-semibold text-red-400 mt-3">Reação</h5>
                    <p>
                    A reação permite que um personagem responda a uma ação de outro personagem durante o turno dele. 
                    É uma ação que pode ser realizada em resposta a uma ameaça ou oportunidade. A reação ao ser utilizada
                    consome 1 de estamina do personagem.
                    </p>

                    <h5 class="text-sm font-semibold text-red-400 mt-3">Ação Livre</h5>
                    <p>
                    A ação livre é o único tipo de ação ao qual não é necessário consumir estamina.
                    A ação livre é uma ação que pode ser realizada dentro do seu turno e 
                    também fora dele com a permissão do narrador caso seja plausível. 
                    Ela é geralmente utilizada para realizar ações que não estão diretamente 
                    relacionadas ao combate ou ações que não seriam custosas, como conversar.
                    </p>

                    <h4 class="text-base font-semibold text-white mt-6 font-mono-custom">DESCRITORES DE AÇÃO</h4>

                    <p>
                    Os descritores de ação são palavras-chave que descrevem a natureza de uma ação. 
                    Eles ajudam a determinar como uma ação interage com outras mecânicas do jogo, 
                    como vantagens, desvantagens e efeitos especiais. 
                    Alguns exemplos de descritores incluem "ataque", "defesa", "movimento" e "interação social".
                    Quando uma ação possui um descritor, está ação também pode ser acompanhada com um efeito que é aplicado 
                    a todas as ações que possuem o mesmo descritor.
                    </p>

                    <p>
                    Adicionando Descritores. Certas mecânicas do sistema podem permitir que um personagem adicione descritores 
                    a uma ação, assim permitindo que a ação seja tratada como se tivesse aquele descritor. 
                    Por exemplo, uma habilidade especial pode permitir que um ataque corpo a corpo seja tratado como um ataque 
                    a distância, concedendo efeitos adicionais ou interações com outras mecânicas do jogo. 
                    (Caso uma ação não condiza com o descritor que ela recebeu dentro da narrativa durante a sessão,
                     o narrador pode negar a interação naquela vez ou para sempre, 
                     assim podendo conceder um ponto de trama ao grupo como compensação na primeira que isso acontecer).
                    
                    </p>

                `
            },
            {//Ações Básicas
                id: "ações básicas",
                title: "Ações Básicas",
                content: `
                    <h3 class="text-lg font-semibold text-white mt-4 font-mono-custom">AÇÕES BÁSICAS</h3>

                    <p>
                    As ações básicas são as ações que todo personagem possui acesso, independente de suas características ou habilidades especiais.
                    Elas são projetadas para fornecer uma base sólida para a jogabilidade e garantir que todos os personagens possam participar 
                    de maneira significativa nas cenas de conflito.
                    </p>

                `
            }
        ]
    },{//Regras Avançadas
        id: "regras-avançadas",
        name: "Regras Avançadas",
        icon: "fa-book",
        topics: []
    },{//Categoria de Criação de Personagem
        id: "criação-de-personagem",
        name: "Criação de Personagem",
        icon: "fa-book",
        topics: [
            {//Criação de Personagem
                id: "primeiros-passos",
                title: "Primeiros Passos",
                content: `
                    <h3 class="text-lg font-semibold text-white mt-4 font-mono-custom">PRIMEIROS PASSOS</h3>

                    <p>
                    A criação de personagem é o processo pelo qual os jogadores desenvolvem seus personagens para o jogo. 
                    Este processo envolve a escolha de atributos, habilidades, equipamentos e histórico do personagem, 
                    permitindo que cada jogador personalize seu personagem de acordo com suas preferências e estilo de jogo.
                    </p>

                    <p>
                    O processo de criação de personagem é dividido em várias etapas, cada uma focada em um aspecto específico do personagem. 
                    A seguir, detalharemos cada etapa para ajudar os jogadores a construir personagens únicos e interessantes.
                    </p>

                    <p>
                    Antes de começar a criar seu personagem, é importante discutir com o Mestre do Jogo sobre o cenário, 
                    o tom da campanha e quaisquer restrições ou diretrizes específicas que possam afetar a criação do personagem. 
                    Isso garantirá que seu personagem se encaixe bem na narrativa e no grupo.
                    </p>

                    <p>
                    Durante a criação do personagem, os jogadores devem considerar como seu personagem se encaixa na história, 
                    quais são suas motivações e como ele interage com os outros personagens. 
                    Um personagem bem desenvolvido não apenas contribui para a narrativa, mas também enriquece a experiência de jogo para todos os participantes.
                    </p>

                    <p>
                    Para criar a ficha existi duas formas principais de criação de personagem: a criação rápida e a criação avançada.
                    Escolha a forma que você deseja criar seu personagem e siga as instruções correspondentes para cada método logo abaixo.
                    </p>
                    
                    <h3 class="text-lg font-semibold text-white mt-4 font-mono-custom">Criação Rápida</h3>

                    <p>
                    Para criar um personagem através da criação rápida basta escolher um arquétipo de personagem, 
                    definir os atributos iguais a recomendação dos atributos recomendados do arquétipo,
                    escolher  as perícias de exemplo do arquétipo, 
                    escolher a arma inicial do arquétipo e escolher o equipamento inicial do arquétipo. Todas essas escolhas devem
                    dar a quantidade de pontos de experiência inicial padrão do sistema de rpg.
                    </p>

                    <h3 class="text-lg font-semibold text-white mt-4 font-mono-custom">Criação Avançada</h3>



                `
            },{//Arquétipos
                id: "Arquétipos",
                title: "Arquétipos",
                content: `
                    <h3 class="text-lg font-semibold text-white mt-4 font-mono-custom">Arquétipos</h3>

                    <p>
                    Os arquétipos são modelos predefinidos que oferecem uma base sólida para a criação de personagens. 
                    Cada arquétipo tem características únicas, habilidades e estilo de jogo exclusivo do próprio arquétipo.
                    </p>

                    <p>
                    Ao escolher um arquétipo, os jogadores podem rapidamente criar personagens com habilidades
                     e características específicas, 
                    permitindo que se concentrem mais na narrativa e na interpretação do personagem. 
                    Os arquétipos também ajudam a equilibrar o jogo, garantindo que cada personagem 
                    tenha um papel distinto dentro do grupo.
                    </p>

                    <p>
                    A seguir, uma lista de arquétipos disponíveis no sistema, cada um com suas próprias vantagens e 
                    desvantagens. 
                    Os jogadores podem escolher o arquétipo que melhor se adapta ao estilo de jogo que desejam explorar.
                    </p>
                `
            },{
                id: "atributos",
                title: "Atributos",
                content: `
                    <h3 class="text-lg font-semibold text-white mt-4 font-mono-custom">Atributos</h3>
                `
            },{
                id: "vantagens",
                title: "Vantagens",
                content: `
                    <h3 class="text-lg font-semibold text-white mt-4 font-mono-custom">Vantagens</h3>

                    <p> As vantagens 
                `
            },{
                id: "desvantagens",
                title: "Desvantagens",
                content: `
                    <h3 class="text-lg font-semibold text-white mt-4 font-mono-custom">Desvantagens</h3>
                `
            },{
                id: "características",
                title: "Características",
                content: `
                    <h3 class="text-lg font-semibold text-white mt-4 font-mono-custom">Características</h3>
                `
            }
        ]
    },{//Equipamentos e Itens
        id: "equipamentos-itens",
        name: "Equipamentos e Itens",
        icon: "fa-book",
        topics: []
    },{//Condições
        id: "condições",
        name: "condições",
        icon: "fa-book",
        topics: [
                {//Condições
                id: "regras de condições",
                title: "Regras de Condições",
                content: `
                    <h3 class="text-lg font-semibold text-white mt-4 font-mono-custom">Regras de Condições</h3>

                    <p> As condições são 

                `
            }
            
        ]
    },{//Agentes e B.O.W    
        id: "agentes-bows",
        name: "Agentes e B.O.Ws",
        icon: "fa-book",
        topics: []
    }
];