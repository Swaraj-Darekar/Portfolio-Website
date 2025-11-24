// ------------------------------
// PORTFOLIO DATA
// ------------------------------
const PORTFOLIO_DATA = {
    name: "Swaraj Maharudra Darekar",
    role: "AI & Data Science Engineer",
    location: "Pune, Maharashtra, India",
    email: "swarajdarekar3634@gmail.com",
    phone: "+91 7020374328",
    bio: "I am a Software Engineer with a strong focus on Artificial Intelligence and Data Science. My passion lies in developing efficient, user-friendly applications and systems that positively impact users.",
    
    skills: {
        frontend: ["HTML", "CSS", "JavaScript", "React.js"],
        backend: ["Java", "Spring Boot", "Flask"],
        aiml: ["Python", "TensorFlow/Keras", "CNNs"],
        database: ["MySQL", "MongoDB"]
    },
    
    projects: [
        {
            name: "Smart Campus Management System",
            type: "WebApp",
            description: "A comprehensive system to manage campus activities, student information, and administrative tasks efficiently."
        },
        {
            name: "Responsive Website for MSCIT Coaching",
            type: "WebApp",
            description: "A modern, mobile-friendly website for MSCIT coaching classes with course information and enrollment features."
        },
        {
            name: "RAG Based Teaching Assistant",
            type: "WebApp",
            description: "An AI-powered teaching assistant using Retrieval-Augmented Generation to help students with their queries."
        }
    ]
};

// ------------------------------
// ANIMATION FUNCTIONS
// ------------------------------
function hideInitialViewWithAnimation() {
    const initialView = document.getElementById('initialView');
    const topAvatar = document.getElementById('topAvatar');
    const searchContainer = document.getElementById('searchContainer');
    const navGrid = document.getElementById('navGrid');
    
    // Add animating class to trigger CSS animations
    initialView.classList.add('animating');
    
    // After animation completes, hide the initial view
    setTimeout(() => {
        initialView.classList.add('hidden');
        initialView.classList.remove('animating');
        
        // Show top avatar with bounce effect
        setTimeout(() => {
            topAvatar.classList.add('show');
        }, 100);
        
        // Move search bar and navigation up
        searchContainer.classList.add('moved-up');
        navGrid.classList.add('moved-up');
    }, 600);
}

// ------------------------------
// INTELLIGENT QUERY ANALYZER
// ------------------------------
function analyzeQuery(query) {
    const q = query.toLowerCase().trim();
    
    // Pattern matching for query understanding
    const patterns = {
        // Who/What/Where/When/Why/How questions
        identity: /^(who|what).*(you|your name|swaraj|darekar)/i,
        location: /^(where).*(from|live|located|based|location)/i,
        skills: /^(what).*(skill|know|can you|do you know|proficient|good at)/i,
        projects: /^(what).*(project|built|made|created|work)/i,
        experience: /^(how long|how much|what).*(experience|worked|year)/i,
        contact: /^(how).*(contact|reach|email|phone|call)/i,
        availability: /^(are you|is).*(available|free|hire|work)/i,
        
        // Specific technology questions
        technology: /\b(python|java|react|javascript|html|css|flask|spring|tensorflow|keras|mysql|mongodb|cnn)\b/i,
        
        // Why questions
        whyHire: /^(why).*(hire|choose|you)/i,
        
        // Greeting patterns
        greeting: /^(hi|hello|hey|good morning|good evening|namaste|greetings)\b/i,
        
        // Help patterns
        help: /^(help|what can|how to use|guide)/i
    };
    
    return patterns;
}

