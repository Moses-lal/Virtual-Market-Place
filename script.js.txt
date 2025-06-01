// Sample freelancer data
const freelancers = [
    { name: "John Doe", skills: ["Web Development", "JavaScript"], rate: "$50/hr", description: "Experienced full-stack developer." },
    { name: "Jane Smith", skills: ["Graphic Design", "UI/UX"], rate: "$40/hr", description: "Creative designer with a passion for user-friendly interfaces." },
    { name: "Alex Brown", skills: ["Content Writing", "SEO"], rate: "$30/hr", description: "Skilled writer specializing in SEO content." },
];

// Function to display freelancers
function displayFreelancers(freelancerArray) {
    const freelancerList = document.getElementById('freelancerList');
    freelancerList.innerHTML = '';
    freelancerArray.forEach(freelancer => {
        const card = document.createElement('div');
        card.className = 'freelancer-card bg-white p-6 rounded-lg shadow-md';
        card.innerHTML = `
            <h3 class="text-xl font-semibold">${freelancer.name}</h3>
            <p class="text-gray-600">${freelancer.description}</p>
            <p class="text-blue-600 font-medium">Skills: ${freelancer.skills.join(', ')}</p>
            <p class="text-gray-800 font-medium">Rate: ${freelancer.rate}</p>
            <button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Hire Now</button>
        `;
        freelancerList.appendChild(card);
    });
}

// Initial display of freelancers
displayFreelancers(freelancers);

// Search functionality
document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredFreelancers = freelancers.filter(freelancer =>
        freelancer.skills.some(skill => skill.toLowerCase().includes(searchTerm)) ||
        freelancer.name.toLowerCase().includes(searchTerm)
    );
    displayFreelancers(filteredFreelancers);
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    alert(`Thank you, ${name}! Your message has been sent.`);
    this.reset();
});