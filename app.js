// Application Data and State Management
class FisheriesApp {
    constructor() {
        this.currentUser = null;
        this.currentSection = 'dashboard';
        this.heatMapZoom = 1;
        this.heatMapPan = { x: 0, y: 0 };
        this.data = {
            users: [
                {"id": 1, "username": "admin", "password": "admin123", "role": "Admin", "name": "Dr. Rajesh Kumar", "email": "rajesh.kumar@fisheries.gov.in", "region": "All Regions"},
                {"id": 2, "username": "officer1", "password": "officer123", "role": "Regional Officer", "name": "Smt. Priya Sharma", "email": "priya.sharma@fisheries.gov.in", "region": "Northern Region"},
                {"id": 3, "username": "analyst1", "password": "analyst123", "role": "Data Analyst", "name": "Mr. Arvind Patel", "email": "arvind.patel@fisheries.gov.in", "region": "Western Region"}
            ],
            fishermen: [
                {"id": "F001", "name": "Ramesh Kumar", "license": "FL2024001", "region": "Northern Region", "phone": "+91-9876543210", "vessel": "V001", "status": "Active", "licenseExpiry": "2025-03-15", "address": "Coastal Village, North Bay"},
                {"id": "F002", "name": "Suresh Patel", "license": "FL2024002", "region": "Western Region", "phone": "+91-9876543211", "vessel": "V002", "status": "Active", "licenseExpiry": "2025-04-20", "address": "Fishing Colony, West Coast"},
                {"id": "F003", "name": "Mahesh Gupta", "license": "FL2024003", "region": "Southern Region", "phone": "+91-9876543212", "vessel": "V003", "status": "Active", "licenseExpiry": "2025-02-10", "address": "Harbour View, South Port"},
                {"id": "F004", "name": "Dinesh Rao", "license": "FL2024004", "region": "Eastern Region", "phone": "+91-9876543213", "vessel": "V004", "status": "Active", "licenseExpiry": "2025-05-30", "address": "Bay Side, East Coast"},
                {"id": "F005", "name": "Ganesh Nair", "license": "FL2024005", "region": "Southern Region", "phone": "+91-9876543214", "vessel": "V005", "status": "Active", "licenseExpiry": "2025-01-15", "address": "Fisherman Quarter, South Bay"}
            ],
            vessels: [
                {"id": "V001", "name": "Sea Explorer", "registration": "IN-KL-001", "type": "Trawler", "capacity": 500, "length": 15.5, "owner": "F001", "status": "Active", "gpsStatus": "Online", "location": {"lat": 8.5241, "lng": 76.9366}},
                {"id": "V002", "name": "Ocean Hunter", "registration": "IN-GJ-002", "type": "Gillnetter", "capacity": 300, "length": 12.0, "owner": "F002", "status": "Active", "gpsStatus": "Online", "location": {"lat": 21.1458, "lng": 72.7850}},
                {"id": "V003", "name": "Wave Rider", "registration": "IN-TN-003", "type": "Purse Seine", "capacity": 800, "length": 18.2, "owner": "F003", "status": "Active", "gpsStatus": "Offline", "location": {"lat": 13.0827, "lng": 80.2707}},
                {"id": "V004", "name": "Bay Walker", "registration": "IN-WB-004", "type": "Longline", "capacity": 400, "length": 14.0, "owner": "F004", "status": "Active", "gpsStatus": "Online", "location": {"lat": 22.5726, "lng": 88.3639}},
                {"id": "V005", "name": "Tide Turner", "registration": "IN-KE-005", "type": "Hook & Line", "capacity": 200, "length": 10.5, "owner": "F005", "status": "Maintenance", "gpsStatus": "Offline", "location": {"lat": 9.9312, "lng": 76.2673}}
            ],
            coastGuardPatrols: [
                {"id": "CG001", "name": "ICGS Vikram", "type": "Patrol Vessel", "location": {"lat": 19.0760, "lng": 72.8777}, "status": "Active", "jurisdiction": "Western Coast"},
                {"id": "CG002", "name": "ICGS Samudra Prahari", "type": "Fast Patrol Vessel", "location": {"lat": 13.0827, "lng": 80.2707}, "status": "Active", "jurisdiction": "Eastern Coast"},
                {"id": "CG003", "name": "ICGS Rajkamal", "type": "Offshore Patrol Vessel", "location": {"lat": 8.0883, "lng": 77.0514}, "status": "Active", "jurisdiction": "Southern Coast"},
                {"id": "CG004", "name": "ICGS Veera", "type": "Interceptor Boat", "location": {"lat": 23.0225, "lng": 72.5714}, "status": "Patrol", "jurisdiction": "Gujarat Coast"},
                {"id": "CG005", "name": "ICGS Sagar", "type": "Patrol Vessel", "location": {"lat": 15.2993, "lng": 74.1240}, "status": "Active", "jurisdiction": "Goa Coast"}
            ],
            restrictedAreas: [
                {"id": "RA001", "name": "Marine National Park", "type": "Protected Area", "coordinates": [{"lat": 22.4838, "lng": 69.7923}, {"lat": 22.5838, "lng": 69.8923}, {"lat": 22.5838, "lng": 69.9923}, {"lat": 22.4838, "lng": 69.9923}], "severity": "High"},
                {"id": "RA002", "name": "Coral Reef Sanctuary", "type": "Conservation Zone", "coordinates": [{"lat": 11.9416, "lng": 79.8083}, {"lat": 12.0416, "lng": 79.9083}, {"lat": 12.0416, "lng": 80.0083}, {"lat": 11.9416, "lng": 80.0083}], "severity": "High"},
                {"id": "RA003", "name": "Turtle Nesting Beach", "type": "Seasonal Restriction", "coordinates": [{"lat": 19.8728, "lng": 85.0985}, {"lat": 19.9728, "lng": 85.1985}, {"lat": 19.9728, "lng": 85.2985}, {"lat": 19.8728, "lng": 85.2985}], "severity": "Medium"},
                {"id": "RA004", "name": "Naval Exercise Zone", "type": "Military Restriction", "coordinates": [{"lat": 14.5203, "lng": 74.1240}, {"lat": 14.6203, "lng": 74.2240}, {"lat": 14.6203, "lng": 74.3240}, {"lat": 14.5203, "lng": 74.3240}], "severity": "High"}
            ],
            fishingHotspots: [
                {"id": "HS001", "name": "Mumbai High Fishing Ground", "location": {"lat": 19.2183, "lng": 72.9781}, "activityLevel": 9, "primarySpecies": ["Pomfret", "Mackerel", "Sardine"]},
                {"id": "HS002", "name": "Kochi Backwaters", "location": {"lat": 9.9312, "lng": 76.2673}, "activityLevel": 8, "primarySpecies": ["Kingfish", "Tuna", "Prawns"]},
                {"id": "HS003", "name": "Chennai Fishing Zone", "location": {"lat": 13.0827, "lng": 80.2707}, "activityLevel": 7, "primarySpecies": ["Hilsa", "Croaker", "Catfish"]},
                {"id": "HS004", "name": "Goa Deep Sea Area", "location": {"lat": 15.2993, "lng": 74.1240}, "activityLevel": 8, "primarySpecies": ["Tuna", "Seer Fish", "Grouper"]},
                {"id": "HS005", "name": "Gujarat Continental Shelf", "location": {"lat": 21.1458, "lng": 72.7850}, "activityLevel": 9, "primarySpecies": ["Bombay Duck", "Prawns", "Anchovy"]},
                {"id": "HS006", "name": "Bengal Bay Fishing Ground", "location": {"lat": 22.5726, "lng": 88.3639}, "activityLevel": 6, "primarySpecies": ["Hilsa", "Pomfret", "Prawns"]}
            ],
            sosIncidents: [
                {"id": "SOS001", "vesselId": "V003", "fishermanName": "Mahesh Gupta", "location": {"lat": 13.0827, "lng": 80.2707}, "timestamp": "2024-10-02T10:30:00Z", "status": "Active", "type": "Engine Failure", "description": "Vessel engine stopped, requesting immediate assistance"},
                {"id": "SOS002", "vesselId": "V005", "fishermanName": "Ganesh Nair", "location": {"lat": 9.9312, "lng": 76.2673}, "timestamp": "2024-10-01T18:45:00Z", "status": "Resolved", "type": "Medical Emergency", "description": "Crew member injured, coast guard assistance provided"},
                {"id": "SOS003", "vesselId": "V002", "fishermanName": "Suresh Patel", "location": {"lat": 21.1458, "lng": 72.7850}, "timestamp": "2024-10-02T06:15:00Z", "status": "Active", "type": "Distress Signal", "description": "Vessel in rough weather, requesting rescue"}
            ],
            endangeredSpeciesCatches: [
                {"id": "ESC001", "fishermanId": "F004", "species": "Whale Shark", "location": {"lat": 22.5726, "lng": 88.3639}, "timestamp": "2024-10-01T14:20:00Z", "action": "Released", "status": "Reported", "severity": "High"},
                {"id": "ESC002", "fishermanId": "F002", "species": "Sea Turtle", "location": {"lat": 21.1458, "lng": 72.7850}, "timestamp": "2024-09-30T11:30:00Z", "action": "Released", "status": "Investigated", "severity": "Medium"},
                {"id": "ESC003", "fishermanId": "F001", "species": "Sawfish", "location": {"lat": 8.5241, "lng": 76.9366}, "timestamp": "2024-10-02T08:45:00Z", "action": "Released", "status": "Under Review", "severity": "High"}
            ],
            catches: [
                {"id": "C001", "fishermanId": "F001", "vesselId": "V001", "date": "2024-10-01", "time": "06:30", "species": "Mackerel", "quantity": 45.5, "location": {"lat": 8.5241, "lng": 76.9366}, "method": "Trawling", "region": "Northern Region"},
                {"id": "C002", "fishermanId": "F002", "vesselId": "V002", "date": "2024-10-01", "time": "07:15", "species": "Sardine", "quantity": 32.0, "location": {"lat": 21.1458, "lng": 72.7850}, "method": "Gillnet", "region": "Western Region"},
                {"id": "C003", "fishermanId": "F003", "vesselId": "V003", "date": "2024-10-01", "time": "08:00", "species": "Tuna", "quantity": 68.2, "location": {"lat": 13.0827, "lng": 80.2707}, "method": "Purse Seine", "region": "Southern Region"}
            ],
            species: ["Mackerel", "Sardine", "Tuna", "Pomfret", "Kingfish", "Anchovy", "Prawns", "Hilsa", "Bombay Duck", "Croaker", "Catfish", "Seer Fish", "Red Snapper", "Grouper", "Sole", "Skate", "Crab", "Lobster", "Squid", "Mussels"],
            endangeredSpecies: ["Whale Shark", "Sea Turtle", "Sawfish", "Giant Grouper", "Humphead Wrasse", "Napoleon Fish"],
            fishingMethods: ["Trawling", "Gillnet", "Purse Seine", "Longline", "Hook & Line", "Cast Net", "Trap", "Dredge"],
            regions: ["Northern Region", "Southern Region", "Eastern Region", "Western Region", "Central Region"],
            metrics: {
                totalFishermen: 1847,
                totalVessels: 892,
                monthlyCatch: 24650,
                speciesCount: 67,
                complianceRate: 94.2,
                activeSosAlerts: 2,
                endangeredSpeciesIncidents: 3,
                coastGuardCoverage: 87.5,
                averageResponseTime: 45
            }
        };
        this.charts = {};
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.showLoginScreen();
    }

