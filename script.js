
let speakers = [
    {   
        profile: "profile1",
        img: "download.jpg", 
        name: "Dr.Sarah Chen",
        Title: "Chief AI Researcher",
        Team: "TechVision Labs",
        Biography: "Dr. Chen is a leading expert in machine learning with over 15 years of experience. She has published more than 50 papers on neural networks and AI ethics.",
        Topic: "The Future of Ethical AI Development",
        Expertise: "Machine Learning & AI Ethics",
        Website: "http://sarahchen.tech",
        Twitter: "@sarahchen_ai",
        Linkin: "http://linkedin.com/in/sarahchen"
    },
    {   
        profile: "profile2",
        img: "download (1).jpg", 
        name: "Marcus Rodriguez",
        Title: "Founder & CEO",
        Team: "GreenTech Innovations",
        Biography: "Marcus is a serial entrepreneur passionate about sustainable technology. He has founded three successful startups focused on clean energy solutions.",
        Topic: "Building Sustainable Startups in a Digital Age",
        Expertise: "Entrepreneurship & Sustainability",
        Website: "http://greentech-innovations.com/",
        Twitter: "@marcusrod",
        Linkin: "http://linkedin.com/in/marcusrodriguez"
    },
    {   
        profile: "profile3",
        img: "download (2).jpg", 
        name: "Dr. Amara Okafor",
        Title: "Director of Cybersecurity",
        Team: "SecureNet Solutions",
        Biography: "Dr. Okafor specializes in cybersecurit y and threat intelligence. She advises governments and Fortune 500 companies on digital security strategies.",
        Topic: "Protecting Your Digital Assets: Modern Cybersecurity Strategies",
        Expertise: "Cybersecurity & Threat Intelligence",
        Website: "http://amaraokafor.com/",
        Twitter: "@amara_security",
        Linkin: "http://linkedin.com/in/amaraokafor"
    },
    {   
        profile: "profile4",
        img: "download (3).jpg", 
        name: "James Patterson",
        Title: "Head of Product Design",
        Team: "DesignFirst Studio",
        Biography: "James has led design teams at major tech companies for over a decade. His work has won multiple design awards and shaped user experiences for millions.",
        Topic: "Human-Centered Design in the Age of AI",
        Expertise: "UX Design & Product Strategy",
        Website: "http://jpatterson-design.com/",
        Twitter: "@jpatterson_ux",
        Linkin: "http://linkedin.com/in/jamespatterson"
    },
    {   
        profile: "profile5",
        img: "download (4).jpg", 
        name: "Dr. Priya Sharma",
        Title: "VP of Data Science",
        Team: "Analytics Corp",
        Biography: "Dr. Sharma leads data science initiatives that drive business transformation. She's known for making complex data accessible and actionable.",
        Topic: "Data-Driven Decision Making: From Insights to Impact",
        Expertise: "Data Science & Business Analytics",
        Website: "http://priyasharma-analytics.com/",
        Twitter: "@priya_data",
        Linkin: "http://linkedin.com/in/priyasharma"
    },
    {   
        profile: "profile6",
        img: "download (5).jpg", 
        name: "Alex Thompson",
        Title: "Blockchain Architect",
        Team: "CryptoChain Technologies",
        Biography: "Alex is a pioneer in blockchain technology and decentralized systems. He's contributed to several major blockchain protocols and advises on Web3 strategies.",
        Topic: "Blockchain Beyond Cryptocurrency: Real-World Applications",
        Expertise: "Blockchain & Web3",
        Website: "http://alexthompson.io/",
        Twitter: "@alexthompson_bc",
        Linkin: "http://linkedin.com/in/alexthompson"
    },
]


let html = '';



for (i=0; i < speakers.length; i++) {
    html = `
    <img class="imgsect" src="${speakers[i].img}" alt="Img">
    <h1>${speakers[i].name}</h1>
    <p class="title">${speakers[i].Title}</p>
    <p class="title">${speakers[i].Team}</p>
    <p>${speakers[i].Biography}</p>
    <h3 class="Topic">${speakers[i].Topic}</h3>
    <p class="title"><span style="color: blue">Expertise: </span> ${speakers[i].Expertise}</p>
    <p>________________________</p>
    <br>
    <p> <a href="${speakers[i].Website}">Website</a> &nbsp <a href="${speakers[i].Twitter}">Twitter</a> &nbsp <a href="${speakers[0].Linkin}">Linkedin</a> </p>
`;

let profile = document.getElementById(speakers[i].profile);
profile.innerHTML = html;
}
