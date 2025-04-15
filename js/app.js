let currentSlide = 0;
const slides = document.querySelectorAll(".slide")
const dots = document.querySelectorAll('.dot')

const init = (n) => {
  slides.forEach((slide, index) => {
    slide.style.display = "none"
    dots.forEach((dot, index) => {
      dot.classList.remove("active")
    })
  })
  slides[n].style.display = "block"
  dots[n].classList.add("active")
}
document.addEventListener("DOMContentLoaded", init(currentSlide))
const next = () => {
  currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++
  init(currentSlide)
}

const prev = () => {
  currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--
  init(currentSlide)
}

document.querySelector(".next").addEventListener('click', next)

document.querySelector(".prev").addEventListener('click', prev)


setInterval(() => {
  next()
}, 5000);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    console.log(currentSlide)
    init(i)
    currentSlide = i
  })
})  // Initialize AOS animation
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// DOM elements
const loadingOverlay = document.querySelector('.loading-overlay');
const backToTop = document.getElementById('backToTop');
const darkModeToggle = document.getElementById('darkModeToggle');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
const productImages = document.querySelectorAll('.product-image img');
const zoomContainer = document.getElementById('zoomContainer');
const zoomedImage = document.getElementById('zoomedImage');
const zoomClose = document.getElementById('zoomClose');
const wishlistButtons = document.querySelectorAll('.wishlist');
const filterButtons = document.querySelectorAll('.filter-button');
const pageNumbers = document.querySelectorAll('.page-number');

// Remove loading overlay when page is loaded
window.addEventListener('load', () => {
    setTimeout(() => {
        loadingOverlay.style.opacity = '0';
        setTimeout(() => {
            loadingOverlay.style.display = 'none';
        }, 500);
    }, 1000);
});

// Show/hide back to top button on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
        document.querySelector('header').classList.add('scrolled');
    } else {
        backToTop.classList.remove('visible');
        document.querySelector('header').classList.remove('scrolled');
    }
});

// Scroll to top when back to top button is clicked
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Toggle dark mode
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const icon = darkModeToggle.querySelector('i');
    if (document.body.classList.contains('dark')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Toggle mobile menu
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Image zoom functionality
productImages.forEach(img => {
    img.addEventListener('click', () => {
        zoomedImage.src = img.src;
        zoomContainer.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
});

zoomClose.addEventListener('click', () => {
    zoomContainer.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close zoom on click outside image
zoomContainer.addEventListener('click', (e) => {
    if (e.target === zoomContainer) {
        zoomContainer.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Toggle wishlist button
wishlistButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        const icon = button.querySelector('i');
        if (button.classList.contains('active')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
        }
    });
});

// Filter buttons functionality
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Pagination functionality
pageNumbers.forEach(page => {
    page.addEventListener('click', () => {
        if (!page.classList.contains('active') && !page.querySelector('i')) {
            pageNumbers.forEach(p => p.classList.remove('active'));
            page.classList.add('active');
        }
    });
});

// Add to cart animation
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        this.innerHTML = '<i class="fas fa-check"></i> Added';
        this.style.backgroundColor = '#28a745';
        
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
            this.style.backgroundColor = '';
        }, 2000);
        
        // Update cart count
        const cartBadge = document.querySelector('.fa-shopping-cart').nextElementSibling;
        cartBadge.textContent = parseInt(cartBadge.textContent) + 1;
    });
});


// article news space code to javascript


let articles = document.querySelectorAll(".article");

articles.forEach(i => {
  i.addEventListener(
    "mousemove",
    e => {
      let mouseX = e.offsetX;
      let mouseY = e.offsetY;
      i.querySelector(".overlay")
        .style.setProperty(
        "background-image",
        `radial-gradient(circle at ${(mouseX) * 100  / -i.offsetWidth+100}% ${(mouseY) * 100  / -i.offsetHeight+100}%,rgba(0,0,0,0.2) 25%,rgba(0,0,0,0.33) 50%)`
      );
      i.style.setProperty("transform", `rotateY(${  ( ( (mouseX*100) / i.offsetWidth - 50 ) / 100) * 2}deg) rotateX(${  ( ( (mouseY*100) / i.offsetHeight - 50 ) / 100) * 2}deg) `
)
    },
    false
  );
  i.addEventListener("mouseleave",()=>{
    i.style.setProperty("transform",`rotateX(0deg) rotateY(0deg)`);
    
          i.querySelector(".overlay")
        .style.setProperty(
        "background-image",
        `radial-gradient(circle at 50% 50%,rgba(0,0,0,0.2) 20%,rgba(0,0,0,0.3) 50%)`
      );
  })
});
