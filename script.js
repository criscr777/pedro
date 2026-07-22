// Inicializar ícones
lucide.createIcons();

// Variáveis de controle
let currentPersonId = 1;

// ---------------------------------------------------
// BANCO DE DADOS DAS PESSOAS (12 PESSOAS)
// ---------------------------------------------------
const pessoas = [
    {
        id: 1,
        name: "Mãe",
        title: "Para o amor da minha vida",
        avatar: "https://placehold.co/200x200/222/fff?text=Mae",
        photos: [
            "https://placehold.co/400x500/1a1a1a/ffffff?text=Mae+Foto+1",
            "https://placehold.co/400x500/2a2a2a/ffffff?text=Mae+Foto+2"
        ],
        letter: "Meu filho amado, hoje celebramos a sua vida. Desde o dia em que você nasceu, você trouxe luz e alegria para os meus dias. Tenho muito orgulho do homem incrível que você se tornou.\n\nQue este novo ciclo seja repleto de realizações, saúde e muita paz. Nunca esqueça que estarei sempre aqui para você.\n\nTe amo mais que tudo!",
        spotifyEmbedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0"
    },
    {
        id: 2,
        name: "Isabelle",
        title: "ao meu pai e melhor amigo",
        avatar: "img/paiva2.jpg",
        photos: [
            "img/isabelle1.jpeg",
            "img/isabelle2.jpeg"
        ],
        letter: "você é, sem dúvida, uma das maiores preciosidades que a vida me concedeu. amo você com uma intensidade que, muitas vezes, as palavras não conseguem traduzir. você é o meu melhor amigo, o meu amor de alma, o meu porto seguro e a pessoa que ocupa o lugar mais importante no meu coração. entre tantas pessoas, é você quem eu escolho todos os dias, porque a sua felicidade também se tornou a minha. quero estar ao seu lado em cada etapa da sua caminhada, celebrando cada conquista, amparando você nos dias difíceis e vendo todos os seus sonhos se transformarem em realidade. não há nada que me deixe mais feliz do que imaginar o seu sorriso diante de tudo aquilo que você tanto deseja alcançar. quero ser presença constante, incentivo e abrigo, hoje e sempre. você é a minha prioridade, e a sua companhia tornou os meus dias mais leves, mais bonitos e mais completos. tenho um carinho imensurável por você, um sentimento genuíno que cresce a cada dia. gosto de você muito, muito, muito, muito mesmo, de uma forma tão profunda que chega a ser impossível explicar. apenas sinto, e sinto com todo o meu coração. obrigada por existir e por fazer parte da minha vida. Independentemente do que o futuro nos reserve, saiba que sempre encontrará em mim alguém disposto a cuidar de você, acreditar em você e torcer, de todo o coração, pela sua felicidade. 🖤",
        spotifyEmbedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DXbOGgDBXN53ht?utm_source=generator&theme=0"
    },
    ...Array.from({ length: 10 }).map((_, i) => {
        const numId = i + 3;
        return {
            id: numId,
            name: `Amigo ${numId}`,
            title: `Para meu parceiro de rolê`,
            avatar: `https://placehold.co/200x200/1c1c1e/fff?text=Amigo+${numId}`,
            photos: [
                `https://placehold.co/400x500/222/fff?text=Foto+1`,
                `https://placehold.co/400x500/333/fff?text=Foto+2`
            ],
            letter: `Fala Bueno! Tudo certo cara? Passando aqui para te desejar um feliz aniversário. Que honra fazer parte do seu círculo de amizades e comemorar mais um ano de vida seu.\n\nNossa amizade significa muito pra mim. Separei umas músicas do Paiva e do Kevin que me lembram dos nossos rolês. Tamo junto sempre!`,
            spotifyEmbedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd?utm_source=generator&theme=0"
        }
    })
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
    "NOME: Pedro Henrique Buenno",
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
        const messageText = "Nos reunimos com muito carinho para criar algo especial e único para você. Cada detalhe, cada lembrança e cada mensagem foram pensados para celebrar a sua vida.";
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

function toggleSidebar(show) {
    const sidebar = document.getElementById('sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    
    if (show) {
        sidebar.classList.remove('-translate-x-full');
        backdrop.classList.remove('hidden');
        setTimeout(() => backdrop.classList.remove('opacity-0'), 10);
    } else {
        sidebar.classList.add('-translate-x-full');
        backdrop.classList.add('opacity-0');
        setTimeout(() => backdrop.classList.add('hidden'), 400);
    }
}

function renderSidebar() {
    const menu = document.getElementById('sidebar-menu');
    menu.innerHTML = '';

    pessoas.forEach(p => {
        const item = document.createElement('div');
        item.className = "flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 active:bg-white/10 cursor-pointer transition group";
        item.onclick = () => openPersonDetail(p.id);
        
        item.innerHTML = `
            <div class="w-10 h-10 rounded-full overflow-hidden border border-white/10 bg-[#222]">
                <img src="${p.avatar}" class="w-full h-full object-cover">
            </div>
            <div class="flex-1 overflow-hidden">
                <h4 class="text-white font-medium text-xs truncate group-hover:text-gray-200">${p.name}</h4>
                <p class="text-gray-500 text-[10px] truncate flex items-center gap-1">
                    <i data-lucide="mail" class="w-3 h-3"></i> 1 nova mensagem
                </p>
            </div>
            <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-gray-600 group-hover:text-white transition"></i>
        `;
        menu.appendChild(item);
    });
}

function openPersonDetail(id) {
    currentPersonId = id;
    toggleSidebar(false);

    loadPersonData(currentPersonId);

    const detailScreen = document.getElementById('detail-screen');
    detailScreen.classList.remove('hidden');
    void detailScreen.offsetWidth;
    detailScreen.classList.remove('view-hidden-right');
    detailScreen.classList.add('view-active');
    
    detailScreen.scrollTop = 0;
}

function navigatePerson(direction) {
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

    // Inserir o Player Oficial do Spotify via Iframe
    const spotifyContainer = document.getElementById('spotify-container');
    spotifyContainer.innerHTML = `
        <iframe style="border-radius:16px" src="${person.spotifyEmbedUrl}" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `;

    lucide.createIcons();
}

function closePersonDetail() {
    const detailScreen = document.getElementById('detail-screen');
    detailScreen.classList.remove('view-active');
    detailScreen.classList.add('view-hidden-right');
}

// Inicializar
window.onload = () => {
    setTimeout(processTerminal, 400);
    renderSidebar();
};