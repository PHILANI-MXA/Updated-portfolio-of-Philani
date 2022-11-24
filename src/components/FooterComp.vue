<template>

    <footer class="text-center">
       <small class="text-black">Made by Philani Mxathule copyrights &copy; 2022</small>
       <div class="icons d-flex justify-content-between">
           <router-link to="home"><a href="home" >
                 <i class="bi bi-house"></i>
               </a></router-link>
           <router-link to="about"><a href="about" >
                 <i class="bi bi-file-person"></i>
               </a></router-link>
           <a href="education" >
                 <i class="bi bi-mortarboard-fill"></i>
               </a>
                <a href="projects" >
                <i class="bi bi-briefcase"></i>
               </a>
           <a href="skills" >
                 <i class="bi bi-code-slash"></i>
               </a>
           <a href="certificates" >
                 <i class="bi bi-bag-x"></i>
               </a>
                <a href="testimonials" >
                 <i class="bi bi-person-rolodex"></i>
               </a>
                 <a href="contact" >
                   <i class="bi bi-telephone"></i>
               </a>
             
         </div>
     </footer>
   
   </template>
   
   <script>
   export default {
       name: 'FooterComponent',
   

   };
   </script>
   
   <style scoped>
   footer{
   bottom:0;
   width: 100%;
   padding: 1px;
   background-color: #e8eeef;
   z-index: 50;
   }
   
   a{
     color: #070606;
   }
   
   a:hover{
     color: #070606;
   }

   </style>