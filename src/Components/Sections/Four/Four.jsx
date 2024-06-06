import './Four.css';

export const Four = () => {
    return (
        <section id="section-blog" className="section-blog">
        <div className="fake-big-2">Blog</div>
        <div className="blog-articles">
          <article className="post-articles" style={{borderTop: '2px solid #81d8f7'}}>
            <div className="post-content">
              <time className="post-date" style={{color: '#81d8f7'}}>Computer Science</time>
              <div className="blog-post-title">
                <h5>
                  <a href="#">Screen Art</a>
                </h5>
              </div>
              <div className="blog-post-content">
                I have studied digital art for the last couple of years. Here is a collection of some of my artwork.
              </div>
            </div>
          </article>

          <article className="post-articles" style={{borderTop: '2px solid #fff900'}}>
            <div className="post-content">
              <time className="post-date" style={{color: '#fff900'}}>Computer Science</time>
              <div className="blog-post-title">
                <h5>
                  <a href="#">Websites</a>
                </h5>
              </div>
              <div className="blog-post-content">
                I have studied in Bachelor of IT and made a couple of websites including this one but would like to add more to my collection.
              </div>
            </div>
          </article>

          <article className="post-articles" style={{borderTop: '2px solid #ff7000'}}>
            <div className="post-content">
              <time className="post-date" style={{color: '#ff7000' }}>Computer Science</time>
              <div className="blog-post-title">
                <h5>
                  <a href="#">UX Design</a>
                </h5>
              </div>
              <div className="blog-post-content">
                I would like to gain more experience in UX design and do a course after my studies to enhance my skills.
              </div>
            </div>
          </article>

          <article className="post-articles" style={{ borderTop: '2px solid #1af79b' }}>
            <div className="post-content">
              <time className="post-date" style={{color: '#1af79b' }}>Computer Science</time>
              <div className="blog-post-title">
                <h5>
                  <a href="#">UI Design</a>
                </h5>
              </div>
              <div className="blog-post-content">
                I would like to gain more experience in UI design and do a course after my studies to enhance my skills.
              </div>
            </div>
          </article>

          <article className="post-articles" style={{borderTop: '2px solid #ccb3ff' }}>
            <div className="post-content">
              <time className="post-date" style={{color: '#ccb3ff' }}>Computer Science</time>
              <div className="blog-post-title">
                <h5>
                  <a href="#">Music Production</a>
                </h5>
              </div>
              <div className="blog-post-content">
                After my studies I would like to study music production as music is an interest of mine.
              </div>
            </div>
          </article>

          <article className="post-articles" style={{ borderTop: '2px solid #f75d81' }}>
            <div className="post-content">
              <time className="post-date" style={{ color: '#f75d81' }}>Computer Science</time>
              <div className="blog-post-title">
                <h5>
                  <a href="#">Contemporary Art</a>
                </h5>
              </div>
              <div className="blog-post-content">
                I have also studied Contemporary art over the last couple of years and enjoy starting new art peices in my free time.
              </div>
            </div>
          </article>
        </div>
      </section>
    );
}