import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import LiService from "../../services/LiService";

import '../../styles/home.css';

export default function Create() {

    const [nome, setNome] = useState("");
    const [autor, setAutor] = useState("");
    const [genero, setGenero] = useState("");
    const [nivel, setNivel] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    const criarOuEditarLi = (e) => {
        e.preventDefault();

        const li = { nome, autor, genero, nivel };

        if (id) {
            // update
            LiService.updateLi(id, li)
                .then((response) => {
                    navigate("/livros-interativos");
                })
        } else {
            LiService.createLi(li).then((response) => {
                navigate("/livros-interativos");
            });
        }
    };

    useEffect(() => {
        function getLiById() {
            if (id) {
                LiService.getLiById(id)
                    .then((response) => {
                        let db = response.data;
                        setNome(db.nome);
                        setAutor(db.autor);
                        setGenero(db.genero);
                        setNivel(db.nivel);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        }
        getLiById()
    }, [id]);

    return (
        <div className="container py-3 col-12 col-md-6" id="bodyAdmin">
            <form>
                <h2 className="text-center pt-3">{id ? "Editar" : "Cadastrar"} livro interativo</h2>

                <div className="form-group mb-3">
                    <label htmlFor="nome" className="form-label"> Nome</label> <input
                        type="text" id="nome" name="nome" value={nome}
                        onChange={(e) => setNome(e.target.value)} className="form-control" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="autor" className="form-label"> Autor</label> <input
                        type="text" id="autor" name="autor" value={autor}
                        onChange={(e) => setAutor(e.target.value)} className="form-control" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="genero" className="form-label"> Gênero</label> <input
                        type="text" id="genero" name="genero" value={genero}
                        onChange={(e) => setGenero(e.target.value)} className="form-control" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="nivel" className="form-label"> Nível</label> <input
                        type="text" id="nivel" name="nivel" value={nivel}
                        onChange={(e) => setNivel(e.target.value)} className="form-control" />
                </div>
                <button type="submit" className="btn" id="btnAdmin" onClick={(e) => criarOuEditarLi(e)}>Enviar</button>
                <Link to="/livros-interativos" className="btn" id="btnAdmin" style={{ marginLeft: "10px" }}>
                    Cancelar </Link>
            </form>
        </div>
    );
}