import React from 'react'
import img1 from '../images/tour01.jpg'
import img2 from '../images/tour02.jpg'
import img3 from '../images/tour03.jpeg'
import img4 from '../images/tour04.jpg'
import img5 from '../images/tour05.jpg'
import img6 from '../images/tour06.jpg'

import './Compcss/Gallary.css'
const Gallary = () => {
  return (
    <div>

        <section className="gallery_section mt-4">
            <div className="container ">
                <div className="row">
                    <div className="col-12 text-center pb-5">
                        <h2 className="section-title text_style" >Our Gallery</h2>
                        <p className="section-subtitle">These images capture the moments of joy and wonder that await you, inviting you to embark on your own unforgettable journey with us. </p>
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-4">
                        <img src={img1} className="img-fluid rounded-3" alt="Gallery_Image_1" />
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-4">
                        <img src={img2} className="img-fluid rounded-3" alt="Gallery_Image_2" />
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-4">
                        <img src={img3} className="img-fluid rounded-3" alt="Gallery_Image_3" />
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-4">
                        <img src={img4} className="img-fluid rounded-3" alt="Gallery_Image_4" />
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-4">
                        <img src={img5} className="img-fluid rounded-3" alt="Gallery_Image_5" />
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-4">
                        <img src={img6} className="img-fluid rounded-3" alt="Gallery_Image_6" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Gallary
