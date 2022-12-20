import { motion } from "framer-motion";

const About = ({selectedPage}) => {
    return (
        <section id="about" className="full-height px-lg-5">
            <div className="container">
                <motion.div
                    className="row pb-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: -50 },
                        visible: { opacity: 1, y: 0}
                    }}
                >
                    <div className="col-lg-8">
                    <h1 className="mb-3">About Me</h1>
                    </div>
                </motion.div>

                <div className="row gy-5">
                    <motion.div
                        className="col-lg-6 z-index"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0}
                        }}
                    >
                        <h3 className="mb-4" data-aos-delay="300">
                            Education
                        </h3>
                        <div className="row gy-4">
                            <div className="col-12 z-index">
                                <div className="bg-base p-4 zoom zoom-line">
                                    <h4 className="text-light">
                                    Bachelor of Science in Information Technology
                                    </h4>
                                    <p className="heading-2 mb-2">Asian College of Technology</p>
                                    <p className="mb-0">2009 - 2013</p>
                                </div>
                            </div>
                            <div className="col-12 z-index">
                                <div className="bg-base p-4 zoom zoom-line">
                                    <h4 className="text-light">Full Stack Web Development</h4>
                                    <p className="heading-2 mb-2">Zuitt Coding Bootcamp</p>
                                    <p className="mb-0">2022 -2023</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="col-lg-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0}
                        }}
                    >
                        <h3 className="mb-4" data-aos-delay="300">
                        My Skills
                    </h3>
                    <div className="row gy-4">
                        <div
                        className="col-12 z-index"
                    
                        
                        >
                        <div className="bg-base p-4 zoom zoom-line">
                            <h4 className="text-light">Front End Web Development</h4>
                            <p className="heading-2 mb-2">
                            Tools <em>(HTML5, CSS3, Bootstrap)</em>
                            </p>
                            <div className="row">
                            <div className="col-4 text-center">
                                <img
                                src="./assets/images/logo-html5.png"
                                className="tools"
                                alt=""
                                />
                            </div>
                            <div className="col-4 text-center">
                                <img
                                src="./assets/images/logo-css3.png"
                                className="tools"
                                alt=""
                                />
                            </div>
                            <div className="col-4 text-center">
                                <img
                                src="./assets/images/logo-bootstrap.png"
                                className="tools"
                                alt=""
                                />
                            </div>
                            </div>
                        </div>
                        </div>
                        <div
                        className="col-12 z-index"
                    
                        
                        >
                        <div className="bg-base p-4 zoom zoom-line">
                            <h4 className="text-light">BackEnd Web Development</h4>
                            <p className="heading-2 mb-2">
                            Tools
                            <em
                                >(MongoDB, JavaScript, NodeJs, ExpressJS, Postman,
                                Heroku)</em
                            >
                            </p>
                            <div className="row">
                            <div className="col-4 text-center">
                                <img
                                src="./assets/images/logo-mongodb.png"
                                className="tools"
                                alt=""
                                />
                            </div>
                            <div className="col-4 text-center">
                                <img
                                src="./assets/images/logo-javascript.png"
                                className="tools"
                                alt=""
                                />
                            </div>
                            <div className="col-4 text-center">
                                <img
                                src="./assets/images/logo-nodejs.png"
                                className="tools"
                                alt=""
                                />
                            </div>
                            <div className="col-4 text-center">
                                <img
                                src="./assets/images/logo-expressjs.png"
                                className="tools"
                                alt=""
                                />
                            </div>
                            <div className="col-4 text-center">
                                <img
                                src="./assets/images/logo-postman.png"
                                className="tools"
                                alt=""
                                />
                            </div>
                            <div className="col-4 text-center">
                                <img
                                src="./assets/images/logo-heroku.png"
                                className="tools"
                                alt=""
                                />
                            </div>
                            </div>
                        </div>
                        </div>
                        <div
                        className="col-12 z-index">
                        <div className="bg-base p-4 zoom zoom-line">
                            <h4 className="text-light">Full Stack Web Development</h4>
                            <p className="heading-2 mb-2">
                            MERN Stack <em>(MongoDB, ExpressJs, React, NodeJs)</em>
                            </p>
                            <div className="row">
                            <div className="col-3 text-center">
                                <img
                                src="./assets/images/logo-mongodb.png"
                                className="tools"
                                alt=""
                                />
                            </div>
                            <div className="col-3 text-center">
                                <img
                                src="./assets/images/logo-expressjs.png"
                                className="tools"
                                alt=""
                                />
                            </div>
                            <div className="col-3 text-center">
                                <img
                                src="./assets/images/logo-react.png"
                                className="tools"
                                alt=""
                                />
                            </div>
                            <div className="col-3 text-center">
                                <img
                                src="./assets/images/logo-nodejs.png"
                                className="tools"
                                alt=""
                                />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </motion.div>
                    <div >
                    
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;