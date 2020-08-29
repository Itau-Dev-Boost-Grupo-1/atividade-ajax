// CSS classes for the style
const ADDRESS_LABLE_CSS_CLASS = "label-address";
const ADDRESS_CSS_CLASS = "address";
const ADDRESS_FIELD_CSS_CLASS = "address-field";

/**
 * @name renderAddress
 * @description Renders the html using the address data
 *
 * @param {*} addressData
 *
 * @returns HTML DOM object
 */
export default function renderAddress(addressData = {}) {
  let addressContainer = document.createElement("div");
  addressContainer.setAttribute("class", ADDRESS_CSS_CLASS);

  if (!addressData) {
    console.error("[renderAddress] The address data was not given.");

    return addressContainer;
  }

  for (const dataName in addressData) {
    const data = addressData[dataName];
    const dataField = createDataField(data, dataName);

    addressContainer.appendChild(dataField);
  }

  return addressContainer;
}

function createDataField(data = "", label = "") {
  let dataFieldContainer = document.createElement("div");

  if (label.length) {
    let separator = ":";

    let labelHolder = document.createElement("span");
    labelHolder.setAttribute("class", ADDRESS_LABLE_CSS_CLASS);
    labelHolder.appendChild(document.createTextNode(label + separator));

    dataFieldContainer.appendChild(labelHolder);
  }

  if (data.length) {
    let dataField = document.createElement("span");
    dataField.setAttribute("class", ADDRESS_FIELD_CSS_CLASS);
    dataField.appendChild(document.createTextNode(data));

    dataFieldContainer.appendChild(dataField);
  }

  return dataFieldContainer;
}
