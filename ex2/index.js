class List1 {
    constructor() {
        this.list = [];
        this.listRef = null;
    }

    addElmnt = (elmnt) => {
        if (this.list.includes(elmnt) || !elmnt.trim()) return;
        this.list.push(elmnt);
        this.draw();
    }

    rmElemnt = () => {
        this.list.pop();
        this.draw();
    }

    draw() {
        this.listRef.innerText = this.list.join(", ");
    }

    isEmpty() {
        return this.list.length === 0;
    }
}

// Cria um elemento <h1> para exibir a lista
const listDisplay = document.createElement('h1');
document.body.appendChild(listDisplay);

// Instancia a classe
const vList = new List1();
vList.listRef = listDisplay;

// Cria o input
const input = document.createElement('input');
document.body.appendChild(input);

// Cria botão reutilizável
const createBtn = (label, onClick) => {
    const btn = document.createElement('button');
    btn.innerText = label;
    btn.addEventListener('click', onClick);
    document.body.appendChild(btn);
    return btn;
};

// Cria os botões
const addBtn = createBtn("Add", () => {
    vList.addElmnt(input.value);
    updateRemoveBtn(); 
});

const removeBtn = createBtn("Remove", () => {
    vList.rmElemnt();
    updateRemoveBtn(); 
});

// Controle externo da ativação/desativação do botão "Remove"
const updateRemoveBtn = () => {
    removeBtn.disabled = vList.isEmpty();
};

updateRemoveBtn();
