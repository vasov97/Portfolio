document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Smooth horizontal scroll for projects with drag
const projectsScroll = document.querySelector(".projects-scroll");
if (projectsScroll) {
  let isDown = false;
  let startX;
  let scrollLeft;

  projectsScroll.addEventListener("mousedown", (e) => {
    isDown = true;
    projectsScroll.style.cursor = "grabbing";
    startX = e.pageX - projectsScroll.offsetLeft;
    scrollLeft = projectsScroll.scrollLeft;
  });

  projectsScroll.addEventListener("mouseleave", () => {
    isDown = false;
    projectsScroll.style.cursor = "grab";
  });

  projectsScroll.addEventListener("mouseup", () => {
    isDown = false;
    projectsScroll.style.cursor = "grab";
  });

  projectsScroll.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - projectsScroll.offsetLeft;
    const walk = (x - startX) * 2;
    projectsScroll.scrollLeft = scrollLeft - walk;
  });
}

// Smooth horizontal scroll for testimonials with drag
const testimonialsScroll = document.querySelector(".testimonials-scroll");
if (testimonialsScroll) {
  let isDown = false;
  let startX;
  let scrollLeft;

  testimonialsScroll.addEventListener("mousedown", (e) => {
    isDown = true;
    testimonialsScroll.style.cursor = "grabbing";
    startX = e.pageX - testimonialsScroll.offsetLeft;
    scrollLeft = testimonialsScroll.scrollLeft;
  });

  testimonialsScroll.addEventListener("mouseleave", () => {
    isDown = false;
    testimonialsScroll.style.cursor = "grab";
  });

  testimonialsScroll.addEventListener("mouseup", () => {
    isDown = false;
    testimonialsScroll.style.cursor = "grab";
  });

  testimonialsScroll.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - testimonialsScroll.offsetLeft;
    const walk = (x - startX) * 2;
    testimonialsScroll.scrollLeft = scrollLeft - walk;
  });
}

// Navbar background on scroll
const navbar = document.querySelector(".navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (navbar) {
    if (currentScroll > 100) {
      navbar.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.5)";
    } else {
      navbar.style.boxShadow = "none";
    }
  }

  lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all cards and sections
const animatedElements = document.querySelectorAll(
  ".project-card, .tech-item, .testimonial-card, .flutterflow-card",
);
animatedElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});

// Add active state to nav links based on scroll position
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
});

// Project card click animation
// Project card click animation
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", function (e) {
    // Don't trigger animation if clicking on a link
    if (e.target.tagName === "A" || e.target.closest("a")) {
      return;
    }

    this.style.transform = "scale(0.98)";
    setTimeout(() => {
      this.style.transform = "";
    }, 200);
  });
});
// Add parallax effect to hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  if (hero && scrolled < window.innerHeight) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Tech stack item hover effect
document.querySelectorAll(".tech-item").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.05) rotate(2deg)";
  });

  item.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1) rotate(0deg)";
  });
});

// Console Easter egg
console.log(
  "%c👋 Hello Developer!",
  "font-size: 20px; color: #00ff88; font-weight: bold;",
);
console.log(
  "%cLike what you see? Let's work together!",
  "font-size: 14px; color: #a0a0a0;",
);

/* =========================================================
   ✅ NEW: Project slider (peek + dots + swipe/drag)
   Requires HTML ids: #projectViewport, #projectTrack, #projectDots
   ========================================================= */
