# Installasi

1. Clone git repository
2. Jalankan npm install
3. Konfigurasi file .env, bisa mengambil dari file .env.example
4. Jalankan npm start
5. Database akan otomatis digenerate oleh TypeORM melalui entity yang sudah didaftarakan

# Hasil Tes

1. relational database (user profile)
  1. data user berisi: id user, email, password (encrypted),status(pending,registered,verified)
  2. data wallet/balance user (1 id_user ≥0 id_wallet ≤ total id_currency) berisi :id_wallet, id_currency, id_user, amount
  3. data currency (1 id_balance = 1 id_currency)
  4. data pin /mailer (id_user ≥1): id_verifikasi, email,pin,status(pending,registered,verified,expired)

__Untuk mempercepat review sql saya sudah dump sql yang digenerate aplikasi ke file preview.sql.__

2. ~~konsep cronjob/worker mailer (api)~~
  1. ~~setiap 10 detik ngecek user yang pending untuk dikirimi verifikasi register /pin~~
  2. ~~setelah mengirim email maka status user dan status pin berubah menjadi registered~~
  3. ~~setelah verifikasi pin maka status user dan status pin berubah menjadi verified~~
  4. ~~pin expired jika tidak di verifikasi lebih dari 1jam~~

Halaman yang harus di siapkan :

1. post signup

```shell
curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{ "username": "exampleuser001", "email": "6ik5e.exampleuser001@inbox.testmail.app", "password": "exampleuser001" }'
```

2. post signin

```shell
curl -X POST http://localhost:3000/auth/login -H "Content-Type: application/json" -d '{ "username": "exampleuser001", "password": "exampleuser001" }'
```

3. get userdata (email, balance ,status dll.)

```shell
curl http://localhost:3000/profile -H "Authorization: Bearer ACCESS_TOKEN_YANG_DIDAPAT_DARI_AUTH_LOGIN"
```

4. ~~put user email (ganti email yang saat ini dipakai) ⇒ verifikasi email lama dulu ⇒kemudian verifikasi email baru~~


# Kesimpulan

Tes ini saya kerjakan dalam waktu 4 jam. Dalam waktu jam tersebut saya berhasil membuat:
- Inisiasi struktur database sesuai dengan spesifikasi, konvensi penamaan diusahakan mengikuti spesifikasi namun sebagian harus mengikuti konvensi framework.
- Membuat pendaftaran user beserta validasi form.
- Membuat authentikasi dengan berbasis JWT.
- Menampilkan data dengan authentikasi.

Masih banyak task dalam tes yang belum berhasil diselesaikan, terutama yang berkaitan dengan email. Kendala yang saya alami adalah waktu pengerjaan dan tidak ditemukannya solusi official untuk email handling di framework nestjs.
