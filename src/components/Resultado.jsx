import "../css/global.css"
import "../css/resultado.css"
import tabelaIMC from "./TabelaIMC"


function Resultado({resultado}){
    return(
        <div className="resultado-card">
            <div className="tabela">
                <h2> Seu IMC é de: <span className="imcspan">{resultado}</span> </h2>
            </div>

            <table className="tabela">
                <thead className="tabelaHeader">
                    <tr>
                        <th>Classificação</th>
                        <th>IMC</th>
                    </tr>
                </thead>

                <tbody className="tableBody">
                    <tr> {tabelaIMC(resultado)}</tr>
                </tbody>
            </table>

        </div>
    )
}
export default Resultado