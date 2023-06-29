import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const buttonVarients = {
    // visible: {
    //     x: [0, -20, 20, -20, 20, 0], //key frames
    //     transition: { delay: 2 }
    // },
    hover: {
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
        transition: {
            repeat: Infinity, repeatType: "mirror" // accepts 3 values
        }
    }
}
const Home = () => {
    return (
        <motion.div className="home container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 3 }} // the default type of this is asnimation tween, duration can only be used with tween
        >
            <motion.h2 animate={{}}>
                Welcome to Pizza Joint
            </motion.h2>
            <Link to="/base">
                <motion.button
                    variants={buttonVarients}
                    // animate="visible"
                    whileHover="hover"
                >
                    Create Your Pizza
                </motion.button>
            </Link>
        </motion.div>
    )
}

export default Home;