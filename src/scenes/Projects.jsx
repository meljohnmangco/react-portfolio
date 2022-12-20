import { motion } from "framer-motion";

const Projects = ({setSelectedPage}) => {
    return (
        <section id="projects" className="full-height px-lg-5">
            <div className="container">
                <div>
                    <motion.div
                        className="col-lg-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: -50 },
                            visible: { opacity: 1, y: 0}
                        }}
                    >
                        <h1 className="mb-5">My Projects</h1>
                    </motion.div>
                </div>
                <div className="row gy-4">
                    <motion.div
                        className="col-lg-4 col-md-6 z-index"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.4 }}
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1}
                        }}
                    >
                        <div className="card-custom">
                            <div className="card-custom-image bg-base zoom zoom-line">
                                <img src="./assets/images/project-1.jpg" alt="" />
                                <div className="card-custom-content p-4 bg">
                                <h4>ToDo List App</h4>
                                <p>
                                    A tool that helps people organize their tasks and schedule
                                    their time more effectively. With a todo list app, users,
                                    set deadlines and reminders, and track their progress.
                                </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="col-lg-4 col-md-6 z-index"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1}
                        }}
                    >
                        <div className="card-custom">
                            <div className="card-custom-image bg-base zoom zoom-line">
                                <img src="./assets/images/project-2.png" alt="" />
                                <div className="card-custom-content p-4 bg">
                                <h4>ToDo List App</h4>
                                <p>
                                    A tool that helps people organize their tasks and schedule
                                    their time more effectively. With a todo list app, users,
                                    set deadlines and reminders, and track their progress.
                                </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="col-lg-4 col-md-6 z-index"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1}
                        }}
                    >
                        <div className="card-custom">
                            <div className="card-custom-image bg-base zoom zoom-line">
                                <img src="./assets/images/project-3.png" alt="" />
                                <div className="card-custom-content p-4 bg">
                                <h4>ToDo List App</h4>
                                <p>
                                    A tool that helps people organize their tasks and schedule
                                    their time more effectively. With a todo list app, users,
                                    set deadlines and reminders, and track their progress.
                                </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="col-lg-4 col-md-6 z-index"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1}
                        }}
                    >
                        <div className="card-custom">
                            <div className="card-custom-image bg-base zoom zoom-line">
                                <img src="./assets/images/project-4.png" alt="" />
                                <div className="card-custom-content p-4 bg">
                                <h4>ToDo List App</h4>
                                <p>
                                    A tool that helps people organize their tasks and schedule
                                    their time more effectively. With a todo list app, users,
                                    set deadlines and reminders, and track their progress.
                                </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Projects;