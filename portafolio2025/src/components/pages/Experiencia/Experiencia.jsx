import './Experiencia.css'
export function Experiencia(){

    return(
        <>

            <section className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2>MI EXPERIENCIA</h2>
                        <hr />
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="row">
                    <div className="col-12">
                        <div class="progress" role="progressbar">
                            <div class="progress-bar barra">50%</div>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
             <section className="container">
            <section className="row">
                <div className="col-6 mt-5">
                    <div className='card-p3 shadow'>
                        <h2>Logica de Programación</h2>
                        <img src="../../../../src/assets/img/logicaProgramacion.jpg" alt="" className='img-fluid' />
                        <p>Declarar variables, condicionales y ciclos</p>
                        <div class="progress" role="progressbar">
                            <div class="progress-bar barra" >50%</div>
                        </div>
                    </div>
                </div>
                <div className="col-6 mt-5">
                <div className='card-p3 shadow'>
                        <h2>Base de datos</h2>
                        <img src="../../../../src/assets/img/database.jpg" alt=""  className='img-fluid'/>
                        <p>Conceptos basicos, modelo entidad relación y SQL</p>
                        <div class="progress" role="progressbar">
                            <div class="progress-bar barra" >30%</div>
                        </div>
                    </div>
                </div>
            </section>
         </section>
         <hr />
         <section className="container">
            <section className="row">
                <div className="col-6 mt-5">
                    <div className='card-p3 shadow'>
                        <h2>HTML Y CSS</h2>
                        <img src="../../../../src/assets/img/HTML-CSS.png" alt="" className='img-fluid' />
                        <p>Aprendi a estructurar y estilizar paginas de manera efectiva con html y css.</p>
                        <div class="progress" role="progressbar">
                            <div class="progress-bar barra" >60%</div>
                        </div>
                    </div>
                </div>
                <div className="col-6 mt-5">
                <div className='card-p3 shadow'>
                        <h2>Uso de Git</h2>
                        <img src="../../../../src/assets/img/git.jpg.jpeg" alt=""  className='img-fluid'/>
                        <p>se realiza el control de versiones de proyectos, lo que significa que puedes guardar, rastrear, comparar y recuperar diferentes versiones de tu código o archivos a lo largo del tiempo.</p>
                        <div class="progress" role="progressbar">
                            <div class="progress-bar barra" >50%</div>
                        </div>
                    </div>
                </div>
            </section>
         </section>
         
         <footer>
        <section class="container-fluid colorfooter p-5 mt-5">
            <div class="row">

                <div class="col-12 align-center">
                <h1>Acerca de</h1>
                <img src="../../../../src/assets/img/logo github.png" alt="" className="img-fluid" />
                <hr />
                <h5>Valentina Montoya Prado &copy;</h5>
                <h5>valentinamcesde2024@gmail.com</h5>
                <h5>2025</h5>
             </div>
    
            </div>
        </section>
    </footer>

        </>
    )

}