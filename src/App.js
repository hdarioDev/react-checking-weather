
import React from "react";
import Header from "./components/Header"
import Layout from "./components/Layout";
import Form from './components/Form'
import Clima from "./components/Clima";
import ErrorSms from "./components/ErrorSms";

function App() {
  const API = 'e21aec25e770c2daf2c3b99fe8d897f2'
  const [search, setSearch] = React.useState({
    city: '',
    country: ''
  })

  const [send, setSend] = React.useState(false)
  const [resultApi, setResultApi] = React.useState({})
  // const [errorSave, setErrorSave] = React.useState(false)


  const { city, country } = search
  React.useEffect(() => {
    if (send) {
      const getApi = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API}`
        const response = await fetch(url)
        const result = await response.json()
        console.log("result ", result)
        setResultApi(result)

        setSend(false)
        // if (result.cod === "404") {
        //   setErrorSave(true)
        // } else {
        //   setErrorSave(false)
        // }
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
