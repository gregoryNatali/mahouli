import { EditPageDiv, FavButton, InfoDiv, InputDiv, ProgressDiv, SaveButton, UnfavButton } from "./styles";
import { checkInListMalID, editList, setLastList } from "../../api/listManager";
import { useNavigate, useParams } from "react-router";
import { Loading } from "../../components/Loading";
import { Minus, Plus, Star } from "react-feather";
import { EntryList } from "../../types/Database";
import { isUserLogged } from "../../api/useful";
import { useEffect, useState } from "react";

export function EditPage() {
  const [info, setInfo] = useState<EntryList>()
  const [progress, setProgress] = useState<number>()
  const [score, setScore] = useState<number>()
  const [startDate, setStartDate] = useState<Date>()
  const [finishDate, setFinishDate] = useState<Date | null>()
  const [fav, setFav] = useState<boolean>(false)

  const { mal_id } = useParams()
  const redirect = useNavigate()

  useEffect(() => {
    setLastList(location.pathname.split('/')[1] as 'anime' | 'manga')
    if (!mal_id || !isUserLogged()) {
      redirect('/list')
      return
    }
    const result = checkInListMalID(
      parseInt(mal_id),
      location.pathname.split('/')[1] as 'anime' | 'manga'
    )

    if (!result) {
      redirect('/list')
      return
    }

    setInfo(result)
    setProgress(result.progress)
    setScore(result.score)
    setStartDate(result.start_date ? new Date(result.start_date) : new Date())
    setFinishDate(result.finish_date ? new Date(result.finish_date) : new Date())
    setFav(result.is_favorite!)
  }, [])

  const handleSave = async () => {
    const success = await editList({
      finish_date: progress === info?.anime.total_episodes ? finishDate?.toISOString().slice(0, 10) : undefined,
      score: score!,
      progress: progress,
      start_date: startDate?.toISOString().slice(0, 10),
      is_favorite: fav,
      anime: info?.anime!
    }, info?.is_anime ? 'anime' : 'manga')

    if (success) {
      redirect('/list')
      return
    }
  }

  if (!info)
    return <Loading />

  return (
    <EditPageDiv>
      <div className="main">
        <h3>Editar item da lista</h3>
        <InfoDiv>
          <img src={info.anime.img_url} alt="" />
          <span>{info.anime.name}</span>
        </InfoDiv>
        <ProgressDiv>
          Progresso:
          <button
            className={progress! <= 0 ? 'disabled' : ''}
            onClick={() => setProgress(progress! <= 0 ? 0 : progress! - 1)}
          ><Minus /></button>
          <span>{progress}</span>
          <button
            className={progress! >= info?.anime.total_episodes! ? 'disabled' : ''}
            onClick={() =>
              setProgress(progress! >= info?.anime.total_episodes! ? progress : progress! + 1)}
          ><Plus /></button>
          /{info.anime.total_episodes}</ProgressDiv>
        <InputDiv>
          <span>Pontuação:</span>
          <select id="scoreSelect" defaultValue={score}>
            {[undefined, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((val, idx) =>
              <option
                key={idx}
                value={val}
                onClick={() => setScore(val)}
              >{val}</option>
            )}
          </select>
        </InputDiv>
        <InputDiv>
          <span>Data de início:</span>
          <input
            required
            id="start-date"
            type="date" defaultValue={startDate?.toISOString().slice(0, 10)}
            onChange={() =>
              setStartDate(new Date(document.querySelector<HTMLInputElement>('#start-date')!.value))
            }
          />
        </InputDiv>
        <InputDiv>
          <span>Data de término:</span>
          {progress === info.anime.total_episodes ?
            <input
              required
              id="finish-date"
              type="date" defaultValue={finishDate?.toISOString().slice(0, 10)}
              onChange={() =>
                setFinishDate(new Date(document.querySelector<HTMLInputElement>('#finish-date')!.value))
              }
            ></input>
            : 'Não Terminado'}
        </InputDiv>
        <InputDiv>
          {fav ?
            <UnfavButton onClick={() => setFav(!fav)}>Desfavoritar</UnfavButton>
            : <FavButton onClick={() => setFav(!fav)}><Star /> Favoritar</FavButton>
          }
        </InputDiv>
      </div>
      <SaveButton onClick={handleSave}>Salvar alterações</SaveButton>
    </EditPageDiv>
  )
}