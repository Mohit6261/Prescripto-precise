import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>
          ABOUT <span className='text-gray-700 font-medium'>US</span>
        </p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p >The Doctor Booking Appointment page allows users to search for and book appointments with healthcare professionals based on specialties like General Physician, Dermatologist, etc. It features filters to help narrow down options, displays detailed doctor profiles, and lets users choose available time slots.</p>
          <p> Once a doctor is selected, users can confirm their appointment by entering necessary details and receiving a confirmation message. The About Us page, on the other hand, introduces the platform, explaining its mission, values, and the team behind it. It builds trust by highlighting the platform's goals, core services, achievements, and user testimonials. Both pages are designed to ensure users can easily find the information they need and book an appointment with confidence, while also understanding the platform's purpose and credibility.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Vision is to provide patients hassle free booking and appointment services and help them in find the respectice doctors as per their convenience.</p>
        </div>
      </div>

      <div>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US </span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16  py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>

        <div className='border px-10 md:px-16  py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area. </p>
        </div>

        <div className='border px-10 md:px-16  py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  )
}

export default About
