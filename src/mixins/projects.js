const projects = {
  data: () => ({
    projects: [
      { 
        name: 'Campus Map', 
        origin: 'University of St. Thomas', 
        link: 'https://campusmap.stthomas.edu/', 
        image: `${process.env.BASE_URL}assets/images/campus_map.png` 
      },
      { 
        name: 'Project 2', 
        types: ['front', 'back'], 
        origin: 'University of St. Thomas', 
        link: 'https://localhost:8080', 
        image: `${process.env.BASE_URL}assets/images/project.jpeg` 
      },
      { 
        name: 'Project 3', 
        types: ['front'], 
        origin: 'University of St. Thomas', 
        link: 'https://localhost:8080', 
        image: `${process.env.BASE_URL}assets/images/project.jpeg` 
      },
      { 
        name: 'Project 4', 
        types: ['front', 'back'], 
        origin: 'University of St. Thomas', 
        link: 'https://localhost:8080', 
        image: `${process.env.BASE_URL}assets/images/project.jpeg` 
      },{ 
        name: 'Project 5', 
        types: ['back'], 
        origin: 'University of St. Thomas', 
        link: 'https://localhost:8080', 
        image: `${process.env.BASE_URL}assets/images/project.jpeg` 
      },
      { 
        name: 'Project 6', 
        types: ['back'], 
        origin: 'University of St. Thomas', 
        link: 'https://localhost:8080', 
        image: `${process.env.BASE_URL}assets/images/project.jpeg` 
      },
    ],
  })
}

export default projects