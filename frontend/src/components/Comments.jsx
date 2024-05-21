import React from 'react'
// import { CgProfile } from "react-icons/cg";
import Avatar from '../assets/images/avatar.png'
import Avatar2 from '../assets/images/avatar2.png'

const Comments = () => {
  return (
    <div className='px-[5%] flex flex-col py-[10%] bg-[#EFEEEA]'>
        <h2 className='text-center text-5xl font-bold'>Misafirlerimizin Yorumları</h2>
        <div className='flex flex-row justify-between gap-12 mt-[10%]'>
            <div className='flex flex-col basis-1/3 gap-8 items-center'>
                <img src={Avatar} className='rounded-full border-4 border-secondary' width={100} alt="" />
                <p className='text-center text-gray-500'>Konumu merkezi, temizlik ve güvenlik konularında sıkıntısı olmayan bir kamp alanı. Elektrik ve şebeke sorunu yok, hem kamp yaptık hem de uzaktan çalışarak işlerimize devam ettik. İlgisinden dolayı İsmail abi'ye teşekkür ederiz.</p>
                <span className='mt-auto'>Ali Batir</span>
            </div>
            <div className='flex flex-col basis-1/3 gap-8 items-center'>
                <img src={Avatar} className='rounded-full border-4 border-secondary' width={100} alt="" />
                <p className='text-center text-gray-500'>Edremit Zeytinli köyünün çok tatlı bir kamp alanı burası. İsmail abi ve Muharrem abi bizleri güleryüzlü bir şekilde karşıladılar. Ortak kulanım alanları duş , tuvalet ve mutfakları da temizdi. Dere kenarında huzurlu iki gün geçirdik.</p>
                <span className='mt-auto'>gezginhocayollarda</span>
            </div>
            <div className='flex flex-col basis-1/3 gap-8 items-center'>
                <img src={Avatar2} className='rounded-full border-4 border-secondary' width={100} alt="" />
                <p className='text-center text-gray-500'>Gayet temiz ve huzurlu bir ortam, işletme sahipleri her konuda yardımcı oluyor. Üstelik köye de çok yakın, ihtiyaçları karşılamak 5 dakika. Yolu rahat.</p>
                <span className='mt-auto'>seda çelebi</span>
            </div>
        </div>
    </div>
  )
}

export default Comments