import React from 'react'

export default function About() {
    return (
        <div className='w-4/5 mx-auto brdr-red'>

            <h2 className='text-[1.5rem] md:text-[3rem] my-3 md:my-10 fond-bold'>Educations</h2>


            <div className='flex justify-around md:flex-col'>


                {/* for mobile view */}

                <div className="md:hidden my-5 h-[screen] bg-white w-[2px] border-white mx-2 flex flex-col items-center md:my-5">
                    <div className='flex flex-col md:flex-row'>
                        <div className="w-[12px] h-[12px] bg-white rounded-full mt-[5rem]"></div>
                        <div className="w-[12px] h-[12px] bg-white rounded-full mt-[9rem] "></div>
                        <div className="w-[12px] h-[12px] bg-white rounded-full mt-[10rem]"></div>
                        <div className="w-[12px] h-[12px] bg-white rounded-full mt-[11rem]"></div>
                    </div>
                </div>


                <div className="hidden bg-white w-3/4 mx-auto h-[2px] md:flex items-center md:my-2">
                    <div className='flex justify-between w-full'>
                        <div className="w-[12px] h-[12px] bg-white rounded-full "></div>
                        <div className="w-[12px] h-[12px] bg-white rounded-full"></div>
                        <div className="w-[12px] h-[12px] bg-white rounded-full"></div>
                        <div className="w-[12px] h-[12px] bg-white rounded-full"></div>
                    </div>
                </div>
                <div className="details md:flex">

                    <div className="highschool border border-white rounded-lg m-1 mb-5 md:mx-3 p-2 shadow-md shadow-white">
                        <h3 className='text-[1.1rem] md:text-[1.2rem]  my-3 font-bold '>High School</h3>
                        <p>2015-2017</p>
                        <p>S.P.S.V.M Baskhari Ambedkar Nagar</p>
                        <p>Uttar Pradesh</p>

                    </div>
                    <div className="highschool border border-white rounded-lg m-1 mb-5 md:mx-3 p-2 shadow-md shadow-white">
                        <h3 className='text-[1.1rem] md:text-[1.2rem] p-1 my-3 md:my-3 font-bold'>Intermediate (10+2)</h3>
                        <p>2017-2019</p>
                        <p>J.B.I.C Ramnagar Ambedkar Nagar</p>
                        <p>Uttar Pradesh</p>

                    </div>
                    <div className="highschool border border-white rounded-lg m-1 mb-5 md:mx-3 p-2 shadow-md shadow-white">
                        <h3 className='text-[1.1rem] md:text-[1.2rem] p-1 my-3 md:my-3 font-bold'>Bachelor of Science in CS</h3>
                        <p>2019-2022</p>
                        <p>Dr. RML Avadh University, Ayodhya</p>
                        <p>Uttar Pradesh</p>

                    </div>
                    <div className="highschool border border-white md:w-[250px] rounded-lg m-1 mb-5 md:mx-3 p-2 shadow-md shadow-white">
                        <h3 className='text-[1.1rem] md:text-[1.2rem] p-1 my-3 md:my-3 font-bold'>Maste of Computer Application (MCA)</h3>
                        <p>2023-2025</p>
                        <p>Vellore Institute of Technology, Chennai</p>
                        <p>Tamilnadu</p>

                    </div>

                </div>

            </div>
        </div>
    )
}
