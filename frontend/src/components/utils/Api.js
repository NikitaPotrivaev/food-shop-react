class Api {
    constructor({ baseURL }) {
        this._baseURL = baseURL;
    }

    _checkRequest(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Что-то пошло не так: ${res.status}`)
        }
    }

    checkToken(token) {
        return fetch(`${this._baseURL}/users/me`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`
            }
        })
        .then(this._checkRequest)
    }

    getUserInfo() {
        return fetch(`${this._baseURL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(this._checkRequest)
    }

    updateUserInfo(name, email, phone) {
        return fetch(`${this._baseURL}/users/me`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${ localStorage.getItem('token') }`
            },
            body: JSON.stringify({ name, email, phone })
        })
        .then(this._checkRequest)
    }

    setUserAvatar({ avatar }) {
        return fetch(`${this._baseURL}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${ localStorage.getItem('token') }`
            },
            body: JSON.stringify({ avatar })
        })
        .then(this._checkRequest)
    }

    register(name, email, password, phone) {
        return fetch(`${this._baseURL}/signup`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password, phone })
        })
        .then(this._checkRequest)
    }

    login(email, password) {
        return fetch(`${this._baseURL}/signin`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(this._checkRequest)
        .then((data) => {
            localStorage.setItem('token', data.token)
            return data;
        })
    }
}

export const api = new Api({ baseURL: 'http://localhost:3000' });