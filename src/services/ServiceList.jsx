import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const ServiceData =[
    {
        imgUrl:weatherImg,
        title:"calculate weather",
        desc:"lorem jkshdgffyjsvecjhcsvce"
    },
    {
        imgUrl:guideImg,
        title:"Best Tour Guide",
        desc:"lorem jkshdgffyjsvecjhcsvce"
    },
    {
        imgUrl:customizationImg,
        title:"Customization",
        desc:"lorem jkshdgffyjsvecjhcsvce"
    },
]



const ServiceList = () => {
  return (
    <>
    {
        ServiceData.map((item,index) => ( <Col lg='3' key={index}><ServiceCard item={item}/>
        </Col>
    ))}
    </>
  )
}

export default ServiceList