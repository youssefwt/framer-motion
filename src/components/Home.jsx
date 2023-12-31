import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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

const containerVarients = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, duration: 2 } },
    exit: { x: "-100vw", transition: { ease: "easeInOut" } }
}
const Home = () => {
    const [showTitle, setShowTitle] = useState(true)
    setTimeout(() => setShowTitle(false), 3000)
    return (
        <motion.div className="home container"
            variants={containerVarients}
            initial="hidden"
            animate="visible"
            exit="exit"
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ delay: 0.5, duration: 3 }} // the default type of this is animation tween, duration can only be used with tween
        >
            <AnimatePresence>
                {/* {showTitle &&
                    <motion.h2 exit={{ y: "-1000px" }} >
                        Welcome to Pizza Joint
                    </motion.h2>} */}
                <motion.h2 exit={{ y: "-1000px" }} >
                    Welcome to Pizza Joint
                </motion.h2>
            </AnimatePresence>
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