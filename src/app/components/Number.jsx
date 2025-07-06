import { CheckCircle, Globe, Users } from 'lucide-react'
import React from 'react'
import { BiLike } from 'react-icons/bi'

const Number = () => {
  return (
    <div className='bg-white text-black px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-12 md:py-16 lg:py-20'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12 md:mb-16 lg:mb-20'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#002236] font-bold leading-tight'>
            Our numbers speak for us!
          </h1>
          <p className='mt-4 md:mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
            As part of the MRC Group, we have access to experience and expertise, around the world.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10'>
          {/* Card 1 */}
          <div className='flex flex-col items-center text-center p-6 md:p-8 hover:bg-gray-50 rounded-lg transition-all'>
            <CheckCircle size={48} className='text-[#1a73e3]' />
            <h1 className='text-3xl sm:text-4xl md:text-5xl my-3 md:my-4 font-bold'>500</h1>
            <p className='text-lg md:text-xl font-semibold'>Successfully</p>
            <p className='text-gray-500'>completed cases</p>
            <div className="mt-6 md:mt-8 w-16 h-1 bg-[#1a73e3]"></div>
          </div>

          {/* Card 2 */}
          <div className='flex flex-col items-center text-center p-6 md:p-8 hover:bg-gray-50 rounded-lg transition-all'>
            <Users size={48} className='text-[#1a73e3]' />
            <h1 className='text-3xl sm:text-4xl md:text-5xl my-3 md:my-4 font-bold'>80+</h1>
            <p className='text-lg md:text-xl font-semibold'>Highly specialised</p>
            <p className='text-gray-500'>consultants</p>
            <div className="mt-6 md:mt-8 w-16 h-1 bg-[#1a73e3]"></div>
          </div>

          {/* Card 3 */}
          <div className='flex flex-col items-center text-center p-6 md:p-8 hover:bg-gray-50 rounded-lg transition-all'>
            <BiLike size={48} className='text-[#1a73e3]' />
            <h1 className='text-3xl sm:text-4xl md:text-5xl my-3 md:my-4 font-bold'>100%</h1>
            <p className='text-lg md:text-xl font-semibold'>Satisfaction</p>
            <p className='text-gray-500'>of our global clients</p>
            <div className="mt-6 md:mt-8 w-16 h-1 bg-[#1a73e3]"></div>
          </div>

          {/* Card 4 */}
          <div className='flex flex-col items-center text-center p-6 md:p-8 hover:bg-gray-50 rounded-lg transition-all'>
            <Globe size={48} className='text-[#1a73e3]' />
            <h1 className='text-3xl sm:text-4xl md:text-5xl my-3 md:my-4 font-bold'>4</h1>
            <p className='text-lg md:text-xl font-semibold'>Countries</p>
            <p className='text-gray-500'>where we have partnerships</p>
            <div className="mt-6 md:mt-8 w-16 h-1 bg-[#1a73e3]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Number