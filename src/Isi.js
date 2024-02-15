import React from 'react'
import { Container, Image } from 'react-bootstrap'
const Isi = () => {
  return (
	<>
	<div class=" text-center ">
			<h1 className="text-center my-4">PRODUCT CERTIFICATION SCHEME (ISI MARK)</h1>
			<Image src="./Images/Brand/Isi_mark logo.jpg" style={{width:"180px"}} />
		
		</div>
		<br></br>
		<Container>
		<p className='fs-5' style={{textAlign:"justify"}}> The ISI was founded on January 6, 1947, and in June 1947, Dr Lal C. Verman was the first ISI Director. ISI is now known as BIS (Bureau of Indian Standards). It sets the standard of quality for consumer goods and industrial goods. It verifies each product’s quality and standard and gives them a certification mark. By 1986 legislation, BIS is permitted to provide certification. The ISI label is mandatory for the sale of certain products in India. Any manufacturing company that meets the BIS criteria for its product or service can qualify for ISI certification.</p>
		<h2 style={{textAlign:"center", background:"lightblue"}}>WHAT IS ISI</h2>
		<p className='fs-5' style={{textAlign:"justify"}}>ISI stands for Indian Standards Institute, the National Standards body renamed Bureau of Indian Standards in 1987. The ISI mark is the standard mark provided to the manufacturers by the Bureau of Indian Standards for various products. The ISI Mark has been considered as a mark of purity, safety and trust since 1955. The ISI mark has served as a conformity mark for industrial items. It ensures that the product complies with an Indian standard (IS) established by India's national standards organization, the Bureau of Indian Standards (BIS).</p>
		<p className='fs-5' style={{textAlign:"justify"}}>ISI Certification is the process of obtaining the ISI mark for any product that complies the Indian Standards. Various electrical appliances require mandatory ISI mark, such as Electric Iron, Room Heaters, Room AC, Electric Stoves, Freezers, Electric cables, and other products like UPVC Pipes, Rubber & Leather Footwears, Composite Cements, various acids, etc.

		</p>
		<b className='fs-5' style={{textAlign:"justify"}}>Do you know that BIS ISI Mark Certificate is mandatory in India for more than 150 products? Even though it is voluntary to get BIS license, the BIS made it compulsory to attain the certificate on certain products to make sure the safety of the consumers from counterfeits and fake merchandise.
		</b>

		</Container>
		</>
  )
}

export default Isi
