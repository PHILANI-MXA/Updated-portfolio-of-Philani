import { createStore } from 'vuex'


export default createStore({
  state: {
    Test: [
      {
        img: '',
        Name: '',
        Description: ''
      },
      {
        img: '',
        Name: '',
        Description: ''
      },
      {
        img: '',
        Name: '',
        Description: ''
      },
      {
        img: '',
        Name: '',
        Description: ''
      },
      {
        img: '',
        Name: '',
        Description: ''
      },
      {
        img: '',
        Name: '',
        Description: ''
      }
    ],
    Projects: [
      {
        id: '1',
        Proimg: 'image',
        ProName: 'First-portfolio',
        ProDescription: 'This is my first HTML, bootstrap and CSS project',
        ProTechLang: 'HTML, Bootstrap and CSS'
      },
      {
        id: '2',
        Proimg: 'image',
        ProName: 'Rainbow CSS',
        ProDescription: 'This is my first project that I have used CSS the most',
        ProTechLang: 'CSS and HTML'
      },
      {
        id: '3',
        Proimg: 'image',
        ProName: 'Calculator',
        ProDescription: 'Functioning Javascript calculator created after I completed Javascript module',
        ProTechLang: ''
      },
      {
        id: '4',
        Proimg: 'image',
        ProName: 'Minutes to Seconds',
        ProDescription: 'I had to figure out how convert minutes to seconds using Javascript',
        ProTechLang: 'Javascript'
      },
      {
        id: '5',
        Proimg: 'image',
        ProName: 'BackendAPI',
        ProDescription: 'Capstone API for my final project hosted it with heroku',
        ProTechLang: 'NodeJS'
      },
      {
        id: '6',
        Proimg: 'image',
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
