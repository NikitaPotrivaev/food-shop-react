import './App.css'
import { Main } from '../Main/Main'
import { NotFound } from '../NotFound/NotFound';
import { Signin } from '../Signin/Signin';
import { Signup } from '../Signup/Signup';
import { Data } from '../Data/Data';
import { CurrentUserContext } from '../../context/CurrentUserContext'
import { useEffect, useState } from 'react';
import { useNavigate, Route, Routes, useLocation } from 'react-router-dom';
import { ImagePopup } from '../ImagePopup/ImagePopup';
import { EditAvatarPopup } from '../EditAvatarPopup/EditAvatarPopup';
import { api } from '../utils/Api';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { ProfilePopup } from '../ProfilePopup/ProfilePopup';

function App() {
  const [currentUser, setCurrentUser] = useState({})
  const [isImagePopup, setImagePopup] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})
  const [isEditAvatarPopup, setEditAvatarPopup] = useState(false)
  const [isSigninPopup, setSigninPopup] = useState(false)
  const [isSignupPopup, setSignupPopup] = useState(false)
  const [isLoggedIn, setIsloggedIn] = useState(false)
  const [isProfilePopup, setProfilePopup] = useState(false)
  const [status, setStatus] = useState(false)
  const [tooltip, setTooltip] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  function closeAllPopups() {
    setEditAvatarPopup(false)
    setImagePopup(false)
    setSigninPopup(false)
    setProfilePopup(false)
    setSignupPopup(false)
    setTooltip(false)
  }

  function handleProfilePopup() {
    setProfilePopup(true)
  }

  function handleSigninPopup() {
    setSigninPopup(true)
  }

  function handleSignupPopup() {
    setSignupPopup(true)
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
    const timer = setTimeout(() => setTooltip(false), 2000)
    return () => clearTimeout(timer)
  })

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      api.checkToken(token)
      .then(() => {
        setIsloggedIn(true)
        navigate(location)
      })
    }
  }, [])

  function handleLogin(password, email) {
    api.login(password, email)
      .then(res => {
        localStorage.setItem('token', res.token)
        setIsloggedIn(true)
        navigate('/')
      })
      .catch(err => {console.log(`Ошибка при авторизации пользователя ${err}`)
        setTooltip(true)
        setStatus(false)           
    })  
  }

  function handleRegister(name, email, password, phone) {
    api.register(name, email, password, phone)
      .then(() => {
        handleLogin(email, password)
      })
      .catch(err => {console.log(`Ошибка при регистрации пользователя ${err}`)
        setTooltip(true)
        setStatus(false)            
    })
  }

  function handleLogout() {
    localStorage.clear()
    setIsloggedIn(false)
  }

  function handleUpdateUser(user) {
    api.updateUserInfo(user.name, user.email, user.phone)
    .then(res => {
      setCurrentUser(res)
      setTooltip(true)
      setStatus(true)
    })
    .catch(err => {console.log(`Ошибка при обновлении пользователя ${err}`)
      setTooltip(true)
      setStatus(false)            
    })
  }

  function handleUpdateAvatar(url) {
    api.setUserAvatar(url)
      .then((res) => {
        setCurrentUser(res)
        closeAllPopups()
      })
      .catch(err => {console.log(`Ошибка при обновлении автара ${err}`)
        setTooltip(true)
        setStatus(false)            
    })
  }

  return (
    <CurrentUserContext.Provider value = { currentUser }>
      <div className='app'>
        <Routes>
          <Route path='/'
            element = { <Main 
              onCardClick = { handleCardClick }
              isLoggedIn = { isLoggedIn }
              onProfilePopupClick = { handleProfilePopup }
          />}
          />
          <Route path='/data'
            element = { <ProtectedRoute
            element = { Data }
              isLoggedIn = { isLoggedIn }
              onUpdateUser = { handleUpdateUser }
              status = { status }
              isOpen = { tooltip }
              onClose = { closeAllPopups }
            />}
          />
          <Route path='*'
            element = {<NotFound />}
          />
        </Routes>
        <ProfilePopup
          isLoggedIn = { isLoggedIn }
          isOpen = { isProfilePopup }
          onClose = { closeAllPopups }
          onSigninPopupClick = { handleSigninPopup }
          onSignupPopupClick = { handleSignupPopup }
          onLogout = { handleLogout }
          onEditAvatar = { handleEditAvatarClick }
        />
        <Signup
          onRegister = { handleRegister }
          isOpen = { isSignupPopup }
          onClose = { closeAllPopups }
        />
        <Signin 
          onLogin = { handleLogin }
          isOpen = { isSigninPopup }
          onClose = { closeAllPopups }
        />
        <EditAvatarPopup 
          isOpen = { isEditAvatarPopup }
          onClose = { closeAllPopups }
          onUpdateAvatar = { handleUpdateAvatar }
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