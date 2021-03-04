import React from 'react';


import './Realizations.css';

const Realizations = () => {

  return (
    <div className="realizations__section">
      <div className="section__content">
        <div className="container">
          <h2 id="work" className="realizations__section_title">
            REALIZACJE
          </h2>
          <div className="realizations__section_images">
            <img src="https://static.wixstatic.com/media/617849_d59e3942afe8459eb318e695ba2702b2~mv2.jpg/v1/fill/w_325,h_434,fp_0.50_0.50,q_90/617849_d59e3942afe8459eb318e695ba2702b2~mv2.webp" alt="done_work" width={361} height={482} />
            <img src="https://static.wixstatic.com/media/617849_efa5253b8ff04c4b93f36369f70af08d~mv2.jpg/v1/fill/w_325,h_434,fp_0.50_0.50,q_90/617849_efa5253b8ff04c4b93f36369f70af08d~mv2.webp" alt="done_work" width={361} height={482} />
            <img src="https://static.wixstatic.com/media/617849_e177bdde23874e5dbe4d4c1748de8ddc~mv2.jpeg/v1/fill/w_578,h_434,fp_0.50_0.50,q_90/617849_e177bdde23874e5dbe4d4c1748de8ddc~mv2.webp" alt="done_work" width={361} height={482} />
            <img src="https://static.wixstatic.com/media/617849_55f23599f31f464ea23ffef739676bef~mv2.jpg/v1/fill/w_769,h_434,fp_0.50_0.50,q_90/617849_55f23599f31f464ea23ffef739676bef~mv2.webp" alt="done_work" width={361} height={482} />
          </div>

















          {/* <section className='slider'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {SliderData.map((slide, index) => {
              return (
                <div
                  className={index === current ? 'slide active' : 'slide'}
                  key={index}
                >
                  {index === current && (
                    <img src={slide.image} alt='travel image' className='image' />
                  )}
                </div>
              );
            })}
          </section> */}
        </div>
      </div>
    </div>
  );
};
export default Realizations; 