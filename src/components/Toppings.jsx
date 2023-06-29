import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const containerVarients = {
    hidden: {
        opacity: 0,
        x: "100vw"
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: "spring", duration: 1, delay: 0.5, stiffness: 90 }
    },
    exit: { x: "-100vw", transition: { ease: "easeInOut" } }

}
const Toppings = ({ addTopping, pizza }) => {
    let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

    return (
        <motion.div className="toppings container"
            variants={containerVarients}
            initial="hidden"
            animate="visible"
            exit="exit"
        >

            <h3>Step 2: Choose Toppings</h3>
            <ul>
                {toppings.map(topping => {
                    let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
                    return (
                        <motion.li key={topping} onClick={() => addTopping(topping)}
                            whileHover={{ scale: 1.2, color: "#f8e112", originX: 0 }} //the origin where the animation starts relative to the element
                        >
                            <span className={spanClass}>{topping}</span>
                        </motion.li>
                    )
                })}
            </ul>

            <Link to="/order">
                <button>
                    Order
                </button>
            </Link>

        </motion.div>
    )
}

export default Toppings;