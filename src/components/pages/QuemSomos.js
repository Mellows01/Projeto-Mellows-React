import mellowsTrio from '../img/mellowsTrio.png';
import LogoPro from '../img/LogoPro.png';

import '../../styles/home.css';

function QuemSomos() {
    return (
        <>
            <section  id="body">

            <div className="container box">
                <img src={mellowsTrio} alt="mellowsTrio" id="trioMellow"/>
            </div>

            <div className="container" id="texto">
             <h2 className="mb-4 text-center">Por trás dos Mellows</h2>
             <p id="p">
             Somos alunos do <b>RecodePro 2022</b>, integrantes da <b>Squad 37</b>, e desenvolvemos este projeto como uma solução
             para um problema grave em nosso país: a baixa proficiência em leitura.
             A capacidade de leitura e interpretação de textos afeta a habilidade de se desenvolver e exercer sua
             cidadania, e o objetivo do Projeto Mellows é incentivar crianças e adolescentes à lerem mais, de forma
             educativa e divertida.
             Enquanto entre os estudantes mais ricos o número de livros em casa se manteve estável entre 2000 e 2018,
             esse número caiu
             consideravelmente entre os estudantes mais pobres, não só no Brasil como em outros países. O Projeto Mellows
             atuará como
             uma plataforma para disponibilização de livros em formato PDF, tanto pelos próprios usuários quanto por
             nossa equipe.
             O site também conta com Livros Interativos, onde vocês poderão encontrar histórias e atividades juntas.
             </p>
              <img src={LogoPro} id="recode"/>
            </div>
            </section>
        </>
    );
}

export default QuemSomos;