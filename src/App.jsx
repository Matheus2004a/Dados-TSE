import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'
import { Candidate } from './components/candidate'
import { API_URL } from "../services/tse"
import { ToastContainer, toast } from "react-toastify"

function App() {
  const [candidates, setCandidates] = useState([])
  const [urnas, setUrnas] = useState()

  async function updateDataCandidate() {
    axios.get(API_URL).then(response => {
      console.log(response.data)
      setUrnas(response.data.pst)
      setCandidates(response.data.cand)
    }).catch(error => {
      toast.error(error)
    })
  }

  useEffect(() => {
    updateDataCandidate()
  }, [])

  return (
    <div className="App">
      <h1>Status da Votação 2022</h1>
      <button type="submit" onClick={updateDataCandidate}>Atualizar dados</button>

      <h3>Porcentagem das urnas apuradas: {urnas} %</h3>

      {candidates.map(data => (
        <Candidate
          num={data.n}
          name={data.nm}
          per={data.pvap}
          votes={data.vap}
        />
      ))}
    </div>
  )
}

export default App
