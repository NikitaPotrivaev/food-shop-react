import './App.css'
import { Main } from '../Main/Main'
import { Profile } from '../Profile/Profile';
import { NotFound } from '../NotFound/NotFound';
import { Signin } from '../Signin/Signin';
import { Signup } from '../Signup/Signup';
import { Data } from '../Data/Data';
import { CurrentUserContext } from '../../context/CurrentUserContext'
import { useEffect, useState } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';
import { ImagePopup } from '../ImagePopup/ImagePopup';
import { EditAvatarPopup } from '../EditAvatarPopup/EditAvatarPopup';
import { api } from '../utils/Api';

function App() {
  const [currentUser, setCurrentUser] = useState({})
  const [isImagePopup, setImagePopup] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})
  const [isEditAvatarPopup, setEditAvatarPopup] = useState(false)
  const [isLoggedIn, setIsloggedIn] = useState(false)
  const [name, setName] = useState('')

  const navigate = useNavigate()

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

  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([ api.getUserInfo() ])
      .then(([userInfo]) => {
        setCurrentUser(userInfo)
      })
      .catch(err => console.log(`Сервер не нашёл данные, ${err}`))
    }
  }, [isLoggedIn])

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      api.checkToken(token)
      .then((res) => {
        setName(res.name)
        setIsloggedIn(true)
        navigate(location)
      })
    }
  }, [])

  function handleLogin(password, email) {
    api.login(password, email)
      .then(res => {
        localStorage.setItem('token', res.token)
        setName(res.name)
        setIsloggedIn(true)
        navigate('/')
      })
      .catch(err => {console.log(`Ошибка при авторизации пользователя ${err}`)})
  }

  function handleRegister(name, email, password, phone) {
    api.register(name, email, password, phone)
      .then(() => {
      handleLogin(email, password)
      })
      .catch(err => {console.log(`Ошибка при регистрации пользователя ${err}`)})
  }

  function handleLogout() {
    localStorage.clear()
    setIsloggedIn(false)
  }

  function handleupdateUser(user) {
    api.updateUserInfo(user.name, user.email, user.phone)
    .then(res => {
      setCurrentUser(res)
    })
    .catch(err => {console.log(`Ошибка при регистрации пользователя ${err}`)})
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