import Header from "../Header/Header";
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import useCustomToast from "../useToast/useToast";
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setEmail } from '../../redux/step1Slice'
import { useSelector } from "react-redux";
import { useEffect } from "react";
export default function Login() {

    const users = useSelector((store) => store.users.users)

    const { showToast, ToastComponent } = useCustomToast();
    const navigate = useNavigate();

    const loginpage = () => {
        if (!users) {
            navigate("/login")
        }
        else {
            navigate('/browse')
        }
    }
    const [email, setEmailState] = useState('');
    const dispatch = useDispatch();
    return (
        <>
            <div className="w-full">
                <Header backgroundstyle="linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))" buttonname='SignIn' onClick={loginpage} />
                <div className="absolute top-0 left-0 w-full h-full"
                    style={{
                        background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7))",
                        zIndex: 1,
                    }}
                >
                </div>
                <div className="absolute top-0 left-0 w-full h-full z-0">
                    <img
                        className="w-full h-full object-cover"
                        src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg"
                        alt="banner"
                    />
                </div>
                <div className="flex flex-col my-36 h-[60%] mx-auto left-0 right-0 items-center justify-center absolute z-10">
                    <div>
                        <h1 className="text-white text-7xl font-extrabold">Unlimited movies,</h1>
                    </div>
                    <div>
                        <h1 className="text-white text-7xl font-extrabold">TV shows, and more</h1>
                    </div>
                    <div>
                        <p className="text-white text-xl font-medium mt-6">Starts at Rs 250. Cancel anytime.</p>
                    </div>
                    <div>
                        <p className="text-white text-lg font-base mt-8">Ready to watch? Enter your email to create or restart your membership.</p>
                    </div>

                    {/* Box for Form */}
                    <div className="flex mt-2 w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%]">
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '100%' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="email"
                                label="Enter Email"
                                variant="filled"
                                value={email}
                                onChange={(event) => {
                                    setEmailState(event.target.value,
                                        dispatch(setEmail(event.target.value))

                                    )
                                }}
                                sx={{
                                    input: { color: 'white' },
                                    '& .MuiFilledInput-root': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        border: '2px solid red',
                                        fontSize: '20px',
                                    },
                                    '& .MuiFilledInput-root:hover': {
                                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                    },
                                    '& .MuiFormLabel-root': {
                                        color: 'white',
                                    },
                                    '& .MuiFilledInput-root:before': {
                                        borderColor: 'red',
                                    },
                                }}
                            />

                        </Box>
                        <button
                            className="bg-[#E50914]  text-xl px-5 py-0 text-white  ml-3"
                            onClick={() => {
                                navigate('/finishsetting');
                            }}
                            style={{
                                borderRadius: "0.4rem", width: '12rem', height: '80%', position: "relative", top: '0.4rem'
                            }}
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
            <ToastComponent />
        </>
        
    );
}
