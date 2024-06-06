import './MagicWall.css';

import { MagicWallImages } from '../../../Data/MagicWallData';

export const MagicWall = () => {
    return (
        <div id="home-magicwall" className="fake-magicwall">
            <ul>
                {MagicWallImages.map((image, index) => {
                    return (
                        <li id={index}>
                            <div className="magic-wall_item lazyload">
                            <img src={image} alt="image" />
                            <div className="hover-content"></div>
                            <a href="#" className="colorbox"></a>
                        </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}