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
import { InfoTooltip } from '../IngoTooltip/InfoTooltip';
import { Cart } from '../Cart/Cart';
import { cardInfo } from '../utils/card';

function App() {
  const [currentUser, setCurrentUser] = useState({})
  const [isImagePopup, setImagePopup] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})
  const [isEditAvatarPopup, setEditAvatarPopup] = useState(false)
  const [isSigninPopup, setSigninPopup] = useState(false)
  const [isSignupPopup, setSignupPopup] = useState(false)
  const [isLoggedIn, setIsloggedIn] = useState(false)
  const [isProfilePopup, setProfilePopup] = useState(false)
  const [isCartPopup, setCartPopup] = useState(false)
  const [status, setStatus] = useState(false)
  const [tooltip, setTooltip] = useState(false)
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [cart, setCart] = useState(cardInfo)

  const navigate = useNavigate()
  const location = useLocation()

  function closeAllPopups() {
    setEditAvatarPopup(false)
    setImagePopup(false)
    setSigninPopup(false)
    setProfilePopup(false)
    setSignupPopup(false)
    setTooltip(false)
    setCartPopup(false)
  }

  function handleCartPopup() {
    setCartPopup(true)
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

  function addToCart(card) {
    let isInArray = false
    cart.orders.forEach(el => {
      if (el.id === card.id)
        isInArray = true
    })
    if (!isInArray)
      setCart({ orders: [...cart.orders, card] })
  }

  function deleteOrder(id) {
    setCart({orders: cart.orders.filter(i => i.id !== id)})
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
    setIsLoading(true)
    api.login(password, email)
      .then(res => {
        localStorage.setItem('token', res.token)
        setIsloggedIn(true)
        navigate('/')
        setTooltip(true)
        setStatus(true)
        setMessage('Рады вас приветствовать!')
      })
      .catch(err => {console.log(`Ошибка при авторизации пользователя ${err}`)
        setTooltip(true)
        setStatus(false)
        setMessage('Имя или Email введены неправильно')        
    })
    .finally(() => setIsLoading(false))
  }

  function handleRegister(name, email, password, phone) {
    setIsLoading(true)
    api.register(name, email, password, phone)
      .then(() => {
        handleLogin(email, password)
        setTooltip(true)
        setStatus(true)
      })
      .catch(err => {console.log(`Ошибка при регистрации пользователя ${err}`)
        setTooltip(true)
        setStatus(false)
        setMessage('Пользователь уже существует')        
    })
    .finally(() => setIsLoading(false))
  }

  function handleLogout() {
    localStorage.clear()
    setIsloggedIn(false)
  }

  function handleUpdateUser(user) {
    setIsLoading(true)
    api.updateUserInfo(user.name, user.email, user.phone)
    .then(res => {
      setCurrentUser(res)
      setTooltip(true)
      setStatus(true)
      setMessage('Данные успешно обновлены')
    })
    .catch(err => {console.log(`Ошибка при обновлении пользователя ${err}`)
      setTooltip(true)
      setStatus(false)
      setMessage('Пользователь уже существует или связь с интернетом потеряна!')  
    })
    .finally(() => setIsLoading(false))
  }

  function handleUpdateAvatar(url) {
    setIsLoading(true)
    api.setUserAvatar(url)
      .then((res) => {
        setCurrentUser(res)
        closeAllPopups()
      })
      .catch(err => {console.log(`Ошибка при обновлении автара ${err}`)
        setTooltip(true)
        setStatus(false)
        setMessage('Проверьте связь с интернетом')          
    })
    .finally(() => setIsLoading(false))
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
              onCartPopupClick = { handleCartPopup }
              onAdd = { addToCart }
              orders = { cart.orders }
          />}
          />
          <Route path='/data'
            element = { <ProtectedRoute
            element = { Data }
              isLoggedIn = { isLoggedIn }
              onUpdateUser = { handleUpdateUser }
              onClose = { closeAllPopups }
              isLoading = {isLoading}
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
          isLoading = { isLoading }
        />
        <Signin 
          onLogin = { handleLogin }
          isOpen = { isSigninPopup }
          onClose = { closeAllPopups }
          isLoading = { isLoading }
        />
        <EditAvatarPopup 
          isOpen = { isEditAvatarPopup }
          onClose = { closeAllPopups }
          onUpdateAvatar = { handleUpdateAvatar }
          isLoading = { isLoading }
        />
        <ImagePopup
          isOpen = { isImagePopup }
          onClose = { closeAllPopups }
          card = { selectedCard }
        />
        <InfoTooltip 
          isOpenTooltip = { tooltip }
          status = { status }
          message = { message }
          onClose = { closeAllPopups }
        />
        <Cart
          isOpen = {isCartPopup}
          onClose = { closeAllPopups }
          orders = { cart.orders }
          onDelete = { deleteOrder }
          onSigninPopupClick = { handleSigninPopup }
          isLoggedIn = { isLoggedIn }
        />
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App