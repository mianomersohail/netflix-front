import Header from "../Header/Header"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
export default function Setp1() {
    const navigate=useNavigate()
    const email = useSelector((state) => state.user.email);
    const [emails,setEmails]=useState('')
    return (
        <>
            <Header buttonname='SignIn' onClick={()=>{navigate("/login")}}/>
            <div className="flex items-center justify-center">

                <form className='flex items-center justify-center' style={{ border: '', height: '100vh', width: '30%', position: 'relative', zIndex: 1 }}>
                    <div>

                        <div className='flex items-start justify-start'>
                            <p>STEP 1 OF 3</p>

                        </div>
                        <div className='flex items-center justify-start'>
                            <h4 style={{ fontSize: "32px", fontWeight: "bold" }}>Create a password to start your membership</h4>

                        </div>
                        <div className='flex items-center justify-start'>
                            <p style={{ width: '15rem' }}>Just a few more steps and you're done!
                                We hate paperwork, too.</p>
                        </div>
                        <div className='flex items-center justify-start '>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { width: '150%' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    id="email"
                                    label=" Email"
                                    variant="filled"
                                    value={email}
                                    onChange={setEmails}
                                    sx={{
                                        input: { color: 'black', width: '100%' },
                                        '& .MuiFilledInput-root': {
                                            border: '2px solid black',
                                            fontSize: '20px',
                                            width: '100%'
                                        },

                                        '& .MuiFormLabel-root': {
                                            color: 'black'
                                        }

                                    }}
                                />

                            </Box>

                        </div>
                        <div className='flex items-center justify-start mt-4'>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { width: '150%' },
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
                                        input: { color: 'black', width: '100%' },
                                        '& .MuiFilledInput-root': {
                                            border: '2px solid black',
                                            fontSize: '20px',
                                            width: '100%'
                                        },

                                        '& .MuiFormLabel-root': {
                                            color: 'black'
                                        }

                                    }}
                                />

                            </Box>
                        </div>
                        <div className="flex mt-2 ">
                            <input type="checkbox" /><p>Please do not email me Netflix special offers.</p>
                        </div>


                        <div className='flex items-center justify-center'>
                        <button onClick={()=>{
                            navigate('/step2finish')
                        }}  style={{border:'solid',width:'100%', padding:'1rem',fontWeight:"bold",background:'#E50914',color:'white',marginTop:'1rem'}}>Next</button>
                    </div>
                            </div>
                            
                </form>
            </div>

        </>
    )
}