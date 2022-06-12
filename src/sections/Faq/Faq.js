import React from 'react';
import { useInView } from 'react-intersection-observer';
import floor from '../../images/floor.png';
import femaleFaq from '../../images/femaleFaq.png';
import maleFaq from '../../images/maleFaq.png';
import question from '../../images/question.png';
import { Collapse } from 'antd';
const { Panel } = Collapse;

const Faq = () => {
    const { ref, inView, } = useInView();
    return (
        <section className='container-fluid' ref={ref}>
            <div className="container faqContainer">
                <div className="row">
                    <div className="col-md-6 faqContent">
                        <div className={`faqContentContainer ${inView && 'animate__animated animate__fadeInLeft'}`}>
                            <h5 className={`faqHeader ${inView && ' animate__animated animate__bounce'}`}>{`Frequently Asked Question ${inView}`}</h5>
                            <div className='faqCollapse'>
                                <Collapse accordion expandIconPosition='end'>
                                    <Panel header="How Can I Book A Specialist?" key="1">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper </p>
                                    </Panel>
                                    <Panel header="How can I book an appointment for someone else?" key="2">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper</p>
                                    </Panel>
                                    <Panel header="How can I book an appointment for someone else?" key="3">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper</p>
                                    </Panel>
                                    <Panel header="How can I book an appointment for someone else?" key="4">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper</p>
                                    </Panel>

                                </Collapse>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 faqImage">
                        <div className={`faqImageContainer ${inView && 'animate__animated animate__fadeInRight'}`} >
                            <img src={floor} alt='floor' className='faqFloorImage' />
                            <img src={femaleFaq} alt='femaleFaq' className='femaleFaq animate__animated animate__bounce animate__infinite	infinite' />
                            <img src={question} alt='question' className='faqQuestionImage' />
                            <img src={maleFaq} alt='maleFaq' className='maleFaq' />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq