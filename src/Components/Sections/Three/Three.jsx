import './Three.css';

export const Three = () => {
    const tags = ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL', 'REACT', 'Git', 'GitHub', 'Adobe XD', 'Adobe Photoshop', 'Adobe InDesign', 'Adobe Illustrator'];
    return (
        <section id="section-about">
        <div className="divider">
            <div className="text-zone3">
                <div id="header">
                    <h2>Me, Myself and I</h2>
                </div>
            <p>I am very passionate in web and graphical design. </p>
            <p>Over the last few years I have gained experience in a various spectrum of web technologies. Studying a
                Bachelors Degree of Information Technology at Southern Institute of Technology has helped me gain the knowledge
                and skills to design and create websites. I have also studied papers from the Bachelor of Screen Arts course to
                gain the understanding of advertising and marketing, and how people think and react to visual images.
            </p>
            <p>I am currenly studying my third year of my Bachelors degree and would like to follow a career path towards
                becoming a UX/UI designer along with front-end web development.</p>
            </div>
            <div className="skills-charts">
                <div className="chart">
                    <div>
                        <h2 id='header'>Skills</h2>
                    </div>
                    <div>
                        <ul>
                            {tags.map((tag, index) => {
                                return <li key={index}>{tag}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}