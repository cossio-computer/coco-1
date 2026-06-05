/**
 * CoCo-1 Landing Page - JavaScript
 * Vanilla JS - Bilingual (ES/EN)
 */

// ============================================
// TRANSLATIONS
// ============================================
const translations = {
  es: {
    // Navigation
    nav_features: 'Características',
    nav_showcase: 'Producto',
    nav_testimonials: 'Testimonios',
    nav_preorder: 'Reservar',

    // Hero
    hero_badge: '¡Lanzamiento Junio 2026!',
    hero_title: 'CoCo-1',
    hero_title_suffix: ' BASIC Microcomputer',
    hero_description: 'El microordenador personal que une la nostalgia de los 80 con la tecnología de hoy. Perfecto para aprender, programar y revivir la magia de la era dorada de la computación.',
    hero_cta_primary: 'Reservar ahora',
    hero_cta_secondary: 'Saber más',
    launch_price: 'Precio lanzamiento',
    old_price: '49 €',
    new_price: '39 €',

    // Features
    features_title: 'Características',
    features_subtitle: 'Todo lo que necesitas en un microordenador compacto y potente',
    feature_1_title: 'Salida VGA',
    feature_1_desc: '640x480 monocromo o 320x240 color con 16 colores. Generada por la segunda CPU sin afectar al BASIC.',
    feature_2_title: 'Teclado USB',
    feature_2_desc: 'Compatible con cualquier teclado PC estándar. Configurable para ES, US, UK, DE, FR.',
    feature_3_title: 'BASIC avanzado',
    feature_3_desc: 'Intérprete MMBasic con aritmética 64 bits, matrices multidimensionales, funciones de usuario y más.',
    feature_4_title: 'Almacenamiento SD',
    feature_4_desc: 'Tarjeta SD hasta 32GB FAT16/FAT32. LED de actividad para lectura/escritura.',
    feature_5_title: 'Gráficos y sonido',
    feature_5_desc: 'Gráficos 16 colores, 8 fuentes, sonido estéreo PWM 1W. Juegos y visualizaciones.',
    feature_6_title: 'Puerto de expansión',
    feature_6_desc: '11 pines configurables como E/S digital o analógica. RTC, RS232, USB-C.',

    // Showcase
    showcase_title: 'Diseñado para ti',
    showcase_subtitle: 'Explora las posibilidades del CoCo-1',
    showcase_features: 'Características principales',
    check_vga: 'Salida VGA estándar',
    check_keyboard: 'Teclado USB universal',
    check_basic: 'Intérprete BASIC avanzado',
    check_sd: 'Almacenamiento SD',
    check_sound: 'Sonido estéreo',
    check_expansion: 'Puerto de expansión',
    check_rtc: 'Reloj en tiempo real',
    check_serial: 'Puertos RS232',
    specs_title: 'Especificaciones',
    spec_cpu: 'Procesador',
    spec_speed: 'Velocidad BASIC',
    spec_memory: 'Memoria',
    spec_storage: 'Almacenamiento',
    spec_display: 'Display',
    spec_audio: 'Audio',
    spec_power: 'Alimentación',
    spec_dimensions: 'Dimensiones',

    // Testimonials
    testimonials_title: 'Lo que dicen nuestros testers',
    testimonials_subtitle: 'Descubre qué opinan los primeros usuarios del CoCo-1',
    testimonial_1_quote: 'He probado otros proyectos retro, pero el CoCo-1 me ha sorprendido. La velocidad del BASIC es increíble y el hecho de tener VGA y USB es genial.',
    testimonial_1_author: 'Carlos Martínez',
    testimonial_1_role: 'Entusiasta retro',
    testimonial_2_quote: 'Perfecto para enseñar programación a mis hijos. La curva de aprendizaje es suave pero permite hacer cosas muy complejas cuando quieres.',
    testimonial_2_author: 'María García',
    testimonial_2_role: 'Profesora de informática',
    testimonial_3_quote: 'Lo uso como consola de desarrollo para mis proyectos de electrónica. Tener un intérprete BASIC rápido y un puerto de expansión no tiene precio.',
    testimonial_3_author: 'Antonio Ruiz',
    testimonial_3_role: 'Ingeniero electrónico',

    // Preorder
    preorder_title: '¡Reserva ahora!',
    preorder_subtitle: 'Asegura tu CoCo-1 al precio especial de lanzamiento',
    preorder_description: 'El precio de lanzamiento de 39 € está disponible exclusivamente para las primeras reservas. Incluye 2 años de garantía.',
    benefit_1: 'Precio especial de lanzamiento',
    benefit_2: 'Garantía de 2 años',
    benefit_3: 'Acceso prioritario',
    benefit_4: 'Soporte técnico incluido',
    benefit_5: 'Manuales en español e inglés',
    form_title: 'Formulario de reserva',
    form_subtitle: 'Cumplimenta el formulario con tus datos para procesar la reserva',
    label_name: 'Nombre completo',
    label_email: 'Correo electrónico',
    label_phone: 'Teléfono (opcional)',
    label_country: 'País',
    label_quantity: 'Cantidad',
    label_shipping: 'Envío',
    shipping_standard: 'Estándar (5-7 días)',
    shipping_express: 'Exprés (2-3 días)',
    price_subtotal: 'Subtotal',
    price_shipping: 'Envío',
    price_total: 'Total',
    btn_pay: 'Pagar con Stripe',
    secure_payment: 'Pago 100% seguro con Stripe',
    select_option: 'Seleccionar...',

    // Footer
    footer_description: 'Fabricante de microordenadores retro modernos.',
    footer_product: 'Producto',
    footer_links_product: ['CoCo-1', 'Manual de usuario', 'Especificaciones'],
    footer_company: 'Empresa',
    footer_links_company: ['Sobre nosotros', 'Contacto', 'Blog'],
    footer_legal: 'Legal',
    footer_links_legal: ['Privacidad', 'Términos', 'Devoluciones'],
    footer_copyright: 'Copyright © 2026 COSSIO COMPUTER. Todos los derechos reservados.',

    // Notifications
    notification_preorder_success: '¡Producto reservado! Recibirá noticias nuestras muy pronto.',
    notification_preorder_error: 'Error de procesamiento. Por favor, inténtelo nuevamente.',
    notification_email_invalid: 'Por favor, indique un correo electrónico válido.',
    notification_name_required: 'Introduzca su nombre, si es tan amable.',
  },

  en: {
    // Navigation
    nav_features: 'Features',
    nav_showcase: 'Product',
    nav_testimonials: 'Testimonials',
    nav_preorder: 'Pre-order',

    // Hero
    hero_badge: 'Launching June 2026!',
    hero_title: 'CoCo-1',
    hero_title_suffix: ' BASIC Microcomputer',
    hero_description: 'The personal microcomputer that combines 80s nostalgia with modern technology. Perfect for learning, programming, and reliving the magic of computing\'s golden age.',
    hero_cta_primary: 'Pre-order Now',
    hero_cta_secondary: 'Learn More',
    launch_price: 'Launch Price',
    old_price: '49 €',
    new_price: '39 €',

    // Features
    features_title: 'Features',
    features_subtitle: 'Everything you need in a compact, powerful microcomputer',
    feature_1_title: 'VGA Output',
    feature_1_desc: '640x480 mono or 320x240 color with 16 colors. Generated by the second CPU without affecting BASIC.',
    feature_2_title: 'USB Keyboard',
    feature_2_desc: 'Compatible with any standard PC keyboard. Configurable for ES, US, UK, DE, FR layouts.',
    feature_3_title: 'Advanced BASIC',
    feature_3_desc: 'MMBasic interpreter with 64-bit arithmetic, multi-dimensional arrays, user functions and more.',
    feature_4_title: 'SD Storage',
    feature_4_desc: 'SD card up to 32GB FAT16/FAT32. Activity LED for read/write operations.',
    feature_5_title: 'Graphics & Sound',
    feature_5_desc: '16-color graphics, 8 fonts, 1W stereo PWM sound. Games and visualizations.',
    feature_6_title: 'Expansion Port',
    feature_6_desc: '11 configurable pins as digital or analog I/O. RTC, RS232, USB-C.',

    // Showcase
    showcase_title: 'Designed for You',
    showcase_subtitle: 'Explore the CoCo-1 possibilities',
    showcase_features: 'Main Features',
    check_vga: 'Standard VGA output',
    check_keyboard: 'Universal USB keyboard',
    check_basic: 'Advanced BASIC interpreter',
    check_sd: 'SD card storage',
    check_sound: 'Stereo sound',
    check_expansion: 'Expansion port',
    check_rtc: 'Real-time clock',
    check_serial: 'RS232 ports',
    specs_title: 'Specifications',
    spec_cpu: 'Processor',
    spec_speed: 'BASIC Speed',
    spec_memory: 'Memory',
    spec_storage: 'Storage',
    spec_display: 'Display',
    spec_audio: 'Audio',
    spec_power: 'Power',
    spec_dimensions: 'Dimensions',

    // Testimonials
    testimonials_title: 'What our testers say',
    testimonials_subtitle: 'Discover what early CoCo-1 users think',
    testimonial_1_quote: 'I\'ve tried many retro projects, but the CoCo-1 has surprised me. The BASIC speed is incredible and having VGA and USB is great.',
    testimonial_1_author: 'Carlos Martínez',
    testimonial_1_role: 'Retro enthusiast',
    testimonial_2_quote: 'Perfect for teaching my kids programming. The learning curve is gentle but allows for very complex things when you want.',
    testimonial_2_author: 'María García',
    testimonial_2_role: 'Computer science teacher',
    testimonial_3_quote: 'I use it as a development console for my electronic projects. Having a fast BASIC interpreter and an expansion port is invaluable.',
    testimonial_3_author: 'Antonio Ruiz',
    testimonial_3_role: 'Electronics engineer',

    // Preorder
    preorder_title: 'Pre-order Now!',
    preorder_subtitle: 'Get your CoCo-1 at the special launch price',
    preorder_description: 'The launch price of 39 € is available exclusively for early reservations. Includes 2-year warranty.',
    benefit_1: 'Special launch price',
    benefit_2: '2-year warranty',
    benefit_3: 'Priority access',
    benefit_4: 'Technical support included',
    benefit_5: 'Manuals in Spanish & English',
    form_title: 'Pre-order Form',
    form_subtitle: 'Complete your details to process your reservation',
    label_name: 'Full name',
    label_email: 'Email address',
    label_phone: 'Phone (optional)',
    label_country: 'Country',
    label_quantity: 'Quantity',
    label_shipping: 'Shipping',
    shipping_standard: 'Standard (5-7 days)',
    shipping_express: 'Express (2-3 days)',
    price_subtotal: 'Subtotal',
    price_shipping: 'Shipping',
    price_total: 'Total',
    btn_pay: 'Pay with Stripe',
    secure_payment: '100% secure payment with Stripe',
    select_option: 'Select...',

    // Footer
    footer_description: 'Manufacturer of modern retro microcomputers.',
    footer_product: 'Product',
    footer_links_product: ['CoCo-1', 'User Manual', 'Specifications'],
    footer_company: 'Company',
    footer_links_company: ['About us', 'Contact', 'Blog'],
    footer_legal: 'Legal',
    footer_links_legal: ['Privacy', 'Terms', 'Returns'],
    footer_copyright: 'Copyright © 2026 COSSIO COMPUTER. All rights reserved.',

    // Notifications
    notification_preorder_success: 'Pre-order received! We\'ll contact you soon.',
    notification_preorder_error: 'Error processing. Please try again.',
    notification_email_invalid: 'Please enter a valid email.',
    notification_name_required: 'Name is required.',
  }
};

