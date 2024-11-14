import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
export default function Finish() {
    const navigation=useNavigate()
    return (
        <>
            <Header buttonname={'Home'} onClick={()=>{navigation('/')}} style={{ position: 'relative', zIndex: 10 }} />
            <form className='flex items-center justify-center' style={{  height: '100vh', position: 'relative', zIndex: 1 }}>
                <div>
                    <div className='flex items-center justify-center'>
                        <img
                            src="https://image.benq.com/is/image/benqco/zowie-homepage-5-icon-b?$ResponsivePreset$&fmt=png-alpha"
                            alt="Icon"
                            style={{ width: '24rem' }}

                        />
                    </div>
                    <div className='flex items-center justify-center'>
                        <p >STEP 1 OF 3
                        </p>

                    </div>
                    <div className='flex items-center justify-center text-center'>
                        <h4 style={{ fontSize: "32px", fontWeight: "bolder" }}>Finish setting up your account
                        </h4>
                    </div>
                    <div className='flex items-center justify-center '>
                        <p className='w-[60%] mt-3' style={{ textAlign: "center", fontWeight: "bold" }}>Netflix is personalized for you. Create a password to watch on any device at any time.</p>
                    </div>
                    <div className='flex items-center justify-center'    onClick={()=>{navigation('/step1finish')}} style={{border:'solid', padding:'1rem',fontWeight:"bold",background:'#E50914',color:'white',marginTop:'1rem'}}>
                        <button   className="w-[12rem] sm:w-[24rem]">
                     Next</button>
                    </div>
                </div>
            </form>
        </>
    );
}
