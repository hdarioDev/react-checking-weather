
import React from "react";
import Header from "./components/Header"
import Layout from "./components/Layout";
import Form from './components/Form'
import Clima from "./components/Clima";
import { API, KEY } from "./env"

function App() {

  const [search, setSearch] = React.useState({
    city: '',
    country: ''
  })

  const [send, setSend] = React.useState(false)
  const [resultApi, setResultApi] = React.useState({})
  const { city, country } = search
  React.useEffect(() => {
    if (send) {
      const getApi = async () => {
        const url = `${API}weather?q=${city},${country}&appid=${KEY}`
        const response = await fetch(url)
        const result = await response.json()
        setResultApi(result)

        setSend(false)
        setSearch({
          city: '',
          country: ''
        })
      }
      getApi()

    }
  }, [send])


  return (
    <React.Fragment>
      <Header
        title="Consultando el clima"
      />
      <Layout >
        <Form
          search={search}
          setSearch={setSearch}
          send={send}
          setSend={setSend}
        ></Form>
        <Clima
          resultApi={resultApi}
        ></Clima>
      </Layout>

    </React.Fragment>


  )
}

export default App;
