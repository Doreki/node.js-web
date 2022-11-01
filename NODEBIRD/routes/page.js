const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
  res.locals.user = null;
  res.locals.folloerCount = 0;
  res.locals.followingCount = 0;
  res.locals.folloerIdList = [];
  next();
});

router.get('/profile', (req, res) => {
  res.render('profile', { title: '내 정보 - NodeBird'});
});

router.get('/join', (req, res) => {
  res.render('join', {title: '회원가입 - NodeBird'});
});

router.get('/', (req, res, next) => {
  const twits = [];
  res.render('main', {
    titl: 'NodeBird',
    twits,
  });
});

module.exports = router;