import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({setSelectedPage}) => {
    
    return (
        <section id="home" className="full-height px-lg-5 background">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0}
                            }}
                        >
                            <h1 className="display-5 fw-bold heading">
                                Meljohn Mangco
                            </h1>                                               
                            <p className="lead mt-3 mb-5">
                                As an aspiring web developer, I am driven by my passion for coding and creating functional websites. I am always looking for ways to improve my skills and make a meaningful impact in the industry. In my previous projects, I have gained experience in building websites and developing applications, and I am constantly exploring new technologies to push the boundaries of what is possible on the web. I am excited to bring my dedication and enthusiasm to a company that shares my values and will allow me to continue growing as a developer.
                            </p>
                        </motion.div>    

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0}
                            }}
                        >        
                                                
                            <div>
                                <AnchorLink
                                    className="me-4 neon-button"
                                    onClick={() => setSelectedPage("projects")}
                                    href="#projects"
                                >
                                    Explore My Work
                                </AnchorLink>
                                <AnchorLink
                                    className="link-custom"
                                    onClick={() => setSelectedPage("projects")}
                                    href="#contact"
                                >
                                    CONTACT ME
                                </AnchorLink>
                            </div>
                        </motion.div> 
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Landing;