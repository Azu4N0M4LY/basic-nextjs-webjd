const compe = () =>{
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
            <article>
                <h1>CAMPO PROFESIONAL</h1>
                Este profesional ejercirá la actividad principalmente en empresas del sector que se dediquen a la comercialización, montaje y la reparación de equipos y servicios microinformáticos en general, como a parte del soporte informático de la organización o entidades de cualquier tamaño y el sector productivo que utilice sistemas microinformáticos y redes de datos para su gestión.
                <img className="img-reducida" src="https://cdn.goconqr.com/uploads/media/image/18694620/desktop_614f60d8-05cd-4801-ad99-0654d1debdc8.png" alt="Image loading..."></img>
            </article>
            <article className="indent">
                <h1 className="ocupa">OCUPACIONES</h1>
                1. Personal técnico instalador-reparador de equipos informáticos, Relacionado con el módulo profesional 1 y 2 <br/>
                2. Personal técnico de soporte informático, Relacionado con el módulo profesional 1, FOL<br/>
                3. Personal técnico de redes de datos, Relacionado con el módulo profesional 5, 6 y 4<br/>
                4. Personal reparador de periféricos de sistemas microinformáticos, Relacionado con el módulo profesional 1<br/>
                5. Comerciales de microinformática, Relacionado con todos los módulos, excepto FOL (Módulo 9)<br/>
                6. Personal operador de teleasistencia, Relacionado con todos menos FOL (MP9)<br/>
                7. Personal operador de sistemas, Relacionado con el módulo profesional 2<br/>
            </article>
            <br></br>
            <article>
                <a href="http://treball.barcelonactiva.cat" target="_blank">Barcelona Activa</a>
            </article>
            <br></br>
            <a href="/">Volver</a>
        </main>
    );
};


export default compe;