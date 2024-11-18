const form = document.getElementById('quiz-form');
const resultSection = document.getElementById('result');
const resultText = document.querySelector('.result-text');
const resultList = document.getElementById('result-list');

// Raças com pesos baseados em características e imagens
const dogBreeds = [
    { breed: 'Golden Retriever', match: 0, image: 'images/golden-retriever.jpg' },
    { breed: 'Bulldog Francês', match: 0, image: 'images/french-bulldog.jpg' },
    { breed: 'Poodle', match: 0, image: 'images/poodle.jpg' },
    { breed: 'Pastor Alemão', match: 0, image: 'images/german-shepherd.jpg' },
    { breed: 'Shih Tzu', match: 0, image: 'images/shih-tzu.jpg' },
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
    const topBreed = sortedBreeds[0]; // O mais compatível

    resultSection.style.display = 'block';
    resultText.innerHTML = `
        Com base nas suas respostas, sua raça canina ideal é: 
        <strong>${topBreed.breed}</strong> (${topBreed.match}% de compatibilidade).
    `;

    resultList.innerHTML = `
        <li>
            <img src="${topBreed.image}" alt="${topBreed.breed}" class="dog-image">
            <p>${topBreed.breed} - ${topBreed.match}% de compatibilidade</p>
        </li>
    `;
});
