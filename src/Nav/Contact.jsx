import React from 'react'
import { FcMindMap } from "react-icons/fc";
import { FaRegAddressCard } from "react-icons/fa6";
import { FaEarthAmericas } from "react-icons/fa6";
import { BiPhoneCall } from "react-icons/bi";


const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h1><FcMindMap />Contact</h1>
      <div className="contact_content">
      <div className="contact_box1">
        <sapn>
          <div className="contact_img">
          <FaRegAddressCard />
          </div>
          <p>wpdnr002@naver.com</p>
        </sapn>
        <sapn>
          <div className="contact_img">
          <FaEarthAmericas />
          </div>
          <p>서울특별시 광진구 구의동</p>
        </sapn>
        <sapn>
          <div className="contact_img">
          <BiPhoneCall />
          </div>
          <p>010 - 5222 - 9654</p>
        </sapn>
      </div>
      <div className="contact_box2">
        <input type="text" placeholder='성함'/>
        <input type="text" placeholder='회신 받을 E-Mail'/>
        <input type="text" placeholder='제목'/>
        <textarea placeholder='내용'/>
        <button type="submit" className="btn btn-primary" id="SubmitBtn">메일 전송</button>
      </div>
      </div>
    </div>

  )
}

export default Contact