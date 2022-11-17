import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoginService from "../../services/LoginService";

export default function Index() {
    const [login, setLogin] = useState([]);

    const getAllLogin = () => {
        LoginService.getAllLogin()
            .then((response) => {
                setLogin(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getAllLogin();
    }, []);

    const deleteLogin = (id) => {
        LoginService.deleteLogin(id)
            .then((response) => {
                getAllLogin();
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
            <section className="container " id="bodyAdmin">

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
                        <Link to="/login-cadastrar" className="btn mb-2 botao1"
                            style={{ backgroundColor: '#c9c6f3ed' }}
                        > Novo Login</Link>
                    </div>

                    <table className="table table-hover">
                        <thead className="table-light">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Tipo</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>

                            {login.map((login) => (
                                <tr key={login.id}>
                                    <td>{login.id}</td>
                                    <td>{login.tipoLogin}</td>
                                    <td>
                                        <div className="d-flex">
                                            <Link to={`/login-editar/${login.id}`}
                                                className="btn btn-primary" title="Editar"> Editar <i className="ri-file-edit-line"></i>
                                            </Link>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => deleteLogin(login.id)}
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