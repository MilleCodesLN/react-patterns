// Composant Proxy
// http://localhost:3000/alone/exercise/01.js

import * as React from 'react'

// 🐶 Crée un composant proxy 'Button' ayant la même implémentation du bouton qu'actuellement
// 🤖 return <button>👍</button>
function Button({style={backgroundColor:'lightblue', border:'none', padding:'6px 6px', margin:"10px", cursor: 'pointer'}, value='👍', type='button'})  {
  return <input type={type} style={style} value={value} />
}

// 🐶 Remplace tous les `<button>👍</button>` par le proxy composant 'Button'

function Header() {
  return (
    <div>
      <h1>Welcome</h1>
      {/* <button>👍</button> */}
      <Button />
    </div>
  )
}
function Content() {
  return (
    <div>
      <h2>Articles</h2>
      <span>article 1</span>
      {/* <button>👍</button> */}
       <Button />
      <span>article 2</span>
       {/* <button>👍</button> */}
       <Button />
      <span>article 3</span>
       {/* <button>👍</button> */}
       <Button />
    </div>
  )
}
function Footer() {
  return (
    <div>
      <h3>Contact us</h3>
       {/* <button>👍</button> */}
       <Button />
    </div>
  )
}

function App() {
  return (
    <React.Fragment>
      <Header />
      <Content />
      <Footer />
    </React.Fragment>
  )
}

export default App
