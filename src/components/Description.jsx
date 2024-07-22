import { motion } from "framer-motion";

function Description() {
  return (
    <motion.p
      nitial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
      whileHover={{ scale: 1.02 }}
      className="m-4 bg-primary flex justify-center text-center"
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta fugiat at
      ab ratione sit accusamus magni perspiciatis deserunt commodi numquam
      repellat inventore explicabo cum quidem rerum, autem laudantium temporibus
      earum.
    </motion.p>
  );
}

export default Description;
