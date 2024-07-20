import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <>
            <nav>
                <motion.ul className="flex flex-row justify-evenly my-2">
                    <motion.li
                        whileHover={{ scale: 1.2 }} // Adjusted scale value
                        href="/"
                        className="m-4 font-semibold "
                    >
                     Item
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.2 }} // Adjusted scale value
                        href="/"
                        className="m-4 font-semibold "
                    >
                        Item
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.2 }} // Adjusted scale value
                        href="/"
                        className="m-4 font-semibold "
                    >
                        Item
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.2 }} // Adjusted scale value
                        href="/"
                        className="m-4 font-semibold "
                    >
                        Item
                    </motion.li>
                   
                </motion.ul>
            </nav>
        </>
    );
}
