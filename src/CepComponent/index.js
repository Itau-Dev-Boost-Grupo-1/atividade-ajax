import RenderAddress from './RenderAddress'
import GetAddress from './GetAddress'
import CreateForm from './CreateForm'


function cepComponent(id){

    let addressData = GetAddress(cep)

    let renderedAddress =  RenderAddress(addressData)

    let container = document.getElementById(id)

    container.appendChild(renderedAddress)
}



