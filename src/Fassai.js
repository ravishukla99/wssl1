import React from "react";
import { Image, Container } from "react-bootstrap";
const Fassai = () => {
  return(
    <>
      <div class=" text-center ">
        <h1 className="text-center my-4">
          FOOD SAFETY AND STANDARDS AUTHORITY OF INDIA (FSSAI)
        </h1>
        <Image src="./Images/Brand/FSSAI Logo.jpg" style={{ width: "250px" }} />
      </div>
      <br></br>
      <Container>
        <p className="fs-5" style={{ textAlign: "justify" }}>
          The Food Safety and Standards Authority of India (FSSAI) has been
          established under Food Safety and Standards , 2006 which consolidates
          various acts & orders that have hitherto handled food related issues
          in various Ministries and Departments. FSSAI has been created for
          laying down science based standards for articles of food and to
          regulate their manufacture, storage, distribution, sale and import to
          ensure availability of safe and wholesome food for human consumption.
        </p>
        <h2 style={{ textAlign: "center", background: "lightblue" }}>
          INTRODUCTION
        </h2>
        <p className="fs-5" style={{ textAlign: "justify" }}>
          FSSAI: Although the food industry has become one of the most in-demand
          industries, it is still not reliable for daily consumers. One of the
          greatest difficulties in today's culture is adulteration, adding
          additives, or contamination of natural food products. Adulterants of
          poor quality are added to food for economic and technical reasons. To
          tackle this issue, the government of India formed the Food Safety and
          Standards Authority of India (FSSAI), which monitors, governs, and
          inspects food manufacturing, storage, packaging, and handling
          procedures of food business operators. This ultimate authority's
          principal goal is to regulate and supervise food safety to safeguard
          and promote public health.
        </p>
        <br />
        <p className="fs-5" style={{ textAlign: "justify" }}>
          This government agency is in charge of overseeing India's food
          industries and ensuring that they adhere to government regulations.
          Their job is to make sure that the food is pure and meets the
          specified requirements. Their task is to get rid of food that isn't up
          to standard.
        </p>
        <h2 style={{ textAlign: "center", background: "lightblue" }}>
          WHAT IS FASSAI
        </h2>
        <p className="fs-5" style={{ textAlign: "justify" }}>
          FSSAI is an acronym used for Food Safety and Standards Authority of
          India, an independent body recognized under the Ministry of Health &
          Family Welfare, Government of India. FSSAI was formed by Former Union
          Minister Dr Anbumani Ramadoss on 5 August 2011 under Food Safety and
          Standards Act, 2006, which became operational in 2006.
        </p>
        <br />
        <p className="fs-5" style={{ textAlign: "justify" }}>
          The Food Safety and Standards Act of 2006, which was enacted to
          promote food cleanliness and quality, has resulted in significant
          changes in the food business. Delhi, Guwahati, Mumbai, Kolkata,
          Cochin, and Chennai are among the authority's six regional offices.
          According to the Act, no person may start or operate a food business
          without obtaining an FSSAI license or registration. As a result, any
          firm that manufactures, processes, packages, or distributes food must
          now obtain an FSSAI License or Registration.
        </p>
        <br />
        <div className="fs-5" style={{ textAlign: "justify" }}>
          FSSAI, an acronym for Food Safety and Standards Authority of India
          that monitors and governs registered food business in India.
        </div>
      </Container>
    </>
  );
};

export default Fassai;
