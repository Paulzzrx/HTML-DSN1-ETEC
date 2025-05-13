function exemplo01() {
    const nome = parseFloat(document.getElementById('input.Nome').value);
    const idade = parseFloat(document.getElementById('input.Idade').value);

    const rf = nome + idade;

    if(rf > 100) {
        alert('Você é muito velho');
    }
    else {
        alert('Você é muito novo');
    }
}