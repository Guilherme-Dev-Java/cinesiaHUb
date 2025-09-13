document.addEventListener('DOMContentLoaded', () => {
  const resultsDiv = document.getElementById('results');
  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');
  const searchInput = document.getElementById('searchInput');

  /**
   * Exibe os movimentos na interface do usuário.
   * @param {Array} movs - O array de objetos de movimento para exibir.
   */
  function displayMovimentos(movs) {
    resultsDiv.innerHTML = '';
    if (movs.length === 0) {
      resultsDiv.innerHTML = `<p class="text-gray-600 text-center">Nenhum movimento encontrado.</p>`;
      return;
    }
    movs.forEach(mov => {
      const card = document.createElement('div');
      card.className = 'card';

      const testesHTML = mov.testes.map(teste => {
        const videos = teste.videos.map((video, index) => {
          return `<a href="${video}" target="_blank" class="video-link">Vídeo ${index + 1}</a>`;
        }).join('');
        return `
          <div class="mt-4">
            <h4 class="font-semibold text-gray-800">${teste.nome}</h4>
            <p class="text-sm text-gray-600 mt-1">${videos}</p>
          </div>
        `;
      }).join('');

      card.innerHTML = `
        <h3 class="text-xl font-bold text-green-700">${mov.movimento}</h3>
        <p class="text-gray-700 mt-2"><b>Articulação:</b> ${mov.articulacao}</p>
        <p class="text-gray-700"><b>Agonistas:</b> ${mov.agonistas}</p>
        <p class="text-gray-700"><b>Antagonistas:</b> ${mov.antagonistas}</p>
        ${testesHTML}
      `;
      resultsDiv.appendChild(card);
    });
  }

  /**
   * Filtra e exibe os movimentos com base na articulação selecionada.
   * Esta função é global para ser acessível a partir dos eventos onclick do HTML.
   * @param {string} articulacao - O nome da articulação para filtrar.
   */
  window.filterArticulacao = (articulacao) => {
    const filteredMovimentos = movimentos.filter(mov => mov.articulacao === articulacao);
    displayMovimentos(filteredMovimentos);
  };

  /**
   * Lida com a entrada de pesquisa para filtrar movimentos.
   */
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      const filteredMovimentos = movimentos.filter(mov =>
        mov.articulacao.toLowerCase().includes(query) ||
        mov.movimento.toLowerCase().includes(query) ||
        mov.agonistas.toLowerCase().includes(query) ||
        mov.antagonistas.toLowerCase().includes(query)
      );
      displayMovimentos(filteredMovimentos);
    });
  }

  // Exibe todos os movimentos quando a página é carregada
  displayMovimentos(movimentos);

  // Lógica do menu para dispositivos móveis
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
});