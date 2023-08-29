import React from 'react'
import "./../Test.scss"
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>
        <ul>
          <li><NavLink Link to='/'>이용정보</NavLink></li>
          <li><NavLink Link to='/about'>요금&amp;프로모션</NavLink></li>
          <li><NavLink Link to='/protfolio'>즐길거리</NavLink></li>
          <li><a href='/'>맴버십</a></li>
          <li><a href='/'>에버랜드 더 알아보기</a></li>
        </ul>
    </div>
  )
}

export default Nav