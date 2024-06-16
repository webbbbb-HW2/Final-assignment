//頁面滾動
document.addEventListener("DOMContentLoaded", function() {
    const sidebarLinks = document.querySelectorAll(".sidebar a");
    sidebarLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            const headerOffset = 80; // 偏移量，確保滾動後內容不被頂部遮擋
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });
});

//編輯個人資料
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('editLink').addEventListener('click', toggleEdit);
    document.getElementById('saveLink').addEventListener('click', saveChanges);
});

function toggleEdit() {
    document.getElementById('userNameDisplay').style.display = 'none';
    document.getElementById('userNameInput').style.display = 'block';
    document.getElementById('userEmailDisplay').style.display = 'none';
    document.getElementById('userEmailInput').style.display = 'block';
    document.getElementById('userPhoneDisplay').style.display = 'none';
    document.getElementById('userPhoneInput').style.display = 'block';
    document.getElementById('editLink').style.display = 'none';
    document.getElementById('saveLink').style.display = 'block';
}

function saveChanges() {
    document.getElementById('userNameDisplay').innerText = document.getElementById('userNameInput').value;
    document.getElementById('userEmailDisplay').innerText = document.getElementById('userEmailInput').value;
    document.getElementById('userPhoneDisplay').innerText = document.getElementById('userPhoneInput').value;

    document.getElementById('userNameDisplay').style.display = 'block';
    document.getElementById('userNameInput').style.display = 'none';
    document.getElementById('userEmailDisplay').style.display = 'block';
    document.getElementById('userEmailInput').style.display = 'none';
    document.getElementById('userPhoneDisplay').style.display = 'block';
    document.getElementById('userPhoneInput').style.display = 'none';
    document.getElementById('editLink').style.display = 'block';
    document.getElementById('saveLink').style.display = 'none';
}