import { getCacheList, getLastList, getList, getOtherList, setLastList } from "../../api/listManager";
import { LinksContainer, ListContent, ListDiv, ListEmptyError, ListItem, StyledButton } from "./styles";
import { AddToListButton } from "../../components/AddToListButton";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function ListPage() {
  const [showingList, setShowingList] = useState<'anime' | 'manga'>(getLastList())
  const [shouldUpdate, setShouldUpdate] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const [list, setList] = useState<any[]>([])
  const { id } = useParams() as { id: string }

  useEffect(() => {
    if (!id) {
      getList(setList, setLoading, showingList ? showingList : 'anime')
      setLastList(showingList)
      return
    }

    getOtherList(showingList, parseInt(id)).then((data) => {
      setLoading(false)
      setList(data)
    })
  }, [showingList])

  useEffect(() => {
    if (id)
      return

    setList(getCacheList(showingList))
    setShouldUpdate(false)
  }, [shouldUpdate])

  const parseDate = (date: string) => {
    const newDate = new Date(date)
    return newDate.toUTCString().slice(0, 16)
  }

  if (loading)
    return <p>Loading...</p>

  return (
    <ListDiv>
      <div>
        <StyledButton
          onClick={() => setShowingList('anime')}
          className={showingList === 'anime' ? 'active' : ''}
        >Animes</StyledButton>
        <StyledButton
          onClick={() => setShowingList('manga')}
          className={showingList === 'manga' ? 'active' : ''}
        >Mangás</StyledButton>
      </div>
      <ListContent>
        <ListItem id="legend">
          <div>
            Posição
          </div>
          <p>Nome do Item</p>
          <div id="date">
            <p>Data de Inserção</p>
          </div>
        </ListItem>

        {list.map((val, idx) => <ListItem key={idx} id={`mal_id${val.anime.mal_id}`}>
          <div>
            <p>{idx + 1}</p>
            <img src={val.anime.img_url} alt="" />
          </div>
          <p><Link to={`/${showingList}/${val.anime.mal_id}`}>{val.anime.name}</Link></p>
          <div>
            <p>{parseDate(val.start_date)}</p>
            <AddToListButton
              entry={val.anime}
              isAnime={showingList}
              deleteButton={true}
              seeButton={false}
              setShouldUpdate={setShouldUpdate} />
          </div>
        </ListItem>)}

        {!list.length && !loading ?
          <ListEmptyError>
            <p>Sua lista está vazia :(</p>
            <p>Procure animes e mangás novos aqui:</p>
            <LinksContainer>
              <Link to={'/animes'}>Animes</Link>
              <Link to={'/mangas'}>Mangás</Link>
            </LinksContainer>
          </ListEmptyError> : <></>}
      </ListContent>
    </ListDiv>
  )
}