// ============================================
// STATE
// ============================================
let currentLang = 'es';
let formData = {
  name: '',
  email: '',
  phone: '',
  country: 'ES',
  quantity: 1,
  shipping: 'standard'
};

// ============================================
// DOM ELEMENTS
// ============================================
const langBtns = document.querySelectorAll('.lang-btn');
const navLinks = document.querySelectorAll('.nav-links a');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinksContainer = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');
const fadeElements = document.querySelectorAll('.fade-in');
const preorderForm = document.getElementById('preorderFormInner');
const quantitySelect = document.getElementById('quantity');
const shippingSelect = document.getElementById('shipping');
const countrySelect = document.getElementById('country');
const stripeBtn = document.querySelector('.btn-stripe');

// ============================================
// LANGUAGE SWITCHING
// ============================================
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  // Update active language button
  langBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update all text elements
  const t = translations[lang];

  // Hero
  document.querySelector('.hero-badge').textContent = t.hero_badge;
  document.getElementById('heroTitleSuffix').textContent = t.hero_title_suffix;
  document.getElementById('heroDescription').textContent = t.hero_description;
  document.getElementById('heroCtaPrimary').textContent = t.hero_cta_primary;
  document.getElementById('heroCtaSecondary').textContent = t.hero_cta_secondary;
  document.getElementById('launchPriceLabel').textContent = t.launch_price;
  document.getElementById('oldPrice').textContent = t.old_price;
  document.getElementById('newPrice').textContent = t.new_price;

  // Features
  document.getElementById('featuresTitle').textContent = t.features_title;
  document.getElementById('featuresSubtitle').textContent = t.features_subtitle;
  document.getElementById('feature1Title').textContent = t.feature_1_title;
  document.getElementById('feature1Desc').textContent = t.feature_1_desc;
  document.getElementById('feature2Title').textContent = t.feature_2_title;
  document.getElementById('feature2Desc').textContent = t.feature_2_desc;
  document.getElementById('feature3Title').textContent = t.feature_3_title;
  document.getElementById('feature3Desc').textContent = t.feature_3_desc;
  document.getElementById('feature4Title').textContent = t.feature_4_title;
  document.getElementById('feature4Desc').textContent = t.feature_4_desc;
  document.getElementById('feature5Title').textContent = t.feature_5_title;
  document.getElementById('feature5Desc').textContent = t.feature_5_desc;
  document.getElementById('feature6Title').textContent = t.feature_6_title;
  document.getElementById('feature6Desc').textContent = t.feature_6_desc;

  // Showcase
  document.getElementById('showcaseTitle').textContent = t.showcase_title;
  document.getElementById('showcaseSubtitle').textContent = t.showcase_subtitle;
  document.getElementById('showcaseFeatures').textContent = t.showcase_features;
  document.getElementById('checkVga').textContent = t.check_vga;
  document.getElementById('checkKeyboard').textContent = t.check_keyboard;
  document.getElementById('checkBasic').textContent = t.check_basic;
  document.getElementById('checkSd').textContent = t.check_sd;
  document.getElementById('checkSound').textContent = t.check_sound;
  document.getElementById('checkExpansion').textContent = t.check_expansion;
  document.getElementById('checkRtc').textContent = t.check_rtc;
  document.getElementById('checkSerial').textContent = t.check_serial;
  document.getElementById('specsTitle').textContent = t.specs_title;

  // Testimonials
  document.getElementById('testimonialsTitle').textContent = t.testimonials_title;
  document.getElementById('testimonialsSubtitle').textContent = t.testimonials_subtitle;
  document.getElementById('testimonial1Quote').textContent = t.testimonial_1_quote;
  document.getElementById('testimonial1Author').textContent = t.testimonial_1_author;
  document.getElementById('testimonial1Role').textContent = t.testimonial_1_role;
  document.getElementById('testimonial2Quote').textContent = t.testimonial_2_quote;
  document.getElementById('testimonial2Author').textContent = t.testimonial_2_author;
  document.getElementById('testimonial2Role').textContent = t.testimonial_2_role;
  document.getElementById('testimonial3Quote').textContent = t.testimonial_3_quote;
  document.getElementById('testimonial3Author').textContent = t.testimonial_3_author;
  document.getElementById('testimonial3Role').textContent = t.testimonial_3_role;

  // Preorder
  document.getElementById('preorderTitle').textContent = t.preorder_title;
  document.getElementById('preorderSubtitle').textContent = t.preorder_subtitle;
  document.getElementById('preorderDescription').textContent = t.preorder_description;
  document.getElementById('benefit1').textContent = t.benefit_1;
  document.getElementById('benefit2').textContent = t.benefit_2;
  document.getElementById('benefit3').textContent = t.benefit_3;
  document.getElementById('benefit4').textContent = t.benefit_4;
  document.getElementById('benefit5').textContent = t.benefit_5;
  document.getElementById('formTitle').textContent = t.form_title;
  document.getElementById('formSubtitle').textContent = t.form_subtitle;
  document.getElementById('labelName').textContent = t.label_name;
  document.getElementById('labelEmail').textContent = t.label_email;
  document.getElementById('labelPhone').textContent = t.label_phone;
  document.getElementById('labelCountry').textContent = t.label_country;
  document.getElementById('labelQuantity').textContent = t.label_quantity;
  document.getElementById('labelShipping').textContent = t.label_shipping;
  document.getElementById('shippingStandard').textContent = t.shipping_standard;
  document.getElementById('shippingExpress').textContent = t.shipping_express;
  document.getElementById('priceSubtotalLabel').textContent = t.price_subtotal;
  document.getElementById('priceShippingLabel').textContent = t.price_shipping;
  document.getElementById('priceTotalLabel').textContent = t.price_total;
  document.getElementById('btnPay').textContent = t.btn_pay;
  document.getElementById('securePayment').textContent = t.secure_payment;

  // Footer
  document.getElementById('footerDescription').textContent = t.footer_description;
  document.getElementById('footerProduct').textContent = t.footer_product;
  document.getElementById('footerCompany').textContent = t.footer_company;
  document.getElementById('footerLegal').textContent = t.footer_legal;
  document.getElementById('footerCopyright').textContent = t.footer_copyright;

  // Update country select options
  updateCountryOptions();

  // Update prices display
  updatePrices();
}

