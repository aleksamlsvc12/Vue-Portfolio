const data =
  {
    header: {
      english: ['Home','Projects','About'],
      serbian: ['Početna', 'Projekti', 'O meni'],
      links: ['/','projects','about']
    },

    main: {
      title: {
        english: 'I am an <span class="block text-purple-700">Electrical and Computer Engineer</span>',
        serbian: 'Ja sam <span class="block text-purple-700">inženjer elektrotehnike i računarstva</span>'
      },

      description: {
        english: 'I am a final year student of the School of Electrical and Computer Engineering, majoring in Computer Engineering.',
        serbian: 'Ja sam student završne godine Visoke škole elektrotehnike i računarstva, smer Računarska tehnika.'
      },

      button: {
        english: 'Download CV',
        serbian: 'Preuzmi CV'
      }
    },

    projects: {
      titles: [
        'TravelOrder','VueJobs','Profiles',
        'ToDoList','Pagination','FormValidation',
        'YouTube','RevealCards','ProfileCard','FotoGallery','Calculator'
      ],
      links: [
        'https://github.com/vbazovic/travel-order',
        'https://vue-jobs-tutorial.netlify.app/',
        'https://vue-profiles.netlify.app/',
        'https://aleksamlsvc12.github.io/To-Do-List/',
        'https://aleksamlsvc12.github.io/Pagination/',
        'https://aleksamlsvc12.github.io/Form-Validation/',
        'https://aleksamlsvc12.github.io/Youtube/',
        'https://aleksamlsvc12.github.io/Reveal-Cards/',
        'https://aleksamlsvc12.github.io/Profile-Card/',
        'https://aleksamlsvc12.github.io/Foto-Gallery/',
        'https://aleksamlsvc12.github.io/Calculator/'
      ],
      english: {
        TravelOrder: { difficulty: 'Advanced', completion: 'Completed', date: '6/27/2025' },
        VueJobs: { difficulty: 'Advanced', completion: 'Completed', date: '5/21/2025' },
        Profiles: { difficulty: 'Advanced', completion: 'Completed', date: '8/4/2025' },
        ToDoList: { difficulty: 'Intermediate', completion: 'Completed', date: '4/4/2025' },
        Pagination: { difficulty: 'Intermediate', completion: 'Completed', date: '4/8/2025' },
        FormValidation: { difficulty: 'Intermediate', completion: 'Completed', date: '4/2/2025' },
        YouTube: { difficulty: 'Beginner', completion: 'Completed', date: '11/8/2024' },
        RevealCards: { difficulty: 'Beginner', completion: 'Completed', date: '3/31/2025' },
        ProfileCard: { difficulty: 'Beginner', completion: 'Completed', date: '4/9/2024' },
        FotoGallery: { difficulty: 'Beginner', completion: 'Completed', date: '4/4/2025' },
        Calculator: { difficulty: 'Beginner', completion: 'Completed', date: '10/24/2024' }
      },
      serbian: {
        TravelOrder: { difficulty: 'Napredni nivo', completion: 'Završeno', date: '27/6/2025' },
        VueJobs: { difficulty: 'Napredni nivo', completion: 'Završeno', date: '21/5/2025' },
        Profiles: { difficulty: 'Napredni nivo', completion: 'Završeno', date: '4/8/2025' },
        ToDoList: { difficulty: 'Srednji nivo', completion: 'Završeno', date: '4/4/2025' },
        Pagination: { difficulty: 'Srednji nivo', completion: 'Završeno', date: '8/4/2025' },
        FormValidation: { difficulty: 'Srednji nivo', completion: 'Završeno', date: '2/4/2025' },
        YouTube: { difficulty: 'Početni nivo', completion: 'Završeno', date: '8/11/2024' },
        RevealCards: { difficulty: 'Početni nivo', completion: 'Završeno', date: '31/3/2025' },
        ProfileCard: { difficulty: 'Početni nivo', completion: 'Završeno', date: '9/4/2024' },
        FotoGallery: { difficulty: 'Početni nivo', completion: 'Završeno', date: '4/4/2025' },
        Calculator: { difficulty: 'Početni nivo', completion: 'Završeno', date: '24/10/2024' }
      }
    },

    about: {
      english: {
          header: 'ABOUT',
          p1: 'Hi, my name is Aleksa Milosevic. I was born in 2004 and Im from Mladenovac, a city near Belgrade, Serbia.',
          p2: 'Im passionate about frontend technologies. I enjoy creating clean, user-friendly interfaces and constantly improving my skills through personal projects and continuous learning.',
          p3: 'Aside from programming, Im an active member of the Academic Cultural and Artistic Society “Branko Krsmanović” and have experience working with children. Im responsible, adaptable, and highly motivated by problem-solving and achieving meaningful goals.'
      },
      serbian: {
          header: 'O MENI',
          p1: 'Zdravo, moje ime je Aleksa Milošević. Rođen sam 2004. godine i dolazim iz Mladenovca, grada blizu Beograda, Srbija.',
          p2: 'Strastven sam u vezi za web razvojem, posebno sa frontend tehnologijama. Uživam u kreiranju čistih, korisnički prijateljskih interfejsa i stalnom unapređivanju svojih veština kroz lične projekte i kontinuirano učenje.',
          p3: 'Pored programiranja, aktivan sam član Akademskog kulturno-umetničkog društva „Branko Krsmanović“ i imam iskustva u radu sa decom. Odgovoran sam, prilagodljiv i jako motivisan rešavanjem problema i postizanjem značajnih ciljeva.'
      }
    },

    education: {
      links: ['https://www.viser.edu.rs/', 'https://tehnickaskola.edu.rs/'],
      english: {
          header: 'EDUCATION',
          school1: 'SCHOOL OF ELECTRICAL AND COMPUTER ENGINEERING',
          desc1: 'Computer Engineering | Belgrade | 2022 - present',
          school2: 'TECHNICAL SCHOOL MLADENOVAC',
          desc2: 'Electrical Technician in Information Technology | Mladenovac | 2018 - 2022'
        },
      
      serbian: {
          header: 'OBRAZOVANJE',
          school1: 'VISOKA ŠKOLA ELEKTROTEHNIKE I RAČUNARSTVA',
          desc1: 'Računarska tehnika | Beograd | 2022 - trenutno',
          school2: 'TEHNIČKA ŠKOLA MLADENOVAC',
          desc2: 'Elektrotehničar informacionih tehnologija | Mladenovac | 2018 - 2022'
        },
    },

    skills:{
      progress: {
        web: '80%',
        git: '80%',
        sql: '60%'
      },
      english: {
          header: 'SKILLS',
          text1: 'Frontend Technologies',
          text2: 'Version Control',
          text3: 'Databases'
        },
      
      serbian: {
          header: 'VEŠTINE',
          text1: 'Frontend tehnologije',
          text2: 'Kontrola verzija',
          text3: 'Baze podataka'
        },
    }

  };

export default data;
