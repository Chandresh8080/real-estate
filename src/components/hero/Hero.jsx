import React from "react";
import "./Hero.css";
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import {motion} from 'framer-motion'





const Hero = ( ) => {
    return(
        <section className="hero-wrapper">
            <div className="paddings innerWidth hero-container flexCenter">


                <div className="flexColStart hero-left">
                    
                    <div className="hero-title">
                        <div className="orange-circle" />
                        <motion.h1
                        initial={{y:"2rem",opacity: "0"}}
                        animate={{y:0,opacity:1}}
                        transition={{duration:2,type:"spring"}}
                        >
                        <i>Discover </i><br/> Most Suitable <br/> Property
                        </motion.h1>
                    </div>

                    <div className="flexColStart hero-des">
                        <span className="secondaryText">Find a variety of properties that suit you very easilty</span><br/>
                        <span className="secondaryText">Forget all difficulties in finding a residence for you</span>
                    </div>

                    <div className=" flexCenter search-bar">
                        <HiLocationMarker color="var(--blue)" size ={25}/>
                        <input type="text" />
                        <button className="button">Search</button>

                    </div>
                    
                <div className="flexCenter user ">
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <spen><CountUp start={8800} end={9000} duration={4}/>
                            <span>+</span>
                            </spen>
                           <spen className="secondaryText">Premium Product</spen>
                        </div>
                    </div>

                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <spen><CountUp start={1920} end={2000} duration={4}/>
                            <span>+</span>
                            </spen>
                           <spen className="secondaryText">Happy Customer</spen>
                        </div>
                    </div>

                   
                    </div>

                </div>

                <div className="flexCenter hero-right">
                    <motion.div
                    initial={{x:"7rem",opacity: "0"}}
                    animate={{x:0,opacity:1}}
                    transition={{duration:2,type:"spring"}}
                     className="image-container">
                        <img src="./hero-image2.jpg" alt="" />
                    </motion.div>
                </div>
            </div>

        </section>
    )
}

export default Hero;