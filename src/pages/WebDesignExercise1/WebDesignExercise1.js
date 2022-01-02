import React from "react";
import "./webdesignexercise1.scss";
import Navbar from "../../components/Navbar/Navbar";
import ColorChanger from "../../components/ColorChanger/ColorChanger";
import Expandable from "../../components/Expandable/Expandable";
import landing_img from "../../assets/bookshare/Landing.png";
import book_view_img from "../../assets/bookshare/Book_View.png";
import book_view_dark_img from "../../assets/bookshare/Book_View_(dark).png";
import main_view_img from "../../assets/bookshare/Main_View.png";
import main_view_dark_img from "../../assets/bookshare/Main_View_(dark).png";
import messaging_view_img from "../../assets/bookshare/Messaging_View.png";
import messaging_view_dark_img from "../../assets/bookshare/Messaging_View_(dark).png";

function WebDesignExercise1() {
    return (
        <ColorChanger>
            <Navbar />
            <div className="landing_body">
                <div className="header_container">
                    <svg className="star_icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144"><rect x="67.2" width="9.6" height="144"/><rect x="67.2" width="9.6" height="144" transform="translate(-26.35 98.35) rotate(-60)"/><rect x="67.2" width="9.6" height="144" transform="translate(98.35 -26.35) rotate(60)"/><circle cx="72" cy="72" r="18.47"/></svg>
                    <h1>Bookshare, a conceptual web design exercise</h1>                      
                    <div className="subcontent_description">Interested in the different ways websites are designed to be adaptable, I wanted to experiment with creating a light and dark mode for a site.
                        Bookshare is conceptual project and design exercise using Figma to mock behavior for a platform used to connect users reading the same books to enable interesting conversation.
                        <br />
                        <br />
                        See the Figma project{" "}
                        <a class="inlineLink" href="https://www.figma.com/file/jpFSBRqgkuUobMRRV4FMEx/Bookshare?node-id=0%3A1">here</a>
                    </div>
                </div>
                <div className="main_container">
                    <Expandable
                        imgaddress={landing_img}
                        description='Landing page of Bookshare site'
                        className={'larger_img'}
                    />
                    <div className="webDesignGrid">
                        <Expandable
                            imgaddress={main_view_img}
                            description='Main view page of Bookshare site'
                            className={'grid_img'}
                        />  
                        <Expandable
                            imgaddress={main_view_dark_img}
                            description='Main view page of Bookshare site'
                            className={'grid_img'}
                        /> 
                        <Expandable
                            imgaddress={book_view_img}
                            description='Book view page of Bookshare site'
                            className={'grid_img'}
                        />  
                        <Expandable
                            imgaddress={book_view_dark_img}
                            description='Book view page of Bookshare site'
                            className={'grid_img'}
                        /> 
                        <Expandable
                            imgaddress={messaging_view_img}
                            description='Messaging view page of Bookshare site'
                            className={'grid_img'}
                        />  
                        <Expandable
                            imgaddress={messaging_view_dark_img}
                            description='Messaging view page of Bookshare site'
                            className={'grid_img'}
                        /> 
                    </div>
                </div>
            </div>
        </ColorChanger>
    );
}

export default WebDesignExercise1;
  