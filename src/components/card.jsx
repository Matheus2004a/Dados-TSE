export function Card(props) {
    return (
        <div className="card">
            <button type="submit" onClick={props.updCandidates}>Atualizar</button>
            <p className="desc-update">Última atualização: {props.date} às {props.hour}</p>
        </div>
    )
}