import PlotSettings from './components/plotSettings/PlotSettings'
import PlotResult from './components/plotResult'
import styled from 'styled-components'

const App = () => {
  return (
    <Main>
      <PlotSettings />
      <PlotResult />
    </Main>
  )
}

const Main = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: space-around;
`

export default App
