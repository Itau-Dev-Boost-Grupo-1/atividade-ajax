import regeneratorRuntime from "regenerator-runtime";
import axios from "axios";

export default function getCep(address_cep) {
  if (!address_cep) return "Add address cep";

  return new Promise((resolve, reject) => {
    axios
      .get(`https://api.postmon.com.br/v1/cep/${address_cep}`)
      .then((res) => {
        let response = res.data;

        resolve(response);
      })
      .catch((err) => reject(err));
  });
}
