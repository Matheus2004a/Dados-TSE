import { Candidate } from "../components/candidate"

export function TableCandidates(props) {
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Nº</th>
                    <th scope="col">Presidentes</th>
                    <th scope="col">Porcentagem</th>
                    <th scope="col">Total dos votos</th>
                </tr>
            </thead>
            <tbody>
                {props.candidates.map(data => (
                    <Candidate
                        num={data.n}
                        name={data.nm}
                        per={data.pvap}
                        votes={data.vap}
                    />
                ))}
            </tbody>
        </table>
    )
}