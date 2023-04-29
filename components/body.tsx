import styles from './body.module.css'

export default function Body() {
    return (
        <>
            <section id='resumen' className="section hero is-halfheight">
                <div className="container has-text-centered mx-6">
                    <p className="subtitle py-6">
                        "Como un río que no puede evitar seguir asiendo lo que hace sin una ayuda externa;
                        el agua puede evaporarse pero tiene que aumentar la temperatura;
                        congelarse pero tendría que disminuir;
                        puede salpicar pero tiene que chocar contra un obstáculo;
                        puede cambiar de dirección pero el camino tiene que permitir el giro;
                        y así, como el agua del río, aun teniendo mil opciones a nuestro alcance,
                        elegimos deliberadamente hacer exactamente lo mismo que el día anterior..."
                    </p>
                </div>
            </section>
            <section id='sobre-me' className={`section is-dark hero is-halfheight ${styles.bgsections}`}>
                <div className={`container mx-6`}>
                    <p className='title py-6'>Sobre el autor:</p>
                    <p className="subtitle">
                        No soy de muchas palabras pero no soy mudo.
                    </p>
                    <p className="subtitle">
                        Mi dolor y sufrimiento no son importantes para el mundo.
                        Aportar al honor de aquello en lo que creo es mi objetivo.
                    </p>
                </div>
            </section>
            <section id='objetivo' className="section hero is-halfheight">
                <div className="container has-text-centered mx-6">
                    <p className="subtitle py-3">
                        Jesús le contestó: «El que pone la mano en el arado y mira hacia atrás, no sirve para el Reino de Dios.»
                    </p>
                    <p className="subtitle">
                        - Lucas: 9:62
                    </p>
                </div>
            </section>
            <section id='final' className={`section is-dark hero is-halfheight ${styles.bgsections}`}>
                <div className={`container mx-6`}>
                    <p className='title py-6'>Para terminar</p>
                    <p className="subtitle">
                        Solo un sitio de prueba en Next.js
                    </p>
                    <p className="subtitle">
                        Las probabilidades de intentar ganar algo son infimas pero hay un chance si eres muy optimista.
                    </p>
                </div>
            </section>
        </>
    );
}