document.addEventListener('DOMContentLoaded', () => {

    // 1. Detailed System Architecture Profiles for Modal Rendering
    const systemDatabase = {
        'customer-portal': {
            title: 'Customer Portal Structure',
            problem: 'Clients rely on continuous phone threads, emails, and calls to request purchase order completion data and dispatch schedules.',
            approach: 'Establish a read-only secure database portal pulling dispatch details directly from warehouse floor registers.',
            outcome: 'Substantially reduces redundant administrative support time and provides distributors with transparent shipping updates.'
        },
        'bom-automation': {
            title: 'BOM Automation Framework',
            problem: 'Manual multi-level Bill of Materials parsing introduces purchase ordering mistakes, delaying production starts.',
            approach: 'Write script validations that automatically crosscheck product design outputs with current physical inventory items.',
            outcome: 'Corrects inventory estimation human errors and eliminates downtime caused by short stock.'
        },
        'work-order-automation': {
            title: 'Work Order Automation Workflow',
            problem: 'Delays transitioning newly-confirmed purchase agreements into physical route logs and tool setups.',
            approach: 'Deploy database automated triggers to instantly convert approved orders into shop-floor task queues.',
            outcome: 'Minimizes setup wait time and keeps active production closely matched with purchase orders.'
        },
        'production-planning': {
            title: 'Production Planning Framework',
            problem: 'Inflexible manufacturing scheduling based on estimations, creating station blocks and delivery delays.',
            approach: 'Create integrated capacity layouts that crosscheck shift targets directly with supplier raw material arrival trackers.',
            outcome: 'Smooths floor throughout bottlenecks and gives client managers accurate shipping timelines.'
        },
        'inspection-reporting': {
            title: 'Inspection & Reporting Framework',
            problem: 'Defect sheets are kept on paper registers, hiding manufacturing scrap and quality patterns.',
            approach: 'Implement mobile floor data templates allowing point-of-inspection quality logs to directly map to defect charts.',
            outcome: 'Saves time, isolates raw-material quality issues, and prevents defective units from shipping.'
        },
        'mis-dashboard': {
            title: 'MIS Dashboard Systems',
            problem: 'Management reviews weekly metrics days after shifts are closed, making real-time corrections impossible.',
            approach: 'Compile output logs into clear, dynamic, and integrated analytics boards updated during the active shift.',
            outcome: 'Replaces guessed output numbers with exact data, helping management identify process bottlenecks immediately.'
        },
        'document-control': {
            title: 'Document Control & Traceability',
            problem: 'Production floor teams occasionally manufacture tooling components using outdated drawing versions.',
            approach: 'Build a centralized version-controlled document index linked to active job schedules on shop floor terminals.',
            outcome: 'Eliminates product waste caused by assembly errors and supports ISO audit tracking.'
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

            if (data) {
                modalTitle.textContent = data.title;
                modalBody.innerHTML = `
                    <div class="modal-section">
                        <div class="modal-section-title">The Problem</div>
                        <p>${data.problem}</p>
                    </div>
                    <div class="modal-section">
                        <div class="modal-section-title">Practical Approach</div>
                        <p>${data.approach}</p>
                    </div>
                    <div class="modal-section">
                        <div class="modal-section-title">Business Outcome</div>
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
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    closeModalBtn.addEventListener('click', hideModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            hideModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            hideModal();
        }
    });


    // 2. Interactive Feature Gallery (Case Study Screenshots System)
    const galleryThumbs = document.querySelectorAll('.gallery-thumbnail');
    const mainCaseImg = document.getElementById('main-case-img');

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


    // 3. Mobile Navigation Controls
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    const toggleMobileMenu = () => {
        mobileMenuOverlay.classList.toggle('active');
        mobileNavToggle.classList.toggle('active');
        document.body.style.overflow = mobileMenuOverlay.classList.contains('active') ? 'hidden' : '';
    };

    mobileNavToggle.addEventListener('click', toggleMobileMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuOverlay.classList.remove('active');
            mobileNavToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });


    // 4. Consultation Form Submissions Interceptor (Generates Pre-Filled Email Action)
    const consultationForm = document.querySelector('.consultation-form');
    consultationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('form-name').value;
        const company = document.getElementById('form-company').value;
        const email = document.getElementById('form-email').value;
        const mobile = document.getElementById('form-mobile').value;
        const message = document.getElementById('form-message').value;

        const subject = encodeURIComponent(`Processwallah Inquiry — ${company}`);
        const body = encodeURIComponent(
            `Name: ${name}\n` +
            `Company: ${company}\n` +
            `Email: ${email}\n` +
            `Mobile: ${mobile}\n\n` +
            `Operational Challenge Description:\n${message}`
        );

        // Launches standard email program with pre-filled inputs
        window.location.href = `mailto:info@processwallah.com?subject=${subject}&body=${body}`;
    });
});
