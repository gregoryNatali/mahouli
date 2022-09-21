import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AppContainer } from "./styles/App"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import { AnimesPage } from "./pages/Animes"
import { SignupPage } from "./pages/Signup"
import { MangasPage } from "./pages/Mangas"
import { AboutPage } from "./pages/About"
import { AccountPage } from "./pages/Account"
import { SigninPage } from "./pages/Signin"
import { SynapsisPage } from "./pages/Synopsis"

function App() {
  return (
    <AppContainer className="App">
      <BrowserRouter>
        <Routes>
          <Route path="signin" element={<SigninPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="animes" element={<AnimesPage />} />
            <Route path="mangas" element={<MangasPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="account" element={<AccountPage />} />
          </Route>
          <Route path="anime/:id" element={<SynapsisPage />} />
          <Route path="manga/:id" element={<SynapsisPage />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  )
}

export default App
