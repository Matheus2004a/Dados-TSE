import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'
import { TableCandidates } from './components/table'
import { Card } from "./components/card"
import { API_URL } from "../services/tse"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [candidates, setCandidates] = useState([])
  const [urnas, setUrnas] = useState()
  const [updates, setUpdates] = useState([])

  async function updateDataCandidates() {
    axios.get(API_URL).then(response => {
      console.log(response.data)
      setUrnas(response.data.pst)
      setCandidates(response.data.cand)
      setUpdates(response.data)
    }).catch(error => {
      return toast.error(error.message, {
        theme: "colored"
      })
    })
  }

  useEffect(() => {
    updateDataCandidates()
  }, [])

  return (
    <div className="App">
      <ToastContainer />

      <h1>Status da Votação 2022</h1>
      <button type="submit" onClick={updateDataCandidates}>Atualizar dados</button>

      <Card
        date={updates.dt}
        hour={updates.ht}
      />

      <h3>Porcentagem das urnas apuradas: {urnas} %</h3>

      <TableCandidates candidates={candidates} />
    </div>
  )
}

export default App
