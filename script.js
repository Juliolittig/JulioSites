 document.getElementById('formContato').addEventListener('submit', function (event) {
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;

        if (!nome || !email) {
            alert('Por favor, preencha todos os campos!');
            event.preventDefault(); // Evita o envio do formulário
        } else {
            alert(`Obrigado pelo contato, ${nome}!`);
        }
    });

