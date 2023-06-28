import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
                <motion.button animate={{}}>
                    Create Your Pizza
                </motion.button>
            </Link>
        </motion.div>
    )
}

export default Home;