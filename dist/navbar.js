export const navItems = [
    { id: 'dispatch', label: 'Fahrly Dispatch', module: 'dispatch' },
    { id: 'hr', label: 'Fahrly HR', module: 'hr' },
    { id: 'fleet', label: 'Fahrly Fleet', module: 'fleet' }
];
export function createNavbar(container, activeModule) {
    const navContainer = document.createElement('div');
    navContainer.className = 'nav-container';
    // Brand/Logo
    const brand = document.createElement('a');
    brand.href = '#';
    brand.className = 'nav-brand';
    brand.textContent = 'Fahrly';
    brand.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.hash = '';
        loadModule('home');
    });
    // Navigation Links
    const navLinks = document.createElement('ul');
    navLinks.className = 'nav-links';
    navItems.forEach(item => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${item.module}`;
        link.className = 'nav-link';
        if (activeModule === item.module) {
            link.classList.add('active');
        }
        link.textContent = item.label;
        link.addEventListener('click', (e) => {
            e.preventDefault();
            loadModule(item.module);
        });
        listItem.appendChild(link);
        navLinks.appendChild(listItem);
    });
    navContainer.appendChild(brand);
    navContainer.appendChild(navLinks);
    container.appendChild(navContainer);
}
export function updateActiveNavLink(activeModule) {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${activeModule}`) {
            link.classList.add('active');
        }
    });
}
// This will be set by main.ts
let loadModule;
export function setLoadModuleFunction(fn) {
    loadModule = fn;
}
