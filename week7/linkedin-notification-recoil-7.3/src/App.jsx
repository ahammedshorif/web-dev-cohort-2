import { useState } from 'react'
import Nav from './components/Nav'
import { RecoilRoot } from 'recoil'

function App() {

  return (
    <div>
     <RecoilRoot>
        <Nav></Nav>
     </RecoilRoot>
        
    </div>
  )
}

export default App
