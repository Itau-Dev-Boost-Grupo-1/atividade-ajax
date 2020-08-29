import RenderAddress from '../RenderAddress'
import axios from 'axios'

export default function getCep(address_cep){
    if(!address_cep) return "Please give an address"

    axios.get(`https://api.postmon.com.br/v1/cep/${address_cep}`)
   .then(res => {
       let response = res.data
       
       return (response)
   })
   .then((response) => RenderAddress(response) )
   .catch(err => console.log(err))
}