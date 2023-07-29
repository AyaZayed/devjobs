import { Provider } from './context'
import './css/App.css'
import SearchForm from './components/SearchForm'
import Jobs from './components/Jobs'

export default function App() {

  return (
    <Provider>
      <div className="App">
        <SearchForm />
        <Jobs />
      </div>
    </Provider>
  )
}
