export default function createForm() {
  const formElement = `
    <div class="container">
      <form class="container__form">
        <label for="cep">CEP:</label>
        <input type="text" id="cep" placeholder="Digite seu cep" required>
        <button type="submit">Consultar CEP</button>
      </form>
    </div>
  `;

  return formElement;
}
