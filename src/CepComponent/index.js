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

  /**
   * Submit form
   */

  formComponent.onsubmit = function (e) {
    e.preventDefault();

    const inputValue = formComponent.elements[0].value;

    async function handleGetAddress() {
      const addressData = await GetAddress(inputValue);

      let renderedAddress = RenderAddress(addressData);

      container.appendChild(renderedAddress);
    }

    handleGetAddress();
  };
}
