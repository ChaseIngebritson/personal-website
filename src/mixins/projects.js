const projects = {
  data: () => ({
    projects: [
      { 
        name: 'Campus Map', 
        origin: 'University of St. Thomas', 
        link: 'https://campusmap.stthomas.edu/', 
        image: `${process.env.BASE_URL}assets/images/campus_map.jpeg` 
      },
      { 
        name: 'Shuttle Tracker', 
        origin: 'University of St. Thomas', 
        link: 'https://bustracker.stthomas.edu/', 
        image: `${process.env.BASE_URL}assets/images/shuttle_tracker.jpeg` 
      },
      { 
        name: 'URL Shortener', 
        origin: 'University of St. Thomas', 
        link: 'https://link.stthomas.edu/', 
        image: `${process.env.BASE_URL}assets/images/url_shortener.jpeg` 
      },
      { 
        name: 'My Actions Learning Tools Interoperability Tool', 
        origin: 'University of St. Thomas', 
        // link: 'https://localhost:8080', 
        image: `${process.env.BASE_URL}assets/images/lti.jpeg` 
      },{ 
        name: 'QnA Chat Bot', 
        origin: 'University of St. Thomas', 
        // link: 'https://localhost:8080', 
        image: `${process.env.BASE_URL}assets/images/chat_bot.jpeg` 
      },
      { 
        name: 'UST Mobile App', 
        origin: 'University of St. Thomas', 
        link: 'https://apps.apple.com/us/app/u-of-st-thomas-minnesota/id1459917428', 
        image: `${process.env.BASE_URL}assets/images/project.jpeg` 
      },
    ],
  })
}

export default projects