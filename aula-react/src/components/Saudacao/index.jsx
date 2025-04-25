import './style.css'

function Saudacao({nome, sobrenome}){
  return ( 
  <p className='titulo'>Olá, {nome} {sobrenome}! seja bem-vindo!</p>
  )
}

export default Saudacao;