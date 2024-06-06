import './Five.css';

export const Five = () => {
    return (
        <div id="section-contact" className="contact-section">
            <div className="divider-five">
                <form className="contact-form">
                    <div className="contact-heading">
                        <div id="header">
                            <h2>Contact me</h2>
                        </div>
                        <p>I'm interested in work experience and job opportunities especially in front end design and development. If,
                            you have any questions, don't hesitate to use the form.
                        </p>
                    </div>

                    <div className="form-input-wrapper">
                        <div className="form-input-group">
                            <input type="text" placeholder="Name" name="name" />
                            <span></span>
                        </div>
                        <div className="form-input-group">
                            <input type="email" name="email" placeholder="Email" className="email" />
                            <span></span>
                        </div>
                    </div>
                    <div className="form-input-group">
                        <input type="text" name="subject" placeholder="Subject" className="subject" />
                        <span></span>
                    </div>

                    <div className="form-input-group">
                        <textarea type="text" placeholder="Message" className="textarea" name="message"></textarea>
                        <span></span>
                    </div>
                    <div className="message">
                    </div>
                    <button type="submit" className="contact-button submit-button">
                        <div>
                            <span className="bg"></span>
                            <span className="base"></span>
                            <span className="text">Send Message!</span>
                        </div>
                    </button>
                </form>

                <div className="google-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2370416.930166358!2d169.41862392890505!3d-45.27184425607006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snz!4v1708294814550!5m2!1sen!2snz"
                        style={{ border: '0' }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>

                    <div className="map-content">
                        <p>Nicola Sharratt</p>
                        <span>Invercargill, New Zealand
                        </span>
                        <br />
                        <span>@: nsharratt12@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
}