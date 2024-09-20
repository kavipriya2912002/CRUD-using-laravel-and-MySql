import React from 'react'

import { createRoot } from 'react-dom/client';
import { HashRouter,Routes,Route } from 'react-router-dom';
import Create from './pages/Create';
import List from './pages/List';
import Edit from './pages/Edit';


export default function App() {
  return (
    <HashRouter>
        <Routes>
            <Route path='/' element={<List/>} />
            <Route path='/create' element={<Create/>} />
            <Route path='/edit/:id' element={<Edit/>} />

        </Routes>

    </HashRouter>
  )
}


const root = createRoot(document.getElementById('app')); 
root.render(<App/>);

