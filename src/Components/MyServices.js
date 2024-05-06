import React from 'react'

const MyServices = () => {
    const data = [
        {
            img:"https://credesign.vercel.app/onePage/onePageFour/img/serviceNine.png",
            title:"Web Design",
            desc:"Sugary sweet lorem ipsum? You got it with Cup cake Ipsum, the only text generator treatment contrary."
        },
        {
            img:"https://credesign.vercel.app/onePage/onePageFour/img/serviceTen.png",
            title:"Web Development",
            desc:"Sugary sweet lorem ipsum? You got it with Cup cake Ipsum, the only text generator treatment contrary."
        },
        {
            img:"https://credesign.vercel.app/onePage/onePageFour/img/serviceEleven.png",
            title:"Mobile Development",
            desc:"Sugary sweet lorem ipsum? You got it with Cup cake Ipsum, the only text generator treatment contrary."
        },
        {
            img:"https://credesign.vercel.app/onePage/onePageFour/img/serviceTwelve.png",
            title:"IOS Development",
            desc:"Sugary sweet lorem ipsum? You got it with Cup cake Ipsum, the only text generator treatment contrary."
        }
    ]
  return (
    <div className='pb-[50px]'>
        <h1 className='text-4xl font-bold mb-[50px]'>MY SERVICES</h1>
        <div className='flex flex-wrap justify-center gap-[20px]'>
            {data.map((ele)=><div className='hover:bg-[#FFF5EF] h-[350px] w-[250px] border-[1px] rounded-lg border-[#FA6C2C]'>
                <img alt='logo' className='mt-[50px] ml-[30px] mr-[30px]' src={ele?.img}/>
                <h1 className='text-xl text-left font-bold mt-[20px] ml-[30px] mr-[30px]'>{ele?.title}</h1>
                <p className='text-left mt-[20px] ml-[30px] mr-[30px]'>Sugary sweet lorem ipsum? You got it with Cup cake Ipsum, the only text generator treatment contrary.</p>
            </div>)}
        </div>
    </div>
  )
}

export default MyServices