(() => {
  const viewport = document.getElementById("projectViewport");
  const track = document.getElementById("projectTrack");
  const dotsWrap = document.getElementById("projectDots");

  // If slider isn't on the page, do nothing
  if (!viewport || !track || !dotsWrap) return;

  const slides = Array.from(track.querySelectorAll(".slider-slide"));

  if (!slides.length) return;

  let index = 0;

  // Read CSS variables from .project-slider container
  const sliderRoot =
    viewport.closest(".project-slider") || document.documentElement;

  function cssNumber(el, varName) {
    const v = getComputedStyle(el).getPropertyValue(varName).trim();
    return parseFloat(v.replace("px", "")) || 0;
  }

  function slideStep() {
    const gap = cssNumber(sliderRoot, "--gap"); // must match CSS
    const slideW = slides[0].getBoundingClientRect().width;
    return slideW + gap;
  }

  // Build dots
  dotsWrap.innerHTML = "";
  const dots = slides.map((_, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "slider-dot" + (i === 0 ? " active" : "");
    b.setAttribute("aria-label", `Go to slide ${i + 1}`);
    b.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(b);
    return b;
  });

  function setActiveDot(i) {
    dots.forEach((d, di) => d.classList.toggle("active", di === i));
  }

  function clamp(val, min, max) {
    return Math.max(min, Math.min(val, max));
  }

  function goTo(i) {
    index = clamp(i, 0, slides.length - 1);
    const x = -(index * slideStep());
    track.style.transition = "transform 320ms ease";
    track.style.transform = `translateX(${x}px)`;
    setActiveDot(index);
  }

  // Keep alignment on resize
  window.addEventListener("resize", () => goTo(index));

  // Drag / swipe via pointer events (mouse + touch)
  let isDown = false;
  let startX = 0;
  let startTranslate = 0;

  function getTranslateX() {
    const t = getComputedStyle(track).transform;
    if (t === "none") return 0;
    const m = new DOMMatrixReadOnly(t);
    return m.m41;
  }

  viewport.addEventListener("pointerdown", (e) => {
    // Check if clicking on interactive elements (links, buttons, inputs)
    const isInteractive = e.target.closest(
      "a, button, input, textarea, select",
    );

    if (isInteractive) {
      return; // Let the link/button work normally
    }

    isDown = true;
    viewport.classList.add("grabbing");
    startX = e.clientX;
    startTranslate = getTranslateX();
    track.style.transition = "none";
    viewport.setPointerCapture(e.pointerId);
  });

  viewport.addEventListener("pointermove", (e) => {
    if (!isDown) return;
    const dx = e.clientX - startX;
    const x = startTranslate + dx;
    track.style.transform = `translateX(${x}px)`;
  });

  viewport.addEventListener("pointerup", (e) => {
    if (!isDown) return;
    isDown = false;
    viewport.classList.remove("grabbing");

    const dx = e.clientX - startX;
    const threshold = slideStep() * 0.18;

    if (dx < -threshold) index += 1;
    if (dx > threshold) index -= 1;

    goTo(index);
  });

  viewport.addEventListener("pointercancel", () => {
    isDown = false;
    viewport.classList.remove("grabbing");
    goTo(index);
  });

  // Init
  goTo(0);
})();
// Contact form submission with Formspree
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitButton = contactForm.querySelector(".send-button");
    const originalText = submitButton.textContent;

    // Show loading state
    submitButton.textContent = "Sending...";
    submitButton.disabled = true;

    const formData = new FormData(contactForm);

    try {
      const response = await fetch("https://formspree.io/f/xkoonjge", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // Success
        submitButton.textContent = "✓ Message Sent!";
        submitButton.style.backgroundColor = "#00ff88";
        contactForm.reset();

        // Reset button after 3 seconds
        setTimeout(() => {
          submitButton.textContent = originalText;
          submitButton.style.backgroundColor = "";
          submitButton.disabled = false;
        }, 3000);
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      // Error
      submitButton.textContent = "✗ Failed. Try again.";
      submitButton.style.backgroundColor = "#ff4444";

      setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.style.backgroundColor = "";
        submitButton.disabled = false;
      }, 3000);
    }
  });
}
/* HAMBURGER MENU */
const ham = document.getElementById("hamburger");
const menu = document.getElementById("navLinks");
const overlay = document.getElementById("menuOverlay");

if (ham && menu && overlay) {
  ham.onclick = () => {
    ham.classList.toggle("active");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
  };

  overlay.onclick = () => {
    ham.classList.remove("active");
    menu.classList.remove("active");
    overlay.classList.remove("active");
  };

  menu.querySelectorAll("a").forEach((a) => {
    a.onclick = () => {
      ham.classList.remove("active");
      menu.classList.remove("active");
      overlay.classList.remove("active");
    };
  });
}
