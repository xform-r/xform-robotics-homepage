// Image Optimizer for XFORM Robotics Website
// Optimizes image loading for GitHub Pages performance

class ImageOptimizer {
  constructor() {
    this.observerOptions = {
      rootMargin: '50px 0px',
      threshold: 0.1
    };
    
    this.imageObserver = null;
    this.processedImages = new Set();
    this.init();
  }

  init() {
    this.setupIntersectionObserver();
    this.setupImagePreloading();
    this.setupResponsiveImages();
  }

  setupIntersectionObserver() {
    // Create intersection observer for lazy loading
    this.imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadImage(entry.target);
          this.imageObserver.unobserve(entry.target);
        }
      });
    }, this.observerOptions);

    // Observe all images
    this.observeImages();
  }

  observeImages() {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
      if (!this.processedImages.has(img)) {
        this.imageObserver.observe(img);
        this.processedImages.add(img);
      }
    });
  }

  async loadImage(imgElement) {
    const src = imgElement.dataset.src;
    if (!src) return;

    try {
      // Create a new image to preload
      const tempImg = new Image();
      
      tempImg.onload = () => {
        // Image loaded successfully
        imgElement.src = src;
        imgElement.classList.add('loaded');
        imgElement.removeAttribute('data-src');
        
        // Remove placeholder if exists
        const placeholder = imgElement.parentElement.querySelector('.image-placeholder');
        if (placeholder) {
          placeholder.style.display = 'none';
        }
        
        // Trigger animation
        this.animateImage(imgElement);
      };

      tempImg.onerror = () => {
        // Image failed to load
        this.handleImageError(imgElement);
      };

      // Start loading
      tempImg.src = src;
      
    } catch (error) {
      console.error('Error loading image:', error);
      this.handleImageError(imgElement);
    }
  }

  animateImage(imgElement) {
    // Add entrance animation
    imgElement.style.animation = 'fadeInScale 0.6s ease-out forwards';
    
    // Remove animation after completion
    setTimeout(() => {
      imgElement.style.animation = '';
    }, 600);
  }

  handleImageError(imgElement) {
    // Show error state
    imgElement.style.display = 'none';
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'image-error';
    errorDiv.innerHTML = `
      <div style="text-align: center; padding: 2rem; color: #ff6b6b;">
        <p>🖼️ Image failed to load</p>
        <p style="font-size: 0.9rem; margin-top: 0.5rem;">
          <a href="#" onclick="window.imageOptimizer.retryImage(this)">Retry</a>
        </p>
      </div>
    `;
    
    imgElement.parentElement.appendChild(errorDiv);
  }

  retryImage(element) {
    // Remove error message
    const errorDiv = element.closest('.image-error');
    if (errorDiv) {
      errorDiv.remove();
    }
    
    // Show image again and retry
    const img = errorDiv.parentElement.querySelector('img');
    if (img) {
      img.style.display = '';
      this.loadImage(img);
    }
  }

  setupImagePreloading() {
    // Preload critical images
    const criticalImages = [
      'images/robot-concepts/bipedal-robot-concept.jpg',
      'images/robot-concepts/tripedal-robot-concept.jpg'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }

  setupResponsiveImages() {
    // Add responsive image support
    const images = document.querySelectorAll('img[data-srcset]');
    
    images.forEach(img => {
      if ('srcset' in HTMLImageElement.prototype) {
        // Native srcset support
        img.srcset = img.dataset.srcset;
        img.sizes = img.dataset.sizes || '100vw';
      } else {
        // Fallback for older browsers
        this.loadResponsiveImage(img);
      }
    });
  }

  loadResponsiveImage(img) {
    const srcset = img.dataset.srcset;
    const sizes = img.dataset.sizes || '100vw';
    
    if (srcset) {
      // Parse srcset and select appropriate image
      const sources = this.parseSrcset(srcset);
      const selectedSrc = this.selectImageSource(sources, sizes);
      
      if (selectedSrc) {
        img.src = selectedSrc;
      }
    }
  }

  parseSrcset(srcset) {
    return srcset.split(',').map(src => {
      const [url, width] = src.trim().split(' ');
      return { url, width: parseInt(width) || 0 };
    });
  }

  selectImageSource(sources, sizes) {
    // Simple source selection based on viewport width
    const viewportWidth = window.innerWidth;
    
    // Find the best matching source
    let bestSource = sources[0];
    let bestDiff = Math.abs(viewportWidth - bestSource.width);
    
    sources.forEach(source => {
      const diff = Math.abs(viewportWidth - source.width);
      if (diff < bestDiff) {
        bestDiff = diff;
        bestSource = source;
      }
    });
    
    return bestSource.url;
  }

  // Method to add new images dynamically
  addImage(container, imageData) {
    const { src, alt, caption, lazy = true } = imageData;
    
    const imgContainer = document.createElement('div');
    imgContainer.className = 'image-container fade-in';
    
    if (lazy) {
      // Lazy loading setup
      imgContainer.innerHTML = `
        <div class="image-placeholder"></div>
        <img data-src="${src}" alt="${alt}" style="display: none;">
        ${caption ? `<p class="image-caption">${caption}</p>` : ''}
      `;
      
      const img = imgContainer.querySelector('img');
      this.imageObserver.observe(img);
      this.processedImages.add(img);
    } else {
      // Immediate loading
      imgContainer.innerHTML = `
        <img src="${src}" alt="${alt}">
        ${caption ? `<p class="image-caption">${caption}</p>` : ''}
      `;
      
      const img = imgContainer.querySelector('img');
      img.classList.add('loaded');
    }
    
    container.appendChild(imgContainer);
  }

  // Method to refresh image loading
  refresh() {
    this.observeImages();
  }
}

// Initialize image optimizer when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.imageOptimizer = new ImageOptimizer();
});

// Add CSS animation for image loading
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  .image-error {
    background: rgba(255, 107, 107, 0.1);
    border: 1px solid rgba(255, 107, 107, 0.3);
    border-radius: 15px;
    margin-top: 1rem;
  }
  
  .image-error a {
    color: #ff6b6b;
    text-decoration: none;
  }
  
  .image-error a:hover {
    text-decoration: underline;
  }
`;
document.head.appendChild(style);
