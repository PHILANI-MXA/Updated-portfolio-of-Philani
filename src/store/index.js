import { createStore } from 'vuex'


export default createStore({
  state: {
    certificates: [
      {
        img: 'https://i.postimg.cc/Cx15T72P/9a8ea701-ea31-4832-8a4c-97b5bc9c46b9.png',
        Name: 'HTML',
        Description: 'Certificate'
      },
      {
        img: 'https://i.postimg.cc/JncMBHgH/401fa74f-f1b7-42c6-ac09-12ed791dcbe5.png',
        Name: 'CSS',
        Description: 'Certificate'
      },
      {
        img: 'https://i.postimg.cc/cH15XKCn/7f7ba994-5867-439c-ac7f-3e39773da869.png',
        Name: 'JavaScript',
        Description: 'Certificate'
      },
      {
        img: 'https://i.postimg.cc/Pq3MfC3T/5eef56d9-668f-4581-825c-038e908ec6a7.png',
        Name: 'Fundamentals',
        Description: 'Certificate'
      },
      {
        img: 'https://i.postimg.cc/5NgQWZkM/2266cb30-7259-4ace-9076-6c51e436a0d8.png',
        Name: 'Responsivedone',
        Description: 'Certificate'
      },
      {
        img: 'https://i.postimg.cc/qRJWS6tr/cbb27f10-1cec-4351-b2f7-777af8eacb80.png',
        Name: 'Marketing?',
        Description: 'Certificate'
      },
      {
        img: 'https://i.postimg.cc/GhLJDPWd/958ec7bb-3c0f-481e-af48-595e4a8e8269.png',
        Name: 'React?',
        Description: 'Certificate'
      },
      {
        img: 'https://i.postimg.cc/26Ph3JsS/fd6353b5-76ae-48f9-846c-20887b2af527.png',
        Name: 'C',
        Description: 'Certificate'
      },
      {
        img: 'https://i.postimg.cc/VvXvhMyg/a021415d-3370-4e79-935b-0345abb787cf.png',
        Name: 'SQL',
        Description: 'Certificate'
      },
      {
        img: 'https://i.postimg.cc/YCTwjzXC/5e520b04-1b21-4634-8d28-2512922a6d09.png',
        Name: 'Java',
        Description: 'Certificate'
      },
      {
        img: 'https://i.postimg.cc/d0SnJ5n5/56d62a62-6333-4e7c-a354-990fbd0485f9.png',
        Name: 'Python Beginners',
        Description: 'Certificate'
      },
      {
        img: 'https://i.postimg.cc/jdZfVLMX/b21dfa4d-2ec6-4e0a-889b-15562eb66146.png',
        Name: 'Py INtermmediate',
        Description: 'Certificate'
      },
      {
        img: 'https://i.postimg.cc/B66yg87V/f99bfdfd-9a59-439d-a285-b4605754c09a.png',
        Name: 'core',
        Description: ''
      },
      {
        img: 'https://i.postimg.cc/Xq6P027T/c6d1bf29-3188-4ef6-874c-90995af259d5.png',
        Name: 'Data Science',
        Description: ''
      },
      {
        img: 'https://i.postimg.cc/FzxTXN6L/39a41778-ca40-4e02-af47-445457681f02.png',
        Name: 'Data Structures',
        Description: ''
      }
    ],
    projects: [
      {
        id: '1',
        Proimg: 'https://i.postimg.cc/yxtkBTt2/Propertylisting.png',
        ProName: 'First-portfolio',
        ProDescription: 'This is my first HTML, bootstrap and CSS project',
        ProTechLang: 'HTML, Bootstrap and CSS'
      },
      {
        id: '2',
        Proimg: 'https://i.postimg.cc/yxtkBTt2/Propertylisting.png',
        ProName: 'Rainbow CSS',
        ProDescription: 'This is my first project that I have used CSS the most',
        ProTechLang: 'CSS and HTML'
      },
      {
        id: '3',
        Proimg: 'https://i.postimg.cc/yxtkBTt2/Propertylisting.png',
        ProName: 'Calculator',
        ProDescription: 'Functioning Javascript calculator created after I completed Javascript module',
        ProTechLang: 'Javascript'
      },
      {
        id: '4',
        Proimg: 'https://i.postimg.cc/yxtkBTt2/Propertylisting.png',
        ProName: 'Minutes to Seconds',
        ProDescription: 'I had to figure out how convert minutes to seconds using Javascript',
        ProTechLang: 'Javascript'
      },
      {
        id: '5',
        Proimg: 'https://i.postimg.cc/yxtkBTt2/Propertylisting.png',
        ProName: 'BackendAPI',
        ProDescription: 'Capstone API for my final project hosted it with heroku',
        ProTechLang: 'NodeJS'
      },
      {
        id: '6',
        Proimg: 'https://i.postimg.cc/yxtkBTt2/Propertylisting.png',
        ProName: 'FrontEnd Capstone',
        ProDescription: 'This is my final project I created a library website',
        ProTechLang: 'VueJS'
      }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
