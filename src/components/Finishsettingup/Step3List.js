export default function Step3List({ Devname, Devcicep, Price, Quality, Resolution, Supportdevice, watchnum, downloadnum }) {
    return (
        <>

            <div
                style={{
                    background: "linear-gradient(to bottom, rgb(48,66,155), rgb(37,103,211))",
                    borderRadius: "0.5rem",
                    padding: "0.5rem 1rem 1.5rem 0.5rem ",
                }}
            >
                <p style={{ fontSize: "18px", color: "white", fontWeight: "bold" }}>{Devname}</p>
                <p style={{ fontSize: "18px", color: 'white', fontWeight: "bold" }}>{Devcicep}</p>
                <div className="flex justify-end items-end w-[100%]">
                    <img
                        style={{ width: '1rem', borderRadius: "20%" }}
                        src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSIWUg9xcx-cxtKliE1yUhbSIwsJA4o3QNlywu9LWin9sJqEcHn"
                        alt="Device"
                    />
                </div>
            </div>
            <p className="mt-8">Monthly Price</p>
            <p className="text-lg font-semibold">{Price}</p>
            <div className="flex justify-center">
                <hr style={{ color: "black", width: "100%" }} />
            </div>
            <p className="mt-11">Video and Sound Quality</p>
            <p className="text-lg font-semibold">{Quality}</p>
            <div className="flex justify-center">
                <hr style={{ color: "black", width: "100%" }} />
            </div>
            <p className="mt-8">Resolution</p>
            <p className="text-lg font-semibold">{Resolution}</p>
            <div className="flex justify-center">
                <hr style={{ color: "black", width: "100%" }} />
            </div>
            <p className="mt-8">Supported Devices</p>
            <p className="text-lg font-semibold">{Supportdevice}</p>
            <div className="flex justify-center">
                <hr style={{ color: "black", width: "100%" }} />
            </div>
            <p className="mt-8">Devices your household can watch at the same time</p>
            <p className="text-lg font-semibold">{watchnum}</p>
            <div className="flex justify-center">
                <hr style={{ color: "black", width: "100%" }} />
            </div>
            <p className="mt-8">Download Devices</p>
            <p className="text-lg font-semibold">{downloadnum}</p>
            <div className="flex justify-center">
                <hr style={{ color: "black", width: "100%" }} />
            </div>

        </>
    );
}
