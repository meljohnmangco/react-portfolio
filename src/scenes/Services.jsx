import { motion } from "framer-motion";


const Services = ({setSelectedPage}) => {
    return (
        <section id="services" className="full-height px-lg-5">
            <div className="container">
                <div className="row pb-4">
                    <div className="col-lg-8">
                    <h1 className="mb-5">Services That I Provide</h1>
                    </div>
                </div>
                <div className="row gy-4">
                    <motion.div
                        className="col-md-6 col-lg-4 z-index"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0}
                        }}
                    >
                        <div class="service p-4 bg-base zoom zoom-line">
                            <div class="iconbox rounded-3">
                            <i class="lab la-react"></i>
                            </div>
                            <h5 class="mt-4 mb-2">React.js Development</h5>
                            <p class="cutoff-lines">
                            I specialize in React.js Development, providing high-quality services for web application development using the React.js framework. I can help bring your web project to life with intuitive and reactive user interfaces that deliver a seamless user experience. Whether you need a simple single-page application or a complex, data-intensive platform, my React.js Development services can help make your project a success. Contact me today to learn more about how my expertise in React.js can benefit your business.
                            </p>
                            <input type="checkbox" class="expand-btn" />                
                        </div>
                    </motion.div>
                    <motion.div
                        className="col-md-6 col-lg-4 z-index"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0}
                        }}
                    >
                        <div className="service p-4 bg-base zoom zoom-line">
                            <div className="iconbox rounded-3">
                            <i className="las la-store"></i>
                            </div>
                            <h5 className="mt-4 mb-2">E-Commerce Development</h5>
                            <p className="cutoff-lines">
                            I offer expert E-commerce Development services to help businesses succeed in the online marketplace. I have the knowledge and skills to create custom online stores and shopping platforms that are optimized for sales and conversions. I can help with every aspect of e-commerce development, from product catalogs and checkout processes to payment gateways and shipping integrations. With my focus on clean, efficient code and user-friendly design, I can ensure that your e-commerce website is easy to use and maintain. Contact me today to learn more about how my e-commerce development services can help your business grow.
                            </p>
                            <input type="checkbox" className="expand-btn" />
                        </div>
                    </motion.div>
                    <motion.div
                        className="col-md-6 col-lg-4 z-index"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0}
                        }}
                    >
                        <div class="service p-4 bg-base zoom zoom-line">
                            <div class="iconbox rounded-3">
                            <i class="las la-pencil-alt"></i>
                            </div>
                            <h5 class="mt-4 mb-2">Responsive Web Design</h5>
                            <p class="cutoff-lines">
                            I specialize in Responsive Web Design, providing tailored solutions that ensure your website looks great and functions seamlessly on any device. I have the skills and expertise to create responsive websites that are optimized for mobile, tablet, and desktop environments. With my responsive design approach, I can help your website adapt to different screen sizes and resolutions, delivering a consistent and user-friendly experience for your visitors. Contact me today to learn more about how our responsive web design services can benefit your business.
                            </p>
                            <input type="checkbox" class="expand-btn" />                
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Services;