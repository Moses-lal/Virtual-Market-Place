// Sample freelancer data
const freelancers = [
  {
    name: "givininternet",
    skills: ["jQuery", "JSON", "React.js", "C# Programming", ".NET"],
    rate: "$40/hr",
    description:
      "Top Plus Rated Freelancer with 15+ years experience. Expert in Asp.Net, MVC, Blazor, Selenium, Devexpress, Angular, Wordpress, MERN Stack and more.",
    image:
      "https://cdn2.f-cdn.com/ppic/264416996/logo/3146904/vrlwj/CROPPED_profile_logo_ZNZHP_f121d135f39f03e48da5fe5e8ced5b0a.jpg?image-optimizer=force&format=webply&width=560",
  },
  {
    name: "mikehurley",
    skills: ["SEO", "Backlinks", "Meta Ad", "Google Ad"],
    rate: "$50/hr",
    description:
      "SEO, Link Building, Internet Marketing, Google Adwords specialist. 7000+ Reviews, 2000+ satisfied clients. 15+ Years of Professional Experience.",
    image:
      "https://cdn3.f-cdn.com/ppic/235490519/logo/2239716/LyIvt/CROPPED_profile_logo_EGVQN_16ada05214aa9a815c6159c4ab557994.jpeg?image-optimizer=force&format=webply&width=560",
  },
  {
    name: "globalsquares",
    skills: [
      "SEO",
      "Internet Marketing",
      "Link Building",
      "Marketing",
      "WordPress",
    ],
    rate: "$15/hr",
    description:
      "SEO expert for #1 Google ranking, link building, marketing. 2200+ clients. Result-oriented, transparent, with customer support after project delivery.",
    image:
      "https://cdn3.f-cdn.com/ppic/132572636/logo/6834258/WaTEM/profile_logo_.jpg?image-optimizer=force&format=webply&width=560",
  },
  {
    name: "MetaDesignIndia",
    skills: [
      "Graphic Design",
      "Logo Design",
      "Photoshop",
      "Illustration",
      "Banner Design",
    ],
    rate: "$30/hr",
    description:
      "Graphic designer with 9+ years experience in logo design, graphics & illustrations. Grab attention with eye-catching graphic design.",
    image:
      "https://cdn6.f-cdn.com/ppic/180867370/logo/19398498/loiCN/profile_logo_LinkedIn_19398498.jpg?image-optimizer=force&format=webply&width=560",
  },
  {
    name: "weblinkbuilding",
    skills: ["SEO", "Backlinks", "PPC", "SMM", "Wordpress", "Shopify"],
    rate: "$6/hr",
    description:
      "Progressive SEO & web marketing to keep your site on top. Delivering exceptional SEO results with a dedicated team.",
    image:
      "https://cdn6.f-cdn.com/ppic/210319560/logo/7579497/ntc6s/CROPPED_profile_logo_KGJHY_acb4892703fb2bfbc91529b6c346ddc6.jpeg?image-optimizer=force&format=webply&width=560",
  },
  {
    name: "seo4quality",
    skills: [
      "SEO",
      "Internet Marketing",
      "Link Building",
      "Marketing",
      "Search Engine Marketing",
    ],
    rate: "$3/hr",
    description:
      "1900+ Reviews | Google Certified SEO team | Advanced SEO services for ranking and results.",
    image: "images/seo4quality.jpg",
  },
  {
    name: "visionvivante",
    skills: ["PHP", "Website Design", "HTML", "eCommerce", "Magento"],
    rate: "$25/hr",
    description:
      "Preferred freelancer (Top 3%) for eCommerce platforms. Turning ideas into scalable, high-performance solutions.",
    image: "images/visionvivante.jpg",
  },
  {
    name: "Rahulbodara",
    skills: ["CSS", "React.js", "JavaScript", "Android", "ASP"],
    rate: "$15/hr",
    description:
      "Highly recommended Full-Stack Developer | 7+ years of experience | Specializing in scalable & robust solutions.",
    image: "images/rahulbodara.jpg",
  },
];