function updateCountryOptions() {
  const countries = currentLang === 'es' ? [
    { code: 'ES', name: 'España' },
    { code: 'MX', name: 'México' },
    { code: 'AR', name: 'Argentina' },
    { code: 'CO', name: 'Colombia' },
    { code: 'CL', name: 'Chile' },
    { code: 'PE', name: 'Perú' },
    { code: 'US', name: 'Estados Unidos' },
    { code: 'GB', name: 'Reino Unido' },
    { code: 'DE', name: 'Alemania' },
    { code: 'FR', name: 'Francia' },
    { code: 'PT', name: 'Portugal' },
    { code: 'IT', name: 'Italia' },
    { code: 'OTHER', name: 'Otro' }
  ] : [
    { code: 'ES', name: 'Spain' },
    { code: 'MX', name: 'Mexico' },
    { code: 'AR', name: 'Argentina' },
    { code: 'CO', name: 'Colombia' },
    { code: 'CL', name: 'Chile' },
    { code: 'PE', name: 'Peru' },
    { code: 'US', name: 'United States' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'DE', name: 'Germany' },
    { code: 'FR', name: 'France' },
    { code: 'PT', name: 'Portugal' },
    { code: 'IT', name: 'Italy' },
    { code: 'OTHER', name: 'Other' }
  ];

  const select = document.getElementById('country');
  const currentValue = select.value;
  select.innerHTML = `<option value="">${translations[currentLang].select_option}</option>` +
    countries.map(c => `<option value="${c.code}" ${c.code === currentValue ? 'selected' : ''}>${c.name}</option>`).join('');
}

