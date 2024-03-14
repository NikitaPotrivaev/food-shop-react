import "./Main.css"
import california from "../../images/california-hit.jpg"
import californiaTempura from "../../images/california-tempura.jpg"
import { Header } from "../Header/Header";
import { SearchForm } from "../SearchForm/SearchForm"

export function Main() {
    return(
        <main>
            <Header />
            <SearchForm />
            <section className="card">
                <div className="card__card">
                    <img src={california} className="card__image"/>
                    <div className="card__container">
                        <p className="card__text">Калифорния хит ролл</p>
                        <p className="card__qty">6 шт.</p>
                        <div className="card__wrapper">
                            <div className="card__items">
                                <div className="card__items-minus">-</div>
                                <div className="card__items-current">1</div>
                                <div className="card__items-plus">+</div>
                            </div>
                            <div className="card__info">
                                <p className="card__info-weight">180г</p>
                                <p className="card__info-price">300 ₽</p>
                            </div>
                        </div>
                        <button className="card__button-in-cart" type="button">Добавить</button>
                    </div>
                </div>

                <div className="card__card">
                    <img src={californiaTempura} className="card__image"/>
                    <div className="card__container">
                        <p className="card__text">Калифорния темпура</p>
                        <p className="card__qty">6 шт.</p>
                        <div className="card__wrapper">
                            <div className="card__items">
                                <div className="card__items-minus">-</div>
                                <div className="card__items-current">1</div>
                                <div className="card__items-plus">+</div>
                            </div>
                            <div className="card__info">
                                <p className="card__info-weight">205г</p>
                                <p className="card__info-price">250 ₽</p>
                            </div>
                        </div>
                        <button className="card__button-in-cart" type="button">Добавить</button>
                    </div>
                </div>

                <div className="card__card">
                    <img src={californiaTempura} className="card__image"/>
                    <div className="card__container">
                        <p className="card__text">Калифорния темпура</p>
                        <p className="card__qty">6 шт.</p>
                        <div className="card__wrapper">
                            <div className="card__items">
                                <div className="card__items-minus">-</div>
                                <div className="card__items-current">1</div>
                                <div className="card__items-plus">+</div>
                            </div>
                            <div className="card__info">
                                <p className="card__info-weight">205г</p>
                                <p className="card__info-price">250 ₽</p>
                            </div>
                        </div>
                        <button className="card__button-in-cart" type="button">Добавить</button>
                    </div>
                </div>

                <div className="card__card">
                    <img src={californiaTempura} className="card__image"/>
                    <div className="card__container">
                        <p className="card__text">Калифорния темпура</p>
                        <p className="card__qty">6 шт.</p>
                        <div className="card__wrapper">
                            <div className="card__items">
                                <div className="card__items-minus">-</div>
                                <div className="card__items-current">1</div>
                                <div className="card__items-plus">+</div>
                            </div>
                            <div className="card__info">
                                <p className="card__info-weight">205г</p>
                                <p className="card__info-price">250 ₽</p>
                            </div>
                        </div>
                        <button className="card__button-in-cart" type="button">Добавить</button>
                    </div>
                </div>
            </section>
        </main>
    )
}