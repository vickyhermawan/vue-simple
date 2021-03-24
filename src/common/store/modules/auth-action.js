import {API} from '../../api';

export const login = async (user) => {
    const params = {
        email: user.email,
        password: user.password
    }
    const res = await API.post(`/auth/login`, params);
    if (res.data.token) {
        localStorage.setItem('user', JSON.stringify(res.data));
    }
    return res.data;
}

export const logout = () => {
    localStorage.removeItem('user');
}

export const register = async (user) => {
    const params = {
        nickname: user.nickname,
        email: user.email,
        password: user.password
    }
    const res = await API.post(`/auth/register`, params);
    return res;
}