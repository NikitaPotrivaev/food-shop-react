import './App.css'
import { Main } from '../Main/Main'
import { Profile } from '../Profile/Profile';
import { NotFound } from '../NotFound/NotFound';
import { Signup } from '../Signup/Signup';
import { Signin } from '../Signin/Signin';
import { CurrentUserContext } from '../../context/CurrentUserContext'
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [currentUser, setCurrentUser] = useState({})

  return (
    <CurrentUserContext.Provider value = { currentUser }>
      <div className='app'>
        <Routes>
          <Route path='/'
            element = {<Main />}
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
        <Route path='*'
          element = {<NotFound />}
        />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App