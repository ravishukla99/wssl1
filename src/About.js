import React from 'react'
import { Container, Image } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const About = () => {
	document.title="WSSL - ABOUT"
  return (
	<div>
   <h1 className='text-center my-2 border container' style={{color:"#4aa439"}}>ABOUT US</h1>
	<Container>
	
	<Row>
	  <Col xs={12} md={8} lg={6}>
		<div style={{ width: "100%" }} className="m-3">
		  <Card>
			<Card.Body>
			  
			  <Card.Subtitle className="mb-2"></Card.Subtitle>
			  <Card.Text>
			  'World Standards Scientific LLP' Is The World's Most Leading Consulting Firm, A
			  Reliable Service Provider Occupied In Offering Product Testing Laboratory & ISI
			  /BIS Certification, Food Testing Laboratory & Food License Certification, Training,
			  Regulatory Compliances, Indian Standard Assessment Like ISI Certification Services,
			  Foreign Manufacturer Certification, NABL Accreditation Consultancy, Indian BIS
			  And CRS Scheme For Electronics & It Goods, And Many More. As Of Now, Products
			  Certifications & Compliances Is Being Catered By 'World Standards Scientific LLP
			  The Offering Range Of Service Is Rendered In Obedience With The Quality
			  Constraints By Our Competent Experts Who Hold A Rich Understanding Of The
			  Particular Fields.
			  </Card.Text>
			</Card.Body>
		  </Card>
		</div>
	  </Col>
	  <Col xs={12} md={8} lg={6}>
		<div className="m-3">
		  <Image
			src="./Images/Lab-Site-Selection-2.jpg"
			style={{ width: "100%", }}
		  />
		</div>
	  </Col>
	</Row>
  </Container>

	<section>
	<h1 className='text-center my-5 border container' style={{color:"#4aa439"}}>WHO WE ARE</h1>
	<div className='row container' >
	<div className='col'>
	<Image src="./Images/who.webp" className='mx-5' ></Image>
	</div>
	<div className='col'>
	<p className=" my-5">We ‘WORLD STANDARDS SCIENTIFIC LLP’ have placed ourselves
						amongst the assured names in
						the corporate world. ‘WORLD STANDARDS SCIENTIFIC LLP’ is expanding its business rapidly with a great
						potential
						for growth of India as a leading consultant in product testing and technical compliances for
						Indian
						Regulatory requirements. WORLD STANDARDS SCIENTIFIC LLP has carved a niche amongst the trusted names in the
						market with an aim to facilitate the consumers to get Certification & License under the various
						Schemes under Govt. of India.</p>
	</div>
	</div>
	<br /> 
	</section>
	<h1 className="my-5 text-center container border" style={{color:"#4aa439"}}>OUR SERVICES</h1>
	<div className="container text-center border  ">
	<div className="row justify-content-center">
		<div className="col-sm-4 col-md-4 col-lg-4 mt-5">
			<Image src="./Images/Brand/Isi_mark logo.jpg"  alt="Responsive image" style={{width:"199px"}}/>
		</div>
		<div className="col-sm-4 col-md-4 col-lg-4 col-xl-3 mt-5 brand icon-zoom">
			<Image src="./Images/Brand/FMCS.webp" alt="Responsive image" style={{width:"250px"}}/>
		</div>

		<div className="col-sm-4 col-md-4 col-lg-4 col-xl-3 mt-5 brand icon-zoom">
			<Image src="./Images/Brand/CRS R.jpg"  alt="Responsive image"/>
		</div>

		<div className="col-sm-4 col-md-4 col-lg-4 col-xl-3 mt-5 brand icon-zoom">
			<Image src="./Images/Brand/FSSAI Logo.jpg"  alt="Responsive image"/>
		</div>
		
	</div>
	<p className="mt-5 text-center" style={{color:"#3128b2"}}> And Many more...</p>
	</div>

	<div className="container border my-5">

	<div class>
		<table className="table table-striped ">
			<thead>
				<tr className="text-center fs-5 table-success" >

					<th scope="col ">LICENSE AND CERTIFICATION</th>
				</tr>
			</thead>
			<tbody>
				<tr className="text-center fs-5">

					<td>Domestic Product Certification (ISI Mark)</td>
				</tr>
				<tr className="text-center fs-5">

					
					<td>BIS (ISI Mark) For Foreign Manufacturers</td>

				</tr>
				<tr className="text-center fs-5">

					<td> CRS For Electronics & IT Goods</td>

				</tr>
				<tr className="text-center fs-5">

					<td>Food License Certification</td>

				</tr>

				

			</tbody>
		</table>
	</div>

</div>


<br/>


<Container>
<h1 className='text-center my-5 border' style={{color:"#4aa439"}}>DESIGNATED PARTNER</h1>
<Row className='justify-content-center text-center'>
<Col xs={12} md={4}>
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="./Images/Nikunj G..jpg" />
<Card.Body>
  <Card.Title>Mr. Nikunj G. savaliya</Card.Title>
  <Card>Designated Partner</Card>
  
</Card.Body>
</Card>
</Col>
<Col xs={12} md={4}>
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="./Images/vikash.jpg" />
<Card.Body>
  <Card.Title>Mr. Vikas S. Chavda</Card.Title>
  <Card>Designated Partner</Card>
  
</Card.Body>
</Card>
</Col>
</Row>
<br/>
<p>Our team of engineers excel in all technical fields such as
Civil, Mechanical, Electrical, Electronics and Chemical etc. Our team also ensures that the procedure
and processes implemented in the production are in accordance with the requirements of standards
formulated by the Bureau of Indian Standards (BIS). The discrepancies are addressed promptly, and
training is provided at all levels and processes to ensure compliance with Indian Standards (IS). The
comprehensive details regarding the technical standards & procedures are prepared to ensure the right
execution of government guidelines.</p>
</Container>
</div>


)
}

export default About
