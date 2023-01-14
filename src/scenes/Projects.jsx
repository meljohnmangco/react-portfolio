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
                        transition={{ duration: 0.3 }}
                        variants={{
                            hidden: { opacity: 0, y: -50 },
                            visible: { opacity: 1, y: 0}
                        }}
                    >
                        <h1 className="mb-5">Ventures I crafted during my learning journey</h1>
                    </motion.div>
                </div>
                <div className="row gy-0">                    
                    <motion.div
                        className="col-lg-4 col-md-6 z-index px-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.3 }}
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1}
                        }}
                    >
                        <div className="card h-100 rounded-0 bg-base zoom zoom-line">
                            <img src="./assets/images/team-member-allocation.png" alt="" />
                            <div className="p-3 h-100 d-flex flex-column justify-content-between">
                            <div>
                                <h4>Team Member Allocation App</h4>
                                <p>
                                   A tool that allows a team leader to assign team members to specific teams or projects. It helps the team leader organize and manage their team effectively.
                                </p>
                            </div>  
                            <div className="row">
                                <div className="github d-flex justify-content-start col-6  align-items-center">
                                    <a href="https://github.com/meljohnmangco/TeamMemberAllocation" target="_blank"><i class="lab la-github project-preview"><p>Github</p></i></a>
                                </div>
                                 <div className="github d-flex justify-content-end col-6  align-items-center">
                                    <a href="https://meljohnmangco.github.io/TeamMemberAllocation/" target="_blank"><i class="lar la-eye project-preview"><p>Preview</p></i></a>
                                </div>
                            </div>     
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="col-lg-4 col-md-6 z-index px-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1}
                        }}
                    >
                        <div className="card h-100 rounded-0 bg-base zoom zoom-line">
                            <img src="./assets/images/meals-database.png" alt="" />
                            <div className="p-3 h-100 d-flex flex-column justify-content-between">
                                <div>
                                     <h4>Meals Database</h4>
                                     <p>
                                            An app that allows users to search for information about food. It includes a database of recipes and details about dishes and ingredients. 
                                     </p>
                                </div>
                                <div className="row">
                                    <div className="github d-flex justify-content-start col-6  align-items-center">
                                        <a href="https://github.com/meljohnmangco/meals-database" target="_blank"><i class="lab la-github project-preview"><p>Github</p></i></a>
                                    </div>
                                     <div className="github d-flex justify-content-end col-6  align-items-center">
                                        <a href="https://meljohnmangco.github.io/meals-database/" target="_blank"><i class="lar la-eye project-preview"><p>Preview</p></i></a>
                                    </div>
                                </div>                          
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="col-lg-4 col-md-6 z-index px-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1}
                        }}
                    >
                        <div className="card h-100 rounded-0 bg-base zoom zoom-line">
                            <img src="./assets/images/notes-app.png" alt="" />
                            <div className="p-3 h-100 d-flex flex-column justify-content-between">
                                <div>
                                    <h4>Notes App</h4>
                                    <p>
                                        A notes app with Login Auth, JWT Auth, and Roles & Permissions features ensures secure access to notes, verifies user identity, and limits access to certain features based on user role. Try as Guest, pass: guest
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="github d-flex justify-content-start col-6  align-items-center">
                                        <a href="https://github.com/meljohnmangco/notes-app/tree/master" target="_blank"><i class="lab la-github project-preview"><p>Github</p></i></a>
                                    </div>
                                     <div className="github d-flex justify-content-end col-6  align-items-center">
                                        <a href="https://notes-app-knre.onrender.com/" target="_blank"><i class="lar la-eye project-preview"><p>Preview</p></i></a>
                                    </div>
                                </div>          
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="col-lg-4 col-md-6 z-index px-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1}
                        }}
                    >
                        <div className="card h-100 rounded-0 bg-base zoom zoom-line">
                            <img src="./assets/images/project-1.jpg" alt="" />
                            <div className="p-3 h-100 d-flex flex-column justify-content-between">
                                <div>
                                    <h4>ToDo List App</h4>
                                    <p className="text-justify">
                                        A tool that helps people organize their tasks and schedule
                                        their time more effectively. With a todo list app, users,
                                        set deadlines and reminders, and track their progress.
                                    </p>
                                </div>    

                                <div className="row">
                                    <div className="github d-flex justify-content-start col-6">
                                        <a href="https://github.com/meljohnmangco/todo-app" target="_blank"><i class="lab la-github project-preview"><p>Github</p></i></a>
                                    </div>
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