let interests = Array.from(document.querySelectorAll('.interests_active'));

for(i of interests) {
    
    let parentCheckBox = i.parentElement.querySelector('.interest__check');
    let childCheckBox = Array.from(i.closest('.interests').querySelectorAll('.interest__check'));

    parentCheckBox.addEventListener('change', () => {
        for (i of childCheckBox) {
            if (parentCheckBox.checked) {
                i.checked = true;
            }
            else (i.checked = false)
        }
    })
}