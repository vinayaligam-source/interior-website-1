/**
 * INTERIOR CREATIVE DESIGN — OFFICIAL JAVASCRIPT SYSTEM
 * Handles: Full-Screen Hero Slider, Sticky Navigation, Mobile Drawer,
 * Category Filters, Statistics Counter, Testimonial Carousel,
 * Accessible Modals, Contact Form Validation, and Scroll Animations.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ==========================================================================
     1. DATA DICTIONARIES (PROJECTS & SERVICES MODAL DATA)
     ========================================================================== */
  const projectsData = {
    1: {
      title: 'The Obsidian Penthouse',
      category: 'Residential • Living Room',
      location: 'Beverly Hills, California [Editable Placeholder]',
      image: 'assets/images/project-1-penthouse.jpg',
      description: 'A 6,200 sq.ft double-height penthouse balancing dramatic dark nero marquina marble, brushed brass accents, and floor-to-ceiling panoramic skyline vistas. Featuring custom sunken seating, acoustic acoustic slatted timber ceilings, and warm indirect cove illumination.',
      materials: [
        'Nero Marquina & Calacatta Gold Honed Marble',
        'Custom Fluted American Walnut Millwork',
        'Architectural Flos & Ochre Sculptural Lighting',
        'Italian Bouclé and Aniline Leather Upholstery',
        'Lutron HomeWorks Intelligent Ambient Controls'
      ]
    },
    2: {
      title: 'Villa Aurelia Estate',
      category: 'Luxury Residential',
      location: 'Lake Como, Italy [Editable Placeholder]',
      image: 'assets/images/project-2-aurelia.jpg',
      description: 'A neoclassical lakeside heritage estate revitalized with minimalist architectural interventions. We celebrated classical soaring ceiling arches by introducing custom terrazzo floors, bronze pivot doors, and bespoke Scandinavian-Italian furnishings.',
      materials: [
        'Venetian Terrazzo & Custom Travertine Paving',
        'Natural White Oak Joinery with Shadow-Gap Details',
        'Bespoke Hand-Knotted Silk & Wool Floor Coverings',
        'Cast Bronze Hardware and Minimalist Pivot Profiles',
        'Curated Contemporary Artwork and Sculptural Niches'
      ]
    },
    3: {
      title: 'The Golden Minimalist Kitchen',
      category: 'Modular Kitchen Atelier',
      location: 'Tribeca, New York [Editable Placeholder]',
      image: 'assets/images/project-3-kitchen.jpg',
      description: 'An ultra-modern culinary atelier designed for effortless hosting. Seamless matte graphite cabinetry integrates motorized Blum hardware, an expansive waterfall Calacatta island, concealed prep scullery, and warm golden linear counter lighting.',
      materials: [
        'Anti-Fingerprint Matte Graphite Nanotech Surfaces',
        'Calacatta Extra Bookmatched Quartz Waterfall Island',
        'Brushed Brass Tapware & Integrated Golden LED Profiles',
        'Miele MasterCool & Gaggenau 400 Series Appliances',
        'Concealed Walk-In Butler Pantry with Automated Lighting'
      ]
    },
    4: {
      title: 'Serene Master Sanctuary',
      category: 'Luxury Bedroom Suite',
      location: 'Mayfair, London [Editable Placeholder]',
      image: 'assets/images/project-4-bedroom.jpg',
      description: 'An intimate bedroom suite curated as a retreat from city life. Soft taupe and ivory tones harmonize with tactile bouclé textures, customized dressing room millwork with backlit smoked glass, and integrated acoustic ceiling baffles.',
      materials: [
        'Custom Floating Headboard with Integrated Brass Readouts',
        'Backlit Smoked Glass and Bronze Wardrobe Enclosures',
        'Natural Belgian Linen Wall Drapery and Wool Sheers',
        'Herringbone French White Oak Parquet Flooring',
        'Layered 2700K Warm Dim Lighting Scene Controls'
      ]
    },
    5: {
      title: 'Horizon Financial Headquarters',
      category: 'Commercial Architecture',
      location: 'Geneva, Switzerland [Editable Placeholder]',
      image: 'assets/images/project-5-commercial.jpg',
      description: 'A prestigious multi-floor financial headquarters fusing European executive refinement with dynamic collaboration hubs. Acoustic double-glazed glass partitions create privacy while retaining natural mountain light throughout.',
      materials: [
        'Acoustic Felt Baffles with Integrated Linear Optics',
        'Executive Smoked Elm Boardroom Conference Table',
        'Brushed Black Aluminium Curtain Wall Partitions',
        'Kvadrat High-Performance Ergonomic Textiles',
        'Discreet Biophilic Planters and Air-Purifying Moss Walls'
      ]
    },
    6: {
      title: 'The Marble Courtyard Residence',
      category: 'Residential • Living Room',
      location: 'Emirates Hills, Dubai [Editable Placeholder]',
      image: 'assets/images/project-6-marble.jpg',
      description: 'An expansive open-concept pavilion embracing indoor-outdoor desert living. High-volume ceilings feature a monolithic double-sided travertine fireplace, custom sunken conversation salon, and floor-to-ceiling pocketing glass doors.',
      materials: [
        'Navona Honed Travertine Monolithic Fireplace',
        'Polished Micro-Cement Floors with Brass Inlays',
        'Custom Oversized Modular Seating by Living Divani',
        'Solar-Automated High-Performance Double Glazing',
        'Architectural Water Feature with Illuminated Reflective Pool'
      ]
    }
  };

  const servicesData = {
    1: {
      title: 'Residential Interior Design',
      category: '01 / RESIDENTIAL ATELIER',
      image: 'assets/images/service-1-residential.jpg',
      description: 'Comprehensive interior design services for private residences, villas, and apartments. From initial spatial restructuring to final turnkey styling, we create homes that evoke calmness, comfort, and timeless beauty.',
      deliverables: [
        'Holistic Architectural Space Planning & CAD Blueprints',
        'Custom Millwork & Bespoke Built-In Cabinetry Design',
        'Curated Material Palettes, Textures & Color Harmonies',
        'Lighting Design, Fixture Specification & Scene Planning',
        'Full Furniture Sourcing, Custom Procurement & Installation'
      ]
    },
    2: {
      title: 'Luxury Home Interiors',
      category: '02 / LUXURY ESTATES',
      image: 'assets/images/service-2-luxury.jpg',
      description: 'Bespoke design for premier penthouses, luxury estates, and landmark residences. We source the world’s most exquisite natural stones, rare woods, and artisan finishes to craft spaces of unmatched distinction.',
      deliverables: [
        'Architectural Detailing, Coffered Ceilings & Shadow Reveals',
        'Bookmatched Rare Marbles & Custom Masonry Detailing',
        'Fine Art Curation, Sculpture Niches & Gallery Lighting',
        'Smart-Home HomeWorks Automation Integration',
        'Dedicated Project Director & On-Site White-Glove Supervision'
      ]
    },
    3: {
      title: 'Modular Kitchen Design',
      category: '03 / KITCHEN ATELIER',
      image: 'assets/images/service-3-kitchen.jpg',
      description: 'Award-winning modular kitchen design tailored to culinary enthusiasts and entertaining hosts. Combining German engineering precision with Italian aesthetic grandeur.',
      deliverables: [
        'Ergonomic Work Triangle & Storage Volume Optimization',
        'Custom Cabinets with Premium Soft-Close German Hardware',
        'Quartz, Granite & Porcelain Continuous Island Surfaces',
        'Concealed Spice Pantries, Appliance Garages & Bar Niches',
        'Integrated Task & Ambient Golden Counter Illumination'
      ]
    },
    4: {
      title: 'Bedroom & Living Room Design',
      category: '04 / LIVING & REST',
      image: 'assets/images/service-4-bedroom-living.jpg',
      description: 'Creating restful sanctuaries and elegant living salons designed for intimate conversation, acoustic comfort, and rejuvenating daily routines.',
      deliverables: [
        'Custom Floating Headboards & Bed Wall Architectural Panelings',
        'Walk-In Dressing Rooms with Smoked Glass Wardrobes',
        'Acoustically Tuned Living Rooms & Media Salons',
        'High-End Tactile Fabrics, Bouclé, Linen & Velvet Upholstery',
        'Curated Area Rugs & Sculptural Occasional Tables'
      ]
    },
    5: {
      title: 'Office & Commercial Interiors',
      category: '05 / WORKSPACE',
      image: 'assets/images/service-5-commercial.jpg',
      description: 'Elevated corporate headquarters, private executive suites, boutique showrooms, and creative studios crafted to inspire teams and impress global clientele.',
      deliverables: [
        'Brand Identity Spatial Translation & Executive Architecture',
        'Acoustically Isolated Meeting Suites & Boardrooms',
        'Dynamic Collaborative Lounges & Ergonomic Workstations',
        'Commercial Building Code & ADA Accessibility Compliance',
        'Turnkey Commercial Fit-Out Management'
      ]
    },
    6: {
      title: 'Space Planning & Consultation',
      category: '06 / CONSULTATION',
      image: 'assets/images/service-6-consultation.jpg',
      description: 'Expert advisory for clients seeking design direction prior to construction. We provide clarity through photorealistic 3D visual walkthroughs and technical documentation.',
      deliverables: [
        'Detailed Architectural Layouts & Structural Coordination',
        'Photorealistic 3D Renderings & Virtual Walkthroughs',
        'Material Swatch Boards & Finish Specifications',
        'Contractor Scope Documentation & Bill of Quantities (BOQ)',
        'Virtual or In-Person Design Strategy Consultations'
      ]
    }
  };

  /* ==========================================================================
     2. HEADER & STICKY NAVIGATION
     ========================================================================== */
  const siteHeader = document.getElementById('site-header');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileClose = document.getElementById('mobile-close');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Handle Header background transition on scroll
  const handleHeaderScroll = () => {
    if (window.scrollY > 60) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll(); // Initial check

  // Mobile menu drawer open/close
  const openMobileNav = () => {
    menuToggle.classList.add('open');
    menuToggle.setAttribute('aria-expanded', 'true');
    mobileNav.classList.add('open');
    mobileNav.setAttribute('aria-hidden', 'false');
    mobileOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileNav = () => {
    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
    mobileOverlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.contains('open');
      isOpen ? closeMobileNav() : openMobileNav();
    });
  }

  if (mobileClose) mobileClose.addEventListener('click', closeMobileNav);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileNav);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  // Active navigation link highlighting on scroll
  const sections = document.querySelectorAll('section[id]');
  const highlightActiveNav = () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightActiveNav, { passive: true });

  /* ==========================================================================
     3. HERO SECTION — FULL-SCREEN IMAGE SLIDER
     ========================================================================== */
  const slides = document.querySelectorAll('.hero-slide');
  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');
  const paginationDots = document.querySelectorAll('.pagination-dot');
  const heroSection = document.getElementById('hero');

  let currentSlide = 0;
  const slideCount = slides.length;
  let slideInterval = null;
  const SLIDE_DURATION = 5000; // 5 seconds autoplay

  const goToSlide = (index) => {
    // Clear active states
    slides[currentSlide].classList.remove('active');
    paginationDots[currentSlide].classList.remove('active');
    paginationDots[currentSlide].setAttribute('aria-selected', 'false');

    currentSlide = (index + slideCount) % slideCount;

    // Set new active states
    slides[currentSlide].classList.add('active');
    paginationDots[currentSlide].classList.add('active');
    paginationDots[currentSlide].setAttribute('aria-selected', 'true');

    // Trigger text reveal animations
    triggerSlideAnimations(slides[currentSlide]);
  };

  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);

  const startAutoSlide = () => {
    stopAutoSlide();
    slideInterval = setInterval(nextSlide, SLIDE_DURATION);
  };

  const stopAutoSlide = () => {
    if (slideInterval) {
      clearInterval(slideInterval);
      slideInterval = null;
    }
  };

  function triggerSlideAnimations(slideEl) {
    const animatedElements = slideEl.querySelectorAll('.slide-tag, .slide-title, .slide-desc, .slide-buttons');
    animatedElements.forEach(el => {
      el.style.animation = 'none';
      void el.offsetWidth; // Force reflow
      el.style.animation = '';
    });
  }

  // Arrow controls
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      startAutoSlide(); // Reset autoplay timer
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      startAutoSlide(); // Reset autoplay timer
    });
  }

  // Pagination buttons
  paginationDots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      goToSlide(idx);
      startAutoSlide();
    });
  });

  // Pause on hover
  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopAutoSlide);
    heroSection.addEventListener('mouseleave', startAutoSlide);

    // Touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    heroSection.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoSlide();
    }, { passive: true });

    heroSection.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeDistance = touchStartX - touchEndX;
      if (Math.abs(swipeDistance) > 40) {
        if (swipeDistance > 0) {
          nextSlide(); // Swiped left -> go next
        } else {
          prevSlide(); // Swiped right -> go prev
        }
      }
      startAutoSlide();
    }, { passive: true });
  }

  // Keyboard navigation for slider
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' && window.scrollY < 400) {
      nextSlide();
      startAutoSlide();
    } else if (e.key === 'ArrowLeft' && window.scrollY < 400) {
      prevSlide();
      startAutoSlide();
    }
  });

  // Start slider
  startAutoSlide();

  /* ==========================================================================
     4. ABOUT SECTION — STATISTICS COUNTER ANIMATION
     ========================================================================== */
  const statNumbers = document.querySelectorAll('.stat-number');
  let statsCounted = false;

  const animateStats = () => {
    statNumbers.forEach(stat => {
      const target = +stat.getAttribute('data-target');
      const duration = 2000; // ms
      const startTime = performance.now();

      const updateCount = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing out cubic
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(easeOut * target);

        stat.textContent = currentCount;

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          stat.textContent = target;
        }
      };

      requestAnimationFrame(updateCount);
    });
  };

  const statsSection = document.querySelector('.stats-counter-bar');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !statsCounted) {
        statsCounted = true;
        animateStats();
      }
    }, { threshold: 0.25 });

    statsObserver.observe(statsSection);
  }

  /* ==========================================================================
     5. FEATURED PROJECTS — CATEGORY FILTERING
     ========================================================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card-wrapper');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active button
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category').split(' ');
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.classList.remove('hide');
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  /* ==========================================================================
     6. MODALS MANAGEMENT (PROJECTS, SERVICES & STORY)
     ========================================================================== */
  const projectModal = document.getElementById('project-modal');
  const serviceModal = document.getElementById('service-modal');
  const storyModal = document.getElementById('story-modal');

  // Open Project Modal
  const projectClickElements = document.querySelectorAll('.project-card');
  projectClickElements.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project-id');
      const data = projectsData[projectId];
      if (!data) return;

      document.getElementById('modal-project-img').src = data.image;
      document.getElementById('modal-project-img').alt = data.title;
      document.getElementById('modal-project-category').textContent = data.category;
      document.getElementById('modal-project-title').textContent = data.title;
      document.getElementById('modal-project-location-text').textContent = data.location;
      document.getElementById('modal-project-description').textContent = data.description;

      const materialsList = document.getElementById('modal-project-materials');
      materialsList.innerHTML = '';
      data.materials.forEach(mat => {
        const li = document.createElement('li');
        li.className = 'modal-spec-item';
        li.textContent = mat;
        materialsList.appendChild(li);
      });

      // Hook up inquiry button inside modal to pre-fill consultation form
      const inquireBtn = document.getElementById('modal-inquire-btn');
      if (inquireBtn) {
        inquireBtn.onclick = () => {
          closeAllModals();
          const messageField = document.getElementById('client-message');
          const typeSelect = document.getElementById('project-type');
          if (messageField) {
            messageField.value = `I am inquiring about a design concept inspired by "${data.title}" (${data.category}). Please share details on timeline and scope.`;
          }
          if (typeSelect) {
            // Select appropriate option if matches
            if (data.category.includes('Kitchen')) typeSelect.value = 'Modular Kitchen Design';
            else if (data.category.includes('Commercial')) typeSelect.value = 'Commercial Office / Showroom';
            else if (data.category.includes('Penthouse') || data.category.includes('Luxury')) typeSelect.value = 'Luxury Penthouse Renovation';
            else typeSelect.value = 'Residential Villa / Apartment';
          }
        };
      }

      openModal(projectModal);
    });
  });

  // Open Service Modal
  const serviceButtons = document.querySelectorAll('.service-link-btn');
  serviceButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const serviceId = btn.getAttribute('data-service-id');
      const data = servicesData[serviceId];
      if (!data) return;

      document.getElementById('modal-service-img').src = data.image;
      document.getElementById('modal-service-img').alt = data.title;
      document.getElementById('modal-service-badge').textContent = data.category;
      document.getElementById('modal-service-title').textContent = data.title;
      document.getElementById('modal-service-description').textContent = data.description;

      const deliverablesList = document.getElementById('modal-service-deliverables');
      deliverablesList.innerHTML = '';
      data.deliverables.forEach(deliv => {
        const li = document.createElement('li');
        li.className = 'modal-spec-item';
        li.textContent = deliv;
        deliverablesList.appendChild(li);
      });

      openModal(serviceModal);
    });
  });

  // Open Studio Story Modal
  const storyBtn = document.getElementById('open-story-btn');
  if (storyBtn) {
    storyBtn.addEventListener('click', () => {
      openModal(storyModal);
    });
  }

  // Modal helper functions
  function openModal(modalEl) {
    if (!modalEl) return;
    if (typeof modalEl.showModal === 'function') {
      modalEl.showModal();
    } else {
      modalEl.setAttribute('open', '');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeAllModals() {
    [projectModal, serviceModal, storyModal].forEach(modal => {
      if (modal && modal.open) {
        modal.close();
      }
    });
    document.body.style.overflow = '';
  }

  // Close modal buttons and backdrop clicks
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', closeAllModals);
  });

  // Escape key close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
      closeMobileNav();
    }
  });

  /* ==========================================================================
     7. TESTIMONIALS CAROUSEL
     ========================================================================== */
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const testPrevBtn = document.getElementById('test-prev');
  const testNextBtn = document.getElementById('test-next');
  const testDots = document.querySelectorAll('.test-dot');

  let currentTestimonial = 0;
  const testimonialCount = testimonialCards.length;
  let testInterval = null;

  const goToTestimonial = (index) => {
    testimonialCards[currentTestimonial].classList.remove('active');
    testDots[currentTestimonial].classList.remove('active');
    testDots[currentTestimonial].setAttribute('aria-selected', 'false');

    currentTestimonial = (index + testimonialCount) % testimonialCount;

    testimonialCards[currentTestimonial].classList.add('active');
    testDots[currentTestimonial].classList.add('active');
    testDots[currentTestimonial].setAttribute('aria-selected', 'true');
  };

  const nextTestimonial = () => goToTestimonial(currentTestimonial + 1);
  const prevTestimonial = () => goToTestimonial(currentTestimonial - 1);

  if (testNextBtn) testNextBtn.addEventListener('click', nextTestimonial);
  if (testPrevBtn) testPrevBtn.addEventListener('click', prevTestimonial);

  testDots.forEach((dot, idx) => {
    dot.addEventListener('click', () => goToTestimonial(idx));
  });

  // Auto rotate testimonials
  const startTestAuto = () => {
    testInterval = setInterval(nextTestimonial, 7000);
  };
  const stopTestAuto = () => clearInterval(testInterval);

  const testContainer = document.querySelector('.testimonials-slider-container');
  if (testContainer) {
    testContainer.addEventListener('mouseenter', stopTestAuto);
    testContainer.addEventListener('mouseleave', startTestAuto);
    startTestAuto();
  }

  /* ==========================================================================
     8. CONTACT & CONSULTATION FORM VALIDATION
     ========================================================================== */
  const consultationForm = document.getElementById('consultation-form');
  const formSuccess = document.getElementById('form-success');
  const successMessage = document.getElementById('success-message');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[\d\s\+\(\)\-]{7,20}$/;

  const validateField = (input, errorId, condition) => {
    const parent = input.closest('.form-group');
    if (!condition) {
      input.classList.add('invalid');
      parent.classList.add('has-error');
      return false;
    } else {
      input.classList.remove('invalid');
      parent.classList.remove('has-error');
      return true;
    }
  };

  if (consultationForm) {
    const nameInput = document.getElementById('client-name');
    const emailInput = document.getElementById('client-email');
    const phoneInput = document.getElementById('client-phone');
    const typeSelect = document.getElementById('project-type');
    const locationInput = document.getElementById('project-location');
    const budgetSelect = document.getElementById('project-budget');
    const messageInput = document.getElementById('client-message');

    // Real-time blur validation
    nameInput.addEventListener('blur', () => validateField(nameInput, 'name-error', nameInput.value.trim().length >= 2));
    emailInput.addEventListener('blur', () => validateField(emailInput, 'email-error', emailRegex.test(emailInput.value.trim())));
    phoneInput.addEventListener('blur', () => validateField(phoneInput, 'phone-error', phoneRegex.test(phoneInput.value.trim())));
    typeSelect.addEventListener('change', () => validateField(typeSelect, 'projectType-error', typeSelect.value !== ''));
    locationInput.addEventListener('blur', () => validateField(locationInput, 'location-error', locationInput.value.trim().length >= 2));
    budgetSelect.addEventListener('change', () => validateField(budgetSelect, 'budget-error', budgetSelect.value !== ''));
    messageInput.addEventListener('blur', () => validateField(messageInput, 'message-error', messageInput.value.trim().length >= 8));

    // Form submit
    consultationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const isNameValid = validateField(nameInput, 'name-error', nameInput.value.trim().length >= 2);
      const isEmailValid = validateField(emailInput, 'email-error', emailRegex.test(emailInput.value.trim()));
      const isPhoneValid = validateField(phoneInput, 'phone-error', phoneRegex.test(phoneInput.value.trim()));
      const isTypeValid = validateField(typeSelect, 'projectType-error', typeSelect.value !== '');
      const isLocValid = validateField(locationInput, 'location-error', locationInput.value.trim().length >= 2);
      const isBudgetValid = validateField(budgetSelect, 'budget-error', budgetSelect.value !== '');
      const isMsgValid = validateField(messageInput, 'message-error', messageInput.value.trim().length >= 8);

      if (isNameValid && isEmailValid && isPhoneValid && isTypeValid && isLocValid && isBudgetValid && isMsgValid) {
        const clientName = nameInput.value.trim();
        const projectType = typeSelect.value;
        
        // Show success state
        successMessage.textContent = `Thank you, ${clientName}! Your consultation request for ${projectType} has been received. Our senior design director will review your brief and contact you within 24 business hours.`;
        formSuccess.classList.add('show');
        
        // Smooth scroll to message
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Reset form
        consultationForm.reset();

        // Clear error states
        document.querySelectorAll('.form-group').forEach(group => group.classList.remove('has-error'));
        document.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(input => input.classList.remove('invalid'));

        // Hide success message after 8 seconds
        setTimeout(() => {
          formSuccess.classList.remove('show');
        }, 8000);
      } else {
        // Focus first invalid element
        const firstInvalid = consultationForm.querySelector('.invalid');
        if (firstInvalid) firstInvalid.focus();
      }
    });
  }

  /* ==========================================================================
     10. FAQ ACCORDION INTERACTIVITY
     ========================================================================== */
  const faqHeaders = document.querySelectorAll('.faq-header');
  faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.faq-item');
      const content = item.querySelector('.faq-content');
      const isOpen = item.classList.contains('open');

      // Close other accordions in the same list
      document.querySelectorAll('.faq-item').forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
          const otherContent = other.querySelector('.faq-content');
          if (otherContent) otherContent.style.maxHeight = null;
        }
      });

      if (!isOpen) {
        item.classList.add('open');
        content.style.maxHeight = content.scrollHeight + 30 + 'px';
      } else {
        item.classList.remove('open');
        content.style.maxHeight = null;
      }
    });
  });

  /* ==========================================================================
     11. SERVICES PAGE — INVESTMENT & TIMELINE ESTIMATOR
     ========================================================================== */
  const estType = document.getElementById('est-type');
  const estSize = document.getElementById('est-size');
  const estResultTimeline = document.getElementById('est-result-timeline');
  const estResultDesc = document.getElementById('est-result-desc');

  if (estType && estSize && estResultTimeline) {
    const calculateEstimate = () => {
      const type = estType.value;
      const size = estSize.value;

      let weeks = '8 – 12 Weeks';
      let desc = 'Complete architectural concept, 3D renderings, and turnkey delivery.';

      if (type === 'kitchen') {
        weeks = (size === 'estate' || size === 'large') ? '8 – 10 Weeks' : '6 – 8 Weeks';
        desc = 'Custom German-engineered cabinetry, quartz/porcelain waterfall counters, appliance integration, and golden ambient illumination.';
      } else if (type === 'penthouse') {
        weeks = size === 'estate' ? '16 – 22 Weeks' : '12 – 16 Weeks';
        desc = 'Haute architecture penthouse transformation including bookmatched stone masonry, smart automation, and bespoke soft furnishings.';
      } else if (type === 'commercial') {
        weeks = (size === 'estate' || size === 'large') ? '14 – 20 Weeks' : '10 – 14 Weeks';
        desc = 'Corporate architectural fit-out, acoustic boardrooms, executive collaborative lounges, and turnkey commercial staging.';
      } else { // residential
        if (size === 'estate') {
          weeks = '18 – 24 Weeks';
          desc = 'Full-scale private estate interior architecture, custom millwork joinery, stone cladding, and white-glove styling.';
        } else if (size === 'large') {
          weeks = '14 – 18 Weeks';
          desc = 'Comprehensive multi-level villa renovation, master suites, chef pantry kitchen, and salon living.';
        } else if (size === 'medium') {
          weeks = '10 – 14 Weeks';
          desc = 'Detailed 3D virtual walkthroughs, custom joinery, stone finishes, and full residential turnkey staging.';
        } else {
          weeks = '8 – 10 Weeks';
          desc = 'Optimized apartment spatial planning, custom lighting, bespoke furniture sourcing, and final reveal.';
        }
      }

      estResultTimeline.textContent = weeks;
      if (estResultDesc) estResultDesc.textContent = desc;
    };

    estType.addEventListener('change', calculateEstimate);
    estSize.addEventListener('change', calculateEstimate);
  }

  /* Catalog Sidebar Smooth Activation */
  const catalogNavBtns = document.querySelectorAll('.catalog-nav-btn');
  if (catalogNavBtns.length > 0) {
    catalogNavBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        catalogNavBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  }

  /* ==========================================================================
     9. SCROLL TRIGGERED REVEAL ANIMATIONS
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal-fade-up, .reveal-fade-left, .reveal-fade-right');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute('data-delay') || 0;
        if (delay > 0) {
          setTimeout(() => {
            entry.target.classList.add('reveal-visible');
          }, delay);
        } else {
          entry.target.classList.add('reveal-visible');
        }
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

});
