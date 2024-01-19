import elizaveta from '../assets/images/elizaveta.png';
import kirill from '../assets/images/kirill.png';
import svetlana from '../assets/images/svetlana.png';

const GITHUB_USERS = ['climbingirl', 'kotangenss', 'KirillVM'];
const DEVELOPERS = {
  en: [
    {
      id: 1,
      name: 'Elizaveta Novikova',
      biography:
        'Elizaveta is a beginner front-end developer. She has a higher pedagogical education. In her free time, Elizaveta enjoys reading creepy psychological thrillers and detective stories. Her friends introduced her to the field of front-end development. She gained education and experience in this field through the RS School program. In front-end development, she values ​​being able to control the details of the development process and having immediate visibility into the results of her work.',
      contribution:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      github: 'kotangenss',
      roles: ['developer', 'designer'],
      image: elizaveta,
    },
    {
      id: 2,
      name: 'Kirill Mezentsev',
      biography:
        'Kirill works as an engineer at a factory and teaches his colleagues about manufacturing processes. One day, Kirill learned about RS School courses in frontend development and decided that it was exactly what he needed. He began studying JavaScript in his spare time after long working days. His work on integrating commerce tools with the project became a crucial component of the project.',
      contribution:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      github: 'kirillvm',
      roles: ['developer'],
      image: kirill,
    },
    {
      id: 3,
      name: 'Svetlana Ivanova',
      biography:
        'Svetlana, 31 years old. Graduated from O.E. Kutafin Moscow State Law Academy and worked as a lawyer in the structure of the Federal Treasury of the Russian Federation. For the past few years she has been living in Thailand and working as a real estate agent. In order to learn front-end development, she completed the JavaScript/Front-end course from The Rolling Scopes community and keep studying in React course. She’s into beach volleyball, speleology, hiking, and loves traveling. Currently, devotes most of her free time to learning development and wants to become a professional in this field.',
      contribution:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      github: 'climbingirl',
      roles: ['developer'],
      image: svetlana,
    },
  ],

  ru: [
    {
      id: 1,
      name: 'Elizaveta Novikova',
      biography:
        'Elizaveta is a beginner front-end developer. She has a higher pedagogical education. In her free time, Elizaveta enjoys reading creepy psychological thrillers and detective stories. Her friends introduced her to the field of front-end development. She gained education and experience in this field through the RS School program. In front-end development, she values ​​being able to control the details of the development process and having immediate visibility into the results of her work.',
      contribution:
        'Elizaveta made a significant contribution to the project, saving time for other developers. She developed the layouts, providing a ready-made basis for our work. In addition, she took on the layout of the footer, 404 and welcome pages; she made them responsive and wrote tests for them. She also wrote tests for some other components, such as the header and others. Another resolved task has started implementing lazy loading documentation. This developer has configured to support prettifying. She also created and updated the README.md file, which made the application description clear and informative. Her active participation and suggestions during team meetings improved the project.',
      github: 'kotangenss',
      roles: ['developer', 'designer'],
      image: elizaveta,
    },
    {
      id: 2,
      name: 'Kirill Mezentsev',
      biography:
        'Kirill works as an engineer at a factory and teaches his colleagues about manufacturing processes. One day, Kirill learned about RS School courses in frontend development and decided that it was exactly what he needed. He began studying JavaScript in his spare time after long working days. His work on integrating commerce tools with the project became a crucial component of the project.',
      contribution:
        'Kirill successfully organized work with the project, creating a repository and completely setting up the necessary environment and dependencies. In addition, he ensured ease of development by introducing variables, adding normalize, and carefully customizing global styles. This ensured that the team collaborated effectively and the work progressed smoothly. Kirill took full responsibility for interacting with Firebase. He successfully set up authentication and created the login and registration pages. In addition, he implemented functionality for changing the language, which significantly expanded the possibilities of using the application for users with different language preferences. In addition to his technical skill, Kirill actively participated in teamwork, providing support to his colleagues.',
      github: 'kirillvm',
      roles: ['developer'],
      image: kirill,
    },
    {
      id: 3,
      name: 'Svetlana Ivanova',
      biography:
        'Svetlana, 31 years old. Graduated from O.E. Kutafin Moscow State Law Academy and worked as a lawyer in the structure of the Federal Treasury of the Russian Federation. For the past few years she has been living in Thailand and working as a real estate agent. In order to learn front-end development, she completed the JavaScript/Front-end course from The Rolling Scopes community and keep studying in React course. She’s into beach volleyball, speleology, hiking, and loves traveling. Currently, devotes most of her free time to learning development and wants to become a professional in this field.',
      contribution:
        "Svetlana configured the application's routing, including private routes, providing secure access to the relevant sections. She also configured Redux Toolkit to manage application state and integrated Axios for efficient HTTP requests.In addition, she implemented request and response editors, header and variable sections, providing ample opportunities for customizing requests, not forgetting the responsive layout of each section.Svetlana created a sticky header, which made the user interface more convenient and aesthetically pleasing.Additionally, it integrated an input field into the editor page, providing the ability to navigate to another API endpoint specified by the user.Her enthusiasm during team meetings always contributed to the progress of this project, making Svetlana a truly outstanding member of our team.",
      github: 'climbingirl',
      roles: ['developer'],
      image: svetlana,
    },
  ],
};

export { GITHUB_USERS, DEVELOPERS };
