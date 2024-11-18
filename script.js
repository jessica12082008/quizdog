const form = document.getElementById('quiz-form');
const resultSection = document.getElementById('result');
const resultText = document.querySelector('.result-text');
const resultList = document.getElementById('result-list');

// Simulação de raças e porcentagens
const dogBreeds = [
    { breed: 'Golden Retriever', match: 95 },
    { breed: 'Bulldog Francês', match: 90 },
    { breed: 'Poodle', match: 85 },
    { breed: 'Pastor Alemão', match: 80 },
    { breed: 'Shih Tzu', match: 75 },
];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Gerar resultados aleatórios para simular cálculo
    const sortedBreeds = dogBreeds.sort(() => Math.random() - 0.5);

    // Exibir resultados
    resultSection.style.display = 'block';
    resultText.textContent = 'Com base nas suas respostas, aqui estão as raças que mais combinam com você:';
    resultList.innerHTML = sortedBreeds
        .map(breed => `<li>${breed.breed} - ${breed.match}% de compatibilidade</li>`)
        .join('');
});
