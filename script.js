// script.js

document.addEventListener('DOMContentLoaded', function() {
    const jobs = [
        { 
            id: 1, 
            title: "Bharatanatyam Dancer", 
            category: "Dance", 
            description: "We are seeking an experienced Bharatanatyam dancer for a series of cultural events and workshops.",
            fullDescription: "As a Bharatanatyam dancer, you will be part of a prestigious cultural program showcasing the rich heritage of Indian classical dance. This role involves performing at various events, conducting workshops for beginners, and collaborating with other artists to create innovative dance productions.",
            location: "Mumbai", 
            type: "Contract",
            duration: "3 months",
            salary: "₹30,000 - ₹40,000 per month",
            requirements: [
                "Minimum 5 years of experience in Bharatanatyam",
                "Strong stage presence and ability to engage with audience",
                "Experience in teaching dance is a plus",
                "Willingness to travel for performances"
            ]
        },
        { 
            id: 2, 
            title: "Tabla Player", 
            category: "Music", 
            description: "Experienced Tabla player needed for recording sessions and live performances.",
            fullDescription: "We are looking for a skilled Tabla player to join our ensemble for an upcoming album recording and subsequent live performances. This role requires a deep understanding of various taals and the ability to complement other instruments in both traditional and fusion music settings.",
            location: "Delhi", 
            type: "Contract",
            duration: "6 months",
            salary: "₹35,000 - ₹45,000 per month",
            requirements: [
                "Proficiency in playing complex taals",
                "Experience in studio recording",
                "Ability to collaborate with diverse musical styles",
                "Availability for evening and weekend performances"
            ]
        },
        { 
            id: 3, 
            title: "Kathakali Performer", 
            category: "Theatre", 
            description: "Seeking a talented Kathakali artist for an international cultural exchange program.",
            fullDescription: "Join our team as a Kathakali performer for an exciting international cultural exchange program. This unique opportunity involves showcasing the art of Kathakali to global audiences, participating in collaborative performances with artists from other cultures, and conducting workshops to introduce this traditional art form to international students.",
            location: "Kerala", 
            type: "Long-term Contract",
            duration: "1 year",
            salary: "₹40,000 - ₹50,000 per month",
            requirements: [
                "Extensive training and experience in Kathakali",
                "Excellent physical fitness and stamina",
                "Good communication skills in English",
                "Willingness to travel internationally"
            ]
        },
        { 
            id: 4, 
            title: "Mehndi Artist", 
            category: "Visual Arts", 
            description: "Creative Mehndi artist needed for wedding ceremonies and cultural festivals.",
            fullDescription: "We are seeking a talented Mehndi artist to join our team for the upcoming wedding and festival season. This role involves creating intricate and beautiful Mehndi designs for brides, wedding guests, and festival attendees. The ideal candidate will have a keen eye for detail, creativity in design, and the ability to work efficiently under time constraints.",
            location: "Jaipur", 
            type: "Seasonal Contract",
            duration: "3 months (peak season)",
            salary: "₹25,000 - ₹35,000 per month + performance bonuses",
            requirements: [
                "Proven experience as a professional Mehndi artist",
                "Portfolio showcasing diverse Mehndi styles",
                "Ability to work long hours during peak seasons",
                "Excellent customer service skills"
            ]
        }
    ];

    function showPage(pageId, jobId = null) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });

        // Show the selected page
        const selectedPage = document.getElementById(pageId);
        if (selectedPage) {
            selectedPage.classList.add('active');

            // Handle specific page logic
            switch(pageId) {
                case 'jobs':
                    populateJobs();
                    break;
                case 'job-details':
                    if (jobId) {
                        displayJobDetails(jobId);
                    }
                    break;
                case 'apply':
                    // Reset the application form if needed
                    document.getElementById('job-application-form').reset();
                    break;
                // Add more cases for other pages as needed
            }
        }

        // Update URL without reloading the page
        history.pushState(null, '', `#${pageId}`);
    }

    function populateJobs() {
        const jobList = document.getElementById('job-list');
        jobList.innerHTML = '';
        jobs.forEach(job => {
            const card = document.createElement('div');
            card.className = 'job-card';
            card.innerHTML = `
                <h3>${job.title}</h3>
                <p><strong>Category:</strong> ${job.category}</p>
                <p><strong>Location:</strong> ${job.location}</p>
                <p><strong>Type:</strong> ${job.type}</p>
                <p>${job.description}</p>
                <button class="details-button" onclick="showPage('job-details', ${job.id})">View Details</button>
            `;
            jobList.appendChild(card);
        });
    }

    function displayJobDetails(jobId) {
        const job = jobs.find(j => j.id === jobId);
        if (job) {
            const detailsContent = document.getElementById('job-details-content');
            detailsContent.innerHTML = `
                <h2>${job.title}</h2>
                <p><strong>Category:</strong> ${job.category}</p>
                <p><strong>Location:</strong> ${job.location}</p>
                <p><strong>Type:</strong> ${job.type}</p>
                <p><strong>Duration:</strong> ${job.duration}</p>
                <p><strong>Salary:</strong> ${job.salary}</p>
                <p>${job.fullDescription}</p>
                <h3>Requirements:</h3>
                <ul>
                    ${job.requirements.map(req => `<li>${req}</li>`).join('')}
                </ul>
                <button class="apply-button" onclick="showPage('apply')">Apply Now</button>
            `;
        }
    }

    // Search functionality
    document.getElementById('job-search').addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const filteredJobs = jobs.filter(job => 
            job.title.toLowerCase().includes(searchTerm) || 
            job.description.toLowerCase().includes(searchTerm) ||
            job.category.toLowerCase().includes(searchTerm) ||
            job.location.toLowerCase().includes(searchTerm) ||
            job.type.toLowerCase().includes(searchTerm)
        );
        
        const jobList = document.getElementById('job-list');
        jobList.innerHTML = '';
        filteredJobs.forEach(job => {
            const card = document.createElement('div');
            card.className = 'job-card';
            card.innerHTML = `
                <h3>${job.title}</h3>
                <p><strong>Category:</strong> ${job.category}</p>
                <p><strong>Location:</strong> ${job.location}</p>
                <p><strong>Type:</strong> ${job.type}</p>
                <p>${job.description}</p>
                <button class="details-button" onclick="showPage('job-details', ${job.id})">View Details</button>
            `;
            jobList.appendChild(card);
        });
    });

    // Form submissions
    document.getElementById('job-application-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your application. We will review it and get back to you soon!');
        showPage('home');
    });

    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Login functionality would be implemented here.');
        showPage('home');
    });

    document.getElementById('signup-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Sign up functionality would be implemented here.');
        showPage('home');
    });

    // Handle back/forward browser navigation
    window.addEventListener('popstate', function() {
        const pageId = location.hash.slice(1) || 'home';
        showPage(pageId);
    });

    // Initialize the page based on the current URL hash
    const initialPageId = location.hash.slice(1) || 'home';
    showPage(initialPageId);

    function showForm(formType) {
        document.querySelector('.apply-options').classList.add('hidden');
        document.getElementById(`${formType}-form`).classList.remove('hidden');
    }
    
    function hideForm(formType) {
        document.getElementById(`${formType}-form`).classList.add('hidden');
        document.querySelector('.apply-options').classList.remove('hidden');
    }
    
    // Add event listeners for form submissions
    document.getElementById('indian-culture-form').addEventListener('submit', function(e) {
        e.preventDefault();
        // Handle form submission for Indian Culture
        console.log('Indian Culture form submitted');
        // You can add AJAX call here to submit the form data
    });
    
    document.getElementById('modern-art-form').addEventListener('submit', function(e) {
        e.preventDefault();
        // Handle form submission for Modern Art
        console.log('Modern Art form submitted');
        // You can add AJAX call here to submit the form data
    });

    // Existing JavaScript...

