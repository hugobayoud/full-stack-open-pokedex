describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:8080', {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT  10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
      },
    });
    cy.contains('ivysaur');
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    );
  });
});
