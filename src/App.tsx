import { Demo } from "./components/Demo"
import { Hero } from "./components/Hero"

import './App.css'
export const App = () => {
  return (
    <main >
      <div className="main">
        <div className="gradiant" />
      </div>
        
      <div className="app">
        <Hero />
        <Demo />  
      </div>  
    </main>
  )
}
