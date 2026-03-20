import '../style/Header.css'
import scratch from '../assets/scratch.png'

export default function Header() {

    return (
        <>
            <header>
                <img src={scratch} alt="scratch" />
                <h1>TINCAT</h1>
            </header>
        </>
    )

}