import useGet from './hooks/useGet'
import usePost from './hooks/usePost'
import useDelete from './hooks/useDelete'

const baseURL = 'https://mymoney-leobtt-default-rtdb.firebaseio.com/'

function App() {
  const data = useGet(baseURL + 'meses')
  const [postData, post] = usePost(baseURL + 'movimentacoes/2021-12')
  const [postDelete, remove] = useDelete()

  const newSave = () => {
    post({ valor: '10', descricao: 'risoli' })
  }

  const doRemove = () => {
    remove(baseURL + 'movimentacoes/2021-12/-Mro80ZgWrxXU-d4Hoy0.json')
  }

  return (
    <div>
      <nav className="nav bg-dark text-white py-3">
        <div className="container-md">
          <h1>My Money</h1>
        </div>
      </nav>
      <div className="container-md py-3">
        <select>
          <option>01</option>
          <option>02</option>
        </select>
        <select>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
        </select>
        <button type="button">Adicionar mês</button>
        {!data.loading && <p>Carregando...</p>}
        {data.loading && (
          <div>
            <table className="table  table-striped mt-4">
              <caption>Previsão financeira</caption>
              <thead>
                <tr>
                  <th scope="col">Mês</th>
                  <th scope="col">Previsão de entrada</th>
                  <th scope="col">Entrada</th>
                  <th scope="col">Previsão de saída</th>
                  <th scope="col">saída</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(data.data).map((mes) => {
                  return (
                    <tr key={mes}>
                      <th scope="row">{mes}</th>
                      <td>{data.data[mes].previsao_entrada}</td>
                      <td>{data.data[mes].entrada}</td>
                      <td>{data.data[mes].previsao_saida}</td>
                      <td>{data.data[mes].saida}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <pre>{JSON.stringify(data)}</pre>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
