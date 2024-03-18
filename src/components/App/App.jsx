import './App.css'
import { Main } from '../Main/Main'
import { Profile } from '../Profile/Profile';
import { NotFound } from '../NotFound/NotFound';
import { Signin } from '../Signin/Signin';
import { Signup } from '../Signup/Sinup';
import { Data } from '../Data/Data';
import { CurrentUserContext } from '../../context/CurrentUserContext'
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ImagePopup } from '../ImagePopup/ImagePopup';

function App() {
  const [currentUser, setCurrentUser] = useState({})
  const [isImagePopup, setImagePopup] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})

  function closeAllPopups() {
    setImagePopup(false)
  }

  function handleCardClick(card) {
    setImagePopup(true)
    setSelectedCard({ name: card.name, link: card.link })
  }

  return (
    <CurrentUserContext.Provider value = { currentUser }>
      <div className='app'>
        <Routes>
        <Route path='/'
            element = { <Main 
            onCardClick = { handleCardClick } />}
          />
          <Route path='/profile'
            element = {<Profile />}
          />
          <Route path='/signup'
            element = {<Signup />}
          />
          <Route path='/signin'
            element = {<Signin />}
          />
          <Route path='/data'
            element = {<Data/>}
          />
          <Route path='*'
            element = {<NotFound />}
          />
        </Routes>
        <ImagePopup
          isOpen = { isImagePopup }
          onClose = { closeAllPopups }
          card = { selectedCard }
        />
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App