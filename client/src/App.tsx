import { EmailConfirmationPage } from "./pages/EmailConfirmation"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SynopsisPage } from "./pages/Synopsis"
import { verifyLogin } from "./api/userManager"
import { UpdatePfp } from "./pages/Update-pfp"
import { AccountPage } from "./pages/Account"
import { AppContainer } from "./styles/App"
import { SearchPage } from "./pages/Search"
import { AnimesPage } from "./pages/Animes"
import { MangasPage } from "./pages/Mangas"
import { SigninPage } from "./pages/Signin"
import { SignupPage } from "./pages/Signup"
import { isUserLogged } from "./api/useful"
import { ListPage } from "./pages/List"
import { EditPage } from "./pages/Edit"
import { Layout } from "./pages/Layout"
import { Home } from "./pages/Home"
import { useEffect } from "react"
import { Error404 } from "./pages/Error404"

function App() {
  useEffect(() => {
    if (isUserLogged())
      verifyLogin()
  }, [])

  return (
    <AppContainer className="App">
      <BrowserRouter>
        <Routes>
          <Route path="signin" element={<SigninPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="email-confirmation" element={<EmailConfirmationPage />} />
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="animes" element={<AnimesPage />} />
            <Route path="mangas" element={<MangasPage />} />
            <Route path="account" element={<AccountPage />} />
            <Route path="anime/:id" element={<SynopsisPage />} />
            <Route path="manga/:id" element={<SynopsisPage />} />
            <Route path="list" element={<ListPage />} />
            <Route path="anime/edit/:mal_id" element={<EditPage />} />
            <Route path="manga/edit/:mal_id" element={<EditPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="update-pfp" element={<UpdatePfp />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContainer>
  )
}

export default App
