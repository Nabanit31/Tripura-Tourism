import React,{useRef,useEffect} from 'react'
import {Container,Row,Button} from 'reactstrap'
import { NavLink , Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import "./header.css";
const nav__links = [
  {
path:'/home',
display:'Home'
},
{
  path:'/about',
  display:'About'
  },
  {
    path:'/CarRental',
    display:'CarRental'
    },

]

const Header = () => {
  const headerRef =useRef(null)
  const StickyHeaderFunc =()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop >80 || document.documentElement.scrollTop >80){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classlist.remove('sticky__header')
      }
    })
  }
useEffect(()=>{
  StickyHeaderFunc()
  return window.removeEventListener('scroll',StickyHeaderFunc)
})


  return <header className="header" ref={headerRef}>
    <Container>
      <Row>
        <div className="nav_wrapper d-flex align-items-center
        justify-content-between">
          {/*============LOG0=====================*/}
          <div className="logo">
            <img src={logo} alt=""  />
          </div>
          {/*============LOG0 end=====================*/}

          {/*============Menu Start=====================*/}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5" >
                {
                  nav__links.map((item, index) => (
<li className="nav__item" key={index}>
  <NavLink to ={item.path} className={navClass=> navClass.
    isActive ? 'active__link':''}>{item.display} </NavLink>
</li>
))}
              </ul>
            </div>

          {/*============Menu end=====================*/}
          <div className="nav__right d-flex align-items-center gap-4 ">
          <div className="nav__btn d-flex align-items-center gap-4 "> 
          
            <Button className="btn primary__btn">
            <Link to='/login'>Hotel Booking</Link></Button>
          </div>
<span className="mobile__menu">
<i class="ri-menu-line"></i>
</span>



          </div>
    
        </div>
      </Row>
    </Container>
  </header>
};
export default Header