    setupEventListeners() {
        // Login form
        document.getElementById('loginForm').addEventListener('submit', (e) => this.handleLogin(e));
        
        // Logout button
        document.getElementById('logoutBtn').addEventListener('click', () => this.handleLogout());
        
        // Navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => this.handleNavigation(e));
        });
        
        // Sidebar toggle
        document.getElementById('sidebarToggle').addEventListener('click', () => this.toggleSidebar());
        
        // Modal close
        document.getElementById('modalClose').addEventListener('click', () => this.closeModal());
        
        // SOS alerts button
        document.getElementById('sosAlertsBtn')?.addEventListener('click', () => this.showSection('sos'));
        
        // Add buttons
        document.getElementById('addFishermanBtn')?.addEventListener('click', () => this.showAddFishermanModal());
        document.getElementById('addVesselBtn')?.addEventListener('click', () => this.showAddVesselModal());
        document.getElementById('addCatchBtn')?.addEventListener('click', () => this.showAddCatchModal());
        document.getElementById('reportEndangeredBtn')?.addEventListener('click', () => this.showReportEndangeredModal());
        document.getElementById('dispatchCoastGuard')?.addEventListener('click', () => this.dispatchCoastGuard());
        
        // Heat map controls
        document.getElementById('zoomIn')?.addEventListener('click', () => this.zoomHeatMap(1.2));
        document.getElementById('zoomOut')?.addEventListener('click', () => this.zoomHeatMap(0.8));
        document.getElementById('resetZoom')?.addEventListener('click', () => this.resetHeatMapZoom());
        document.getElementById('toggleLegend')?.addEventListener('click', () => this.toggleMapLegend());
        
        // Filters
        this.setupFilters();
    }

    setupFilters() {
        // Fishermen filters
        document.getElementById('fishermenSearch')?.addEventListener('input', () => this.filterFishermen());
        document.getElementById('regionFilter')?.addEventListener('change', () => this.filterFishermen());
        document.getElementById('statusFilter')?.addEventListener('change', () => this.filterFishermen());
        
        // Catch filters
        document.getElementById('dateFromFilter')?.addEventListener('change', () => this.filterCatches());
        document.getElementById('dateToFilter')?.addEventListener('change', () => this.filterCatches());
        document.getElementById('speciesFilter')?.addEventListener('change', () => this.filterCatches());
        document.getElementById('methodFilter')?.addEventListener('change', () => this.filterCatches());
    }

    showLoginScreen() {
        document.getElementById('loginScreen').classList.remove('hidden');
        document.getElementById('mainApp').classList.add('hidden');
    }

    showMainApp() {
        document.getElementById('loginScreen').classList.add('hidden');
        document.getElementById('mainApp').classList.remove('hidden');
        this.showSection('dashboard');
        this.updateUserInfo();
        this.populateDropdowns();
        this.loadDashboard();
        this.updateSosCount();
    }

    updateSosCount() {
        const activeSosCount = this.data.sosIncidents.filter(incident => incident.status === 'Active').length;
        document.getElementById('sosCount').textContent = activeSosCount;
    }

    handleLogin(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        const user = this.data.users.find(u => u.username === username && u.password === password);
        
        if (user) {
            this.currentUser = user;
            this.showMainApp();
            this.showToast('Login successful!', 'success');
        } else {
            this.showToast('Invalid credentials. Please try again.', 'error');
        }
    }

    handleLogout() {
        this.currentUser = null;
        this.showLoginScreen();
        this.showToast('Logged out successfully.', 'info');
    }

    updateUserInfo() {
        if (this.currentUser) {
            document.getElementById('currentUser').textContent = `${this.currentUser.name} (${this.currentUser.role})`;
        }
    }

    handleNavigation(e) {
        e.preventDefault();
        const section = e.target.closest('.nav-link').dataset.section;
        this.showSection(section);
        
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        e.target.closest('.nav-link').classList.add('active');
    }

    showSection(sectionName) {
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        
        const targetSection = document.getElementById(`${sectionName}Section`);
        if (targetSection) {
            targetSection.classList.add('active');
            this.currentSection = sectionName;
            
            // Load section-specific data
            switch (sectionName) {
                case 'dashboard':
                    this.loadDashboard();
                    break;
                case 'sos':
                    this.loadSosSection();
                    break;
                case 'conservation':
                    this.loadConservationSection();
                    break;
                case 'fishermen':
                    this.loadFishermen();
                    break;
                case 'vessels':
                    this.loadVessels();
                    break;
                case 'catches':
                    this.loadCatches();
                    break;
                case 'analytics':
                    this.loadAnalytics();
                    break;
                case 'mapping':
                    this.loadMapping();
                    break;
            }
        }
    }

    toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('open');
    }

    populateDropdowns() {
        // Species dropdown
        const speciesFilter = document.getElementById('speciesFilter');
        if (speciesFilter) {
            this.data.species.forEach(species => {
                const option = document.createElement('option');
                option.value = species;
                option.textContent = species;
                speciesFilter.appendChild(option);
            });
        }
        
        // Method dropdown
        const methodFilter = document.getElementById('methodFilter');
        if (methodFilter) {
            this.data.fishingMethods.forEach(method => {
                const option = document.createElement('option');
                option.value = method;
                option.textContent = method;
                methodFilter.appendChild(option);
            });
        }
    }

    loadDashboard() {
        this.loadActivityFeed();
        this.loadDashboardCharts();
    }

    loadActivityFeed() {
        const activityFeed = document.getElementById('activityFeed');
        if (!activityFeed) return;
        
        const activities = [
            { icon: 'fas fa-exclamation-triangle', text: 'SOS Alert: Engine failure reported by Wave Rider', time: '30 minutes ago', type: 'sos' },
            { icon: 'fas fa-leaf', text: 'Endangered species catch reported - Whale Shark released', time: '1 hour ago', type: 'conservation' },
            { icon: 'fas fa-fish', text: 'New catch logged by Ramesh Kumar - 45.5kg Mackerel', time: '2 hours ago', type: 'catch' },
            { icon: 'fas fa-ship', text: 'Coast Guard patrol ICGS Vikram dispatched to assist', time: '3 hours ago', type: 'coastguard' },
            { icon: 'fas fa-user-plus', text: 'New fisherman registered - Vikram Mehta', time: '4 hours ago', type: 'user' },
            { icon: 'fas fa-shield-alt', text: 'Vessel entered restricted marine protected area', time: '5 hours ago', type: 'warning' }
        ];
        
        activityFeed.innerHTML = activities.map(activity => `
            <div class="activity-item">
                <div class="activity-icon">
                    <i class="${activity.icon}"></i>
                </div>
                <div class="activity-content">
                    <p>${activity.text}</p>
                    <span class="activity-time">${activity.time}</span>
                </div>
            </div>
        `).join('');
    }

    loadDashboardCharts() {
        // Monthly catch trends chart
        const catchTrendCtx = document.getElementById('catchTrendChart');
        if (catchTrendCtx && !this.charts.catchTrend) {
            this.charts.catchTrend = new Chart(catchTrendCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                    datasets: [{
                        label: 'Monthly Catch (kg)',
                        data: [18500, 22300, 19800, 25600, 28900, 24200, 26800, 23400, 25100, 24650],
                        borderColor: '#1FB8CD',
                        backgroundColor: 'rgba(31, 184, 205, 0.1)',
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: function(value) {
                                    return value.toLocaleString() + ' kg';
                                }
                            }
                        }
                    }
                }
            });
        }
        
        // Regional productivity chart
        const regionalCtx = document.getElementById('regionalChart');
        if (regionalCtx && !this.charts.regional) {
            this.charts.regional = new Chart(regionalCtx, {
                type: 'bar',
                data: {
                    labels: ['Northern', 'Southern', 'Eastern', 'Western'],
                    datasets: [{
                        label: 'Total Catch (kg)',
                        data: [8500, 7200, 5800, 6400],
                        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#5D878F']
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: function(value) {
                                    return value.toLocaleString() + ' kg';
                                }
                            }
                        }
                    }
                }
            });
        }
    }

    loadSosSection() {
        this.loadSosAlerts();
    }

    loadSosAlerts() {
        const sosAlertsList = document.getElementById('sosAlertsList');
        if (!sosAlertsList) return;
        
        const activeAlerts = this.data.sosIncidents.filter(incident => incident.status === 'Active');
        
        if (activeAlerts.length === 0) {
            sosAlertsList.innerHTML = '<p class="text-center text-muted">No active SOS alerts</p>';
            return;
        }
        
        sosAlertsList.innerHTML = activeAlerts.map(alert => `
            <div class="alert-item">
                <div class="alert-header">
                    <h4 class="alert-title">${alert.type} - ${alert.fishermanName}</h4>
                    <span class="alert-time">${new Date(alert.timestamp).toLocaleString()}</span>
                </div>
                <div class="alert-content">
                    <p>${alert.description}</p>
                </div>
                <div class="alert-location">
                    <i class="fas fa-map-marker-alt"></i> 
                    Location: ${alert.location.lat.toFixed(4)}, ${alert.location.lng.toFixed(4)}
                </div>
                <div class="alert-actions">
                    <button class="btn btn--primary btn--sm" onclick="app.dispatchRescue('${alert.id}')">
                        <i class="fas fa-ambulance"></i> Dispatch Rescue
                    </button>
                    <button class="btn btn--outline btn--sm" onclick="app.updateSosStatus('${alert.id}', 'Resolved')">
                        <i class="fas fa-check"></i> Mark Resolved
                    </button>
                    <button class="btn btn--outline btn--sm" onclick="app.viewOnMap('${alert.id}')">
                        <i class="fas fa-map"></i> View on Map
                    </button>
                </div>
            </div>
        `).join('');
    }

    loadConservationSection() {
        this.loadEndangeredSpeciesTable();
    }

    loadEndangeredSpeciesTable() {
        const tableBody = document.getElementById('endangeredTableBody');
        if (!tableBody) return;
        
        tableBody.innerHTML = this.data.endangeredSpeciesCatches.map(incident => {
            const fisherman = this.data.fishermen.find(f => f.id === incident.fishermanId);
            return `
                <tr>
                    <td>${incident.id}</td>
                    <td>${incident.species}</td>
                    <td>${fisherman ? fisherman.name : incident.fishermanId}</td>
                    <td>${incident.location.lat.toFixed(4)}, ${incident.location.lng.toFixed(4)}</td>
                    <td>${new Date(incident.timestamp).toLocaleString()}</td>
                    <td>${incident.action}</td>
                    <td><span class="status-badge ${incident.status.toLowerCase().replace(' ', '.')}">${incident.status}</span></td>
                    <td><span class="status-badge ${incident.severity.toLowerCase()}">${incident.severity}</span></td>
                    <td>
                        <div class="action-buttons">
                            <button class="btn-icon" onclick="app.viewIncidentDetails('${incident.id}')" title="View Details">
                                <i class="fas fa-eye"></i>
                            </button>
                            <button class="btn-icon" onclick="app.updateIncidentStatus('${incident.id}')" title="Update Status">
                                <i class="fas fa-edit"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            `;
        }).join('');
    }

    loadFishermen() {
        this.renderFishermenTable(this.data.fishermen);
    }

    renderFishermenTable(fishermen = this.data.fishermen) {
        const tableBody = document.getElementById('fishermenTableBody');
        if (!tableBody) return;
        
        tableBody.innerHTML = fishermen.map(fisherman => `
            <tr>
                <td>${fisherman.id}</td>
                <td>${fisherman.name}</td>
                <td>${fisherman.license}</td>
                <td>${fisherman.region}</td>
                <td>${fisherman.phone}</td>
                <td>${fisherman.vessel}</td>
                <td><span class="status-badge ${fisherman.status.toLowerCase()}">${fisherman.status}</span></td>
                <td>${fisherman.licenseExpiry}</td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-icon" onclick="app.editFisherman('${fisherman.id}')" title="Edit">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn-icon" onclick="app.viewFisherman('${fisherman.id}')" title="View">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    filterFishermen() {
        const search = document.getElementById('fishermenSearch')?.value.toLowerCase() || '';
        const region = document.getElementById('regionFilter')?.value || '';
        const status = document.getElementById('statusFilter')?.value || '';
        
        let filtered = this.data.fishermen.filter(fisherman => {
            const matchesSearch = fisherman.name.toLowerCase().includes(search) || 
                                fisherman.license.toLowerCase().includes(search);
            const matchesRegion = !region || fisherman.region === region;
            const matchesStatus = !status || fisherman.status === status;
            
            return matchesSearch && matchesRegion && matchesStatus;
        });
        
        this.renderFishermenTable(filtered);
    }

    loadVessels() {
        const tableBody = document.getElementById('vesselsTableBody');
        if (!tableBody) return;
        
        tableBody.innerHTML = this.data.vessels.map(vessel => `
            <tr>
                <td>${vessel.id}</td>
                <td>${vessel.name}</td>
                <td>${vessel.registration}</td>
                <td>${vessel.type}</td>
                <td>${vessel.capacity}</td>
                <td>${vessel.length}</td>
                <td>${vessel.owner}</td>
                <td><span class="status-badge ${vessel.gpsStatus.toLowerCase()}">${vessel.gpsStatus}</span></td>
                <td><span class="status-badge ${vessel.status.toLowerCase()}">${vessel.status}</span></td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-icon" onclick="app.editVessel('${vessel.id}')" title="Edit">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn-icon" onclick="app.trackVessel('${vessel.id}')" title="Track">
                            <i class="fas fa-map-marker-alt"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    loadCatches() {
        this.renderCatchesTable(this.data.catches);
    }

    renderCatchesTable(catches = this.data.catches) {
        const tableBody = document.getElementById('catchesTableBody');
        if (!tableBody) return;
        
        tableBody.innerHTML = catches.map(catchRecord => {
            const fisherman = this.data.fishermen.find(f => f.id === catchRecord.fishermanId);
            const vessel = this.data.vessels.find(v => v.id === catchRecord.vesselId);
            
            return `
                <tr>
                    <td>${catchRecord.id}</td>
                    <td>${catchRecord.date}</td>
                    <td>${catchRecord.time}</td>
                    <td>${fisherman ? fisherman.name : catchRecord.fishermanId}</td>
                    <td>${vessel ? vessel.name : catchRecord.vesselId}</td>
                    <td>${catchRecord.species}</td>
                    <td>${catchRecord.quantity}</td>
                    <td>${catchRecord.method}</td>
                    <td>${catchRecord.location.lat.toFixed(4)}, ${catchRecord.location.lng.toFixed(4)}</td>
                    <td>
                        <div class="action-buttons">
                            <button class="btn-icon" onclick="app.editCatch('${catchRecord.id}')" title="Edit">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="btn-icon" onclick="app.viewLocation('${catchRecord.id}')" title="View Location">
                                <i class="fas fa-map-marked-alt"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            `;
        }).join('');
    }

    filterCatches() {
        const dateFrom = document.getElementById('dateFromFilter')?.value || '';
        const dateTo = document.getElementById('dateToFilter')?.value || '';
        const species = document.getElementById('speciesFilter')?.value || '';
        const method = document.getElementById('methodFilter')?.value || '';
        
        let filtered = this.data.catches.filter(catchRecord => {
            const matchesDateFrom = !dateFrom || catchRecord.date >= dateFrom;
            const matchesDateTo = !dateTo || catchRecord.date <= dateTo;
            const matchesSpecies = !species || catchRecord.species === species;
            const matchesMethod = !method || catchRecord.method === method;
            
            return matchesDateFrom && matchesDateTo && matchesSpecies && matchesMethod;
        });
        
        this.renderCatchesTable(filtered);
    }

    loadAnalytics() {
        this.loadAnalyticsCharts();
    }

    loadAnalyticsCharts() {
        // Species distribution chart
        const speciesCtx = document.getElementById('speciesChart');
        if (speciesCtx && !this.charts.species) {
            const speciesData = this.getSpeciesDistribution();
            this.charts.species = new Chart(speciesCtx, {
                type: 'doughnut',
                data: {
                    labels: speciesData.labels,
                    datasets: [{
                        data: speciesData.data,
                        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545']
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'right'
                        }
                    }
                }
            });
        }

        // Method effectiveness chart
        const methodCtx = document.getElementById('methodChart');
        if (methodCtx && !this.charts.method) {
            const methodData = this.getMethodDistribution();
            this.charts.method = new Chart(methodCtx, {
                type: 'pie',
                data: {
                    labels: methodData.labels,
                    datasets: [{
                        data: methodData.data,
                        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#5D878F', '#DB4545']
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            });
        }

        // Performance by region chart
        const performanceCtx = document.getElementById('performanceChart');
        if (performanceCtx && !this.charts.performance) {
            this.charts.performance = new Chart(performanceCtx, {
                type: 'radar',
                data: {
                    labels: ['Catch Volume', 'Species Diversity', 'Compliance', 'Vessel Efficiency', 'Safety Record'],
                    datasets: [{
                        label: 'Northern Region',
                        data: [85, 78, 92, 88, 95],
                        borderColor: '#1FB8CD',
                        backgroundColor: 'rgba(31, 184, 205, 0.2)'
                    }, {
                        label: 'Southern Region',
                        data: [78, 85, 89, 82, 91],
                        borderColor: '#FFC185',
                        backgroundColor: 'rgba(255, 193, 133, 0.2)'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        r: {
                            beginAtZero: true,
                            max: 100
                        }
                    }
                }
            });
        }

        // Compliance rates chart
        const complianceCtx = document.getElementById('complianceChart');
        if (complianceCtx && !this.charts.compliance) {
            this.charts.compliance = new Chart(complianceCtx, {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                    datasets: [{
                        label: 'Compliance Rate (%)',
                        data: [92.1, 93.5, 91.8, 94.2, 95.1, 93.8, 94.5, 92.7, 93.9, 94.2],
                        backgroundColor: '#1FB8CD'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            ticks: {
                                callback: function(value) {
                                    return value + '%';
                                }
                            }
                        }
                    }
                }
            });
        }
    }

    getSpeciesDistribution() {
        const distribution = {};
        this.data.catches.forEach(catchRecord => {
            distribution[catchRecord.species] = (distribution[catchRecord.species] || 0) + catchRecord.quantity;
        });
        
        const sorted = Object.entries(distribution)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 6);
        
        return {
            labels: sorted.map(([species]) => species),
            data: sorted.map(([, quantity]) => quantity)
        };
    }

    getMethodDistribution() {
        const distribution = {};
        this.data.catches.forEach(catchRecord => {
            distribution[catchRecord.method] = (distribution[catchRecord.method] || 0) + catchRecord.quantity;
        });
        
        return {
            labels: Object.keys(distribution),
            data: Object.values(distribution)
        };
    }

    loadMapping() {
        this.initializeHeatMap();
        this.loadVesselTracking();
    }

    initializeHeatMap() {
        const canvas = document.getElementById('heatMapCanvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        
        // Clear canvas
        ctx.clearRect(0, 0, width, height);
        
        // Draw ocean background
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, '#4A90E2');
        gradient.addColorStop(1, '#1E3A5F');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        
        // Convert lat/lng to canvas coordinates
        const latRange = [6, 25]; // India's coastal range
        const lngRange = [68, 90];
        
        const toCanvasX = (lng) => ((lng - lngRange[0]) / (lngRange[1] - lngRange[0])) * width;
        const toCanvasY = (lat) => height - ((lat - latRange[0]) / (latRange[1] - latRange[0])) * height;
        
        // Draw restricted areas
        this.data.restrictedAreas.forEach(area => {
            ctx.beginPath();
            ctx.fillStyle = area.severity === 'High' ? 'rgba(220, 20, 60, 0.4)' : 'rgba(255, 99, 71, 0.3)';
            ctx.strokeStyle = area.severity === 'High' ? '#DC143C' : '#FF6347';
            ctx.lineWidth = 2;
            
            const coords = area.coordinates;
            ctx.moveTo(toCanvasX(coords[0].lng), toCanvasY(coords[0].lat));
            for (let i = 1; i < coords.length; i++) {
                ctx.lineTo(toCanvasX(coords[i].lng), toCanvasY(coords[i].lat));
            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        });
        
        // Draw fishing hotspots as heat circles
        this.data.fishingHotspots.forEach(hotspot => {
            const x = toCanvasX(hotspot.location.lng);
            const y = toCanvasY(hotspot.location.lat);
            const intensity = hotspot.activityLevel / 10;
            const radius = 20 + (intensity * 30);
            
            // Create radial gradient for heat effect
            const heatGradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
            if (hotspot.activityLevel >= 8) {
                heatGradient.addColorStop(0, 'rgba(255, 68, 68, 0.8)');
                heatGradient.addColorStop(1, 'rgba(255, 68, 68, 0)');
            } else if (hotspot.activityLevel >= 6) {
                heatGradient.addColorStop(0, 'rgba(255, 165, 0, 0.8)');
                heatGradient.addColorStop(1, 'rgba(255, 165, 0, 0)');
            } else {
                heatGradient.addColorStop(0, 'rgba(50, 205, 50, 0.8)');
                heatGradient.addColorStop(1, 'rgba(50, 205, 50, 0)');
            }
            
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, 2 * Math.PI);
            ctx.fillStyle = heatGradient;
            ctx.fill();
        });
        
        // Draw vessels
        this.data.vessels.forEach(vessel => {
            if (vessel.location) {
                const x = toCanvasX(vessel.location.lng);
                const y = toCanvasY(vessel.location.lat);
                
                ctx.beginPath();
                ctx.arc(x, y, 6, 0, 2 * Math.PI);
                ctx.fillStyle = vessel.gpsStatus === 'Online' ? '#32CD32' : '#FF4444';
                ctx.fill();
                ctx.strokeStyle = '#FFFFFF';
                ctx.lineWidth = 2;
                ctx.stroke();
            }
        });
        
        // Draw coast guard patrols
        this.data.coastGuardPatrols.forEach(patrol => {
            const x = toCanvasX(patrol.location.lng);
            const y = toCanvasY(patrol.location.lat);
            
            ctx.beginPath();
            ctx.arc(x, y, 8, 0, 2 * Math.PI);
            ctx.fillStyle = '#1FB8CD';
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 3;
            ctx.stroke();
        });
        
        // Draw SOS alerts
        this.data.sosIncidents.filter(incident => incident.status === 'Active').forEach(incident => {
            const x = toCanvasX(incident.location.lng);
            const y = toCanvasY(incident.location.lat);
            
            ctx.beginPath();
            ctx.arc(x, y, 10, 0, 2 * Math.PI);
            ctx.fillStyle = '#FF0000';
            ctx.fill();
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 2;
            ctx.stroke();
            
            // Add blinking effect for SOS
            ctx.shadowColor = '#FF0000';
            ctx.shadowBlur = 20;
            ctx.beginPath();
            ctx.arc(x, y, 15, 0, 2 * Math.PI);
            ctx.strokeStyle = '#FF0000';
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.shadowBlur = 0;
        });
        
        // Draw endangered species alert zones
        this.data.endangeredSpeciesCatches.forEach(incident => {
            const x = toCanvasX(incident.location.lng);
            const y = toCanvasY(incident.location.lat);
            
            ctx.beginPath();
            ctx.arc(x, y, 12, 0, 2 * Math.PI);
            ctx.fillStyle = '#FFD700';
            ctx.fill();
            ctx.strokeStyle = '#FF4500';
            ctx.lineWidth = 2;
            ctx.stroke();
        });
    }

    loadVesselTracking() {
        const vesselTrackingList = document.getElementById('vesselTrackingList');
        if (!vesselTrackingList) return;
        
        vesselTrackingList.innerHTML = this.data.vessels.map(vessel => {
            const fisherman = this.data.fishermen.find(f => f.id === vessel.owner);
            const statusClass = vessel.gpsStatus === 'Online' ? 'online' : 'offline';
            
            return `
                <div class="vessel-tracking-item">
                    <div class="vessel-status-indicator ${statusClass}"></div>
                    <div class="vessel-info">
                        <h4 class="vessel-name">${vessel.name}</h4>
                        <p class="vessel-details">
                            ${fisherman ? fisherman.name : vessel.owner} | ${vessel.type} | ${vessel.gpsStatus}
                        </p>
                        <p class="vessel-details">
                            ${vessel.location ? `${vessel.location.lat.toFixed(4)}, ${vessel.location.lng.toFixed(4)}` : 'Location unknown'}
                        </p>
                    </div>
                </div>
            `;
        }).join('');
    }

    zoomHeatMap(factor) {
        this.heatMapZoom *= factor;
        this.initializeHeatMap();
    }

    resetHeatMapZoom() {
        this.heatMapZoom = 1;
        this.heatMapPan = { x: 0, y: 0 };
        this.initializeHeatMap();
    }

    toggleMapLegend() {
        const legend = document.getElementById('mapLegend');
        if (legend) {
            legend.style.display = legend.style.display === 'none' ? 'block' : 'none';
        }
    }

    // SOS Management Functions
    dispatchCoastGuard() {
        this.showToast('Coast guard dispatch request sent successfully!', 'success');
    }

    dispatchRescue(sosId) {
        this.showToast(`Rescue team dispatched for incident ${sosId}`, 'success');
    }

    updateSosStatus(sosId, status) {
        const incident = this.data.sosIncidents.find(s => s.id === sosId);
        if (incident) {
            incident.status = status;
            this.loadSosAlerts();
            this.updateSosCount();
            this.showToast(`SOS incident ${sosId} marked as ${status}`, 'success');
        }
    }

    viewOnMap(sosId) {
        this.showSection('mapping');
        this.showToast('Viewing incident location on heat map', 'info');
    }

    // Conservation Functions
    viewIncidentDetails(incidentId) {
        this.showToast(`Viewing details for incident ${incidentId}`, 'info');
    }

    updateIncidentStatus(incidentId) {
        this.showToast(`Updating status for incident ${incidentId}`, 'info');
    }

    showReportEndangeredModal() {
        const content = `
            <form id="reportEndangeredForm">
                <div class="form-group">
                    <label class="form-label">Fisherman</label>
                    <select class="form-control" name="fishermanId" required>
                        ${this.data.fishermen.map(f => `<option value="${f.id}">${f.name} (${f.id})</option>`).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Endangered Species</label>
                    <select class="form-control" name="species" required>
                        ${this.data.endangeredSpecies.map(s => `<option value="${s}">${s}</option>`).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Location (Latitude)</label>
                    <input type="number" step="0.0001" class="form-control" name="lat" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Location (Longitude)</label>
                    <input type="number" step="0.0001" class="form-control" name="lng" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Action Taken</label>
                    <select class="form-control" name="action" required>
                        <option value="Released">Released Immediately</option>
                        <option value="Reported">Reported to Authorities</option>
                        <option value="Under Investigation">Under Investigation</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Severity</label>
                    <select class="form-control" name="severity" required>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Additional Notes</label>
                    <textarea class="form-control" name="notes" rows="3"></textarea>
                </div>
                <div class="d-flex gap-8 mt-16">
                    <button type="submit" class="btn btn--primary">Report Incident</button>
                    <button type="button" class="btn btn--outline" onclick="app.closeModal()">Cancel</button>
                </div>
            </form>
        `;
        
        this.showModal('Report Endangered Species Incident', content);
        
        document.getElementById('reportEndangeredForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.reportEndangeredSpecies(new FormData(e.target));
        });
    }

    reportEndangeredSpecies(formData) {
        const newId = `ESC${String(this.data.endangeredSpeciesCatches.length + 1).padStart(3, '0')}`;
        const incident = {
            id: newId,
            fishermanId: formData.get('fishermanId'),
            species: formData.get('species'),
            location: {
                lat: parseFloat(formData.get('lat')),
                lng: parseFloat(formData.get('lng'))
            },
            timestamp: new Date().toISOString(),
            action: formData.get('action'),
            status: 'Reported',
            severity: formData.get('severity'),
            notes: formData.get('notes')
        };
        
        this.data.endangeredSpeciesCatches.push(incident);
        this.closeModal();
        this.loadConservationSection();
        this.showToast('Endangered species incident reported successfully!', 'success');
    }

    // Modal Management
    showModal(title, content) {
        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalBody').innerHTML = content;
        document.getElementById('modal').classList.remove('hidden');
    }

    closeModal() {
        document.getElementById('modal').classList.add('hidden');
    }

    showAddFishermanModal() {
        const content = `
            <form id="addFishermanForm">
                <div class="form-group">
                    <label class="form-label">Name</label>
                    <input type="text" class="form-control" name="name" required>
                </div>
                <div class="form-group">
                    <label class="form-label">License Number</label>
                    <input type="text" class="form-control" name="license" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Region</label>
                    <select class="form-control" name="region" required>
                        ${this.data.regions.map(region => `<option value="${region}">${region}</option>`).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Phone</label>
                    <input type="tel" class="form-control" name="phone" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Address</label>
                    <textarea class="form-control" name="address" rows="3"></textarea>
                </div>
                <div class="form-group">
                    <label class="form-label">License Expiry</label>
                    <input type="date" class="form-control" name="licenseExpiry" required>
                </div>
                <div class="d-flex gap-8 mt-16">
                    <button type="submit" class="btn btn--primary">Add Fisherman</button>
                    <button type="button" class="btn btn--outline" onclick="app.closeModal()">Cancel</button>
                </div>
            </form>
        `;
        
        this.showModal('Add New Fisherman', content);
        
        document.getElementById('addFishermanForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addFisherman(new FormData(e.target));
        });
    }

    showAddVesselModal() {
        const content = `
            <form id="addVesselForm">
                <div class="form-group">
                    <label class="form-label">Vessel Name</label>
                    <input type="text" class="form-control" name="name" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Registration Number</label>
                    <input type="text" class="form-control" name="registration" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Type</label>
                    <select class="form-control" name="type" required>
                        <option value="Trawler">Trawler</option>
                        <option value="Gillnetter">Gillnetter</option>
                        <option value="Purse Seine">Purse Seine</option>
                        <option value="Longline">Longline</option>
                        <option value="Hook & Line">Hook & Line</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Capacity (kg)</label>
                    <input type="number" class="form-control" name="capacity" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Length (m)</label>
                    <input type="number" step="0.1" class="form-control" name="length" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Owner (Fisherman ID)</label>
                    <select class="form-control" name="owner" required>
                        ${this.data.fishermen.map(f => `<option value="${f.id}">${f.name} (${f.id})</option>`).join('')}
                    </select>
                </div>
                <div class="d-flex gap-8 mt-16">
                    <button type="submit" class="btn btn--primary">Add Vessel</button>
                    <button type="button" class="btn btn--outline" onclick="app.closeModal()">Cancel</button>
                </div>
            </form>
        `;
        
        this.showModal('Add New Vessel', content);
        
        document.getElementById('addVesselForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addVessel(new FormData(e.target));
        });
    }

    showAddCatchModal() {
        const content = `
            <form id="addCatchForm">
                <div class="form-group">
                    <label class="form-label">Fisherman</label>
                    <select class="form-control" name="fishermanId" required>
                        ${this.data.fishermen.map(f => `<option value="${f.id}">${f.name} (${f.id})</option>`).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Vessel</label>
                    <select class="form-control" name="vesselId" required>
                        ${this.data.vessels.map(v => `<option value="${v.id}">${v.name} (${v.id})</option>`).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Date</label>
                    <input type="date" class="form-control" name="date" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Time</label>
                    <input type="time" class="form-control" name="time" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Species</label>
                    <select class="form-control" name="species" required>
                        ${this.data.species.map(s => `<option value="${s}">${s}</option>`).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Quantity (kg)</label>
                    <input type="number" step="0.1" class="form-control" name="quantity" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Fishing Method</label>
                    <select class="form-control" name="method" required>
                        ${this.data.fishingMethods.map(m => `<option value="${m}">${m}</option>`).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Location (Latitude)</label>
                    <input type="number" step="0.0001" class="form-control" name="lat" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Location (Longitude)</label>
                    <input type="number" step="0.0001" class="form-control" name="lng" required>
                </div>
                <div class="d-flex gap-8 mt-16">
                    <button type="submit" class="btn btn--primary">Log Catch</button>
                    <button type="button" class="btn btn--outline" onclick="app.closeModal()">Cancel</button>
                </div>
            </form>
        `;
        
        this.showModal('Log New Catch', content);
        
        document.getElementById('addCatchForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addCatch(new FormData(e.target));
        });
    }

    addFisherman(formData) {
        const newId = `F${String(this.data.fishermen.length + 1).padStart(3, '0')}`;
        const fisherman = {
            id: newId,
            name: formData.get('name'),
            license: formData.get('license'),
            region: formData.get('region'),
            phone: formData.get('phone'),
            vessel: '',
            status: 'Active',
            licenseExpiry: formData.get('licenseExpiry'),
            address: formData.get('address')
        };
        
        this.data.fishermen.push(fisherman);
        this.closeModal();
        this.loadFishermen();
        this.showToast('Fisherman added successfully!', 'success');
    }

    addVessel(formData) {
        const newId = `V${String(this.data.vessels.length + 1).padStart(3, '0')}`;
        const vessel = {
            id: newId,
            name: formData.get('name'),
            registration: formData.get('registration'),
            type: formData.get('type'),
            capacity: parseInt(formData.get('capacity')),
            length: parseFloat(formData.get('length')),
            owner: formData.get('owner'),
            status: 'Active',
            gpsStatus: 'Online',
            location: { lat: 20.5937, lng: 78.9629 } // Default to center of India
        };
        
        this.data.vessels.push(vessel);
        
        // Update fisherman's vessel reference
        const fisherman = this.data.fishermen.find(f => f.id === vessel.owner);
        if (fisherman) {
            fisherman.vessel = newId;
        }
        
        this.closeModal();
        this.loadVessels();
        this.showToast('Vessel added successfully!', 'success');
    }

    addCatch(formData) {
        const newId = `C${String(this.data.catches.length + 1).padStart(3, '0')}`;
        const catchRecord = {
            id: newId,
            fishermanId: formData.get('fishermanId'),
            vesselId: formData.get('vesselId'),
            date: formData.get('date'),
            time: formData.get('time'),
            species: formData.get('species'),
            quantity: parseFloat(formData.get('quantity')),
            location: {
                lat: parseFloat(formData.get('lat')),
                lng: parseFloat(formData.get('lng'))
            },
            method: formData.get('method'),
            region: this.data.fishermen.find(f => f.id === formData.get('fishermanId'))?.region || 'Unknown'
        };
        
        this.data.catches.push(catchRecord);
        this.closeModal();
        this.loadCatches();
        this.showToast('Catch logged successfully!', 'success');
    }

    // Placeholder functions for edit/view actions
    editFisherman(id) {
        this.showToast('Edit fisherman functionality would be implemented here.', 'info');
    }

    viewFisherman(id) {
        this.showToast('View fisherman details functionality would be implemented here.', 'info');
    }

    editVessel(id) {
        this.showToast('Edit vessel functionality would be implemented here.', 'info');
    }

    trackVessel(id) {
        this.showSection('mapping');
        this.showToast('Viewing vessel location on heat map.', 'info');
    }

    editCatch(id) {
        this.showToast('Edit catch functionality would be implemented here.', 'info');
    }

    viewLocation(id) {
        this.showSection('mapping');
        this.showToast('Viewing catch location on heat map.', 'info');
    }

    // Toast Notifications
    showToast(message, type = 'info') {
        const toast = document.getElementById('toast');
        const icon = document.querySelector('.toast-icon');
        const messageEl = document.querySelector('.toast-message');
        
        // Set icon based on type
        const icons = {
            success: 'fas fa-check-circle',
            error: 'fas fa-exclamation-circle',
            warning: 'fas fa-exclamation-triangle',
            info: 'fas fa-info-circle'
        };
        
        icon.className = `toast-icon ${icons[type] || icons.info}`;
        messageEl.textContent = message;
        
        toast.className = `toast ${type}`;
        setTimeout(() => toast.classList.add('show'), 100);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.classList.add('hidden'), 300);
        }, 3000);
    }
}

// Initialize the application
const app = new FisheriesApp();