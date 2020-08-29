import RenderAddress from "./RenderAddress";
import GetAddress from "./GetAddress";
import CreateForm from "./CreateForm";

export default function cepComponent(id) {
  const container = document.getElementById(id);

  /**
   * Render form
   */

  const formComponent = CreateForm();
  container.appendChild(formComponent);

  const display = document.createElement("div")
  container.appendChild(display)

  /**
   * Submit form
   */

  formComponent.onsubmit = function (e) {
    e.preventDefault();

    const inputValue = formComponent.elements[0].value;

    async function handleGetAddress() {
        let addressData = {}

        try {

            display.innerHTML = ""
            addressData = await GetAddress(inputValue);

        } catch (error) {

           console.error("Houve um erro")
        } finally {

          let renderedAddress = RenderAddress(addressData);
          display.appendChild(renderedAddress);
        }

    }

    handleGetAddress();
  };
}
