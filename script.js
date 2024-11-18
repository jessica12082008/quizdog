const form = document.getElementById('quiz-form');
const resultSection = document.getElementById('result');
const resultText = document.querySelector('.result-text');
const resultList = document.getElementById('result-list');

// Raças com pesos baseados em características
const dogBreeds = [
    { breed: 'Golden Retriever', match: 0 },
    { breed: 'Bulldog Francês', match: 0 },
    { breed: 'Poodle', match: 0 },
    { breed: 'Pastor Alemão', match: 0 },
    { breed: 'Shih Tzu', match: 0 },
];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obter as respostas do formulário
    const activity = document.getElementById('activity').value;
    const space = document.getElementById('space').value;
    const temperament = document.getElementById('temperament').value;
    const experience = document.getElementById('experience').value;
    const family = document.getElementById('family').value;
    const time = document.getElementById('time').value;

    // Ajustar os pesos das raças com base nas respostas
    dogBreeds.forEach((dog) => {
        dog.match = 0; // Reinicia o match para cada submissão

        // Exemplos de pesos
        if (activity === 'alto') dog.match += 30;
        if (space === 'fazenda') dog.match += 20;
        if (temperament === 'calmo') dog.match += 10;
        if (experience === 'sim') dog.match += 20;
        if (family === 'tranquila') dog.match += 10;
        if (time === 'muito') dog.match += 30;
    });

    // Ordenar por maior compatibilidade
    const sortedBreeds = dogBreeds.sort((a, b) => b.match - a.match);

    // Exibir resultados
    resultSection.style.display = 'block';
    resultText.textContent = 'Com base nas suas respostas, aqui estão as raças que mais combinam com você:';
    resultList.innerHTML = sortedBreeds
        .map(dog => `<li>${dog.breed} - ${dog.match}% de compatibilidade</li>`)
        .join('');
});
