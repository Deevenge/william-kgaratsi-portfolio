
// Typing Animation
const words = ["Web Developer", "PHP Developer", "WordPress Developer", "Frontend Developer"];
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
  kentronix: { title: "Kentronix", body: "<p><strong>Role:</strong> Web Developer</p><p>Built a modern corporate technology website with clean UI/UX and responsive design.</p>" },
  impact: { title: "Impact Edge", body: `<p><strong>Role:</strong> Lead Developer at Soft Kings IT Solutions</p><p><strong>Tools:</strong> WordPress, Elementor, RankMath SEO, HTML, CSS</p><ul><li>Built the website from scratch</li><li>Developed modern responsive layout</li><li>Integrated plugins and optimized performance</li><li>Applied on-page SEO</li></ul><p><strong>Live Site:</strong> <a href="https://impact-edge.co.za" target="_blank">impact-edge.co.za</a></p>` },
  sandy: { title: "Sandy's Sweet Treats", body: "<p><strong>Role:</strong> Full Stack Developer</p><p>Created a complete bakery website with menu, gallery, and ordering features.</p>" },
  agriseta: { title: "Agriseta", body: `<p><strong>Role:</strong> Website Developer (support and updates)</p><p><strong>Tools:</strong> WordPress, Elementor, HTML, CSS</p><ul><li>Updated official documents and integrated PDFs</li><li>Managed banner updates</li><li>Improved navigation and responsiveness</li></ul><p><strong>Live Site:</strong> <a href="https://www.agriseta.co.za/" target="_blank">agriseta.co.za</a></p>` },
  mrbuffalo: { title: "Mr Buffalo Food", body: "<p><strong>Role:</strong> Full Stack Developer</p><p>Built a modern food ordering website with cart system and WhatsApp integration.</p>" },
  wizgiene: { title: "Wizgiene", body: "<p><strong>Role:</strong> Web Developer</p><p>Designed and developed a clean, professional hygiene services website.</p>" }
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