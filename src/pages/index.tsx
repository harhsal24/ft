import Image from 'next/image'
import { Inter } from 'next/font/google'
import Calender from '@/svgs/Calender'
import Button from '@/components/Button'
import Clock from '@/svgs/Clock'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <main className='flex justify-center items-center'>
    <div className='bg-secondary w-[438px] '>
      <div className='bg-primary text-center mt-4 py-3' >
        <div className='text-text-white text-2xl font-medium '>FREE 2 DAYS Online</div>
        <div className='text-text-white font-extrabold leading-8 text-3xl'>FACE YOGA CHALLENGE</div>
      </div>
      <div className='mt-6 flex justify-center items-center flex-col font-bold leading-8 gap-y-2 '>
    <div className='text-2xl  text-primary gap-y-2'>BEST FACIAL ALTERNATIVE</div>
    <div className='flex items-center  text-xl'><span className='mr-2'><Calender/></span>18 and 19 NOV</div>
      </div>
      <div className='flex justify-center items-center flex-col gap-y-3 mt-[27px] font-normal'>
      <input className=' border border-primary  rounded-xl h-[50px] w-[361px] outline-none text-base placeholder-black bg-secondary pl-5' type="text" name="" id="" placeholder='Enter your Name' />
      <div className='flex gap-x-[14px]  '>
        <div className='border border-primary   rounded-xl h-[50px] w-[80px] outline-none text-base placeholder-black bg-secondary flex items-center justify-center'>+91</div>
       <input className=' border border-primary rounded-xl h-[50px] w-[267px]  outline-none text-base placeholder-black bg-secondary pl-5' type="text" name="" id="" placeholder='WhatsApp Number' />
      </div>
      <div>
        <Button height={50} width={360}>Join FREE CHALLENGE</Button>
      </div>
      <div><span className='text-xl font-semibold text-black-2'>50,000+</span><span className='text-xl font-normal text-black opacity-90 ml-2 tracking-wide'>Attended Sessions</span></div>
  
    </div>
    <div className='mt-14'>
    <Image className='shadow-photoShadow'  src={'/TrainerPic1.png'} alt='' height={268}  width={438}/>
    </div>
      <div className='text-center text-text-white bg-primary w-full py-2'>
        <div className='text-2xl font-extrabold leading-7'>LOOK 10 YEARS YOUNGER</div>
        <div className='text-2xl font-semibold'>with Sheetal Pungliya</div>
        <div className=' text-black text-xl font-normal leading-normal'>Face Yoga Expert</div>
      </div>
      <div className='text-center'>
        <div className='text-black-2 text-sm font-normal leading-normal textShadow py-3 tracking-wider'>LIVE ON YOUTUBE</div>
        <div>
          <div className='border border-primary rounded-md w-[254px] flex flex-col mx-auto shadow-cardShadow'>
            <div className='flex mx-auto gap-x-1 my-2'>
              <span><Clock/></span><span className='text-black-2'>Batch Timings</span></div>
            <div className='space-y-1 text-primary font-semibold'>
              <div>9:00 AM - 9:30 AM</div>  
              <div className='font-bold'>12:00 PM - 12:30 PM</div>
              <div className='pb-2'>9:00 PM - 9:30 PM</div>
            </div>
          </div>
        </div>
        <div className='mt-2 text-sm text-black-2 font-medium italic leading-normal'>* All timings are in Indian Standard Time</div>
        <div className='flex items-center justify-center mt-4'>
        <Button height={50} width={360}>Join FREE CHALLENGE</Button>
      </div>
      <div className='my-5'>
      <Image className='shadow-photoShadow'  src={'/TrainerPic2.png'} alt='' height={268}  width={438}/>
      <div className='text-text-white text-start  bg-primary flex flex-col gap-y-4'>
        
        <div className='mx-auto space-y-3'>
          <div className='font-bold text-2xl text-center'>HIGHLIGHTS</div>
          <div><p><span className='font-extrabold text-sm tracking-wider'>Face Yoga</span> sessions consists of facial exercises,</p> <p>lymphatic drainage and toning and sculpting</p></div>
          <div><span className='font-extrabold text-sm tracking-wider'>Improve</span> blood circulation, face glow</div>
          <div>Completely <span className='font-extrabold text-sm tracking-wider'>Free</span> No hidden charges</div>
          <div className='pb-5'><span className='font-extrabold text-sm tracking-wider'>Attend</span> Multiple Sessions in a day</div>
        </div>
        
      </div>
      </div>
      <div>
        <div className='text-primary text-sm font-semibold'>
          <p>Explore the opportunities to have a youthful and </p>
          <p>glowing skin , workout way</p>
        </div>
        <div className='flex items-center justify-center my-3'>
        <Button height={50} width={360}>Join FREE CHALLENGE</Button>
        </div>
      </div>
      </div>
    </div>
   
   </main>
  )
}
