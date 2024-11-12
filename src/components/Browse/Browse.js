import { useEffect } from 'react';
import Header from '../Header/Header';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/userSlice'
import { getNowPlayingMovies } from '../../redux/MovieSlice';
import useCustomToast from '../useToast/useToast'
import useApi from '../FetchHook/FetchHook'
import url from '../../utils/constant'
import MainContainer from '../maincontainer/Maincontainer';
import MovieContainer from '../MovieContainer/MovieContainer';
import axios from 'axios';
import { options } from '../../utils/constant';
import { IoMdLogOut } from 'react-icons/io';
export default function Browser() {
    const { showToast, ToastComponent } = useCustomToast();

    const { loading, error, data, get } = useApi(url)
    const navigate = useNavigate();
    const user = useSelector(state => state.users.users);

    const dispatch = useDispatch()
    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user]);

    const logout = async () => {
        const headers = {
            'Content-Type': "application/json",
            withCredentials: true
        }
        try {
            const response = await get('/logout', headers);
            if (response.success == true) {
                showToast('success', "Logout Successfully")

                dispatch(setUser(null))
                navigate("/login")
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || error.message || "An unexpected error occurred";
            showToast('error', errorMessage);
        }

    }
    const nowPlaymovi = async () => {
        try {
            const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing', options)
            console.log(response.data.results)
            dispatch(getNowPlayingMovies(response.data.results))

        } catch (error) {
            const errorMessage = error.response?.data?.message || error.message || "An unexpected error occurred";
            showToast('error', errorMessage);
        }
    }
    nowPlaymovi()

    return (
        <>
            {loading && (<div>loading...</div>)}
            <Header buttonname='signOut' onClick={logout} />

            <MovieContainer />
            <MainContainer />
        </>

    );
}
