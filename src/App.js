import React from "react";
import { ReactDOM } from "react";
import Navbar from "./Components/NavBar.js"
import "./style.css"
import About from "./Components/About.js";
import Section from "./Components/Section.js";

const section_data = [
    {
        title: "Games",
        content:"In publishing and graphic design Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia" 
    },
    {
        title: "Sports",
        content:"In publishing and graphic design Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia" 
    },
    {
        title: "Music",
        content:"In publishing and graphic design Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia" 
    },

]

const App = () => {
    return (
        <div>
            <Navbar />
            <About>
                <hr></hr>
            </About>

            {section_data.map((data) => (
                    <Section 
                    title={data.title}
                    content={data.content}
                >
                    <hr></hr>
                </Section>
            ))}
        </div>
    )
}


export default App;