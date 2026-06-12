document.addEventListener('DOMContentLoaded', () => {

    // 1. Detailed System Architecture Profiles for Modal Rendering
    const systemDatabase = {
        'customer-portal': {
            title: 'Customer Portal Framework',
            problem: 'Customers frequently contact internal teams for order updates, status reports, certificate access, and complaint updates.',
            approach: 'A secure, centralized customer portal providing customers with secure, direct access to active orders, documents, reports, and communication logs.',
            outcome: 'Significantly improves customer transparency, reduces internal operational coordination, and shortens response timelines.'
        },
        'bom-automation': {
            title: 'BOM Automation Framework',
            problem: 'Inaccurate material planning, excess or shortage of raw materials, and duplicate procurement activities due to non-standard product structures.',
            approach: 'A structured BOM automation framework that automatically calculates multi-level material requirements and integrates design parameters directly into store calculations.',
            outcome: 'Saves critical engineering planning hours, improves purchase ordering accuracy, and optimizes baseline material inventories.'
        },
        'work-order-automation': {
            title: 'Work Order Automation Workflow',
            problem: 'Manual work order preparation, approval bottlenecks, missing production instructions, and lack of real-time execution tracking.',
            approach: 'A structured workflow to instantly generate, distribute, track, and monitor job cards throughout the active production lifecycle on the floor.',
            outcome: 'Drastically accelerates work order transitions, clarifies step-by-step responsibilities, and provides automated stage notifications.'
        },
        'production-planning': {
            title: 'Production Planning Framework',
            problem: 'Frequent production rescheduling, capacity planning constraints, material availability uncertainty, and WIP accumulation on the floor.',
            approach: 'A structured capacity planning framework aligning customer demand, live raw material inventories, shift capabilities, and floor bottleneck priorities.',
            outcome: 'Improves shift throughput, minimizes resource idle times, and provides client managers with highly accurate shipping commitments.'
        },
        'document-control': {
            title: 'Store Operations Control Framework',
            problem: 'Inventory visibility issues, dead stock accumulation, inventory mismatches, delayed shortage reporting, and uncontrolled material movement.',
            approach: 'A structured store control framework enforcing strict FIFO management, standardized inward audits, and work-order-based material issuance limits.',
            outcome: 'Establishes absolute inventory accuracy, optimizes physical warehouse space, and eliminates manual stock validation gaps.'
        }
    };

    const modal = document.getElementById('details-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const closeModalBtn = document.querySelector('.close-modal-btn');

    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const systemKey = e.currentTarget.getAttribute('data-system');
            const data = systemDatabase[systemKey];

            if (data && modalTitle && modalBody && modal) {
                modalTitle.textContent = data.title;
                modalBody.innerHTML = `
                    <div class="modal-section">
                        <div class="modal-section-title">Operational Challenge</div>
                        <p>${data.problem}</p>
                    </div>
                    <div class="modal-section">
                        <div class="modal-section-title">Processwallah Solution</div>
                        <p>${data.approach}</p>
                    </div>
                    <div class="modal-section">
                        <div class="modal-section-title">Expected Outcome</div>
                        <p>${data.outcome}</p>
                    </div>
                `;
                modal.classList.add('active');
                modal.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    const hideModal = () => {
        if (modal) {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    };

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', hideModal);
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                hideModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            hideModal();
        }
    });


    // 2. Interactive Feature Gallery (Case Study Screenshots System)
    const galleryThumbs = document.querySelectorAll('.gallery-thumbnail');
    const mainCaseImg = document.getElementById('main-case-img');

    if (galleryThumbs && mainCaseImg) {
        galleryThumbs.forEach(thumb => {
            thumb.addEventListener('click', (e) => {
                galleryThumbs.forEach(t => t.classList.remove('active'));

                const selectedThumb = e.currentTarget;
                selectedThumb.classList.add('active');

                const sourceImage = selectedThumb.getAttribute('data-img');
                
                mainCaseImg.style.opacity = '0.4';
                setTimeout(() => {
                    mainCaseImg.setAttribute('src', sourceImage);
                    mainCaseImg.style.opacity = '1';
                }, 120);
            });
        });
    }


    // 3. Mobile Navigation Controls (Hamburger Integration)
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    const toggleMobileMenu = () => {
        if (mobileMenuOverlay && mobileNavToggle) {
            mobileMenuOverlay.classList.toggle('active');
            mobileNavToggle.classList.toggle('active');
            document.body.style.overflow = mobileMenuOverlay.classList.contains('active') ? 'hidden' : '';
        }
    };

    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', toggleMobileMenu);
    }

    if (mobileLinks && mobileMenuOverlay && mobileNavToggle) {
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuOverlay.classList.remove('active');
                mobileNavToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }


    // 4. Consultation Form Submissions Interceptor (Apps Script Web App Post)
    const consultationForm = document.querySelector('.consultation-form');
    if (consultationForm) {
        consultationForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = consultationForm.querySelector('button[type="submit"]');
            const formPanel = document.querySelector('.contact-form-panel');

            // Collect form fields defensively
            const nameEl = document.getElementById('form-name');
            const companyEl = document.getElementById('form-company');
            const emailEl = document.getElementById('form-email');
            const mobileEl = document.getElementById('form-mobile');
            const messageEl = document.getElementById('form-message');

            if (nameEl && companyEl && emailEl && mobileEl && messageEl && submitBtn && formPanel) {
                const name = nameEl.value.trim();
                const company = companyEl.value.trim();
                const email = emailEl.value.trim();
                const mobile = mobileEl.value.trim();
                const message = messageEl.value.trim();

                // Store original button text and disable to prevent concurrent double-submissions
                const originalBtnText = submitBtn.textContent;
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending Inquiry...';

                // Construct form data payload
                const payload = {
                    name: name,
                    company: company,
                    email: email,
                    mobile: mobile,
                    message: message
                };

                // Google Apps Script Web App Deployment URL
                const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxCLUm-QyGVLpNeSXyY-m5FTdvlFWWj07e_2JpSkz6LIduA47G2wIW1OoDpti9d3o8vLg/exec'; // Replace this URL after Google deployment

                try {
                    // Send cross-origin JSON post payload asynchronously
                    await fetch(APPS_SCRIPT_URL, {
                        method: 'POST',
                        mode: 'no-cors', // Bypasses CORS browser redirect sandboxing
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(payload)
                    });

                    // Render success confirmation card replacing standard input elements
                    formPanel.innerHTML = `
                        <div class="submission-success-card">
                            <div class="success-icon-container">
                                <svg viewBox="0 0 24 24" class="success-icon">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <h3 class="success-title">Thank you for contacting Processwallah</h3>
                            <p class="success-desc">Your inquiry has been received successfully.</p>
                            <p class="success-subdesc">We will review your workflow requirements and contact you shortly.</p>
                            <div class="redirect-loader"></div>
                        </div>
                    `;

                    // Graceful redirect to root index page after 2.5 seconds
                    setTimeout(() => {
                        window.location.href = '/';
                    }, 2500);

                } catch (error) {
                    console.error('Submission encountered an error:', error);

                    // Remove previous inline errors if they exist
                    const existingError = consultationForm.querySelector('.submission-error-alert');
                    if (existingError) {
                        existingError.remove();
                    }

                    // Render structured visual alert block directly inside card
                    const errorAlert = document.createElement('div');
                    errorAlert.className = 'submission-error-alert';
                    errorAlert.textContent = 'Transmission failed. Please verify your connection parameters and try again.';
                    consultationForm.insertBefore(errorAlert, submitBtn.parentNode);

                    // Re-enable interactive elements to restore submission capability
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalBtnText;
                }
            }
        });
    }
});
