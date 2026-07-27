// Inicializar ícones
lucide.createIcons();

// Variáveis de controle
let currentPersonId = 1;

// ---------------------------------------------------
// BANCO DE DADOS DAS PESSOAS (16 PESSOAS)
// ---------------------------------------------------
const pessoas = [
    // --- PESSOA 1 ---
    {
        id: 1,
        name: "Santiago",
        title: "Meu leal e melhor amigo",
        avatar: "img/paiva2.jpg",
        photos: [
            "img/santiago1.jpeg",
            "img/santiago2.jpeg"
        ],
        letter: "dia do meu parceiro de vida, meu companheiro de todas as horas, um dos meus melhores amigos e o melhor pai do mundo. hoje é o seu dia, e eu não poderia deixar de te lembrar do quanto você é importante pra mim. nossa conexão é única e eu nunca imaginei que fosse criar uma relação tão boa com um pai quanto criei com você. nossos caminhos se cruzaram da forma mais repentina que existe, mas hoje eu tenho a certeza de que era pra ser. foi uma das melhores decisões da minha vida e eu sinto que o que a gente construiu é eterno. vou ser sempre leal a você, pai, porque tudo o que vivemos e construímos juntos vale muito pra mim. a gente não é muito de demonstrar essas coisas, mas o espaço que você ocupa no meu coração é enorme e a consideração que eu tenho por você é maior ainda. você se tornou uma das pessoas mais importantes da minha vida, alguém essencial que eu não quero perder nunca. sou muito grato por ter uma pessoa como você ao meu lado, ainda mais podendo te chamar de pai. saber que eu posso confiar em você, conversar sobre a minha vida, contar tudo o que eu penso e ter a certeza de que vai ficar entre nós é uma das coisas que eu mais valorizo na nossa relação. eu gosto muito da relação paterna que a gente construiu, você não faz ideia. você sempre fez questão de estar presente, me ouvir, me aconselhar e me apoiar, e isso sempre contou muito pra mim. você é um cara que eu admiro demais, meu rei. sinto que a gente é muito parecido e tenho muito orgulho disso, de ter encontrado alguém em quem eu me espelho pra chamar de pai. além de ser meu pai, você também é um dos meus melhores amigos, alguém que eu gosto de ter por perto em qualquer momento. obrigado por toda a parceria, pelo companheirismo, pelas conversas, pelos conselhos e por sempre estar comigo. espero que você nunca esqueça o quanto eu tenho orgulho de você e o quanto eu valorizo ter você na minha vida. eu só desejo as melhores coisas pra você, paizão. que você tenha muita saúde, felicidade, conquiste tudo o que sonha e continue sendo essa pessoa incrível que você é. aproveita muito o seu dia. eu te amo mais do que qualquer palavra consegue explicar, rei. feliz aniversário."
    },
    // --- PESSOA 2 ---
    {
        id: 2,
        name: "Isabelle",
        title: "Meu porto seguro",
        avatar: "img/paiva2.jpg",
        photos: [
            "img/isabelle1.jpeg",
            "img/isabelle2.jpeg"
        ],
        letter: "você é, sem dúvida, uma das maiores preciosidades que a vida me concedeu. amo você com uma intensidade que, muitas vezes, as palavras não conseguem traduzir. você é o meu melhor amigo, o meu amor de alma, o meu porto seguro e a pessoa que ocupa o lugar mais importante no meu coração. entre tantas pessoas, é você quem eu escolho todos os dias, porque a sua felicidade também se tornou a minha. quero estar ao seu lado em cada etapa da sua caminhada, celebrando cada conquista, amparando você nos dias difíceis e vendo todos os seus sonhos se transformarem em realidade. não há nada que me deixe mais feliz do que imaginar o seu sorriso diante de tudo aquilo que você tanto deseja alcançar. quero ser presença constante, incentivo e abrigo, hoje e sempre. você é a minha prioridade, e a sua companhia tornou os meus dias mais leves, mais bonitos e mais completos. tenho um carinho imensurável por você, um sentimento genuíno que cresce a cada dia. gosto de você muito, muito, muito, muito mesmo, de uma forma tão profunda que chega a ser impossível explicar. apenas sinto, e sinto com todo o meu coração. obrigada por existir e por fazer parte da minha vida. Independentemente do que o futuro nos reserve, saiba que sempre encontrará em mim alguém disposto a cuidar de você, acreditar em você e torcer, de todo o coração, pela sua felicidade. 🖤"
    },
    // --- PESSOA 3 ---
    {
        id: 3,
        name: "Alissa",
        title: "Meu maior presente",
        avatar: "img/paiva2.jpg",
        photos: [
            "img/alissa1.jpeg",
            "img/alissa2.jpeg"
        ],
        letter: "filho, queria te dizer coisas que meu coração sentem antes de te desejar feliz aniversário; pelo motivo que, você transformou a minha vida inteira de uma forma que eu nunca iria conseguir imaginar, antes de você chegar, não sabia que tinha a capacidade de cuidar de uma pessoa ou me portar como mãe quando fosse necessário mas você me mostrou que consigo e faço isso muito bem; com você aprendi a cuidar, admirar, vigiar e amar com todo o meu coração independente de qualquer coisa, tenho muito orgulho em poder te chamar de filho. nada nunca vai ficar entre nós, construímos um laço eterno e quero poder ser a pessoa que vai estar com você em todos os momentos para tudo que você desejar e precisar nessa vida. você é um dos meninos mais doces que eu tive o prazer de conhecer, cuida de quem ama e faz oq acha certo e não tem medo de julgar o que acha errado (mesmo que o errado seja vc na maioria das vezes e só escolhe ignorar). todo mundo que tá na sua vida consegue sentir o amor que você tem e é um dos melhores do mundo, queria que todo mundo pudesse aproveitar sua companhia como eu aproveito, pq marca tanto q é impossível de se esquecer. feliz aniversário, filhote, eu te amo hoje e sempre."
    },
    // --- PESSOA 4 ---
    {
        id: 4,
        name: "Breno",
        title: "Ao meu eterno gêmeo",
        avatar: "img/paiva2.jpg",
        photos: [
            "img/breno1.jpeg",
            "img/breno2.jpeg"
        ],
        letter: "dia do meu gêmeo. nem sempre a gente fala tudo o que sente, mas hoje eu queria te lembrar o quanto você é importante pra mim. sua chegada ae me deu muitas lembranças que vou levar pra sempre, e eu sou muito feliz por ter você na minha vida. te admiro muito e tenho um carinho enorme por você, além de um orgulho imenso da pessoa que você é. espero que esse ano ce consiga realizar tudo aquilo que sonha. curta muito o seu dia, porque ele é unicamente seu. te carrego no peito, fiot. eu te amo. ❤️"
    },
    // --- PESSOA 5 ---
    {
        id: 5,
        name: "Marina",
        title: "Meu companheiro de vida",
        avatar: "img/pedro2.jpg",
        photos: [
            "img/marina1.jpeg",
            "img/marina2.jpeg"
        ],
        letter: "de todas as maneiras que imaginei escrever para e sobre você, essa foi a minha favorita, a qual inicio agradecendo por você existir. hoje, na sua data especial, eu agradeço por você ser quem é, pelo seu coração lindo, pela irmandade que encontrei em uma amizade e, principalmente, por estar ao seu lado neste dia tão importante. pedro, nunca imaginei que seríamos próximos desse jeito, ou que eu estaria aqui com você, mas, assim como você, eu também acredito em propósitos, e que um dos meus foi encontrar em você a figura de um irmão a qual sempre esteve aqui. em você encontrei a paz de uma irmandade tranquila, memórias que eu irei levar para sempre em meu coração, recordações da vida ao seu lado e que valeram para mim como você nem sequer imagina. hoje, quem agradece sou, pela sua vida, por tê-lo aqui, pela sorte de conhecer você. eu e você somos eternos, irmão. olhando para o passado, por tudo que já passamos, vejo que você guarda para si um coração único, onde poucos têm a sorte de conhecê-lo. novamente, irmão, sou eu quem agradeço. nesta data, comemoro não só mais um aniversário, mas mais uma memória eterna que foi criada em meu coração. mesmo você sabendo, ressalto: nós somos eternos, para sempre. saiba que você sempre irá encontrar um colo para estar aqui, uma pessoa para rir da sua risada e alguém que sempre irá querer te ver feliz. eu te amo, irmão, amo hoje e sempre. feliz aniversário!"
    },
    // --- PESSOA 6 ---
    {
        id: 6,
        name: "Stacie",
        title: "Meu amor de vida",
        avatar: "img/paiva2.jpg",
        photos: [
            "img/stacie1.jpeg",
            "img/stacie2.jpeg"
        ],
        letter: "feliz aniversário, meu bebê. eu só tenho a agradecer por você ter aparecido na minha vida e, nisso, ter se tornado uma das minhas pessoas favoritas. você é um menino muito especial, cheio de luz, e merece tudo de bom. espero que nunca perca esse jeitinho único que faz todo mundo ao seu redor sorrir. saiba que eu sempre vou estar aqui por você, torcendo pela sua felicidade, vibrando com cada conquista e te dando todo o carinho que eu puder. a dinda te ama muito e tem um orgulho enorme de fazer parte da sua vida. Aproveita muito o seu dia. 💘"
    },
    // --- PESSOA 7 ---
    {
        id: 7,
        name: "Selina",
        title: "Ao meu tio favorito",
        avatar: "img/paiva2.jpg",
        photos: [
            "img/selina1.jpeg",
            "img/selina2.jpeg"
        ],
        letter: "nossa relação começou de forma tão inesperada mas ao mesmo tempo, necessária. sua presença na minha vida é indiscutível, tio. o quão fácil foi gostar de você desde a primeira conversa que tivemos, eu sabia que nossa relação não seria qualquer coisa. todas as vezes que me faz rir, que demonstra se importar comigo e que se esforça pela nossa relação o faz unico e especial. sou extremamente grata pela pessoa incrível e divertida que você é, sempre melhorando qualquer ambiente que faz parte. sou muito mais feliz por ser sua sobrinha, eu te amo agora e para sempre. feliz aniversário meu tio favorito, que sejamos eternos. 🩷"
    },
    // --- PESSOA 8 ---
    {
        id: 8,
        name: "Annalice",
        title: "Minha amizade leal",
        avatar: "img/paiva2.jpg",
        photos: [
            "img/annalice1.jpeg",
            "img/annalice2.jpeg"
        ],
        letter: "pedro, eu sinceramente nunca imaginei um momento da minha vida aonde nós dois fôssemos se tornar tão próximos, nunca imaginei uma parte da minha vida tendo você como uma das pessoas que mais fazem diferença nela. mas, eu tenho a certeza que essa é uma das melhores coisas que poderiam acontecer comigo, não tenho dúvidas da lealdade que nós dois temos, das nossas conversas e da nossa amizade. não tenho dúvidas em saber que você sempre estará comigo independente do problema, assim como eu sempre estarei com você, realmente tive muita sorte quando nossos caminhos se encontraram. eu não poderia deixar de agradecer por confiar e me deixar confiar, pelas diversas vezes que me escutou falar do mesmo assunto e mesmo assim, aconselhou como a primeira vez. não me imagino longe de você por muito tempo nem se eu quisesse, a nossa relação é algo que eu sempre vou prezar acima de qualquer coisa. eu te admiro demais, bebê, admiro como é incrível com as pessoas que você ama e o que faz para cuidar delas, admiro a pessoa que você é todos os dias. obrigada por sempre estar comigo e por ser quem você é, sempre. feliz aniversário, eu espero que seu dia seja maravilhoso como você merece. eu amo você demais, xuxu."
    },
    // --- PESSOA 9 ---
    {
        id: 9,
        name: "Eduarda",
        title: "Ao meu eterno faixa",
        avatar: "img/paiva2.jpg",
        photos: [
            "img/eduarda1.jpeg",
            "img/eduarda2.jpeg"
        ],
        letter: "dia da pessoa que, desde 2020, conquistou um lugar único e insubstituível no meu coração. pedro, só nós dois sabemos tudo o que passamos para chegar até aqui e a conexão que construímos ao longo desses anos. é incrível perceber que, independente do tempo, da distância ou das circunstâncias, sempre encontramos um caminho de volta um para o outro, com o mesmo carinho, a mesma sintonia e a mesma conexão de sempre. você, mais do que ninguém, sabe a importância que tem na minha vida e o tamanho do carinho que eu sinto por você. feliz aniversário, faixa. eu te amo. 🥋"
    },
    // --- PESSOA 10 ---
    {
        id: 10,
        name: "Felipe",
        title: "Meu leal do peito",
        avatar: "img/paiva2.jpg",
        photos: [
            "img/sequelado1.jpeg",
            "img/sequelado2.jpeg"
        ],
        letter: "Ae irmãozin, mais um ano passando essa data contigo, e vc continua sendo o mrm mlk de 6 anos atrás. Só desejo sucesso sempre e paz no seu coração, meu mlq bom. To sempre aqui contigo, e valeu por tds nossas conversas sobre as neuroses, por ser um mlk da energia contagiante e qm tá do seu lado sb bem disso. Meu leal do peito dsd 2020, ce ta no meu coração pra sempre, e foi com voce que conheci o termo de lealdade. te agradeço por tudo mrm e feliz teu dia, ce é de ouro 🥇"
    },
    // --- PESSOA 11 ---
    {
        id: 11,
        name: "Arabella",
        title: "Meu parceiro para a vida",
        avatar: "img/paiva2.jpg",
        photos: [
            "img/arabella1.jpeg",
            "img/arabella2.jpeg"
        ],
        letter: "não sei nem como começar a falar de uma das pessoas mais importantes da minha vida. depois de quatro anos ao seu lado, tudo o que eu consigo sentir é gratidão por tudo o que você já fez por mim e por nós. a nossa amizade sempre foi cheia de fases, recomeços, momentos inesquecíveis e histórias que eu tenho certeza de que vou levar pra vida inteira. você me ensinou muitas coisas, principalmente sobre amizade, lealdade e companheirismo, e isso é algo que eu vou agradecer pra sempre. apesar das nossas brigas, implicâncias e dos momentos em que a gente discordou, nada disso foi maior do que o carinho, a confiança e a parceria que construímos ao longo desses anos. até as nossas cicatrizes fazem parte da história que construímos e me lembram do quanto sempre valeu a pena lutar por nós. obrigada por nunca desistir de nós, por sempre acreditar que a nossa amizade valia a pena e por escolher recomeçar comigo todas as vezes que foi preciso. eu tenho muito orgulho da história que construímos e espero que a gente continue seguindo o nosso plano, do jeitinho que sempre imaginou. hoje eu só quero que você seja muito feliz. que esse novo ciclo seja cheio de conquistas, momentos inesquecíveis, pessoas que te façam bem e sonhos realizados. você merece que a vida retribua toda a pessoa incrível que você é. obrigada por nunca desistir da nossa amizade, por estar comigo nos momentos bons e ruins e por fazer parte da minha vida de um jeito que ninguém consegue substituir. feliz aniversário! espero continuar comemorando essa data ao seu lado por muitos e muitos anos, porque ter você comigo é, sem dúvida, uma das melhores coisas que a vida já me deu. eu te amo demais. ☘️"
    },
    // --- PESSOA 12 ---
    {
        id: 12,
        name: "Júlia",
        title: "Minha pessoa especial",
        avatar: "img/paiva2.jpg",
        photos: [
            "img/julia1.jpeg",
            "img/julia2.jpeg"
        ],
        letter: "pedro, você faz parte das minhas melhores memórias desde 2022, eu sempre vou carregar comigo todos nossos momentos juntos com muito carinho, é um privilégio ter a sua companhia, você consegue deixar tudo mais leve. eu fico tão feliz de poder celebrar a sua vida com você, nesse dia eu espero que você consiga sentir o quão amado você é, eu sempre vou torcer por você independente de qualquer coisa, espero que você realize todos os seus sonhos, você merece as coisas mais lindas desse mundo. conta comigo pra tudo que precisar bb, te amo."
    },
    // --- PESSOA 13 ---
    {
        id: 13,
        name: "Lara Sofia",
        title: "Minha amizade de alma",
        avatar: "img/paiva2.jpg",
        photos: [
            "img/lara1.jpeg",
            "img/lara2.jpeg"
        ],
        letter: "pedro, mal saberia me expressar em palavras, porque depois de tantos anos nossa alma sempre retorna ao mesmo lugar. sei que somos eternos, e por isso levo você sempre no meu coração. mesmo que a distância nos afaste, não existe nada mais importante do que a nossa amizade. em todas as circunstâncias, de alguma forma, estamos sempre um pelo outro. você é muito especial para mim e eu sei que, acima de tudo, posso contar com você. hoje não estou agradecendo só porque é o seu aniversário, mas por todos os nossos anos de amizade. mesmo quando estávamos afastados, uma parte de você sempre esteve comigo, e isso nunca mudou. eu desejo não só hoje, mas sempre, que a vida continue te presenteando com momentos incríveis e que a gente ainda possa comemorar muitos anos juntos. aproveita muito o seu dia. eu te amo pra sempre ☯️"
    },
    // --- PESSOA 14 ---
    {
        id: 14,
        name: "Giovanna",
        title: "Meu favorito",
        avatar: "img/paiva2.jpg",
        photos: [
            "img/gi1.jpeg",
            "img/gi2.jpeg"
        ],
        letter: "desde que te conheci, a conexão foi instantânea. desde o primeiro momento, senti que a nossa amizade seria diferente. todos os momentos que vivemos, até os mais idiotas possíveis, se tornaram especiais e guardam um espaço enorme no meu coração. hoje, não consigo mais imaginar a minha vida sem você por perto, e nem quero. podemos até nos distanciar por algum tempo, mas sempre voltamos a conversar como se nenhum dia tivesse passado. acho que isso só prova o quanto a nossa conexão é verdadeira e o quanto fomos feitos para permanecer na vida um do outro. eu te amo muito e sou imensamente grata por tudo o que você representa para mim. obrigada por ser exatamente quem sempre foi comigo: alguém leal, presente, divertido e, sem dúvida, uma das melhores pessoas que já tive a sorte de conhecer. tenho muito orgulho da nossa amizade e de tudo o que construímos juntos. nós somos eternos. desde 2024, grudada no meu amor, colecionando memórias que vou levar para sempre comigo. feliz aniversário! que este novo ciclo seja repleto de felicidade, saúde, conquistas, momentos inesquecíveis e tudo aquilo que faz o seu coração transbordar de alegria. você merece o mundo"
    },
    // --- PESSOA 15 ---
    {
        id: 15,
        name: "Gabriel",
        title: "Meu incrível dindo",
        avatar: "img/paiva2.jpg",
        photos: [
            "img/gabriel1.jpeg",
            "img/gabriel2.jpeg"
        ],
        letter: "hoje é um dia muito especial, e eu não poderia deixar de te desejar um feliz aniversário. tenho muito carinho por você e sou muito feliz por ter alguém como você na minha vida. espero que este novo ciclo seja repleto de saúde, paz, felicidade, amor e incontáveis conquistas. que cada novo dia traga motivos para sorrir, opportunities para realizar seus sonhos e pessoas que façam o seu caminho ainda mais leve. que você continue sendo essa pessoa incrível, divertida e de coração enorme. desejo que nunca lhe faltem força para enfrentar os desafios, sabedoria para tomar as melhores decisões e muitos momentos inesquecíveis ao lado de quem você ama. que Deus abençoe a sua vida, proteja os seus passos e conceda muitos anos de vida, sempre com muita luz e prosperidade. aproveite muito o seu dia, comemore bastante e guarde boas lembranças deste novo começo. você merece tudo de melhor que a vida pode oferecer. feliz aniversário, dindo! te desejo um ano extraordinário."
    },
    // --- PESSOA 16 ---
    {
        id: 16,
        name: "André",
        title: "Melhor vô",
        avatar: "img/paiva2.jpg",
        photos: [
            "img/andre1.jpeg",
            "img/andre2.jpeg"
        ],
        letter: "vô, eu sei que a gente se conhece há pouco tempo, porém já tenho uma consideração enorme por você. mesmo em tão pouco tempo, você conseguiu conquistar um espaço muito especial na minha vida. nossas calls sempre conseguem deixar meus dias mais divertidos e leves, porque você me faz rir como ninguém, mesmo me irritando às vezes. mas acho que é justamente isso que torna tudo tão especial. gosto da nossa amizade, das nossas conversas e de cada momento que a gente passa junto. espero que a gente continue criando muitas memórias e que essa amizade dure por muito tempo. obrigado por ser essa pessoa incrível. tenho um carinho enorme por você, vô. saiba que eu sempre estarei aqui para tudo que precisar, pra te defender e sempre te apoiar em todas as horas. digo e repito, você é muito especial pra mim vô, e eu te amo muito, obrigado por ser exatamente a pessoa que você é. 🔫"
    }
];

