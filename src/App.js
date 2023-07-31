import { Provider } from './context'
import './css/App.css'
import Jobs from './components/Jobs'
import JobDetails from './components/JobDetails'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

export default function App() {
  const [theme, setTheme] = useState('light')
  return (
    <Provider>
      <div className="App" data-theme={theme}>
        <Header setTheme={setTheme} />
        <Routes>
          <Route path='/' element={<Jobs />} />
          <Route path='/jobs/:id' element={<JobDetails />} />
        </Routes>
      </div>
    </Provider>
  )
}
