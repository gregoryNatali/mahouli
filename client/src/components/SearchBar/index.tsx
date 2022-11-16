import { SearchBarContainer, SearchBarInput } from "./styles";
import { useNavigate } from "react-router";
import { SyntheticEvent } from "react";
import { Search } from "react-feather";

export function SearchBar() {
  const redirect = useNavigate()

  const handleSearch = (e: SyntheticEvent) => {
    e.preventDefault()

    const query = document.querySelector<HTMLInputElement>('#LayoutSearchBar')!

    redirect('/search', {
      state: query.value
    })

    query.value = ''
    return
  }

  return (
    <SearchBarContainer onSubmit={handleSearch}>
      <SearchBarInput id="LayoutSearchBar" autoComplete="off" />
      <button type="submit"><Search stroke="#FFF" /></button>
    </SearchBarContainer>
  )
}