import footer from '../../src/styles/footer.css';
import mellowRoxo from './img/mellowRoxo.png'

function Footer() {
    return (
        <footer className="footer fixed-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-12">
                        <h6>
                            <i className="fa-solid fa-envelope" id="em"></i>
                            Fale com a gente!
                        </h6>
                        <a href="" className="list">contato@mellows.com.br</a>

                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <h6>
                            <i className="fa fa-github" aria-hidden="true" id="gt"></i>
                            Conheça o projeto:
                        </h6>
                        <a href="https://github.com/Mellows01/Projeto-Mellows-Recode">GitHub</a>

                    </div>
                    <div className="col-lg-4 col-sm-12 ">
                        <h6>
                            <i className="fa-solid fa-globe" id='globo'></i>
                            Nos siga nas redes
                        </h6>
                        <p><i className="fa-brands fa-facebook-f" id='fb'></i><a href="..." className="list"> Facebook </a> <i className="fa-brands fa-instagram" id="ig"></i><a href="..." className="list"> Instagram </a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;