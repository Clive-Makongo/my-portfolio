import { motion } from "framer-motion";
import img from '../assets/images/profile-pic.jpg'

function Description() {
  return (
    <div className="flex flex-row m-4">
      <div className="w-2/5 ">
        <img src={img} alt="" className="border rounded-full" />
      </div>
      <motion.p
        nitial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        whileHover={{ scale: 1.02 }}
        className="m-4 bg-primary flex font-bold justify-center text-center flex-col w-3/5"
      >
        Clive Makong'o is a dynamic Front-End Web Developer with emerging experience in Back-End technologies, currently based in London. With a strong foundation in creating responsive and intuitive user interfaces, Clive leverages modern JavaScript frameworks to build engaging web applications.
        <hr />

        Clive's technical repertoire spans a wide range of technologies, including ReactJS, HTML5, CSS3, JavaScript, and TypeScript for front-end development, complemented by Java, Python, and Node.js for back-end work. His proficiency extends to database management with MySQL, MongoDB, and PostgreSQL, as well as familiarity with essential tools like Git, GitHub, Docker, and Azure DevOps.
        Currently working as the sole Front-End Developer at DIFOKO IT Solutions BV, Clive is responsible for the design and implementation of UI/UX elements for a startup project. His role involves seamless integration with back-end teams and collaboration across DevOps, Database Engineering, and Machine Learning departments.
        <hr />

        Clive's professional journey includes experience in customer-focused roles at NationWide Building Society and BT Group, where he honed his problem-solving and communication skills. His ability to work effectively in team environments and manage complex projects is evident from his contributions to various web development projects, including the ConsultUs Website, a Wellness App, and a Mood App.
        With a passion for continuous learning, Clive's interests extend beyond web development into Computer Science, Mathematics, Physics, and Philosophy. This multidisciplinary approach allows him to bring unique perspectives and innovative solutions to his work.
        <hr />

        Clive is a graduate of the Front End Web Development Boot Camp from edX, where he gained intensive training in a wide array of web technologies. His educational background also includes strong performances in A-Levels and GCSEs, particularly excelling in Mathematics and Sciences.
        <hr />

        As a developer who combines technical expertise with a customer-centric approach, Clive is well-positioned to contribute to challenging projects that require both creative and analytical thinking.
      </motion.p>
    </div>
  );
}

export default Description;
