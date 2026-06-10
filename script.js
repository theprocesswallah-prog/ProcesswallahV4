document.addEventListener('DOMContentLoaded', () => {

    // 1. Detailed System Concepts for the Solutions Modal
    const systemDatabase = {
        'customer-portal': {
            title: 'Customer Portal Framework',
            problem: 'Clients rely on continuous phone calls and emails to check purchase order progress and shipping status.',
            approach: 'Develop a read-only database sync that publishes order status data from internal dispatch logs directly to a secure web access page.',
            outcome: 'Eliminates redundant communication and allows administrative staff to focus on actual job tracking operations.'
        },
        'bom-automation': {
            title: 'BOM Automation Framework',
            problem: 'Multi-level Bill of Materials lists are manually audited, leading to purchase order mistakes and sudden material shortages.',
            approach: 'Write automated validation logic that matches CAD file parameters and spreadsheet rows directly with existing physical store records.',
            outcome: 'Drastically reduces raw material purchase errors and eliminates planning downtime.'
        },
        'work-order-automation': {
            title: 'Work Order Automation Workflow',
            problem: 'Time is lost converting sales order agreements into physical route sheets for the production line.',
            approach: 'Deploy automated scripts that generate, validate, and queue job cards immediately when a deal is closed in CRM databases.',
            outcome: 'Reduces setup wait time and ensures the production floor has correct, updated job specifications.'
        },
        'production-planning': {
            title: 'Production Planning Framework',
            problem: 'Inflexible floor plans rely on manual estimation, causing toolroom bottlenecks and delayed deliveries.',
            approach: 'Construct dynamic spreadsheet layouts that sync equipment load limits directly with raw material arrival checklists.',
            outcome: 'Optimizes assembly flow and provides customer support teams with accurate shipping dates.'
        },
        'inspection-reporting': {
            title: 'Inspection & Reporting Framework',
            problem: 'SOP compliance and defect logs are recorded on physical paper, making quality control trends difficult to analyze.',
            approach: 'Implement simple, local mobile data-entry templates used at point-of-inspection to register dimensions, values, and outcomes.',
            outcome: 'Flags defects on-site, logs rework statistics instantly, and locks defective batches automatically.'
        },
        'mis-dashboard': {
            title: 'MIS Dashboard Systems',
            problem: 'Supervisors construct end-of-week operation metrics using old data, making immediate corrections impossible.',
            approach: 'Aggregate daily output records from terminal databases into clean, readable performance dashboards.',
            outcome: 'Enables managers to make prompt operational corrections with clear data from active shifts.'
        },
        'document-control': {
            title: 'Document Control & Traceability',
            problem: 'Technicians mistakenly manufacture parts using older, unapproved design revisions.',
            approach: 'Set up a centralized, secure digital document index linked to active shop routing terminals.',
            outcome: 'Ensures that operators only work with approved drawing versions, reducing raw material scrap.'
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
                        <div class="modal-section-title">The Practical Approach</div>
                        <p>${data.approach}</p>
                    </div>
                    <div class="modal-section">
                        <div class="modal-section-title">Expected Business Outcome</div>
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


    // 2. Interactive Feature Gallery for Section 6 (Case Study Showcase)
    const galleryThumbs = document.querySelectorAll('.gallery-thumbnail');
    const mainShowcaseImg = document.getElementById('main-showcase-img');

    galleryThumbs.forEach(thumb => {
        thumb.addEventListener('click', (e) => {
            galleryThumbs.forEach(t => t.classList.remove('active'));

            const selectedThumb = e.currentTarget;
            selectedThumb.classList.add('active');

            const sourceImage = selectedThumb.getAttribute('data-img');
            
            // Subtle transition effect
            mainShowcaseImg.style.opacity = '0.4';
            setTimeout(() => {
                mainShowcaseImg.setAttribute('src', sourceImage);
                mainShowcaseImg.style.opacity = '1';
            }, 120);
        });
    });


    // 3. Responsive Mobile Menu Controls
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    const toggleMobileMenu = () => {
        mobileMenuOverlay.classList.toggle('active');
        document.body.style.overflow = mobileMenuOverlay.classList.contains('active') ? 'hidden' : '';
    };

    mobileNavToggle.addEventListener('click', toggleMobileMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});
