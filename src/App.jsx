import Header from './components/Header.jsx'
import Balance from './components/Balance'
import Income from './components/Income.jsx'
import Tranasction from './components/Tranasction.jsx'
import Addtransction from './components/Addtransction.jsx'
import { GlopalProvider } from './context/GlobalState.jsx'
function App() {

  return (
    <GlopalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <Income />
        <Tranasction />
        <Addtransction />
      </div>
    </GlopalProvider>
  )
}

export default App
