export function Candidate(props) {
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Nº</th>
                    <th scope="col">Candidato(a)</th>
                    <th scope="col">Porcentagem</th>
                    <th scope="col">Total dos votos</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">{props.num}</th>
                    <td>{props.name}</td>
                    <td>{props.per}%</td>
                    <td>{props.votos}</td>
                </tr>
            </tbody>
        </table>
    )
}