// ---------------------------------------------------
// LÓGICA DO TERMINAL
// ---------------------------------------------------
const terminalLines = [
    "Conectando ao servidor restrito...",
    "Estabelecendo handshake seguro [OK]",
    "Iniciando protocolo de varredura...",
    "Buscando 'Aniversariantes_2026'...",
    "> PROCURANDO A PESSOA MAIS IMPORTANTE...",
    "Match encontrado. Extraindo dados...",
    "===============================",
    "NOME: Pedro Henrique Bueno",
    "ANIVERSARIO: 27/07",
    "USER: raresoulmind",
    "STATUS: Acesso VIP Garantido",
    "===============================",
    "Descriptografando memórias...",
    "Sistema pronto para inicialização."
];

const terminalEl = document.getElementById('terminal-content');
let lineIndex = 0;

function typeLine(text, element, callback) {
    let charIndex = 0;
    const textSpan = document.createElement('span');
    element.appendChild(textSpan);
    
    const cursor = document.createElement('span');
    cursor.className = 'cursor-blink';
    element.appendChild(cursor);

    const interval = setInterval(() => {
        if (charIndex < text.length) {
            textSpan.textContent += text.charAt(charIndex);
            charIndex++;
        } else {
            clearInterval(interval);
            cursor.remove();
            if(callback) setTimeout(callback, 80);
        }
    }, 10);
}

