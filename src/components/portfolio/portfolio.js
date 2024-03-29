import React, { useState } from "react";
import "./portfolio.css";
import "animate.css";
//CSS animation library sourced from
//https://animate.style/
import TN100D from "../../assets/TN100D Cover.jpg";
import ArrowButton from "../../assets/Arrow Button.png";
import ArrowButtonFilled from "../../assets/Arrow Button Filled.png";

const Portfolio = () => {
    //Function to handle mouse click - Redirects to Portfolio page
    const handleRedirectPortfolio = () => {
        window.location.href = "./projects";
    };

    const PortfolioShowcase = ({ style, name, description }) => {
        const [isHidden, setIsHidden] = useState(true);

        //When mouse enters the portfolio window
        const handleMouseEnter = () => {
            setIsHidden(false);
        };

        //When mouse leaves the portfolio window
        const handleMouseLeave = () => {
            setIsHidden(true);
        };

        return (
            <div
                className="showcase-wrapper"
                style={style}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                {isHidden ? (
                    <div
                        className="animate__animated animate__fadeIn"
                        key="minimized"
                        style={{ height: "100%", width: "100%" }}>
                        <div className="showcase-portfolio-minimized">
                            <img src={ArrowButton} alt="" id="button-arrow" />
                            <p>{name}</p>
                        </div>
                    </div>
                ) : (
                    <div
                        className="animate__animated animate__fadeIn"
                        key="maximized"
                        style={{ height: "100%", width: "100%" }}>
                        <div className="showcase-portfolio-maximized">
                            <img src={ArrowButtonFilled} alt="" id="button-arrow" />
                            <div className="showcase-portfolio-details">
                                <p className="showcase-portfolio-text-name">{name}</p>
                                <p id="showcase-portfolio-text">{description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="portfolio-comp-wrapper">
            <div className="portfolio-comp-header">
                <div className="portfolio-comp-text">
                    <p>
                        Let's Have a Look at My <span style={{ color: "#BBE8F2" }}>Projects</span>
                    </p>
                </div>
                <button className="button" onClick={handleRedirectPortfolio}>
                    See All
                </button>
            </div>
            <div className="portfolio-comp-header">
                <PortfolioShowcase
                    style={{ backgroundImage: `url("${TN100D}")` }}
                    name="TN100D"
                    description="Placeholder"
                />
                <PortfolioShowcase
                    style={{ backgroundImage: `url("${TN100D}")` }}
                    name="TBD"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                    congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Sed lobortis orci elementum egestas
                                    lobortis."
                />
            </div>
        </div>
    );
};

export default Portfolio;