// Function to display freelancers
function displayFreelancers(freelancerArray) {
  const freelancerList = document.getElementById("freelancerList");
  freelancerList.innerHTML = "";

  const images = [
    "https://cdn2.f-cdn.com/ppic/264416996/logo/3146904/vrlwj/CROPPED_profile_logo_ZNZHP_f121d135f39f03e48da5fe5e8ced5b0a.jpg?image-optimizer=force&format=webply&width=560",
    "https://cdn3.f-cdn.com/ppic/235490519/logo/2239716/LyIvt/CROPPED_profile_logo_EGVQN_16ada05214aa9a815c6159c4ab557994.jpeg?image-optimizer=force&format=webply&width=560",
    "https://cdn3.f-cdn.com/ppic/132572636/logo/6834258/WaTEM/profile_logo_.jpg?image-optimizer=force&format=webply&width=560",
    "https://cdn6.f-cdn.com/ppic/180867370/logo/19398498/loiCN/profile_logo_LinkedIn_19398498.jpg?image-optimizer=force&format=webply&width=560",
    "https://cdn6.f-cdn.com/ppic/210319560/logo/7579497/ntc6s/CROPPED_profile_logo_KGJHY_acb4892703fb2bfbc91529b6c346ddc6.jpeg?image-optimizer=force&format=webply&width=560",
    "https://cdn3.f-cdn.com/ppic/185095548/logo/18236153/lvpPr/profile_logo_.png?image-optimizer=force&format=webply&width=560",
    "https://cdn5.f-cdn.com/ppic/258853655/logo/4040326/n0QZP/CROPPED_profile_logo_HUJBO_9a11768d2c2eea7c331011b06a7d4eb2.png?image-optimizer=force&format=webply&width=560",
    "https://cdn6.f-cdn.com/ppic/252602381/logo/6896539/k9W2M/CROPPED_profile_logo_OUZVF_5df5a6e0f615fa2253bce1ed900a56c2.png?image-optimizer=force&format=webply&width=560",
  ];

  freelancerArray.forEach((freelancer, index) => {
    const card = document.createElement("div");
    card.className =
      "freelancer-card bg-white p-6 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all";

    card.innerHTML = `
      <div class="flex items-center space-x-4 mb-4">
        <img src="${images[index % images.length]}" alt="${
      freelancer.name
    }" class="w-16 h-16 rounded-full object-cover ring-4 ring-blue-500 shadow-md">
        <div>
          <h3 class="text-xl font-semibold">${freelancer.name}</h3>
          <p class="text-sm text-gray-500">${freelancer.rate}</p>
        </div>
      </div>
      <p class="text-gray-700 mb-3">${freelancer.description}</p>
      <p class="text-blue-600 font-medium mb-4">Skills: ${freelancer.skills.join(
        ", "
      )}</p>
      <button class="hire-btn bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">Hire Now</button>
    `;

    freelancerList.appendChild(card);
  });

  // Add event listeners for Hire Now buttons
  const hireButtons = document.querySelectorAll(".hire-btn");
  hireButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const newTab = window.open("", "_blank");
      newTab.document.write(
        '<h1 style="font-family: Arial; text-align: center; margin-top: 50px;">You have reached the end</h1>'
      );
    });
  });
}

// Initial display of freelancers
displayFreelancers(freelancers);

// Search functionality
document.getElementById("searchInput").addEventListener("input", function (e) {
  const searchTerm = e.target.value.toLowerCase();
  const filteredFreelancers = freelancers.filter(
    (freelancer) =>
      freelancer.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm)
      ) || freelancer.name.toLowerCase().includes(searchTerm)
  );
  displayFreelancers(filteredFreelancers);
});

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  alert(`Thank you, ${name}! Your message has been sent.`);
  this.reset();
});