function processTerminal() {
    if (lineIndex < terminalLines.length) {
        const lineDiv = document.createElement('div');
        if(terminalLines[lineIndex].includes("PROCURANDO") || terminalLines[lineIndex].includes("NOME:")) {
            lineDiv.className = "font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]";
        }
        terminalEl.appendChild(lineDiv);
        
        if (terminalLines[lineIndex] === " ") {
            lineDiv.innerHTML = "&nbsp;";
            lineIndex++;
            processTerminal();
        } else {
            typeLine(terminalLines[lineIndex], lineDiv, () => {
                lineIndex++;
                processTerminal();
            });
        }
    } else {
        setTimeout(() => {
            const actionDiv = document.getElementById('intro-action');
            actionDiv.classList.remove('hidden');
            setTimeout(() => actionDiv.classList.remove('opacity-0'), 50);
        }, 200);
    }
}

// ---------------------------------------------------
// NAVEGAÇÃO E ANIMAÇÕES
// ---------------------------------------------------
function startExperience() {
    const intro = document.getElementById('intro-screen');
    const main = document.getElementById('main-screen');

    intro.classList.add('fade-out');
    
    setTimeout(() => {
        intro.style.display = 'none';
        main.classList.remove('pointer-events-none');
        main.classList.remove('opacity-0');
        main.classList.add('fade-in');

        runMainScreenAnimations();
    }, 500);
}

