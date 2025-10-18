class SectionLoader {
  constructor() {
    console.log('SectionLoader constructor called');
    this.init();
  }

  async init() {
    console.log('SectionLoader init called');
    try {
      this.loadAllSections();
      this.setupAnimations();
      console.log('SectionLoader initialization complete');
    } catch (error) {
      console.error('Error in SectionLoader init:', error);
    }
  }

  loadAllSections() {
    console.log('Loading all sections...');
    
    // Load rethinking-robot-design section
    this.loadRethinkingSection();
    
    // Load robot-forms section
    this.loadRobotFormsSection();
    
    // Load roboverse section
    this.loadRoboverseSection();
    
    // Load research section
    this.loadResearchSection();
    
    console.log('All sections loaded');
  }

  loadRethinkingSection() {
    const targetElement = document.getElementById('rethinking-robot-design');
    if (targetElement) {
      targetElement.innerHTML = `
        <h2>Rethinking Robot Design</h2>
        <div class="question-grid">
          <div class="question-card fade-in">
            <h4>Typing?</h4>
            <p>[Diagram: Robot arm typing on keyboard] ❌</p>
            <div class="answer incorrect">
              <strong>Imagine doing the same with AI, get your robot assistant.</strong><br>
              [Diagram: Robot with virtual keyboard & mouse] ✅
            </div>
          </div>

          <div class="question-card fade-in">
            <h4>Capture video, skate tricks?</h4>
            <p>[Diagram: Robot arm skating] ❌</p>
            <div class="answer incorrect">
              <strong>+ Surveillance, inspection of unreachable roads</strong><br>
              Robot cam sketch to be most optimal.<br>
              [Diagram: Robot driving round track, drone filming] ✅
            </div>
          </div>

          <div class="question-card fade-in">
            <h4>Locomotion? Running</h4>
            <p>[Diagram: Human legs running] ❌</p>
            <div class="answer correct">
              <strong>Bipedal with actuated wheels (skateboard wheels)</strong><br>
              More speed!<br>
              [Diagram: Bipedal robot with wheels] ✅<br>
              <em>See: Whleaper - 10-DOF Flexible Bipedal Wheeled Robot</em>
            </div>
          </div>

          <div class="question-card fade-in">
            <h4>Fine work? Solder - Tweezers turning objects!</h4>
            <p>[Diagram: Robot hand using tweezer on iron pad] ❌</p>
            <div class="answer incorrect">
              <strong>This is an exciting one. Read on to explore the possibilities!</strong>
            </div>
          </div>
        </div>
      `;
      console.log('Rethinking section loaded');
    }
  }

  loadRobotFormsSection() {
    const targetElement = document.getElementById('robot-forms');
    if (targetElement) {
      targetElement.innerHTML = `
        <h2>THEN WHAT CAN IT LOOK LIKE?</h2>
        <h3 style="text-align: center; margin-bottom: 3rem;">TRANSFORMERS. LIVING IN A WORLD FILLED WITH EXTENDABLE AND CONNECTED ROBOTS.</h3>
        
        <div class="robot-forms">
          <div class="robot-form fade-in">
            <h4>Bipedal</h4>
            <p>Two legs with mountable wheels, LCD display</p>
            <ul class="features">
              <li>Basic house assistant</li>
              <li>Like a robotic pet</li>
              <li>Talk to you and monitor health</li>
              <li>Call someone in emergencies</li>
              <li>Wireless battery charger on bum</li>
              <li>Sits on charging mat like a pet</li>
            </ul>
          </div>

          <div class="robot-form fade-in">
            <h4>Tripedal</h4>
            <p>Bi-pedal with additional arm with gripper, antenna and stereo camera</p>
            <ul class="features">
              <li>Controls other robots</li>
              <li>Huge hip with display, CPU/GPU, battery</li>
              <li>Wireless battery charger on bum</li>
              <li>Can plug charger or USB cable</li>
              <li>Mounts on semi-autonomous platform</li>
            </ul>
          </div>

          <div class="robot-form fade-in">
            <h4>Quad Pedal</h4>
            <p>Four legs, vision, wheels for better grip, antenna, LCD, display/CPU</p>
            <ul class="features">
              <li>Dog shaped or 2 legs and 2 arms</li>
              <li>More advanced configuration</li>
              <li>Enhanced stability and mobility</li>
              <li>Versatile for various terrains</li>
            </ul>
          </div>

          <div class="robot-form fade-in">
            <h4>Hex Pedal</h4>
            <p>Six legs, LCD display</p>
            <ul class="features">
              <li>Arms can be modded with clippers or wheels</li>
              <li>Based on usecase/need</li>
              <li>Maximum stability and flexibility</li>
              <li>Ideal for complex environments</li>
            </ul>
          </div>
        </div>
      `;
      console.log('Robot forms section loaded');
    }
  }

  loadRoboverseSection() {
    const targetElement = document.getElementById('roboverse');
    if (targetElement) {
      targetElement.innerHTML = `
        <h2>Roboverse</h2>
        <h3>ROBOVERSE - Robots can combine and work together in the universe.</h3>
        
        <div class="roboverse-content">
          <div class="roboverse-item fade-in">
            <h4>Semi-autonomous Platform</h4>
            <p>Wheeled body, LCD screen, platform</p>
            <ul class="features">
              <li>Bipedal and tripedal can self-mount on platform</li>
              <li>Grip with legs and use camera & control</li>
              <li>Or use clipper gripper for fleet-based search and grab</li>
            </ul>
          </div>

          <div class="roboverse-item fade-in">
            <h4>Big Drone Module</h4>
            <p>One pedal with camera vision, bi/tri/quad/hex pedals</p>
            <ul class="features">
              <li>Lifted/mounts the drone</li>
              <li>Robot and drone combine capabilities</li>
              <li>Combined 360°+depth vision, navigation and sensors</li>
              <li>Navigate difficult, unknown or precision demanding environments</li>
            </ul>
          </div>

          <div class="roboverse-item fade-in">
            <h4>When exploring unknown caves</h4>
            <p>Drone and Hex (4 leg + 2 clipper) config provides robust flying and walking capabilities</p>
            <ul class="features">
              <li>Bi or tri-pedal can control drone module</li>
              <li>Provide user or robot planned waypoints and routes</li>
              <li>Bi-pedal and drone together captures family photographs</li>
              <li>Capture cinematographic videos of work, hobbies and travel</li>
            </ul>
          </div>

          <div class="roboverse-item fade-in">
            <h4>Robotics for Domestic Use</h4>
            <p>Portable and extendable Robotic Arm workbench</p>
            <ul class="features">
              <li>Multi robotic arms with 360° cam, 3D printer, USB</li>
              <li>Multiple workbench stations</li>
              <li>Iron clutches, perform infinitely expandable work</li>
              <li>360° cam, pick and place arm, robot arm, workbench</li>
              <li>3D printer-like mobile arm, USB for robot control</li>
            </ul>
          </div>
        </div>
      `;
      console.log('Roboverse section loaded');
    }
  }

  loadResearchSection() {
    const targetElement = document.getElementById('research');
    if (targetElement) {
      targetElement.innerHTML = `
        <h2>Real-World Examples & Research</h2>
        <p>Our philosophy is validated by cutting-edge research and real-world implementations.</p>
        
        <div class="research-content">
          <div class="research-item fade-in">
            <h4>Whleaper: A 10-DOF Flexible Bipedal Wheeled Robot</h4>
            <p><strong>Research Paper:</strong> <a href="https://arxiv.org/html/2504.21767v1" target="_blank" rel="noopener">https://arxiv.org/html/2504.21767v1</a></p>
            <p><strong>Authors:</strong> Researchers from Tsinghua University</p>
            <p><strong>Key Innovation:</strong> This robot demonstrates our core philosophy perfectly - form follows function, not human appearance.</p>
            
            <div class="technical-details">
              <h5>Technical Specifications:</h5>
              <ul>
                <li><strong>10 Degrees of Freedom (DOF):</strong> 5 DOFs per leg for maximum flexibility</li>
                <li><strong>3 DOFs at each hip:</strong> Enables complex motion patterns impossible with human-like joints</li>
                <li><strong>Integrated wheels:</strong> Combines walking and rolling locomotion</li>
                <li><strong>Modular design:</strong> Easy to modify and extend for different applications</li>
              </ul>
            </div>
            
            <!-- Whleaper Robot Visualization -->
            <div class="image-container">
              <img src="images/whleaper-robot-sample.svg" 
                   alt="Whleaper 10-DOF Bipedal Wheeled Robot - Technical diagram showing 5 DOFs per leg with integrated wheels" 
                   style="max-width: 400px; height: auto;"
                   onload="console.log('Image loaded successfully'); this.style.opacity='1'; this.style.transform='scale(1)';"
                   onerror="console.error('Image failed to load:', this.src); this.style.display='none'; this.nextElementSibling.innerHTML='<p style=\'color: #ff6b6b; font-style: italic;\'>🖼️ Image failed to load. Check console for details.</p>';">
              <p class="image-caption">Whleaper Robot: 10-DOF Bipedal Wheeled Robot with 3 hip joints per leg and integrated wheels</p>
            </div>
            
            <div class="philosophy-validation">
              <h5>How This Validates Our Philosophy:</h5>
              <ul>
                <li><strong>Function Over Form:</strong> The robot's appearance is dictated by its locomotion requirements, not human aesthetics</li>
                <li><strong>Superior Performance:</strong> 10 DOFs provide capabilities beyond human movement</li>
                <li><strong>Practical Design:</strong> Wheels integrated into legs for efficient multi-terrain navigation</li>
                <li><strong>Future-Ready:</strong> Modular architecture allows for easy upgrades and modifications</li>
              </ul>
            </div>
          </div>
        </div>
      `;
      console.log('Research section loaded');
    }
  }

  setupAnimations() {
    console.log('Setting up animations...');
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.section, .question-card, .robot-form, .roboverse').forEach(el => {
      observer.observe(el);
    });
    console.log('Animations setup complete');
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded - Initializing SectionLoader');
  try {
    window.sectionLoader = new SectionLoader();
    console.log('SectionLoader instance created:', window.sectionLoader);
  } catch (error) {
    console.error('Error creating SectionLoader:', error);
  }
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
  console.log('Setting up smooth scrolling...');
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
    });
  console.log('Smooth scrolling setup complete');
});
