document.addEventListener('DOMContentLoaded', () => {
    //projects
    const aiProjects = [
        { 
            name: 'Dental Disease Classification', 
            image: './images/GPP.png' , 
            description : 'Applied advanced deep learning models for the classification of dental diseases from panoramic radiographs. Conducted performance evaluation and comparison of five models to determine the most effective for dental image classification. Awarded second place in the graduation project competition'
        },
        {
            name : "Car Damage Detection",
            image :'./images/CDDP.png',
            description : 'Built an AI system that can spot scratches, dents, and broken parts on cars from photos. The model was trained on real car damage images and gives quick, reliable results. I also connected it with a language model to suggest rough repair costs, making it useful for insurance, repair shops, or used-car evaluations.'
        }
    ]
    const webProjects = [
        { 
            name: 'Green Food Resturant Website', 
            image: './images/GFP.png' , 
            description : 'A restaurant website built for Green Food, a healthy-eating brand. The site features a clean, responsive design with a digital menu, plus an option for users to subscribe to meal plans for any period they choose. I focused on making it simple to browse, order, and manage subscriptions, while keeping the layout fast and user-friendly'
        },
        {
            name : "Cnadidate Spark Website",
            image :'./images/CSP2.png',
            description : 'Candidate Spark is an online platform designed to simplify and speed up the recruitment process. It allows job seekers to upload their CVs and creates a searchable database for employers and HR professionals. With search tools, administrators can quickly find the best candidates for their job openings. The platform aims to make hiring faster, easier, and more efficient by connecting talented individuals with the right job opportunities.'
        }
    ]

    // Cached element reference
    const projectSection = document.querySelector('#projects')
    const allBtn = document.querySelector('#all')
    const aiBtn = document.querySelector('#ai')
    const webBtn = document.querySelector('#web')

    //functions
    function addProjects(projects){
        projects.forEach(project => {
            const projectContainer = document.createElement('div') //project box
            projectContainer.classList.add('contentBox')
            const projectName = document.createElement('h3') //project name added to project box
                projectName.textContent = project.name
                projectContainer.append(projectName)
            const imgContainer = document.createElement('div') // image container added to project box
                imgContainer.classList.add('imageBox')
                const projectImage = document.createElement('img') //project image added to image container
                    projectImage.src = project.image
                    projectImage.alt = project.name
                    imgContainer.append(projectImage)
                projectContainer.append(imgContainer)
            const projectDescription =document.createElement('p') //project description added to project box
                projectDescription.textContent = project.description
                projectContainer.append(projectDescription)
            projectSection.append(projectContainer) // add project box to projects section
        })
    }
    //show all projects at first 
    addProjects(aiProjects)
    addProjects(webProjects)
    //even listeners
    allBtn.addEventListener('click' , () => {
        projectSection.innerHTML = "";
        addProjects(aiProjects)
        addProjects(webProjects)
        allBtn.className = 'activeBtn'
        aiBtn.className = 'btn'
        webBtn.className = 'btn'
    })
    aiBtn.addEventListener('click' , () => {
        projectSection.innerHTML = "";
        addProjects(aiProjects)
        aiBtn.className = 'activeBtn'
        allBtn.className = 'btn'
        webBtn.className = 'btn'
    })
    webBtn.addEventListener('click' , () => {
        projectSection.innerHTML = "";
        addProjects(webProjects)
        webBtn.className = 'activeBtn'
        aiBtn.className = 'btn'
        allBtn.className = 'btn'
    })
    const linksDev = document.querySelector('#menueToggle')
    const links = document.querySelector('#mobileNav')
    linksDev.addEventListener('click' ,()=>{
        
        if(links.style.display === 'flex'){
                links.style.display= 'none'
            }
        else{
                links.style.display = 'flex'
            }
    })
})
