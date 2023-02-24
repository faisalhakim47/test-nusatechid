# Installasi

1. Clone git repository
2. Jalankan npm install
3. Konfigurasi file .env, bisa mengambil dari file .env.example
4. Jalankan npm start
5. Database akan otomatis digenerate oleh TypeORM melalui entity yang sudah didaftarakan

# Hasil Tes

## Database

1. Tabel user: src/user/entities/user.entity.ts
2. Tabel wallet: src/wallet/entities/wallet.entity.ts
3. Tabel currency: src/currency/entities/currency.entity.ts
4. Tabel verifikasi email: src/user-email-verifications/entities/user-email-verification.entity.ts

__Untuk mempercepat review sql saya sudah dump sql yang digenerate aplikasi ke file preview.sql.__

## Halaman yang harus di siapkan:

1. Register

```shell
curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{ "username": "exampleuser001", "email": "6ik5e.exampleuser001@inbox.testmail.app", "password": "exampleuser001" }'
```

2. Login

```shell
curl -X POST http://localhost:3000/auth/login -H "Content-Type: application/json" -d '{ "username": "exampleuser001", "password": "exampleuser001" }'
```

3. User

```shell
curl http://localhost:3000/profile -H "Authorization: Bearer ACCESS_TOKEN_YANG_DIDAPAT_DARI_AUTH_LOGIN"
```

# Kesimpulan

Tes ini saya kerjakan dalam waktu 4 jam. Dalam waktu jam tersebut saya berhasil membuat:
- Inisiasi struktur database sesuai dengan spesifikasi, konvensi penamaan diusahakan mengikuti spesifikasi namun sebagian harus mengikuti konvensi framework.
- Membuat pendaftaran user beserta validasi form.
- Membuat authentikasi dengan berbasis JWT.
- Menampilkan data dengan authentikasi.

Masih banyak task dalam tes yang belum berhasil diselesaikan, terutama yang berkaitan dengan email. Kendala yang saya alami adalah waktu pengerjaan dan tidak ditemukannya solusi official untuk email handling di framework nestjs.
