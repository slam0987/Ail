// يمكنك استخدام JavaScript لتحديث أو تخصيص الجدول لاحقًا.
// على سبيل المثال، يمكنك إضافة وظيفة لتحرير الجدول:
document.querySelectorAll('td').forEach(cell => {
    cell.addEventListener('click', function() {
        let newText = prompt('أدخل المادة الجديدة:', this.textContent);
        if (newText) {
            this.textContent = newText;
        }
    });
});