// ------------------------------
// SMART RESPONSE GENERATOR
// ------------------------------
function generateSmartResponse(query) {
    const q = query.toLowerCase().trim();
    const patterns = analyzeQuery(query);
    
    // Extract keywords from query
    const words = q.split(/\s+/);
    
    // ============================================
    // SECTION 1: GREETING RESPONSES
    // ============================================
    if (patterns.greeting.test(q)) {
        return {
            title: "Welcome! 👋",
            subtitle: "Great to meet you",
            content: `<p class="bio">Hey there! I'm ${PORTFOLIO_DATA.name}, an ${PORTFOLIO_DATA.role} based in ${PORTFOLIO_DATA.location}.</p>
                <p class="bio">${PORTFOLIO_DATA.bio}</p>
                <p class="bio">Feel free to explore my projects, skills, and get in touch if you'd like to collaborate!</p>`
        };
    }
    
    // ============================================
    // SECTION 2: IDENTITY QUESTIONS
    // ============================================
    if (patterns.identity.test(q) || q.includes("about") || q.includes("introduce")) {
        return {
            title: PORTFOLIO_DATA.name,
            subtitle: PORTFOLIO_DATA.role,
            content: `<p class="bio">I'm ${PORTFOLIO_DATA.name}, an ${PORTFOLIO_DATA.role} passionate about AI and technology.</p>
                <p class="bio">${PORTFOLIO_DATA.bio}</p>
                <p class="bio">Based in ${PORTFOLIO_DATA.location}, I specialize in building innovative solutions using modern technologies.</p>`
        };
    }
    
    // ============================================
    // SECTION 3: LOCATION QUESTIONS
    // ============================================
    if (patterns.location.test(q) || q.includes("location") || q.includes("city")) {
        return {
            title: "Location 📍",
            subtitle: PORTFOLIO_DATA.location,
            content: `<p class="bio">I'm based in ${PORTFOLIO_DATA.location}!</p>
                <p class="bio">Pune is a vibrant tech hub with a great community of developers and innovators. It's the perfect place for someone passionate about AI and technology!</p>`
        };
    }
    
    // ============================================
    // SECTION 4: CONTACT QUESTIONS
    // ============================================
    if (patterns.contact.test(q) || q.includes("contact") || q.includes("email") || q.includes("phone")) {
        return {
            title: "Contact Information",
            subtitle: "Let's connect!",
            content: `<p class="bio">You can reach me through:</p>
                <p class="bio">📧 Email: <strong>${PORTFOLIO_DATA.email}</strong></p>
                <p class="bio">📞 Phone: <strong>${PORTFOLIO_DATA.phone}</strong></p>
                <p class="bio">I'm also available on LinkedIn, Twitter, and GitHub. Check the contact section for all details!</p>`
        };
    }
    
    // ============================================
    // SECTION 5: AVAILABILITY QUESTIONS
    // ============================================
    if (patterns.availability.test(q) || q.includes("available") || q.includes("hire")) {
        return {
            title: "Availability Status",
            subtitle: "Ready for new challenges",
            content: `<p class="bio">Yes, I'm available for new opportunities and collaborations! 🚀</p>
                <p class="bio">Whether it's a full-time role, freelance project, or consulting work, I'm open to discussing how we can work together.</p>
                <p class="bio">Feel free to reach out through the contact section!</p>`
        };
    }
    
    // ============================================
    // SECTION 6: EXPERIENCE QUESTIONS
    // ============================================
    if (patterns.experience.test(q) || q.includes("experience") || q.includes("year")) {
        return {
            title: "Professional Experience",
            subtitle: "Career Journey",
            content: `<p class="bio">I'm a passionate Software Engineer specializing in AI and Data Science. I've worked on several impactful projects including campus management systems, educational platforms, and AI-powered applications.</p>
                <p class="bio">My experience spans full-stack development, machine learning implementations, and creating user-centric applications.</p>
                <p class="bio">I'm constantly learning and building innovative solutions that solve real-world problems!</p>`
        };
    }
    
    // ============================================
    // SECTION 7: PROJECT QUESTIONS
    // ============================================
    if (patterns.projects.test(q) || q.includes("project") || q.includes("portfolio") || q.includes("work")) {
        let projectsList = PORTFOLIO_DATA.projects.map((p, i) => 
            `<strong>${i + 1}. ${p.name}</strong>: ${p.description}`
        ).join('<br><br>');
        
        return {
            title: "My Projects",
            subtitle: "Building innovative solutions",
            content: `<p class="bio">I've worked on several exciting projects:</p>
                <p class="bio">${projectsList}</p>
                <p class="bio">Check the Projects section to explore them in detail!</p>`
        };
    }
    
    // ============================================
    // SECTION 8: SPECIFIC PROJECT QUESTIONS
    // ============================================
    if (q.includes("campus") || q.includes("management")) {
        return {
            title: "Smart Campus Management System",
            subtitle: "WebApp Project",
            content: `<p class="bio">This is a comprehensive system designed to manage campus activities, student information, and administrative tasks efficiently.</p>
                <p class="bio">It streamlines various campus operations and provides a centralized platform for managing educational institutions.</p>
                <p class="bio"><strong>Tech Stack:</strong> Full-stack development with modern frameworks</p>`
        };
    }
    
    if (q.includes("mscit") || q.includes("coaching")) {
        return {
            title: "MSCIT Coaching Website",
            subtitle: "WebApp Project",
            content: `<p class="bio">A modern, responsive website built for MSCIT coaching classes.</p>
                <p class="bio">Features include course information, enrollment capabilities, and a mobile-friendly design that works seamlessly across all devices.</p>
                <p class="bio"><strong>Tech Stack:</strong> HTML, CSS, JavaScript, responsive design</p>`
        };
    }
    
    if (q.includes("rag") || q.includes("teaching assistant")) {
        return {
            title: "RAG Based Teaching Assistant",
            subtitle: "AI-Powered WebApp",
            content: `<p class="bio">An intelligent teaching assistant powered by Retrieval-Augmented Generation (RAG) technology.</p>
                <p class="bio">It helps students by answering their queries using AI, providing personalized learning support.</p>
                <p class="bio"><strong>Tech Stack:</strong> Python, AI/ML frameworks, NLP</p>`
        };
    }
    
    // ============================================
    // SECTION 9: SKILLS QUESTIONS
    // ============================================
    if (patterns.skills.test(q) || q.includes("skill") || q.includes("expertise")) {
        return {
            title: "Skills & Expertise",
            subtitle: "Technical proficiencies",
            content: `<p class="bio">I have a diverse skill set across multiple domains:</p>
                <p class="bio"><strong>🎨 Frontend:</strong> ${PORTFOLIO_DATA.skills.frontend.join(", ")}</p>
                <p class="bio"><strong>⚙️ Backend:</strong> ${PORTFOLIO_DATA.skills.backend.join(", ")}</p>
                <p class="bio"><strong>🤖 AI/ML:</strong> ${PORTFOLIO_DATA.skills.aiml.join(", ")}</p>
                <p class="bio"><strong>💾 Database:</strong> ${PORTFOLIO_DATA.skills.database.join(", ")}</p>`
        };
    }
    
    // ============================================
    // SECTION 10: SPECIFIC TECHNOLOGY QUESTIONS
    // ============================================
    
    // Python
    if (q.includes("python")) {
        return {
            title: "Python Expertise",
            subtitle: "Core programming language",
            content: `<p class="bio">Yes! Python is one of my core skills. I use it extensively for:</p>
                <p class="bio">• Machine Learning & AI projects with TensorFlow and Keras<br>
                • Backend development with Flask<br>
                • Data processing and analysis<br>
                • Building intelligent applications</p>
                <p class="bio">Check out my RAG Teaching Assistant project to see Python in action!</p>`
        };
    }
    
    // React
    if (q.includes("react")) {
        return {
            title: "React.js Proficiency",
            subtitle: "Frontend development",
            content: `<p class="bio">Absolutely! React.js is my go-to frontend framework. I use it to build:</p>
                <p class="bio">• Modern, responsive user interfaces<br>
                • Single-page applications (SPAs)<br>
                • Dynamic, interactive web applications<br>
                • Component-based architectures</p>
                <p class="bio">This portfolio showcases my frontend development skills!</p>`
        };
    }
    
    // Java
    if (q.includes("java") || q.includes("spring")) {
        return {
            title: "Java & Spring Boot",
            subtitle: "Backend development expertise",
            content: `<p class="bio">Yes! Java is one of my strong suits, especially with Spring Boot for backend development.</p>
                <p class="bio">I use Java for:<br>
                • Building robust REST APIs<br>
                • Enterprise-level applications<br>
                • Microservices architecture<br>
                • Scalable backend systems</p>`
        };
    }
    
    // Add all other technology responses from your original file...
    // (I'm keeping this shorter for clarity, but include all your original responses)
    
    // ============================================
    // DEFAULT RESPONSE - INTELLIGENT FALLBACK
    // ============================================
    
    const allSkills = [...PORTFOLIO_DATA.skills.frontend, ...PORTFOLIO_DATA.skills.backend, 
                       ...PORTFOLIO_DATA.skills.aiml, ...PORTFOLIO_DATA.skills.database];
    
    return {
        title: "I'm Here to Help! 💡",
        subtitle: "Ask me anything about my work",
        content: `<p class="bio">I didn't quite catch that, but I'm happy to help!</p>
            <p class="bio"><strong>Quick Facts About Me:</strong><br>
            👨‍💻 ${PORTFOLIO_DATA.role} from ${PORTFOLIO_DATA.location}<br>
            🚀 Built ${PORTFOLIO_DATA.projects.length} major projects<br>
            🛠️ Expert in ${allSkills.slice(0, 4).join(", ")}<br>
            ✉️ Reachable at ${PORTFOLIO_DATA.email}</p>
            <p class="bio"><strong>Try asking:</strong><br>
            • "What projects have you built?"<br>
            • "Do you know [technology name]?"<br>
            • "How can I contact you?"<br>
            • "Are you available for work?"</p>`
    };
}

