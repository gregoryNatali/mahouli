import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SynopsisPage } from "./pages/Synopsis"
import { AccountPage } from "./pages/Account"
import { AppContainer } from "./styles/App"
import { AnimesPage } from "./pages/Animes"
import { MangasPage } from "./pages/Mangas"
import { SigninPage } from "./pages/Signin"
import { SignupPage } from "./pages/Signup"
import { AboutPage } from "./pages/About"
import { Layout } from "./pages/Layout"
import { Home } from "./pages/Home"

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
          <Route path="anime/:id" element={<SynopsisPage />} />
          <Route path="manga/:id" element={<SynopsisPage />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  )
}

export default App
