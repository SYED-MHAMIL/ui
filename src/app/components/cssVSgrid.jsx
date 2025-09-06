import React from 'react'

const CssVSgrid= () => {
  return (
    <div className='grid bodyf'>
      <header className='bg-blue-500 '>
        <ul className='flex items-center gap-2'>
            <li>home</li>
            <li>about</li>
            <li>service</li>
        </ul>
      </header>
      <aside className='bg-gray-400'>
        <p> this is side</p>
      </aside>
      <main className='bg-amber-800'>
        <h1> the main content</h1>
        <p></p>
      </main>
      <footer>
        <ul className='bg-blue-400'>
            <li>hellodasd</li>
            <li>contact</li>
            <li>emain :syedmasil a@.com</li>
        </ul>
      </footer>
    </div>
  )
}

export default CssVSgrid
