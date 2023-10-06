import React from 'react'
import Routing from '../Routing/Routing';
import './Layout.css';

export default function Layout() {
  return (
    <div className="Layout">
      <header>
        Header
      </header>
        <main>
            <Routing />
        </main>
        <footer>
          Footer
        </footer>
    </div>
  )
}
