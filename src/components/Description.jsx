import { motion } from "framer-motion";
import img from '../assets/images/profile-pic.jpg'

function Description() {
  return (
    <div className="flex flex-row m-4 h-[50vwh]">
      <div className="w-1/4">
        <img src={img} alt="Photo" className="rounded-full border-2 border-white" />
      </div>
      
      <motion.div
        nitial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        whileHover={{ scale: 1.02 }}
        className="m-4 bg-primary flex font-bold justify-center font-mono text-center flex-col w-3/4"
      >
        <p className="mb-6 pb-5">
        Clive Makong'o is a dynamic Front-End Web Developer with emerging experience in Back-End technologies, currently based in London. With a strong foundation in creating responsive and intuitive user interfaces, Clive leverages modern JavaScript frameworks to build engaging web applications.
          <hr />
        </p>

        <p className="mb-6 pb-5">

        Clive's technical repertoire spans a wide range of technologies, including ReactJS, HTML5, CSS3 and JavaScript for front-end development, complemented by Java, Python, and Node.js for back-end work. His proficiency extends to database management with MySQL, MongoDB, and PostgreSQL, as well as familiarity with essential tools like Git, GitHub, Docker, and Azure DevOps.
        Currently working as the sole Front-End Developer at DIFOKO IT Solutions BV, Clive is responsible for the design and implementation of UI/UX elements for a startup project. His role involves seamless integration with back-end teams and collaboration across DevOps, Database Engineering, and Machine Learning departments.
          <hr />
          
        </p>

        <p className="mb-6 pb-5">

        Clive is a graduate of the Front End Web Development Boot Camp from edX, where he gained intensive training in a wide array of web technologies.
          <hr />
        </p>
      </motion.div>
    </div>
  );
}

export default Description;
