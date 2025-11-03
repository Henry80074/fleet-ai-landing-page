// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });
}

// ROI Calculator
function calculateROI() {
    const vehicles = parseInt(document.getElementById('vehicleCount').value) || 50;
    const years = parseInt(document.getElementById('deploymentYears').value) || 3;
    const incidents = parseInt(document.getElementById('incidentCount').value) || 8;
    const incidentCost = parseInt(document.getElementById('incidentCost').value) || 2500;
    
    // Competitor costs
    const compHardware = vehicles * 500;
    const compAnnual = vehicles * 400;
    const compTotal = compHardware + (compAnnual * years);
    
    // DriveWise AI costs
    const frHardware = vehicles * 100;
    const frAnnual = vehicles * 150;
    const frTotal = frHardware + (frAnnual * years);
    
    // Savings
    const totalSavings = compTotal - frTotal;
    
    // Incident cost reduction (40% reduction)
    const annualIncidentCost = incidents * 12 * incidentCost;
    const incidentSavings = annualIncidentCost * 0.40 * years;
    
    // Combined benefit
    const combinedBenefit = totalSavings + incidentSavings;
    
    // Payback period (months)
    const monthlyIncidentSavings = (annualIncidentCost * 0.40) / 12;
    const monthlySubscriptionCost = frAnnual / 12;
    const monthlyNetBenefit = monthlyIncidentSavings - monthlySubscriptionCost;
    const paybackMonths = frHardware / monthlyNetBenefit;
    
    // Update UI
    document.getElementById('comp-hardware').textContent = `£${compHardware.toLocaleString()}`;
    document.getElementById('comp-subscription').textContent = `£${(compAnnual * years).toLocaleString()}`;
    document.getElementById('comp-total').textContent = `£${compTotal.toLocaleString()}`;
    
    document.getElementById('fr-hardware').textContent = `£${frHardware.toLocaleString()}`;
    document.getElementById('fr-subscription').textContent = `£${(frAnnual * years).toLocaleString()}`;
    document.getElementById('fr-total').textContent = `£${frTotal.toLocaleString()}`;
    
    document.getElementById('total-savings').textContent = `£${totalSavings.toLocaleString()}`;
    document.getElementById('incident-savings').textContent = `£${incidentSavings.toLocaleString()}`;
    document.getElementById('combined-benefit').textContent = `£${combinedBenefit.toLocaleString()}`;
    document.getElementById('payback-period').textContent = `${paybackMonths.toFixed(1)} months`;
}

// Initialize calculator on page load
document.addEventListener('DOMContentLoaded', () => {
    calculateROI();
    
    // Add event listeners to inputs
    ['vehicleCount', 'deploymentYears', 'incidentCount', 'incidentCost'].forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', calculateROI);
        }
    });
    
    // Smooth scroll for navigation
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
    
    // Animate sections on scroll
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Video placeholder click handler
document.addEventListener('DOMContentLoaded', () => {
    const videoPlaceholder = document.querySelector('.video-placeholder');
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', () => {
            alert('Demo video would play here. In production, this would load actual dashcam footage with contextual overlays.');
        });
    }
});