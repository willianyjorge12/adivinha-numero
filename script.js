let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 3;

function checkGuess() {
    let userGuess = document.getElementById('guess').value;
    let message = document.getElementById('message');
    let attemptsText = document.getElementById('attempts');

    if (userGuess == randomNumber) {
        message.style.color = 'green';
        message.textContent = `Parabéns! Você adivinhou o número em ${4 - attemptsLeft} tentativas.`;
        document.getElementById('restart-btn').style.display = 'block'; // Exibe o botão de reiniciar
        document.querySelector("button").disabled = true; // Desativa o botão de tentar
    } else if (userGuess < randomNumber) {
        message.style.color = 'red';
        message.textContent = 'O número é maior! Tente novamente.';
    } else if (userGuess > randomNumber) {
        message.style.color = 'red';
        message.textContent = 'O número é menor! Tente novamente.';
    }

    attemptsLeft--;
    attemptsText.textContent = `Tentativas restantes: ${attemptsLeft}`;

    if (attemptsLeft === 0) {
        message.style.color = 'orange';
        message.textContent = `Game Over! O número era ${randomNumber}.`;
        document.getElementById('restart-btn').style.display = 'block'; // Exibe o botão de reiniciar
        document.querySelector("button").disabled = true; // Desativa o botão de tentar
    }
}

function restartGame() {
    // Reinicia o jogo
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = 3;
    document.getElementById('guess').value = '';
    document.getElementById('message').textContent = '';
    document.getElementById('attempts').textContent = `Tentativas restantes: ${attemptsLeft}`;
    document.querySelector("button").disabled = false; // Ativa o botão de tentar novamente
    document.getElementById('restart-btn').style.display = 'none'; // Oculta o botão de reiniciar
}
