// DỮ LIỆU SẢN PHẨM (Mô phỏng DB)
const pets = [
    {
        id: 1,
        name: 'Chó Golden Retriever',
        price: '15.000.000đ',
        rawPrice: 15000000,
        category: 'dog',
        image: '../assets/images/ChoGolden.jpg',
        folder: 'ChoGolden',
        inStock: true,
        desc: 'Thân thiện, thông minh, trung thành.',
        fullDesc: `🐶 Ý nghĩa: Biểu tượng của lòng trung thành và tình thân.

🎁 Phù hợp: Gia đình có trẻ em, người mới nuôi chó.

✨ Điểm nổi bật: Giống chó thuần chủng, đã tiêm phòng đầy đủ, giấy tờ rõ ràng.

🚚 Dịch vụ: Giao tận nhà, bảo hành sức khoẻ 30 ngày.`
    },
    {
        id: 2,
        name: 'Mèo Anh Lông Ngắn',
        price: '8.500.000đ',
        rawPrice: 8500000,
        category: 'cat',
        image: '../assets/images/MeoAnhh.jpg',
        folder: 'MeoAnh',
        inStock: true,
        desc: 'Điềm tĩnh, sang trọng, ít ồn ào.',
        fullDesc: `🐱 Ý nghĩa: Người bạn nhỏ lý tưởng, yên tĩnh và dễ thương.

🎁 Phù hợp: Căn hộ chung cư, người bận rộn.

✨ Điểm nổi bật: Lông ngắn dễ chăm, tính cách hiền lành.

🚚 Dịch vụ: Giao nhanh, kèm phụ kiện cơ bản.`
    },
    {
        id: 3,
        name: 'Chó Corgi Chân Ngắn',
        price: '18.000.000đ',
        rawPrice: 18000000,
        category: 'dog',
        image: '../assets/images/ChoCorgi.jpg',
        folder: 'corgi',
        inStock: false,
        desc: 'Vui vẻ, lanh lợi, siêu cuốn.',
        fullDesc: `🐶 Ý nghĩa: Nổi tiếng với đôi tai to và chân ngắn đáng yêu.

🎁 Phù hợp: Mọi gia đình, siêu hot trên mạng xã hội.

✨ Điểm nổi bật: Thuần chủng Pembroke, giấy tờ đầy đủ.

🚚 Dịch vụ: Đặt trước, giao khi có hàng.`
    },
    {
        id: 4,
        name: 'Mèo Maine Coon',
        price: '12.000.000đ',
        rawPrice: 12000000,
        category: 'cat',
        image: '../assets/images/maine-coon.jpg',
        folder: 'maine-coon',
        inStock: true,
        desc: 'To lớn, hiền hậu như chó.',
        fullDesc: `🐱 Ý nghĩa: Giống mèo lớn nhất, tính cách như chó.

🎁 Phù hợp: Gia đình thích mèo lớn, hiền.

✨ Điểm nổi bật: Lông dày đẹp, thân thiện với trẻ em.

🚚 Giao hàng toàn quốc.`
    },
    {
        id: 5,
        name: 'Chó Poodle Toy',
        price: '9.000.000đ',
        rawPrice: 9000000,
        category: 'dog',
        image: '../assets/images/poodle.jpg',
        folder: 'poodle',
        inStock: true,
        desc: 'Thông minh nhất trong các giống chó.',
        fullDesc: `🐩 Ý nghĩa: Biểu tượng của sự thông minh và phong cách.

🎁 Phù hợp: Căn hộ nhỏ, người thích chó thời trang.

✨ Điểm nổi bật: Không rụng lông, phù hợp người dị ứng.

🚚 Giao trong ngày khu vực nội thành.`
    },
    {
        id: 6,
        name: 'Mèo Scottish Fold',
        price: '10.500.000đ',
        rawPrice: 10500000,
        category: 'cat',
        image: '../assets/images/scottish.jpg',
        folder: 'scottish',
        inStock: true,
        desc: 'Đôi tai gập đặc trưng, siêu m萌.',
        fullDesc: `🐱 Ý nghĩa: Nổi tiếng với đôi tai đặc biệt và ánh mắt tròn.

🎁 Phù hợp: Ai mê mèo cute, phong cách Nhật.

✨ Điểm nổi bật: Tính cách ôn hoà, dễ gần.

🚚 Giao cẩn thận, đảm bảo an toàn.`
    },
    {
        id: 7,
        name: 'Chó Husky Siberian',
        price: '22.000.000đ',
        rawPrice: 22000000,
        category: 'dog',
        image: '../assets/images/husky.jpg',
        folder: 'husky',
        inStock: true,
        desc: 'Đôi mắt xanh huyền thoại.',
        fullDesc: `🐺 Ý nghĩa: Chó sói đẹp nhất, mạnh mẽ và trung thành.

🎁 Phù hợp: Nhà có sân, người năng động.

✨ Điểm nổi bật: Thuần chủng, mắt xanh đặc trưng.

🚚 Giao toàn quốc, cam kết khoẻ mạnh.`
    },
    {
        id: 8,
        name: 'Mèo Ragdoll',
        price: '14.000.000đ',
        rawPrice: 14000000,
        category: 'cat',
        image: '../assets/images/ragdoll.jpg',
        folder: 'ragdoll',
        inStock: false,
        desc: 'Lông xanh mắt xanh, chảy nước miếng.',
        fullDesc: `🐱 Ý nghĩa: Giống mèo ôn hoà nhất, mềm mại như búp bê.

🎁 Phù hợp: Ai thích mèo lông dài, hiền.

✨ Điểm nổi bật: Mắt xanh đặc trưng, rất thân thiện.

🚚 Đặt trước, giao khi có hàng.`
    }
];

