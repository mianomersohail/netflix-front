import Header from "../Header/Header";
import Step3List from "./Step3List";
import Step3Data from './Step3Data';
import { useNavigate } from "react-router-dom";
export default function Step3() {
    const navigate=useNavigate()
    return (
        <>
                    <Header buttonname='SignIn' onClick={()=>{navigate("/login")}}/>

            <div className="pt-0 pr-[8rem] pb-0 pl-[8rem] max-md:pr-4 max-md:pl-4" style={{ marginTop: "10rem" } }>
                <div>
                    <p>STEP 2 OF 3</p>
                </div>
                <div>
                    <h4 className="max-md:text-center" style={{ fontSize: "32px", fontWeight: 'bold' }}>
                        Choose the plan that’s right for you
                    </h4>
                </div>
                <div className="container  mx-auto px-4" >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {Step3Data.map((item, index) => (
                            <div key={index} className="border-[0.5px] shadow-lg p-4">
                                <Step3List
                                    Devname={item.Devname}
                                    Devcicep={item.Devcicep}
                                    Price={item.Price}
                                    Quality={item.Quality}
                                    Resolution={item.Resolution}
                                    Supportdevice={item.Supportdevice}
                                    watchnum={item.watchnum}
                                    downloadnum={item.downloadnum}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-10 max-md:text-center" style={{ fontSize: "13px" }}>
                    <p>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details.
                        Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</p>
                </div>
                <div className='flex items-center justify-center mt-3'>
                            <button onClick={() => {
                                navigate('/step4finish')
                            }} style={{ border: '', width: '50%', padding: '1rem', fontWeight: "bold", background: '#E50914', color: 'white', marginTop: '1rem' }}>Next</button>
                        </div>
            </div>
        </>
    );
}
