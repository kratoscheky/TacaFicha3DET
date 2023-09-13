const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');

describe('Monta ficha e faz download', () => {
  it("should input the character's info and download an image after clicking the save image button", () => {
    cy.deleteDownloadsFolder();
    
    // Visit your website's homepage
    cy.visit('http://127.0.0.1:3000/');

    // Set character's info
    cy.getByTestId('nome').type('MIZYU');
    cy.getByTestId('arquetipo').type('猫みたい');
    cy.getByTestId('pontos-totais').type('{selectAll}{backspace}10');
    cy.getByTestId('descricao').type('大好きだよ～');

    cy.getByTestId('poder').type('{selectAll}{backspace}3');
    cy.getByTestId('habilidade').type('{selectAll}{backspace}3');
    cy.getByTestId('resistencia').type('{selectAll}{backspace}1');
    
    cy.getByTestId('btn-pericias').click();
    cy.getByTestId('pericia-Esporte').click();
    cy.getByTestId('btn-pericias').click();
    cy.getByTestId('pericia-Influência').click();
    cy.getByTestId('btn-pericias').click();
    cy.getByTestId('pericia-Arte').click();
    
    cy.getByTestId('btn-vantagens').click();
    cy.getByTestId('vantagem-Carismático').click();

    cy.getByTestId('btn-desvantagens').click();
    cy.getByTestId('desvantagem-Frágil').click();

    cy.getByTestId('imagem-customizada').selectFile('cypress/fixtures/imagem-referencia.jpg', { force: true })

    // Find and click the "Save Image" button
    cy.contains('Salvar Imagem').click();
    
    // Use readFile to check if the image was downloaded
    cy.readFile('cypress/downloads/ficha.png', null).then(ficha => {
      // Compares downloaded image agains reference image
      cy.readFile('cypress/fixtures/ficha-referencia.png', null).then(fichaReferencia => {
        const fichaPNG = PNG.sync.read(ficha);
        const fichaReferenciaPNG = PNG.sync.read(fichaReferencia);

        const {width, height} = fichaReferenciaPNG;
        const diff = new PNG({width, height});

        var diffPixels = pixelmatch(fichaPNG.data, fichaReferenciaPNG.data, diff.data, width, height, {threshold: 0.15});

        if (diffPixels > 0) {
          cy.writeFile('cypress/evidences/ficha-diff.png', PNG.sync.write(diff), null).then(a => {
            expect(diffPixels).to.equal(0);
          })
        } else {
          expect(diffPixels).to.equal(0);
        }
      });
    });

  })
})