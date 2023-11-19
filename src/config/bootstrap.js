try {
    require('dotenv').config()
    require('../database');
} catch (e) {
    console.log(e);
}