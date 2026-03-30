
// Typing Animation
const words = [
  "Full Stack Developer",
  "Web Developer",
  "WordPress Specialist",
  "PHP & JavaScript Developer"
];
let i = 0, j = 0, currentWord = "", isDeleting = false;

function type() {
  currentWord = words[i];
  document.querySelector(".typing").textContent = currentWord.substring(0, j);

  if (!isDeleting && j === currentWord.length) { isDeleting = true; setTimeout(type, 1200); return; }
  if (isDeleting && j === 0) { isDeleting = false; i = (i + 1) % words.length; }

  const speed = isDeleting ? 60 : 100;
  j = isDeleting ? j - 1 : j + 1;
  setTimeout(type, speed);
}
type();

// Smooth scrolling for nav and buttons
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Project Modal
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".modal-close");

const projectData = {
  kentronix: { 
    title: "Kentronix", 
    body: `
      <p><strong>Role:</strong> Freelance Web Developer</p>
      <p><strong>Tools:</strong>Wordpress, HTML, CSS,Cpanel</p>
      <ul>
        <li>Built a modern corporate technology website</li>
        <li>Designed logo & animations</li>
        <li>Created banners using Canva</li>
      </ul>
      <p><strong>Live Site:</strong> <a href="https://kentronix.co.za" target="_blank">kentronix.co.za</a></p>
     
    ` 
  },

  impact: { 
    title: "Impact Edge", 
    body: `
      <p><strong>Role:</strong> Lead Developer at Soft Kings IT Solutions</p>
      <p><strong>Tools:</strong> WordPress, Elementor, HTML, CSS, Cpanel</p>
      <ul>
        <li>Built the website from scratch</li>
        <li>Developed modern responsive layout</li>
        <li>Integrated plugins and optimized performance</li>
        <li>Applied on-page SEO</li>
      </ul>
      <p><strong>Live Site:</strong> <a href="https://impact-edge.co.za" target="_blank">impact-edge.co.za</a></p>
    ` 
  },

  sandy: { 
    title: "Sandy's Sweet Treats", 
    body: `
      <p><strong>Role:</strong> Freelance Full Stack Developer</p>
      <p><strong>Tools:</strong> HTML, CSS, JavaScript, EmailJs,GitHub</p>
      <ul>
        <li>Created complete bakery website with menu, gallery & ordering</li>
        <li>Built responsive layout</li>
        <li>Created database and email system</li>
      </ul>
      <p><strong>Live Site:</strong> <a href="https://deevenge.github.io/sandys-sweet-treats/" target="_blank">sandys-sweet-treats</a></p>
      <p><strong>Code:</strong> <a href="https://github.com/Deevenge/sandys-sweet-treats" target="_blank">View on GitHub</a></p>
    ` 
  },

  agriseta: { 
    title: "Agriseta", 
    body: `
      <p><strong>Role:</strong> Junior Website Developer at Softkings (support & updates)</p>
      <p><strong>Tools:</strong> WordPress, Elementor, HTML, CSS</p>
      <ul>
        <li>Updated documents and integrated PDFs</li>
        <li>Managed banner updates</li>
        <li>Improved navigation and responsiveness</li>
      </ul>
      <p><strong>Live Site:</strong> <a href="https://www.agriseta.co.za/" target="_blank">agriseta.co.za</a></p>
    ` 
  },

  mrbuffalo: { 
    title: "Mr Buffalo Food", 
    body: `
      <p><strong>Role:</strong> Freelance Full Stack Developer</p>
      <p><strong>Tools:</strong> HTML, CSS, JavaScript, EmailJs,GitHub</p>
      <ul>
        <li>Built modern food ordering website with cart & WhatsApp integration</li>
        <li>Developed responsive layout</li>
        <li>Created database and email system</li>
    
      </ul>
      <p><strong>Live Site:</strong> <a href="https://your-mrbuffalo-link.com" target="_blank">Mr Buffalo Food</a></p>
      <p><strong>Code:</strong> <a href="https://github.com/Deevenge/foodbymrbuffalo" target="_blank">View on GitHub</a></p>
    ` 
  },

  wizgiene: { 
    title: "Wizgiene", 
    body: `
      <p><strong>Role:</strong> Jnr PHP Developer at Softkings IT Solutions</p>
      <p><strong>Tools:</strong> PHP,HTML, CSS, JavaScript</p>
      <p>Help Designed and developed a clean, professional hygiene services website.</p>
     <li>Worked on content integration and final polishing</li>
      <p>Intergrated payment gateways such as payfast API</p>
      <p><strong>Live Site:</strong> <a href="https://wizgiene.co.za/" target="_blank">Wizgiene</a></p>
      <p><em>(Company project - Source code not publicly available)</em></p>
    ` 
  }
};

document.querySelectorAll(".read-more-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.getAttribute("data-project");
    const data = projectData[key];
    modalTitle.textContent = data.title;
    modalBody.innerHTML = data.body;
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => modal.style.display = "none");
modal.addEventListener("click", e => { if (e.target === modal) modal.style.display = "none"; });