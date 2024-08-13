import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Tag, logText } from "ui"

function App(): JSX.Element {
  type res = {
    users: string
  }

  const [count, setCount] = useState<number>(0)

  let [textAPI, settextAPI] = useState<string | null>(null)

  async function getTextAPI(): Promise<void> {
    const res: res = await ((await fetch('users')).json())
    settextAPI(res.users) 
  }

  useEffect(() => {
    getTextAPI()
  }, [])

  return (
    <>
    <div style={{
      display: 'flex',
      maxWidth: '1000px',
      flexWrap: 'wrap',
      justifyContent: 'center',
    }}>
      <Tag text={'FrontEnd OK'}></Tag>
      <Tag text={'BackEnd OK'}></Tag>
      <Tag text={textAPI}></Tag>
      <Tag text='Typescript OK'></Tag>
      <Tag text={logText('')}></Tag>
      <Tag text={logText('packages OK')}></Tag>
    </div>
    
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
