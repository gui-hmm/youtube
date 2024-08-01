import { createContext, useEffect, useState } from "react";
import api from '../api'
import jwt from 'jsonwebtoken';

export const UserContext = createContext({} as any);

export const UserStorage = ({ children }: any) => {
    const [login, setLogin] = useState(false);
    const [user, setUser] =useState({});
    const [token, setToken] =useState(localStorage.getItem('token') as string);

    const getUser = (token: string) => {
        api.get('/user/get-user', {headers:{Authorization: token}}).then(({ data }) => {
            setUser(data.user);
            setLogin(true);
        }).catch((error) => {
            console.log('Usuário não autenticado', error)
        })
    }

    useEffect(() => {
        if (token) {
            getUser(token);
        }
    },[token]);

    const logOut = () => {
        localStorage.removeItem('token');
        setLogin(false);
        setUser({});
    }

    const handleLogin = (email: string, password: string): Promise<boolean> => {
        return api.post('/user/sign-in', { email, password })
            .then(({ data }) => {
                setLogin(true);
                localStorage.setItem('token', data.token);
                setToken(data.token);
                getUser(data.token);
                return true;
            })
            .catch((error) => {
                console.log('Não foi possível fazer o login', error);
                return false;
            });
    };

    const handleCadastro = (name: string, email: string, password: string): Promise<boolean> => {
        return api.post('/user/sign-up', { name, email, password })
            .then(({ data }) => {
                setLogin(true);
                localStorage.setItem('token', data.token);
                setToken(data.token);
                getUser(data.token);
                return true;
            })
            .catch((error) => {
                console.log('Não foi possível fazer o cadastro', error);
                return false;
            });
    };

    const getUserIdFromToken = (token: string) => {
        try {
            const decoded: any = jwt.verify(token, process.env.SECRET as string);
            return decoded.user_id;
        } catch (error) {
            console.error('Erro ao decodificar o token', error);
        }
    };
    
    const handleCadastroVideo = (title: string, channel: string, description: string, views: string): Promise<boolean> => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.log('Token não encontrado');
            return Promise.resolve(false);
        }
            const user_id = getUserIdFromToken(token);
    
        if (!user_id) {
            console.log('User ID não encontrado no token');
            return Promise.resolve(false);
        }

        const videoData = { title, channel, description, views, user_id };

        return api.post('/videos/create-video', videoData)
            .then(({ data }) => {
                console.log('Vídeo cadastrado com sucesso', data);
                return true;
            })
            .catch((error) => {
                console.log('Não foi possível fazer o cadastro', error);
                return false;
            });
    };



    return(
        <UserContext.Provider value={{
            login,
            user,
            handleLogin,
            logOut,
            handleCadastro,
            handleCadastroVideo
        }}>
            {children}
        </UserContext.Provider>
    )
}