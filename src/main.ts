import { createNavbar, updateActiveNavLink, setLoadModuleFunction } from './navbar.js';
import { renderDispatch } from './modules/dispatch.js';
import { renderHR } from './modules/hr.js';
import { renderFleet } from './modules/fleet.js';

const mainContent = document.getElementById('main-content') as HTMLElement;
const navbar = document.getElementById('navbar') as HTMLElement;

function loadModule(module: string): void {
    let content: string;
    
    switch (module) {
        case 'dispatch':
            content = renderDispatch();
            break;
        case 'hr':
            content = renderHR();
            break;
        case 'fleet':
            content = renderFleet();
            break;
        default:
            content = `
                <div class="module-container">
                    <h1>Welcome to Fahrly</h1>
                    <p>Select a module from the navigation bar to get started.</p>
                </div>
            `;
            module = 'home';
    }
    
    if (mainContent) {
        mainContent.innerHTML = content;
    }
    
    updateActiveNavLink(module);
    
    // Update URL hash
    if (module !== 'home') {
        window.location.hash = module;
    } else {
        window.location.hash = '';
    }
}

// Initialize navbar
setLoadModuleFunction(loadModule);
createNavbar(navbar);

// Handle hash changes (browser back/forward)
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1);
    loadModule(hash || 'home');
});

// Load initial module based on hash
const initialHash = window.location.hash.slice(1);
loadModule(initialHash || 'home');

