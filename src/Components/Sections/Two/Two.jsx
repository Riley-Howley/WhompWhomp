import { MagicWall } from './MagicWall';
import './Two.css';
import { ContactButton } from '../../Button/ContactButton';

export const Two = () => {
    return (
        <>
        <section id="section-work">
            <div id="header">
            <h2>My Portfolio</h2>
            </div>
            <div className="text-zone-2">
            <div>
                <p>A small gallery of recent projects chosen by me.
                I've done them all together with amazing people from companies around the globe
                It's only a drop in the ocean compared to the entire list.
                </p>
            </div>
            <ContactButton />
            </div>
            <div className="fake-big-2">
            Work
            </div>
        </section>
        <MagicWall />
        </>
    );
}