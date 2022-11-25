import { LoadingContainer } from "./styles";
import { OneEightyRingWithBg } from 'react-svg-spinners'

export function Loading() {
  return (
    <LoadingContainer>
      <h1>Loading...</h1>
      <OneEightyRingWithBg
        color="#fff"
        width='50px'
        height='50px'
      />
    </LoadingContainer>
  )
}