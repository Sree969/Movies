import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GetMovies from './Components/GetMovies'
import Movie from './Pages/Movie'
import Error from './Pages/Error'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<GetMovies/>}/>
      <Route path="/partmovie" element={<Movie/>}/>
      <Route path="/*" element={<Error/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App