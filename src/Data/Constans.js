import { Colors, Images } from '../Themes'

export const BASE_URL = 'https://api.sampleapis.com';
export const BASE_URL_PROD = 'https://api.sampleapis.com';
export const BASE_URL_PREMIUM = 'https://dtmqa.opsinfra.net';


export const LANG = {
  eng: {
    opening: "Find the best",
    secondOpening: "coffee for you",
    searchDesc: "search your coffee",
    next: "Next",
    deskripsiPruduk: "Description",
    size: "Size",
    price: "Price",
    order: "Orders",
    payment: "Payment",
    favorit: "Your Favorit",
    logout: "Logout",
    settingsDm: "Settings Dark Mode",
    language: "Language",
    wallet: 'Wallet'
  },
  idn: {
    opening: "Temukan yang terbaik",
    secondOpening: "kopi untukmu",
    searchDesc: "cari kopi mu",
    next: "Lanjut",
    deskripsiPruduk: "Deskripsi",
    size: "Ukuran",
    price: "Harga",
    order: "Pesananan",
    payment: "Pembayaran",
    favorit: "Favorit Anda",
    logout: "Keluar",
    settingsDm: "Pengaturan Mode Gelap",
    language: "Bahasa",
    wallet: 'Dompet'
  }
}

export const DYNAMIC_THEME = {
  dark: {
    backgroundColor: "#1B1A17",
    cardColor: Colors.blue,
    textColor: "#fff",
  },
  light: {
    backgroundColor: "#fff",
    cardColor: Colors.red,
    textColor: "#444444"
  }
}

export const Users = {
    id: 1,
    nama: "Afsal",
    email: "afsal@gmail.com",
    noHp: "08139827382",
    password: "123456"
  }

  export const notification = []


export const DataTylor = [
  {
    id: 1,
    image: Images.detail1,
    text: "Jas",
    bahan: ["Kain"],
    model: ["Slim fit", "Oversize"],
    warna: ["Maroon", "Gold", "Hijau", "Milo", "Navy", "Coklat"],
    ukuran: ["M", "L", "XL"]
  },
  {
    id: 2,
    image: Images.detail2,
    text: "Kebaya",
    bahan: ["Kain Brokat", "Kain Tule", "Kain Organza", "Kain Sifon"],
    model: ["Kebaya Jawa", "Kebaya Bali", "Kebaya Sunda", "Kebaya Encim"],
    warna: ["Maroon", "Gold", "Hijau", "Milo", "Navy", "Coklat"],
    ukuran: ["M", "L", "XL"]
  },
  {
    id: 3,
    image: Images.detail3,
    text: "Batik",
    bahan: ["Kain"],
    model: ["Slim fit", "Oversize"],
    warna: ["Maroon", "Gold", "Hijau", "Milo", "Navy", "Coklat"],
    ukuran: ["M", "L", "XL"]
  },
  {
    id: 4,
    image: Images.detail4,
    text: "Jas",
    bahan: ["Kain"],
    model: ["Slim fit", "Oversize"],
    warna: ["Maroon", "Gold", "Hijau", "Milo", "Navy", "Coklat"],
    ukuran: ["M", "L", "XL"]
  },
]


