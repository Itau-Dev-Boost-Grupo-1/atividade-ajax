export default function createForm() {
  const form = document.createElement("form");
  form.setAttribute("class", "form");

  const label = document.createElement("label");
  label.setAttribute("for", "cep");

  const input = document.createElement("input");
  input.setAttribute("type", "numberw");
  input.setAttribute("id", "cep");
  input.setAttribute("placeholder", "Digite seu cep");
  input.setAttribute("required", "true");
  input.setAttribute("minlength", "8");

  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.appendChild(document.createTextNode("Consultar CEP"));

  // const formElement = `
  //   <div class="container">
  //     <form class="container__form">
  //       <label for="cep">CEP:</label>
  //       <input type="text" id="cep" placeholder="Digite seu cep" required>
  //       <button type="submit">Consultar CEP</button>
  //     </form>
  //   </div>
  // `;

  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(button);

  return form;
}
