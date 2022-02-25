import "./Skills.css"

const Skills = () => {
    const images = {
        html: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
        css: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
        javascript: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
        react: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
    };

    const showImages = (images) => {
        const result = [];
        for (const key in images) {
            result.push(<img className="skill" key={key} src={images[key]} alt="" />);
        }

        return result;
    }

    const skills = showImages(images);

    return (
        <section id="skills">
            {skills}
        </section>
    );
}

export default Skills;