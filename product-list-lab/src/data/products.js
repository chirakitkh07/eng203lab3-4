// src/data/products.js
export const categories = [
    { id: 'all', name: 'ทั้งหมด' },
    { id: 'electronics', name: 'อิเล็กทรอนิกส์' },
    { id: 'clothing', name: 'เสื้อผ้า' },
    { id: 'books', name: 'หนังสือ' }
];

// ข้อมูลสินค้าพื้นฐาน - นักศึกษาจะเพิ่มเติมใน Challenge
export const products = [
    {
        id: 1,
        name: 'iPhone 15 Pro',
        category: 'electronics',
        price: 41310,
        originalPrice: 45900,
        discount: 10,
        image: 'https://placehold.co/300x300/007bff/ffffff?text=iPhone+15',
        description: 'สมาร์ทโฟนล่าสุดจาก Apple',
        inStock: true,
        rating: 4.8
    },
    {
        id: 2,
        name: 'เสื้อยืดผ้าฝ้าย',
        category: 'clothing',
        price: 239.2,
        originalPrice: 299,
        discount: 20,
        image: 'https://placehold.co/300x300/ffc107/000000?text=T-Shirt',
        description: 'เสื้อยืดผ้าฝ้าย 100% นุ่มสบาย',
        inStock: true,
        rating: 4.2
    },
    {
        id: 3,
        name: 'หนังสือ React.js Guide',
        category: 'books',
        price: 455,
        originalPrice: 650,
        discount: 30,
        image: 'https://placehold.co/300x300/17a2b8/ffffff?text=React+Book',
        description: 'คู่มือเรียนรู้ React.js ฉบับสมบูรณ์',
        inStock: false,
        rating: 4.7
    },
    {
        id: 4,
        name: 'Adizero Adios Pro 4',
        category: 'clothing',
        price: 6800,
        originalPrice: 8000,
        discount: 15,
        image: 'https://placehold.co/300x300/17a2b8/ffffff?text=Adidas+Adizero+Pro4',
        description: 'ADIDAS-ADIZERO ADIOS PRO 4 MEN. 8,000 ฿',
        inStock: true,
        rating: 4.7
    },
    {
        id: 5,
        name: 'Osprey Kestrel 48',
        category: 'clothing',
        price: 10200,
        originalPrice: 12000,
        discount: 15,
        image: 'https://placehold.co/300x300/17a2b8/ffffff?text=Osprey+Kestrel+4',
        description: 'กระเป๋าเป้เดินป่า Osprey Kestrel ขนาด 48 ลิตร',
        inStock: true,
        rating: 5
    },
    {
        id: 6,
        name: 'MSR ELIXIR 2 TENT V2',
        category: 'clothing',
        price: 21850,
        originalPrice: 23000,
        discount: 5,
        image: 'https://placehold.co/300x300/17a2b8/ffffff?text=MSR+ELIXIR+2+TENT+V2',
        description: 'Elixir 2 V2 เต๊นท์ขนาด 2 คน น้ำหนักเบาในราคาสุดคุ้ม เหมาะสำหรับทุกการเดินทาง',
        inStock: true,
        rating: 5
    },
    {
        id: 7,
        name: 'BMAI Carbon 3.0 TURBO',
        category: 'clothing',
        price: 4750,
        originalPrice: 5000,
        discount: 5,
        image: 'https://placehold.co/300x300/17a2b8/ffffff?text=BMAI+Carbon+3.0+TURBO',
        description: ' Bmai Amazing Carbon 3.0 Turbo ✓ แผ่นคาร์บอนไฟเบอร์ เพิ่มแรงส่งตัวให้วิ่งเร็วขึ้น',
        inStock: false,
        rating: 5
    },
];