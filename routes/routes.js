const express = require('express')
const multer = require('multer')
const router = express.Router()

const diskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(
            null,
            file.fieldname + "_" + Date.now() + "_" + file.originalname
        );
    },
});

let image = multer({
    storage: diskStorage
}).single('gambar')

let pdf = multer({
    storage: diskStorage
}).single('pdf')

// Models
const LoginControllers = require('../controllers/LoginControllers')
const InfaqControllers = require('../controllers/InfaqControllers')
const BeritaControllers = require('../controllers/BeritaController')
const LaporanControllers = require('../controllers/LaporanController')




// Login
router.post('/login', LoginControllers.login)
router.get('/user', LoginControllers.user)
router.get('/logout', LoginControllers.logout)


// Infaq
router.get('/infaq', InfaqControllers.all)
router.get('/infaq/:id', InfaqControllers.find)
router.post('/infaq', image, InfaqControllers.store)
router.patch('/infaq/:id', image, InfaqControllers.update)
router.delete('/infaq/:id', InfaqControllers.delete)

// Berita
router.get('/berita', BeritaControllers.all)
router.get('/berita/:id', BeritaControllers.find)
router.post('/berita', image, BeritaControllers.store)
router.patch('/berita/:id', image, BeritaControllers.update)
router.delete('/berita/:id', BeritaControllers.delete)

// Laporan
router.get('/laporan', LaporanControllers.all)
router.get('/laporan/:id', LaporanControllers.find)
router.post('/laporan', pdf, LaporanControllers.store)
router.patch('/laporan/:id', pdf, LaporanControllers.update)
router.delete('/laporan/:id', LaporanControllers.delete)



module.exports = router