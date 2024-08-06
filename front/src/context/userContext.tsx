import { createContext, useEffect, useState } from "react";
import api from '../api'

export const UserContext = createContext({} as any);

export const UserStorage = ({ children }: any) => {
    const [login, setLogin] = useState(false);
    const [user, setUser] =useState({});
    const [token, setToken] =useState(localStorage.getItem('token') as string);
    const [videos, setVideos] = useState([]);
    const [search, setSearch] = useState([]);

    const getUser = (token: string) => {
        api.get('/user/get-user', {headers:{Authorization: token}}).then(({ data }) => {
            setUser(data.user);
            setLogin(true);
        }).catch((error) => {
            console.log('Usuário não autenticado', error)
        })
    }

    const getVideos = () => {
        api.get('/videos/').then(({ data }) => {
            setVideos(data.videos);
        }).catch((error) => {
            console.log('Não foi possível encontrar os vídeos', error);
        });
    };

    const getSearch = (searchTerm: string) => {
        api.get('/videos/search', { params: { search: searchTerm } }).then(({ data }) => {
            setSearch(data.videos);
        }).catch((error) => {
            console.log('Não foi possível encontrar os vídeos', error);
        });
    };

    useEffect(() => {
        if (token) {
            getUser(token); 
        }
        getVideos();
    }, [token]);

    const logOut = () => {
        localStorage.removeItem('token');
        setLogin(false);
        setUser({});
    }
    
    const handleLogin = (email: string, password: string): Promise<boolean> => {
        return api.post('/user/sign-in', { email, password })
            .then(({ data }) => {
                const { token, user_id } = data;
                localStorage.setItem('token', token);
                localStorage.setItem('user_id', user_id);
                console.log('Token:', token);
                console.log('User ID:', user_id);
                setLogin(true);
                setToken(token);
                getUser(token);
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

    const handleCadastroVideo = (title: string, channel: string, description: string, views: string, url: string): Promise<boolean> => {
        const user_id = localStorage.getItem('user_id');
        console.log('User ID:', user_id);
        if (!user_id) { 
            console.log('User ID não encontrado');
            return Promise.resolve(false);
        }
    
        const videoData = { user_id, title, channel, description, views, url };
    
        return api.post('/videos/create-video', videoData)
            .then(({ data }) => {
                console.log('Vídeo cadastrado com sucesso', data);
                return true;
            })
            .catch((error) => {
                console.log('Não foi possível enviar o video', error);
                return false;
            });
    };

    const handleSearch = (searchTerm: string): Promise<boolean> => {
        return api.get('/videos/search', { 
            params: { search: searchTerm }
        })
        .then(({ data }) => {
            console.log('Vídeo buscado com sucesso', data);
            setSearch(data.videos);
            return true;
        })
        .catch((error) => {
            console.log('Não foi possível encontrar o video', error);
            return false;
        });;
    } 

    return(
        <UserContext.Provider value={{
            login,
            user,
            videos,
            search,
            handleLogin,
            logOut,
            handleCadastro,
            handleCadastroVideo,
            handleSearch,
            getVideos,
            getSearch
        }}>
            {children}
        </UserContext.Provider>
    )
}