/**
 * DOON Cosmetics & E-Commerce ERP System - Application Logic
 * Brand: DOON (دُون)
 * Currency: EGP (جنيه مصري)
 */

// ==========================================
// 1. INITIAL DATA & SEED STATE
// ==========================================

const INITIAL_GOVERNORATES = [
  { id: 'cairo', name: 'القاهرة', fee: 50 },
  { id: 'giza', name: 'الجيزة', fee: 50 },
  { id: 'alex', name: 'الإسكندرية', fee: 60 },
  { id: 'beheira', name: 'البحيرة', fee: 55 },
  { id: 'daqahliya', name: 'الدقهلية', fee: 60 },
  { id: 'sharqia', name: 'الشرقية', fee: 60 },
  { id: 'gharbia', name: 'الغربية', fee: 55 },
  { id: 'monufia', name: 'المنوفية', fee: 55 },
  { id: 'kafr_sheikh', name: 'كفر الشيخ', fee: 65 },
  { id: 'qalyubia', name: 'القليوبية', fee: 50 },
  { id: 'damietta', name: 'دمياط', fee: 65 },
  { id: 'port_said', name: 'بورسعيد', fee: 65 },
  { id: 'ismailia', name: 'الإسماعيلية', fee: 65 },
  { id: 'suez', name: 'السويس', fee: 65 },
  { id: 'north_sinai', name: 'شمال سيناء', fee: 90 },
  { id: 'south_sinai', name: 'جنوب سيناء (شرم الشيخ)', fee: 95 },
  { id: 'fayoum', name: 'الفيوم', fee: 65 },
  { id: 'beni_suef', name: 'بني سويف', fee: 70 },
  { id: 'minya', name: 'المنيا', fee: 75 },
  { id: 'assiut', name: 'أسيوط', fee: 75 },
  { id: 'sohag', name: 'سوهاج', fee: 80 },
  { id: 'qena', name: 'قنا', fee: 85 },
  { id: 'luxor', name: 'الأقصر', fee: 90 },
  { id: 'aswan', name: 'أسوان', fee: 100 },
  { id: 'red_sea', name: 'البحر الأحمر (الغردقة)', fee: 95 },
  { id: 'new_valley', name: 'الوادي الجديد', fee: 100 },
  { id: 'matrouh', name: 'مطروح والساحل الشمالي', fee: 85 }
];

const INITIAL_PRODUCTS = [
  {
    id: 'doon-serum-vitc',
    name: 'سيروم فيتامين C المركز للنضارة الفائقة',
    category: 'skincare',
    categoryName: 'العناية بالبشرة',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop&q=80',
    costPrice: 120,
    price: 240,
    oldPrice: 320,
    pricingMethod: 'cost_plus',
    profitMargin: 50,
    initialStock: 100,
    incomingStock: 50,
    salesStock: 112,
    damagedStock: 2,
    returnedStock: 1,
    minStock: 10,
    avgDailySales: 4.5,
    rating: 4.9,
    reviewsCount: 142,
    isNew: true,
    isBestSeller: true,
    isFlashOffer: true,
    description: 'سيروم متطور بتركيز 15% فيتامين C نقي مع حمض الهيالورونيك وخلاصة البرتقال الطبيعي لتفتيح البشرة ومحاربة التجاعيد والبقع الداكنة.',
    ingredients: 'Vitamin C 15%, Hyaluronic Acid, Ferulic Acid, Sweet Orange Extract, Vitamin E.',
    usage: 'توضع 4-5 قطرات صباحاً ومساءً على بشرة نظيفة قبل المرطب مع تدليك لطيف.'
  },
  {
    id: 'doon-cream-collagen',
    name: 'كريم DOON الليلي لترميم الكولاجين',
    category: 'skincare',
    categoryName: 'العناية بالبشرة',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&auto=format&fit=crop&q=80',
    costPrice: 150,
    price: 310,
    oldPrice: 390,
    pricingMethod: 'cost_plus',
    profitMargin: 51,
    initialStock: 80,
    incomingStock: 40,
    salesStock: 95,
    damagedStock: 1,
    returnedStock: 2,
    minStock: 8,
    avgDailySales: 3.8,
    rating: 4.8,
    reviewsCount: 98,
    isNew: false,
    isBestSeller: true,
    isFlashOffer: false,
    description: 'كريم ليلي غني بببتيدات الكولاجين وزبدة الشيا لترطيب عميق وإعادة مرونة وشباب البشرة أثناء النوم.',
    ingredients: 'Hydrolyzed Marine Collagen, Shea Butter, Peptides Complex, Niacinamide 4%.',
    usage: 'يدهن على الوجه والرقبة قبل النوم يومياً بحركات دائرية تصاعدية.'
  },
  {
    id: 'doon-shampoo-argan',
    name: 'شامبو DOON بالأرجان المغربي والكيراتين',
    category: 'haircare',
    categoryName: 'العناية بالشعر',
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=600&auto=format&fit=crop&q=80',
    costPrice: 90,
    price: 195,
    oldPrice: 260,
    pricingMethod: 'cost_plus',
    profitMargin: 53,
    initialStock: 150,
    incomingStock: 80,
    salesStock: 190,
    damagedStock: 3,
    returnedStock: 3,
    minStock: 15,
    avgDailySales: 6.2,
    rating: 4.7,
    reviewsCount: 210,
    isNew: false,
    isBestSeller: true,
    isFlashOffer: true,
    description: 'شامبو خالٍ من السلفات والبارابين معزز بزيت الأرجان الأصلي لمعالجة الشعر التالف والمتقصف ومنحه لمعاناً حريرياً.',
    ingredients: 'Pure Moroccan Argan Oil, Hydrolyzed Keratin, Biotin, Aloe Vera Extract, Sulfate-Free Base.',
    usage: 'يوضع على شعر مبلل ويدلك فروة الرأس لمدة دقيقتين ثم يشطف بالماء الفاتر.'
  },
  {
    id: 'doon-hair-mask',
    name: 'ماسك الشعر المعالج ببروتين الحرير',
    category: 'haircare',
    categoryName: 'العناية بالشعر',
    image: 'https://images.unsplash.com/photo-1608248597359-281b212f8955?w=600&auto=format&fit=crop&q=80',
    costPrice: 110,
    price: 230,
    oldPrice: 290,
    pricingMethod: 'cost_plus',
    profitMargin: 52,
    initialStock: 70,
    incomingStock: 30,
    salesStock: 82,
    damagedStock: 0,
    returnedStock: 1,
    minStock: 8,
    avgDailySales: 2.9,
    rating: 4.9,
    reviewsCount: 85,
    isNew: true,
    isBestSeller: false,
    isFlashOffer: false,
    description: 'ماسك ترميم فوري للشعر الجاف والتالف بالصبغات والحرارة يمنحه النعومة والانسيابية من أول استخدام.',
    ingredients: 'Silk Amino Acids, Coconut Oil, Panthenol, Jojoba Oil.',
    usage: 'يوزع على أطراف الشعر بعد الشامبو ويترك 5-10 دقائق ثم يشطف جيداً.'
  },
  {
    id: 'doon-perfume-amber-amber',
    name: 'عطر DOON Royal Amber الفاخر 100 مل',
    category: 'perfumes',
    categoryName: 'العناية بالعطور',
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=600&auto=format&fit=crop&q=80',
    costPrice: 350,
    price: 790,
    oldPrice: 990,
    pricingMethod: 'cost_plus',
    profitMargin: 55,
    initialStock: 50,
    incomingStock: 25,
    salesStock: 62,
    damagedStock: 0,
    returnedStock: 0,
    minStock: 6,
    avgDailySales: 1.8,
    rating: 5.0,
    reviewsCount: 164,
    isNew: true,
    isBestSeller: true,
    isFlashOffer: true,
    description: 'توليفة عطرية ملكية شرقية غربية تجمع بين العنبر الدافئ، زهر البرتقال، خشب الصندل، والفانيليا الفرنسية بثبات يدوم 48 ساعة.',
    ingredients: 'Ambergris, Orange Blossom, Sandalwood, French Vanilla, Bergamot, EDP 25% Concentration.',
    usage: 'يرش على نقاط النبض (المعصم، الرقبة، خلف الأذنين).'
  },
  {
    id: 'doon-lipstick-matte',
    name: 'أحمر شفاه DOON Velvet Matte المخملي',
    category: 'makeup',
    categoryName: 'مستحضرات التجميل',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&auto=format&fit=crop&q=80',
    costPrice: 65,
    price: 145,
    oldPrice: 190,
    pricingMethod: 'cost_plus',
    profitMargin: 55,
    initialStock: 120,
    incomingStock: 60,
    salesStock: 154,
    damagedStock: 2,
    returnedStock: 4,
    minStock: 12,
    avgDailySales: 5.1,
    rating: 4.8,
    reviewsCount: 178,
    isNew: false,
    isBestSeller: true,
    isFlashOffer: false,
    description: 'أحمر شفاه مطفي بتركيبة مرطبة غنية بزيت اللوز وفيتامين E، ثبات يدوم 16 ساعة دون أن يسبب جفاف الشفاه.',
    ingredients: 'Almond Oil, Vitamin E, Candelilla Wax, High-Definition Mineral Pigments.',
    usage: 'يطبق مباشرة على الشفاه من المركز باتجاه الزوايا.'
  },
  {
    id: 'doon-body-lotion-glow',
    name: 'لوشن الجسم المعطر DOON Shimmer & Glow',
    category: 'bodycare',
    categoryName: 'العناية بالجسم',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop&q=80',
    costPrice: 85,
    price: 180,
    oldPrice: 240,
    pricingMethod: 'cost_plus',
    profitMargin: 52,
    initialStock: 90,
    incomingStock: 30,
    salesStock: 102,
    damagedStock: 1,
    returnedStock: 1,
    minStock: 8,
    avgDailySales: 3.2,
    rating: 4.7,
    reviewsCount: 72,
    isNew: false,
    isBestSeller: false,
    isFlashOffer: true,
    description: 'لوشن ترطيب عميق سريع الامتصاص يمنح الجسم نعومة فائقة ولمعة ذهبية ساحرة مع رائحة الحمضيات والزهور المنعشة.',
    ingredients: 'Glycerin, Golden Mica Shimmer, Shea Butter, Grape Seed Oil, Orange Blossom Fragrance.',
    usage: 'يدهن على كامل الجسم بعد الاستحمام بحركات تدليك لطيفة.'
  },
  {
    id: 'doon-sunscreen-gel',
    name: 'واقي شمس جل غير دهني SPF 50+ DOON Shield',
    category: 'skincare',
    categoryName: 'العناية بالبشرة',
    image: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?w=600&auto=format&fit=crop&q=80',
    costPrice: 115,
    price: 260,
    oldPrice: 340,
    pricingMethod: 'cost_plus',
    profitMargin: 55,
    initialStock: 110,
    incomingStock: 50,
    salesStock: 140,
    damagedStock: 1,
    returnedStock: 2,
    minStock: 10,
    avgDailySales: 4.8,
    rating: 4.9,
    reviewsCount: 230,
    isNew: true,
    isBestSeller: true,
    isFlashOffer: false,
    description: 'واقي شمسي متطور مائي القوام غير لامع وخالٍ من الأثر الأبيض، يحمي من الأشعة فوق البنفسجية UVA/UVB والضوء الأزرق.',
    ingredients: 'Broad Spectrum SPF 50+ Filters, Hyaluronic Acid, Centella Asiatica, Green Tea.',
    usage: 'يوضع قبل التعرض للشمس بـ 20 دقيقة ويجدد كل ساعتين.'
  }
];

