import { createStore } from "vuex";

export default createStore({
  state: {
    certificates: [
      {
        img: "https://i.postimg.cc/MpDWSSnv/Philani-HTML.png",
        Name: "HTML",
        Description: "Certificate",
      },
      {
        img: "https://i.postimg.cc/g02GcTh4/Philani-CSS.png",
        Name: "CSS",
        Description: "Certificate",
      },
      {
        img: "https://i.postimg.cc/P5tjKRSh/Philani-Java-Script.png",
        Name: "JavaScript",
        Description: "Certificate",
      },
      {
        img: "https://i.postimg.cc/4xK5CJL1/Philani-WDF.png",
        Name: "Fundamentals",
        Description: "Certificate",
      },
      {
        img: "https://i.postimg.cc/gkLdnhnF/Phil-Responsive-Web-Design.png",
        Name: "Responsivedone",
        Description: "Certificate",
      },
      {
        img: "https://i.postimg.cc/DZWFL4BX/Philani-Coding-for-Marketers.png",
        Name: "Marketing?",
        Description: "Certificate",
      },
      {
        img: "https://i.postimg.cc/7ZLR58BC/Philani-Redux-and-React.png",
        Name: "React?",
        Description: "Certificate",
      },
      {
        img: "https://i.postimg.cc/8zD195P2/Philani-C.png",
        Name: "C",
        Description: "Certificate",
      },
      {
        img: "https://i.postimg.cc/5yLVkdc9/Philani-SQL.png",
        Name: "SQL",
        Description: "Certificate",
      },
      {
        img: "https://i.postimg.cc/qqSN2dsk/Philani-Java.png",
        Name: "Java",
        Description: "Certificate",
      },
      {
        img: "https://i.postimg.cc/bJGDrJn6/Learning-Path-Certificate-P-Mxathule.png",
        Name: "Python Beginners",
        Description: "Certificate",
      },
      {
        img: "https://i.postimg.cc/4xK5CJL1/Philani-WDF.png",
        Name: "WebDevFundamentals",
        Description: "Certificate",
      },
      {
        img: "https://i.postimg.cc/YSZTcnzv/Philani-Python-Core.png",
        Name: "core",
        Description: "Cert",
      },
      {
        img: "https://i.postimg.cc/DwKZh65Y/Philani-Mxathule-Ui-Path-Certificate-EADUS.png",
        Name: "UiPath",
        Description: "Cert",
      },
      {
        img: "https://i.postimg.cc/BQ39Qz9D/Philani-PDS.png",
        Name: "Data Structures",
        Description: "",
      },
      {
        img: "https://i.postimg.cc/XvdtbKHx/Philani-Mxathule-Core-Services.png",
        Name: "Core-services",
        Description: "AWS",
      },
      {
        img: "https://i.postimg.cc/J4FFHYSP/Philani-Mxathule-AWS-Cloud-Practitioner.png",
        Name: "Cloud Pract",
        Description: "AWS",
      },
      {
        img: "https://i.postimg.cc/wj0drQrN/Philani-PHP.png",
        Name: "PHP",
        Description: "Cert",
      },
      {
        img: "https://i.postimg.cc/BZXRg1Hh/Philani-Software-T-At-Ed.png",
        Name: "AWS",
        Description: "",
      }
    ],
    projects: [
      {
        id: "1",
        Proimg: "https://i.postimg.cc/TwwxwVFk/Capstone-Project.png",
        ProName: "CapStone",
        ProDescription: "Capstone project",
        ProTechLang: "Vuex 3, Javascript and Bootstrap",
        live: "https://prismatic-stardust-6e4c31.netlify.app",
        github: "https://github.com/PHILANI-MXA/capstoneprojectfront-end",
      },
      {
        id: "2",
        Proimg: "https://i.postimg.cc/HxCSvd4b/JSCalculator.png",
        ProName: "Calculator",
        ProDescription:
          "Functioning Javascript calculator created after I completed Javascript module",
        ProTechLang: "JavaScript, HTML and CSS",
        live: "https://eloquent-mooncake-63cc2b.netlify.app",
        github: "https://github.com/PHILANI-MXA/Calculator_js",
      },
      {
        id: "3",
        Proimg: "https://i.postimg.cc/FRLYzX2C/TodoApp.png",
        ProName: "Todo App",
        ProDescription: "Todo App",
        ProTechLang: "Javascript",
        live: "https://bejewelled-sunflower-763e81.netlify.app",
        github: "https://github.com/PHILANI-MXA/TodoAppChallenge",
      },
      {
        id: "4",
        Proimg: "https://i.postimg.cc/63wk2dSs/Minutes-to-Seconds.png",
        ProName: "Minutes to Seconds",
        ProDescription:
          "I had to figure out how convert minutes to seconds using Javascript",
        ProTechLang: "JavaScript",
        live: "https://taupe-syrniki-941c55.netlify.app",
        github: "https://github.com/PHILANI-MXA/time-converter",
      },
      {
        id: "5",
        Proimg: "https://i.postimg.cc/B6YmSHfB/BMI-calculator.png",
        ProName: "BMI calculator",
        ProDescription: "BMI calculator",
        ProTechLang: "JavaScript",
        live: "https://effervescent-eclair-ba466e.netlify.app",
        github: "https://github.com/PHILANI-MXA/BMI-calculator",
      },
      {
        id: "6",
        Proimg: "https://i.postimg.cc/dQS4y2kb/One-Page-port.png",
        ProName: "Simple Portfolio",
        ProDescription: "This is my final project I created a library website",
        ProTechLang: "VueJS",
        live: "https://philanimxathuleportfolio.netlify.app/",
        github: "https://github.com/PHILANI-MXA/philanimxathulecv",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
