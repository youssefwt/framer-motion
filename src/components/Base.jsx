import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Base = ({ addBase, pizza }) => {
    const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

    return (
        <motion.div className="base container"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 1, delay: 0.5, stiffness: 90 }}
        >

            <h3>Step 1: Choose Your Base</h3>
            <ul>
                {bases.map(base => {
                    let spanClass = pizza.base === base ? 'active' : '';
                    return (
                        <motion.li key={base} onClick={() => addBase(base)}
                            whileHover={{ scale: 1.2, color: "#f8e112", originX: 0 }} //the origin where the animation starts relative to the element
                        >
                            <span className={spanClass}>{base}</span>
                        </motion.li>
                    )
                })}
            </ul>

            {pizza.base && (
                <motion.div className="next"
                    initial={{ x: "-100vw" }}
                    animate={{ x: 0 }}
                    transition={{ type: "spring", stiffness: 120 }}
                >
                    <Link to="/toppings">
                        <button>Next</button>
                    </Link>
                </motion.div>
            )}

        </motion.div>
    )
}

export default Base;