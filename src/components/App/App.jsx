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
import { EditAvatarPopup } from '../EditAvatarPopup/EditAvatarPopup';

function App() {
  const [currentUser, setCurrentUser] = useState({})
  const [isImagePopup, setImagePopup] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})
  const [isEditAvatarPopup, setEditAvatarPopup] = useState(false)

  function closeAllPopups() {
    setEditAvatarPopup(false)
    setImagePopup(false)
  }

  function handleEditAvatarClick() {
    setEditAvatarPopup(true)
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
            onCardClick = { handleCardClick }
          />}
          />
          <Route path='/profile'
            element = {<Profile 
              onEditAvatar = { handleEditAvatarClick }
          />}
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
        <EditAvatarPopup 
          isOpen = { isEditAvatarPopup }
          onClose = { closeAllPopups }
        />
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