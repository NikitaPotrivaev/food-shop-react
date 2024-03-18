import "./Main.css"
import { Header } from "../Header/Header";
import { Card } from "../Card/Card";
import { SearchForm } from "../SearchForm/SearchForm"
import { cardInfo } from "../utils/card";

export function Main(props) {
    return(
        <main>
            <Header />
            <SearchForm />
            <ul className="card">
                {cardInfo.map((card) => (
                    <Card
                        key = {card.id}
                        card = {card}
                        link = {card.link}
                        name = {card.name}
                        qty = {card.qty}
                        weight = {card.weight}
                        price = {card.price}
                        onCardClick = {props.onCardClick}
                    />
                ))}
            </ul>
        </main>
    )
}