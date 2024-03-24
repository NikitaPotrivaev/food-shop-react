import './SearchForm.css'
import searchImg from "../../images/find.svg"

export function SearchForm({ setValue }) {

    return(
        <div className='search'>
        <form className='search__form' noValidate>
            <div className='search__form-content'>
                <input onChange={(e) => setValue(e.target.value)} className='search__form-input' type='text' placeholder='Поиск' />
            </div>
            <button className='search__form-button' type='submit'>
                <img src={searchImg} className='search__img' alt='Кнопка поиска'/>
            </button>
        </form>
    </div>
    )
}