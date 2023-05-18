export default function portada() {
    return (
        <main>
            <nav className="navibar">
                <ul>
                    <li><a href="/main/about">About me</a></li>
                    <li><a href="/main/competencias">Competencias</a></li>
                    <li><a href="/main/gustos">Gustos</a></li>
                    <li><a href="/main/curriculum">Currículum</a></li>
                </ul>
            </nav>
            <div className="img-centro-derecha">
                <img src="https://cdn0.iconfinder.com/data/icons/hola-augmented-reality/64/augmented-reality-computer-developer-coding-programming-512.png" alt="Waiting for the image!"></img>
            </div>
            <article className="centro-art">
                <div className="centro-div">
                    <article className="texto">
                        Hola soy José Daniel, vivo en Tarragona, me gusta el deporte, la tecnología en general.<br></br>
                        Pero dentro de la tecnología en general pero hay unos aspectos de la tecnología que me gustan más como:<br/>
                        <br/>
                        <p className="indent">
                            1. Programación<br></br>
                            2. Redes<br></br>
                            3. Ciberseguridad<br></br>
                        </p>
                    </article>
                </div>
            </article>
        </main>
    );
}