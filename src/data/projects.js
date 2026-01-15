const data = [
  {
    id: '1',
    title: 'Menuver',
    shortDescription:
      'A startup creating a platform for people with celiac disease to find trustworthy restaurants.',
    fullDescription: `Menuver is a startup project my classmates and I are developing to help people with celiac disease find safe and trustworthy restaurants.

The platform allows users to search for restaurants that accommodate their dietary needs, view detailed menus, and read reliable reviews from other users with similar dietary restrictions. Our goal is to make dining out easier, safer, and more enjoyable for everyone living with celiac disease.

We focused on creating an intuitive and user-friendly interface, ensuring that users can quickly find restaurants that suit their needs and preferences. The platform is designed to be scalable and accessible, making it easy for new restaurants and users to join.

During the development process, we conducted research to understand the challenges people with celiac disease face when dining out, built wireframes and prototypes in Figma, and iterated based on user feedback.

Menuver is built with modern web and mobile technologies, ensuring a smooth and reliable experience across platforms. Future updates will include features such as personalized recommendations, integration with reservation systems, and more community-driven content to enhance user engagement.`,
    image: {
      src: '/images/menuver.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://beta.menuver.se/',
    },
    technologies: [
      '#javascript',
      '#expo',
      '#react-native',
      '#react-navigation',
      '#react-native-reanimated',
      '#figma',
      '#UX-design',
      '#user centered design',
      '#frontend',
      '#backend',
    ],
  },

  {
    id: '2',
    title: 'Brainfunc',
    shortDescription:
      'A student project combining movement and music to train the brain.',
    fullDescription: `As part of the Design-Build-Test course, my team and I collaborated with Daresay and Brainfunc to further develop the BrainFunc app by creating a new game mode: BrainFunc Beats.

The game combines movement and music to deliver an engaging and interactive experience, allowing users to exercise their brains while moving in rhythm. The goal was to make training enjoyable and accessible for everyone, regardless of age or ability.

BrainFunc Beats is designed to be inclusive and scalable, offering different difficulty levels so both beginners and advanced users can find a suitable challenge. The game can be used in schools to train coordination and rhythm, at workplaces to boost focus and energy, in senior care facilities to encourage activity and stimulate the brain, or in group workouts where participants move together to the music.

The game was developed in Phaser, a JavaScript framework for 2D games. Using a shared Git repository with individual branches for each team member, we were able to work in parallel and merge our contributions into a complete product.

Future updates for BrainFunc Beats include implementing a colorblind mode, adding more difficulty levels, expanding the music selection, and offering personalized settings to enhance the user experience.`,
    image: {
      src: '/images/brainfunc.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://brainfunc.com/',
    },
    technologies: [
      '#javascript',
      '#phaser',
      '#figma',
      '#git',
      '#ux',
      '#ui',
    ],
  },

  {
    id: '3',
    title: 'Filmdle',
    inlineImages: {
      'filmdle-stats': {
        src: '/images/statistics.png',
        alt: 'Filmdle user statistics',
        caption: 'User growth and daily active players from Google analytics',
      },
    },
    
    shortDescription:
      'A daily guessing game where you guess the movie based on 6 clues.',
      fullDescription: `Filmdle is a daily movie guessing game where players receive six unique clues and guesses to identify the movie of the day.

      The game challenges players’ film knowledge, memory, and deduction skills while keeping the experience lightweight and fun. Each day, a new movie is served through a custom API. I built a small backend service that fetches and delivers the daily movie data reliably to the client.
      
      [[IMAGE:filmdle-stats]]
      
      Players can track progress over time and return for a new challenge every day, making the concept both engaging and habit-forming. The UI is designed to be responsive and playable across devices.
      
      The project uses React and React Native Web for cross-platform compatibility, MobX-State-Tree for state management, Expo in development, i18next for internationalization, and Sentry for error tracking.
      
      Future updates include social features such as shareable results, leaderboards, and optional hints or difficulty modes.`,
      
    image: {
      src: '/images/filmdle.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      // uppdatera om du vill länka Filmdle istället:
      // site: 'https://din-filmdle-länk.com',
      site: 'https://apps.apple.com/us/app/syntho/id1615419392',
    },
    technologies: [
      '#react',
      '#api',
      '#backend',
      '#typescript',
      '#react-native',
      '#react-native-web',
      '#mobx-state-tree',
      '#expo',
      '#i18next',
      '#sentry',
    ],
  },

  {
    id: '4',
    title: 'AI Audience Predictor',
    shortDescription:
      'An AI-powered tool that estimates audience numbers and supports smarter planning.',
      fullDescription: `AI Audience Predictor is a service I am developing on my sparetime to estimate audience numbers and support more confident decision-making when planning campaigns and content for hockey clubs.

      The project originated from a real challenge: accurately predicting reach and attendance early in the planning process is often difficult, yet critical for comparing alternatives and making informed decisions.
      
      The service collects relevant inputs such as channel, timing, format, and historical performance, and uses an AI-driven model to generate an estimated audience range. To increase trust and usability, the system also provides insight into which factors most strongly influenced each prediction.
      
      I am currently in an ongoing dialogue with a professional hockey club, exploring how the tool could be applied to estimate audience reach for matches, campaigns, and digital content. This collaboration helps ground the project in real-world needs and informs both feature development and model refinement.
      
      A strong focus has been placed on creating a clear and intuitive interface, allowing users to quickly test scenarios, compare outcomes, and export results for communication and planning purposes.
      
      Future development includes integrating additional data sources, improving prediction accuracy over time as more data is collected, and introducing dashboards to track trends and performance across multiple predictions.`,
      
    image: {
      src: '/images/hockeyaii.png',
      placeholderSrc:
        '/images/hockeyaii.png',
    },
    links: {
      // site: 'https://din-länk-här.com',
      // repo: 'https://github.com/ditt-repo',
    },
    technologies: [
      '#ai',
      '#machine-learning',
      '#data',
      '#prediction',
      '#ux',
      '#react',
      '#api',
    ],
  },
];

export default data;
