document.addEventListener('DOMContentLoaded', () => {

    // 1. Interactive Modal Configuration for Systems & Solutions
    const modalData = {
        'customer-portal': {
            title: 'Customer Portal — Framework Design',
            concept: 'A direct digital environment connected to order books, showing work completion stages directly to downstream distribution clients.',
            workflow: 'Client places order details -> System pulls workflow logs from line execution layers -> Real-time status rendered on client panel with dispatch delivery ETA forecasts.',
            benefits: 'Substantially reduces routine client verification phone calls, provides reliable delivery estimates, and creates automated tracking pipelines.',
            approach: 'Developed on key SQL database endpoints connected with low-maintenance micro-frontends.'
        },
        'bom-automation': {
            title: 'BOM Automation Framework',
            concept: 'Automating multi-tiered Bill of Materials sheets, verifying part numbers, stock, and structural properties.',
            workflow: 'System imports raw engineering exports -> Maps parent-child components -> Automates calculations across store quantities -> Directly targets inventory gaps.',
            benefits: 'Corrects inventory estimation human errors and cuts standard BOM planning timelines.',
            approach: 'Built using optimized scripts connecting sheet registers to warehouse tables.'
        },
        'work-order-automation': {
            title: 'Work Order Automation Workflow',
            concept: 'Immediate dispatching of production jobs from sales triggers to work teams without requiring paper transfers.',
            workflow: 'Sales system registers raw order -> Script generates detailed work orders -> Validates tool requirements -> Automatically appends instructions to floor displays.',
            benefits: 'Minimizes processing lag between raw sales confirmations and line setup executions.',
            approach: 'Low-latency workflow routing and automated message systems built using direct Google Apps Script engines.'
        },
        'production-planning': {
            title: 'Production Planning Framework',
            concept: 'Constraint-driven shop sequencing built around machine capacity levels, staff constraints, and raw supply schedules.',
            workflow: 'Pending order pool -> Dynamic capacity analyzer estimates scheduling options -> Team updates output boards based on schedules.',
            benefits: 'Provides realistic scheduling ranges to prevent unexpected idle hours and track output limits.',
            approach: 'Developed through custom capacity planning sheets linked to priority orders.'
        },
        'inspection-reporting': {
            title: 'Inspection & Reporting Framework',
            concept: 'Mobile interfaces allowing inspectors to record dimensions and check-passes on the spot.',
            workflow: 'Quality checklist scan -> Record deviations -> Out-of-spec inputs automatically freeze inventory updates -> Notifies quality supervisor.',
            benefits: 'Allows rapid processing of scrap records and eliminates paper register logs.',
            approach: 'Constructed using lightweight web interfaces connected directly to tracking database spreadsheets.'
        },
        'mis-dashboard': {
            title: 'MIS Dashboard & Analytics',
            concept: 'Consolidating production units, line metrics, scrap records, and machine downtime logs into single-page views.',
            workflow: 'Raw daily team sheets collect floor data -> Script compiles totals -> Dashboard generates updated output charts.',
            benefits: 'Keeps management aligned using current, validated numbers instead of lagging weekly reports.',
            approach: 'Created through integrated visualization dashboards synced with database arrays.'
        },
        'document-control': {
            title: 'Document Control & Traceability',
            concept: 'Central tracking index ensuring shop terminals only load approved engineering drawing versions.',
            workflow: 'Supervisor loads updated design -> Old files archive -> Terminals auto-update -> Floor scans verify active versions.',
            benefits: 'Minimizes tool scrap caused by referencing legacy designs.',
            approach: 'Developed as a secure, role-restricted folder network with fast search tools.'
        }
    };

    const modal = document.getElementById('details-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const closeModalBtn = document.querySelector('.close-modal-btn');

    document.querySelectorAll('.view-details-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const systemKey = e.currentTarget.getAttribute('data-system');
            const data = modalData[systemKey];

            if (data) {
                modalTitle.textContent = data.title;
                modalBody.innerHTML = `
                    <div class="modal-section">
                        <div class="modal-section-title">Concept</div>
                        <p>${data.concept}</p>
                    </div>
                    <div class="modal-section">
                        <div class="modal-section-title">Workflow</div>
                        <p>${data.workflow}</p>
                    </div>
                    <div class="modal-section">
                        <div class="modal-section-title">Business Benefits</div>
                        <p>${data.benefits}</p>
                    </div>
                    <div class="modal-section">
                        <div class="modal-section-title">Approach</div>
                        <p>${data.approach}</p>
                    </div>
                `;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });


    // 2. Interactive Feature Gallery (Showcase)
    const galleryThumbs = document.querySelectorAll('.gallery-thumbnail');
    const mainShowcaseImg = document.getElementById('main-showcase-img');

    galleryThumbs.forEach(thumb => {
        thumb.addEventListener('click', (e) => {
            galleryThumbs.forEach(t => t.classList.remove('active'));
            
            const selectedThumb = e.currentTarget;
            selectedThumb.classList.add('active');
            
            const newImgSrc = selectedThumb.getAttribute('data-img');
            mainShowcaseImg.style.opacity = '0.3';
            
            setTimeout(() => {
                mainShowcaseImg.setAttribute('src', newImgSrc);
                mainShowcaseImg.style.opacity = '1';
            }, 150);
        });
    });


    // 3. Responsive Mobile Menu
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    const toggleMenu = () => {
        mobileMenuOverlay.classList.toggle('active');
        document.body.style.overflow = mobileMenuOverlay.classList.contains('active') ? 'hidden' : '';
    };

    mobileNavToggle.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});