document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('investmentTable');
    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');

    for (let row of rows) {
        const valueCell = row.cells[1];
        valueCell.addEventListener('input', updateTable);
    }

    function updateTable() {
        let accumulated = 0;
        for (let row of rows) {
            const valueCell = row.cells[1];
            const interestCell = row.cells[2];
            const accumulatedCell = row.cells[3];

            const value = parseFloat(valueCell.textContent) || 0;
            const interest = value * 0.0075; // Supondo uma taxa de juros de 0.75% ao mês
            accumulated += value + interest;

            interestCell.textContent = interest.toFixed(2);
            accumulatedCell.textContent = accumulated.toFixed(2);
        }
    }

    // Atualiza a tabela inicialmente
    updateTable();
});