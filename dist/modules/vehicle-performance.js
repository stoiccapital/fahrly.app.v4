// Mock data
const mockVehicles = [
    {
        id: '1',
        name: 'VW Caddy #12',
        plate: 'ZH 123 456',
        model: 'VW Caddy',
        type: 'Van',
        status: 'Active',
        vpi: 85,
        utilization: 0.71,
        utilizationKm: 4220,
        utilizationHours: 61,
        fuelConsumptionLPer100km: 8.9,
        fuelCostPerKm: 0.28,
        safetyGrade: 'A',
        harshEventsCount: 12,
        incidentsCount: 0,
        maintenanceStatus: 'OK',
        nextServiceDueKm: 1200,
        nextServiceDueDate: '2026-01-15',
        maintenanceCost30d: 220,
        costPerKm: 0.28,
        totalCost30d: 1320,
        lastUpdate: '2025-11-13T10:30:00Z'
    },
    {
        id: '2',
        name: 'Mercedes Sprinter #05',
        plate: 'ZH 789 012',
        model: 'Mercedes Sprinter',
        type: 'Truck',
        status: 'Active',
        vpi: 72,
        utilization: 0.65,
        utilizationKm: 3850,
        utilizationHours: 58,
        fuelConsumptionLPer100km: 12.5,
        fuelCostPerKm: 0.42,
        safetyGrade: 'B',
        harshEventsCount: 18,
        incidentsCount: 1,
        maintenanceStatus: 'Due soon',
        nextServiceDueKm: 500,
        nextServiceDueDate: '2025-12-01',
        maintenanceCost30d: 450,
        costPerKm: 0.42,
        totalCost30d: 1890,
        lastUpdate: '2025-11-13T09:15:00Z'
    },
    {
        id: '3',
        name: 'Ford Transit #08',
        plate: 'ZH 345 678',
        model: 'Ford Transit',
        type: 'Van',
        status: 'In workshop',
        vpi: 45,
        utilization: 0.32,
        utilizationKm: 2100,
        utilizationHours: 28,
        fuelConsumptionLPer100km: 9.2,
        fuelCostPerKm: 0.31,
        safetyGrade: 'C',
        harshEventsCount: 25,
        incidentsCount: 2,
        maintenanceStatus: 'In workshop',
        nextServiceDueKm: 0,
        nextServiceDueDate: '2025-11-20',
        maintenanceCost30d: 850,
        costPerKm: 0.31,
        totalCost30d: 1120,
        lastUpdate: '2025-11-10T14:20:00Z'
    },
    {
        id: '4',
        name: 'VW Crafter #15',
        plate: 'ZH 567 890',
        model: 'VW Crafter',
        type: 'Truck',
        status: 'Active',
        vpi: 91,
        utilization: 0.82,
        utilizationKm: 5120,
        utilizationHours: 75,
        fuelConsumptionLPer100km: 11.8,
        fuelCostPerKm: 0.38,
        safetyGrade: 'A',
        harshEventsCount: 8,
        incidentsCount: 0,
        maintenanceStatus: 'OK',
        nextServiceDueKm: 2100,
        nextServiceDueDate: '2026-02-10',
        maintenanceCost30d: 180,
        costPerKm: 0.38,
        totalCost30d: 2150,
        lastUpdate: '2025-11-13T11:45:00Z'
    },
    {
        id: '5',
        name: 'Renault Master #03',
        plate: 'ZH 234 567',
        model: 'Renault Master',
        type: 'Van',
        status: 'Active',
        vpi: 68,
        utilization: 0.58,
        utilizationKm: 3450,
        utilizationHours: 52,
        fuelConsumptionLPer100km: 8.5,
        fuelCostPerKm: 0.27,
        safetyGrade: 'B',
        harshEventsCount: 15,
        incidentsCount: 0,
        maintenanceStatus: 'OK',
        nextServiceDueKm: 800,
        nextServiceDueDate: '2025-12-20',
        maintenanceCost30d: 320,
        costPerKm: 0.27,
        totalCost30d: 1280,
        lastUpdate: '2025-11-13T08:30:00Z'
    },
    {
        id: '6',
        name: 'Iveco Daily #22',
        plate: 'ZH 456 789',
        model: 'Iveco Daily',
        type: 'Truck',
        status: 'In reserve',
        vpi: 55,
        utilization: 0.25,
        utilizationKm: 1500,
        utilizationHours: 22,
        fuelConsumptionLPer100km: 13.2,
        fuelCostPerKm: 0.45,
        safetyGrade: 'C',
        harshEventsCount: 22,
        incidentsCount: 1,
        maintenanceStatus: 'Due soon',
        nextServiceDueKm: 300,
        nextServiceDueDate: '2025-11-25',
        maintenanceCost30d: 280,
        costPerKm: 0.45,
        totalCost30d: 980,
        lastUpdate: '2025-11-05T16:10:00Z'
    },
    {
        id: '7',
        name: 'Peugeot Boxer #11',
        plate: 'ZH 678 901',
        model: 'Peugeot Boxer',
        type: 'Van',
        status: 'Active',
        vpi: 78,
        utilization: 0.69,
        utilizationKm: 4100,
        utilizationHours: 59,
        fuelConsumptionLPer100km: 9.1,
        fuelCostPerKm: 0.29,
        safetyGrade: 'A',
        harshEventsCount: 10,
        incidentsCount: 0,
        maintenanceStatus: 'OK',
        nextServiceDueKm: 1500,
        nextServiceDueDate: '2026-01-05',
        maintenanceCost30d: 195,
        costPerKm: 0.29,
        totalCost30d: 1450,
        lastUpdate: '2025-11-13T12:00:00Z'
    },
    {
        id: '8',
        name: 'Fiat Ducato #19',
        plate: 'ZH 890 123',
        model: 'Fiat Ducato',
        type: 'Van',
        status: 'Active',
        vpi: 62,
        utilization: 0.54,
        utilizationKm: 3200,
        utilizationHours: 46,
        fuelConsumptionLPer100km: 8.7,
        fuelCostPerKm: 0.26,
        safetyGrade: 'B',
        harshEventsCount: 20,
        incidentsCount: 0,
        maintenanceStatus: 'Overdue',
        nextServiceDueKm: -200,
        nextServiceDueDate: '2025-10-30',
        maintenanceCost30d: 520,
        costPerKm: 0.26,
        totalCost30d: 1180,
        lastUpdate: '2025-11-12T15:45:00Z'
    },
    {
        id: '9',
        name: 'Mercedes Vito #07',
        plate: 'ZH 012 345',
        model: 'Mercedes Vito',
        type: 'Car',
        status: 'Active',
        vpi: 88,
        utilization: 0.76,
        utilizationKm: 4520,
        utilizationHours: 65,
        fuelConsumptionLPer100km: 7.8,
        fuelCostPerKm: 0.24,
        safetyGrade: 'A',
        harshEventsCount: 6,
        incidentsCount: 0,
        maintenanceStatus: 'OK',
        nextServiceDueKm: 1800,
        nextServiceDueDate: '2026-01-25',
        maintenanceCost30d: 150,
        costPerKm: 0.24,
        totalCost30d: 1320,
        lastUpdate: '2025-11-13T13:20:00Z'
    },
    {
        id: '10',
        name: 'Ford Transit Custom #14',
        plate: 'ZH 135 791',
        model: 'Ford Transit Custom',
        type: 'Van',
        status: 'Retired',
        vpi: 35,
        utilization: 0.15,
        utilizationKm: 890,
        utilizationHours: 12,
        fuelConsumptionLPer100km: 10.5,
        fuelCostPerKm: 0.35,
        safetyGrade: 'D',
        harshEventsCount: 35,
        incidentsCount: 3,
        maintenanceStatus: 'Overdue',
        nextServiceDueKm: -500,
        nextServiceDueDate: '2025-09-15',
        maintenanceCost30d: 120,
        costPerKm: 0.35,
        totalCost30d: 450,
        lastUpdate: '2025-10-20T10:00:00Z'
    }
];
// State
let vehicles = [...mockVehicles];
let filteredVehicles = [...mockVehicles];
let selectedVehicle = null;
let startDate = '';
let endDate = '';
let currentSortField = 'none';
let currentSortDirection = 'asc';
let currentStatusFilter = 'All';
let currentTypeFilter = 'All';
let searchQuery = '';
// Manual data entry arrays
let usageDaily = [];
let fuelLogs = [];
let maintenanceEvents = [];
let incidents = [];
// DOM References (will be set in initVehiclePerformanceModule)
let rootElement;
let tableBody;
let detailPanel;
let searchInput;
let statusFilter;
let typeFilter;
let startDateInput;
let endDateInput;
let modalOverlay = null;
// Utility functions
function getVPIColorClass(vpi) {
    if (vpi >= 80)
        return 'vf-badge--green';
    if (vpi >= 60)
        return 'vf-badge--yellow';
    return 'vf-badge--red';
}
function getSafetyColorClass(grade) {
    if (grade === 'A')
        return 'vf-badge--green';
    if (grade === 'B')
        return 'vf-badge--yellow';
    return 'vf-badge--red';
}
function getMaintenanceColorClass(status) {
    if (status === 'OK')
        return 'vf-badge--green';
    if (status === 'Due soon')
        return 'vf-badge--yellow';
    return 'vf-badge--red';
}
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
}
function formatDateTime(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}
function formatDateRange(start, end) {
    if (!start || !end) {
        return 'Select date range';
    }
    const startDate = new Date(start);
    const endDate = new Date(end);
    const startFormatted = startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const endFormatted = endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    return `${startFormatted} - ${endFormatted}`;
}
function getDefaultDateRange() {
    const end = new Date();
    const start = new Date();
    start.setDate(start.getDate() - 30); // Last 30 days
    return {
        start: start.toISOString().split('T')[0],
        end: end.toISOString().split('T')[0]
    };
}
// Filtering and sorting
function applyFiltersAndSorting() {
    // Apply search
    let filtered = vehicles.filter(vehicle => {
        const searchLower = searchQuery.toLowerCase();
        return vehicle.name.toLowerCase().includes(searchLower) ||
            vehicle.plate.toLowerCase().includes(searchLower) ||
            vehicle.model.toLowerCase().includes(searchLower);
    });
    // Apply status filter
    if (currentStatusFilter !== 'All') {
        filtered = filtered.filter(v => v.status === currentStatusFilter);
    }
    // Apply type filter
    if (currentTypeFilter !== 'All') {
        filtered = filtered.filter(v => v.type === currentTypeFilter);
    }
    // Apply sorting
    if (currentSortField !== 'none') {
        filtered.sort((a, b) => {
            let aVal;
            let bVal;
            switch (currentSortField) {
                case 'vpi':
                    aVal = a.vpi;
                    bVal = b.vpi;
                    break;
                case 'costPerKm':
                    aVal = a.costPerKm;
                    bVal = b.costPerKm;
                    break;
                case 'safety':
                    const gradeOrder = { 'A': 4, 'B': 3, 'C': 2, 'D': 1 };
                    aVal = gradeOrder[a.safetyGrade];
                    bVal = gradeOrder[b.safetyGrade];
                    break;
                default:
                    return 0;
            }
            if (currentSortDirection === 'asc') {
                return aVal - bVal;
            }
            else {
                return bVal - aVal;
            }
        });
    }
    filteredVehicles = filtered;
    renderTable();
}
// Render functions
function renderHeader() {
    const header = document.createElement('div');
    header.className = 'vf-header';
    header.innerHTML = `
    <div class="vf-header-left">
      <h1 class="vf-title">Vehicle Performance</h1>
      <p class="vf-subtitle" id="vf-date-range-subtitle">${formatDateRange(startDate, endDate)}</p>
    </div>
    <div class="vf-header-right">
      <div class="vf-header-actions">
        <div class="vf-add-data-container">
          <button class="vf-add-data-btn" id="vf-add-data-btn">
            Add Data
            <span class="vf-dropdown-arrow">▼</span>
          </button>
          <div class="vf-dropdown-menu" id="vf-add-data-dropdown">
            <button class="vf-dropdown-item" data-form="usage">Add Usage Entry</button>
            <button class="vf-dropdown-item" data-form="fuel">Add Fuel Log</button>
            <button class="vf-dropdown-item" data-form="maintenance">Add Maintenance Event</button>
            <button class="vf-dropdown-item" data-form="incident">Add Incident/Damage</button>
          </div>
        </div>
        <div class="vf-date-range-picker">
          <label for="vf-start-date" class="vf-date-label">From</label>
          <input 
            type="date" 
            id="vf-start-date" 
            class="vf-date-input" 
            value="${startDate}"
            max="${endDate}"
          />
          <label for="vf-end-date" class="vf-date-label">To</label>
          <input 
            type="date" 
            id="vf-end-date" 
            class="vf-date-input" 
            value="${endDate}"
            min="${startDate}"
            max="${new Date().toISOString().split('T')[0]}"
          />
        </div>
      </div>
    </div>
  `;
    rootElement.appendChild(header);
    startDateInput = document.getElementById('vf-start-date');
    endDateInput = document.getElementById('vf-end-date');
    const updateDateRange = () => {
        const newStartDate = startDateInput.value;
        const newEndDate = endDateInput.value;
        if (newStartDate && newEndDate) {
            if (new Date(newStartDate) <= new Date(newEndDate)) {
                startDate = newStartDate;
                endDate = newEndDate;
                // Update max/min constraints
                startDateInput.max = endDate;
                endDateInput.min = startDate;
                endDateInput.max = new Date().toISOString().split('T')[0];
                // Update subtitle
                const subtitle = document.getElementById('vf-date-range-subtitle');
                if (subtitle) {
                    subtitle.textContent = formatDateRange(startDate, endDate);
                }
            }
            else {
                // If start date is after end date, swap them
                if (newStartDate > newEndDate) {
                    startDateInput.value = endDate;
                    endDateInput.value = startDate;
                }
            }
        }
    };
    startDateInput.addEventListener('change', updateDateRange);
    endDateInput.addEventListener('change', updateDateRange);
    // Add Data dropdown
    const addDataBtn = document.getElementById('vf-add-data-btn');
    const dropdown = document.getElementById('vf-add-data-dropdown');
    addDataBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('vf-dropdown-menu--open');
    });
    document.addEventListener('click', () => {
        dropdown.classList.remove('vf-dropdown-menu--open');
    });
    dropdown.addEventListener('click', (e) => {
        e.stopPropagation();
    });
    const dropdownItems = dropdown.querySelectorAll('.vf-dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const formType = e.target.dataset.form;
            dropdown.classList.remove('vf-dropdown-menu--open');
            if (formType) {
                openModal(formType);
            }
        });
    });
}
function renderFilters() {
    const filters = document.createElement('div');
    filters.className = 'vf-filters';
    filters.innerHTML = `
    <input 
      type="text" 
      class="vf-search" 
      id="vf-search-input" 
      placeholder="Search by vehicle or plate…"
    />
    <select class="vf-filter" id="vf-status-filter">
      <option value="All">All</option>
      <option value="Active">Active</option>
      <option value="In workshop">In workshop</option>
      <option value="In reserve">In reserve</option>
      <option value="Retired">Retired</option>
    </select>
    <select class="vf-filter" id="vf-type-filter">
      <option value="All">All</option>
      <option value="Car">Car</option>
      <option value="Van">Van</option>
      <option value="Truck">Truck</option>
    </select>
    <div class="vf-sort-buttons">
      <button class="vf-sort-btn" data-sort="vpi">VPI</button>
      <button class="vf-sort-btn" data-sort="costPerKm">Cost per km</button>
      <button class="vf-sort-btn" data-sort="safety">Safety score</button>
    </div>
  `;
    rootElement.appendChild(filters);
    searchInput = document.getElementById('vf-search-input');
    statusFilter = document.getElementById('vf-status-filter');
    typeFilter = document.getElementById('vf-type-filter');
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        applyFiltersAndSorting();
    });
    statusFilter.addEventListener('change', (e) => {
        currentStatusFilter = e.target.value;
        applyFiltersAndSorting();
    });
    typeFilter.addEventListener('change', (e) => {
        currentTypeFilter = e.target.value;
        applyFiltersAndSorting();
    });
    const sortButtons = filters.querySelectorAll('.vf-sort-btn');
    sortButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const field = e.target.dataset.sort;
            if (currentSortField === field) {
                currentSortDirection = currentSortDirection === 'asc' ? 'desc' : 'asc';
            }
            else {
                currentSortField = field;
                currentSortDirection = 'asc';
            }
            applyFiltersAndSorting();
            updateSortButtons();
        });
    });
}
function updateSortButtons() {
    const sortButtons = rootElement.querySelectorAll('.vf-sort-btn');
    sortButtons.forEach(btn => {
        const field = btn.dataset.sort;
        btn.classList.remove('vf-sort-btn--active', 'vf-sort-btn--asc', 'vf-sort-btn--desc');
        if (currentSortField === field) {
            btn.classList.add('vf-sort-btn--active', `vf-sort-btn--${currentSortDirection}`);
        }
    });
}
function renderTable() {
    if (!tableBody)
        return;
    tableBody.innerHTML = '';
    filteredVehicles.forEach(vehicle => {
        const row = document.createElement('tr');
        row.className = 'vf-table-row';
        if (selectedVehicle?.id === vehicle.id) {
            row.classList.add('vf-table-row--selected');
        }
        row.addEventListener('click', () => {
            selectVehicle(vehicle);
        });
        row.innerHTML = `
      <td class="vf-table-cell">
        <div class="vf-vehicle-info">
          <div class="vf-vehicle-name">${vehicle.name}</div>
          <div class="vf-vehicle-details">${vehicle.plate} · ${vehicle.model}</div>
        </div>
      </td>
      <td class="vf-table-cell">
        <span class="vf-badge ${getVPIColorClass(vehicle.vpi)}">${vehicle.vpi}</span>
      </td>
      <td class="vf-table-cell">
        <div class="vf-utilization">
          <span class="vf-utilization-percent">${Math.round(vehicle.utilization * 100)}%</span>
          <span class="vf-utilization-details">${vehicle.utilizationKm.toLocaleString()} km · ${vehicle.utilizationHours} h</span>
        </div>
      </td>
      <td class="vf-table-cell">
        <div class="vf-fuel">
          <span class="vf-fuel-primary">${vehicle.fuelConsumptionLPer100km} L/100km</span>
          <span class="vf-fuel-secondary">€${vehicle.fuelCostPerKm.toFixed(2)}/km</span>
        </div>
      </td>
      <td class="vf-table-cell">
        <span class="vf-badge ${getSafetyColorClass(vehicle.safetyGrade)}">${vehicle.safetyGrade}</span>
      </td>
      <td class="vf-table-cell">
        <span class="vf-badge ${getMaintenanceColorClass(vehicle.maintenanceStatus)}">${vehicle.maintenanceStatus}</span>
      </td>
      <td class="vf-table-cell">€${vehicle.costPerKm.toFixed(2)}/km</td>
      <td class="vf-table-cell">€${vehicle.totalCost30d.toLocaleString()}</td>
      <td class="vf-table-cell">
        <span class="vf-status-badge vf-status-badge--${vehicle.status.toLowerCase().replace(' ', '-')}">${vehicle.status}</span>
      </td>
    `;
        tableBody.appendChild(row);
    });
}
function renderMainLayout() {
    const layout = document.createElement('div');
    layout.className = 'vf-main-layout';
    layout.innerHTML = `
    <div class="vf-table-container">
      <table class="vf-table">
        <thead class="vf-table-head">
          <tr>
            <th class="vf-table-header">Vehicle</th>
            <th class="vf-table-header">VPI Score</th>
            <th class="vf-table-header">Utilization</th>
            <th class="vf-table-header">Fuel Efficiency</th>
            <th class="vf-table-header">Safety</th>
            <th class="vf-table-header">Maintenance</th>
            <th class="vf-table-header">Cost per km</th>
            <th class="vf-table-header">Total Cost (30d)</th>
            <th class="vf-table-header">Status</th>
          </tr>
        </thead>
        <tbody class="vf-table-body" id="vf-table-body"></tbody>
      </table>
    </div>
    <div class="vf-detail-panel" id="vf-detail-panel"></div>
  `;
    rootElement.appendChild(layout);
    tableBody = document.getElementById('vf-table-body');
    detailPanel = document.getElementById('vf-detail-panel');
    renderTable();
    renderDetailPanel();
}
function renderDetailPanel() {
    if (!detailPanel)
        return;
    if (!selectedVehicle) {
        detailPanel.innerHTML = `
      <div class="vf-detail-empty">
        <h2 class="vf-detail-empty-title">Select a vehicle</h2>
        <p class="vf-detail-empty-text">Choose a vehicle from the left to see performance details.</p>
      </div>
    `;
        return;
    }
    const vehicle = selectedVehicle;
    detailPanel.innerHTML = `
    <div class="vf-detail-header">
      <div class="vf-detail-title-section">
        <h2 class="vf-detail-title">${vehicle.name}</h2>
        <p class="vf-detail-subtitle">${vehicle.plate} · ${vehicle.model}</p>
      </div>
      <div class="vf-detail-vpi-badge">
        <div class="vf-vpi-circle ${getVPIColorClass(vehicle.vpi)}">
          <span class="vf-vpi-value">${vehicle.vpi}</span>
        </div>
      </div>
    </div>
    <div class="vf-detail-chips">
      <span class="vf-chip vf-status-badge--${vehicle.status.toLowerCase().replace(' ', '-')}">${vehicle.status}</span>
      <span class="vf-chip">${vehicle.type}</span>
      <span class="vf-chip">Updated: ${formatDateTime(vehicle.lastUpdate)}</span>
    </div>
    <div class="vf-detail-tabs">
      <button class="vf-tab vf-tab--active" data-tab="overview">Overview</button>
      <button class="vf-tab" data-tab="utilization">Utilization</button>
      <button class="vf-tab" data-tab="fuel">Fuel</button>
      <button class="vf-tab" data-tab="safety">Safety</button>
      <button class="vf-tab" data-tab="cost">Cost</button>
      <button class="vf-tab" data-tab="maintenance">Maintenance</button>
    </div>
    <div class="vf-detail-content" id="vf-detail-content"></div>
  `;
    // Tab switching
    const tabs = detailPanel.querySelectorAll('.vf-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            const tabName = e.target.dataset.tab;
            tabs.forEach(t => t.classList.remove('vf-tab--active'));
            e.target.classList.add('vf-tab--active');
            renderTabContent(tabName || 'overview');
        });
    });
    renderTabContent('overview');
}
function renderTabContent(tab) {
    if (!selectedVehicle || !detailPanel)
        return;
    const content = document.getElementById('vf-detail-content');
    if (!content)
        return;
    const vehicle = selectedVehicle;
    switch (tab) {
        case 'overview':
            content.innerHTML = `
        <div class="vf-tab-section">
          <h3 class="vf-tab-title">Overview</h3>
          <div class="vf-overview-grid">
            <div class="vf-overview-item">
              <span class="vf-overview-label">VPI Score</span>
              <span class="vf-overview-value ${getVPIColorClass(vehicle.vpi)}">${vehicle.vpi}</span>
            </div>
            <div class="vf-overview-item">
              <span class="vf-overview-label">Utilization</span>
              <span class="vf-overview-value">${Math.round(vehicle.utilization * 100)}%</span>
            </div>
            <div class="vf-overview-item">
              <span class="vf-overview-label">Fuel Efficiency</span>
              <span class="vf-overview-value">${vehicle.fuelConsumptionLPer100km} L/100km</span>
            </div>
            <div class="vf-overview-item">
              <span class="vf-overview-label">Safety Grade</span>
              <span class="vf-overview-value ${getSafetyColorClass(vehicle.safetyGrade)}">${vehicle.safetyGrade}</span>
            </div>
            <div class="vf-overview-item">
              <span class="vf-overview-label">Total Cost (30d)</span>
              <span class="vf-overview-value">€${vehicle.totalCost30d.toLocaleString()}</span>
            </div>
            <div class="vf-overview-item">
              <span class="vf-overview-label">Status</span>
              <span class="vf-overview-value">${vehicle.status}</span>
            </div>
          </div>
        </div>
      `;
            break;
        case 'utilization':
            content.innerHTML = `
        <div class="vf-tab-section">
          <h3 class="vf-tab-title">Utilization</h3>
          <p class="vf-tab-text">
            Utilization: <strong>${Math.round(vehicle.utilization * 100)}%</strong> 
            (${vehicle.utilizationKm.toLocaleString()} km · ${vehicle.utilizationHours} h driving · ${Math.round(vehicle.utilizationHours * 0.15)} h idle)
          </p>
        </div>
      `;
            break;
        case 'fuel':
            content.innerHTML = `
        <div class="vf-tab-section">
          <h3 class="vf-tab-title">Fuel</h3>
          <p class="vf-tab-text">
            Avg <strong>${vehicle.fuelConsumptionLPer100km} L/100km</strong> · 
            <strong>€${vehicle.fuelCostPerKm.toFixed(2)}/km</strong>
          </p>
        </div>
      `;
            break;
        case 'safety':
            const safetyExplanation = {
                'A': 'Excellent',
                'B': 'Good',
                'C': 'Risky',
                'D': 'Critical'
            };
            content.innerHTML = `
        <div class="vf-tab-section">
          <h3 class="vf-tab-title">Safety</h3>
          <p class="vf-tab-text">
            Safety grade: <strong class="${getSafetyColorClass(vehicle.safetyGrade)}">${vehicle.safetyGrade}</strong> 
            (${safetyExplanation[vehicle.safetyGrade]})
          </p>
          <p class="vf-tab-text">
            Harsh events: <strong>${vehicle.harshEventsCount}</strong> (30d)
          </p>
          <p class="vf-tab-text">
            Incidents: <strong>${vehicle.incidentsCount}</strong> (12m)
          </p>
        </div>
      `;
            break;
        case 'cost':
            const fuelCost = vehicle.totalCost30d * 0.65;
            const maintenanceCost = vehicle.maintenanceCost30d;
            const incidentCost = vehicle.totalCost30d - fuelCost - maintenanceCost;
            content.innerHTML = `
        <div class="vf-tab-section">
          <h3 class="vf-tab-title">Cost</h3>
          <p class="vf-tab-text">
            Total cost (30d): <strong>€${vehicle.totalCost30d.toLocaleString()}</strong>
          </p>
          <p class="vf-tab-text">
            Cost per km: <strong>€${vehicle.costPerKm.toFixed(2)}/km</strong>
          </p>
          <div class="vf-cost-breakdown">
            <div class="vf-cost-item">
              <span class="vf-cost-label">Fuel cost</span>
              <span class="vf-cost-value">€${Math.round(fuelCost).toLocaleString()}</span>
              <div class="vf-cost-bar">
                <div class="vf-cost-bar-fill" style="width: ${(fuelCost / vehicle.totalCost30d * 100).toFixed(0)}%"></div>
              </div>
            </div>
            <div class="vf-cost-item">
              <span class="vf-cost-label">Maintenance cost</span>
              <span class="vf-cost-value">€${maintenanceCost.toLocaleString()}</span>
              <div class="vf-cost-bar">
                <div class="vf-cost-bar-fill" style="width: ${(maintenanceCost / vehicle.totalCost30d * 100).toFixed(0)}%"></div>
              </div>
            </div>
            <div class="vf-cost-item">
              <span class="vf-cost-label">Incident/damage cost</span>
              <span class="vf-cost-value">€${Math.round(incidentCost).toLocaleString()}</span>
              <div class="vf-cost-bar">
                <div class="vf-cost-bar-fill" style="width: ${(incidentCost / vehicle.totalCost30d * 100).toFixed(0)}%"></div>
              </div>
            </div>
          </div>
        </div>
      `;
            break;
        case 'maintenance':
            const maintenanceEvents = [
                { date: '2025-10-15', type: 'Regular Service', cost: 220, downtime: '4h' },
                { date: '2025-09-20', type: 'Tire Replacement', cost: 180, downtime: '2h' },
                { date: '2025-08-10', type: 'Oil Change', cost: 85, downtime: '1h' }
            ];
            let maintenanceHTML = `
        <div class="vf-tab-section">
          <h3 class="vf-tab-title">Maintenance</h3>
          ${vehicle.maintenanceStatus === 'In workshop' ?
                '<div class="vf-workshop-banner">In workshop</div>' : ''}
          <p class="vf-tab-text">
            Status: <strong class="${getMaintenanceColorClass(vehicle.maintenanceStatus)}">${vehicle.maintenanceStatus}</strong>
          </p>
          <p class="vf-tab-text">
            Next service: ${vehicle.nextServiceDueKm > 0 ?
                `in ${vehicle.nextServiceDueKm.toLocaleString()} km` :
                `${Math.abs(vehicle.nextServiceDueKm).toLocaleString()} km overdue`} · ${formatDate(vehicle.nextServiceDueDate)}
          </p>
          <p class="vf-tab-text">
            Maintenance cost (30d): <strong>€${vehicle.maintenanceCost30d.toLocaleString()}</strong>
          </p>
          <table class="vf-maintenance-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Cost</th>
                <th>Downtime</th>
              </tr>
            </thead>
            <tbody>
      `;
            maintenanceEvents.forEach(event => {
                maintenanceHTML += `
          <tr>
            <td>${formatDate(event.date)}</td>
            <td>${event.type}</td>
            <td>€${event.cost}</td>
            <td>${event.downtime}</td>
          </tr>
        `;
            });
            maintenanceHTML += `
            </tbody>
          </table>
        </div>
      `;
            content.innerHTML = maintenanceHTML;
            break;
    }
}
// Modal functions
function openModal(formType) {
    closeModal(); // Close any existing modal
    modalOverlay = document.createElement('div');
    modalOverlay.className = 'vf-modal-overlay';
    modalOverlay.innerHTML = '<div class="vf-modal"></div>';
    const modal = modalOverlay.querySelector('.vf-modal');
    let formHTML = '';
    switch (formType) {
        case 'usage':
            formHTML = renderUsageForm();
            break;
        case 'fuel':
            formHTML = renderFuelForm();
            break;
        case 'maintenance':
            formHTML = renderMaintenanceForm();
            break;
        case 'incident':
            formHTML = renderIncidentForm();
            break;
    }
    modal.innerHTML = formHTML;
    document.body.appendChild(modalOverlay);
    // Close on overlay click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    // Close button
    const closeBtn = modal.querySelector('.vf-modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    // Form submission
    const form = modal.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            handleFormSubmit(formType, form);
        });
    }
}
function closeModal() {
    if (modalOverlay) {
        modalOverlay.remove();
        modalOverlay = null;
    }
}
function getVehicleOptions() {
    return vehicles.map(v => `<option value="${v.id}">${v.name} (${v.plate})</option>`).join('');
}
function renderUsageForm() {
    return `
    <div class="vf-modal-header">
      <h2 class="vf-modal-title">Add Usage Entry</h2>
      <button class="vf-modal-close">&times;</button>
    </div>
    <form class="vf-form" id="vf-usage-form">
      <div class="vf-form-group">
        <label for="usage-vehicle" class="vf-form-label">Vehicle <span class="vf-required">*</span></label>
        <select id="usage-vehicle" class="vf-form-input" required>
          <option value="">Select vehicle</option>
          ${getVehicleOptions()}
        </select>
      </div>
      <div class="vf-form-group">
        <label for="usage-date" class="vf-form-label">Date <span class="vf-required">*</span></label>
        <input type="date" id="usage-date" class="vf-form-input" required value="${new Date().toISOString().split('T')[0]}">
      </div>
      <div class="vf-form-group">
        <label for="usage-odometer" class="vf-form-label">Odometer (km) <span class="vf-required">*</span></label>
        <input type="number" id="usage-odometer" class="vf-form-input" step="0.1" min="0" required>
      </div>
      <div class="vf-form-group">
        <label for="usage-driving-hours" class="vf-form-label">Driving Hours <span class="vf-required">*</span></label>
        <input type="number" id="usage-driving-hours" class="vf-form-input" step="0.1" min="0" required>
      </div>
      <div class="vf-form-group">
        <label for="usage-idle-hours" class="vf-form-label">Idle Hours <span class="vf-required">*</span></label>
        <input type="number" id="usage-idle-hours" class="vf-form-input" step="0.1" min="0" required>
      </div>
      <div class="vf-form-group">
        <label for="usage-jobs" class="vf-form-label">Jobs Count (optional)</label>
        <input type="number" id="usage-jobs" class="vf-form-input" step="1" min="0">
      </div>
      <div class="vf-form-actions">
        <button type="button" class="vf-btn vf-btn--secondary" onclick="this.closest('.vf-modal-overlay')?.remove()">Cancel</button>
        <button type="submit" class="vf-btn vf-btn--primary">Save</button>
      </div>
    </form>
  `;
}
function renderFuelForm() {
    return `
    <div class="vf-modal-header">
      <h2 class="vf-modal-title">Add Fuel Log</h2>
      <button class="vf-modal-close">&times;</button>
    </div>
    <form class="vf-form" id="vf-fuel-form">
      <div class="vf-form-group">
        <label for="fuel-vehicle" class="vf-form-label">Vehicle <span class="vf-required">*</span></label>
        <select id="fuel-vehicle" class="vf-form-input" required>
          <option value="">Select vehicle</option>
          ${getVehicleOptions()}
        </select>
      </div>
      <div class="vf-form-group">
        <label for="fuel-datetime" class="vf-form-label">Date & Time <span class="vf-required">*</span></label>
        <input type="datetime-local" id="fuel-datetime" class="vf-form-input" required value="${new Date().toISOString().slice(0, 16)}">
      </div>
      <div class="vf-form-group">
        <label for="fuel-liters" class="vf-form-label">Liters <span class="vf-required">*</span></label>
        <input type="number" id="fuel-liters" class="vf-form-input" step="0.01" min="0" required>
      </div>
      <div class="vf-form-group">
        <label for="fuel-cost" class="vf-form-label">Total Cost (€) <span class="vf-required">*</span></label>
        <input type="number" id="fuel-cost" class="vf-form-input" step="0.01" min="0" required>
      </div>
      <div class="vf-form-group">
        <label for="fuel-odometer" class="vf-form-label">Odometer (km) <span class="vf-required">*</span></label>
        <input type="number" id="fuel-odometer" class="vf-form-input" step="0.1" min="0" required>
      </div>
      <div class="vf-form-group">
        <label for="fuel-notes" class="vf-form-label">Notes (optional)</label>
        <textarea id="fuel-notes" class="vf-form-input" rows="3"></textarea>
      </div>
      <div class="vf-form-actions">
        <button type="button" class="vf-btn vf-btn--secondary" onclick="this.closest('.vf-modal-overlay')?.remove()">Cancel</button>
        <button type="submit" class="vf-btn vf-btn--primary">Save</button>
      </div>
    </form>
  `;
}
function renderMaintenanceForm() {
    return `
    <div class="vf-modal-header">
      <h2 class="vf-modal-title">Add Maintenance Event</h2>
      <button class="vf-modal-close">&times;</button>
    </div>
    <form class="vf-form" id="vf-maintenance-form">
      <div class="vf-form-group">
        <label for="maintenance-vehicle" class="vf-form-label">Vehicle <span class="vf-required">*</span></label>
        <select id="maintenance-vehicle" class="vf-form-input" required>
          <option value="">Select vehicle</option>
          ${getVehicleOptions()}
        </select>
      </div>
      <div class="vf-form-group">
        <label for="maintenance-type" class="vf-form-label">Type <span class="vf-required">*</span></label>
        <select id="maintenance-type" class="vf-form-input" required>
          <option value="">Select type</option>
          <option value="Service">Service</option>
          <option value="Repair">Repair</option>
          <option value="Tire">Tire</option>
          <option value="Check">Check</option>
        </select>
      </div>
      <div class="vf-form-group">
        <label for="maintenance-cost" class="vf-form-label">Cost (€) <span class="vf-required">*</span></label>
        <input type="number" id="maintenance-cost" class="vf-form-input" step="0.01" min="0" required>
      </div>
      <div class="vf-form-group">
        <label for="maintenance-date-start" class="vf-form-label">Start Date <span class="vf-required">*</span></label>
        <input type="date" id="maintenance-date-start" class="vf-form-input" required value="${new Date().toISOString().split('T')[0]}">
      </div>
      <div class="vf-form-group">
        <label for="maintenance-date-end" class="vf-form-label">End Date (optional)</label>
        <input type="date" id="maintenance-date-end" class="vf-form-input">
      </div>
      <div class="vf-form-group">
        <label for="maintenance-notes" class="vf-form-label">Notes (optional)</label>
        <textarea id="maintenance-notes" class="vf-form-input" rows="3"></textarea>
      </div>
      <div class="vf-form-actions">
        <button type="button" class="vf-btn vf-btn--secondary" onclick="this.closest('.vf-modal-overlay')?.remove()">Cancel</button>
        <button type="submit" class="vf-btn vf-btn--primary">Save</button>
      </div>
    </form>
  `;
}
function renderIncidentForm() {
    return `
    <div class="vf-modal-header">
      <h2 class="vf-modal-title">Add Incident/Damage</h2>
      <button class="vf-modal-close">&times;</button>
    </div>
    <form class="vf-form" id="vf-incident-form">
      <div class="vf-form-group">
        <label for="incident-vehicle" class="vf-form-label">Vehicle <span class="vf-required">*</span></label>
        <select id="incident-vehicle" class="vf-form-input" required>
          <option value="">Select vehicle</option>
          ${getVehicleOptions()}
        </select>
      </div>
      <div class="vf-form-group">
        <label for="incident-driver" class="vf-form-label">Driver ID (optional)</label>
        <input type="text" id="incident-driver" class="vf-form-input">
      </div>
      <div class="vf-form-group">
        <label for="incident-date" class="vf-form-label">Date <span class="vf-required">*</span></label>
        <input type="date" id="incident-date" class="vf-form-input" required value="${new Date().toISOString().split('T')[0]}">
      </div>
      <div class="vf-form-group">
        <label for="incident-description" class="vf-form-label">Description <span class="vf-required">*</span></label>
        <textarea id="incident-description" class="vf-form-input" rows="3" required></textarea>
      </div>
      <div class="vf-form-group">
        <label for="incident-damage-cost" class="vf-form-label">Damage Cost (€) <span class="vf-required">*</span></label>
        <input type="number" id="incident-damage-cost" class="vf-form-input" step="0.01" min="0" required>
      </div>
      <div class="vf-form-group">
        <label for="incident-insurance" class="vf-form-label">Insurance Covered (€) (optional)</label>
        <input type="number" id="incident-insurance" class="vf-form-input" step="0.01" min="0">
      </div>
      <div class="vf-form-group">
        <label for="incident-notes" class="vf-form-label">Notes (optional)</label>
        <textarea id="incident-notes" class="vf-form-input" rows="3"></textarea>
      </div>
      <div class="vf-form-actions">
        <button type="button" class="vf-btn vf-btn--secondary" onclick="this.closest('.vf-modal-overlay')?.remove()">Cancel</button>
        <button type="submit" class="vf-btn vf-btn--primary">Save</button>
      </div>
    </form>
  `;
}
function handleFormSubmit(formType, form) {
    let vehicleId = '';
    switch (formType) {
        case 'usage':
            const usageData = {
                vehicleId: form.querySelector('#usage-vehicle').value,
                date: form.querySelector('#usage-date').value,
                odometerKm: parseFloat(form.querySelector('#usage-odometer').value),
                drivingHours: parseFloat(form.querySelector('#usage-driving-hours').value),
                idleHours: parseFloat(form.querySelector('#usage-idle-hours').value),
                jobsCount: form.querySelector('#usage-jobs').value ? parseInt(form.querySelector('#usage-jobs').value) : undefined
            };
            usageDaily.push(usageData);
            vehicleId = usageData.vehicleId;
            break;
        case 'fuel':
            const fuelData = {
                vehicleId: form.querySelector('#fuel-vehicle').value,
                dateTime: form.querySelector('#fuel-datetime').value,
                liters: parseFloat(form.querySelector('#fuel-liters').value),
                totalCost: parseFloat(form.querySelector('#fuel-cost').value),
                odometerKm: parseFloat(form.querySelector('#fuel-odometer').value),
                notes: form.querySelector('#fuel-notes').value || undefined
            };
            fuelLogs.push(fuelData);
            vehicleId = fuelData.vehicleId;
            break;
        case 'maintenance':
            const maintenanceData = {
                vehicleId: form.querySelector('#maintenance-vehicle').value,
                type: form.querySelector('#maintenance-type').value,
                cost: parseFloat(form.querySelector('#maintenance-cost').value),
                dateStart: form.querySelector('#maintenance-date-start').value,
                dateEnd: form.querySelector('#maintenance-date-end').value || undefined,
                notes: form.querySelector('#maintenance-notes').value || undefined
            };
            maintenanceEvents.push(maintenanceData);
            vehicleId = maintenanceData.vehicleId;
            break;
        case 'incident':
            const incidentData = {
                vehicleId: form.querySelector('#incident-vehicle').value,
                driverId: form.querySelector('#incident-driver').value || undefined,
                date: form.querySelector('#incident-date').value,
                description: form.querySelector('#incident-description').value,
                damageCost: parseFloat(form.querySelector('#incident-damage-cost').value),
                insuranceCovered: form.querySelector('#incident-insurance').value ? parseFloat(form.querySelector('#incident-insurance').value) : undefined,
                notes: form.querySelector('#incident-notes').value || undefined
            };
            incidents.push(incidentData);
            vehicleId = incidentData.vehicleId;
            break;
        default:
            return;
    }
    recalculateVehiclePerformance(vehicleId);
    closeModal();
    renderTable();
    if (selectedVehicle?.id === vehicleId) {
        renderDetailPanel();
    }
}
function recalculateVehiclePerformance(vehicleId) {
    const vehicle = vehicles.find(v => v.id === vehicleId);
    if (!vehicle)
        return;
    const now = new Date();
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    // Calculate utilization from usage entries
    const relevantUsage = usageDaily.filter(u => u.vehicleId === vehicleId &&
        new Date(u.date) >= thirtyDaysAgo);
    let totalKm = 0;
    let totalDrivingHours = 0;
    let totalIdleHours = 0;
    let lastOdometer = 0;
    if (relevantUsage.length > 0) {
        relevantUsage.forEach(usage => {
            totalDrivingHours += usage.drivingHours;
            totalIdleHours += usage.idleHours;
            if (usage.odometerKm > lastOdometer) {
                totalKm += usage.odometerKm - lastOdometer;
                lastOdometer = usage.odometerKm;
            }
        });
    }
    else {
        // Keep existing values if no new data
        totalKm = vehicle.utilizationKm;
        totalDrivingHours = vehicle.utilizationHours;
    }
    // Calculate fuel consumption from fuel logs
    const relevantFuelLogs = fuelLogs.filter(f => f.vehicleId === vehicleId &&
        new Date(f.dateTime) >= thirtyDaysAgo);
    let totalLiters = 0;
    let totalFuelCost = 0;
    let minFuelKm = Infinity;
    let maxFuelKm = 0;
    if (relevantFuelLogs.length > 0) {
        relevantFuelLogs.forEach(log => {
            totalLiters += log.liters;
            totalFuelCost += log.totalCost;
            minFuelKm = Math.min(minFuelKm, log.odometerKm);
            maxFuelKm = Math.max(maxFuelKm, log.odometerKm);
        });
    }
    const fuelKm = maxFuelKm > minFuelKm ? maxFuelKm - minFuelKm : totalKm;
    // Calculate maintenance cost
    const relevantMaintenance = maintenanceEvents.filter(m => m.vehicleId === vehicleId &&
        new Date(m.dateStart) >= thirtyDaysAgo);
    let maintenanceCost = 0;
    relevantMaintenance.forEach(m => {
        maintenanceCost += m.cost;
    });
    // Calculate incident cost
    const relevantIncidents = incidents.filter(i => i.vehicleId === vehicleId &&
        new Date(i.date) >= thirtyDaysAgo);
    let incidentCost = 0;
    relevantIncidents.forEach(i => {
        incidentCost += (i.damageCost - (i.insuranceCovered || 0));
    });
    // Calculate metrics
    const totalHours = totalDrivingHours + totalIdleHours;
    // Utilization: driving hours / (30 days * 24 hours) = percentage of time vehicle was driving
    const utilization = totalDrivingHours / (30 * 24);
    const fuelConsumption = fuelKm > 0 ? (totalLiters / fuelKm) * 100 : vehicle.fuelConsumptionLPer100km;
    const fuelCostPerKm = fuelKm > 0 ? totalFuelCost / fuelKm : vehicle.fuelCostPerKm;
    const totalCost = totalFuelCost + maintenanceCost + incidentCost;
    const costPerKm = totalKm > 0 ? totalCost / totalKm : vehicle.costPerKm;
    // Calculate VPI (simplified formula: 0-100 based on utilization, fuel efficiency, and incidents)
    let vpi = 50; // Base score
    vpi += Math.min(utilization * 30, 30); // Utilization contribution (max 30 points)
    vpi += Math.max(0, 20 - (fuelConsumption - 8) * 2); // Fuel efficiency (max 20 points, penalize high consumption)
    vpi -= relevantIncidents.length * 10; // Penalty for incidents (10 points per incident)
    vpi = Math.max(0, Math.min(100, vpi)); // Clamp to 0-100
    // Determine safety grade
    let safetyGrade = 'A';
    if (relevantIncidents.length >= 3)
        safetyGrade = 'D';
    else if (relevantIncidents.length >= 2)
        safetyGrade = 'C';
    else if (relevantIncidents.length >= 1)
        safetyGrade = 'B';
    // Determine maintenance status
    let maintenanceStatus = 'OK';
    const nextService = new Date(vehicle.nextServiceDueDate);
    const daysUntilService = (nextService.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
    if (daysUntilService < 0)
        maintenanceStatus = 'Overdue';
    else if (daysUntilService < 7)
        maintenanceStatus = 'Due soon';
    // Update vehicle
    vehicle.utilization = Math.min(1, utilization);
    vehicle.utilizationKm = totalKm;
    vehicle.utilizationHours = totalDrivingHours;
    vehicle.fuelConsumptionLPer100km = fuelConsumption;
    vehicle.fuelCostPerKm = fuelCostPerKm;
    vehicle.maintenanceCost30d = maintenanceCost;
    vehicle.costPerKm = costPerKm;
    vehicle.totalCost30d = totalCost;
    vehicle.vpi = Math.round(vpi);
    vehicle.safetyGrade = safetyGrade;
    vehicle.harshEventsCount = relevantIncidents.length;
    vehicle.incidentsCount = relevantIncidents.length;
    vehicle.maintenanceStatus = maintenanceStatus;
    vehicle.lastUpdate = now.toISOString();
}
function selectVehicle(vehicle) {
    selectedVehicle = vehicle;
    const rows = rootElement.querySelectorAll('.vf-table-row');
    rows.forEach(row => row.classList.remove('vf-table-row--selected'));
    const selectedRow = Array.from(rows).find(row => row.querySelector('.vf-vehicle-name')?.textContent === vehicle.name);
    if (selectedRow) {
        selectedRow.classList.add('vf-table-row--selected');
    }
    renderDetailPanel();
}
// Main initialization function
export function initVehiclePerformanceModule(root) {
    rootElement = root;
    root.className = 'vf-container';
    // Reset state
    vehicles = [...mockVehicles];
    filteredVehicles = [...mockVehicles];
    selectedVehicle = null;
    const defaultRange = getDefaultDateRange();
    startDate = defaultRange.start;
    endDate = defaultRange.end;
    currentSortField = 'none';
    currentSortDirection = 'asc';
    currentStatusFilter = 'All';
    currentTypeFilter = 'All';
    searchQuery = '';
    // Render all components
    renderHeader();
    renderFilters();
    renderMainLayout();
    // Initial render
    applyFiltersAndSorting();
}