const INITIAL_EXPENSES = [
  { id: 'exp-1', title: 'إيجار المقر والمخزن الرئيسي', category: 'Rent', amount: 15000, date: '2026-08-01' },
  { id: 'exp-2', title: 'حملات إعلانية ممولة (Meta & TikTok)', category: 'Marketing', amount: 8500, date: '2026-08-15' },
  { id: 'exp-3', title: 'عبوات كرتون وتغليف فاخر بشعار DOON', category: 'Packaging', amount: 4200, date: '2026-08-20' },
  { id: 'exp-4', title: 'فواتير إنترنت وكهرباء ونظافة', category: 'Utilities', amount: 1800, date: '2026-08-25' }
];

const INITIAL_EMPLOYEES = [
  { id: 'EMP-101', name: 'أحمد محمود القاضي', role: 'مدير العمليات والتسويق', dept: 'Operations', salary: 12000, phone: '01012345678', hireDate: '2025-01-10', status: 'نشط', attendanceRate: 98 },
  { id: 'EMP-102', name: 'سارة عبد الرحمن', role: 'مسؤولة الجودة والتعبئة', dept: 'Warehouse', salary: 7500, phone: '01123456789', hireDate: '2025-03-15', status: 'نشط', attendanceRate: 95 },
  { id: 'EMP-103', name: 'محمد كمال رضوان', role: 'أمين المخزن الرئيسي', dept: 'Warehouse', salary: 8000, phone: '01234567890', hireDate: '2025-02-01', status: 'نشط', attendanceRate: 96 },
  { id: 'EMP-104', name: 'نوران إبراهيم السيد', role: 'خدمة العملاء والمبيعات', dept: 'Support', salary: 6500, phone: '01545678901', hireDate: '2025-06-01', status: 'نشط', attendanceRate: 99 }
];

const INITIAL_ORDERS = [
  {
    id: 'DOON-8041',
    customerName: 'مريم حسن عثمان',
    phone: '01098765432',
    governorate: 'القاهرة',
    address: 'مدينة نصر - الحي السابع - عمارة 14',
    items: [
      { id: 'doon-serum-vitc', name: 'سيروم فيتامين C المركز للنضارة الفائقة', price: 240, costPrice: 120, qty: 1 },
      { id: 'doon-cream-collagen', name: 'كريم DOON الليلي لترميم الكولاجين', price: 310, costPrice: 150, qty: 1 }
    ],
    itemsTotal: 550,
    shippingFee: 50,
    discountAmount: 0,
    total: 600,
    paymentMethod: 'COD',
    paymentStatus: 'مدفوع عند الاستلام',
    status: 'Delivered',
    statusArabic: 'تم التسليم بنجاح',
    createdAt: '2026-08-28 14:30',
    notes: 'التسليم بعد الساعة 5 مساءً'
  },
  {
    id: 'DOON-8042',
    customerName: 'ياسمين طارق عبد الله',
    phone: '01198765431',
    governorate: 'الإسكندرية',
    address: 'سموحة - ش فوزي معاذ - برج السلام',
    items: [
      { id: 'doon-perfume-amber-amber', name: 'عطر DOON Royal Amber الفاخر 100 مل', price: 790, costPrice: 350, qty: 1 }
    ],
    itemsTotal: 790,
    shippingFee: 60,
    discountAmount: 79,
    total: 771,
    paymentMethod: 'Online',
    paymentStatus: 'مدفوع إلكترونياً (Visa)',
    status: 'Out for Delivery',
    statusArabic: 'جاري التوصيل مع المندوب',
    createdAt: '2026-08-30 11:15',
    notes: ''
  },
  {
    id: 'DOON-8043',
    customerName: 'كريم حازم الشرقاوي',
    phone: '01287654321',
    governorate: 'الجيزة',
    address: 'الدقي - ش مصدق - عمارة الأطباء',
    items: [
      { id: 'doon-shampoo-argan', name: 'شامبو DOON بالأرجان المغربي والكيراتين', price: 195, costPrice: 90, qty: 2 },
      { id: 'doon-hair-mask', name: 'ماسك الشعر المعالج ببروتين الحرير', price: 230, costPrice: 110, qty: 1 }
    ],
    itemsTotal: 620,
    shippingFee: 50,
    discountAmount: 0,
    total: 670,
    paymentMethod: 'COD',
    paymentStatus: 'مستحق التحصيل',
    status: 'Preparing',
    statusArabic: 'قيد التجهيز بالمخزن',
    createdAt: '2026-08-31 16:45',
    notes: ''
  }
];

const INITIAL_AUDIT_LOGS = [
  { id: 'log-1', user: 'Admin (صاحب الشركة)', action: 'تعديل سعر بيع المنتج', target: 'عطر DOON Royal Amber', oldValue: '850 جنيه', newValue: '790 جنيه', timestamp: '2026-08-28 10:15' },
  { id: 'log-2', user: 'مسؤول المخزن', action: 'استلام دفعة وارد جديدة', target: 'سيروم فيتامين C (50 قطعة)', oldValue: '50 قطعة', newValue: '100 قطعة', timestamp: '2026-08-29 13:00' },
  { id: 'log-3', user: 'شركة الشحن', action: 'تحديث حالة الشحنة إلى تم التسليم', target: 'طلب #DOON-8041', oldValue: 'Out for Delivery', newValue: 'Delivered', timestamp: '2026-08-30 17:20' },
  { id: 'log-4', user: 'المحاسب', action: 'تسجيل مصروف تشغيلي جديد', target: 'حملات إعلانية ممولة', oldValue: '-', newValue: '8,500 جنيه', timestamp: '2026-08-31 11:30' }
];

// ==========================================
// 2. STATE MANAGER (LocalStorage Persistence)
// ==========================================

class DoonApp {
  constructor() {
    this.currentRole = 'customer'; // 'customer' | 'portal' | 'admin' | 'warehouse' | 'shipping' | 'accountant' | 'hr'
    this.currentCategory = 'all';
    this.searchQuery = '';
    this.activeCustomerTab = 'orders';
    
    // Load persisted state or fallback
    this.products = this.loadState('doon_products', INITIAL_PRODUCTS);
    this.governorates = this.loadState('doon_govs', INITIAL_GOVERNORATES);
    this.orders = this.loadState('doon_orders', INITIAL_ORDERS);
    this.expenses = this.loadState('doon_expenses', INITIAL_EXPENSES);
    this.employees = this.loadState('doon_employees', INITIAL_EMPLOYEES);
    this.auditLogs = this.loadState('doon_audit', INITIAL_AUDIT_LOGS);
    this.cart = this.loadState('doon_cart', []);
    this.wishlist = this.loadState('doon_wishlist', ['doon-serum-vitc', 'doon-perfume-amber-amber']);
    this.appliedCoupon = null;

    this.init();
  }

  loadState(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch (e) {
      console.warn('Storage read error:', e);
      return fallback;
    }
  }

  saveState(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {
      console.warn('Storage write error:', e);
    }
  }

  init() {
    this.renderStore();
    this.renderCart();
    this.updateCartBadge();
    this.updateWishlistBadge();
    this.bindEvents();
    this.startFlashTimer();
  }

  // ==========================================
  // 3. AUDIT LOGGING HELPER
  // ==========================================
  logAudit(action, target, oldValue, newValue) {
    const userMap = {
      'admin': 'Admin (صاحب الشركة)',
      'warehouse': 'مسؤول المخازن',
      'shipping': 'شركة الشحن',
      'accountant': 'المحاسب المالي',
      'hr': 'مسؤول الموارد البشرية HR',
      'customer': 'عميل المتجر'
    };
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
    
    const entry = {
      id: 'log-' + Date.now(),
      user: userMap[this.currentRole] || 'المستخدم',
      action,
      target,
      oldValue: String(oldValue),
      newValue: String(newValue),
      timestamp: formattedDate
    };

    this.auditLogs.unshift(entry);
    this.saveState('doon_audit', this.auditLogs);
    if (this.currentRole === 'admin') {
      this.renderERPView('admin');
    }
  }

  // ==========================================
  // 4. STOCK & INVENTORY CALCULATIONS
  // Formula: Current Stock = Initial + Incoming - Sales - Damaged + Returned
  // ==========================================
  getProductStock(product) {
    const init = product.initialStock || 0;
    const incoming = product.incomingStock || 0;
    const sales = product.salesStock || 0;
    const damaged = product.damagedStock || 0;
    const returned = product.returnedStock || 0;
    const current = Math.max(0, init + incoming - sales - damaged + returned);
    const min = product.minStock || 5;
    
    let status = 'متوفر';
    let statusClass = 'in-stock';
    let badgeLabel = '🟢 متوفر';

    if (current === 0) {
      status = 'نفذ من المخزن';
      statusClass = 'out-stock';
      badgeLabel = '🔴 نفذ';
    } else if (current <= min) {
      status = 'مخزون حرج (منخفض)';
      statusClass = 'low-stock';
      badgeLabel = '🔴 حرج (' + current + ' قطع)';
    } else if (current <= min * 1.5) {
      status = 'إعادة طلب قريباً';
      statusClass = 'low-stock';
      badgeLabel = '🟠 إعادة طلب';
    }

    const avgDaily = product.avgDailySales || 2.5;
    const daysRemaining = current > 0 ? (current / avgDaily).toFixed(1) : 0;

    return {
      currentStock: current,
      minStock: min,
      status,
      statusClass,
      badgeLabel,
      daysRemaining,
      avgDailySales: avgDaily
    };
  }

