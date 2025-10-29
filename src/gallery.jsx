import fuelFit from './assets/images/fuel-fit-screenshot.png'
import moodApp from './assets/images/moodapp-screenshot.png'
import weather from './assets/images/weather-dash-screenshot.png'
import consultUs from './assets/images/consult-us-screenshot.PNG'
import schedule from './assets/images/work-day-sched-screenshot.jpeg'
import password from './assets/images/password-gen-screenshot.png'
import phys from './assets/images/phys-screenshot.PNG'
import travel from './assets/images/travelling-screenshot.PNG'

const PROJECTS = [
  {
    "id": 0,
    "title": "Fuel Fit",
    "link": "https://fuel-fit-two.vercel.app/",
    "image": fuelFit,
    "description": "A website to help simplify fitness. It consists of a meal planner with calorie and diet-type features, to ensure it is inclusive to dietary requirements. It also has a workout planner to help you plan your fitness. And last but not least, a self-care page, where you can input a skincare routine and see helpful stretching videos. I was responsible for the entire meal plan page, including structuring the APIs"
  },
  {
    "id": 1,
    "title": "Mood App",
    "link": "https://angelica-zach.github.io/Mood-App/",
    "image": moodApp,
    "description": "MoodMatch is a web application that helps users discover music playlists based on their mood, provides information about venues related to the artists in the playlist, and suggests activities in the area. The mood is picked from a carousel of possible mood cards, and is then linked to a spotify API to match this to music. This then links to BandsInTown API to show events for this artist"
  },
  {
    "id": 2,
    "title": "Weather Dashboard",
    "link": "https://clive-makongo.github.io/weatherDashboard/",
    "image": weather,
    "description": "A dashboard which allows you to see the weather in any city, including a future five day forcast"
  },
  {
    "id": 3,
    "title": "ConsultUs Global",
    "link": "https://consultus.com.tr/",
    "image": consultUs,
    "description": "A website built for a Turkish Engineering firm"
  },
  {
    "id": 4,
    "title": "Day Planner",
    "link": "https://clive-makongo.github.io/dayPlanner/",
    "image": schedule,
    "description": "A website used to schedule your daily work calander by the hour"
  },
  {
    "id": 5,
    "title": "Password Generator",
    "link": "https://clive-makongo.github.io/passwordGen/",
    "image": password,
    "description": "This programme creates a random password of various lengths and characteristics based on chosen elements by the user."
  },
  {
    "id": 6,
    "title": "Physics Engine",
    "link": "https://clive-makongo.github.io/physEng/",
    "image": phys,
    "description": "A personal project I built utilising vector calculus to build a physics Engine."
  },
  {
    "id": 7,
    "title": "Travelling Salesman",
    "link": "https://clive-makongo.github.io/TravellingSalesman/",
    "image": travel,
    "description": "My ongoing attempt at the travelling salesman problem"
  }
]

export default PROJECTS