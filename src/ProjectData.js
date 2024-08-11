import Nikecommercesite from "./Images/NikeCommerceSite.png";
import Astergameimage from "./Images/AsterGameImage.png";
import Littlelemonimage from "./Images/LittleLemonSite.png";


const data = () => {
    return(
        [
            {
            projectTitle: "NikeCommerceSite",
            projectImage: Nikecommercesite,
            projectDescription: "This E-commerce web application for a Nike shoe store showcases a dynamic, responsive design built with React and Chakra UI. It features product listings with category and price filters, a fully functional shopping cart, wishlist management, and a search function. The project demonstrates a strong command of modern web development practices, including the use of React hooks like useState for managing component state and useContext for global state management, ensuring a seamless and interactive user experience across all devices. ",
            projectLink: "https://nikecommercesite.netlify.app/",
            githubLink: "https://github.com/moehim123/react-nike-ecommerce-application",
            FigmaLink: "https://www.figma.com/design/Cc5RWjQjMyHAALZ6D6yDva/Ecommerce-Project-1?node-id=0-1&t=gOxcXTUT1ywiiWwT-1"
            },
            {
            projectTitle: " LittleLemonSite",
            projectImage: Littlelemonimage,
            projectDescription: "This project is a comprehensive restaurant booking application built with React, Tailwind CSS, and various modern web technologies. It allows users to explore the restaurant's offerings, view testimonials, and make table reservations. The application includes features like dynamic time slot availability based on selected dates, form validation with Formik and Yup, and state management using React hooks such as useReducer, useState, and useEffect. The app is fully responsive and optimized for performance, providing a smooth user experience across different devices. ",
            projectLink: "https://littlelemonbook.netlify.app/",
            githubLink: "https://github.com/moehim123/reservation-app",
            FigmaLink: "https://www.figma.com/design/mJXWUAKSXtI1vjUxF6W0No/Reservation-food-app?node-id=0-1&t=lFkvSHyiwTeykw4M-1"
            },
            {projectTitle: "Astergame",
            projectImage: Astergameimage,
            projectDescription: "This project is an asteroid shooting game built with JavaScript, HTML, and CSS. Players control a spaceship using the mouse to move left and right, shooting down asteroids that fall from the top of the screen. The game becomes more challenging as asteroid speed and frequency increase. If an asteroid hits the spaceship, the game ends with a 'Game Over' message. The game effectively combines JavaScript for logic, HTML for structure, and CSS for styling to create a smooth, interactive experience. ",
            projectLink: "https://astergame.netlify.app/",
            githubLink: "https://github.com/moehim123/Asteroid-Game",
            FigmaLink: "https://www.figma.com/design/5TELlOH4X78ysCD2JpSnTl/Astergame?node-id=0-1&t=TYCLPIV19Lz2ROv6-1"
            }
        ]
    );
};

export default data;