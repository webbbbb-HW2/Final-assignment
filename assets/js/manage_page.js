//借用核准
function approveRequest(button) {
    var row = button.parentElement.parentElement;
    row.parentElement.removeChild(row);
    alert('借用請求已核准');
}

function rejectRequest(button) {
    var row = button.parentElement.parentElement;
    row.parentElement.removeChild(row);
    alert('借用請求已拒絕');
}

//折線圖
document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: [
                "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"
            ],
            datasets: [
                {
                    label: "總借用次數",
                    data: [3, 2, 3, 5, 4, 6, 7, 5, 6, 4, 3, 2],
                    borderColor: "rgba(75, 192, 192, 1)",
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    borderWidth: 1,
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true,
                },
                y: {
                    beginAtZero: true,
                }
            }
        }
    });
});

//用戶資料
const users = [
    {
        name: "李一",
        email: "xiaoming@example.com",
        phone: "0987654321",
        role: "一般用戶",
        address: "台北市中正區仁愛路一段1號",
        city: "台北市",
        postalCode: "100",
        company: "範例公司",
        position: "軟件工程師",
        department: "技術部",
        birthday: "1990-01-01",
        registrationDate: "2021-06-15",
        status: "啟用"
    },
    {
        name: "王五",
        email: "xiaohong@example.com",
        phone: "0987654322",
        role: "管理員",
        address: "高雄市前鎮區中山一路2號",
        city: "高雄市",
        postalCode: "806",
        company: "另一家範例公司",
        position: "專案經理",
        department: "管理部",
        birthday: "1985-05-05",
        registrationDate: "2020-01-10",
        status: "啟用"
    },
    {
        name: "張三",
        email: "daming@example.com",
        phone: "0987654323",
        role: "一般用戶",
        address: "新北市板橋區中山路二段3號",
        city: "新北市",
        postalCode: "220",
        company: "第三範例公司",
        position: "行政助理",
        department: "行政部",
        birthday: "1995-12-12",
        registrationDate: "2019-08-25",
        status: "啟用"
    },
    {
        name: "李四",
        email: "xiaobai@example.com",
        phone: "0987654324",
        role: "一般用戶",
        address: "桃園市中壢區中正路四段4號",
        city: "桃園市",
        postalCode: "320",
        company: "第四範例公司",
        position: "資料分析師",
        department: "資訊部",
        birthday: "1998-07-07",
        registrationDate: "2021-01-15",
        status: "啟用"
    },
    {
        name: "陳六",
        email: "xiaohei@example.com",
        phone: "0987654325",
        role: "一般用戶",
        address: "台中市西屯區中港路五段5號",
        city: "台中市",
        postalCode: "407",
        company: "第五範例公司",
        position: "客戶經理",
        department: "客戶部",
        birthday: "1992-10-10",
        registrationDate: "2021-02-10",
        status: "啟用"
    }
];

function generateUserCards(users) {
    const userAccordion = document.getElementById('userAccordion');
    users.forEach((user, index) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardHeader = document.createElement('div');
        cardHeader.classList.add('card-header');
        cardHeader.id = `heading${index}`;

        const h2 = document.createElement('h2');
        h2.classList.add('mb-0');

        const button = document.createElement('button');
        button.classList.add('btn', 'btn-link', 'btn-block', 'text-left', 'collapsed');
        button.type = 'button';
        button.setAttribute('data-toggle', 'collapse');
        button.setAttribute('data-target', `#collapse${index}`);
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-controls', `collapse${index}`);
        button.innerText = user.name;

        h2.appendChild(button);
        cardHeader.appendChild(h2);
        card.appendChild(cardHeader);

        const collapseDiv = document.createElement('div');
        collapseDiv.id = `collapse${index}`;
        collapseDiv.classList.add('collapse');
        collapseDiv.setAttribute('aria-labelledby', `heading${index}`);
        collapseDiv.setAttribute('data-parent', '#userAccordion');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const row1 = document.createElement('div');
        row1.classList.add('row', 'mb-3');

        const col1 = document.createElement('div');
        col1.classList.add('col-md-6');
        col1.innerHTML = `
            <h5 class="card-title">基本資訊</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>姓名:</strong> ${user.name}</li>
                <li class="list-group-item"><strong>電子郵件:</strong> ${user.email}</li>
                <li class="list-group-item"><strong>電話:</strong> ${user.phone}</li>
                <li class="list-group-item"><strong>角色:</strong> ${user.role}</li>
            </ul>
        `;

        const col2 = document.createElement('div');
        col2.classList.add('col-md-6');
        col2.innerHTML = `
            <h5 class="card-title">聯繫資訊</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>地址:</strong> ${user.address}</li>
                <li class="list-group-item"><strong>城市:</strong> ${user.city}</li>
                <li class="list-group-item"><strong>郵遞區號:</strong> ${user.postalCode}</li>
            </ul>
        `;

        row1.appendChild(col1);
        row1.appendChild(col2);
        cardBody.appendChild(row1);

        const row2 = document.createElement('div');
        row2.classList.add('row', 'mb-3');

        const col3 = document.createElement('div');
        col3.classList.add('col-md-6');
        col3.innerHTML = `
            <h5 class="card-title">公司資訊</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>公司名稱:</strong> ${user.company}</li>
                <li class="list-group-item"><strong>職位:</strong> ${user.position}</li>
                <li class="list-group-item"><strong>部門:</strong> ${user.department}</li>
            </ul>
        `;

        const col4 = document.createElement('div');
        col4.classList.add('col-md-6');
        col4.innerHTML = `
            <h5 class="card-title">其他資訊</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>生日:</strong> ${user.birthday}</li>
                <li class="list-group-item"><strong>註冊日期:</strong> ${user.registrationDate}</li>
                <li class="list-group-item"><strong>狀態:</strong> ${user.status}</li>
            </ul>
        `;

        row2.appendChild(col3);
        row2.appendChild(col4);
        cardBody.appendChild(row2);

        collapseDiv.appendChild(cardBody);
        card.appendChild(collapseDiv);

        userAccordion.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    generateUserCards(users);
});


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