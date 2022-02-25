import Navbar from "../../Components/Navbar";

const Projects = () => {
    const projects = ["To do List", "Project2", "Project3"];


    return (
        <section>
            <Navbar items={projects} />
        </section>
    );
}

export default Projects;