import './One.css';
import { ContactButton } from '../../Button/ContactButton';

export const One = () => {
    return (
        <section id="section-home" className="section home">
            <div className="text-zone">
                <h1>Hi, <br /> I'm   
                    Nicola,<br /> web developer
                </h1>
                <p className="gray-text">Front End Developer / Full-Time Student</p>
                <br />
                <ContactButton />
            </div>

            <div className="scroll-down">
                <span>scroll down</span>
                <i className="fas fa-arrow-down"></i>
            </div>

            <div className="scroll-down scroll-down--left">
                <span>scroll down</span>
                <i className="fas fa-arrow-down"></i>
            </div>
        </section>
    );
}