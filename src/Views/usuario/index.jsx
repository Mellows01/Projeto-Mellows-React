import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UsuarioService from "../../services/UsuarioService";

import '../../styles/home.css';

export default function Index() {
    const [usuario, setUsuario] = useState([]);

    const getAllUsuario = () => {
        UsuarioService.getAllUsuario()
            .then((response) => {
                setUsuario(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getAllUsuario();
    }, []);

    const deleteUsuario = (id) => {
        UsuarioService.deleteUsuario(id)
            .then((response) => {
                getAllUsuario();
            })
            .catch((error) => {
                console.log(error);
                const { data } = error.response;
                if (data.status === 500) {
                    alert("Erro na API");
                }
            });
    };

    return (
        <>
            <section className="container" id="bodyAdmin">

                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link to="/usuarios" className="nav-link" aria-current="page" style={{ color: 'black' }}>Usuários</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link" style={{ color: 'black' }}>Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/livros" className="nav-link" style={{ color: 'black' }}>Livros </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/livros-interativos" className="nav-link" style={{ color: 'black' }}>Livros Interativos</Link>
                    </li>
                </ul>

                <div className="table-responsive-sm">
                    <div className="row justify-content-center mt-4">
                        <Link to="/usuario-cadastrar" className="btn mb-2 botao1"
                            style={{ backgroundColor: "#c9c6f3ed" }}
                        > Novo Usuário</Link>
                    </div>

                    <table className="table table-hover">
                        <thead className="table-light">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Data de Nascimento</th>
                                <th scope="col">Email</th>
                                <th scope="col">Senha</th>
                                <th scope="col">Tipo de Login</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>

                            {usuario.map((usuario) => (
                                <tr key={usuario.id}>
                                    <td>{usuario.id}</td>
                                    <td>{usuario.nome}</td>
                                    <td>{usuario.dataNascimento}</td>
                                    <td>{usuario.email}</td>
                                    <td>{usuario.senha}</td>
                                    <td>{usuario.login.tipoLogin}</td>
                                    <td>
                                        <div className="d-flex">
                                            <Link to={`/usuario-editar/${usuario.id}`}
                                                className="btn btn-primary" title="Editar"> Editar <i className="ri-file-edit-line"></i>
                                            </Link>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => deleteUsuario(usuario.id)}
                                                style={{ marginLeft: "10px" }}
                                            >
                                                Deletar
                                            </button>

                                        </div>
                                    </td>
                                </tr>

                            ))}
                        </tbody>
                    </table>

                </div>
            </section>
        </>
    )

}