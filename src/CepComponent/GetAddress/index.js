import axios from 'axios'

export default async function getCep(address_cep){
    if(!address_cep) return "Please give an address"

    await axios.get(`https://api.postmon.com.br/v1/cep/${address_cep}`)
    .then(res => {
       let response = res.data
       
       return response
    })
   .catch(err => console.log(err))
}