document.addEventListener('DOMContentLoaded', function() {
    const applyForm = document.getElementById('apply-form');
    if (applyForm) {
        applyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;
            let portfolio = document.getElementById('portfolio').value;
            
            if (name.length < 2) {
                alert('Please enter a valid name');
                return;
            }
            
            if (!email.includes('@') || !email.includes('.')) {
                alert('Please enter a valid email address');
                return;
            }
            
            if (portfolio && !portfolio.startsWith('http')) {
                alert('Please enter a valid portfolio URL');
                return;
            }
            
            // If all validations pass, you can submit the form
            console.log('Form submitted successfully');
            // Here you would typically send the data to your server
        });
    }
    // Testimonial Carousel
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showNextTestimonial() {
    testimonials[currentTestimonial].style.display = 'none';
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].style.display = 'block';
}

setInterval(showNextTestimonial, 5000);

// Newsletter Signup
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        this.reset();
    });
}

// Job Search Functionality
const jobSearchButton = document.querySelector('.job-search button');
if (jobSearchButton) {
    jobSearchButton.addEventListener('click', function() {
        const searchTerm = document.querySelector('.job-search input').value;
        alert(`Searching for: ${searchTerm}`);
        // Implement actual search functionality here
    });
}

// Job Filtering
const jobFilters = document.querySelectorAll('.job-filters select');
if (jobFilters.length > 0) {
    jobFilters.forEach(select => {
        select.addEventListener('change', function() {
            alert(`Filter applied: ${this.value}`);
            // Implement actual filtering functionality here
        });
    });
    }
    function initMap() {
        const map = new google.maps.Map(document.getElementById("job-map"), {
            center: { lat: 20.5937, lng: 78.9629 },
            zoom: 5,
        });
    
        const jobs = [
            { lat: 19.0760, lng: 72.8777, title: "Classical Dancer in Mumbai" },
            { lat: 28.6139, lng: 77.2090, title: "Art Curator in Delhi" },
            { lat: 13.0827, lng: 80.2707, title: "Carnatic Musician in Chennai" }
        ];
    
        jobs.forEach(job => {
            new google.maps.Marker({
                position: { lat: job.lat, lng: job.lng },
                map,
                title: job.title,
            });
        });
    }
});


// Existing JavaScript...


// Make showPage function globally accessible
window.showPage = showPage;