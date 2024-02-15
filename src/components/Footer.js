import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
	
	<MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
	<section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
	  <div className='me-5 d-none d-lg-block'>
		<span>Get connected with us on social networks:</span>
	  </div>

	  <div>
		<a href='' className='me-4 text-reset'>
		  <MDBIcon fab icon="facebook-f" />
		</a>
		<a href='' className='me-4 text-reset'>
		  <MDBIcon fab icon="twitter" />
		</a>
		<a href='' className='me-4 text-reset'>
		  <MDBIcon fab icon="google" />
		</a>
		<a href='' className='me-4 text-reset'>
		  <MDBIcon fab icon="instagram" />
		</a>
		<a href='' className='me-4 text-reset'>
		  <MDBIcon fab icon="linkedin" />
		</a>
		<a href='' className='me-4 text-reset'>
		  <MDBIcon fab icon="github" />
		</a>
	  </div>
	</section>

	<section className=''>
	  <MDBContainer className='text-center text-md-start mt-5'>
		<MDBRow className='mt-3'>
		  <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
			<h5 className='text-uppercase fw-bold mb-4'>
			  <MDBIcon icon="gem" className="me-3" />
			  WSSL
			</h5>
			<span className='fs-5'>
			2nd Floor,246, Opera Business Hub, Lajamni Chowk,
			Mota Varachha,Dist-Surat,Pin-394101,Gujarat-India
			</span>
		  </MDBCol>

		  <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
			<h5 className='text-uppercase fw-bold mb-4 text-center'>OUR SERVICE</h5>
			<p className="text-center">
			<Link to={'/ISI'} className="footerlinks" style={{textDecoration:"none"}}>ISI</Link>
			</p>
			<p className="text-center">
			<Link to={'/CRS'} className="footerlinks" style={{textDecoration:"none"}}>CRS</Link>
			</p>
			<p className="text-center">
			<Link to={'/FMCS'} className="footerlinks" style={{textDecoration:"none"}}>FMCS</Link>
			</p>
			<p className="text-center">
			<Link to={'/FASSAI'} className="footerlinks" style={{textDecoration:"none"}}>FASSAI</Link>
			</p>

		
	
		  </MDBCol>

		  <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 '>
			<h5 className='text-uppercase fw-bold mb-4 text-center'>Useful links</h5>
			<p className="text-center">
			<Link to={'/'} className="footerlinks " style={{textDecoration:"none"}}>Home</Link>
			</p>
			<p className="text-center">
			<Link to={'/about'} className="footerlinks" style={{textDecoration:"none"}}>About Us</Link>
			  
			</p>
			<p className="text-center">
			<Link to={'/services'} className="footerlinks" style={{textDecoration:"none"}}>Services</Link>
			</p>
			<p className="text-center">
			<Link to={'/contact'} className="footerlinks" style={{textDecoration:"none"}}>Contact</Link>
			</p>
		  </MDBCol>

		  <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
			<h5 className='text-uppercase fw-bold mb-4 text-center'>Contact</h5>
			<p className="text-center">
			  <MDBIcon icon="home" className="me-2" />
			  Surat, Gujarat
			</p>
			<p className="text-center">
			  <MDBIcon icon="envelope" className="me-3" />
			  sales@wssl.co.in
			</p>
			<p className="text-center"> info@wssl.co.in</p>
			<p className="text-center">
			  <MDBIcon icon="phone" className="me-3 " /> 8758503231
			</p>
			
		  </MDBCol>
		</MDBRow>
	  </MDBContainer>
	</section>

	<div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
	  © 2021 Copyright:
	  <a className='text-reset fw-bold' href="https://www.linkedin.com/in/ravishukla25/" target='_blank'>
		Ravi
	  </a>
	</div>
  </MDBFooter>
);
}

export default Footer