// ------------------------------
// SHOW SECTION WITH ANIMATION
// ------------------------------
function showSection(section) {
    // Check if animation is needed
    const initialView = document.getElementById('initialView');
    const needsAnimation = !initialView.classList.contains('hidden');
    
    if (needsAnimation) {
        hideInitialViewWithAnimation();
    }

    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(s => s.classList.remove('active'));

    // Remove active state from all nav cards
    const navCards = document.querySelectorAll('.nav-card');
    navCards.forEach(card => card.classList.remove('active'));

    // Wait for animation if needed
    const delay = needsAnimation ? 700 : 0;
    
    setTimeout(() => {
        const sectionMap = {
            'me': 'meSection',
            'projects': 'projectsSection',
            'skills': 'skillsSection',
            'contact': 'contactSection'
        };

        const sectionId = sectionMap[section];
        if (sectionId) {
            document.getElementById(sectionId).classList.add('active');
        }

        // Add active state to clicked nav card
        if (event && event.currentTarget) {
            event.currentTarget.classList.add('active');
        }
    }, delay);
}

// ------------------------------
// AI RESPONSE DISPLAY WITH ANIMATION
// ------------------------------
function showAIResponse(response) {
    // Check if animation is needed
    const initialView = document.getElementById('initialView');
    const needsAnimation = !initialView.classList.contains('hidden');
    
    if (needsAnimation) {
        hideInitialViewWithAnimation();
    }

    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(s => s.classList.remove('active'));

    // Remove active state from all nav cards
    const navCards = document.querySelectorAll('.nav-card');
    navCards.forEach(card => card.classList.remove('active'));

    // Wait for animation if needed
    const delay = needsAnimation ? 700 : 0;
    
    setTimeout(() => {
        const loadingSection = document.getElementById('loadingSection');
        loadingSection.classList.add('active');
        document.getElementById('loadingText').textContent = "Thinking...";

        // Show AI response after loading
        setTimeout(() => {
            loadingSection.classList.remove('active');
            
            const aiResponseSection = document.getElementById('aiResponseSection');
            const aiResponseTitle = document.getElementById('aiResponseTitle');
            const aiResponseSubtitle = document.getElementById('aiResponseSubtitle');
            const aiResponseText = document.getElementById('aiResponseText');
            
            aiResponseTitle.textContent = response.title;
            aiResponseSubtitle.textContent = response.subtitle;
            aiResponseText.innerHTML = response.content;
            aiResponseSection.classList.add('active');
        }, 1200);
    }, delay);
}

// ------------------------------
// ENHANCED SEARCH HANDLER
// ------------------------------
function handleSearch() {
    const input = document.getElementById('searchInput');
    const query = input.value.trim();

    if (!query) return;

    // Generate smart response
    const response = generateSmartResponse(query);
    
    // Show response with animation
    showAIResponse(response);
    
    // Clear input
    input.value = '';
}

// ------------------------------
// EVENT LISTENERS
// ------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    
    // Enter key support
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Add smooth scroll behavior
    const contentWrapper = document.querySelector('.content-wrapper');
    if (contentWrapper) {
        contentWrapper.style.scrollBehavior = 'smooth';
    }
});