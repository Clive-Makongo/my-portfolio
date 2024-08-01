import { motion } from "framer-motion";
import img from '../assets/images/profile-pic.jpg'

function Description() {
  return (
    <div className="flex flex-row justify-center m-4 text-md h-[50vwh]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, borderColor: ["#C084FC", "#818CF8", "#6366F1", "#C084FC"] }}
        transition={{ duration: 3 }}
        whileHover={{ scale: 1 }}
        className="m-4 bg-primary flex font-bold justify-center font-mono text-center flex-col w-10/12 px-8 py-8 relative before:content-[''] before:absolute before:top-0 before:right-0 before:w-1/4 before:h-1/4 before:border-t-2 before:border-r-2 before:border-purple-800 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/4 after:h-1/4 after:border-b-2 after:border-l-2 after:border-purple-800"
      >
        <p className="mb-6 ">
          Clive Makong'o is a dynamic Front-End Web Developer with emerging experience in Back-End technologies, currently based in London. With a strong foundation in creating responsive and intuitive user interfaces, Clive leverages modern JavaScript frameworks to build engaging web applications.
          
        </p>
        
        <p className="mb-6">

          Clive's technical repertoire spans a wide range of technologies, including ReactJS, HTML5, CSS3 and JavaScript for front-end development, complemented by Java, Python, and Node.js for back-end work. His proficiency essential tools like Git, GitHub, Docker, and Azure DevOps.


          
          

        </p>

        <p className="mb-6">
          Currently working as the sole Front-End Developer at DIFOKO IT Solutions BV, Clive is responsible for the design and implementation of UI/UX elements for a startup project. His role involves seamless integration with back-end teams and collaboration across DevOps, Database Engineering, and Machine Learning departments.

        </p>

        <p className="mb-6">

          Clive is a graduate of the Front End Web Development Boot Camp from edX, where he gained intensive training in a wide array of web technologies.
          
        </p>
      </motion.div>
    </div>
  );
}

export default Description;
