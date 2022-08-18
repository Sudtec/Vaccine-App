import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import ReviewersImg from '../../images/ReviewersImg.png';
const Review = () => {
    return (
        <section className="container-fluid review" id='review'>
            <div className="reviewContainer container">
                <div className="reviewContent">
                    <h5 className="reviewTitle">What Our Customers Have to Say</h5>
                    <p className="reviewDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum</p>
                </div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='reviewContainer'>
                            <div className='reviwersProfileContainer'>
                                <img src={ReviewersImg} className='ReviewersImg' alt='Reviewers' />
                                <div className='reviewersProfile'>
                                    <h5 className='reviewersName'>Halimat Bakare1</h5>
                                    <label className='reviewersPosition'>Product Designer</label>
                                </div>
                            </div>
                            <div className='reviews'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='reviewContainer'>
                            <div className='reviwersProfileContainer'>
                                <img src={ReviewersImg} className='ReviewersImg' alt='Reviewers' />
                                <div className='reviewersProfile'>
                                    <h5 className='reviewersName'>Halimat Bakare2</h5>
                                    <label className='reviewersPosition'>Product Designer</label>
                                </div>
                            </div>
                            <div className='reviews'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='reviewContainer'>
                            <div className='reviwersProfileContainer'>
                                <img src={ReviewersImg} className='ReviewersImg' alt='Reviewers' />
                                <div className='reviewersProfile'>
                                    <h5 className='reviewersName'>Halimat Bakare3</h5>
                                    <label className='reviewersPosition'>Product Designer</label>
                                </div>
                            </div>
                            <div className='reviews'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='reviewContainer'>
                            <div className='reviwersProfileContainer'>
                                <img src={ReviewersImg} className='ReviewersImg' alt='Reviewers' />
                                <div className='reviewersProfile'>
                                    <h5 className='reviewersName'>Halimat Bakare</h5>
                                    <label className='reviewersPosition'>Product Designer</label>
                                </div>
                            </div>
                            <div className='reviews'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='reviewContainer'>
                            <div className='reviwersProfileContainer'>
                                <img src={ReviewersImg} className='ReviewersImg' alt='Reviewers' />
                                <div className='reviewersProfile'>
                                    <h5 className='reviewersName'>Halimat Bakare</h5>
                                    <label className='reviewersPosition'>Product Designer</label>
                                </div>
                            </div>
                            <div className='reviews'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='reviewContainer'>
                            <div className='reviwersProfileContainer'>
                                <img src={ReviewersImg} className='ReviewersImg' alt='Reviewers' />
                                <div className='reviewersProfile'>
                                    <h5 className='reviewersName'>Halimat Bakare</h5>
                                    <label className='reviewersPosition'>Product Designer</label>
                                </div>
                            </div>
                            <div className='reviews'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='reviewContainer'>
                            <div className='reviwersProfileContainer'>
                                <img src={ReviewersImg} className='ReviewersImg' alt='Reviewers' />
                                <div className='reviewersProfile'>
                                    <h5 className='reviewersName'>Halimat Bakare</h5>
                                    <label className='reviewersPosition'>Product Designer</label>
                                </div>
                            </div>
                            <div className='reviews'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum</div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    )
}

export default Review