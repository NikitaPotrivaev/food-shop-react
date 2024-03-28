import "./Main.css"
import { Header } from "../Header/Header";
import { Card } from "../Card/Card";
import { SearchForm } from "../SearchForm/SearchForm"
import { cardInfo } from "../utils/card";
import { Footer } from '../Footer/Footer';
import { useState } from "react";

export function Main(props) {
    const [value, setValue] = useState('')

    const filterCards = cardInfo.items.filter(card => {
        return card.name.toLowerCase().includes(value.toLowerCase())
    })

    return(
        <>
            <main className="main">
                <Header orders = { props.orders } isLoggedIn = { props.isLoggedIn } onProfilePopupClick = {props.onProfilePopupClick} onCartPopupClick = {props.onCartPopupClick}/>
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
                            onAdd = {props.onAdd}
                            priceInitial = {card.priceInitial}
                            weightInitial = {card.weightInitial}
                            qtyInitial = {card.qtyInitial}
                        />
                    ))}
                </ul>
            </main>
            <Footer/>
        </>
    )
}