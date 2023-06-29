import React from 'react';
import { motion } from 'framer-motion';

const containerVarients = {
    hidden: {
        opacity: 0,
        x: "100vw"
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            mass: 0.4,//the lower the quicker it moves
            damping: 8,
            // duration: 1,
            delay: 0.5,
            // stiffness: 90,
            when: "beforeChildren",
            staggerChildren: 0.4
        }
    }
}

const childVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

const Order = ({ pizza }) => {
    return (
        <motion.div className="container order"
            variants={containerVarients}
            initial="hidden"
            animate="visible"
        >
            <h2>Thank you for your order :)</h2>
            <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>

            {pizza.toppings.map(topping => (
                <motion.div variants={childVariants} key={topping}>{topping}</motion.div>
            ))}

        </motion.div>
    )
}

export default Order;
