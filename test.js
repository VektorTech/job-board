const mem = require('./pages/database/memcached.js');

mem.add(33, "{wmnjhdc : wnhnkwjnkjcnkjnckenkecrnkj, dwnjndkjdn: wekdhwbuwkud34ybhe8p9h32ihndl xew}", 60*60, () => {

});

setTimeout(() => {
    mem.gets(33, (err, data) => console.log(data));
}, 10000);