  // ==========================================
  // 5. STOREFRONT RENDERING
  // ==========================================
  renderStore() {
    const productsGrid = document.getElementById('productsGrid');
    const flashGrid = document.getElementById('flashGrid');
    if (!productsGrid) return;

    let filtered = this.products;

    if (this.currentCategory !== 'all') {
      filtered = filtered.filter(p => p.category === this.currentCategory);
    }

    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      filtered = filtered.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.categoryName.toLowerCase().includes(q));
    }

    // Render Main Products Grid
    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
          <i class="fa-solid fa-box-open" style="font-size: 3.5rem; color: var(--primary-200); margin-bottom: 14px;"></i>
          <h3>لم نتمكن من العثور على منتجات مطابقة للبحث</h3>
          <p>جرب البحث بكلمات أخرى أو تصفح جميع الأقسام</p>
        </div>
      `;
    } else {
      productsGrid.innerHTML = filtered.map(product => this.buildProductCard(product)).join('');
    }

    // Render Flash Offers Grid
    if (flashGrid) {
      const flashOffers = this.products.filter(p => p.isFlashOffer);
      flashGrid.innerHTML = flashOffers.map(product => this.buildProductCard(product)).join('');
    }
  }

  buildProductCard(product) {
    const stockInfo = this.getProductStock(product);
    const isWishlisted = this.wishlist.includes(product.id);
    const discountPercent = product.oldPrice > product.price 
      ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
      : null;

    return `
      <div class="product-card" data-id="${product.id}">
        <div class="product-badge-group">
          ${discountPercent ? `<span class="product-badge discount">خصم ${discountPercent}%</span>` : ''}
          ${product.isBestSeller ? `<span class="product-badge bestseller"><i class="fa-solid fa-fire"></i> الأكثر مبيعاً</span>` : ''}
          ${product.isNew ? `<span class="product-badge new">جديد</span>` : ''}
        </div>

        <button class="product-wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="app.toggleWishlist('${product.id}')" title="أضف إلى المفضلة">
          <i class="fa-${isWishlisted ? 'solid' : 'regular'} fa-heart"></i>
        </button>

        <div class="product-img-wrapper" onclick="app.openProductModal('${product.id}')">
          <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
          <button class="product-quick-view">
            <i class="fa-solid fa-eye"></i> معاينة سريعة
          </button>
        </div>

        <div class="product-content">
          <span class="product-category">${product.categoryName}</span>
          <h3 class="product-title" onclick="app.openProductModal('${product.id}')">${product.name}</h3>
          
          <div class="product-rating">
            <div class="stars">
              ${'<i class="fa-solid fa-star"></i>'.repeat(Math.floor(product.rating))}
              ${product.rating % 1 !== 0 ? '<i class="fa-solid fa-star-half-stroke"></i>' : ''}
            </div>
            <span class="rating-count">(${product.reviewsCount})</span>
            <span class="stock-badge ${stockInfo.statusClass}" style="margin-right: auto; font-size: 0.72rem;">${stockInfo.badgeLabel}</span>
          </div>

          <div class="product-bottom-row">
            <div class="product-price-box">
              <div class="current-price">${product.price} <span>جنيه</span></div>
              ${product.oldPrice ? `<div class="old-price">${product.oldPrice} جنيه</div>` : ''}
            </div>
            <button class="btn-add-cart" onclick="app.addToCart('${product.id}')" ${stockInfo.currentStock <= 0 ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''} title="إضافة للسلة">
              <i class="fa-solid fa-cart-plus"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================
  // 6. PRODUCT MODAL & QUICK VIEW
  // ==========================================
  openProductModal(productId) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    const stockInfo = this.getProductStock(product);
    const modal = document.getElementById('productDetailModal');
    const content = document.getElementById('productModalBody');
    if (!modal || !content) return;

    const discountPercent = product.oldPrice > product.price 
      ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
      : null;

    content.innerHTML = `
      <div class="product-modal-grid">
        <div class="product-modal-gallery">
          <img src="${product.image}" alt="${product.name}" class="product-modal-main-img">
        </div>
        <div class="product-modal-info">
          <span class="product-category">${product.categoryName}</span>
          <h2>${product.name}</h2>
          
          <div class="product-modal-meta">
            <div class="stars" style="color: #F59E0B;">
              ${'<i class="fa-solid fa-star"></i>'.repeat(Math.floor(product.rating))}
              <span style="color: var(--text-main); font-weight: 700; margin-right: 6px;">${product.rating}</span>
            </div>
            <span class="rating-count">(${product.reviewsCount} تقييم من العملاء)</span>
            <span class="stock-badge ${stockInfo.statusClass}">${stockInfo.badgeLabel}</span>
          </div>

          <div class="product-modal-price">
            ${product.price} <span style="font-size: 1rem; font-weight: 600;">جنيه مصري</span>
            ${product.oldPrice ? `<span class="old-price" style="margin-right: 12px; font-size: 1.1rem;">${product.oldPrice} جنيه</span>` : ''}
            ${discountPercent ? `<span class="product-badge discount" style="font-size: 0.8rem; margin-right: 8px;">وفر ${discountPercent}%</span>` : ''}
          </div>

          <p class="product-modal-desc">${product.description}</p>

          <div class="product-info-tabs">
            <h4><i class="fa-solid fa-flask" style="color: var(--primary);"></i> أهم المكونات الفعالة:</h4>
            <p style="color: var(--text-muted); margin-bottom: 12px;">${product.ingredients || 'مستخلصات طبيعية معتمدة عالية النقاء.'}</p>
            <h4><i class="fa-solid fa-hand-sparkles" style="color: var(--primary);"></i> طريقة الاستخدام:</h4>
            <p style="color: var(--text-muted);">${product.usage || 'يطبق بلطف حسب الإرشادات المرفقة مع العبوة.'}</p>
          </div>

          <div class="product-modal-actions">
            <div class="cart-qty-control" style="height: 46px;">
              <button class="qty-btn" onclick="app.adjustModalQty(-1)">-</button>
              <span class="qty-num" id="modalQtyVal" style="font-size: 1rem; padding: 0 16px;">1</span>
              <button class="qty-btn" onclick="app.adjustModalQty(1)">+</button>
            </div>
            <button class="btn-hero-primary" style="flex: 1; padding: 12px 24px;" onclick="app.addModalProductToCart('${product.id}')" ${stockInfo.currentStock <= 0 ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''}>
              <i class="fa-solid fa-bag-shopping"></i> ${stockInfo.currentStock > 0 ? 'إضافة إلى السلة' : 'غير متوفر حالياً'}
            </button>
          </div>
        </div>
      </div>
    `;

    this.modalQty = 1;
    modal.classList.add('open');
  }

  adjustModalQty(delta) {
    this.modalQty = Math.max(1, (this.modalQty || 1) + delta);
    const el = document.getElementById('modalQtyVal');
    if (el) el.innerText = this.modalQty;
  }

  addModalProductToCart(productId) {
    this.addToCart(productId, this.modalQty || 1);
    this.closeModals();
  }

  closeModals() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
  }

  // ==========================================
  // 7. CART SYSTEM & FREE SHIPPING BAR
  // ==========================================
  addToCart(productId, qty = 1) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    const stockInfo = this.getProductStock(product);
    if (stockInfo.currentStock <= 0) {
      this.showToast('عذراً، هذا المنتج غير متوفر في المخزن حالياً', 'danger');
      return;
    }

    const existingIndex = this.cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
      if (this.cart[existingIndex].qty + qty > stockInfo.currentStock) {
        this.showToast(`عفواً، الكمية المتاحة في المخزن هي ${stockInfo.currentStock} قطع فقط`, 'warning');
        return;
      }
      this.cart[existingIndex].qty += qty;
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        costPrice: product.costPrice,
        image: product.image,
        qty: qty
      });
    }

    this.saveState('doon_cart', this.cart);
    this.renderCart();
    this.updateCartBadge();
    this.showToast(`تمت إضافة "${product.name}" إلى السلة بنجاح`, 'success');
    this.openCartDrawer();
  }

  updateCartQty(productId, delta) {
    const item = this.cart.find(i => i.id === productId);
    if (!item) return;

    const product = this.products.find(p => p.id === productId);
    const stockInfo = product ? this.getProductStock(product) : { currentStock: 999 };

    if (delta > 0 && item.qty >= stockInfo.currentStock) {
      this.showToast(`الحد الأقصى المتاح بالمخزن هو ${stockInfo.currentStock} قطع`, 'warning');
      return;
    }

    item.qty += delta;
    if (item.qty <= 0) {
      this.cart = this.cart.filter(i => i.id !== productId);
    }

    this.saveState('doon_cart', this.cart);
    this.renderCart();
    this.updateCartBadge();
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(i => i.id !== productId);
    this.saveState('doon_cart', this.cart);
    this.renderCart();
    this.updateCartBadge();
    this.showToast('تم حذف المنتج من السلة', 'info');
  }

  renderCart() {
    const listContainer = document.getElementById('cartItemsList');
    const subtotalEl = document.getElementById('cartSubtotal');
    const totalEl = document.getElementById('cartTotal');
    const freeShippingText = document.getElementById('freeShippingText');
    const freeShippingBar = document.getElementById('freeShippingProgress');
    if (!listContainer) return;

    if (this.cart.length === 0) {
      listContainer.innerHTML = `
        <div class="cart-empty-state">
          <div class="cart-empty-icon"><i class="fa-solid fa-bag-shopping"></i></div>
          <h4 style="font-weight: 700; margin-bottom: 6px;">سلة التسوق فارغة</h4>
          <p style="font-size: 0.85rem;">استكشفي أحدث مستحضرات التجميل وأضيفي منتجاتك المفضلة</p>
          <button class="btn-hero-primary" style="margin-top: 18px; padding: 8px 20px; font-size: 0.85rem;" onclick="app.closeCartDrawer()">تصفح المنتجات</button>
        </div>
      `;
      if (subtotalEl) subtotalEl.innerText = '0 جنيه';
      if (totalEl) totalEl.innerText = '0 جنيه';
      if (freeShippingBar) freeShippingBar.style.width = '0%';
      return;
    }

    listContainer.innerHTML = this.cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.name}</h4>
          <div class="cart-item-price">${item.price} جنيه</div>
          <div class="cart-qty-control">
            <button class="qty-btn" onclick="app.updateCartQty('${item.id}', -1)">-</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="app.updateCartQty('${item.id}', 1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="app.removeFromCart('${item.id}')" title="حذف">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `).join('');

    const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    let discount = 0;
    if (this.appliedCoupon) {
      discount = Math.round(subtotal * this.appliedCoupon.rate);
    }
    const finalTotal = Math.max(0, subtotal - discount);

    if (subtotalEl) subtotalEl.innerText = `${subtotal} جنيه`;
    if (totalEl) totalEl.innerText = `${finalTotal} جنيه`;

    // Free Shipping threshold (500 EGP)
    const threshold = 500;
    const progressPercent = Math.min(100, Math.round((subtotal / threshold) * 100));
    if (freeShippingBar) freeShippingBar.style.width = `${progressPercent}%`;
    if (freeShippingText) {
      if (subtotal >= threshold) {
        freeShippingText.innerHTML = `🎉 مبروك! حصلت على <strong>شحن مجاني</strong> لكافة المحافظات!`;
      } else {
        const remaining = threshold - subtotal;
        freeShippingText.innerHTML = `أضف بقيمة <strong>${remaining} جنيه</strong> للحصول على <strong>شحن مجاني</strong>!`;
      }
    }
  }

  applyCoupon() {
    const input = document.getElementById('couponInput');
    if (!input) return;
    const code = input.value.trim().toUpperCase();

    if (code === 'DOON20') {
      this.appliedCoupon = { code: 'DOON20', rate: 0.20 };
      this.showToast('تم تطبيق خصم 20% بنجاح!', 'success');
      this.renderCart();
    } else if (code === 'DOON10' || code === 'WELCOME10') {
      this.appliedCoupon = { code: code, rate: 0.10 };
      this.showToast('تم تطبيق خصم 10% بنجاح!', 'success');
      this.renderCart();
    } else {
      this.showToast('كود الخصم غير صالح أو منتهي الصلاحية', 'danger');
    }
  }

  updateCartBadge() {
    const count = this.cart.reduce((sum, i) => sum + i.qty, 0);
    const badges = document.querySelectorAll('.cart-badge-count');
    badges.forEach(b => {
      b.innerText = count;
      b.style.display = count > 0 ? 'flex' : 'none';
    });
  }

  toggleWishlist(productId) {
    if (this.wishlist.includes(productId)) {
      this.wishlist = this.wishlist.filter(id => id !== productId);
      this.showToast('تمت إزالة المنتج من المفضلة', 'info');
    } else {
      this.wishlist.push(productId);
      this.showToast('تمت إضافة المنتج إلى المفضلة ❤️', 'success');
    }
    this.saveState('doon_wishlist', this.wishlist);
    this.updateWishlistBadge();
    this.renderStore();
  }

  updateWishlistBadge() {
    const badges = document.querySelectorAll('.wishlist-badge-count');
    badges.forEach(b => {
      b.innerText = this.wishlist.length;
      b.style.display = this.wishlist.length > 0 ? 'flex' : 'none';
    });
  }

  openCartDrawer() {
    const overlay = document.getElementById('cartDrawerOverlay');
    if (overlay) overlay.classList.add('open');
  }

  closeCartDrawer() {
    const overlay = document.getElementById('cartDrawerOverlay');
    if (overlay) overlay.classList.remove('open');
  }

  // ==========================================
  // 8. CHECKOUT PROCESS & GOVERNORATES
  // ==========================================
  openCheckoutModal() {
    if (this.cart.length === 0) {
      this.showToast('سلة المشتريات فارغة!', 'warning');
      return;
    }
    this.closeCartDrawer();

    const modal = document.getElementById('checkoutModal');
    const govSelect = document.getElementById('checkoutGovernorate');
    if (govSelect) {
      govSelect.innerHTML = `
        <option value="">-- اختر المحافظة --</option>
        ${this.governorates.map(g => `<option value="${g.id}">${g.name} (شحن ${g.fee} جنيه)</option>`).join('')}
      `;
    }

    this.updateCheckoutSummary();
    if (modal) modal.classList.add('open');
  }

  updateCheckoutSummary() {
    const govSelect = document.getElementById('checkoutGovernorate');
    const itemsTotal = this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    
    let discount = 0;
    if (this.appliedCoupon) {
      discount = Math.round(itemsTotal * this.appliedCoupon.rate);
    }

    let shippingFee = 50;
    if (govSelect && govSelect.value) {
      const foundGov = this.governorates.find(g => g.id === govSelect.value);
      if (foundGov) shippingFee = foundGov.fee;
    }

    if (itemsTotal >= 500) {
      shippingFee = 0;
    }

    const grandTotal = Math.max(0, itemsTotal - discount) + shippingFee;

    const subEl = document.getElementById('checkoutSubtotal');
    const shipEl = document.getElementById('checkoutShipping');
    const discEl = document.getElementById('checkoutDiscount');
    const totalEl = document.getElementById('checkoutGrandTotal');
    const itemsList = document.getElementById('checkoutItemsPreview');

    if (subEl) subEl.innerText = `${itemsTotal} جنيه`;
    if (shipEl) shipEl.innerText = shippingFee === 0 ? 'مجاناً 🎁' : `${shippingFee} جنيه`;
    if (discEl) discEl.innerText = discount > 0 ? `-${discount} جنيه` : '0 جنيه';
    if (totalEl) totalEl.innerText = `${grandTotal} جنيه`;

    if (itemsList) {
      itemsList.innerHTML = this.cart.map(item => `
        <div class="summary-product-item">
          <img src="${item.image}" style="width: 36px; height: 36px; border-radius: 6px; object-fit: cover;">
          <div style="flex: 1; font-weight: 600;">${item.name} <span style="color: var(--text-muted);">x${item.qty}</span></div>
          <div style="font-weight: 700; color: var(--primary);">${item.price * item.qty} ج.م</div>
        </div>
      `).join('');
    }
  }

  submitOrder(e) {
    if (e) e.preventDefault();

    const name = document.getElementById('custName')?.value.trim();
    const phone = document.getElementById('custPhone')?.value.trim();
    const govId = document.getElementById('checkoutGovernorate')?.value;
    const address = document.getElementById('custAddress')?.value.trim();
    const notes = document.getElementById('custNotes')?.value.trim() || '';
    const paymentMethod = document.querySelector('input[name="payMethod"]:checked')?.value || 'COD';

    if (!name || !phone || !govId || !address) {
      this.showToast('يرجى ملء جميع الحقول المطلوبة (الاسم، الهاتف، المحافظة، العنوان)', 'danger');
      return;
    }

    const gov = this.governorates.find(g => g.id === govId) || { name: 'القاهرة', fee: 50 };
    const itemsTotal = this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const discount = this.appliedCoupon ? Math.round(itemsTotal * this.appliedCoupon.rate) : 0;
    const shippingFee = itemsTotal >= 500 ? 0 : gov.fee;
    const grandTotal = Math.max(0, itemsTotal - discount) + shippingFee;

    const orderId = 'DOON-' + Math.floor(1000 + Math.random() * 9000);
    const now = new Date();
    const dateStr = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;

    const newOrder = {
      id: orderId,
      customerName: name,
      phone: phone,
      governorate: gov.name,
      address: address,
      items: JSON.parse(JSON.stringify(this.cart)),
      itemsTotal: itemsTotal,
      shippingFee: shippingFee,
      discountAmount: discount,
      total: grandTotal,
      paymentMethod: paymentMethod,
      paymentStatus: paymentMethod === 'Online' ? 'مدفوع إلكترونياً (Visa)' : 'مستحق التحصيل (عند الاستلام)',
      status: 'Pending',
      statusArabic: 'قيد المراجعة والتأكيد',
      createdAt: dateStr,
      notes: notes
    };

    // Deduct stock
    this.cart.forEach(cartItem => {
      const prod = this.products.find(p => p.id === cartItem.id);
      if (prod) {
        prod.salesStock = (prod.salesStock || 0) + cartItem.qty;
      }
    });
    this.saveState('doon_products', this.products);

    // Save order
    this.orders.unshift(newOrder);
    this.saveState('doon_orders', this.orders);

    // Log Audit
    this.logAudit('إنشاء طلب شراء جديد من المتجر', `طلب #${orderId} للعميل ${name}`, '-', `${grandTotal} جنيه`);

    // Reset Cart
    this.cart = [];
    this.appliedCoupon = null;
    this.saveState('doon_cart', this.cart);
    this.renderCart();
    this.updateCartBadge();
    this.closeModals();

    this.showOrderSuccessModal(newOrder);
  }

  showOrderSuccessModal(order) {
    const modal = document.getElementById('orderSuccessModal');
    const content = document.getElementById('orderSuccessBody');
    if (!modal || !content) return;

    content.innerHTML = `
      <div style="text-align: center; padding: 20px;">
        <div style="width: 70px; height: 70px; background: var(--success-bg); color: var(--success); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.2rem; margin: 0 auto 16px;">
          <i class="fa-solid fa-check"></i>
        </div>
        <h2 style="font-size: 1.6rem; font-weight: 900; color: var(--secondary); margin-bottom: 6px;">تم تأكيد طلبك بنجاح!</h2>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 20px;">شكراً لثقتك في منتجات DOON. رقم طلبك هو:</p>
        
        <div style="background: var(--primary-50); border: 2px dashed var(--primary); padding: 12px 24px; border-radius: var(--radius-md); font-size: 1.4rem; font-weight: 900; color: var(--primary); display: inline-block; margin-bottom: 24px;">
          #${order.id}
        </div>

        <div style="background: var(--bg-subtle); border-radius: var(--radius-md); padding: 16px; text-align: right; font-size: 0.88rem; margin-bottom: 24px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 6px;"><span>اسم المستلم:</span><strong>${order.customerName}</strong></div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 6px;"><span>رقم الهاتف:</span><strong>${order.phone}</strong></div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 6px;"><span>عنوان التوصيل:</span><strong>${order.governorate} - ${order.address}</strong></div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 6px;"><span>طريقة الدفع:</span><strong>${order.paymentMethod === 'Online' ? 'بطاقة بنكية (مدفوع)' : 'الدفع عند الاستلام'}</strong></div>
          <div style="display: flex; justify-content: space-between; font-weight: 800; color: var(--primary); border-top: 1px dashed var(--border-light); padding-top: 8px; margin-top: 8px;">
            <span>المبلغ الإجمالي:</span><span>${order.total} جنيه</span>
          </div>
        </div>

        <div style="display: flex; gap: 12px; justify-content: center;">
          <button class="btn-hero-primary" onclick="app.openTrackOrder('${order.id}')">
            <i class="fa-solid fa-route"></i> تتبع حالة الشحنة الآن
          </button>
          <button class="btn-hero-secondary" style="color: var(--secondary); border-color: var(--border-light);" onclick="app.closeModals()">
            العودة للمتجر
          </button>
        </div>
      </div>
    `;

    modal.classList.add('open');
  }

  // ==========================================
  // 9. TRACK ORDER SYSTEM
  // ==========================================
  openTrackOrder(orderId = '') {
    this.closeModals();
    const modal = document.getElementById('trackOrderModal');
    const input = document.getElementById('trackOrderInput');
    if (input && orderId) input.value = orderId;
    if (orderId) this.performOrderTrack(orderId);
    if (modal) modal.classList.add('open');
  }

  performOrderTrack(overrideId) {
    const input = document.getElementById('trackOrderInput');
    const q = (overrideId || input?.value || '').trim();
    const resultBox = document.getElementById('trackResultBox');
    if (!resultBox) return;

    if (!q) {
      this.showToast('يرجى كتابة رقم الطلب أو رقم الهاتف', 'warning');
      return;
    }

    const cleanQ = q.replace('#', '').toUpperCase();
    const order = this.orders.find(o => o.id.toUpperCase() === cleanQ || o.id.toUpperCase() === 'DOON-' + cleanQ || o.phone === q);

    if (!order) {
      resultBox.innerHTML = `
        <div style="text-align: center; padding: 30px; color: var(--text-muted);">
          <i class="fa-solid fa-circle-exclamation" style="font-size: 2.5rem; color: var(--danger); margin-bottom: 10px;"></i>
          <h4>لم نتمكن من العثور على طلب برقم (${q})</h4>
          <p style="font-size: 0.85rem;">يرجى التأكد من كتابة رقم الطلب بشكل صحيح (مثال: DOON-8041)</p>
        </div>
      `;
      return;
    }

    const statusMap = {
      'Pending': 1,
      'Confirmed': 1,
      'Preparing': 2,
      'Picked Up': 3,
      'Out for Delivery': 4,
      'Delivered': 5,
      'Returned': -1
    };

    const currentStep = statusMap[order.status] || 1;
    const progressWidth = currentStep > 0 ? ((currentStep - 1) / 4) * 100 : 0;

    resultBox.innerHTML = `
      <div style="background: var(--bg-warm); border: 1px solid #FFE6D6; border-radius: var(--radius-lg); padding: 20px; margin-top: 18px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 10px;">
          <div>
            <span style="font-size: 0.8rem; color: var(--text-muted);">رقم الشحنة</span>
            <h3 style="color: var(--primary); font-weight: 900; font-size: 1.3rem;">#${order.id}</h3>
          </div>
          <div style="text-align: left;">
            <span class="status-pill ${order.status === 'Delivered' ? 'success' : (order.status === 'Returned' ? 'danger' : 'warning')}">
              ${order.statusArabic || order.status}
            </span>
            <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">تاريخ الطلب: ${order.createdAt}</div>
          </div>
        </div>

        <div class="tracking-timeline">
          <div class="timeline-progress-bar" style="width: ${progressWidth}%;"></div>
          
          <div class="timeline-step ${currentStep >= 1 ? 'completed' : ''} ${currentStep === 1 ? 'active' : ''}">
            <div class="timeline-icon"><i class="fa-solid fa-file-lines"></i></div>
            <div class="timeline-title">تم التأكيد</div>
          </div>

          <div class="timeline-step ${currentStep >= 2 ? 'completed' : ''} ${currentStep === 2 ? 'active' : ''}">
            <div class="timeline-icon"><i class="fa-solid fa-boxes-packing"></i></div>
            <div class="timeline-title">تجهيز المخزن</div>
          </div>

          <div class="timeline-step ${currentStep >= 3 ? 'completed' : ''} ${currentStep === 3 ? 'active' : ''}">
            <div class="timeline-icon"><i class="fa-solid fa-truck-ramp-box"></i></div>
            <div class="timeline-title">استلام الشحن</div>
          </div>

          <div class="timeline-step ${currentStep >= 4 ? 'completed' : ''} ${currentStep === 4 ? 'active' : ''}">
            <div class="timeline-icon"><i class="fa-solid fa-truck-fast"></i></div>
            <div class="timeline-title">جاري التوصيل</div>
          </div>

          <div class="timeline-step ${currentStep >= 5 ? 'completed' : ''} ${currentStep === 5 ? 'active' : ''}">
            <div class="timeline-icon"><i class="fa-solid fa-circle-check"></i></div>
            <div class="timeline-title">تم التسليم</div>
          </div>
        </div>

        <div style="background: #FFF; border-radius: var(--radius-md); padding: 14px; margin-top: 20px; font-size: 0.85rem;">
          <div style="margin-bottom: 6px;"><strong>عنوان التوصيل:</strong> ${order.governorate} - ${order.address}</div>
          <div style="margin-bottom: 6px;"><strong>بيانات المستلم:</strong> ${order.customerName} (${order.phone})</div>
          <div><strong>إجمالي المطلوب تحصيله:</strong> <span style="color: var(--primary); font-weight: 800;">${order.total} جنيه</span> (${order.paymentMethod === 'Online' ? 'مدفوع إلكترونياً' : 'دفع عند الاستلام'})</div>
        </div>
      </div>
    `;
  }

  // ==========================================
  // 10. ROLE SWITCHER & MANAGEMENT ERP
  // ==========================================
  switchRole(role) {
    this.currentRole = role;

    document.querySelectorAll('.role-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.role === role);
    });

    const storeView = document.getElementById('storefrontView');
    const erpView = document.getElementById('erpView');
    const portalView = document.getElementById('customerPortalView');

    if (role === 'customer') {
      if (storeView) storeView.style.display = 'block';
      if (erpView) erpView.style.display = 'none';
      if (portalView) portalView.style.display = 'none';
      this.renderStore();
    } else if (role === 'portal') {
      if (storeView) storeView.style.display = 'none';
      if (erpView) erpView.style.display = 'none';
      if (portalView) portalView.style.display = 'block';
      this.renderCustomerPortal();
    } else {
      if (storeView) storeView.style.display = 'none';
      if (portalView) portalView.style.display = 'none';
      if (erpView) erpView.style.display = 'block';
      this.renderERPView(role);
    }

    this.showToast(`تم التبديل إلى واجهة: ${this.getRoleArabicName(role)}`, 'info');
  }

  getRoleArabicName(role) {
    const map = {
      'customer': 'متجر العميل (Store)',
      'portal': 'بوابة العميل (My Account)',
      'admin': 'صاحب الشركة (Admin)',
      'warehouse': 'مسؤول المخازن (Warehouse)',
      'shipping': 'شركة الشحن (Logistics)',
      'accountant': 'المحاسب المالي (Accounting)',
      'hr': 'الموارد البشرية (HR)'
    };
    return map[role] || role;
  }

  renderERPView(role) {
    const roleTag = document.getElementById('erpRoleTag');
    const contentArea = document.getElementById('erpDynamicContent');

    if (roleTag) roleTag.innerText = this.getRoleArabicName(role);
    if (!contentArea) return;

    if (role === 'admin') {
      this.renderAdminDashboard(contentArea);
    } else if (role === 'warehouse') {
      this.renderWarehouseDashboard(contentArea);
    } else if (role === 'shipping') {
      this.renderShippingDashboard(contentArea);
    } else if (role === 'accountant') {
      this.renderAccountantDashboard(contentArea);
    } else if (role === 'hr') {
      this.renderHRDashboard(contentArea);
    }
  }

  // --- A. ADMIN DASHBOARD ---
  renderAdminDashboard(container) {
    const totalOrders = this.orders.length;
    const totalRevenue = this.orders.reduce((sum, o) => sum + (o.total || 0), 0);
    const totalCOGS = this.orders.reduce((sum, o) => {
      return sum + (o.items || []).reduce((iSum, i) => iSum + ((i.costPrice || 0) * (i.qty || 1)), 0);
    }, 0);
    const totalExpenses = this.expenses.reduce((sum, e) => sum + (e.amount || 0), 0);
    const netProfit = totalRevenue - totalCOGS - totalExpenses;

    const lowStockCount = this.products.filter(p => {
      const stock = this.getProductStock(p);
      return stock.currentStock <= stock.minStock;
    }).length;

    container.innerHTML = `
      <div class="kpi-grid">
        <div class="kpi-card">
          <div class="kpi-icon"><i class="fa-solid fa-coins"></i></div>
          <div class="kpi-info">
            <h4>إجمالي الإيرادات (Revenue)</h4>
            <div class="kpi-value">${totalRevenue.toLocaleString()} <span style="font-size: 0.9rem;">ج.م</span></div>
            <div class="kpi-trend positive"><i class="fa-solid fa-arrow-trend-up"></i> شامل المبيعات والشحن</div>
          </div>
        </div>

        <div class="kpi-card">
          <div class="kpi-icon" style="background: var(--success-bg); color: var(--success);"><i class="fa-solid fa-chart-pie"></i></div>
          <div class="kpi-info">
            <h4>صافي الأرباح الحقيقي (Net Profit)</h4>
            <div class="kpi-value" style="color: var(--success);">${netProfit.toLocaleString()} <span style="font-size: 0.9rem;">ج.م</span></div>
            <div class="kpi-trend positive"><i class="fa-solid fa-check"></i> بعد خصم التكاليف والمصروفات</div>
          </div>
        </div>

        <div class="kpi-card">
          <div class="kpi-icon" style="background: var(--info-bg); color: var(--info);"><i class="fa-solid fa-cart-flatbed"></i></div>
          <div class="kpi-info">
            <h4>إجمالي الطلبات (Orders)</h4>
            <div class="kpi-value">${totalOrders}</div>
            <div class="kpi-trend positive"><i class="fa-solid fa-clock"></i> تم تنفيذها بنجاح</div>
          </div>
        </div>

        <div class="kpi-card">
          <div class="kpi-icon" style="background: var(--danger-bg); color: var(--danger);"><i class="fa-solid fa-triangle-exclamation"></i></div>
          <div class="kpi-info">
            <h4>تنبيهات المخزون الحرج</h4>
            <div class="kpi-value" style="color: var(--danger);">${lowStockCount} منتجات</div>
            <div class="kpi-trend negative"><i class="fa-solid fa-bell"></i> تتطلب إعادة طلب فوري</div>
          </div>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 10px;">
        <h3 style="font-size: 1.25rem; font-weight: 800;"><i class="fa-solid fa-list-check" style="color: var(--primary);"></i> إدارة المنتجات والتسعير وهامش الربح</h3>
        <div style="display: flex; gap: 10px;">
          <button class="btn-excel" onclick="app.exportToExcel('sales')"><i class="fa-solid fa-file-excel"></i> تصدير تقرير المبيعات Excel</button>
          <button class="btn-excel" onclick="app.exportToExcel('profit')"><i class="fa-solid fa-file-invoice-dollar"></i> تقرير الأرباح والخسائر Excel</button>
          <button class="btn-action-sm primary" onclick="app.openAddProductModal()"><i class="fa-solid fa-plus"></i> إضافة منتج جديد</button>
        </div>
      </div>

      <div class="erp-card">
        <div class="table-responsive">
          <table class="erp-table">
            <thead>
              <tr>
                <th>المنتج</th>
                <th>القسم</th>
                <th>سعر التكلفة</th>
                <th>سعر البيع</th>
                <th>نسبة الربح</th>
                <th>صافي ربح القطعة</th>
                <th>المخزون الحالي</th>
                <th>الحالة</th>
                <th>الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              ${this.products.map(p => {
                const stock = this.getProductStock(p);
                const unitProfit = p.price - p.costPrice;
                const profitRate = p.costPrice > 0 ? Math.round((unitProfit / p.costPrice) * 100) : 0;
                return `
                  <tr>
                    <td>
                      <div style="display: flex; align-items: center; gap: 10px;">
                        <img src="${p.image}" style="width: 40px; height: 40px; border-radius: 6px; object-fit: cover;">
                        <strong>${p.name}</strong>
                      </div>
                    </td>
                    <td>${p.categoryName}</td>
                    <td><strong>${p.costPrice} ج.م</strong></td>
                    <td style="color: var(--primary); font-weight: 800;">${p.price} ج.م</td>
                    <td><span class="status-pill info">${profitRate}%</span></td>
                    <td style="color: var(--success); font-weight: 700;">+${unitProfit} ج.م</td>
                    <td><strong>${stock.currentStock}</strong></td>
                    <td><span class="stock-badge ${stock.statusClass}">${stock.badgeLabel}</span></td>
                    <td>
                      <button class="btn-action-sm" onclick="app.openEditPriceModal('${p.id}')"><i class="fa-solid fa-pen-to-square"></i> تسعير</button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div class="erp-card">
        <div class="erp-card-header">
          <div class="erp-card-title"><i class="fa-solid fa-clipboard-list" style="color: var(--primary);"></i> سجل العمليات والتدقيق الأخير (Audit Log)</div>
          <button class="btn-action-sm" onclick="app.exportToExcel('audit')"><i class="fa-solid fa-file-excel"></i> تصدير السجل</button>
        </div>
        <div class="table-responsive">
          <table class="erp-table">
            <thead>
              <tr>
                <th>المستخدم</th>
                <th>نوع العملية</th>
                <th>العنصر المتأثر</th>
                <th>القيمة القديمة</th>
                <th>القيمة الجديدة</th>
                <th>التاريخ والوقت</th>
              </tr>
            </thead>
            <tbody>
              ${this.auditLogs.slice(0, 6).map(log => `
                <tr>
                  <td><strong>${log.user}</strong></td>
                  <td>${log.action}</td>
                  <td>${log.target}</td>
                  <td style="color: var(--text-muted);">${log.oldValue}</td>
                  <td style="color: var(--success); font-weight: 700;">${log.newValue}</td>
                  <td style="font-size: 0.8rem; color: var(--text-light);">${log.timestamp}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // --- B. WAREHOUSE DASHBOARD ---
  renderWarehouseDashboard(container) {
    container.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 10px;">
        <div>
          <h3 style="font-size: 1.3rem; font-weight: 900;"><i class="fa-solid fa-warehouse" style="color: var(--primary);"></i> نظام إدارة المخازن والجرد والتنبؤ بالنفاد</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 2px;">معادلة الجرد: <strong>رصيد أول المدة + الوارد - المبيعات - التالف + المرتجعات = الرصيد الحالي</strong></p>
        </div>
        <div style="display: flex; gap: 10px;">
          <button class="btn-excel" onclick="app.exportToExcel('inventory')"><i class="fa-solid fa-file-excel"></i> تصدير تقرير المخزون والجرد Excel</button>
          <button class="btn-action-sm primary" onclick="app.openAddStockBatchModal()"><i class="fa-solid fa-plus"></i> إضافة دفعة وارد جديدة</button>
          <button class="btn-action-sm" onclick="app.openRecordDamagedModal()"><i class="fa-solid fa-trash-can"></i> تسجيل بضاعة تالفة</button>
        </div>
      </div>

      <div class="erp-card">
        <div class="table-responsive">
          <table class="erp-table">
            <thead>
              <tr>
                <th>المنتج</th>
                <th>أول المدة</th>
                <th>الوارد (+)</th>
                <th>المبيعات (-)</th>
                <th>التالف (-)</th>
                <th>المرتجع (+)</th>
                <th>الرصيد الحالي</th>
                <th>الحد الأدنى</th>
                <th>معدل البيع/يوم</th>
                <th>الأيام المتبقية</th>
                <th>حالة التنبيه</th>
              </tr>
            </thead>
            <tbody>
              ${this.products.map(p => {
                const stock = this.getProductStock(p);
                const isCritical = stock.currentStock <= stock.minStock;
                return `
                  <tr style="${isCritical ? 'background: #FFF5F5;' : ''}">
                    <td>
                      <div style="display: flex; align-items: center; gap: 10px;">
                        <img src="${p.image}" style="width: 36px; height: 36px; border-radius: 6px; object-fit: cover;">
                        <div>
                          <strong>${p.name}</strong>
                          <div style="font-size: 0.75rem; color: var(--text-muted);">${p.categoryName}</div>
                        </div>
                      </div>
                    </td>
                    <td>${p.initialStock || 0}</td>
                    <td style="color: var(--success); font-weight: 700;">+${p.incomingStock || 0}</td>
                    <td style="color: var(--danger); font-weight: 700;">-${p.salesStock || 0}</td>
                    <td style="color: #9333EA;">-${p.damagedStock || 0}</td>
                    <td style="color: var(--info);">+${p.returnedStock || 0}</td>
                    <td style="font-size: 1.1rem; font-weight: 900; color: ${isCritical ? 'var(--danger)' : 'var(--secondary)'};">${stock.currentStock}</td>
                    <td>${stock.minStock}</td>
                    <td>${stock.avgDailySales} قطعة/يوم</td>
                    <td>
                      <span class="status-pill ${stock.daysRemaining <= 5 ? 'danger' : 'info'}">
                        ${stock.daysRemaining > 0 ? `${stock.daysRemaining} يوم` : 'منتهي'}
                      </span>
                    </td>
                    <td><span class="stock-badge ${stock.statusClass}">${stock.badgeLabel}</span></td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // --- C. SHIPPING LOGISTICS DASHBOARD ---
  renderShippingDashboard(container) {
    container.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 10px;">
        <div>
          <h3 style="font-size: 1.3rem; font-weight: 900;"><i class="fa-solid fa-truck-fast" style="color: var(--primary);"></i> لوحة شركة الشحن ومتابعة التوصيل والمحافظات</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted);">متابعة الشحنات، تحديث الحالات، وتحصيل مبالغ الدفع عند الاستلام (COD)</p>
        </div>
        <div style="display: flex; gap: 10px;">
          <button class="btn-excel" onclick="app.exportToExcel('orders')"><i class="fa-solid fa-file-excel"></i> تصدير بوالص الشحن Excel</button>
          <button class="btn-action-sm" onclick="app.openEditGovRatesModal()"><i class="fa-solid fa-map-location-dot"></i> جدول أسعار المحافظات</button>
        </div>
      </div>

      <div class="erp-card">
        <div class="table-responsive">
          <table class="erp-table">
            <thead>
              <tr>
                <th>رقم الشحنة</th>
                <th>اسم المستلم</th>
                <th>رقم الهاتف</th>
                <th>المحافظة والعنوان</th>
                <th>مبلغ التحصيل المطلوب</th>
                <th>طريقة الدفع</th>
                <th>حالة الشحنة</th>
                <th>تحديث الحالة</th>
              </tr>
            </thead>
            <tbody>
              ${this.orders.map(order => `
                <tr>
                  <td><strong style="color: var(--primary);">#${order.id}</strong></td>
                  <td><strong>${order.customerName}</strong></td>
                  <td><a href="tel:${order.phone}" style="color: var(--text-main);">${order.phone}</a></td>
                  <td>${order.governorate} - ${order.address}</td>
                  <td style="font-size: 1.05rem; font-weight: 800; color: var(--secondary);">${order.total} ج.م</td>
                  <td>
                    <span class="status-pill ${order.paymentMethod === 'Online' ? 'success' : 'warning'}">
                      ${order.paymentMethod === 'Online' ? '💳 مدفوع فيزا' : '💵 تحصيل COD'}
                    </span>
                  </td>
                  <td>
                    <span class="status-pill ${order.status === 'Delivered' ? 'success' : (order.status === 'Returned' ? 'danger' : 'info')}">
                      ${order.statusArabic || order.status}
                    </span>
                  </td>
                  <td>
                    <select class="form-select" style="padding: 4px 8px; font-size: 0.82rem;" onchange="app.updateOrderStatus('${order.id}', this.value)">
                      <option value="Pending" ${order.status === 'Pending' ? 'selected' : ''}>قيد المراجعة</option>
                      <option value="Preparing" ${order.status === 'Preparing' ? 'selected' : ''}>قيد التجهيز</option>
                      <option value="Picked Up" ${order.status === 'Picked Up' ? 'selected' : ''}>تم الاستلام من المخزن</option>
                      <option value="Out for Delivery" ${order.status === 'Out for Delivery' ? 'selected' : ''}>جاري التوصيل</option>
                      <option value="Delivered" ${order.status === 'Delivered' ? 'selected' : ''}>تم التسليم بنجاح</option>
                      <option value="Returned" ${order.status === 'Returned' ? 'selected' : ''}>مرتجع / فشل التسليم</option>
                    </select>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // --- D. ACCOUNTANT DASHBOARD ---
  renderAccountantDashboard(container) {
    const totalRevenue = this.orders.reduce((sum, o) => sum + (o.total || 0), 0);
    const totalCOGS = this.orders.reduce((sum, o) => {
      return sum + (o.items || []).reduce((iSum, i) => iSum + ((i.costPrice || 0) * (i.qty || 1)), 0);
    }, 0);
    const totalShipping = this.orders.reduce((sum, o) => sum + (o.shippingFee || 0), 0);
    const onlineOrdersTotal = this.orders.filter(o => o.paymentMethod === 'Online').reduce((sum, o) => sum + o.total, 0);
    const paymentGatewayFees = Math.round(onlineOrdersTotal * 0.025);
    const totalExpenses = this.expenses.reduce((sum, e) => sum + (e.amount || 0), 0);
    const returnedOrdersTotal = this.orders.filter(o => o.status === 'Returned').reduce((sum, o) => sum + o.total, 0);

    const netProfit = totalRevenue - totalCOGS - totalShipping - paymentGatewayFees - returnedOrdersTotal - totalExpenses;

    container.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 10px;">
        <div>
          <h3 style="font-size: 1.3rem; font-weight: 900;"><i class="fa-solid fa-calculator" style="color: var(--primary);"></i> لوحة المحاسبة وحساب صافي الربح الحقيقي</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted);">معادلة الأرباح: <strong>صافي الربح = الإيرادات - تكلفة البضاعة - الشحن - عمولة الدفع - المرتجعات - المصروفات</strong></p>
        </div>
        <div style="display: flex; gap: 10px;">
          <button class="btn-excel" onclick="app.exportToExcel('profit')"><i class="fa-solid fa-file-invoice-dollar"></i> تصدير قائمة الدخل والأرباح Excel</button>
          <button class="btn-action-sm primary" onclick="app.openAddExpenseModal()"><i class="fa-solid fa-receipt"></i> إضافة مصروف تشغيلي</button>
        </div>
      </div>

      <div class="kpi-grid" style="grid-template-columns: repeat(3, 1fr);">
        <div class="kpi-card">
          <div class="kpi-icon"><i class="fa-solid fa-money-bill-wave"></i></div>
          <div class="kpi-info">
            <h4>إجمالي المبيعات (Gross Revenue)</h4>
            <div class="kpi-value">${totalRevenue.toLocaleString()} ج.م</div>
          </div>
        </div>

        <div class="kpi-card">
          <div class="kpi-icon" style="background: var(--danger-bg); color: var(--danger);"><i class="fa-solid fa-arrow-down-short-wide"></i></div>
          <div class="kpi-info">
            <h4>تكلفة البضاعة المباعة (COGS)</h4>
            <div class="kpi-value" style="color: var(--danger);">${totalCOGS.toLocaleString()} ج.م</div>
          </div>
        </div>

        <div class="kpi-card">
          <div class="kpi-icon" style="background: var(--success-bg); color: var(--success);"><i class="fa-solid fa-sack-dollar"></i></div>
          <div class="kpi-info">
            <h4>صافي الربح الحقيقي (Net Profit)</h4>
            <div class="kpi-value" style="color: var(--success);">${netProfit.toLocaleString()} ج.م</div>
          </div>
        </div>
      </div>

      <div class="erp-card">
        <div class="erp-card-header">
          <div class="erp-card-title"><i class="fa-solid fa-file-invoice" style="color: var(--primary);"></i> جدول المصروفات التشغيلية والعمومية</div>
          <span style="font-weight: 700; color: var(--danger);">إجمالي المصروفات: ${totalExpenses.toLocaleString()} ج.م</span>
        </div>
        <div class="table-responsive">
          <table class="erp-table">
            <thead>
              <tr>
                <th>بند المصروف</th>
                <th>التصنيف</th>
                <th>المبلغ</th>
                <th>التاريخ</th>
                <th>الإجراء</th>
              </tr>
            </thead>
            <tbody>
              ${this.expenses.map(e => `
                <tr>
                  <td><strong>${e.title}</strong></td>
                  <td><span class="status-pill info">${e.category}</span></td>
                  <td style="color: var(--danger); font-weight: 800;">-${e.amount.toLocaleString()} ج.م</td>
                  <td>${e.date}</td>
                  <td>
                    <button class="btn-action-sm" style="color: var(--danger);" onclick="app.deleteExpense('${e.id}')"><i class="fa-solid fa-trash"></i></button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // --- E. HR MANAGEMENT DASHBOARD ---
  renderHRDashboard(container) {
    const totalPayroll = this.employees.reduce((sum, e) => sum + (e.salary || 0), 0);

    container.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 10px;">
        <div>
          <h3 style="font-size: 1.3rem; font-weight: 900;"><i class="fa-solid fa-users" style="color: var(--primary);"></i> لوحة الموارد البشرية وشؤون الموظفين (HR)</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted);">إدارة الموظفين، الحضور والانصراف، ومسير الرواتب الشهرية</p>
        </div>
        <div style="display: flex; gap: 10px;">
          <button class="btn-excel" onclick="app.exportToExcel('hr')"><i class="fa-solid fa-file-excel"></i> مسير الرواتب الشهرية Excel</button>
          <button class="btn-action-sm primary" onclick="app.openAddEmployeeModal()"><i class="fa-solid fa-user-plus"></i> إضافة موظف جديد</button>
        </div>
      </div>

      <div class="kpi-grid" style="grid-template-columns: repeat(3, 1fr);">
        <div class="kpi-card">
          <div class="kpi-icon"><i class="fa-solid fa-user-tie"></i></div>
          <div class="kpi-info">
            <h4>إجمالي عدد الموظفين</h4>
            <div class="kpi-value">${this.employees.length} موظفين</div>
          </div>
        </div>

        <div class="kpi-card">
          <div class="kpi-icon" style="background: var(--warning-bg); color: var(--warning);"><i class="fa-solid fa-money-check-dollar"></i></div>
          <div class="kpi-info">
            <h4>مسير الرواتب الشهري</h4>
            <div class="kpi-value">${totalPayroll.toLocaleString()} ج.م</div>
          </div>
        </div>

        <div class="kpi-card">
          <div class="kpi-icon" style="background: var(--success-bg); color: var(--success);"><i class="fa-solid fa-user-check"></i></div>
          <div class="kpi-info">
            <h4>متوسط نسبة الالتزام بالحضور</h4>
            <div class="kpi-value" style="color: var(--success);">97.2%</div>
          </div>
        </div>
      </div>

      <div class="erp-card">
        <div class="table-responsive">
          <table class="erp-table">
            <thead>
              <tr>
                <th>كود الموظف</th>
                <th>الاسم الكامل</th>
                <th>المسمى الوظيفي</th>
                <th>القسم</th>
                <th>رقم الهاتف</th>
                <th>الراتب الأساسي</th>
                <th>تاريخ التعيين</th>
                <th>الحالة</th>
              </tr>
            </thead>
            <tbody>
              ${this.employees.map(emp => `
                <tr>
                  <td><strong style="color: var(--primary);">${emp.id}</strong></td>
                  <td><strong>${emp.name}</strong></td>
                  <td>${emp.role}</td>
                  <td><span class="status-pill info">${emp.dept}</span></td>
                  <td>${emp.phone}</td>
                  <td style="font-weight: 800;">${emp.salary.toLocaleString()} ج.م</td>
                  <td>${emp.hireDate}</td>
                  <td><span class="status-pill success">${emp.status}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // ==========================================
  // 11. CUSTOMER PORTAL (My Orders & Profile)
  // ==========================================
  renderCustomerPortal() {
    const container = document.getElementById('portalContentArea');
    if (!container) return;

    if (this.activeCustomerTab === 'orders') {
      container.innerHTML = `
        <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 16px;"><i class="fa-solid fa-box-open" style="color: var(--primary);"></i> طلباتي وسجل الشراء</h3>
        ${this.orders.length === 0 ? `
          <div style="text-align: center; padding: 40px; color: var(--text-muted);">
            <i class="fa-solid fa-bag-shopping" style="font-size: 3rem; color: var(--primary-200); margin-bottom: 10px;"></i>
            <h4>لا توجد طلبات سابقة حتى الآن</h4>
          </div>
        ` : `
          <div style="display: flex; flex-direction: column; gap: 16px;">
            ${this.orders.map(order => `
              <div style="background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 20px; box-shadow: var(--shadow-sm);">
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #F4F4F5; padding-bottom: 12px; margin-bottom: 14px; flex-wrap: wrap; gap: 10px;">
                  <div>
                    <strong style="font-size: 1.1rem; color: var(--primary);">#${order.id}</strong>
                    <span style="font-size: 0.8rem; color: var(--text-muted); margin-right: 10px;">تاريخ الطلب: ${order.createdAt}</span>
                  </div>
                  <span class="status-pill ${order.status === 'Delivered' ? 'success' : 'warning'}">
                    ${order.statusArabic || order.status}
                  </span>
                </div>

                <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 14px;">
                  ${order.items.map(item => `
                    <div style="display: flex; justify-content: space-between; font-size: 0.88rem;">
                      <span>${item.name} <strong style="color: var(--text-muted);">x${item.qty}</strong></span>
                      <strong style="color: var(--primary);">${item.price * item.qty} ج.م</strong>
                    </div>
                  `).join('')}
                </div>

                <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px dashed var(--border-light); padding-top: 12px; flex-wrap: wrap; gap: 10px;">
                  <div style="font-size: 0.95rem;">
                    الإجمالي النهائي: <strong style="color: var(--primary); font-size: 1.15rem;">${order.total} جنيه</strong> (شامل الشحن)
                  </div>
                  <div style="display: flex; gap: 8px;">
                    <button class="btn-action-sm primary" onclick="app.openTrackOrder('${order.id}')"><i class="fa-solid fa-route"></i> تتبع الطلب</button>
                    <button class="btn-action-sm" onclick="app.reorderItems('${order.id}')"><i class="fa-solid fa-arrow-rotate-right"></i> إعادة الطلب</button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      `;
    } else if (this.activeCustomerTab === 'wishlist') {
      const wishlistedProducts = this.products.filter(p => this.wishlist.includes(p.id));
      container.innerHTML = `
        <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 16px;"><i class="fa-solid fa-heart" style="color: #EF4444;"></i> قائمة الرغبات والمفضلة (${wishlistedProducts.length})</h3>
        ${wishlistedProducts.length === 0 ? `
          <div style="text-align: center; padding: 40px; color: var(--text-muted);">
            <i class="fa-solid fa-heart-crack" style="font-size: 3rem; color: var(--primary-200); margin-bottom: 10px;"></i>
            <h4>قائمة المفضلة فارغة</h4>
          </div>
        ` : `
          <div class="products-grid">
            ${wishlistedProducts.map(p => this.buildProductCard(p)).join('')}
          </div>
        `}
      `;
    }
  }

  setPortalTab(tab) {
    this.activeCustomerTab = tab;
    document.querySelectorAll('.portal-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tab);
    });
    this.renderCustomerPortal();
  }

  reorderItems(orderId) {
    const order = this.orders.find(o => o.id === orderId);
    if (!order) return;
    order.items.forEach(item => {
      this.addToCart(item.id, item.qty);
    });
    this.showToast('تمت إضافة جميع منتجات الطلب السابق إلى السلة!', 'success');
    this.openCartDrawer();
  }

  // ==========================================
  // 12. EXCEL EXPORT ENGINE (UTF-8 BOM CSV)
  // ==========================================
  exportToExcel(reportType) {
    let csvContent = '\uFEFF';
    let filename = `DOON_${reportType}_${new Date().toISOString().slice(0,10)}.csv`;

    if (reportType === 'sales') {
      filename = `DOON_Sales_Report_${Date.now()}.csv`;
      csvContent += 'رقم الطلب,اسم العميل,رقم الهاتف,المحافظة,العنوان,قيمة المنتجات,تكلفة الشحن,الخصم,الإجمالي النهائي,طريقة الدفع,حالة الشحنة,تاريخ الطلب\n';
      this.orders.forEach(o => {
        csvContent += `"${o.id}","${o.customerName}","${o.phone}","${o.governorate}","${o.address.replace(/"/g, '""')}",${o.itemsTotal},${o.shippingFee},${o.discountAmount},${o.total},"${o.paymentMethod}","${o.statusArabic || o.status}","${o.createdAt}"\n`;
      });
    } else if (reportType === 'inventory') {
      filename = `DOON_Inventory_Report_${Date.now()}.csv`;
      csvContent += 'كود المنتج,اسم المنتج,القسم,سعر التكلفة,سعر البيع,رصيد أول المدة,الوارد,المبيعات,التالف,المرتجع,الرصيد الحالي,الحد الأدنى,معدل البيع اليومي,الأيام المتبقية,حالة المخزون\n';
      this.products.forEach(p => {
        const s = this.getProductStock(p);
        csvContent += `"${p.id}","${p.name}","${p.categoryName}",${p.costPrice},${p.price},${p.initialStock || 0},${p.incomingStock || 0},${p.salesStock || 0},${p.damagedStock || 0},${p.returnedStock || 0},${s.currentStock},${s.minStock},${s.avgDailySales},${s.daysRemaining},"${s.status}"\n`;
      });
    } else if (reportType === 'profit') {
      filename = `DOON_Profit_Report_${Date.now()}.csv`;
      const totalRevenue = this.orders.reduce((sum, o) => sum + (o.total || 0), 0);
      const totalCOGS = this.orders.reduce((sum, o) => sum + (o.items || []).reduce((is, i) => is + ((i.costPrice || 0) * (i.qty || 1)), 0), 0);
      const totalExpenses = this.expenses.reduce((sum, e) => sum + (e.amount || 0), 0);
      const netProfit = totalRevenue - totalCOGS - totalExpenses;

      csvContent += 'بند الحساب المالي,القيمة بالجنيه المصري (EGP),ملاحظات وتفاصيل\n';
      csvContent += `"إجمالي الإيرادات والمبيعات (Revenue)",${totalRevenue},"إجمالي قيمة الطلبات المحصلة"\n`;
      csvContent += `"تكلفة البضاعة المباعة (COGS)",${totalCOGS},"تكلفة شراء وتصنيع المنتجات المباعة"\n`;
      csvContent += `"المصروفات التشغيلية والعمومية (Expenses)",${totalExpenses},"إيجار وتسويق وتعبئة وخدمات"\n`;
      csvContent += `"صافي الربح الحقيقي (Net Profit)",${netProfit},"صافي الربح الفعلي بعد كافة الخصومات"\n`;
    } else if (reportType === 'orders') {
      filename = `DOON_Shipping_Manifest_${Date.now()}.csv`;
      csvContent += 'رقم الشحنة,المستلم,الهاتف,المحافظة,العنوان,المبلغ المطلوب تحصيله,نوع الدفع,حالة الشحنة\n';
      this.orders.forEach(o => {
        csvContent += `"${o.id}","${o.customerName}","${o.phone}","${o.governorate}","${o.address.replace(/"/g, '""')}",${o.total},"${o.paymentMethod}","${o.statusArabic || o.status}"\n`;
      });
    } else if (reportType === 'hr') {
      filename = `DOON_HR_Payroll_${Date.now()}.csv`;
      csvContent += 'كود الموظف,الاسم الكامل,المسمى الوظيفي,القسم,الهاتف,الراتب الأساسي,تاريخ التعيين,الحالة الوظيفية,نسبة الالتزام\n';
      this.employees.forEach(e => {
        csvContent += `"${e.id}","${e.name}","${e.role}","${e.dept}","${e.phone}",${e.salary},"${e.hireDate}","${e.status}","${e.attendanceRate}%"\n`;
      });
    } else if (reportType === 'audit') {
      filename = `DOON_Audit_Log_${Date.now()}.csv`;
      csvContent += 'كود السجل,المستخدم المسؤول,العملية المنفذة,العنصر المتأثر,القيمة القديمة,القيمة الجديدة,التاريخ والوقت\n';
      this.auditLogs.forEach(l => {
        csvContent += `"${l.id}","${l.user}","${l.action}","${l.target}","${l.oldValue}","${l.newValue}","${l.timestamp}"\n`;
      });
    }

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    this.showToast(`تم تصدير ملف Excel بنجاح (${filename})`, 'success');
    this.logAudit('تصدير تقرير إلى ملف Excel', reportType.toUpperCase(), '-', filename);
  }

  // ==========================================
  // 13. MODALS (Add Product, Pricing, Stock, Expenses)
  // ==========================================
  openAddProductModal() {
    const modal = document.getElementById('addProductModal');
    if (modal) modal.classList.add('open');
  }

  saveNewProduct(e) {
    if (e) e.preventDefault();
    const name = document.getElementById('newProdName')?.value.trim();
    const category = document.getElementById('newProdCategory')?.value;
    const catText = document.getElementById('newProdCategory')?.selectedOptions[0]?.text || 'العناية بالبشرة';
    const cost = parseFloat(document.getElementById('newProdCost')?.value) || 100;
    const price = parseFloat(document.getElementById('newProdPrice')?.value) || 200;
    const stock = parseInt(document.getElementById('newProdStock')?.value, 10) || 50;
    const minStock = parseInt(document.getElementById('newProdMinStock')?.value, 10) || 5;
    const img = document.getElementById('newProdImg')?.value.trim() || 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&auto=format&fit=crop&q=80';
    const desc = document.getElementById('newProdDesc')?.value.trim() || 'مستحضر تجميل فاخر من علامة DOON.';

    if (!name || !price) {
      this.showToast('يرجى كتابة اسم وسعر المنتج', 'danger');
      return;
    }

    const newProd = {
      id: 'doon-custom-' + Date.now(),
      name,
      category,
      categoryName: catText,
      image: img,
      costPrice: cost,
      price,
      oldPrice: Math.round(price * 1.25),
      initialStock: stock,
      incomingStock: 0,
      salesStock: 0,
      damagedStock: 0,
      returnedStock: 0,
      minStock,
      avgDailySales: 2.0,
      rating: 5.0,
      reviewsCount: 1,
      isNew: true,
      isBestSeller: false,
      isFlashOffer: false,
      description: desc,
      ingredients: 'مكونات طبيعية نقية 100%.',
      usage: 'يطبق حسب إرشادات العبوة.'
    };

    this.products.unshift(newProd);
    this.saveState('doon_products', this.products);
    this.logAudit('إضافة منتج جديد للكتالوج', name, '-', `${price} جنيه`);
    this.closeModals();
    this.renderStore();
    this.renderERPView('admin');
    this.showToast('تمت إضافة المنتج الجديد بنجاح!', 'success');
  }

  openEditPriceModal(productId) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    this.editingProductId = productId;
    const modal = document.getElementById('pricingModal');
    const nameEl = document.getElementById('priceModalProdName');
    const costInput = document.getElementById('modalCostPrice');
    const markupInput = document.getElementById('modalMarkupPercent');
    const finalPriceInput = document.getElementById('modalSellingPrice');

    if (nameEl) nameEl.innerText = product.name;
    if (costInput) costInput.value = product.costPrice;
    if (finalPriceInput) finalPriceInput.value = product.price;
    if (markupInput && product.costPrice > 0) {
      markupInput.value = Math.round(((product.price - product.costPrice) / product.costPrice) * 100);
    }

    this.recalculatePrice('markup');
    if (modal) modal.classList.add('open');
  }

  recalculatePrice(trigger) {
    const costInput = document.getElementById('modalCostPrice');
    const markupInput = document.getElementById('modalMarkupPercent');
    const finalPriceInput = document.getElementById('modalSellingPrice');
    const profitEl = document.getElementById('calcProfitPreview');

    const cost = parseFloat(costInput?.value) || 0;
    let markup = parseFloat(markupInput?.value) || 0;
    let price = parseFloat(finalPriceInput?.value) || 0;

    if (trigger === 'markup' || trigger === 'cost') {
      price = Math.round(cost * (1 + markup / 100));
      if (finalPriceInput) finalPriceInput.value = price;
    } else if (trigger === 'price') {
      if (cost > 0) {
        markup = Math.round(((price - cost) / cost) * 100);
        if (markupInput) markupInput.value = markup;
      }
    }

    const profit = price - cost;
    if (profitEl) {
      profitEl.innerHTML = `
        صافي ربح القطعة: <strong style="color: var(--success);">${profit} جنيه</strong> | نسبة الربح على التكلفة: <strong style="color: var(--primary);">${markup}%</strong>
      `;
    }
  }

  savePricingChanges() {
    const product = this.products.find(p => p.id === this.editingProductId);
    if (!product) return;

    const cost = parseFloat(document.getElementById('modalCostPrice')?.value) || product.costPrice;
    const price = parseFloat(document.getElementById('modalSellingPrice')?.value) || product.price;

    const oldPrice = product.price;
    product.costPrice = cost;
    product.price = price;

    this.saveState('doon_products', this.products);
    this.logAudit('تعديل سعر وتكلفة المنتج', product.name, `${oldPrice} جنيه`, `${price} جنيه`);
    this.closeModals();
    this.renderERPView('admin');
    this.renderStore();
    this.showToast('تم تحديث سعر المنتج بنجاح!', 'success');
  }

  updateOrderStatus(orderId, newStatus) {
    const order = this.orders.find(o => o.id === orderId);
    if (!order) return;

    const arabicMap = {
      'Pending': 'قيد المراجعة',
      'Preparing': 'قيد التجهيز بالمخزن',
      'Picked Up': 'تم الاستلام من المخزن',
      'Out for Delivery': 'جاري التوصيل مع المندوب',
      'Delivered': 'تم التسليم بنجاح',
      'Returned': 'مرتجع / فشل التسليم'
    };

    const oldStatus = order.status;
    order.status = newStatus;
    order.statusArabic = arabicMap[newStatus] || newStatus;

    if (newStatus === 'Delivered' && order.paymentMethod === 'COD') {
      order.paymentStatus = 'تم التحصيل نقداً';
    }

    this.saveState('doon_orders', this.orders);
    this.logAudit('تحديث حالة الشحنة والتوصيل', `طلب #${order.id}`, oldStatus, newStatus);
    this.showToast(`تم تحديث حالة الشحنة #${order.id} إلى: ${order.statusArabic}`, 'success');
  }

  openAddStockBatchModal() {
    const modal = document.getElementById('addStockBatchModal');
    const select = document.getElementById('batchProductSelect');
    if (select) {
      select.innerHTML = this.products.map(p => `<option value="${p.id}">${p.name} (المخزون الحالي: ${this.getProductStock(p).currentStock})</option>`).join('');
    }
    if (modal) modal.classList.add('open');
  }

  saveStockBatch(e) {
    if (e) e.preventDefault();
    const prodId = document.getElementById('batchProductSelect')?.value;
    const qty = parseInt(document.getElementById('batchQty')?.value, 10) || 0;
    const supplier = document.getElementById('batchSupplier')?.value.trim() || 'المصنع الرئيسي';

    const product = this.products.find(p => p.id === prodId);
    if (!product || qty <= 0) return;

    const oldStock = this.getProductStock(product).currentStock;
    product.incomingStock = (product.incomingStock || 0) + qty;

    this.saveState('doon_products', this.products);
    this.logAudit('إضافة دفعة وارد مخزون جديدة', `${product.name} (مورد: ${supplier})`, `${oldStock} قطعة`, `+${qty} قطعة (الإجمالي الجديد: ${oldStock + qty})`);
    this.closeModals();
    this.renderERPView('warehouse');
    this.showToast(`تمت إضافة ${qty} قطعة إلى مخزون ${product.name} بنجاح!`, 'success');
  }

  openAddExpenseModal() {
    const modal = document.getElementById('addExpenseModal');
    if (modal) modal.classList.add('open');
  }

  saveNewExpense(e) {
    if (e) e.preventDefault();
    const title = document.getElementById('expTitle')?.value.trim();
    const category = document.getElementById('expCategory')?.value || 'General';
    const amount = parseFloat(document.getElementById('expAmount')?.value) || 0;

    if (!title || amount <= 0) {
      this.showToast('يرجى ملء تفاصيل المصروف والمبلغ', 'danger');
      return;
    }

    const newExp = {
      id: 'exp-' + Date.now(),
      title,
      category,
      amount,
      date: new Date().toISOString().slice(0,10)
    };

    this.expenses.unshift(newExp);
    this.saveState('doon_expenses', this.expenses);
    this.logAudit('تسجيل مصروف تشغيلي جديد', title, '-', `${amount} جنيه`);
    this.closeModals();
    this.renderERPView('accountant');
    this.showToast('تم تسجيل المصروف بنجاح!', 'success');
  }

  deleteExpense(id) {
    const exp = this.expenses.find(e => e.id === id);
    if (!exp) return;
    this.expenses = this.expenses.filter(e => e.id !== id);
    this.saveState('doon_expenses', this.expenses);
    this.logAudit('حذف مصروف تشغيلي', exp.title, `${exp.amount} جنيه`, 'محذوف');
    this.renderERPView('accountant');
    this.showToast('تم حذف المصروف', 'info');
  }

  openRecordDamagedModal() {
    const modal = document.getElementById('recordDamagedModal');
    const select = document.getElementById('damagedProductSelect');
    if (select) {
      select.innerHTML = this.products.map(p => `<option value="${p.id}">${p.name} (المخزون الحالي: ${this.getProductStock(p).currentStock})</option>`).join('');
    }
    if (modal) modal.classList.add('open');
  }

  saveRecordDamaged(e) {
    if (e) e.preventDefault();
    const prodId = document.getElementById('damagedProductSelect')?.value;
    const qty = parseInt(document.getElementById('damagedQty')?.value, 10) || 0;
    const reason = document.getElementById('damagedReason')?.value.trim() || 'كسر / تلف أثناء النقل';

    const product = this.products.find(p => p.id === prodId);
    if (!product || qty <= 0) return;

    const oldStock = this.getProductStock(product).currentStock;
    product.damagedStock = (product.damagedStock || 0) + qty;

    this.saveState('doon_products', this.products);
    this.logAudit('تسجيل بضاعة تالفة / كسر', `${product.name} (السبب: ${reason})`, `${oldStock} قطعة`, `خصم ${qty} قطعة تالفة`);
    this.closeModals();
    this.renderERPView('warehouse');
    this.showToast(`تم تسجيل ${qty} قطعة تالفة وخصمها من رصيد المخزن`, 'warning');
  }

  openAddEmployeeModal() {
    const modal = document.getElementById('addEmployeeModal');
    if (modal) modal.classList.add('open');
  }

  saveNewEmployee(e) {
    if (e) e.preventDefault();
    const name = document.getElementById('empName')?.value.trim();
    const role = document.getElementById('empRole')?.value.trim();
    const dept = document.getElementById('empDept')?.value;
    const salary = parseFloat(document.getElementById('empSalary')?.value) || 0;
    const phone = document.getElementById('empPhone')?.value.trim();

    if (!name || !role || salary <= 0) {
      this.showToast('يرجى إدخال اسم المسمى الوظيفي والراتب', 'danger');
      return;
    }

    const empId = 'EMP-' + (100 + this.employees.length + 1);
    const newEmp = {
      id: empId,
      name,
      role,
      dept,
      salary,
      phone: phone || '01000000000',
      hireDate: new Date().toISOString().slice(0,10),
      status: 'نشط',
      attendanceRate: 100
    };

    this.employees.push(newEmp);
    this.saveState('doon_employees', this.employees);
    this.logAudit('إضافة موظف جديد', `${name} (${role})`, '-', `راتب: ${salary} جنيه`);
    this.closeModals();
    this.renderERPView('hr');
    this.showToast(`تمت إضافة الموظف "${name}" بنجاح!`, 'success');
  }

  openEditGovRatesModal() {
    const modal = document.getElementById('editGovRatesModal');
    const tableBody = document.getElementById('govRatesTableBody');
    if (tableBody) {
      tableBody.innerHTML = this.governorates.map((g) => `
        <tr>
          <td><strong>${g.name}</strong></td>
          <td>
            <div style="display: flex; align-items: center; gap: 6px;">
              <input type="number" class="form-input" style="width: 100px; padding: 4px 8px;" id="govFeeInput_${g.id}" value="${g.fee}">
              <span>جنيه</span>
            </div>
          </td>
        </tr>
      `).join('');
    }
    if (modal) modal.classList.add('open');
  }

  saveGovRates() {
    this.governorates.forEach(g => {
      const input = document.getElementById(`govFeeInput_${g.id}`);
      if (input) {
        g.fee = parseFloat(input.value) || g.fee;
      }
    });
    this.saveState('doon_govs', this.governorates);
    this.logAudit('تحديث أسعار شحن المحافظات', 'جدول أسعار الشحن', '-', 'تم تحديث الرسوم');
    this.closeModals();
    this.renderERPView('shipping');
    this.showToast('تم حفظ أسعار الشحن الجديدة بنجاح!', 'success');
  }

  // --- Event Listeners & Countdown Timer ---
  bindEvents() {
    const searchInput = document.getElementById('mainSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        this.renderStore();
      });
    }

    document.querySelectorAll('.cat-nav-item, .cat-card').forEach(item => {
      item.addEventListener('click', () => {
        const cat = item.dataset.category || 'all';
        this.currentCategory = cat;

        document.querySelectorAll('.cat-nav-item').forEach(el => el.classList.toggle('active', el.dataset.category === cat));
        document.querySelectorAll('.cat-card').forEach(el => el.classList.toggle('active', el.dataset.category === cat));

        this.renderStore();
      });
    });
  }

  startFlashTimer() {
    let hours = 14, minutes = 32, seconds = 45;
    setInterval(() => {
      seconds--;
      if (seconds < 0) {
        seconds = 59;
        minutes--;
        if (minutes < 0) {
          minutes = 59;
          hours--;
          if (hours < 0) hours = 24;
        }
      }
      const hEl = document.getElementById('flashHours');
      const mEl = document.getElementById('flashMinutes');
      const sEl = document.getElementById('flashSeconds');
      if (hEl) hEl.innerText = String(hours).padStart(2, '0');
      if (mEl) mEl.innerText = String(minutes).padStart(2, '0');
      if (sEl) sEl.innerText = String(seconds).padStart(2, '0');
    }, 1000);
  }

  showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const iconMap = {
      'success': '<i class="fa-solid fa-circle-check" style="color: var(--success); font-size: 1.1rem;"></i>',
      'danger': '<i class="fa-solid fa-circle-xmark" style="color: var(--danger); font-size: 1.1rem;"></i>',
      'warning': '<i class="fa-solid fa-triangle-exclamation" style="color: var(--warning); font-size: 1.1rem;"></i>',
      'info': '<i class="fa-solid fa-circle-info" style="color: var(--primary); font-size: 1.1rem;"></i>'
    };

    toast.innerHTML = `
      ${iconMap[type] || iconMap.info}
      <span>${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-20px)';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }
}

// Global instance
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new DoonApp();
});
