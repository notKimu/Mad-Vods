import { Link } from "react-router-dom";
import Header from "./components/Header"
import g4to from "./files/img/g4to.png";
export default function NotFound() {
    return (
        <>
            <Header />

            <div className="container">
                <div className="notFound">
                    <img src={g4to} />
                    <div className="notFoundText">
                        <h1>Error 404</h1>
                        <Link to="/"><h2>¡Esta página no existe!</h2></Link>
                    </div>
                </div>
            </div>
        </>
    )
}