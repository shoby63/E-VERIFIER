import React from 'react'
import { createTheme, Spacer } from '@nextui-org/react'
import './Features.css'
import Computer_Pen from  '../../Assests/Computer_Pen.png'
import tech from '../../Assests/Technical.png'
import web_dev from '../../Assests/web-development-computer-icons-icon-design-png-favpng-xwSFznQB5gYcBFxuxhKX1u6dK.jpg';
import email_logo from '../../Assests/E-mailL_ogo (1).png'

export default function Features() {
  return (
    <section className="shadow-lg bg-gray-100 mx-7 border-1 rounded-lg shadow hover:shadow-2xl shadow-blue-500/50">
      <div className="py-10 px-10 lg:flex lg:flex-row lg:gap-8">
        <div className="w-full lg:w-2/3 py-10 font-semibold text-lg">
          <h1 className="font-extrabold text-center text-4xl mb-6">Features of E-mail verifier</h1>
          <div className="feature-section grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            <div className="feature bg-orange-100">
              <img src={Computer_Pen} className="w-20 h-20 mx-auto" alt=""/>
              <h6 className="text-center mt-2">Free E-mail Validation</h6>
            </div>
            <div className="feature">
              <img src={tech} className="w-20 h-20 mx-auto" alt=""/>
              <h6 className="text-center mt-2">Accurate and Fast</h6>
            </div>
            <div className="feature">
              <img src={web_dev} className="w-20 h-20 mx-auto" alt="" />
              <h6 className="text-center mt-2">Avoid Bounces</h6>
            </div>
            <div className="feature">
              <img src={email_logo} className="w-20 h-20 mx-auto" alt="tht" />
              <h6 className="text-center mt-2">Supports All Types E-mail</h6>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 flex flex-col items-center gap-5 py-5">
          <h1 className="font-extrabold text-center px-8 pt-8 text-2xl mb-6">Are you looking for more APIs?<br/><br/>Check all APIs made by us!</h1>
          <a href="https://oyyi.xyz/">
            <h4 className="btn-visit-oyyi py-3 px-6 rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition-all">
              Visit Oyyi <img alt="title" src="https://img.icons8.com/small/16/FFFFFF/external-link.png" className="w-4 h-4 inline-block ml-1" />
            </h4>
          </a>
        </div>
      </div>
    </section>
  )
}
