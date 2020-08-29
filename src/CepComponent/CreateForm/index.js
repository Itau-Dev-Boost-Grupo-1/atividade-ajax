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

  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(button);

  return form;
}
