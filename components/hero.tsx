// import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import styles from './hero.module.css'
import { BsGithub } from 'react-icons/bs'

export default function Hero() {
    return (
        <section className={`hero is-dark is-fullheight ${styles.bghero}`}>
            <div className="hero-head">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <span className="navbar-burger" data-target="navbarMenuHeroB">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenuHeroB" className="navbar-menu">
                            <div className="navbar-end has-text-centered">
                                <span className="navbar-item">
                                    <a className="button is-dark is-inverted">
                                        <span className="icon">
                                            <BsGithub />
                                        </span>
                                        <span>Descargar</span>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="hero-body">
                <div className="container has-text-centered">
                    <p className="subtitle">
                        Bienvenido a
                    </p>
                    <p className="title is-size-1">
                        Duplex Nulla
                    </p>
                </div>
            </div>

            <div className="hero-foot">
                <nav className="tabs is-boxed is-fullwidth">
                    <div className="container">
                        <ul>
                            <li className="is-active">
                                <Link href="#resumen">Resumen</Link>
                            </li>
                            <li>
                                <a>Modifiers</a>
                            </li>
                            <li>
                                <a>Grid</a>
                            </li>
                            <li>
                                <a>Elements</a>
                            </li>
                            <li>
                                <a>Components</a>
                            </li>
                            <li>
                                <a>Layout</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
    );
}