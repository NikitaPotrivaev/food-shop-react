import "./Main.css"
import { Header } from "../Header/Header";
import { Card } from "../Card/Card";
import { SearchForm } from "../SearchForm/SearchForm"
import { Footer } from '../Footer/Footer';
import { useState } from "react";

export function Main(props) {
    const [value, setValue] = useState('')

    const filterCards = props.items.filter(card => {
        return card.name.toLowerCase().includes(value.toLowerCase())
    })

    return(
        <>
            <main className="main">
                <Header total = { props.total } isLoggedIn = { props.isLoggedIn } onProfilePopupClick = {props.onProfilePopupClick} onCartPopupClick = {props.onCartPopupClick}/>
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
                            count = {card.count}
                            priceInitial = {card.priceInitial}
                            onCardClick = {props.onCardClick}
                            onAdd = {props.onAdd}
                            increase = {props.increase}
                            decrease = {props.decrease}
                        />
                    ))}
                </ul>
            </main>
            <Footer/>
        </>
    )
}