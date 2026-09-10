// STATE MANAGEMENT
const DEFAULT_STATE = {
    racks: [
        {
            id: "rack-1",
            name: "Кромка",
            rows: 3, // A - C
            cols: 34,
            cells: {
                "A-1": { name: "Белый Премиум", size: "19*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "A-2": { name: "Белый Премиум", size: "23*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "A-3": { name: "Дуб Сорано", size: "19*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "A-4": { name: "Дуб Сорано", size: "23*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "A-5": { name: "Оникс серый", size: "19*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "A-6": { name: "Оникс серый", size: "23*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "A-7": { name: "Светло серый", size: "19*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "A-8": { name: "Светло серый", size: "23*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "A-9": { name: "Кашемир серый", size: "19*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "A-10": { name: "Кашемир серый", size: "23*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "A-11": { name: "Текстиль бежевый", size: "19*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "A-12": { name: "Текстиль бежевый", size: "23*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "A-13": { name: "Лён антрацит", size: "19*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "A-14": { name: "Лён антрацит", size: "23*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "A-15": { name: "Дуб Тонсбег коричневый", size: "19*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "A-16": { name: "Дуб Тонсбег коричневый", size: "23*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "A-17": { name: "Ярко-серый", size: "19*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "A-18": { name: "Ярко-серый", size: "23*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "A-19": { name: "Серая Галька", size: "19*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "A-20": { name: "Серая Галька", size: "23*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "A-21": { name: "Серый Камень", size: "19*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "A-22": { name: "Серый Камень", size: "23*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "A-23": { name: "Диамант серый", size: "19*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "A-24": { name: "Диамант серый", size: "23*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "A-25": { name: "Серо-коричневый тёмный", size: "19*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "A-26": { name: "Серо-коричневый тёмный", size: "23*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "A-27": { name: "Дуб Каселла натуральный", size: "19*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "A-28": { name: "Дуб Каселла натуральный", size: "23*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "A-29": { name: "Дуб Каселла коричневый", size: "19*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "A-30": { name: "Дуб Каселла коричневый", size: "23*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "A-31": { name: "Дуб Винченца беленый", size: "19*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "A-32": { name: "Дуб Винченца беленый", size: "23*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "A-33": { name: "Нежный чёрный", size: "19*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "A-34": { name: "Нежный чёрный", size: "23*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },

                "B-1": { name: "Белый Апельсин", size: "19*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "B-2": { name: "Белый Апельсин", size: "35*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "B-3": { name: "Ясень Прибрежный Светлый", size: "19*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                // B-4 is empty
                "B-5": { name: "Серый Графит", size: "19*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "B-6": { name: "Серый Графит", size: "35*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "B-7": { name: "Серый Апельсин", size: "19*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "B-8": { name: "Серый Апельсин", size: "35*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "B-9": { name: "Кашемир", size: "19*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "B-10": { name: "Кашемир", size: "35*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "B-11": { name: "Крослайн Латте", size: "19*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "B-12": { name: "Крослайн Латте", size: "35*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "B-13": { name: "Серый Шифер", size: "19*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "B-14": { name: "Серый Шифер", size: "35*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "B-15": { name: "Орех Франклин табачный", size: "19*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "B-16": { name: "Орех Франклин табачный", size: "35*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "B-17": { name: "Кашемир", size: "19*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "B-18": { name: "Кашемир", size: "35*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "B-19": { name: "Кашемир", size: "19*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "B-20": { name: "Кашемир", size: "35*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "B-21": { name: "Камелло супермат", size: "19*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "B-22": { name: "Камелло супермат", size: "21*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "B-23": { name: "Антрацит", size: "19*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "B-24": { name: "Антрацит", size: "35*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "B-25": { name: "Стоун ГрейСупер мат", size: "21*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                // B-26 is empty
                "B-27": { name: "Дуб Харбор Золотой", size: "19*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "B-28": { name: "Дуб Харбор Золотой", size: "35*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "B-29": { name: "Орех Франклин табачный", size: "19*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "B-30": { name: "Орех Франклин табачный", size: "35*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "B-31": { name: "Клен светлый", size: "19*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "B-32": { name: "Клен светлый", size: "19*1.0", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "B-33": { name: "Черный Апельсин", size: "19*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" },
                "B-34": { name: "Черный Апельсин", size: "35*0.8", code: "", qty: 5, unit: "Рулон", min: 1, notes: "" }
            }
        }
    ],
    history: [],
    currentRackId: null
};

// Force clear dummy data once
if (!localStorage.getItem('kromka_data_cleared_v4')) {
    localStorage.removeItem('kromka_rack_state');
    localStorage.setItem('kromka_data_cleared_v4', 'true');
}

let state = JSON.parse(localStorage.getItem('kromka_rack_state'));

// HELPER: Save state to LocalStorage
function saveState() {
    localStorage.setItem('kromka_rack_state', JSON.stringify(state));
}

if (!state) {
    state = DEFAULT_STATE;
    saveState();
}

// DOM ELEMENTS
const screenDashboard = document.getElementById('screen-dashboard');
const screenRackDetail = document.getElementById('screen-rack-detail');
const appTitle = document.getElementById('app-title');
const btnBack = document.getElementById('btn-back');
const btnAddRackHeader = document.getElementById('btn-add-rack-header');
const btnBackupMenu = document.getElementById('btn-backup-menu');
const btnShowHistory = document.getElementById('btn-show-history');
const searchContainer = document.getElementById('search-container');
const inputSearch = document.getElementById('input-search');
const btnClearSearch = document.getElementById('btn-clear-search');

// Stat Elements (Dashboard)
const globalStatTotal = document.getElementById('global-stat-total');
const globalStatFilled = document.getElementById('global-stat-filled');
const globalStatLow = document.getElementById('global-stat-low');
const globalStatEmpty = document.getElementById('global-stat-empty');
const racksList = document.getElementById('racks-list');
const btnAddRackCard = document.getElementById('btn-add-rack-card');

// Stat Elements (Rack View)
const rackStatTotal = document.getElementById('rack-stat-total');
const rackStatFilled = document.getElementById('rack-stat-filled');
const rackStatLow = document.getElementById('rack-stat-low');
const rackStatEmpty = document.getElementById('rack-stat-empty');
const rackGrid = document.getElementById('rack-grid');
const btnEditRack = document.getElementById('btn-edit-rack');

// Modals
const modalCell = document.getElementById('modal-cell');
const modalRack = document.getElementById('modal-rack');
const modalHistory = document.getElementById('modal-history');
const modalBackup = document.getElementById('modal-backup');

// Cell Form
const formCellData = document.getElementById('form-cell-data');
const cellModalTitle = document.getElementById('cell-modal-title');
const cellInputName = document.getElementById('cell-input-name');
const cellInputSize = document.getElementById('cell-input-size');
const cellInputCode = document.getElementById('cell-input-code');
const cellInputQty = document.getElementById('cell-input-qty');
const cellInputMin = document.getElementById('cell-input-min');
const cellNotes = document.getElementById('cell-input-notes');
const qtyUnitDisplay = document.getElementById('qty-unit-display');
const quickAdjustmentSection = document.getElementById('quick-adjustment-section');
const btnDeleteCellContent = document.getElementById('btn-delete-cell-content');

// Rack Form
const formRackData = document.getElementById('form-rack-data');
const rackModalTitle = document.getElementById('rack-modal-title');
const rackInputName = document.getElementById('rack-input-name');
const rackInputRows = document.getElementById('rack-input-rows');
const rackInputCols = document.getElementById('rack-input-cols');
const deleteRackWarning = document.getElementById('delete-rack-warning');
const btnDeleteRackConfirm = document.getElementById('btn-delete-rack-confirm');

// History Table
const historyLogBody = document.getElementById('history-log-body');
const btnClearHistory = document.getElementById('btn-clear-history');

// Backup Buttons
const btnExportData = document.getElementById('btn-export-data');
const inputImportFile = document.getElementById('input-import-file');

// Active cell context variables
let activeCellId = null;

// NAVIGATION FUNCTIONS
function navigateToDashboard() {
    state.currentRackId = null;
    saveState();
    
    // UI Visibility
    screenDashboard.classList.add('active');
    screenRackDetail.classList.remove('active');
    btnBack.classList.add('hidden');
    btnAddRackHeader.classList.remove('hidden');
    searchContainer.classList.add('hidden');
    appTitle.textContent = "Стеллажлар Назорати";
    
    // Clear search
    inputSearch.value = '';
    btnClearSearch.classList.add('hidden');
    
    renderDashboard();
}

function navigateToRack(rackId) {
    state.currentRackId = rackId;
    saveState();
    
    const rack = state.racks.find(r => r.id === rackId);
    if (!rack) return navigateToDashboard();
    
    // UI Visibility
    screenDashboard.classList.remove('active');
    screenRackDetail.classList.add('active');
    btnBack.classList.remove('hidden');
    btnAddRackHeader.classList.add('hidden');
    searchContainer.classList.remove('hidden');
    appTitle.textContent = `/ ${rack.name}`;
    
    renderRackDetail();
}

// RENDER: DASHBOARD
function renderDashboard() {
    let totalCells = 0;
    let filledCells = 0;
    let lowStockCells = 0;
    
    // Clear dynamic cards
    const cards = racksList.querySelectorAll('.rack-card');
    cards.forEach(card => card.remove());
    
    state.racks.forEach(rack => {
        const rackTotal = rack.rows * rack.cols;
        let rackFilled = 0;
        let rackLow = 0;
        
        Object.keys(rack.cells).forEach(cellKey => {
            const cell = rack.cells[cellKey];
            rackFilled++;
            if (cell.qty <= (cell.min || 0)) {
                rackLow++;
            }
        });
        
        const rackEmpty = rackTotal - rackFilled;
        
        totalCells += rackTotal;
        filledCells += rackFilled;
        lowStockCells += rackLow;
        
        // Create rack card
        const rackCard = document.createElement('div');
        rackCard.className = 'rack-card';
        rackCard.innerHTML = `
            <div class="rack-card-header">
                <h4>${rack.name}</h4>
                <span class="rack-card-size">${rack.rows} × ${rack.cols}</span>
            </div>
            <div class="rack-card-stats">
                <div class="rack-mini-stat">
                    <span class="val green">${rackTotal - rackEmpty - rackLow}</span>
                    <span class="lbl">Етарли</span>
                </div>
                <div class="rack-mini-stat">
                    <span class="val orange">${rackLow}</span>
                    <span class="lbl">Кам қолди</span>
                </div>
                <div class="rack-mini-stat">
                    <span class="val gray">${rackEmpty}</span>
                    <span class="lbl">Bo'sh</span>
                </div>
            </div>
        `;
        rackCard.addEventListener('click', () => navigateToRack(rack.id));
        racksList.insertBefore(rackCard, btnAddRackCard);
    });
    
    globalStatTotal.textContent = totalCells;
    globalStatFilled.textContent = filledCells;
    globalStatLow.textContent = lowStockCells;
    globalStatEmpty.textContent = totalCells - filledCells;
    
    // Lucide icons reload
    lucide.createIcons();
}

// RENDER: RACK GRID
function renderRackDetail() {
    const rack = state.racks.find(r => r.id === state.currentRackId);
    if (!rack) return navigateToDashboard();
    
    const rackTotal = rack.rows * rack.cols;
    let rackFilled = 0;
    let rackLow = 0;
    
    // Calculate stats
    Object.keys(rack.cells).forEach(cellKey => {
        const cell = rack.cells[cellKey];
        rackFilled++;
        if (cell.qty <= (cell.min || 0)) {
            rackLow++;
        }
    });
    
    const rackEmpty = rackTotal - rackFilled;
    
    rackStatTotal.textContent = rackTotal;
    rackStatFilled.textContent = rackFilled;
    rackStatLow.textContent = rackLow;
    rackStatEmpty.textContent = rackEmpty;
    
    // Generate Grid Table
    rackGrid.innerHTML = '';
    
    // 1. Column Headers (top row)
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    
    // Top-left blank cell
    const emptyCorner = document.createElement('th');
    headerRow.appendChild(emptyCorner);
    
    for (let c = 1; c <= rack.cols; c++) {
        const colTh = document.createElement('th');
        const colDiv = document.createElement('div');
        colDiv.className = 'col-header';
        colDiv.textContent = `${c}-ustun`;
        colTh.appendChild(colDiv);
        headerRow.appendChild(colTh);
    }
    thead.appendChild(headerRow);
    rackGrid.appendChild(thead);
    
    // 2. Rows
    const tbody = document.createElement('tbody');
    for (let r = 0; r < rack.rows; r++) {
        const rowLabel = String.fromCharCode(65 + r); // A, B, C...
        const rowTr = document.createElement('tr');
        
        // Left Row Header
        const rowTh = document.createElement('th');
        const rowDiv = document.createElement('div');
        rowDiv.className = 'row-header';
        rowDiv.textContent = rowLabel;
        rowTh.appendChild(rowDiv);
        rowTr.appendChild(rowTh);
        
        // Cells
        for (let c = 1; c <= rack.cols; c++) {
            const cellId = `${rowLabel}-${c}`;
            const cellData = rack.cells[cellId];
            const td = document.createElement('td');
            
            const cellDiv = document.createElement('div');
            cellDiv.dataset.cellId = cellId;
            
            if (!cellData) {
                cellDiv.className = 'grid-cell empty';
                cellDiv.innerHTML = `<span class="empty-text">Bo'sh</span>`;
            } else {
                const isLow = cellData.qty <= (cellData.min || 0);
                cellDiv.className = `grid-cell filled ${isLow ? 'status-low' : 'status-sufficient'}`;
                
                cellDiv.innerHTML = `
                    <div class="cell-header">
                        <span>${rowLabel} - ${c}</span>
                        ${cellData.code ? `<span class="cell-code">${cellData.code}</span>` : ''}
                    </div>
                    <div class="cell-body">
                        <span class="cell-name" title="${cellData.name}">${cellData.name} ${cellData.size}</span>
                        <span class="cell-qty">${cellData.qty} ${cellData.unit}</span>
                    </div>
                `;
            }
            
            cellDiv.addEventListener('click', () => openCellModal(cellId));
            td.appendChild(cellDiv);
            rowTr.appendChild(td);
        }
        tbody.appendChild(rowTr);
    }
    rackGrid.appendChild(tbody);
    
    // Run search if search field already has content
    if (inputSearch.value.trim() !== '') {
        performSearch(inputSearch.value.trim());
    }
}

// MODAL CONTROLS
function showModal(modal) {
    modal.classList.add('active');
}

function hideModal(modal) {
    modal.classList.remove('active');
}

// CELL MODAL LOGIC
function openCellModal(cellId) {
    activeCellId = cellId;
    const rack = state.racks.find(r => r.id === state.currentRackId);
    const cellData = rack.cells[cellId];
    
    cellModalTitle.textContent = `Ячейка: ${cellId.replace('-', ' - ')}`;
    
    if (cellData) {
        // Edit mode
        cellInputName.value = cellData.name;
        cellInputSize.value = cellData.size;
        cellInputCode.value = cellData.code || '';
        cellInputQty.value = cellData.qty;
        cellInputMin.value = cellData.min || 0;
        cellNotes.value = cellData.notes || '';
        
        // Set unit radio
        const radio = formCellData.querySelector(`input[name="cell-unit"][value="${cellData.unit}"]`);
        if (radio) radio.checked = true;
        qtyUnitDisplay.textContent = cellData.unit;
        
        quickAdjustmentSection.classList.remove('hidden');
        btnDeleteCellContent.classList.remove('hidden');
    } else {
        // Create mode
        formCellData.reset();
        cellInputQty.value = 5;
        cellInputMin.value = 1;
        qtyUnitDisplay.textContent = "Рулон";
        
        quickAdjustmentSection.classList.add('hidden');
        btnDeleteCellContent.classList.add('hidden');
    }
    
    showModal(modalCell);
}

// CELL ADJUSTMENTS
document.querySelectorAll('.btn-adjust').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const val = parseFloat(e.target.dataset.val);
        let currentVal = parseFloat(cellInputQty.value) || 0;
        cellInputQty.value = Math.max(0, currentVal + val);
    });
});

// Watch radio button for unit updates in UI
formCellData.querySelectorAll('input[name="cell-unit"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        qtyUnitDisplay.textContent = e.target.value;
        const labels = formCellData.querySelectorAll('.qty-unit-label');
        labels.forEach(lbl => lbl.textContent = e.target.value);
    });
});

// SAVE CELL FORM
formCellData.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const rack = state.racks.find(r => r.id === state.currentRackId);
    if (!rack || !activeCellId) return;
    
    const name = cellInputName.value.trim();
    const size = cellInputSize.value.trim();
    const code = cellInputCode.value.trim();
    const qty = parseFloat(cellInputQty.value) || 0;
    const min = parseFloat(cellInputMin.value) || 0;
    const unit = formCellData.querySelector('input[name="cell-unit"]:checked').value;
    const notes = cellNotes.value.trim();
    
    const oldData = rack.cells[activeCellId];
    let actionType = oldData ? "edit" : "add";
    let changeText = "";
    
    if (actionType === "add") {
        changeText = `+${qty} ${unit}`;
    } else {
        const diff = qty - oldData.qty;
        if (diff > 0) {
            changeText = `+${diff.toFixed(1).replace('.0', '')} ${unit}`;
            actionType = "add";
        } else if (diff < 0) {
            changeText = `${diff.toFixed(1).replace('.0', '')} ${unit}`;
            actionType = "use";
        } else {
            changeText = "Таҳрирланди";
        }
    }
    
    // Save to State
    rack.cells[activeCellId] = { name, size, code, qty, min, unit, notes };
    
    // Add History Item
    state.history.unshift({
        time: new Date().toISOString(),
        rackName: rack.name,
        cellId: activeCellId,
        name: name,
        action: actionType,
        change: changeText,
        qty: qty
    });
    
    saveState();
    hideModal(modalCell);
    renderRackDetail();
});

// DELETE CELL CONTENT
btnDeleteCellContent.addEventListener('click', () => {
    const rack = state.racks.find(r => r.id === state.currentRackId);
    if (!rack || !activeCellId) return;
    
    const cellData = rack.cells[activeCellId];
    if (!cellData) return;
    
    if (confirm(`Ячейкадаги барча кромкаларни тозалашни хоҳлайсизми?`)) {
        // Add history item
        state.history.unshift({
            time: new Date().toISOString(),
            rackName: rack.name,
            cellId: activeCellId,
            name: cellData.name,
            action: "clear",
            change: "Тозаланди",
            qty: 0
        });
        
        delete rack.cells[activeCellId];
        saveState();
        hideModal(modalCell);
        renderRackDetail();
    }
});

// RACK CREATION / EDIT DIALOG
function openAddRackModal() {
    formRackData.reset();
    rackModalTitle.textContent = "Янги Стеллаж Яратиш";
    deleteRackWarning.classList.add('hidden');
    btnDeleteRackConfirm.classList.add('hidden');
    
    showModal(modalRack);
}

function openEditRackModal() {
    const rack = state.racks.find(r => r.id === state.currentRackId);
    if (!rack) return;
    
    rackModalTitle.textContent = "Стеллажни Таҳрирлаш";
    rackInputName.value = rack.name;
    rackInputRows.value = rack.rows;
    rackInputCols.value = rack.cols;
    
    deleteRackWarning.classList.remove('hidden');
    btnDeleteRackConfirm.classList.remove('hidden');
    
    showModal(modalRack);
}

// SAVE / UPDATE RACK
formRackData.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = rackInputName.value.trim();
    const rows = parseInt(rackInputRows.value);
    const cols = parseInt(rackInputCols.value);
    
    const isEdit = btnDeleteRackConfirm.classList.contains('hidden') === false;
    
    if (isEdit) {
        const rack = state.racks.find(r => r.id === state.currentRackId);
        if (rack) {
            rack.name = name;
            rack.rows = rows;
            rack.cols = cols;
            
            // Clean up any cells that now fall outside the new bounds
            Object.keys(rack.cells).forEach(cellKey => {
                const parts = cellKey.split('-');
                const rowVal = parts[0].charCodeAt(0) - 65;
                const colVal = parseInt(parts[1]);
                if (rowVal >= rows || colVal > cols) {
                    delete rack.cells[cellKey];
                }
            });
            
            saveState();
            hideModal(modalRack);
            navigateToRack(rack.id);
        }
    } else {
        // Create new rack
        const newRack = {
            id: 'rack-' + Date.now(),
            name: name,
            rows: rows,
            cols: cols,
            cells: {}
        };
        state.racks.push(newRack);
        saveState();
        hideModal(modalRack);
        navigateToRack(newRack.id);
    }
});

// DELETE RACK
btnDeleteRackConfirm.addEventListener('click', () => {
    const rack = state.racks.find(r => r.id === state.currentRackId);
    if (!rack) return;
    
    if (confirm(`Ростдан ҳам "${rack.name}" стеллажини ўчиришни хоҳлайсизми? Бутун кромкалар ўчиб кетади!`)) {
        state.racks = state.racks.filter(r => r.id !== rack.id);
        saveState();
        hideModal(modalRack);
        navigateToDashboard();
    }
});

// HISTORIC LOG DIALOG
function openHistoryModal() {
    historyLogBody.innerHTML = '';
    
    if (state.history.length === 0) {
        historyLogBody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-secondary);">Тарих ҳали бўш</td></tr>`;
    } else {
        state.history.forEach(log => {
            const date = new Date(log.time);
            const timeStr = `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}.${date.getFullYear()} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
            
            let badgeClass = "add";
            let actionName = "Қўшилди";
            let changeClass = "positive";
            
            if (log.action === "use") {
                badgeClass = "use";
                actionName = "Ишлатилди";
                changeClass = "negative";
            } else if (log.action === "clear") {
                badgeClass = "clear";
                actionName = "Тозаланди";
                changeClass = "negative";
            } else if (log.action === "edit") {
                badgeClass = "edit";
                actionName = "Ўзгартирилди";
                changeClass = "";
            }
            
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="history-time">${timeStr}</td>
                <td><span class="history-cell-ref">${log.rackName} / ${log.cellId}</span></td>
                <td><strong>${log.name}</strong></td>
                <td><span class="history-action-badge ${badgeClass}">${actionName}</span></td>
                <td class="history-change ${changeClass}">${log.change}</td>
                <td>${log.qty !== 0 ? log.qty : '-'}</td>
            `;
            historyLogBody.appendChild(tr);
        });
    }
    
    showModal(modalHistory);
}

// CLEAR HISTORY
btnClearHistory.addEventListener('click', () => {
    if (confirm(`Барча амаллар тарихини тозалашни хоҳлайсизми?`)) {
        state.history = [];
        saveState();
        openHistoryModal();
    }
});

// BACKUP: IMPORT/EXPORT
btnExportData.addEventListener('click', async () => {
    const date = new Date();
    const dateStr = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
    const fileName = `kromka_rack_backup_${dateStr}.json`;
    const jsonText = JSON.stringify(state, null, 2);
    const blob = new Blob([jsonText], { type: 'application/json' });

    // 1-usul: telefonning "Ulashish" oynasi (Android/iOS ilova ichida eng ishonchli)
    try {
        const file = new File([blob], fileName, { type: 'application/json' });
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({ files: [file], title: fileName });
            return;
        }
    } catch (err) {
        if (err && err.name === 'AbortError') return; // foydalanuvchi bekor qildi
        console.warn('Ulashish ishlamadi, yuklab olishga o\'tilmoqda:', err);
    }

    // 2-usul: oddiy yuklab olish (kompyuter brauzeri)
    try {
        const url = URL.createObjectURL(blob);
        const downloadAnchor = document.createElement('a');
        downloadAnchor.href = url;
        downloadAnchor.download = fileName;
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
        setTimeout(() => URL.revokeObjectURL(url), 5000);
    } catch (err) {
        console.error('Захира нусха сақланмади:', err);
        alert('Файлни сақлаб бўлмади. Илова созламаларида хотирага рухсат берилганини текширинг.');
    }
});

inputImportFile.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            const importedState = JSON.parse(event.target.result);
            
            // Basic validation
            if (importedState && Array.isArray(importedState.racks) && Array.isArray(importedState.history)) {
                state = importedState;
                saveState();
                alert(`Маълумотлар муваффақиятли тикланди!`);
                hideModal(modalBackup);
                
                // Re-render
                if (state.currentRackId) {
                    navigateToRack(state.currentRackId);
                } else {
                    navigateToDashboard();
                }
            } else {
                alert(`Файл формати нотўғри! Мувофиқ JSON файлини юкланг.`);
            }
        } catch (err) {
            alert(`Хатолик: Файлни ўқиб бўлмади.`);
        }
    };
    reader.readAsText(file);
});

// SEARCH LOGIC
function performSearch(query) {
    query = query.toLowerCase().trim();
    
    const cells = rackGrid.querySelectorAll('.grid-cell');
    
    if (query === '') {
        cells.forEach(c => {
            c.classList.remove('highlight-match', 'dimmed');
        });
        btnClearSearch.classList.add('hidden');
        return;
    }
    
    btnClearSearch.classList.remove('hidden');
    let matchCount = 0;
    
    cells.forEach(c => {
        const cellId = c.dataset.cellId;
        const rack = state.racks.find(r => r.id === state.currentRackId);
        const cellData = rack ? rack.cells[cellId] : null;
        
        if (cellData) {
            const matchName = cellData.name.toLowerCase().includes(query);
            const matchSize = cellData.size.toLowerCase().includes(query);
            const matchCode = cellData.code ? cellData.code.toLowerCase().includes(query) : false;
            
            if (matchName || matchSize || matchCode || cellId.toLowerCase().includes(query)) {
                c.classList.add('highlight-match');
                c.classList.remove('dimmed');
                matchCount++;
            } else {
                c.classList.remove('highlight-match');
                c.classList.add('dimmed');
            }
        } else {
            // Empty cells are dimmed when search is active
            c.classList.remove('highlight-match');
            c.classList.add('dimmed');
        }
    });
}

// EVENT LISTENERS
btnBack.addEventListener('click', navigateToDashboard);
btnAddRackHeader.addEventListener('click', openAddRackModal);
btnAddRackCard.addEventListener('click', openAddRackModal);
btnEditRack.addEventListener('click', openEditRackModal);
btnShowHistory.addEventListener('click', openHistoryModal);

btnBackupMenu.onclick = () => showModal(modalBackup);

inputSearch.addEventListener('input', (e) => {
    performSearch(e.target.value);
});

btnClearSearch.addEventListener('click', () => {
    inputSearch.value = '';
    performSearch('');
});

// Close Modals
document.querySelectorAll('.btn-close-modal').forEach(btn => {
    btn.addEventListener('click', () => {
        hideModal(modalCell);
        hideModal(modalRack);
        hideModal(modalHistory);
        hideModal(modalBackup);
    });
});

// Global escape key to close modals
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hideModal(modalCell);
        hideModal(modalRack);
        hideModal(modalHistory);
        hideModal(modalBackup);
    }
});

// Close modal when clicking outside content area
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            hideModal(overlay);
        }
    });
});

// INITIALIZE APP
function init() {
    // Navigate initially
    if (state.currentRackId) {
        navigateToRack(state.currentRackId);
    } else {
        navigateToDashboard();
    }
    
    // Lucide Icons activation
    lucide.createIcons();
}

window.onload = init;
