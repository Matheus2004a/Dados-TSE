import "../components/candidate.css"

export function Candidate(props) {
    function formatVotes(votes) {
        return Number(votes).toLocaleString("pt-BR")
    }

    return (
        <tr>
            <th scope="row">{props.num}</th>
            <td>{props.name}</td>
            <td>{props.per}%</td>
            <td>{formatVotes(props.votes)}</td>
            <td className={props.status !== "Não eleito" && `seg-turno`}>
                <span>{props.status}</span>
            </td>
        </tr>
    )
}