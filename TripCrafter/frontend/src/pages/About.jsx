
import React from 'react'
import './pagescss/about.css'
const About = () => {

  return (
    <>
    <section className="about_section d-flex align-items-center">
            <div className="container-fluid p-5">
                <div className="row d-flex justify-content-center   text-white align-items-center ">
                <div className="col-lg-6  text-left  p-5">
                        <h2 className=" about_title text_title fw-bold">About Us</h2>
                    </div>
                    <div className="col-lg-6 ">
                        <div className="about-content border-primary">
                            <div className="about-details">
                            <h3 className=" text_title mt-5">Vision</h3>
                              <p className='text_decpt' style={{color: 'whitesmoke'}}>
                                Keeping the core values and ethics at the center, TRIP CRAFTER - the NGO aims to be a benchmark in training the youth for a better future. The NGO is dedicated to enhancing positive qualities in modern youth, leading to a brighter society.
                              </p>
                              <h3 className=" text_title mt-5">Mission</h3>
                              <p className='text_decpt' style={{color: 'whitesmoke'}}>
                                The mission of the NGO is to shape young minds into responsible individuals who contribute to a happier and more developed world. The NGO believes in instilling a sense of responsibility and understanding of societal needs in the youth.
                              </p>
                              <h3 className=" text_title mt-5">Objectives</h3>
                              <p className='text_decpt' style={{color: 'whitesmoke'}}>
                                The establishment of the NGO was inspired by collaborations with other NGOs during college activities such as NSS/NCC. The organization is focused on the holistic development of young people, with a particular emphasis on students. Upholding ethical values, the NGO aims to cultivate positive qualities in the youth through various activities.
                              </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About;