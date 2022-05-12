import { motion } from 'framer-motion'


const animations = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
}

export const AnimatedCard = ({ children }) => {

    return (
        <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1 }}
        >
            { children }
        </motion.div>
    )
}