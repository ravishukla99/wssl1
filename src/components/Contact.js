import React from "react";
import { Container,Image } from "react-bootstrap";
const Contact = () => {
  document.title = "WSSL - CONTACT";
  return (
    <>
     
	  <Image src="https://venstartech.com/assets/images/contact-us.jpg" style={{width:"100%", height:"49vh"}}/>

<br/>

	  <Container>
			<div className="row ">
			
				<div className="col-md text-center shado mt-5" data-aos="zoom-in">
					
					<Image src="./Images/social media/location.jpg" alt="mymap" style={{width:"55px"}}/>
					<br/><span className="fs-5">
						2nd Floor,246, Opera Business Hub, Lajamni Chowk,Mota Varachha,Dist-
						Surat,Pin-394101,Gujarat-India
					</span>
				</div>
				
				<div className="col-md text-center mt-5">
					
					<Image src="./Images/social media/contact.jpg" alt="mymap" style={{width:"55px"}}/>
					
					<p className="text-center"><span >Vikas Chavda :-</span> +91 8758503231 </p>
					<p className="text-center"><span>Nikunj Savaliya :-</span> +91 9925566914 </p>
				</div>
				
				<div className="col-md text-center shado mt-5" data-aos="zoom-in">
					
				<Image src="https://www.svgrepo.com/show/258698/email-mail.svg"  style={{width:"55px"}}/>
				
				<p className="text-center">sales@wssl.co.in </p>
				<p className="text-center">info@wssl.co.in</p>
			</div>
			</div>
		</Container>

	  <br/>
      <h1 className=" text-uppercase text-center" data-aos="fade-left">
        Contact Us
      </h1>
      <Container>
        <form id="" method="POST" className="col-7 container text-center">
          <div className="form-group">
        
            <input type="text" className="form-control mb-4" placeholder="Name" />
          </div>
          <div className="form-group">
            
            <input type="email" className="form-control mb-4" placeholder="Email"/>
          </div>
		  <div className="form-group">
            
		  <input type="number" className="form-control mb-4" placeholder="Mobile Number"/>
		</div>

		<div className="form-group mb-4">
				<textarea className="form-control rounded-0" name="requirement" id="Textarea2" rows="3"
					placeholder="Requirement" autocomplete="off" required></textarea>
			</div>
			<button type="button" className="btn btn-primary ">Submit</button>

        </form>

      </Container>
      <br />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.844020440689!2d72.88663961441087!3d21.238032985978037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fa0b44e199f%3A0xb2b2adaf3c125594!2sOpera%20business%20hub!5e0!3m2!1sen!2sin!4v1668190440989!5m2!1sen!2sin"
       title="map"  style={{ width: "100%", height: "250px" }}
      ></iframe>
      )
    </>
  );
};

export default Contact;
