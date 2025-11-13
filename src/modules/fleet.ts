export function renderFleet(): string {
    return `
        <div class="module-container">
            <div class="module-header">
                <h1 class="module-title">Fahrly Fleet</h1>
            </div>
            <div class="module-content">
                <div class="card">
                    <h2 class="card-title">Vehicle Management</h2>
                    <p class="card-content">
                        Track and manage your fleet vehicles, including maintenance schedules and vehicle information.
                    </p>
                </div>
                <div class="card">
                    <h2 class="card-title">Maintenance Tracking</h2>
                    <p class="card-content">
                        Monitor vehicle maintenance, repairs, and service history.
                    </p>
                </div>
                <div class="card">
                    <h2 class="card-title">Fleet Analytics</h2>
                    <p class="card-content">
                        Analyze fleet performance, utilization, and operational metrics.
                    </p>
                </div>
            </div>
        </div>
    `;
}

