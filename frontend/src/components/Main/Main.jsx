import "./Main.css"
import { Header } from "../Header/Header";
import { Card } from "../Card/Card";
import { SearchForm } from "../SearchForm/SearchForm"
import { cardInfo } from "../utils/card";
import { Footer } from '../Footer/Footer';
import { useState } from "react";

export function Main(props) {
    const [value, setValue] = useState('')

    const filterCards = cardInfo.filter(card => {
        return card.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    })

    return(
        <>
            <main>
                <Header isLoggedIn = { props.isLoggedIn } onProfilePopupClick = {props.onProfilePopupClick}/>
                <SearchForm setValue={setValue}/>
                <ul className="card">
                    {filterCards.map((card) => (
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
            <Footer/>
        </>
    )
}