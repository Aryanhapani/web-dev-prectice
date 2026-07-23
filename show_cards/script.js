
const teamMembers = [
  {
    fullName: "Aarav Sharma",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    profession: "Frontend Developer",
    desc: "Builds responsive and modern web applications using React and JavaScript.",
    tags: ["React", "JavaScript", "HTML", "CSS", "Tailwind"]
  },
  {
    fullName: "Priya Patel",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
    profession: "UI/UX Designer",
    desc: "Creates beautiful and user-friendly interfaces for web and mobile apps.",
    tags: ["Figma", "UI", "UX", "Adobe XD", "Prototype"]
  },
  {
    fullName: "Rohan Mehta",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    profession: "Backend Developer",
    desc: "Develops secure REST APIs with Java, Spring Boot, and MySQL.",
    tags: ["Java", "Spring Boot", "MySQL", "REST API", "Hibernate"]
  },
  {
    fullName: "Ananya Verma",
    img: "https://randomuser.me/api/portraits/women/4.jpg",
    profession: "Flutter Developer",
    desc: "Builds fast and cross-platform mobile applications.",
    tags: ["Flutter", "Dart", "Firebase", "Android", "iOS"]
  },
  {
    fullName: "Kabir Singh",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
    profession: "DevOps Engineer",
    desc: "Automates deployments and manages cloud infrastructure.",
    tags: ["Docker", "AWS", "Linux", "CI/CD", "Kubernetes"]
  },
  {
    fullName: "Neha Gupta",
    img: "https://randomuser.me/api/portraits/women/6.jpg",
    profession: "Data Scientist",
    desc: "Analyzes data and creates machine learning models.",
    tags: ["Python", "Pandas", "TensorFlow", "SQL", "ML"]
  },
  {
    fullName: "Vikram Joshi",
    img: "https://randomuser.me/api/portraits/men/7.jpg",
    profession: "Full Stack Developer",
    desc: "Works on both frontend and backend technologies.",
    tags: ["React", "Node.js", "MongoDB", "Express", "JavaScript"]
  },
  {
    fullName: "Sneha Kapoor",
    img: "https://randomuser.me/api/portraits/women/8.jpg",
    profession: "Graphic Designer",
    desc: "Designs creative branding and digital marketing materials.",
    tags: ["Photoshop", "Illustrator", "Branding", "Canva", "Creative"]
  },
  {
    fullName: "Aditya Roy",
    img: "https://randomuser.me/api/portraits/men/9.jpg",
    profession: "Android Developer",
    desc: "Develops native Android applications using Kotlin.",
    tags: ["Kotlin", "Android", "Jetpack", "Firebase", "XML"]
  },
  {
    fullName: "Isha Malhotra",
    img: "https://randomuser.me/api/portraits/women/10.jpg",
    profession: "Project Manager",
    desc: "Leads software projects and ensures timely delivery.",
    tags: ["Agile", "Scrum", "Leadership", "Planning", "Jira"]
  },
  {
    fullName: "Rahul Desai",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    profession: "Cyber Security Analyst",
    desc: "Protects applications and networks from cyber threats.",
    tags: ["Security", "Ethical Hacking", "Network", "OWASP", "Linux"]
  },
  {
    fullName: "Meera Nair",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    profession: "QA Engineer",
    desc: "Tests software to ensure quality and bug-free releases.",
    tags: ["Selenium", "Testing", "Automation", "JIRA", "QA"]
  },
  {
    fullName: "Arjun Khanna",
    img: "https://randomuser.me/api/portraits/men/13.jpg",
    profession: "Cloud Engineer",
    desc: "Designs scalable cloud solutions for enterprise applications.",
    tags: ["AWS", "Azure", "Terraform", "Cloud", "DevOps"]
  },
  {
    fullName: "Pooja Shah",
    img: "https://randomuser.me/api/portraits/women/14.jpg",
    profession: "Content Writer",
    desc: "Creates engaging technical blogs and marketing content.",
    tags: ["Writing", "SEO", "Blogging", "Content", "Marketing"]
  },
  {
    fullName: "Karan Malhotra",
    img: "https://randomuser.me/api/portraits/men/15.jpg",
    profession: "AI Engineer",
    desc: "Builds intelligent AI solutions using deep learning technologies.",
    tags: ["Python", "PyTorch", "AI", "Deep Learning", "NLP"]
  }
];




console.log(teamMembers);

var clutter=" "

teamMembers.forEach((elem,index)=>{
      clutter += `<div class="card">
            <img src="${elem.img}" alt="">
            <h2>${elem.fullName}</h2>
            <h3>${elem.profession}</h3>
            <p>${elem.desc}</p>
        </div>`
})

document.querySelector("main").innerHTML=clutter