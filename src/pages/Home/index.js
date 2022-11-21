import './home.css'

import { Social } from '../../components/Social'

import { FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'

export default function Home(){
    return(
        <div className="home-container">
            <h1>Home</h1>
            <span>Veja meu links🤠</span>

            <main className="links">
                <section className="link-area">
                    <a href="#">
                        <p className="link-text">Github</p>
                    </a>
                </section>

                <section className="link-area">
                    <a href="#">
                        <p className="link-text">Linkedin</p>
                    </a>
                </section>

                <section className="link-area">
                    <a href="#">
                        <p className="link-text">Qualquer outra merda</p>
                    </a>
                </section>

                <footer>
                    <Social url="https://github.com/EikiGabriel">
                        <FaGithub size={35} color='#FFF'/>
                    </Social>

                    <Social url="https://www.linkedin.com/in/gabriel-eiki-yokoyama-7966b6254/">
                        <FaLinkedin size={35} color='#FFF'/>
                    </Social>

                    <Social url="https://www.instagram.com/eiki.gabriel">
                        <FaInstagram size={35} color='#FFF'/>
                    </Social>

                </footer>

            </main>

        </div>
    )
}