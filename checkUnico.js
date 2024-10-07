function verificarNomesRepetidos() {
    const nomesCheckboxes = {};
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        const nomeElemento = checkbox.closest('tr').querySelector('td:nth-child(5)');
        
        if (nomeElemento) {
            const nome = nomeElemento.textContent.trim();
            console.log(`Checkbox ID: ${checkbox.id}, Nome: ${nome}`); // Adicione este log para verificar os nomes
            if (nomesCheckboxes[nome]) {
                nomesCheckboxes[nome].push(checkbox);
            } else {
                nomesCheckboxes[nome] = [checkbox];
            }
        } else {
            console.warn("Nome elemento não encontrado para o checkbox:", checkbox);
        }
    });

    Object.keys(nomesCheckboxes).forEach(nome => {
        const checkboxesParaDesmarcar = nomesCheckboxes[nome];
        if (checkboxesParaDesmarcar.length > 1) {
            checkboxesParaDesmarcar.forEach((checkbox, index) => {
                checkbox.checked = index === 0; // Apenas o primeiro checkbox permanece marcado
            });
        }
    });
}

// Chame a função
verificarNomesRepetidos();
