import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ColorChanger from "../../components/ColorChanger/ColorChanger";
import "./photoavgdataviz.scss";
import Expandable from "../../components/Expandable/Expandable";
import full_img from "../../assets/photoavgdataviz/full_img.png";
import all_images_cropped from "../../assets/photoavgdataviz/all_images_cropped.png";
import singlesnap1 from "../../assets/photoavgdataviz/singlesnap1_crop.png";
import singlesnap2 from "../../assets/photoavgdataviz/singlesnap2_crop.png";
import singlesnap3 from "../../assets/photoavgdataviz/singlesnap3_crop.png";

function PhotoAvgDataViz() {
    return (
        <ColorChanger>
            <Navbar />
            <div className="photo_avg_data_viz">
                <div className="header_container">
                    <svg className="star_icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144"><rect x="67.2" width="9.6" height="144"/><rect x="67.2" width="9.6" height="144" transform="translate(-26.35 98.35) rotate(-60)"/><rect x="67.2" width="9.6" height="144" transform="translate(98.35 -26.35) rotate(60)"/><circle cx="72" cy="72" r="18.47"/></svg>
                    <h1>Snapshots of the day</h1>
                </div>
                <div className="container">
                    <img className="phone_frame_image" src={full_img} alt={"grid layout of mostly beige colored squares"} />
                    <div className="main_text">
                        Using a combination of Photoshop and Processing, I documented all the photos 
                        I took over 21 days and found the average color of each photo.
                        <br />
                        <br />
                        I also experimented with alternative forms of representing different aspects 
                        of the photo metadata using Tableau.
                    </div>
                </div>
                <Expandable
                        imgaddress={all_images_cropped}
                        description="compilation of all associated sata visualizations"
                        className={'wide'}
                    />
                <div className="phase_container">
                    <div className="text left">
                        <div className="phase_header">Insights from Day 1, Photo 2</div>
                        <div className="phase_body">
                            Many of the photos taken over this period were in my living room, which has
                            a large amount of neutral brown tones. In particular, I took a large amount of
                            downwards-facing photos of my roommate's cat, Flaco, who is orange and had a strong
                            influence on the color of photos.
                        </div>
                    </div>
                    <Expandable
                        imgaddress={singlesnap1}
                        description="example of a photo and how it was averaged"
                        className={'phase_img right'}
                    />
                    <div className="background_decor left"></div>
                </div>
                <div className="phase_container">
                    <Expandable
                        imgaddress={singlesnap2}
                        description="example of a photo and how it was averaged"
                        className={'phase_img left'}
                    />
                    <div className="text right">
                        <div className="phase_header">Insights from Day 6, Photo 4</div>
                        <div className="phase_body">
                            This is another example of a Flaco-centric photo with primarily
                            warm-toned color values.
                        </div>
                    </div>
                    <div className="background_decor right"></div>
                </div>
                <div className="phase_container">
                    <div className="text left">
                        <div className="phase_header">Insights from Day 6, Photo 5</div>
                        <div className="phase_body">
                            The small sized images are almost all screenshots. Before this project, I didn't know that
                            screenshots were taken at a different resolution than photos taken with the camera, but
                            in retrospect this made sense.
                        </div>
                    </div>
                    <Expandable
                        imgaddress={singlesnap3}
                        description="example of a photo and how it was averaged"
                        className={'phase_img right'}
                    />
                    <div className="background_decor left"></div>
                </div>
            </div>
        </ColorChanger>
    );
}

export default PhotoAvgDataViz;
  