function runMainScreenAnimations() {
    const avatar = document.getElementById('main-avatar');
    const title = document.getElementById('main-title');
    const textEl = document.getElementById('main-text');
    const btn = document.getElementById('main-btn');

    setTimeout(() => { avatar.classList.remove('opacity-0'); }, 150);
    setTimeout(() => { title.classList.remove('opacity-0'); }, 500);

    setTimeout(() => {
        const messageText = "Nos reunimos com muito carinho para criar algo especial e único para você. Cada detalhe e cada mensagem foram pensados para celebrar a sua vida.";
        let charIdx = 0;
        
        const typingInterval = setInterval(() => {
            if (charIdx < messageText.length) {
                textEl.textContent += messageText.charAt(charIdx);
                charIdx++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    btn.classList.remove('opacity-0', 'pointer-events-none');
                }, 300);
            }
        }, 20);
    }, 1000);
}

// Função limpa para abrir a pessoa (sem o sidebar antigo)
function openPersonDetail(id) {
    currentPersonId = id;

    loadPersonData(currentPersonId);

    const detailScreen = document.getElementById('detail-screen');
    detailScreen.classList.remove('hidden');
    void detailScreen.offsetWidth; // Força re-renderização
    detailScreen.classList.remove('view-hidden-right');
    detailScreen.classList.add('view-active');
    
    detailScreen.scrollTop = 0;
}

