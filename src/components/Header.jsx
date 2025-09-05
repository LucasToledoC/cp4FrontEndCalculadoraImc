import '../css/global.css'
import '../css/header.css'
import ThemeToggle from './ThemeToggle'

function Header(){
    return (
        <div className='header'>
            <h1>Calculadora IMC</h1>
            <ThemeToggle />
        </div>
    )
}
export default Header