const petContainer    = document.getElementById('pet-container');
const searchInput     = document.getElementById('search');
const detailContainer = document.getElementById('detail');

function renderPets(data) {
    if (!petContainer) return;

    petContainer.innerHTML = data.map(pet => `
        <div class="pet-card ${pet.inStock ? '' : 'out-of-stock'}" data-id="${pet.id}">

            <div class="out-of-stock-badge">HẾT HÀNG</div>
            <div class="badge">BÁN CHẠY</div>

            <img src="${pet.image}" alt="${pet.name}">

            <div class="pet-info">
                <h3>${pet.name}</h3>
                <p class="price">${pet.price}</p>
                <p class="short-desc">${pet.desc}</p>

                <a href="chi-tiet.html?id=${pet.id}" class="detail-btn">
                    Xem chi tiết
                </a>

                <button
                    class="btn-add"
                    ${pet.inStock ? '' : 'disabled'}
                    onclick="addToCart(${pet.id}, '${pet.name}', '${pet.price}')">
                    ${pet.inStock ? 'Thêm giỏ hàng' : 'Tạm hết hàng'}
                </button>

                <button class="btn-toggle-stock" onclick="toggleStock(${pet.id})">
                    🔄 Đổi trạng thái: ${pet.inStock ? 'Còn hàng' : 'Hết hàng'}
                </button>
            </div>

        </div>
    `).join('');
}

function toggleStock(petId) {
    const pet = pets.find(p => p.id === petId);
    if (pet) {
        pet.inStock = !pet.inStock;
        renderPets(getCurrentFilter());
    }
}

let currentCategory = 'all';

function getCurrentFilter() {
    if (currentCategory === 'all') return pets;
    return pets.filter(p => p.category === currentCategory);
}

const addForm = document.getElementById('add-product-form');
if (addForm) {
    addForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name     = document.getElementById('p-name').value;
        const price    = parseInt(document.getElementById('p-price').value);
        const category = document.getElementById('p-category').value;
        const image    = document.getElementById('p-image').value;

        const newPet = {
            id:       Date.now(),
            name:     name,
            price:    price.toLocaleString('vi-VN') + 'đ',
            rawPrice: price,
            category: category,
            image:    image,
            folder:   'default',
            inStock:  true,
            desc:     'Thú cưng mới nhập về.',
            fullDesc: `Thú cưng mới. Liên hệ để biết thêm thông tin.`
        };

        pets.unshift(newPet);
        renderPets(getCurrentFilter());

        this.reset();
        alert('🎉 Đã bổ sung thú cưng mới thành công!');
    });
}

function toggleAdmin() {
    const panel = document.getElementById('admin-panel');
    panel.classList.toggle('open');
}

function filterPet(category, btn) {
    currentCategory = category;

    document.querySelector('.filter-btn.active').classList.remove('active');
    btn.classList.add('active');

    if (category === 'all') {
        renderPets(pets);
    } else {
        renderPets(pets.filter(p => p.category === category));
    }
}

if (searchInput) {
    searchInput.addEventListener('input', () => {
        const kw = searchInput.value.toLowerCase();
        const result = pets.filter(p => p.name.toLowerCase().includes(kw));
        renderPets(result);
    });
}
if (detailContainer) {
    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get('id'));
    const pet = pets.find(p => p.id === id);

    if (!pet) {
        detailContainer.innerHTML = '<h2>Không tìm thấy sản phẩm</h2>';
    } else {
        detailContainer.innerHTML = `
        <section class="detail-page">
            <div class="detail-left">
                <div class="main-image">
                    <img id="mainImg" src="${pet.image}" alt="${pet.name}">
                </div>
                <div class="thumb-list">
                    ${[1,2,3,4].map(n => `
                        <img src="../assets/image/${pet.folder}/${n}.jpg" alt="thumb">
                    `).join('')}
                </div>
            </div>
            <div class="detail-right">
                <span class="category-tag">
                    ${pet.category === 'dog' ? '🐶 Chó' : '🐱 Mèo'}
                </span>
                <h1>${pet.name}</h1>
                <div class="price">${pet.price}</div>
                <div class="desc-box">
                    <h3>Thông tin chi tiết</h3>
                    <p class="full-desc">${pet.fullDesc}</p>
                </div>
                <a href="tel:0000000000" class="call-btn">📞 Gọi ngay</a>
                <a href="https://zalo.me/0000000000" class="message-btn">💬 Zalo</a>
            </div>
        </section>
        `;

        const mainImg = document.getElementById('mainImg');
        document.querySelectorAll('.thumb-list img').forEach(img => {
            img.addEventListener('click', () => {
                mainImg.src = img.src;
                document.querySelector('.active-thumb')?.classList.remove('active-thumb');
                img.classList.add('active-thumb');
            });
        });
    }
}

let cart = JSON.parse(localStorage.getItem('petcart')) || [];

function addToCart(id, name, priceStr) {
    const cleanPrice = Number(priceStr.replace(/\./g, '').replace('đ', ''));
    let item = cart.find(p => p.id === id);

    if (item) {
        item.qty += 1;
    } else {
        cart.push({ id, name, price: cleanPrice, qty: 1 });
    }

    localStorage.setItem('petcart', JSON.stringify(cart));
    updateCartCount();
    showToast();
}

function updateCartCount() {
    const count = document.querySelector('.cart-count');
    if (!count) return;
    let total = 0;
    cart.forEach(item => { total += item.qty; });
    count.innerText = total;
}

function showToast() {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

// INIT
if (petContainer) renderPets(pets);
updateCartCount();

const cartIcon = document.querySelector('.cart');
if (cartIcon) {
    cartIcon.classList.add('bump');
    setTimeout(() => cartIcon.classList.remove('bump'), 300);
}
