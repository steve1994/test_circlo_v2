class Cart {

    constructor() {
        this.cart = [];
    }

    tambahProduk(itemName,kuantitas) {
        if (this.cart[itemName]) {
            let currentKuantitas = parseInt(this.cart[itemName]);
            this.cart[itemName] = kuantitas + currentKuantitas;
        } else {
            this.cart[itemName] = kuantitas;
        }
    }

    hapusProduk(itemName) {
        delete this.cart[itemName];
    }

    tampilkanCart() {
        for (let item in this.cart) {
            console.log(`${item} (${this.cart[item]})`);
        }
    }

}

let keranjang = new Cart();

keranjang.tambahProduk("Pisang Hijau", 2);
keranjang.tambahProduk("Semangka Kuning", 3);
keranjang.tambahProduk("Apel Merah", 1);
keranjang.tambahProduk("Apel Merah", 4);
keranjang.tambahProduk("Apel Merah", 2);

keranjang.hapusProduk("Semangka Kuning");
keranjang.hapusProduk("Semangka Merah");

keranjang.tampilkanCart();
