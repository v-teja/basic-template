


const About = (props) => {
    return (
        <div className="about">
            <h1>About Me</h1>
            <p>In publishing and graphic design,
                Lorem ipsum is a placeholder text commonly used to
                demonstrate the visual form of a document or a
                typeface without relying on meaningful content.
                Lorem ipsum may be used as a placeholder before
                final copy is available. Wikipedia</p>
            {props.children}
        </div>
    )
}

export default About;