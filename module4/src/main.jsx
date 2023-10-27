import ReactDOM from 'react-dom/client'

import App from './App'
import axios from 'axios'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

const promise = axios.get('http://localhost:3001/contacts')

promise.then(response => {
    console.log(response)
  })
