import elizaveta from '../assets/images/elizaveta.png';
import kirill from '../assets/images/kirill.png';
import svetlana from '../assets/images/svetlana.png';

export const localization = {
  en: {
    welcomePage: {
      headerWelcomePage: `Welcome Page`,
      headerOurTeam: `Our team`,
    },

    aboutProject: {
      header: 'About project',
      taskLink: 'assignment',
      paragraphs: [
        `This project is the final`,

        `for Rolling Scopes School's React course`,

        `The GraphiQL application is a GraphQL playground/IDE. It includes
        authorization using Firebase for email/password sign-in, client-side
        validation, and redirects upon successful login. The app doesn't
        require a backend, supporting any open GraphQL API with CORS.`,

        `The structure consists of a welcome page, a sticky header with animated
        changes, and a persistent footer. The main page (GraphiQL) is a private
        route with sections for query editing, variables, headers,
        documentation, and a read-only response area. Users can switch GraphQL
        endpoints with the «Change Endpoint» button.`,

        `Project include at least 80% test coverage, ESLint, Prettier, and Husky
        hooks.`,

        `Design-wise, the app prioritizes attention to detail, adaptive layout,
        interactivity, and a unified style. App handles API errors in a
        user-friendly format and implements localization at two languages
        (Russian and English).`,
      ],
    },

    educationalProgram: {
      header: 'Our educational program',
      paragraphs: [
        `RS School is an educational program organized by The Rolling Scopes
        developer community since 2013. The core idea of RS School is that
        education should be accessible to everyone, regardless of age,
        professional status, or place of residence. In RS School, education is
        entirely free of charge. The main instructors and trainers are
        experienced front-end and JavaScript developers from various parts of
        the world and different companies. They are ready to share their
        knowledge and expertise, helping students explore the world of web
        development.`,

        `The principle of RS School is «Openness and Passing Knowledge
        Forward». All educational materials and the program's platform
        are publicly available on GitHub and YouTube. What's particularly
        important is RS School students who have received free education are
        invited to return in the future as mentors to pass on their knowledge
        to the next generation of students.`,

        `RS School offers a variety of courses, including JavaScript, front-end
        development, as well as React courses. These courses are available
        online, making learning highly flexible and convenient for all who are
        interested. Join RS School and dive into the world of web development,
        where education is a powerful tool for self-improvement and a
        successful career.`,
      ],
    },

    developerCard: {
      headerBiography: `Biography:`,
      headerContribution: `Contribution:`,
      headerGithub: `Github:`,
      showDetailsButton: 'Show details',
      hideDetailsButton: 'Hide details',
    },

    developers: [
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
          'Kirill, 32 years old. Graduated from Lobachevsky State University of Nizhni Novgorod, Faculty of Physics. He works as a process engineer at a factory about 8 years and teaches his colleagues about manufacturing processes. All his life he was haunted by the idea of ​​becoming a developer. One day, Kirill learned about RS School courses in frontend development and decided that it was exactly what he needed. He began studying JavaScript in his spare time after long working days, and it was getting him into more and more. Currently, he is going to complete RS School React Course and wants to become a professional developer.',
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
        contribution: `Svetlana configured the application's routing, including private routes, providing secure access to the relevant sections. She also configured Redux Toolkit to manage application state and integrated Axios for efficient HTTP requests. In addition, she implemented request and response editors, header and variable sections, providing ample opportunities for customizing requests, not forgetting the responsive layout of each section. Svetlana created a sticky header, which made the user interface more convenient and aesthetically pleasing. Additionally, it integrated an input field into the editor page, providing the ability to navigate to another API endpoint specified by the user. Her enthusiasm during team meetings always contributed to the progress of this project, making Svetlana a truly outstanding member of our team.`,
        github: 'climbingirl',
        roles: ['developer'],
        image: svetlana,
      },
    ],

    sign: {
      out: 'Sign Out',
      in: 'Sign In',
      up: 'Sign Up',
    },

    headerLinks: {
      '/': 'GraphiQL',
      graphiql: 'Welcome page',
    },

    toastMessages: {
      successSignIn: 'You succsessfuly sign in!',
      invalidEndpoint: 'The endpoint is invalind',
      successSignOut: 'You succsessfuly sign out!',
      errorSignOut: 'Sign out error:',
    },

    notFoundPage: {
      message: 'There are no playground for graphQL requests here',
      linkToWelcome: 'Go to welcome page',
    },

    account: {
      have: `Have an account? `,
      notHave: `Don't have an account? `,
    },

    form: {
      emailLabel: 'Email',
      passwordLabel: 'Password',
      confirmPasswordLabel: 'Confirm password',
      submitButton: 'Submit',
    },

    validationErrorMessage: {
      requered: 'Field is requered',
      email: 'Incorrect email',
      oneLowercaseChar: 'Should contain at least one lowercase character',
      oneUppercaseChar: 'Should contain at least one uppercase character',
      oneNumber: 'Should contain at least one number',
      oneSpecialChar: 'Should contain at least one special character',
      shortPassword: 'Your password too short',
      confirmPassword: `You password don't match`,
    },

    grahpiql: {
      docs: 'DOCS',
      editorPlaceholder: '# Welcome to GraphiQL',
    },

    documentationSchema: {
      docs: 'Docs',
      noDescription: 'No description',
      rootTypesTitle: 'Root Types',
      allTypesTitle: 'All Schema Types',
      implementsTitle: 'Implements',
      enumValuesTitle: 'Enum Values',
      fieldsTitle: 'Fields',
      implementationsTitle: 'Implementations',
    },

    apiInput: {
      yourEndpoint: 'Your Endpoint',
      sendButtonText: 'Send',
    },

    requestToolbar: {
      sections: ['variables', 'headers'],
    },

    errorBoundary: {
      header: 'SOMETHING WENT WRONG',
      reloadButtonText: 'Reload Page',
    },

    firebaseErrors: {
      'auth/user-not-found': `User doesn't exist`,
      'auth/internal-error': 'Internal error on server',
      'auth/email-already-exists': 'This email already exist',
      'auth/invalid-credential': 'Invalid user Credentials',
      'auth/invalid-email': 'Invalid user Email',
      'auth/invalid-password': 'Invalid user Password',
      'auth/network-request-failed':
        'There are some problems with the internet connection',
      'auth/email-already-in-use': 'User with this email already exists',
    },
  },

  ru: {
    welcomePage: {
      headerWelcomePage: `Добро пожаловать`,
      headerOurTeam: `Наша команда`,
    },

    aboutProject: {
      header: 'О проекте',
      taskLink: 'заданием',
      paragraphs: [
        `Этот проект является`,

        `курса React школы Rolling Scopes`,

        `Приложение GraphiQL — это игровая площадка/IDE GraphQL.
        Оно включает в себя авторизацию с использованием Firebase для входа
        в систему по электронной почте/паролю, проверку на стороне клиента
        и перенаправление при успешном входе в систему. Приложению не требуется
        серверная часть и оно поддерживает любой открытый API GraphQL с CORS.`,

        `The GraphiQL application is a GraphQL playground/IDE.`,

        `Структура состоит из страницы приветствия, прикрепленного заголовка
        с анимированными изменениями и постоянного нижнего колонтитула.
        Главная страница (GraphiQL) представляет собой частный маршрут
        с разделами для редактирования запросов, переменными, заголовками,
        документацией и областью ответов, доступной только для чтения.
        Пользователи могут переключать конечные точки GraphQL с помощью кнопки
        «Изменить конечную точку».`,

        `Проект включает не менее 80 % тестового покрытия, ESLint, Prettier и Husky hooks.`,

        `С точки зрения дизайна, основное внимание было сфокусировано на деталях,
        адаптивном макете, интерактивности и едином стиле. Приложение обрабатывает
        ошибки API в удобном для пользователя формате и реализует локализацию на двух
        языках (русский и английский)`,
      ],
    },

    educationalProgram: {
      header: 'Наша образовательная программа',
      paragraphs: [
        `RS School — это образовательная программа, организуемая сообществом
        разработчиков The Rolling Scopes с 2013 года. Основная идея RS School
        — образование должно быть доступно каждому, независимо от возраста,
        профессионального статуса и места жительства. В RS School обучение
        совершенно бесплатное. Главные инструкторы и тренеры — опытные front-end
        и JavaScript-разработчики из разных уголков мира и разных компаний.
        Они готовы поделиться своими знаниями и опытом, помогая студентам
        исследовать мир веб-разработки.`,

        `Принцип RS School – это «Открытость и передача знаний вперед».
        Все образовательные материалы и платформа программы находятся
        в публичном доступе на GitHub и YouTube. Что особенно важно,
        ученики RS School, получившие бесплатное образование, приглашаются
        вернуться в будущем в качестве наставников, чтобы передать свои
        знания следующему поколению учеников.`,

        `RS School предлагает разнообразные курсы, включая курсы по JavaScript,
        фронтенд-разработке, а также курсы по React. Эти курсы доступны онлайн,
        что делает обучение очень гибким и удобным для всех, кто заинтересован.
        Присоединяйтесь к RS School и погрузитесь в мир веб-разработки,
        где образование — мощный инструмент для самосовершенствования
        и успешной карьеры.`,
      ],
    },

    developerCard: {
      headerBiography: `Биография:`,
      headerContribution: `Вклад:`,
      headerGithub: `Github:`,
      showDetailsButton: 'Показать детали',
      hideDetailsButton: 'Скрыть детали',
    },

    developers: [
      {
        id: 1,
        name: 'Елизавета Новикова',
        biography:
          'Елизавета — начинающий фронтенд-разработчик. Имеет высшее педагогическое образование. В свободное время Елизавета любит читать жуткие психологические триллеры и детективы. Со сферой фронтенд-разработки её познакомили друзья. Образование и опыт в этой области она получила благодаря программе RS School. Во фронтенд-разработке она ценит возможность контролировать детали процесса разработки и иметь немедленную видимость результатов своей работы.',
        contribution:
          'Елизавета внесла значительный вклад в проект, сэкономив время другим разработчикам. Она разработала макеты, предоставив готовую основу для нашей работы. Кроме того, она взяла на себя верстку футера, 404 и страниц приветствия; она сделала их отзывчивыми и написала для них тесты.Также она написала тесты для некоторых других компонентов, таких как хедер и другие. Еще одна решенная задача — реализация ленивой загрузки документации. Этот разработчик настроил поддержку предварительного оформления. Также, она создала и обновила файл README.md, что сделало описание приложения четким и информативным. Ее активное участие и предложения во время встреч команды улучшили проект.',
        github: 'kotangenss',
        roles: ['разработчик', 'дизайнер'],
        image: elizaveta,
      },
      {
        id: 2,
        name: 'Кирилл Мезенцев',
        biography:
          'Кирилл, 32 года. Окончил физический факультет наационального исследовательского Нижегородского государственного университета имени Н. И. Лобачевского. Около 8 лет работает инженером-технологом на заводе и обучает своих коллег производственным процессам. Всю жизнь его преследовала мысль стать разработчиком. Однажды Кирилл узнал о курсах RS School по фронтенд-разработке и решил, что это именно то, что ему нужно. Он начал изучать JavaScript в свободное время после долгих рабочих дней, и это увлекало его все больше и больше. В настоящее время он хочет закончить курс RS School React и стать профессиональным разработчиком.',
        contribution:
          'Кирилл успешно организовал работу с проектом, создав репозиторий и полностью настроив необходимые окружение и зависимости. Помимо этого, он обеспечил удобство разработки, внедрив переменные, добавив normalize и тщательно настроив глобальные стили. Это обеспечило эффективное сотрудничество команды и беспрепятственный ход работы. Кирилл взял на себя всю ответственность по взаимодействию с Firebase. Он успешно настроил аутентификацию и сверстал страницы логина и регистрации. Кроме того, он реализовал функционал по смене языка, что значительно расширило возможности использования приложения для пользователей с разными языковыми предпочтениями. Помимо технического мастерства, Кирилл активно участвовал в коллективной работе, оказывая поддержку своим коллегам.',
        github: 'kirillvm',
        roles: ['разработчик'],
        image: kirill,
      },
      {
        id: 3,
        name: 'Светлана Иванова',
        biography:
          'Светлана, 31 год. Окончила МГЮА имени О.Е. Кутафина и работала юристом в структуре органов Федерального казначейства РФ. Последние несколько лет живет в Таиланде и работает агентом по недвижимости. С целью обучения профессии фронтенд-разработчика окончила курс "JavaScript/Front-end" от сообщества The Rolling Scopes и продолжает обучение на курсе по React. Увлекается пляжным волейболом, спелеологией, пешим туризмом и любит путешествовать. В настоящее время, большую часть свободного времени посвящает обучению разработке и хочет стать профессионалом в этом направлении.',
        contribution:
          'Светлана настроила роутинг приложения, включая приватные маршруты, обеспечивая безопасный доступ к соответствующим разделам. Также, она настроила Redux Toolkit для управления состоянием приложения и интегрировала Axios для эффективных HTTP-запросов. Помимо этого, она реализовала редакторы запроса и ответа, секции заголовков и переменных, обеспечивая широкие возможности настройки запросов, не забыв об отзывчивой вёрстке каждого раздела. Светлана сверстала липкий хедер, что сделало пользовательский интерфейс более удобным и эстетичным. Дополнительно, она интегрировала поле ввода на странице редактора, реализовав возможность перехода на другую конечную точку API, указанную пользователем. Её энтузиазм во время собраний команды всегда способствовал прогрессу этого проекта, делая Светлану по-настоящему выдающимся членом нашей команды.',
        github: 'climbingirl',
        roles: ['разработчик'],
        image: svetlana,
      },
    ],

    sign: {
      out: 'Выйти',
      in: 'Войти',
      up: 'Зарегистрироваться',
    },

    headerLinks: {
      '/': 'GraphiQL',
      graphiql: 'Добро пожаловать',
    },

    toastMessages: {
      successSignIn: 'Вы успешно вошли в систему!',
      invalidEndpoint: 'Некорректный адрес',
      successSignOut: 'Вы успешно вышли из системы!',
      errorSignOut: 'Ошибка при выходе из системы:',
    },

    notFoundPage: {
      message: 'Здесь нет площадки для запросов GraphQL',
      linkToWelcome: 'Перейти на страницу добро пожаловать',
    },

    account: {
      have: `Уже есть учетная запись? `,
      notHave: `Нет учетной записи? `,
    },

    form: {
      emailLabel: 'Электронная почта',
      passwordLabel: 'Пароль',
      confirmPasswordLabel: 'Подтвердите пароль',
      submitButton: 'Отправить',
    },

    validationErrorMessage: {
      requered: 'Поле обязательно для заполнения',
      email: 'Некорректный имейл',
      oneLowercaseChar: 'Введите хотя бы один символ в нижнем регистре',
      oneUppercaseChar: 'Введите хотя бы один символ в верхнем регистре',
      oneNumber: 'Введите хотя бы одну цифру',
      oneSpecialChar: 'Введите хотя бы один служебный символ',
      shortPassword: 'Ваш пароль слишком короткий',
      confirmPassword: `Пороли не совпадают`,
    },

    grahpiql: {
      docs: 'ДОКА',
      editorPlaceholder: '# Добро пожаловать в GraphiQL',
    },

    documentationSchema: {
      docs: 'Документация',
      noDescription: 'Нет описания',
      rootTypesTitle: 'Основные типы',
      allTypesTitle: 'Все типы',
      implementsTitle: 'Интерфейсы',
      enumValuesTitle: 'Перечисление',
      fieldsTitle: 'Поля',
      implementationsTitle: 'Объекты',
    },

    apiInput: {
      yourEndpoint: 'Ваш адрес',
      sendButtonText: 'Отправить',
    },

    requestToolbar: {
      sections: ['Переменные', 'Заголовки'],
    },

    errorBoundary: {
      header: 'Что-то пошло не так',
      reloadButtonText: 'Перезагрузить страницу',
    },

    firebaseErrors: {
      'auth/user-not-found': 'Пользователь не найден',
      'auth/internal-error': 'Внутренняя ошибка сервера',
      'auth/email-already-exists': 'Почта уже существует',
      'auth/invalid-credential': 'Недействительные учетные данные',
      'auth/invalid-email': 'Недействительная электронная почта',
      'auth/invalid-password': 'Недействительный пароль',
      'auth/network-request-failed': 'Отсутствует интернет соединение',
      'auth/email-already-in-use': 'Пользователь с такой почтой уже существует',
    },
  },
};

export type LocalizationKey = keyof typeof localization;
export type LocalizationData = (typeof localization)[LocalizationKey];
