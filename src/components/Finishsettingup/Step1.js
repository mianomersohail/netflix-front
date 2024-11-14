import Header from "../Header/Header"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

export default function Setp1() {
    const navigate = useNavigate();
    const email = useSelector((state) => state.user.email);
    const [emails, setEmails] = useState('');
    
    return (
        <>
            <Header buttonname='SignIn' onClick={() => { navigate("/login") }} />
            <div className="flex items-center justify-center mt-[8rem]">
                <form className="w-full sm:w-1/3 p-4 sm:p-8 h-auto" >
                    <div>
                        <div className="flex items-start justify-start">
                            <p>STEP 1 OF 3</p>
                        </div>
                        <div className="flex items-center justify-start">
                            <h4 className="text-2xl sm:text-3xl font-bold">Create a password to start your membership</h4>
                        </div>
                        <div className="flex items-center justify-start">
                            <p className="lg:w-60">
                                Just a few more steps and you're done! We hate paperwork, too.
                            </p>
                        </div>
                        <div className="flex items-center justify-start">
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { width: '100%' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    id="email"
                                    label="Email"
                                    variant="filled"
                                    value={email}
                                    onChange={setEmails}
                                    sx={{
                                        input: { color: 'white' },
                                        '& .MuiFilledInput-root': {
                                            border: '2px solid white',
                                            fontSize: '20px',
                                        },
                                        '& .MuiFormLabel-root': {
                                            color: 'white'
                                        }
                                    }}
                                    className="w-[100%] sm:w-3/4"
                                />
                            </Box>
                        </div>
                        <div className="flex items-center justify-start mt-4">
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { width: '100%' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    id="password"
                                    type="password"
                                    label="Add a Password"
                                    variant="filled"
                                    sx={{
                                        input: { color: 'white' },
                                        '& .MuiFilledInput-root': {
                                            border: '2px solid white',
                                            fontSize: '20px',
                                            width:'100%'
                                        },
                                        '& .MuiFormLabel-root': {
                                            color: 'white'
                                        }
                                    }}
                                    className="w-[100%] "
                                />
                            </Box>
                        </div>
                        <div className="flex mt-2">
                            <input type="checkbox" />
                            <p>Please do not email me Netflix special offers.</p>
                        </div>
                        <div className=" mt-4 ">
                            <button
                                onClick={() => { navigate('/step2finish') }}
                                className="w-full sm:w-3/4 px-4 py-3 font-bold text-white bg-red-600"
                                style={{ marginTop: '1rem' }}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