function navigatePerson(direction) {
    // Se estiver na última pessoa e clicar em próximo (direção 1), exibe a tela do Spotify/Telegram
    if (currentPersonId === pessoas.length && direction === 1) {
        showEndScreen();
        return; 
    }

    currentPersonId += direction;
    if (currentPersonId < 1) currentPersonId = pessoas.length;
    if (currentPersonId > pessoas.length) currentPersonId = 1;

    const innerContent = document.getElementById('detail-inner-content');
    innerContent.style.opacity = '0';
    innerContent.style.transform = 'translateY(10px)';

    setTimeout(() => {
        loadPersonData(currentPersonId);
        document.getElementById('detail-screen').scrollTop = 0;
        
        innerContent.style.opacity = '1';
        innerContent.style.transform = 'translateY(0)';
    }, 200);
}

function loadPersonData(id) {
    const person = pessoas.find(p => p.id === id);
    if (!person) return;

    document.getElementById('detail-title').textContent = person.title;
    document.getElementById('detail-subtitle').textContent = `De: ${person.name}`;
    document.getElementById('detail-letter').textContent = person.letter;
    document.getElementById('person-counter').textContent = `${person.id} / ${pessoas.length}`;

    // 2 Fotos Compactas lado a lado
    const photosGrid = document.getElementById('detail-photos-grid');
    photosGrid.innerHTML = '';
    person.photos.forEach(photoUrl => {
        const photoCard = document.createElement('div');
        photoCard.className = "aspect-[3/4] w-full bg-[#1c1c1e] rounded-[16px] overflow-hidden border border-white/10 shadow-md";
        photoCard.innerHTML = `<img src="${photoUrl}" class="w-full h-full object-cover">`;
        photosGrid.appendChild(photoCard);
    });

    lucide.createIcons();
}

function closePersonDetail() {
    const detailScreen = document.getElementById('detail-screen');
    detailScreen.classList.remove('view-active');
    detailScreen.classList.add('view-hidden-right');
}

// ---------------------------------------------------
// FUNÇÕES DA TELA FINAL (SPOTIFY / TELEGRAM)
// ---------------------------------------------------
function showEndScreen() {
    const endScreen = document.getElementById('end-screen');
    if (endScreen) {
        endScreen.classList.remove('opacity-0', 'pointer-events-none');
        endScreen.classList.add('opacity-100', 'pointer-events-auto');
    }
}

function closeEndScreen() {
    const endScreen = document.getElementById('end-screen');
    if (endScreen) {
        endScreen.classList.remove('opacity-100', 'pointer-events-auto');
        endScreen.classList.add('opacity-0', 'pointer-events-none');
    }
}

// Inicializar apenas o terminal no carregamento da página
window.onload = () => {
    setTimeout(processTerminal, 400);
};