// ============================================
// PRICE CALCULATION
// ============================================
const UNIT_PRICE = 39;
const SHIPPING_STANDARD = 5;
const SHIPPING_EXPRESS = 15;

function updatePrices() {
  const quantity = parseInt(quantitySelect?.value || 1);
  const shipping = shippingSelect?.value || 'standard';
  const shippingCost = shipping === 'express' ? SHIPPING_EXPRESS : SHIPPING_STANDARD;
  const subtotal = UNIT_PRICE * quantity;
  const total = subtotal + shippingCost;

  const t = translations[currentLang];
  const currency = '€';

  document.getElementById('subtotalAmount').textContent = `${currency}${subtotal}`;
  document.getElementById('shippingAmount').textContent = shipping === 'express' ? `${currency}${SHIPPING_EXPRESS}` : `${currency}${SHIPPING_STANDARD}`;
  document.getElementById('totalAmount').textContent = `${currency}${total}`;
}

// ============================================
// STRIPE INTEGRATION
// ============================================
function initStripe() {
  // Note: In production, you would use your actual Stripe publishable key
  // and create a payment intent on your server
  const stripePublishableKey = 'pk_test_YOUR_STRIPE_KEY';

  if (typeof Stripe !== 'undefined') {
    window.stripe = Stripe(stripePublishableKey);
  }

  stripeBtn?.addEventListener('click', handlePayment);
}

