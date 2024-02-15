import React from 'react'
import { Container, Image } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Services = () => {
	document.title="WSSL - Services"

  return (
	<>
	<div className='text-center'>
	  
	 <Image src="./Images/our-service.jpg" style={{width:"220px"}}/>
  </div>
<Container>

  
<Row className='justify-content-center text-center'>
<Col xs={12} md={6} className='my-2'>
<Card style={{ width: '100%' }}>
<Card.Img variant="top" src="./Images/service/isimark s.jpg" />
<Card.Body>
  <Card style={{textAlign:"justify"}}>ISI Certification is the process of obtaining the ISI mark for any product that complies the Indian Standards. Various electrical appliances require mandatory ISI mark, such as Electric Iron, Room Heaters, Room AC, Electric Stoves, Freezers, Electric cables, and other products like UPVC Pipes, Rubber & Leather Footwears, Composite Cements, various acids..<span><Link to={'/ISI'} className="footerlinks" style={{textDecoration:"none"}}>Read More....</Link></span>

  </Card>
  
</Card.Body>
</Card>
</Col>
<Col xs={12} md={6} className='my-2'>
<Card style={{ width: '100%' }}>
<Card.Img variant="top" src="./Images/service/FMCS F.jpg" />
<Card.Body>
  <Card  style={{textAlign:"justify"}}>FMCS Certificate in India from the FMCD department is meant for the manufacturing units located overseas, and which will undergo for factory audit to determine whether the manufacturer is complying with all the necessary requirements illustrated by BIS. It is also mandatory for foreign applicants to nominate Authorized Indian Representative (AIR).To understand all these steps, let's explore the parameters in detail.<span> <Link to={'/FMCS'} className="footerlinks" style={{textDecoration:"none"}}>Read More...</Link> </span>

  </Card>
  
</Card.Body>
</Card>
</Col>

<Col xs={12} md={6} className='my-2'>
<Card style={{ width: '100%' }}>
<Card.Img variant="top" src="./Images/service/CRS.jpeg" />
<Card.Body>
  
  <Card style={{textAlign:"justify"}}>The Ministry also issued Compulsory Registration Orders, which state that no one shall manufacture or
  store for sale, sell, import, or distribute goods that do not meet the Indian standards stipulated in the order
  and do not bear the Standard Mark with a unique registration number.<span><Link to={'/CRS'} className="footerlinks" style={{textDecoration:"none"}}>Read More...</Link></span></Card>
  
</Card.Body>
</Card>
</Col>
<Col xs={12} md={6} className='my-2'>
<Card style={{ width: '100%' }}>
<Card.Img variant="top" src="./Images/service/fssai s.jpg" />
<Card.Body>
  <Card  style={{textAlign:"justify"}}>FSSAI, an acronym for Food Safety and Standards Authority of India that monitors and governs registered food business in India.FSSAI Logo will build consumer trust towards your food brand/products.Getting an FSSAI license is advantageous for opening a food business officially.<span><Link to={'/FASSAI'} className="footerlinks" style={{textDecoration:"none"}}>Read More...</Link></span>

  </Card>
  
</Card.Body>
</Card>
</Col>

</Row>
<br/>
  </Container>
	</>
	)
}

export default Services
