import { Link } from "react-router-dom";
import { QuoteBarContainer, QuoteImageContainer, QuoteTextContainer } from "./styles";

export function QuoteBar() {

  return (
    <QuoteBarContainer>
        <QuoteTextContainer>
          <h1>"Yare Yare Daze"</h1>
          <Link to={'/character/{nomedoboneco}'}><h2>-Kujo Jotaro</h2></Link>
        </QuoteTextContainer>
        <QuoteImageContainer>
          <img src="http://pm1.narvii.com/6710/930e2a9e7cef0a653b36d5a2e9eac1321ba9ed8e_00.jpg" alt="" />
          <div></div>
        </QuoteImageContainer>
    </QuoteBarContainer>
  )
}