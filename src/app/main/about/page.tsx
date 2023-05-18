
const about = () => {
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
            <article className="centro-text1">
                Hola soy José Daniel, soy de Tarragona, actualmente estoy cursando un Ciclo Formativo de Grado Medio en el Vidal i Barraquer de Tarragona.<br></br>
                Además estoy trabajando en mejorar algun aspecto:<br/>
                1. Diseño Web<br></br>
                Es algo que notaréis por el diseño de la web ya que no es el mejor pero es visible.
            </article>
        </main>
    );
}

export default about;