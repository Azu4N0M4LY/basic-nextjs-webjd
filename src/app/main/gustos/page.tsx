
const gustos = () => {
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
            <article className="centro-text">
                Bueno entre mis gustos tengo los siguientes, son los que más me atraen!<br></br>
                <br/>
                1. Programar<br/>
                2. Trabajar<br/>
                3. Estudiar<br></br>
            </article>
            <div className="img-cent">
                <img src="https://beautifulpixels.com/wp-content/uploads/2017/03/5newmedia-socialmedia.png" alt="Waiting for the image..."></img>
            </div>
            <div>
                <a href="/">Volver</a>
            </div>
        </main>

    );
}

export default gustos;