async function handlePayment(e) {
  e.preventDefault();

  const t = translations[currentLang];
  const name = document.getElementById('nameInput')?.value;
  const email = document.getElementById('emailInput')?.value;

  // Validation
  if (!name || name.trim().length < 2) {
    showNotification(t.notification_name_required, 'error');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    showNotification(t.notification_email_invalid, 'error');
    return;
  }

  // Show loading state
  stripeBtn.classList.add('loading');
  stripeBtn.disabled = true;

  // Simulate payment processing
  // In production, you would:
  // 1. Create a payment intent on your server
  // 2. Use Stripe.js to confirm the payment
  // 3. Handle the result

  setTimeout(() => {
    showNotification(t.notification_preorder_success, 'success');
    stripeBtn.classList.remove('loading');
    stripeBtn.disabled = false;

    // Reset form
    if (preorderForm) {
      preorderForm.reset();
    }
    updatePrices();
  }, 2000);

  /*
  // Production code:
  try {
    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: total * 100, // Stripe uses cents
        currency: 'eur',
        email: email,
        name: name
      })
    });

    const { clientSecret, error } = await response.json();

    if (error) {
      showNotification(error, 'error');
      return;
    }

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: name,
          email: email
        }
      }
    });

    if (result.error) {
      showNotification(result.error.message, 'error');
    } else {
      showNotification(t.notification_preorder_success, 'success');
      preorderForm.reset();
    }
  } catch (err) {
    showNotification(t.notification_preorder_error, 'error');
  }
  */
}

