import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Abi from './Abi.jsx'
import List from './List.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Abi />
    {/* <List/> */}
  </StrictMode>
)