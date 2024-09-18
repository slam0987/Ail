const correctPassword = "00778899"; // كلمة السر الصحيحة

function checkAccess() {
    const password = document.getElementById('password').value;
    if (password === correctPassword) {
        enableEditing(true);
        document.getElementById('accessSection').style.display = 'none'; // إخفاء قسم إدخال كلمة السر بعد التحقق
    } else {
        alert("كلمة السر غير صحيحة");
    }
}

function enableEditing(canEdit) {
    const cells = document.querySelectorAll('td');
    cells.forEach(cell => {
        cell.contentEditable = canEdit;
    });

    const saveButton = document.getElementById('saveButton');
    saveButton.style.display = canEdit ? 'inline-block' : 'none';
}

function saveSchedule() {
    const tableData = [];
    const rows = document.querySelectorAll('tbody tr');

    rows.forEach(row => {
        const rowData = [];
        const cells = row.querySelectorAll('td');
        cells.forEach(cell => {
            rowData.push(cell.innerText);
        });
        tableData.push(rowData);
    });

    localStorage.setItem('schedule', JSON.stringify(tableData));
    alert("تم حفظ الجدول بنجاح!");
}

function loadSchedule() {
    const savedSchedule = localStorage.getItem('schedule');
    if (savedSchedule) {
        const tableData = JSON.parse(savedSchedule);
        const rows = document.querySelectorAll('tbody tr');
        rows.forEach((row, rowIndex) => {
            const cells = row.querySelectorAll('td');
            cells.forEach((cell, cellIndex) => {
                cell.innerText = tableData[rowIndex][cellIndex];
            });
        });
    }
}

window.onload = function() {
    loadSchedule();
    enableEditing(false); // بشكل افتراضي يكون الجدول غير قابل للتعديل
}
