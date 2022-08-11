import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AppContainer } from "./styles/App"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import { AnimesPage } from "./pages/Animes"

function App() {
  return (
    <AppContainer className="App">
      <BrowserRouter>
        <Routes>
          <Route path="login" />
          <Route path="signin" />
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="animes" element={<AnimesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContainer>
  )
}

export default App
