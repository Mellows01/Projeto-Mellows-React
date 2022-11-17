import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import LoginService from "../../services/LoginService";

export default function Create() {
    const [tipoLogin, setTipoLogin] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    const criarOuEditarLogin = (e) => {
        e.preventDefault();

        const login = { tipoLogin };

        if (id) {
            // update
            LoginService.updateLogin(id, login)
                .then((response) => {
                    navigate("/login");
                })
        } else {
            LoginService.createLogin(login).then((response) => {
                navigate("/login");
            });
        }
    };

    useEffect(() => {
        function getLoginById() {
            if (id) {
                LoginService.getLoginById(id)
                    .then((response) => {
                        setTipoLogin(response.data.tipoLogin);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        }
        getLoginById()
    }, [id]);

    return (
        <div className="container py-3 col-12 col-md-4" id="bodyAdmin">
            <form>
                <h2 className="text-center pt-3">{id ? "Editar" : "Cadastrar"} login</h2>

                <div className="form-group mb-3">
                    <label htmlFor="tipoLogin" className="form-label"> Tipo de Login</label> <input
                        type="text" id="tipoLogin" name="tipoLogin" value={tipoLogin}
                        onChange={(e) => setTipoLogin(e.target.value)} className="form-control" />
                </div>

                <button type="submit" className="btn" id="btnAdmin" onClick={(e) => criarOuEditarLogin(e)}>Enviar</button>
                <Link to="/login" className="btn" id="btnAdmin" style={{ marginLeft: "10px" }}>
                    Cancelar </Link>
            </form>
        </div>
    );
}