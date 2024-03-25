import './SearchForm.css'

export function SearchForm({ setValue }) {

    function handleSubmit(e) {
        e.preventDefault()
    } 

    return(
        <div className='search'>
        <form className='search__form' onSubmit={handleSubmit} noValidate>
            <div className='search__form-content'>
                <input onChange={(e) => setValue(e.target.value)} className='search__form-input' type='text' placeholder='Поиск' />
            </div>
        </form>
    </div>
    )
}