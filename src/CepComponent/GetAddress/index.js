export default function getCep(){
    axios.get('https://jsonplaceholder.typicode.com/todos/5')
   .then(res => {
       let response = res.data
       console.log(res.data)
       return (response)
   })
   .then((response) => injectHtml(response) )
   .catch(err => console.log(err))
}