// ============================================
// NOTIFICATIONS
// ============================================
function showNotification(message, type = 'info') {
  // Remove existing notification
  const existing = document.querySelector('.notification');
  if (existing) {
    existing.remove();
  }

  // Create notification
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <span>${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}</span>
    <span>${message}</span>
  `;

  document.body.appendChild(notification);

  // Show
  setTimeout(() => notification.classList.add('show'), 10);

  // Hide after 4 seconds
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 4000);
}

// ============================================
// MOBILE MENU
// ============================================
function toggleMobileMenu() {
  navLinksContainer.classList.toggle('active');
}

mobileMenuBtn?.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking a link
navLinksContainer?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinksContainer.classList.remove('active');
  });
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
function handleScroll() {
  const scrollY = window.scrollY;
  navbar?.classList.toggle('scrolled', scrollY > 50);
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function handleScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  fadeElements.forEach(el => observer.observe(el));
}

// ============================================
// SMOOTH SCROLL FOR NAV LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ============================================
// FORM HANDLERS
// ============================================
quantitySelect?.addEventListener('change', updatePrices);
shippingSelect?.addEventListener('change', updatePrices);

// Form input tracking
preorderForm?.querySelectorAll('input, select').forEach(input => {
  input.addEventListener('change', (e) => {
    formData[e.target.name] = e.target.value;
  });
});

// ============================================
// IMAGE GALLERY
// ============================================
const showcaseImages = document.querySelectorAll('.showcase-image img');
let currentImageIndex = 0;

function cycleShowcaseImages() {
  if (showcaseImages.length > 1) {
    currentImageIndex = (currentImageIndex + 1) % showcaseImages.length;
    showcaseImages.forEach((img, i) => {
      img.style.opacity = i === currentImageIndex ? '1' : '0.3';
    });
  }
}

// Auto-cycle images every 5 seconds
setInterval(cycleShowcaseImages, 5000);

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Set initial language
  setLanguage(currentLang);

  // Initialize Stripe
  initStripe();

  // Initialize scroll animations
  handleScrollAnimations();

  // Set initial image state
  cycleShowcaseImages();

  // Populate country select
  updateCountryOptions();

  // Initialize prices
  updatePrices();
});

// Event listeners
langBtns.forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

window.addEventListener('scroll', handleScroll);

// Expose functions globally
window.setLanguage = setLanguage;
window.showNotification = showNotification;
