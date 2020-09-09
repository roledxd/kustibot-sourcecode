const token = "token";
const apiMode =  'sequential';
const appId = "appId";
const appSecret = "appSecret";

const farms = [
    {
        name: 'KustiFarm 1Hz',
        cost: 100000000,
        id: 1
    },
    {
        name: 'KustiFarm V2',
        cost: 2000000000,
        id: 2
    },
    {
        name: 'KustiFarm 3 FireBar',
        cost: 40000000000,
        id: 3
    },
    {
        name: 'KustiFarm Extra',
        cost: 800000000000,
        id: 4
    },
    {
        name: 'KustiFarm PowerEngine',
        cost: 1600000000000,
        id: 5
    },
    {
        name: 'KustiFarm PowerEngine+',
        cost: 3200000000000,
        id: 6
    },
    {
        name: 'KustiFarm XS',
        cost: 64000000000000,
        id: 7
    },
    {
        name: 'KustiFarm XS MAX',
        cost: 1280000000000000,
        id: 8
    },
    {
        name: 'KustiFarm Golden',
        cost: 2560000000000000,
        id: 9
    },
    {
        name: 'KustiFarm Limited',
        cost: 5120000000000000,
        id: 10
    },
    {
        name: 'KustiFarm Expert',
        cost: 10240000000000000,
        id: 11
    },
    {
        name: 'KustiFarm Diamond',
        cost: 20480000000000000,
        id: 12
    },
    {
        name: 'KustiFarm Express',
        cost: 40960000000000000,
        id: 13
    },
    {
        name: 'KustiFarm Special',
        cost: 81920000000000000,
        id: 14
    },
    {
        name: 'KustiFarm Pizdec',
        cost: 163840000000000000,
        id: 15
    },
    {
        name: 'KustiFarm Belter',
        cost: 327680000000000000,
        id: 16
    },
    {
        name: 'KustiFarm Zip',
        cost: 1000000000000000000,
        id: 17
    },
    {
        name: 'KustiFarm ZeroMaster',
        cost: 5000000000000000000,
        id: 18
    },
    {
        name: 'KustiFarm Crawler',
        cost: 10000000000000000000,
        id: 19
    },
    {
        name: 'KustiFarm Magnum',
        cost: 50000000000000000000,
        id: 20
    }
];

const randomCards = [
	'https://sun9-8.userapi.com/c858124/v858124148/9425d/-BqW-BEGFGQ.jpg',
	'https://sun9-36.userapi.com/c858120/v858120019/956f5/p3igqMjUFxM.jpg',
	'https://sun9-6.userapi.com/c858124/v858124148/9424f/Pc_sTiYaURs.jpg',
	'https://sun9-19.userapi.com/c858124/v858124148/94264/zsgF4vNbOvc.jpg',
	'https://sun9-41.userapi.com/c858124/v858124148/94248/F90V1HM0lo0.jpg',
	'https://sun9-1.userapi.com/c858124/v858124148/94272/D0Bf2TP1B-w.jpg',
	'https://sun9-15.userapi.com/c858124/v858124148/9426b/hb6O9gc_QGM.jpg',
	'https://sun9-1.userapi.com/c858124/v858124148/94279/XezlsSZLBu4.jpg',
	'https://sun9-16.userapi.com/c858220/v858220019/9121a/YNG_Vjils4I.jpg',
	'https://sun9-66.userapi.com/c858220/v858220019/911fe/bKkIoKDU7UU.jpg',
	'https://sun9-3.userapi.com/c858220/v858220019/91205/UboPqHcXyjk.jpg',
	'https://sun9-9.userapi.com/c858220/v858220019/9120c/uKIjM10iqIY.jpg',
	'https://sun9-66.userapi.com/c858220/v858220019/91213/n2TcDRu43Ls.jpg',
	'https://sun9-20.userapi.com/c858320/v858320204/97cd0/WJHEOkVHJH4.jpg',
	'https://sun9-12.userapi.com/c854420/v854420659/111bf8/huTSEECygxo.jpg',
	'https://sun9-53.userapi.com/c858320/v858320204/97cc9/WjQJp3QIjZo.jpg',
	'https://sun9-71.userapi.com/c855320/v855320722/11c9f6/mFoDHsN4XnQ.jpg',
	'https://sun9-4.userapi.com/c855436/v855436700/118fa8/OIJovQTVMBQ.jpg'
];

const { VK, Keyboard } = require('vk-io');
const vk = new VK();
const commands = [];
const request = require('prequest');
const utils = {
    sp: (int) => {
        int = int.toString();
        return int.split('').reverse().join('').match(/[0-9]{1,3}/g).join('.').split('').reverse().join('');
    },
    rn: (int, fixed) => {
        if (int === null) return null;
        if (int === 0) return '0';
        fixed = (!fixed || fixed < 0) ? 0 : fixed;
        let b = (int).toPrecision(2).split('e'),
            k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 56) / 3),
            c = k < 1 ? int.toFixed(0 + fixed) : (int / Math.pow(10, k * 3) ).toFixed(1 + fixed),
            d = c < 0 ? c : Math.abs(c),
            e = d + ['', 'Тыс.', 'Млн.', 'Млрд.', 'Трлн.', 'Квад.', 'Квин.', 'Секс.', 'Септ.', 'Окт.', 'Нон.', 'Дек.', 'Энд.', 'Дод.'][k];

            e = e.replace(/e/g, '');
            e = e.replace(/\+/g, '');
            e = e.replace(/Infinity/g, 'ДОХЕРА');

        return e;
    },
    gi: (int) => {
        int = int.toString();

        let text = ``;
        for (let i = 0; i < int.length; i++)
        {
            text += `${int[i]}&#8419;`;
        }

        return text;
    },
    getSadEmoji: () => utils.pick(["😞", "😔", "😟", "😩", "😣", "☹️", "🙁", "😕", "😦", "😧"]),
    getS1Pht: () => utils.pick(["НiТ!", "Пiшов, Розбiйник", "разве ты админ?", "серьёзно?", "хавхававъ", "нельзя.", "нет.", "Звучит слишком банально.", "Не сейчас..", "Не сегодня..."]),
    getHelloSticker: () => utils.pick([11098,11105,16236,16310,16029,16034,16041,15584]),
	getHappyEmoji: () => utils.pick(["😊", "😄", "😎", "😇", "🥰", "🙂", "😁", "🤭", "😸", "😃", "🌞", "😆"]),
	filter: (text) => /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig.test(text) ? true : false,
    decl: (n, titles) => { return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2] },
    random: (x, y) => {
        return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
    },
    pick: (array) => {
        return array[utils.random(array.length - 1)];
    }
}
const rotateText = {
    q: 'q',
    w: 'ʍ',
    e: 'ǝ',
    r: 'ɹ',
    t: 'ʇ',
    y: 'ʎ',
    u: 'u',
    i: 'ᴉ',
    o: 'o',
    p: 'p',
    a: 'ɐ',
    s: 's',
    d: 'd',
    f: 'ɟ',
    g: 'ƃ',
    h: 'ɥ',
    j: 'ɾ',
    k: 'ʞ',
    l: 'l',
    z: 'z',
    x: 'x',
    c: 'ɔ',
    v: 'ʌ',
    b: 'b',
    n: 'n',
    m: 'ɯ',

    й: 'ņ',
    ц: 'ǹ',
    у: 'ʎ',
    к: 'ʞ',
    е: 'ǝ',
    н: 'н',
    г: 'ɹ',
    ш: 'm',
    щ: 'm',
    з: 'ε',
    х: 'х',
    ъ: 'q',
    ф: 'ф',
    ы: 'ıq',
    в: 'ʚ',
    а: 'ɐ',
    п: 'u',
    р: 'd',
    о: 'о',
    л: 'v',
    д: 'ɓ',
    ж: 'ж',
    э: 'є',
    я: 'ʁ',
    ч: 'һ',
    с: 'ɔ',
    м: 'w',
    и: 'и',
    т: 'ɯ',
    ь: 'q',
    б: 'ƍ',
    ю: 'oı'
}

let btc = 0;

let users = require('./db/users.json');
let clans = require('./db/clans.json');
let cards = require('./db/cards.json');
let promo = require('./db/promo.json');
let chats = require('./db/chats.json');
let orders = require('./db/orders.json');
let transfers = require('./db/transfers.json');
let usedcodesbase = require('./db/activatedCodes.json');
let bdata = require('./db/stats.json');
setTimeout(async () => {
    const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

    if(!rq.ticker) return;
    if(!rq.ticker.price) return;

    btc = Math.floor(Number(rq.ticker.price));
}, 5);

setInterval(async () => {
    const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

    if(!rq.ticker) return bot('Unknown Error');
    if(!rq.ticker.price) return bot('Unknown Error');

    btc = Math.floor(Number(rq.ticker.price));
}, 60000);

setInterval(async () => {
    await saveActPromo();
    await savePromo();
    await saveChats();
    await saveData();
    await saveTransfers();
    await saveUsers();
    await saveOrders();
    await saveClans();
}, 1000);

setInterval(async () => {
    users.filter(x=> x.misc.farm !== 0).map(x=> {
        if(x.misc.farm === 1)
        {
            x.farm_btc += 25;
        }

        if(x.misc.farm === 2)
        {
            x.farm_btc += 50;
        }

        if(x.misc.farm === 3)
        {
            x.farm_btc += 100;
        }
        if(x.misc.farm === 4)
        {
            x.farm_btc += 250;
        }       
         if(x.misc.farm === 5)
        {
            x.farm_btc += 500;
        }
        if(x.misc.farm === 6)
        {
            x.farm_btc += 750;
        }
        if(x.misc.farm === 7)
        {
            x.farm_btc += 1000;
        }
        if(x.misc.farm === 8)
        {
            x.farm_btc += 5000;
        }
        if(x.misc.farm === 9)
        {
            x.farm_btc += 7500;
        }
        if(x.misc.farm === 10)
        {
            x.farm_btc += 10000;
        }
        if(x.misc.farm === 11)
        {
            x.farm_btc += 50000;
        }
        if(x.misc.farm === 12)
        {
            x.farm_btc += 75000;
        }
        if(x.misc.farm === 13)
        {
            x.farm_btc += 100000;
        }
        if(x.misc.farm === 14)
        {
            x.farm_btc += 500000;
        }
        if(x.misc.farm === 15)
        {
            x.farm_btc += 750000;
        }
        if(x.misc.farm === 16)
        {
            x.farm_btc += 1000000;
        }
        if(x.misc.farm === 17)
        {
            x.farm_btc += 2500000;
        }
        if(x.misc.farm === 18)
        {
            x.farm_btc += 5000000;
        }
        if(x.misc.farm === 19)
        {
            x.farm_btc += 7500000;
        }
        if(x.misc.farm === 19)
        {
            x.farm_btc += 10000000;
        }
    });
}, 360000);


async function saveUsers()
{
    require('fs').writeFileSync('./db/users.json', JSON.stringify(users, null, '\t'));
    return true;
}

async function saveChats()
{
    require('fs').writeFileSync('./db/chats.json', JSON.stringify(chats, null, '\t'));
    return true;
}

async function saveData()
{
    require('fs').writeFileSync('./db/stats.json', JSON.stringify(bdata, null, '\t'));
    return true;
}
async function saveOrders()
{
    require('fs').writeFileSync('./db/orders.json', JSON.stringify(orders, null, '\t'));
    return true;
}
async function saveClans()
{
    require('fs').writeFileSync('./db/clans.json', JSON.stringify(clans, null, '\t'));
    return true;
}

async function savePromo()
{
    require('fs').writeFileSync('./db/promo.json', JSON.stringify(promo, null, '\t'));
    return true;
}
async function saveTransfers()
{
    require('fs').writeFileSync('./db/transfers.json', JSON.stringify(transfers, null, '\t'));
    return true;
}
async function saveActPromo()
{
    require('fs').writeFileSync('./db/activatedCodes.json', JSON.stringify(usedcodesbase, null, '\t'));
    return true;
}

vk.setOptions({ token: token, apiMode: apiMode, appSecret: appSecret, appId: appId, pollingGroupId: 187237154 });
const { updates, snippets, auth, } = vk;
//vk.setOptions({login: "+37254005007", password: "inpgt@ro12345", appId: 7232632});
const varia = auth.implicitFlowUser()
//varia.run()
updates.startPolling(
    
)
.then(() => {
    const date = new Date();
    bdata[3].count = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    bdata[4].count = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`;
    console.log(`Polling Started\nGroup URL: \nLauch Date & Time: ${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}\n__________________`);
})
updates.on('message', async (message) => {
    if(Number(message.senderId) <= 0) return;
    const [user_info] = await vk.api.users.get({ user_id: message.senderId });
    if(/\[club187237154\|(.*)\]/i.test(message.text)) message.text = message.text.replace(/\[club187237154\|(.*)\]/ig, '').trim();
  //  if(!chats.find(x=> x.id === chat.id))
   // {
     //   const [chat_info] = await vk.api.users.get({ user_id: message.chatId });
      //  const date = new Date();
    //    chats.push({
     //       id: message.chatId,
     //       huy: "",
    //        rules: "",
     //       calls: 0,
     //       members: 0,
     //       memberlist: []
     //   });
   // }
    if(!users.find(x=> x.id === message.senderId))
    {
        const [user_info] = await vk.api.users.get({ user_id: message.senderId });
        const date = new Date();
        bdata[2].count += 1;
        users.push({
            id: message.senderId,
            uid: users.length,
            balance: 5000,
            soldsazen: 0,
            language: "rus",
            balanceview: false,
            bank: 0,
            btc: 0,
            buttons: ["👤", "🆘", "🛡️", "🏆🌿", "🏆👤", "🏆🛡️"],
            topban: false,
            repban: false,
            transactions: [],
            transban: false,
            breadtrans:0,
            warns:0,
            inClan:false,
            clanId:0,
            profilewatch: true,
            admin: false,
            calls:0,
            farm_btc: 0,
            rating: 0,
            regDate: `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`,
            mention: true,
            ban: false,
            timers: {
                bonus: true
            },
            tag: `${user_info.first_name}_${message.senderId}`,
            notifications: true,
            exp: 1,
            level: 1,
            referal: null,
            misc: {
                farm: 0
            },
            marriage: {
                partner: 0,
                requests: []
            },
            platform: "vk",
        });
        if(!message.isChat) {
			await message.send(`📝 Аккаунт [id${message.user.id}|${message.user.tag}] был создан!\n⚠️ Пиши "кнопки", чтобы активировать клавиатуру.`, {
				keyboard: generateKeyboard(["👤", "🆘", "🛡️", "👛", "🏆🌿", "🏆👤", "🏆🛡️"])
			});

			await message.sendSticker(utils.getHelloSticker);
        }
        if(message.isChat) {
			await message.send(`📝 Аккаунт [id${message.user.id}|${message.user.tag}] был создан!\n⚠️ Пиши "кнопки", чтобы активировать клавиатуру.`);
        }
    }
    if(message.isChat != false){
        if(!chats.find(x=> x.chatId === message.chatId)){
        let chat = chats.find(x=> x.chatId === message.chatId);
        if(!chat){
        const date = new Date();
        chats.push({
            id: chats.length,
            chatId: message.chatId,
            messages: 0,
            admin: null
        });
        let chat2 = chats[message.chatId];
        await message.send(`📝 Беседа (${chat2.chatId}) был создан!\n⚠️ Пиши "кнопки", чтобы активировать клавиатуру.`);
        }
    }
    if(chats.find(x=> x.chatId === message.chatId)){
        let chatsd =chats.find(x=> x.chatId === message.chatId);
        chatsd.messages += 1;
        }
    }
    message.user = users.find(x=> x.id === message.senderId);
    if(message.user.ban) return message.send(`❌ Ваш аккаунт был заблокирован по причине "${banreason}".`);

    const bot = (text, params) => {
        message.user.calls += 1;
        bdata[1].count += 1;

        return message.send(`${message.user.mention ? `@id${message.user.id} (${message.user.tag})` : `${message.user.tag}`}, ${text}`, params);

    }

    const command = commands.find(x=> x[0].test(message.text));
    if(!command) return;

    if(message.user.exp >= 24)
    {
        message.user.exp = 1;
        message.user.level += 1;
    }

    message.args = message.text.match(command[0]);
    await command[1](message, bot);

    console.log(`[${message.user.tag} | ${user_info.first_name} ${user_info.last_name}] (${message.user.id}): ${message.text}`);

});

const cmd = {
    hear: (p, f) => {
        commands.push([p, f]);
    }
}

function generateProfileKeyboard(array) {
	let kb = [];
	if(array.length > 40) return false;

	for (let i = 0; i < 10; i += 1) {
		if(!array.slice(i * 2, i * 2 + 2)[0]) break;
		kb.push(array.slice(i * 2, i * 2 + 2));
	}

	kb.map((arr) => {
		arr.map((button, i) => {
			arr[i] = Keyboard.textButton({ label: button });
		});
	});

	return Keyboard.keyboard(kb);
}

function generateTopKeyboard(array) {
	let kb = [];
	if(array.length > 40) return false;

	for (let i = 0; i < 10; i += 1) {
		if(!array.slice(i * 1, i * 1 + 1)[0]) break;
		kb.push(array.slice(i * 1, i * 1 + 1));
	}

	kb.map((arr) => {
		arr.map((button, i) => {
			arr[i] = Keyboard.textButton({ label: button });
		});
	});

	return Keyboard.keyboard(kb);
}

function generateKeyboard(array) {
	let kb = [];
	if(array.length > 40) return false;

	for (let i = 0; i < 10; i += 1) {
		if(!array.slice(i * 4, i * 4 + 4)[0]) break;
		kb.push(array.slice(i * 4, i * 4 + 4));
	}

	kb.map((arr) => {
		arr.map((button, i) => {
			arr[i] = Keyboard.textButton({ label: button });
		});
	});

	return Keyboard.keyboard(kb);
}

cmd.hear(/^(?:рп)\s(.*)$/i, async (message, bot) => {
    if(message.replyMessage === null) return;
    let user = users.find(x=> x.id === message.replyMessage.senderId);
    if(!user) return;
    if(message.replyMessage.senderId === -187237154) return bot('❌ Не трогать [kustibot|KustiBot]');
    let action = ``;
    let mark = ``;
    let text = ``;
    if(message.args[1].toLowerCase() === 'облизать')
    {
        action += `облизал`;
        mark += `👅`;
        text += `${mark} | [id${message.user.id}|${message.user.tag}] ${action} [id${user.id}|${user.tag}]`;
    }
    if(message.args[1].toLowerCase() === 'погладить')
    {
        action += `погладил`;
        mark += `👋`;
        text += `${mark} | [id${message.user.id}|${message.user.tag}] ${action} [id${user.id}|${user.tag}]`;
    }
    else if(message.args[1].toLowerCase() === 'засос')
    {
        action += `сделал засос`;
        mark += `💋`;
        text += `${mark} | [id${message.user.id}|${message.user.tag}] ${action} [id${user.id}|${user.tag}]`;
    }
    else if(message.args[1].toLowerCase() === 'поцеловать')
    {
        action += `поцеловал`;
        mark += `💋`;
        text += `${mark} | [id${message.user.id}|${message.user.tag}] ${action} [id${user.id}|${user.tag}]`;
    }
    else if(message.args[1].toLowerCase() === 'обнять')
    {
        action += `обнял`;
        mark += `🤗`;
        text += `${mark} | [id${message.user.id}|${message.user.tag}] ${action} [id${user.id}|${user.tag}]`;
    }
    else if(message.args[1].toLowerCase() === 'пригласить на чай')
    {
        action += `пригласил на чай`;
        mark += `🍵`;
        text += `${mark} | [id${message.user.id}|${message.user.tag}] ${action} [id${user.id}|${user.tag}]`;
    }
    else if(message.args[1].toLowerCase() === 'пригласить на кофе')
    {
        action += `пригласил на кофе`;
        mark += `☕`;
        text += `${mark} | [id${message.user.id}|${message.user.tag}] ${action} [id${user.id}|${user.tag}]`;
    }
    else if(message.args[1].toLowerCase() === 'ударить')
    {
        action += `ударил`;
        mark += `👊`;
        text += `${mark} | [id${message.user.id}|${message.user.tag}] ${action} [id${user.id}|${user.tag}]`;
    }
    else if(message.args[1].toLowerCase() === 'переспать')
    {
        action += `переспал с`;
        mark += `🛏️`;
        text += `${mark} | [id${message.user.id}|${message.user.tag}] ${action} [id${user.id}|${user.tag}]`;
    }
    else if(message.args[1].toLowerCase() === 'изнасиловать' && message.args[1].toLowerCase() === 'выебать' && message.args[1].toLowerCase() === 'интим')
    {
        action += `изнасиловал`;
        mark += `👉👌`;
        text += `${mark} | [id${message.user.id}|${message.user.tag}] ${action} [id${user.id}|${user.tag}]`;
    }
    else if(message.args[1].toLowerCase() === 'послать')
    {
        action += `послал`;
        mark += `🤬`;
        text += `${mark} | [id${message.user.id}|${message.user.tag}] ${action} [id${user.id}|${user.tag}]`;
    }
    else if(message.args[1].toLowerCase() === 'пожать руку')
    {
        action += `пожал руку`;
        mark += `🤝`;
        text += `${mark} | [id${message.user.id}|${message.user.tag}] ${action} [id${user.id}|${user.tag}]`;
    }
    else if(message.args[1].toLowerCase() === 'обосрать')
    {
        action += `обосрал`;
        mark += `💩`;
        text += `${mark} | [id${message.user.id}|${message.user.tag}] ${action} [id${user.id}|${user.tag}]`;
    }
    else if(message.args[1].toLowerCase() === 'отпиздить')
    {
        action += `отпиздил`;
        mark += `👊`;
        text += `${mark} | [id${message.user.id}|${message.user.tag}] ${action} [id${user.id}|${user.tag}]`;
    }
    return message.send({message: text});
});

cmd.hear(/^(?:кнопки|◀️ Главное Меню)$/i, async (message, bot) => {
    await message.send(`▶️ Главное Меню`, {
        keyboard: generateKeyboard(["👤", "🆘", "🛡️","👛", "🏆🌿", "🏆👤", "🏆🛡️"])
    });
});
cmd.hear(/^(?:какиш пакиш)$/i, async (message, bot) => {
    await message.send(`Сосать хочеш?`, {
        keyboard: generateKeyboard(["Нажми чтобы пососать писюн"])
    });
});
cmd.hear(/^(?:Нажми чтобы пососать писюн)$/i, async (message, bot) => {
    await message.send(`Вы успешно пососали писюн`, {
        keyboard: generateKeyboard(["Нажми чтобы сделать себе отсос" ])
    });
});
cmd.hear(/^(?:Нажми чтобы сделать себе отсос)$/i, async (message, bot) => {
    await message.send(`Вы успешно сделали себе отсос`, {
        keyboard: generateKeyboard(["Нажми чтобы я сказал ХУЙ"])
    });
});
cmd.hear(/^(?:Нажми чтобы я сказал ХУЙ)$/i, async (message, bot) => {
    await message.send(`ХУЙ, кнопки уходят нахуй`, {
        keyboard: generateKeyboard([''])
    });
});
cmd.hear(/^(?:keyboard_clear)$/i, async (message, bot) => {
    await message.send(`кнопки уходят нахуй`, {
        keyboard: generateKeyboard([''])
    });
});
cmd.hear(/^(?:шипперим|шиппери)\s([^]+)\s([^]+)$/i, async (message, bot) => {
    if(!message.args[1]) return bot(`💖 Неверные аргументы!\nПример: "Шипперим @id_1 @id_2"`);
    const user1 = message.args[1];
    const user2 = message.args[2];
    const [user1_info] = await vk.api.users.get({ user_id: user1 });
    const [user2_info] = await vk.api.users.get({ user_ids: user2 });
    await bot(`${user1_info.first_name} ${user1_info.last_name} + ${user2_info.first_name} ${user2_info.last_name}`);
    return console.log(`${user1_info.first_name} ${user1_info.last_name} + ${user2_info.first_name} ${user2_info.last_name}`);

});


cmd.hear(/^(?:беседа)$/i, async (message, bot) => {
    const chat = chats.find(x=> x.chatId === message.chatId);
    if(!message.isChat){
        return bot(`👥 Команда доступна только в беседе.`);
    }
    if(!chat) {
            return message.send(`👥 Походу беседа не была автоматически добавлена. Писать сюда: [roman_ledjajev|Ромочка Админ]`);
    }
    if(chat) {
        let text = "";
        text += `🔎ID Беседы: ${utils.gi(chat.chatId)}\n`;
        if(chat.name) text += `✏️Название: "${chat.name}"\n`;
        if(chat.admin != null){ 
            let user = users.find(x=> x.id === chat.admin);
            text += `👤Создатель: [id${user.id}|${user.tag}]\n`;
        }
        text += `✉Сообщения: "${utils.sp(chat.messages)}"\n`;
        return message.send(`👥 Твоя беседа (${chat.chatId})\n${text}`);
}
});

cmd.hear(/^(?:zz)\s([^]+)$/i, async (message, bot) => {
    if(!message.user.admin) return bot('❌ Доступ Запрещён!');

    try {
        const result = eval(message.args[1]);

        if(typeof(result) === 'string')
        {
            return bot(`🔎 string: ${result}`);
        } else if(typeof(result) === 'number')
        {
            return bot(`🔎 number: ${result}`);
        } else {
            return bot(`${typeof(result)}: ${JSON.stringify(result, null, '&#12288;\t')}`);
        }
    } catch (e) {
        console.error(e);
        return bot(`❌ Ошибка:
        ${e.toString()}`);
    }
});

cmd.hear(/^(?:помощь|команды|меню|help|commands|cmds|menu|начать|🆘 Помощь|start|🆘)$/i, async (message, bot) => {
    await bot(`\nКоманды Доступны Там:
    vk.com/@roman_ledjajev-kustibot-docs

    • • RoLed | KustiCore V2• •`);
});

cmd.hear(/^(?:стата все|стата|статистика все|stats all|stat all|statistic all|статистики все|статс все)$/i, async (message, bot) => {

    //\n👤 Последний Рег.: [id${users[users.lenght].id}|${users[users.lenght].tag}] (${users[users.lenght].uid})
    await bot(`\n📊 Статистика Бота:\n💬 Сообщений Получено: ${utils.rn(bdata[1].count)}\n👤 Последний рег: [id${users[users.length].id}|${users[users.length].tag}]\n👤 Пользователи: ${utils.rn(bdata[2].count)}\n👥 Кланы: ${utils.rn(bdata[0].count)}\n📅 Дата Запуска: ${bdata[4].count}\n🕒 Время Запуска: ${bdata[3].count}\n💸 Всего Переводов: ${bdata[5].count}\n${utils.rn(bdata[6].count)}🌳 (${utils.rn(bdata[8].count)})\n${utils.rn(bdata[7].count)}🍞 (${utils.rn(bdata[9].count)})`);
});

cmd.hear(/^(?:settings|настройки|опции|options|⚙️|⚙️ Настройки)$/i, async (message, bot) => {
    await bot(`\n• ⚙️ Настройки:
    • 👤 Профиль {да/нет} - Открыть/закрыть профиль
    • 👛 Баланс {да/нет} - Открыть/закрыть кошелёк
    • 🔔 Уведомления {да/нет} - Включить/отключить уведомления
    • ✏️ ник {да/нет} - Вкл/выкл ник 

    • • RoLed | KustiCore V2• •`);
});

cmd.hear(/^(?:помощь)\s(.*)$/i, async (message, bot) => {
    message.args[1] = message.args[1].toLowerCase();

    if(message.args[1] === 'переверни')
    {
        return message.send(`Команда "Переверни" пишет ваш текст вверх ногами (Поддерживаются цифры, буквы латинского и кириллического алфавита, а также некоторые символы)`);
    }

    if(message.args[1] === 'шар')
    {
        return message.send(`Команда "Шар" используя магию рандома выводит случайное сообщение.`);
    }

    if(message.args[1] === 'инфа')
    {
        return message.send(`Команда "Инфа" случайным образом присылает шанс чего-либо. Также можно использовать команды "Шанс" или "Вероятность"`);
    }

    if(message.args[1] === 'выбери')
    {
        return message.send(`Команда "Выбери" случайным образом выбирает один из двух предложенных вариантов.`);
    }

    if(message.args[1] === 'кубик')
    {
        return message.send(`Команда "Кубик" сравнивает ваше число со случайным от 1 до 6, если вы угадали, то получаете вознаграждение. Также можно использовать "Куб"`);
    }

    if(message.args[1] === 'кнб')
    {
        return message.send(`Команда "Кнб" сравнивает ваш вариант ответа со случайным (камень, ножницы, бумага, если вы угадали, то получаете вознаграждение.\nПример использования: "кнб [камень]"`);
    }

    if(message.args[1] === 'трейд')
    {
        return message.send(`Команда "Трейд" - симулятор бинарных опционов. Введите "Трейд вверх (сумма)" если думаете, что курс валюты будет увеличиваться, или "Трейд вниз (сумма)" если будет уменьшаться.`);
    }

    if(message.args[1] === 'стаканчик')
    {
        return message.send(`С помощью команды "Стаканчик" вы можете сыграть в аналог игры "Напёрстки". Чтобы играть введите "Стаканчик [1-3] [сумма]".`);
    }

    if(message.args[1] === 'реши')
    {
        return message.send(`Команда "Реши" решает ваш пример (Реши 5 + 5 * 2).
        Команда умеет:
        Складывать (+)
        Вычитать (-)
        Умножать (*)
        Делить (/)`);
    }

    if(message.args[1] === 'курс')
    {
        return message.send(`С помощью команды "Курс" можно узнать курс Биткоина на данный момент.`);
    }

    if(message.args[1] === 'профиль')
    {
        return message.send(`Команда "Профиль" выводит вашу статистику.`);
    }

    if(message.args[1] === 'баланс')
    {
        return message.send(`Команда "Баланс" выводит кол-во валюты на вашем аккаунте.`);
    }

    if(message.args[1] === 'хлеб')
    {
        return message.send(`Пустая команда "Хлеб" (без параметров) выводит ваше кол-во хлеба (также можно узнать в профиле). При указании параметра (любое число) вы купите данное кол-во хлеба (1 = 250.000.000$). Количествл хлеба влияет на ваше положение в топе.`);
    }

    if(message.args[1] === 'ник')
    {
        return message.send(`С помощью команды "Ник" можно выбрать себе ник длинною до 15 символов. Также, ник можно делать кликабельным/некликабельным в топе "Ник вкл" и "Ник выкл"`);
    }

    if(message.args[1] === 'продать')
    {
        return message.send(`С помощью команды "Продать" вы можете продать любой предмет (Машину, дом, квартиру, телефон, яхту, самолет, вертолет, биткоин, ферму).`);
    }

    if(message.args[1] === 'передать')
    {
        return message.send(`Команда "Передать" переводит указанную вами сумму любому игроку (Передать ${message.user.uid} 1000).`);
    }

    if(message.args[1] === 'топ')
    {
        return message.send(`Команда "Топ" выводит 10 игроков с самым большим количеством хлеба.`);
    }

    if(message.args[1] === 'дата')
    {
        return message.send(`Команда "Дата" выводит дату регистрации человека в боте. Можно использовать id человека.`);
    }

    if(message.args[1] === 'репорт')
    {
        return message.send(`С помощью команды "Репорт" вы можете отправить создателю бота любое сообщение. Также можно использовать "Реп", "Жалоба", "Rep".`);
    }
});

cmd.hear(/^(?:переверни)\s([^]+)$/i, async (message, bot) => {
    let text = ``;
    message.args[1].split('').map(x=> {
        if(rotateText[x])
        {
            text += rotateText[x];
        }
    });

    return bot(`держи : "${text.split('').reverse().join('')}"`)
});
//csnvid = -138184256_456239017
cmd.hear(/^(?:рандом|🔁 Рандом)$/i, async (message, bot) => {
    const ranCard = utils.pick(randomCards);
    return message.sendPhoto(ranCard);
});
cmd.hear(/^(?:рандом|🔁 Рандом)$/i, async (message, bot) => {
    const cid = utils.random(cards.length);
    const card = cards[cid]
    const phrase = utils.pick(['Определенно', 'Мне кажется, что это', 'Это', 'Хммм...', 'Походу это', 'Без сомнений, это -']);
    await message.send(`⭐ ${card.name} (${card.id})
        📅 Дата Выхода: ${card.date}
        🎨 Цвета Рамок: ${card.colors}
        📓 Описание: ${card.desc}
        💰 Ценность: ${card.price}
        🖼 Изображение:`);
    await message.sendPhoto(card.photourl);
    return console.log(`${card.id}_('${card.name}')_${card.date}_${card.price}_${message.senderId}`);
});
cmd.hear(/^(?:ранд-раздача|рандр|рраздача)\s(хлеб|баланс)\s?([0-9]+)?$/i, async (message, bot) => {
    const uid = utils.random(users.length);
    const user = users[uid]
    const phrase = utils.pick(['Определенно', 'Мне кажется, что это', 'Это', 'Хммм...', 'Походу это', 'Без сомнений, это -']);
    const mark = utils.pick(['😲', '😜', '😳', '😚', '😏', '😃', '😊', '😆', '😄']);

    if(message.args[1].toLowerCase() === 'хлеб')
    {
        if(!message.user.admin) return bot('❌ Доступ Запрещён!');
        const value = Number(message.args[2]);
        user.rating += value;
        if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `\n🌐 KustiPay Service\n✅ Пополнение Баланса\n👤 Отправитель: [kustibot|KustiBot]\n💸 Сумма: ${utils.sp(value)}🍞\n📋 Дополнительно:\n Вы выиграли в раздаче, где победитель выбирается случайно ${mark}`});
        return bot(`\n🎰 Новый Розыгрыш!\n\n💸 Сумма: ${utils.sp(value)} 🍞\n🎁 Победитель: [id${user.id}|${user.tag}]!`);
    }

    if(message.args[1].toLowerCase() === 'баланс')
    {
        if(!message.user.admin) return bot('❌ Доступ Запрещён!');
        const value = Number(message.args[2]);
        user.balance += value;
        if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `\n🌐 KustiPay Service\n✅ Пополнение Баланса\n👤 Отправитель: [kustibot|KustiBot]\n💸 Сумма: ${utils.sp(value)}🌳\n📋 Дополнительно:\n Вы выиграли в раздаче, где победитель выбирается случайно ${mark}`});
        return bot(`\n🎰 Новый Розыгрыш!\n\n💸 Сумма: ${utils.sp(value)} 🌳\n🎁 Победитель: [id${user.id}|${user.tag}]!`);
    }
});

cmd.hear(/^(?:кто)\s(.*)$/i, async (message, bot) => {
    const uid = utils.random(users.length);
    const user = users[uid]
    const phrase = utils.pick(['Определенно', 'Мне кажется, что это', 'Это', 'Хммм...', 'Походу это', 'Без сомнений, это -']);
    const mark = utils.pick(['😲','😅','😴', '😜', '😳', '😚', '😏', '😃', '😊', '😆', '😄']);
    return bot(`${phrase} [id${user.id}|${user.tag}] ${message.args[1]} ${mark}`);
});

cmd.hear(/^(?:шар)\s([^]+)$/i, async (message, bot) => {
    const phrase = utils.pick(['перспективы не очень хорошие', 'сейчас нельзя предсказать', 'пока не ясно', 'знаки говорят - "Да"', 'знаки говорят - "Нет"', 'можешь быть уверен в этом', 'мой ответ - "нет"', 'мой ответ - "да"', 'бесспорно', 'мне кажется - "Да"', 'мне кажется - "Нет"', 'кустик пока не решил этот вопрос']);
    return bot(phrase);
});

cmd.hear(/^(?:инфа|шанс|вероятность|шанз|%|процент|Инфа|Шанс|Вероятность|Шанз|Процент)\s([^]+)$/i, async (message, bot) => {
    const phrase = utils.pick(['около', 'равен', '-', 'равен около', 'где-то', 'примерно', 'наверное около', 'может быть', 'наверное',]);
    const percent = utils.random(100);

    return bot(`шанс ${message.args[1]} ${phrase} ${percent}%`)
});

cmd.hear(/^(?:выбери)\s([^]+)\s(?:или)\s([^]+)$/i, async (message, bot) => {
    const first = message.args[1];
    const second = message.args[2];

    const phrase = utils.pick([`конечно ${utils.random(1, 2)} вариант`, `мне кажется, что ${utils.random(1, 2)} вариант лучше`, `кустик выбрал ${utils.random(1, 2)} вариант`, `${utils.random(1, 2)} вариант более правильный`, `Катка Богатка отложила яйцо на ${utils.random(1, 2)} вариант`,`Ну че поцаны? ${utils.random(1, 2)} вариант?`]);
    return bot(`${phrase}`);
});

cmd.hear(/^(?:продать)\s(.*)\s?(.*)?$/i, async (message, bot) => {
	let options = {
		count: null
	}

	message.args[2] = message.args[1].split(' ')[1];

	if(!message.args[2]) options.count = 1;
	if(message.args[2])
	{
		message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
		message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
		message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');

		message.args[2] = Math.floor(Number(message.args[2]));
		if(message.args[2] <= 0) return;

		if(!message.args[2]) options.count = 1;
		else if(message.args[2]) options.count = message.args[2];
	}
    if(/ко/i.test(message.args[1].toLowerCase()))
	{
        let max = Math.round(message.user.btc);
        let half = Math.round(message.user.btc/2);
        let chet = Math.round(message.user.btc/4);
        if(!message.args[2]) return message.send(`[id${message.user.id}|${message.user.tag}],\n🌐 KustiPay Service`, {
            // keyboard: generateProfileKeyboard([`👤 ${message.user.tag}`,`🆔 ${message.user.uid}`, `🍞 ${utils.rn(message.user.rating)}`, `🌳 ${utils.rn(message.user.balance)}`,`◀️ Главное Меню`])
            keyboard:JSON.stringify(//start
             {
                 "inline": true,
                 "buttons": [
                     [{
                         "action": {
                         "type": "text",
                         "payload": "{\"button\": \"4\"}",
                         "label": `продать ко ${utils.sp(max)}`
                     },
                         "color": "primary"
                    }],
                    [{
                     "action": {
                        "type": "text",
                        "payload": "{\"button\": \"4\"}",
                          "label": `продать ко ${utils.sp(half)}`
                     },
                               "color": "primary"
                    }],
                    [{
                        "action": {
                     "type": "text",
                      "payload": "{\"button\": \"4\"}",
                        "label": `продать ко ${utils.sp(chet)}`
                    },
                      "color": "primary"
                }]
                 ]
                 })//end
         });
        if(options.count > message.user.btc) return bot(`\n🌐 KustiPay Service\n❌ Отклонено\n📦 Описание:\nВведённая сумма больше чем у вас есть!`);
        let a = Math.floor(btc * 5 * options.count * 500);
		message.user.balance += Math.floor(a);
        message.user.btc -= options.count;
        /*const trans = message.user.transactions.push
        ({
            id: trans.length,
            title: `Продажа «Конопля» (${options.count}г)`,
            desc: '',
            targetType: "shop",
            targetId: 0,
            charge: `+${utils.rn(a)}🌳`,
        });*/
        return bot(`\n🌐 KustiPay Service\n✅ Успешная продажа\n📦 Предмет: Конопля (${options.count}г)\n💸 Получено: ${utils.rn(a)}🌳`);
	}
	if(/огород/i.test(message.args[1].toLowerCase()))
	{   
        if(!message.user.misc.farm) return bot(`\n🌐 KustiPay Service\n❌ Отклонено\n📦 Описание:\nУ вас нету огорода!`);
        const oldogname = farms[message.user.misc.farm - 1].name;
		let a = Math.floor(farms[message.user.misc.farm - 1].cost * 0.85);

		message.user.balance += Math.floor(farms[message.user.misc.farm - 1].cost * 0.85);
        message.user.misc.farm = 0;
        const trans = message.user.transactions
        trans.push({
            id: trans.length,
            title: `Продажа «${oldogname}»`,
            desc: '',
            targetType: "shop",
            targetId: 0,
            charge: `+${utils.rn(a)}🌳`,
        });
        return bot(`\n🌐 KustiPay Service\n✅ Успешная продажа\n📦 Предмет: ${oldogname}\n💸 Получено: ${utils.rn(a)}🌳`);
    }
});
cmd.hear(/^(?:огород собрать|саженцы|урожай|конопля|уражай|собрать|собрать урожай|собрать коноплю)$/i, async (message, bot) => {
	if(!message.user.misc.farm) return bot(`\n❌ У вас нету огорода!`);
	if(!message.user.farm_btc) return bot(`\n❌ Конопля ещё не прорасла.`);
	const btc_ = message.user.farm_btc;
    message.user.btc += message.user.farm_btc;
    message.user.soldsazen += message.user.farm_btc;
    message.user.farm_btc = 0;
	return bot(`\nвы собрали 🌿 ${utils.sp(btc_)} грамм!\n🌿 Конопля: ${utils.sp(message.user.btc)} грамм`);
});
cmd.hear(/^(?:огород)$/i, async (message, bot) => {
	if(!message.user.misc.farm) return bot(`\n❌ У вас нету огорода!`);
	return bot(`\n🚜 Твой огород: ${farms[message.user.misc.farm-1].name} (${message.user.misc.farm})\n🌿 Хранится: (${utils.sp(message.user.farm_btc)}/inf.) грамм\nЧтобы собрать урожай введи "огород собрать"`);
});

cmd.hear(/^(?:магазин|каталог|🛒)$/i, async (message, bot) => {
	return bot(`\n🌐 KustiShop\n🛒 Общий Каталог:\n\n1. Огороды (${farms.lenght})\n\nЧтобы открыть каталог:\nвведи "каталог [номер]"`);
});

cmd.hear(/^(?:огороды|купить огород|огород купить|каталог 1|магазин 1)\s?([0-9]+)?$/i, async (message, bot) => {
    if(!message.args[1]) return bot(`\n🌐 KustiShop\n🚜 Каталог Огородов:

    (🛒✔️: Могу купить, 🛒❌ не могу купить)

1. ${farms[0].name} ${message.user.misc.farm === 1 ? '✅' : '❌'}\n(${utils.sp(farms[0].cost)}🌳) [${message.user.balance >= farms[0].cost ? '🛒✔️' : '🛒❌'}]
2. ${farms[1].name} ${message.user.misc.farm === 2 ? '✅' : '❌'}\n(${utils.sp(farms[1].cost)}🌳) [${message.user.balance >= farms[1].cost ? '🛒✔️' : '🛒❌'}]
3. ${farms[2].name} ${message.user.misc.farm === 3 ? '✅' : '❌'}\n(${utils.sp(farms[2].cost)}🌳) [${message.user.balance >= farms[2].cost ? '🛒✔️' : '🛒❌'}]
4. ${farms[3].name} ${message.user.misc.farm === 4 ? '✅' : '❌'}\n(${utils.sp(farms[3].cost)}🌳) [${message.user.balance >= farms[3].cost ? '🛒✔️' : '🛒❌'}]
5. ${farms[4].name} ${message.user.misc.farm === 5 ? '✅' : '❌'}\n(${utils.sp(farms[4].cost)}🌳) [${message.user.balance >= farms[4].cost ? '🛒✔️' : '🛒❌'}]
6. ${farms[5].name} ${message.user.misc.farm === 6 ? '✅' : '❌'}\n(${utils.sp(farms[5].cost)}🌳) [${message.user.balance >= farms[5].cost ? '🛒✔️' : '🛒❌'}]
7. ${farms[6].name} ${message.user.misc.farm === 7 ? '✅' : '❌'}\n(${utils.sp(farms[6].cost)}🌳) [${message.user.balance >= farms[6].cost ? '🛒✔️' : '🛒❌'}]
8. ${farms[7].name} ${message.user.misc.farm === 8 ? '✅' : '❌'}\n(${utils.sp(farms[7].cost)}🌳) [${message.user.balance >= farms[7].cost ? '🛒✔️' : '🛒❌'}]
9. ${farms[8].name} ${message.user.misc.farm === 9 ? '✅' : '❌'}\n(${utils.sp(farms[8].cost)}🌳) [${message.user.balance >= farms[8].cost ? '🛒✔️' : '🛒❌'}]
10. ${farms[9].name} ${message.user.misc.farm === 10 ? '✅' : '❌'}\n(${utils.sp(farms[9].cost)}🌳) [${message.user.balance >= farms[9].cost ? '🛒✔️' : '🛒❌'}]
11. ${farms[10].name} ${message.user.misc.farm === 11 ? '✅' : '❌'}\n(${utils.sp(farms[10].cost)}🌳) [${message.user.balance >= farms[10].cost ? '🛒✔️' : '🛒❌'}]
12. ${farms[11].name} ${message.user.misc.farm === 12 ? '✅' : '❌'}\n(${utils.sp(farms[11].cost)}🌳) [${message.user.balance >= farms[11].cost ? '🛒✔️' : '🛒❌'}]
13. ${farms[12].name} ${message.user.misc.farm === 13 ? '✅' : '❌'}\n(${utils.sp(farms[12].cost)}🌳) [${message.user.balance >= farms[12].cost ? '🛒✔️' : '🛒❌'}]
14. ${farms[13].name} ${message.user.misc.farm === 14 ? '✅' : '❌'}\n(${utils.sp(farms[13].cost)}🌳) [${message.user.balance >= farms[13].cost ? '🛒✔️' : '🛒❌'}]
15. ${farms[14].name} ${message.user.misc.farm === 15 ? '✅' : '❌'}\n(${utils.sp(farms[14].cost)}🌳) [${message.user.balance >= farms[14].cost ? '🛒✔️' : '🛒❌'}]
16. ${farms[15].name} ${message.user.misc.farm === 16 ? '✅' : '❌'}\n(${utils.sp(farms[15].cost)}🌳) [${message.user.balance >= farms[15].cost ? '🛒✔️' : '🛒❌'}]
17. ${farms[16].name} ${message.user.misc.farm === 17 ? '✅' : '❌'}\n(${utils.sp(farms[16].cost)}🌳) [${message.user.balance >= farms[16].cost ? '🛒✔️' : '🛒❌'}]
18. ${farms[17].name} ${message.user.misc.farm === 18 ? '✅' : '❌'}\n(${utils.sp(farms[17].cost)}🌳) [${message.user.balance >= farms[17].cost ? '🛒✔️' : '🛒❌'}]
19. ${farms[18].name} ${message.user.misc.farm === 19 ? '✅' : '❌'}\n(${utils.sp(farms[18].cost)}🌳) [${message.user.balance >= farms[18].cost ? '🛒✔️' : '🛒❌'}]
20. ${farms[19].name} ${message.user.misc.farm === 20 ? '✅' : '❌'}\n(${utils.sp(farms[19].cost)}🌳) [${message.user.balance >= farms[19].cost ? '🛒✔️' : '🛒❌'}]

Чтобы заказать огород:\nвведи "Купить Огород [номер]"`);

    const sell = farms.find(x=> x.id === Number(message.args[1]));
    if(!sell) return;
    if(message.user.misc.farm) return bot(`\n🌐 KustiPay Service\n❌ Отклонено\n📦 Описание:\nУ вас уже есть огород «${farms[message.user.misc.farm - 1].name}»!`);
   

    if(message.user.balance < sell.cost) return bot(`\n🌐 KustiPay Service\n❌ Отклонено\n📦 Описание:\nНедостаточно 🌳:\n[${utils.rn(message.user.balance)}🌳/${utils.rn(sell.cost)}🌳]`);
    else if(message.user.balance >= sell.cost)
    {
        message.user.balance -= sell.cost;
        message.user.misc.farm = sell.id;
        const trans = message.user.transactions
        trans.push({
            id: trans.length,
            title: `Покупка «${sell.name}»`,
            desc: '',
            targetType: "shop",
            targetId: 0,
            charge: `-${utils.rn(sell.cost)}🌳`,
        });
        return bot(`\n🌐 KustiPay Service\n✅ Успешная оплата\n📦 Предмет: ${sell.name}\n💸 Оплачено: ${utils.rn(sell.cost)}🌳`);
    }
});


cmd.hear(/^(?:профиль|👤 Профиль|👤)$/i, async (message, bot) => {
    if(message.replyMessage != null){
    let user = users.find(x=> x.id === message.replyMessage.senderId);
    const [user_info] = await vk.api.users.get({ user_id:  message.replyMessage.senderId});
    let text = ``;
    if(user.inClan === true) text += `👥 КустиКлан: ${clans[user.clanId].title}\n`;
    text += `🔗 URL: vk.com/id${user_info.id}\n`;
    if(user.misc.farm) text += `🚜 Огород: ${farms[user.misc.farm - 1].name}\n`;
    text += `📅 Первое Появление: ${user.regDate}\n`;
    text += `${utils.rn(user.btc)}🌿 | ${utils.rn(user.balance)}🌳 | ${utils.rn(user.rating)}🍞 | ${user.calls}🤙\n`;
    if(user.marriage.partner) text += `🌳 Твой Кустик: ${users[user.marriage.partner].tag}\n`;
    text += `🚫 Баны:\n(Бан аккаунта|Бан в топе|Бан репортов|Бан переводов|):\n (${user.ban ? "✅" : "❌"}|${user.topban ? "✅" : "❌"}|${user.repban ? "✅" : "❌"}|${user.transban ? "✅" : "❌"})`;
    return message.send(`\nЭто [id${user.id}|${user.tag}] (${user.uid})\n ${text}`);
};

    const [user_info] = await vk.api.users.get({ user_id: message.senderId });
    let text = ``;
    text += `🆔 KustID: ${message.user.uid}\n`;
    
    if(message.user.inClan === true) text += `👥 ${clans[message.user.clanId].title}\n`;
    text += `🔗 URL: vk.com/id${user_info.id}\n`;
    if(message.user.misc.farm) text += `🚜 Огород: ${farms[message.user.misc.farm - 1].name}\n`;
    text += `📅 Первое Появление: ${message.user.regDate}\n`;
    text += `${utils.rn(message.user.btc)}🌿 | ${utils.rn(message.user.balance)}🌳 | ${utils.rn(message.user.rating)}🍞 | ${message.user.calls}🤙\n`;
    if(message.user.marriage.partner) text += `🌳 Твой Кустик: ${users[message.user.marriage.partner].tag}\n`;
    if(message.user.warns) text += `\n⚠️ Варны: [${message.user.warns}/3]\n`;
    text += `🚫 Баны:\n(Бан аккаунта|Бан в топе|Бан репортов|Бан переводов|):\n (${message.user.ban ? "✅" : "❌"}|${message.user.topban ? "✅" : "❌"}|${message.user.repban ? "✅" : "❌"}|${message.user.transban ? "✅" : "❌"})`;
    if(!message.isChat) {
        await message.send(`\n ${text}`, {
           // keyboard: generateProfileKeyboard([`👤 ${message.user.tag}`,`🆔 ${message.user.uid}`, `🍞 ${utils.rn(message.user.rating)}`, `🌳 ${utils.rn(message.user.balance)}`,`◀️ Главное Меню`])
           keyboard:JSON.stringify(//start
            {
                "one_time": false,
                "buttons": [
                    [{
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"4\"}",
                        "label": `👤 ${message.user.tag}`
                    },
                        "color": "primary"
                },
                {
                    "action": {
                    "type": "text",
                    "payload": "{\"button\": \"4\"}",
                    "label": `🆔 ${message.user.uid}`
                },
                    "color": "primary"
            }],
                [{
                    "action": {
                    "type": "text",
                    "payload": "{\"button\": \"4\"}",
                    "label": `🍞 ${utils.rn(message.user.rating)}`
                },
                    "color": "positive"
                },
                {
                    "action": {
                    "type": "text",
                    "payload": "{\"button\": \"4\"}",
                    "label": `🌳 ${utils.rn(message.user.balance)}`
                },
                    "color": "positive"
                }],
                [{
                    "action": {
                    "type": "text",
                    "payload": "{\"button\": \"4\"}",
                    "label": `◀️ Главное Меню`
                 },
                    "color": "negative"
                }]
                ]
                })//end
        });
    }
    if(message.isChat) {
        await message.send(`\n ${text}`);
    }
});

cmd.hear(/^(?:вк)\s?([0-9]+)?$/i, async (message, bot) => {
    let user = users.find(x=> x.uid === Number(message.args[1]));

    if(!user) return bot('⚠️ Пример использования:\n"вк [KustID]"');

    const [user_info] = await vk.api.users.get({ 
        name_case: 'gen',
        user_id: user.id,
        fields: 'photo_id, verified, sex, bdate, city, country, home_town, has_photo, photo_50,counters, photo_100, photo_200_orig, photo_200, photo_400_orig, photo_max, photo_max_orig, online, domain, has_mobile, contacts, site, education, universities, schools, status, followers, last_seen, followers_count, occupation, nickname, relatives, relation, personal, connections, exports, activities, interests, music, movies, tv, books, games, about, quotes, can_post, can_see_all_posts, can_see_audio, can_write_private_message, can_send_friend_request, is_favorite, is_hidden_from_feed, timezone, screen_name, maiden_name, crop_photo, is_friend, friend_status, career, military, blacklisted, blacklisted_by_me, can_be_invited_group'
    });
    const [user_info_keyboard] = await vk.api.users.get({ 
        name_case: 'nom',
        user_id: user.id,
        fields: 'first_name, last_name'
    });
    let text = ``;
    if(user) text += `🌳 KustiBot: [id${user.id}|${user.tag}] (${user.uid})\n`;
    if(!user) text += `🌳 KustiBot: Не зарегистрирован(a)\n`;
    text += `🔗 Ник Ссылка: vk.com/${user_info.domain}\n`;
    text += `🔗 ID Ссылка: vk.com/id${user_info.id}\n`;
    text += `👥 Подписчики: ${user_info.followers_count}\n`;
    text += `🎧 Аудио: ${user_info.counters.audios}\n`;
    text += `🎥 Видео: ${user_info.counters.videos}\n`;
    text += `📷 Фото: ${user_info.counters.photos}\n`;
    text += `👥 Подписки: ${user_info.counters.subscriptions}\n`;
    text += `👋 Друзья: ${user_info.counters.friends}\n`;
    text += `🎁 Подарки: ${user_info.counters.gifts}\n`;
    text += `📝 Посты: ${user_info.counters.posts}\n`;
    //text += `🗺️ Местонахождение: ${user_info.country.title}, ${user_info.city.title}\n`;
    text += `🚫 Приватный Аккаунт: ${user_info.is_closed ? "да" : "нет"}\n`;
    text += `📜 Статус: "${user_info.status}"\n`;
    if(user_info.has_photo === 1) text += `🖼️ Аватарка: да\n`;
    if(user_info.has_photo === 0) text += `🖼️ Аватарка: нет\n`;
    if(user_info.verified === 1) text += `✅ Галочка: да\n`;
    if(user_info.verified === 0) text += `✅ Галочка: нет\n`;
    if(user_info.sex === 2) text += `🍆 Пол: Мужской (👨)\n`;
    if(user_info.sex === 1) text += `🍆 Пол: Женский (👩)\n`;
    if(user_info.sex != 1 && user_info.sex != 2) text += `🍆 Пол: Неопределено (❔)\n`;
    if(user_info.online === 1) text += `💻 Сейчас Онлайн: да\n`;
    if(user_info.online === 0) text += `💻 Сейчас Онлайн: нет\n`;
    text += `📅 День Рождения: ${user_info.bdate}\n`;
    if(message.isChat){
        await message.send(`\n👤 Профиль [id${message.senderId}|${user_info.first_name} ${user_info.last_name}]\n${text}`, {
            attachment:`photo${user_info.photo_id}`});
    };
    if(!message.isChat){
    await message.send(`\n👤 Профиль [id${user.id}|${user_info.first_name} ${user_info.last_name}]\n${text}`, {
        attachment:`photo${user_info.photo_id}`,
        // keyboard: generateProfileKeyboard([`👤 ${message.user.tag}`,`🆔 ${message.user.uid}`, `🍞 ${utils.rn(message.user.rating)}`, `🌳 ${utils.rn(message.user.balance)}`,`◀️ Главное Меню`])
        keyboard:JSON.stringify(//start
            {
            "one_time": false,
            "buttons": [
        [{
			"action": {
			"type": "text",
			"payload": "{\"button\": \"4\"}",
			"label": `👤 ${user_info_keyboard.first_name} ${user_info_keyboard.last_name} (${message.user.id})`
		},
			"color": "primary"
    }],
    [{
        "action": {
        "type": "text",
        "payload": "{\"button\": \"4\"}",
        "label": `◀️ Главное Меню`
    },
        "color": "negative"
}]
            ]
                })//end
     });
    }
});

function unixStampLeft(stamp) {
	stamp = stamp / 1000;

	let s = stamp % 60;
	stamp = ( stamp - s ) / 60;

	let m = stamp % 60;
	stamp = ( stamp - m ) / 60;

	let	h = ( stamp ) % 24;
	let	d = ( stamp - h ) / 24;

	let text = ``;

	if(d > 0) text += Math.floor(d) + " д. ";
	if(h > 0) text += Math.floor(h) + " ч. ";
	if(m > 0) text += Math.floor(m) + " мин. ";
	if(s > 0) text += Math.floor(s) + " с.";

	return text;
}
cmd.hear(/^(?:транзакции)$/i, async (message, bot) => {
	let top = [];
    message.user.transactions.map(x=> {
		top.push({ id: x.id, title: x.title, targetType: x.targetType, targetId: x.targetId, charge: x.charge });
	});
	top.sort((a, b) => {
		return b.id - a.id;
	});
	let text = ``;
	const find = () => {
		let pos = 1000;
		for (let i = 0; i > top.length; i++)
		{
			if(top[i].id === message.senderId) return pos = i;
		}
		return pos;
    }
    
	for (let i = 0; i < top.length; i++)
	{
        if(!top[i]) return;
		const transaction = top[i];
        let symbol = `🚫`;
        if(transaction.targetType == "shop") symbol = "🛒";
        if(transaction.targetType == "transfer") symbol = "👤";
        if(transaction.targetType == "bet") symbol = "🎰";
        if(transaction.targetType == "bonus") symbol = "🎁";
        if(transaction.targetType == "clan") symbol = "🛡️";
        if(transaction.targetType == "cup") symbol = "🎲";
		text += `[${symbol}] ${transaction.id+1}. ${transaction.title} (${transaction.charge})\n`;
	}
	return bot(`\n🌐 KustiPay Service\n📝 Список всех транзакций:\n${text}\n\n(Транзакции начали учитываться 1/12/2020)`);
});


cmd.hear(/^(?:список|📙 Список|📙 список|Список|)$/i, async (message, bot) => {
	console.log('prepairing stats');
	let top = [];

	cards.map(x=> {
		top.push({ id: x.id, name: x.name, desc: x.desc, price: x.price, photourl: x.photourl, colors: x.colors, date: x.date });
	});

	top.sort((a, b) => {
		return b.id - a.id;
	});

	let text = ``;
	const find = () => {
		let pos = 1000;

		for (let i = 0; i > top.length; i++)
		{
			if(top[i].id === message.senderId) return pos = i;
		}

		return pos;
	}

	for (let i = 0; i < top.length; i++)
	{
		if(!top[i]) return;
		const card = top[i];

		text += `${card.id}. ${card.name} (${card.price})
		`;
	}
	console.log(`sent stats`);
	return message.send(`Список Всех Доступных Карточек:
		${text}
—————————————————
Список [номер], чтобы просмотреть карту со списка.`);
});

cmd.hear(/^(?:баланс|👛 баланс|👛 Баланс|wallet|balance|money|coins|Кустики|👛)$/i, async (message, bot) => {
    let text = ``;
    text += `👜Твой баланс:`;
    if(message.user.balance) text += `\n🌳 Кустики: ${utils.rn(message.user.balance)}🌳`;
    if(message.user.rating) text += `\n🍞 Хлеб: ${utils.rn(message.user.rating)}🍞`;
    if(message.user.btc) text += `\n🌿 Конопля: ${utils.rn(message.user.btc)}г`;
    if(!message.isChat) {
    
    await message.send(`\n${text}`, {
        //keyboard: generateTopKeyboard([`👤 ${message.user.tag}`, `🌳 ${utils.rn(message.user.balance)}`, `🍞 ${utils.rn(message.user.rating)}`, `🌿 ${utils.rn(message.user.btc)} грамм`,`◀️ Главное Меню`])
        keyboard:JSON.stringify(//start
            {
                "one_time": false,
                "buttons": [
                    [{
						"action": {
						"type": "text",
						"payload": "{\"button\": \"4\"}",
						"label": `👤 ${message.user.tag}`
					},
						"color": "primary"
                }],
                [{
                    "action": {
                    "type": "text",
                    "payload": "{\"button\": \"4\"}",
                    "label": `🌳 ${utils.rn(message.user.balance)}`
                },
                    "color": "secondary"
            }],
            [{
                "action": {
                "type": "text",
                "payload": "{\"button\": \"4\"}",
                "label": `🍞 ${utils.rn(message.user.rating)}`
            },
                "color": "secondary"
        }],
        [{
            "action": {
            "type": "text",
            "payload": "{\"button\": \"4\"}",
            "label": `🌿 ${utils.rn(message.user.btc)} грамм`
        },
            "color": "secondary"
    }],
    [{
        "action": {
        "type": "text",
        "payload": "{\"button\": \"4\"}",
        "label": `◀️ Главное Меню`
    },
        "color": "negative"
}]
            ]
                })//end
    });
    }
    if(message.isChat) {
        await message.send(`\n${text}`);
    }
});

cmd.hear(/^(?:уведомления)\s(нет|да)$/i, async (message, bot) => {
    if(message.args[1].toLowerCase() === 'нет')
    {
        message.user.notifications = false;
        return bot(`❌ уведомления отключены.`);
    }

    if(message.args[1].toLowerCase() === 'да')
    {
        return bot(`✅ уведомления включены.`);
    }
});

cmd.hear(/^(?:передать|перевести|перевод)\s([0-9]+)\s(.*)\s(хлеб|хлеба|хлебав|хлебов|булки|булок)$/i, async (message, bot) => {
    message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
    message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
    message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
    message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.rating);

    if(!Number(message.args[2])) return;
    message.args[2] = Math.floor(Number(message.args[2]));

    if(message.user.transban) return message.reply(`\n🌐 KustiPay Service\n❌ Отклонено\n📦 Описание:\nУ вас больше нет доступа к этой команде.`);

    if(message.args[2] <= 0) return;

    if(message.args[2] > message.user.rating)
      return bot(`недостаточно Хлеба\nХлеб: ${utils.rn(message.user.rating)}🍞`);
    
    if(message.args[2] <= message.user.rating)
    {
        let user = users.find(x=> x.uid === Number(message.args[1]));
        if(!user)
             return bot(`\n🌐 KustiPay Service\n❌ Отклонено\n📦 Описание:\nНеверный KustID.`);

        if(user.uid === message.user.uid) return bot(`\n🌐 KustiPay Service\n❌ Отклонено\n📦 Описание:\nЭтот KustID пренадлежит вам.`);
        if(user.platform === 'bot') return bot(`\n🌐 KustiPay Service\n❌ Отклонено`);
        message.user.rating -= message.args[2];
        user.rating += message.args[2];

        if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `\n🌐 KustiPay Service\n✅ Пополнение Баланса\n👤 Отправитель: [id${message.user.id}|${message.user.tag}]\n💸 Сумма:${utils.rn(message.args[2])}🍞` });
        bdata[5].count += 1;
        bdata[9].count += 1;
        bdata[7].count += message.args[2];
        var date = new Date();
        transfers.push({
            id: transfers.length,
            from: `[id${message.user.id}|${message.user.tag}] (${message.user.uid})`, 
            to: `[id${user.id}|${user.tag}] (${user.uid})`,
            valuename: `bread`,
            status: `confirmed`,
            reason: `Подтверждено сервером.`,
            value: message.args[2],
            activationDate: `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`,
            activationTime:`${date.getHours()}:${date.getMinutes()}`
        });
        const trans = message.user.transactions
        trans.push({
            id: trans.length,
            title: `Перевод «[id${user.id}|${user.tag}]»`,
            desc: '',
            targetType: "transfer",
            targetId: user.id,
            charge: `-${utils.rn(message.args[2])}🍞`,
        });
        await bot(`\n🌐 KustiPay Service\n✅ Успешное Пополнение\n👤 Получатель: [id${user.id}|${user.tag}]\n💸 Сумма:${utils.rn(message.args[2])}🍞`);
    }
});

cmd.hear(/^(?:передать|перевести|перевод)\s([0-9]+)\s(.*)\s(коин|коинс|коина|коины|коинов)$/i, async (message, bot) => {
    message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
    message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
    message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
    message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

    if(!Number(message.args[2])) return;
    message.args[2] = Math.floor(Number(message.args[2]));

    if(message.args[2] <= 0) return;

    if(message.args[2] > message.user.balance) return bot(`недостаточно Кустики\nКустики: ${utils.rn(message.user.balance)}🌳`);
    
    if(message.args[2] <= message.user.balance)
    {
        let user = users.find(x=> x.uid === Number(message.args[1]));
        if(!user)
             return bot(`\n🌐 KustiPay Service\n❌ Отклонено\n📦 Описание:\nНеверный KustID.`);

        if(user.uid === message.user.uid)
        
            return bot(`\n🌐 KustiPay Service\n❌ Отклонено\n📦 Описание:\nЭтот KustID пренадлежит вам.`);

        message.user.balance -= message.args[2];
        user.balance += message.args[2];
        if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `\n🌐 KustiPay Service\n✅ Пополнение Баланса\n👤 Отправитель: [id${message.user.id}|${message.user.tag}]\n💸 Сумма:${utils.rn(message.args[2])}🌳` });
        bdata[5].count += 1;
        bdata[8].count += 1;
        bdata[6].count += message.args[2];
        var date = new Date();
        transfers.push({
            id: transfers.length,
            from: `[id${message.user.id}|${message.user.tag}] (${message.user.uid})`, 
            to: `[id${user.id}|${user.tag}] (${user.uid})`,
            valuename: `coins`,
            status: `confirmed`,
            reason: `Подтверждено сервером.`,
            value: message.args[2],
            activationDate: `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`,
            activationTime:`${date.getHours()}:${date.getMinutes()}`
        });
        const trans = message.user.transactions
        trans.push({
            id: trans.length,
            title: `Перевод «[id${user.id}|${user.tag}]»`,
            desc: '',
            targetType: "transfer",
            targetId: user.id,
            charge: `-${utils.rn(message.args[2])}🌳`,
        });
        await bot(`\n🌐 KustiPay Service\n✅ Успешное Пополнение\n👤 Получатель: [id${user.id}|${user.tag}]\n💸 Сумма:${utils.rn(message.args[2])}🌳`);
    }
});

cmd.hear(/^(?:хлеб|мой хлеб|булка)$/i, async (message, bot) => {
    return bot(`\n🌐 KustiPay Service\n👛 Баланс: ${utils.rn(message.user.rating)}🍞`);
});

cmd.hear(/^(?:Ссылка)\s(да|нет)$/i, async (message, bot) => {
    if(message.args[1].toLowerCase() === 'да')
    {
        message.user.mention = true;
        return bot(`✅ Ник-Ссылка Включен.`);
    }

    if(message.args[1].toLowerCase() === 'нет')
    {
        message.user.mention = false;
        return bot(`❌ Ник-Ссылка Отключен`);
    }
});

cmd.hear(/^(?:профиль|анкета|аккаунт)\s(нет|да)$/i, async (message, bot) => {
    if(message.args[1].toLowerCase() === 'да')
    {
        message.user.profilewatch = true;
        return bot(`✅ Профиль открыт.`);
    }

    if(message.args[1].toLowerCase() === 'нет')
    {
        message.user.profilewatch = false;
        return bot(`❌ Профиль закрыт.`);
    }
});

cmd.hear(/^(?:баланс|кошелёк|кошелек)\s(нет|да)$/i, async (message, bot) => {
    if(message.args[1].toLowerCase() === 'да')
    {
        message.user.balanceview = true;
        return bot(`✅ Кошелёк открыт.`);
    }

    if(message.args[1].toLowerCase() === 'нет')
    {
        message.user.balanceview = false;
        return bot(`❌ Кошелёк закрыт.`);
    }
    
});

cmd.hear(/^(?:set)\s(balance|bread|nick)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
    let user = users.find(x=> x.uid === Number(message.args[2]));
    let value = message.args[3];
    if(!message.user.admin) return bot('❌ Доступ запрещён.');

    if(message.args[1].toLowerCase() === 'balance')
    {
        let oldnum = user.balance;
        user.balance = Number(message.args[3]);
        await vk.api.messages.send({ user_id: user.id, message: `\n🔵 System Notification\n✅ Изменение Профиля\n✉️ Параметр: 🌳Баланс\n${utils.sp(oldnum)}🌳 ➡️ ${utils.sp(user.balance)}🌳`});
        return bot(`\n🌟KustiAdmin\n🎯 Цель: [id${user.id}|${user.tag}]\n✉️ Параметр: 🌳Баланс\n${utils.sp(oldnum)}🌳 ➡️ ${utils.sp(user.balance)}🌳`);
    }
    if(message.args[1].toLowerCase() === 'bread')
    {
        let oldnum = user.rating;
        user.rating = Number(message.args[3]);
        await vk.api.messages.send({ user_id: user.id, message: `\n🔵 System Notification\n✅ Изменение Профиля\n✉️ Параметр: 🍞Хлеб\n${utils.sp(oldnum)}🍞 ➡️ ${utils.sp(user.rating)}🍞`});
        return bot(`\n🌟KustiAdmin\n🎯 Цель: [id${user.id}|${user.tag}]\n✉️ Параметр: 🍞Баланс\n${utils.sp(oldnum)}🍞 ➡️ ${utils.sp(user.rating)}🍞`);
    }
    if(message.args[1].toLowerCase() === 'nick')
    {
        let oldnum = user.tag;
        user.tag = String(message.args[3]);
        await vk.api.messages.send({ user_id: user.id, message: `\n🔵 System Notification\n✅ Изменение Профиляn✉️ Параметр: 👤Ник\n[id${user.id}|${oldnum}] ➡️ [id${user.id}|${user.tag}]`});
        return bot(`\n🌟KustiAdmin\n🎯 Цель: [id${user.id}|${user.tag}]\n✉️ Параметр: 👤Ник\n[id${user.id}|${oldnum}] ➡️ [id${user.id}|${user.tag}]`);
    }
});

cmd.hear(/^(?:ник)\s(.*)$/i, async (message, bot) => {
    const value2 = message.args[1];
    const value = message.args[1].toLowerCase();
    if(message.user.rating < 5) return bot(`❌ замена ника стоит 5🍞.\nТвой Хлеб: ${utils.sp(message.user.rating)}`);
    if(message.args[1].length >= 16) return bot(`❌ максимум 15 символов.`);
    if(message.args[1].length < 3) return bot(`❌ миниимум 3 символолa.`);
    if(message.args[1].toLowerCase() === 'админ') return bot(`❌ ${utils.getS1Pht()}`);
    let fuck = users.find(x=> x.tag.toLowerCase() === value);
    if(fuck) return bot(`❌ ник "[id${fuck.id}|${fuck.tag}]" уже занят`)
    if(users.find(x=> x.tag.toLowerCase() === value)) return bot(`❌ ник ${value2} уже занят.`);
    let oldnick = message.user.tag;
    peppero = message.args[2].replace(/(🖕|пизда|хуй|пидор|еблан|пиздец|анус|анал|сперма|хуйло|дрочить)/ig, 'ЪЕЪ'); 
    message.user.tag = peppero;
    message.user.rating -= 5;
    return bot(`\n🌐 KustiPay Service\n✅ Успешная оплата\n📦 Отправлено: 5🍞\n✅ Ник Изменен:\n[id${message.user.id}|${oldnick}] → [id${message.user.id}|${message.user.tag}]`);
});

cmd.hear(/^(?:разменять|обмен|обменять|exchange)$/i, async (message, bot) => {
    return bot(`💱 Обмен Валют\nКоманды Для Обмена:\nОбмен хлеб [кол. хлеба] - 🌳→🍞\nОбмен койны [кол. коинов] - 🍞→🌳 (75%)`);
});

cmd.hear(/^(?:разменять|обмен|обменять|ex|exchange)\s(койны|коины|хлеб)\s?(.*)?$/i, async (message, bot) => {
    message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
    message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
    message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
    message.args[2] = message.args[2].replace(/(мд|b)/ig, '000000000');
    message.args[2] = message.args[2].replace(/(т|t)/ig, '000000000000');
    if(message.args[1].toLowerCase() === 'койны')
    {
        if(!Number(message.args[2])) return bot(`\n🌐 KustiPay Service\n❌ Отклонено\n📦 Описание:\nневерные данные.`);
        message.args[2] = Math.floor(Number(message.args[2]));
    
        if(message.args[2] <= 0) return bot(`\n🌐 KustiPay Service\n❌ Отклонено\n📦 Описание:\nуказана сумма < 0🍞.`);
    
        if(( message.args[2]) > message.user.rating) return bot(`\n🌐 KustiPay Service\n❌ Отклонено\n📦 Описание:\nнедостаточно средств!\nНа Балансе: ${utils.rn(message.user.rating)}🍞\n Нужно: ${utils.rn(message.args[2])}🍞`);
        else if((message.args[2]) <= message.user.rating)
        {
            message.user.balance += ( message.args[2] * 187500000 );
            message.user.rating -= message.args[2];
            return bot(`\n🌐 KustiPay Service\n✅ Успешный обмен\n📦 Отправлено: ${utils.rn(message.args[2])}🍞\n💸 Получено: ${utils.rn(message.args[2] * 187500000 )}🌳 (75% от цены 🍞)`);
        }
    }

    if(message.args[1].toLowerCase() === 'хлеб')
    {
        if(!message.args[2]) return message.send(`[id${message.user.id}|${message.user.tag}],\n🌐 KustiPay Service\nВы можете обменять:\n1) За все 🌳\n${utils.sp(Math.round(message.user.balance/250000000))}🍞\n2) За половину 🌳\nn${utils.sp(Math.round(message.user.balance/250000000/2))}🍞\n3) За четверть 🌳\nn${utils.sp(Math.round(message.user.balance/250000000/4))}🍞\n`, {
            // keyboard: generateProfileKeyboard([`👤 ${message.user.tag}`,`🆔 ${message.user.uid}`, `🍞 ${utils.rn(message.user.rating)}`, `🌳 ${utils.rn(message.user.balance)}`,`◀️ Главное Меню`])
            keyboard:JSON.stringify(//start
             {
                 "inline": true,
                 "buttons": [
                     [{
                         "action": {
                         "type": "text",
                         "payload": "{\"button\": \"4\"}",
                         "label": `ex хлеб ${utils.sp(Math.round(message.user.balance/250000000))}`
                     },
                         "color": "primary"
                    }],
                    [{
                     "action": {
                        "type": "text",
                        "payload": "{\"button\": \"4\"}",
                          "label": `ex хлеб ${utils.sp(Math.round(message.user.balance/250000000/2))}`
                     },
                               "color": "primary"
                    }],
                    [{
                        "action": {
                     "type": "text",
                      "payload": "{\"button\": \"4\"}",
                        "label": `ex хлеб ${utils.sp(Math.round(message.user.balance/250000000/4))}`
                    },
                      "color": "primary"
                }]
                 ]
                 })//end
         });
        if(!Number(message.args[2])) return message.send(`[id${message.user.id}|${message.user.tag}],\n🌐 KustiPay Service\nВы можете обменять:\n1) За все 🌳\n${utils.sp(Math.round(message.user.balance/250000000))}🍞\n2) За половину 🌳\nn${utils.sp(Math.round(message.user.balance/250000000/2))}🍞\n3) За четверть 🌳\n${utils.sp(Math.round(message.user.balance/250000000/4))}🍞\n`, {
            // keyboard: generateProfileKeyboard([`👤 ${message.user.tag}`,`🆔 ${message.user.uid}`, `🍞 ${utils.rn(message.user.rating)}`, `🌳 ${utils.rn(message.user.balance)}`,`◀️ Главное Меню`])
            keyboard:JSON.stringify(//start
             {
                 "inline": true,
                 "buttons": [
                     [{
                         "action": {
                         "type": "text",
                         "payload": "{\"button\": \"4\"}",
                         "label": `ex хлеб ${utils.sp(Math.round(message.user.balance/250000000))}`
                     },
                         "color": "primary"
                    }],
                    [{
                     "action": {
                        "type": "text",
                        "payload": "{\"button\": \"4\"}",
                          "label": `ex хлеб ${utils.sp(Math.round(message.user.balance/250000000/2))}`
                     },
                               "color": "primary"
                    }],
                    [{
                        "action": {
                     "type": "text",
                      "payload": "{\"button\": \"4\"}",
                        "label": `ex хлеб ${utils.sp(Math.round(message.user.balance/250000000/4))}`
                    },
                      "color": "primary"
                }]
                 ]
                 })//end
         });
        message.args[2] = Math.floor(Number(message.args[2]));
    
        if(message.args[2] <= 0) return bot(`\n🌐 KustiPay Service\n❌ Отклонено\n📦 Описание:\nуказана сумма < 0🌳.`);
    
        if(( message.args[2] * 250000000 ) > message.user.balance) return bot(`\n🌐 KustiPay Service\n❌ Отклонено\n📦 Описание:\nнедостаточно средств!\nНа Балансе: ${utils.rn(message.user.balance)}🌳\n Нужно: ${utils.rn(message.args[2] * 250000000)}🌳`);
        else if(( message.args[2] * 250000000 ) <= message.user.balance)
        {
            message.user.balance -= ( message.args[2] * 250000000 );
            message.user.rating += message.args[2];
            return bot(`\n🌐 KustiPay Service\n✅ Успешный обмен\n📦 Отправлено: ${utils.rn(message.args[2] * 250000000)}🌳\n💸 Получено: ${utils.rn(message.args[2])}🍞`);
        }
    }
});

cmd.hear(/^(?:топ к|топ клан|топ кланы|топ кланов|🏆 Топ кланы|🏆🛡️)$/i, async (message, bot) => {
    let top = [];

    clans.map(x=> {
        top.push({ bread: x.bread, id: x.id, title: x.title, admin: x.admin, rules: x.rules, members: x.members, desc: x.desc, memberval: x.memberval });
    });

    top.sort((a, b) => {
        return b.bread - a.bread;
    });

    let text = ``;
    const find = () => {
        let pos = 1000;

        for (let i = 0; i < top.length; i++)
        {
            if(top[i].id === message.senderId) return pos = i;
        }

        return pos;
    }

    for (let i = 0; i < clans.length; i++)
    {
        if(!top[i]) return;
        const clan = top[i];
        
        if (i === 0) text += `🥇 [kustibot|${clan.title}]\n${utils.rn(clan.bread)}🍞 | ${utils.rn(clan.memberval)}👥\n`;
        if (i === 1) text += `🥈 [kustibot|${clan.title}]\n${utils.rn(clan.bread)}🍞 | ${utils.rn(clan.memberval)}👥\n`;
        if (i === 2) text += `🥉 [kustibot|${clan.title}]\n${utils.rn(clan.bread)}🍞 | ${utils.rn(clan.memberval)}👥\n`;
        if (i > 2) text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} [kustibot|${clan.title}] — ${utils.rn(clan.bread)}🍞 | ${utils.rn(clan.memberval)}👥\n`;
    }

    return bot(`Топ 5 КустиКланов:\n${text}`);
});

cmd.hear(/^(?:топ огородников|🌱 топ огороды|топ огороды|топ дилеры|топ фермеры|🏆🌿)$/i, async (message, bot) => {
    let top = [];

    users.map(x=> {
        top.push({balance: x.balance, rating: x.rating, tag: x.tag, id: x.id, mention: x.mention, calls: x.calls, soldsazen: x.soldsazen, topban: false });
    });

    top.sort((a, b) => {
        return b.soldsazen - a.soldsazen;
    });

    let text = ``;
    const find = () => {
        let pos = 1000;

        for (let i = 0; i < top.length; i++)
        {
            if(top[i].id === message.senderId) return pos = i;
        }

        return pos;
    }

    for (let i = 0; i < 10; i++)
    {
        if(!top[i]) return;
        const user = top[i];
        if (i === 0) text += `🥇 [id${user.id}|${user.tag}]\n🌿 ${utils.rn(user.soldsazen)} грамм\n`;
        if (i === 1) text += `🥈 [id${user.id}|${user.tag}]\n🌿 ${utils.rn(user.soldsazen)} грамм\n`;
        if (i === 2) text += `🥉 [id${user.id}|${user.tag}]\n🌿 ${utils.rn(user.soldsazen)} грамм\n`;
        if (i > 2) text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} [id${user.id}|${user.tag}]\n 🌿 ${utils.rn(user.soldsazen)} грамм\n`;
    }
    if(!message.isChat) {
    
        await message.send(`Топ Огородников:\n${text}
        ●[id${message.user.id}|Ваша] Статистика●
       ${utils.gi(find() + 1)} [id${message.user.id}|${message.user.tag}] — 🌿 ${utils.rn(message.user.soldsazen)}г`, {
           // keyboard: generateTopKeyboard([`🏆🌿 Топ Огородников`, `${utils.gi(find() + 1)} Позиция`,`◀️ Главное Меню`])
            keyboard:JSON.stringify(//start
                {
                    "one_time": false,
                    "buttons": [
                        [{
                            "action": {
                            "type": "text",
                            "payload": "{\"button\": \"4\"}",
                            "label": `🏆🌿 Топ Огородников`
                        },
                            "color": "primary"
                    }],
                    [{
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"4\"}",
                        "label": `${utils.gi(find() + 1)} Позиция`
                    },
                        "color": "positive"
                    }],
                    [{
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"4\"}",
                        "label": `🌿 ${utils.rn(message.user.soldsazen)} грамм`
                    },
                        "color": "secondary"
                    }],
                    [{
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"4\"}",
                        "label": `◀️ Главное Меню`
                     },
                        "color": "negative"
                    }]
                    ]
                    })//end
        });
    }
    if(message.isChat) {
        await message.send(`Топ Огородников:\n${text}
        ●[id${message.user.id}|Ваша] Статистика●
       ${utils.gi(find() + 1)} [id${message.user.id}|${message.user.tag}] — 🌿 ${utils.rn(message.user.soldsazen)}г`);
    }
});

cmd.hear(/^(?:топ|🏆 Топ|🏆👤|🏆👤 Топ Кустиков)$/i, async (message, bot) => {
    let top = [];

    users.map(x=> {
        top.push({ balance: x.balance, rating: x.rating, tag: x.tag, id: x.id, mention: x.mention, calls: x.calls, topban: false });
    });

    top.sort((a, b) => {
        return b.rating - a.rating;
    });

    let text = ``;
    const find = () => {
        let pos = 1000;

        for (let i = 0; i < top.length; i++)
        {
            if(top[i].id === message.senderId) return pos = i;
        }

        return pos;
    }

    for (let i = 0; i < 10; i++)
    {
        if(!top[i]) return;
        const user = top[i];

        if (i === 0) text += `🥇 [id${user.id}|${user.tag}]:\n ${utils.rn(user.rating)}🍞 | ${utils.rn(user.balance)}🌳\n`;
        if (i === 1) text += `🥈 [id${user.id}|${user.tag}]:\n ${utils.rn(user.rating)}🍞 | ${utils.rn(user.balance)}🌳\n`;
        if (i === 2) text += `🥉 [id${user.id}|${user.tag}]:\n ${utils.rn(user.rating)}🍞 | ${utils.rn(user.balance)}🌳\n`;
        if (i > 2) text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} [id${user.id}|${user.tag}]:\n${utils.rn(user.rating)}🍞 | ${utils.rn(user.balance)}🌳\n`;
    }
if(!message.isChat) {
    
    await message.send(`Топ Кустиков:\n${text}
    ●[id${message.user.id}|Ваша] Статистика●
   ${utils.gi(find() + 1)} [id${message.user.id}|${message.user.tag}]\n${utils.rn(message.user.rating)}🍞 | ${utils.rn(message.user.balance)}🌳`, {
        //keyboard: generateTopKeyboard([`🏆👤 Топ Кустиков`, `${utils.gi(find() + 1)} Позиция`,`◀️ Главное Меню`])
        keyboard:JSON.stringify(//start
            {
                "one_time": false,
                "buttons": [
                    [{
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"4\"}",
                        "label": `🏆👤 Топ Кустиков`
                    },
                        "color": "primary"
                }],
                [{
                    "action": {
                    "type": "text",
                    "payload": "{\"button\": \"4\"}",
                    "label": `${utils.gi(find() + 1)} Позиция`
                },
                    "color": "positive"
                }],
                [{
                    "action": {
                    "type": "text",
                    "payload": "{\"button\": \"4\"}",
                    "label": `🍞 ${utils.rn(message.user.rating)}`
                },
                    "color": "secondary"
                },
                {
                    "action": {
                    "type": "text",
                    "payload": "{\"button\": \"4\"}",
                    "label": `🌳 ${utils.rn(message.user.balance)}`
                },
                    "color": "secondary"
                }],
                [{
                    "action": {
                    "type": "text",
                    "payload": "{\"button\": \"4\"}",
                    "label": `◀️ Главное Меню`
                 },
                    "color": "negative"
                }]
                ]
                })//end
    });
}
if(message.isChat) {
    await message.send(`Топ Кустиков:\n${text}
    ●[id${message.user.id}|Ваша] Статистика●
   ${utils.gi(find() + 1)} [id${message.user.id}|${message.user.tag}] — ${utils.rn(message.user.rating)}🍞 | ${utils.rn(message.user.balance)}🌳 | ${utils.rn(message.user.calls)}🤙`);
}
});

cmd.hear(/^(?:бонус)$/i, async (message, bot) => {
    if(message.user.timers.bonus) return bot(`❌ Бонус можно получать только раз в 1 час.`);
    let prize = utils.pick([1,2,3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15,16,17,18,19,20]);

    setTimeout(() => {
        message.user.timers.bonus = false;
    }, 3600000);//1hour

    message.user.timers.bonus = true;
    //bread
    if(prize === 1)
    {
        {
            if(!message.isChat){
            const value = 100;
            message.user.rating += value;
            await message.send(`вы выиграли ${utils.sp(value)}🍞!\n Хлеб: ${utils.rn(message.user.rating)}🍞`, {
                //keyboard: generateTopKeyboard([`🎁 Бонус Получен`, `💸:  ${utils.sp(value)}🍞`,`◀️ Главное Меню`])
                keyboard:JSON.stringify(//start
                    {
                        "one_time": false,
                        "buttons": [
                            [{
                                "action": {
                                "type": "text",
                                "payload": "{\"button\": \"4\"}",
                                "label": `🎁 Бонус Получен`
                            },
                                "color": "primary"
                        }],
                        [{
                            "action": {
                            "type": "text",
                            "payload": "{\"button\": \"4\"}",
                            "label": `💸:  ${utils.sp(value)}🍞`
                        },
                            "color": "positive"
                        }],
                        [{
                            "action": {
                            "type": "text",
                            "payload": "{\"button\": \"4\"}",
                            "label": `◀️ Главное Меню`
                         },
                            "color": "negative"
                        }]
                        ]
                        })//end
            });
        }
        if(message.isChat){
            const value = 100;
            message.user.rating += value;
            await message.send(`вы выиграли ${utils.sp(value)}🍞!\n Хлеб: ${utils.rn(message.user.rating)}🍞`);
            }
        }
    }
    if(prize === 2)
    {
        {
            if(!message.isChat){
            const value = 250;
            message.user.rating += value;
            await message.send(`вы выиграли ${utils.sp(value)}🍞!\n Хлеб: ${utils.rn(message.user.rating)}🍞`, {
                //keyboard: generateTopKeyboard([`🎁 Бонус Получен`, `💸:  ${utils.sp(value)}🍞`,`◀️ Главное Меню`])
                keyboard:JSON.stringify(//start
                    {
                        "one_time": false,
                        "buttons": [
                            [{
                                "action": {
                                "type": "text",
                                "payload": "{\"button\": \"4\"}",
                                "label": `🎁 Бонус Получен`
                            },
                                "color": "primary"
                        }],
                        [{
                            "action": {
                            "type": "text",
                            "payload": "{\"button\": \"4\"}",
                            "label": `💸:  ${utils.sp(value)}🍞`
                        },
                            "color": "positive"
                        }],
                        [{
                            "action": {
                            "type": "text",
                            "payload": "{\"button\": \"4\"}",
                            "label": `◀️ Главное Меню`
                         },
                            "color": "negative"
                        }]
                        ]
                        })//end
            });
        }
        if(message.isChat){
            const value = 250;
            message.user.rating += value;
            await message.send(`вы выиграли ${utils.sp(value)}🍞!\n Хлеб: ${utils.rn(message.user.rating)}🍞`);
            }
        }
    }
    if(prize === 3)
    {
        {
            if(!message.isChat){
            const value = 500;
            message.user.rating += value;
            await message.send(`вы выиграли ${utils.sp(value)}🍞!\n Хлеб: ${utils.rn(message.user.rating)}🍞`, {
               // keyboard: generateTopKeyboard([`🎁 Бонус Получен`, `💸:  ${utils.sp(value)}🍞`,`◀️ Главное Меню`])
               keyboard:JSON.stringify(//start
                {
                    "one_time": false,
                    "buttons": [
                        [{
                            "action": {
                            "type": "text",
                            "payload": "{\"button\": \"4\"}",
                            "label": `🎁 Бонус Получен`
                        },
                            "color": "primary"
                    }],
                    [{
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"4\"}",
                        "label": `💸:  ${utils.sp(value)}🍞`
                    },
                        "color": "positive"
                    }],
                    [{
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"4\"}",
                        "label": `◀️ Главное Меню`
                     },
                        "color": "negative"
                    }]
                    ]
                    })//end
            });
        }
        if(message.isChat){
            const value = 500;
            message.user.rating += value;
            await message.send(`вы выиграли ${utils.sp(value)}🍞!\n Хлеб: ${utils.rn(message.user.rating)}🍞`);
            }
        }
    }
    if(prize === 4)
    {
        {
            if(!message.isChat){
            const value = 1000;
            message.user.rating += value;
            await message.send(`вы выиграли ${utils.sp(value)}🍞!\n Хлеб: ${utils.rn(message.user.rating)}🍞`, {
               // keyboard: generateTopKeyboard([`🎁 Бонус Получен`, `💸:  ${utils.sp(value)}🍞`,`◀️ Главное Меню`])
               keyboard:JSON.stringify(//start
                {
                    "one_time": false,
                    "buttons": [
                        [{
                            "action": {
                            "type": "text",
                            "payload": "{\"button\": \"4\"}",
                            "label": `🎁 Бонус Получен`
                        },
                            "color": "primary"
                    }],
                    [{
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"4\"}",
                        "label": `💸:  ${utils.sp(value)}🍞`
                    },
                        "color": "positive"
                    }],
                    [{
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"4\"}",
                        "label": `◀️ Главное Меню`
                     },
                        "color": "negative"
                    }]
                    ]
                    })//end
            });
        }
        if(message.isChat){
            const value = 1000;
            message.user.rating += value;
            await message.send(`вы выиграли ${utils.sp(value)}🍞!\n Хлеб: ${utils.rn(message.user.rating)}🍞`);
            }
        }
    }
    if(prize === 5)
    {
        {
            if(!message.isChat){
            const value = 2000;
            message.user.rating += value;
            await message.send(`вы выиграли ${utils.sp(value)}🍞!\n Хлеб: ${utils.rn(message.user.rating)}🍞`, {
               // keyboard: generateTopKeyboard([`🎁 Бонус Получен`, `💸:  ${utils.sp(value)}🍞`,`◀️ Главное Меню`])
               keyboard:JSON.stringify(//start
                {
                    "one_time": false,
                    "buttons": [
                        [{
                            "action": {
                            "type": "text",
                            "payload": "{\"button\": \"4\"}",
                            "label": `🎁 Бонус Получен`
                        },
                            "color": "primary"
                    }],
                    [{
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"4\"}",
                        "label": `💸:  ${utils.sp(value)}🍞`
                    },
                        "color": "positive"
                    }],
                    [{
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"4\"}",
                        "label": `◀️ Главное Меню`
                     },
                        "color": "negative"
                    }]
                    ]
                    })//end
            });
        }
        if(message.isChat){
            const value = 2000;
            message.user.rating += value;
            await message.send(`вы выиграли ${utils.sp(value)}🍞!\n Хлеб: ${utils.rn(message.user.rating)}🍞`);
            }
        }
    }
    if(prize === 6)
    {
        {
            if(!message.isChat){
            const value = 4000;
            message.user.rating += value;
            await message.send(`вы выиграли ${utils.sp(value)}🍞!\n Хлеб: ${utils.rn(message.user.rating)}🍞`, {
                //keyboard: generateTopKeyboard([`🎁 Бонус Получен`, `💸:  ${utils.sp(value)}🍞`,`◀️ Главное Меню`])
                keyboard:JSON.stringify(//start
                    {
                        "one_time": false,
                        "buttons": [
                            [{
                                "action": {
                                "type": "text",
                                "payload": "{\"button\": \"4\"}",
                                "label": `🎁 Бонус Получен`
                            },
                                "color": "primary"
                        }],
                        [{
                            "action": {
                            "type": "text",
                            "payload": "{\"button\": \"4\"}",
                            "label": `💸:  ${utils.sp(value)}🍞`
                        },
                            "color": "positive"
                        }],
                        [{
                            "action": {
                            "type": "text",
                            "payload": "{\"button\": \"4\"}",
                            "label": `◀️ Главное Меню`
                         },
                            "color": "negative"
                        }]
                        ]
                        })//end
            });
        }
        if(message.isChat){
            const value = 4000;
            message.user.rating += value;
            await message.send(`вы выиграли ${utils.sp(value)}🍞!\n Хлеб: ${utils.rn(message.user.rating)}🍞`);
            }
        }
    }
    if(prize === 7)
    {
        {
            if(!message.isChat){
            const value = 8000;
            message.user.rating += value;
            await message.send(`вы выиграли ${utils.sp(value)}🍞!\n Хлеб: ${utils.rn(message.user.rating)}🍞`, {
                //keyboard: generateTopKeyboard([`🎁 Бонус Получен`, `💸:  ${utils.sp(value)}🍞`,`◀️ Главное Меню`])
                keyboard:JSON.stringify(//start
                    {
                        "one_time": false,
                        "buttons": [
                            [{
                                "action": {
                                "type": "text",
                                "payload": "{\"button\": \"4\"}",
                                "label": `🎁 Бонус Получен`
                            },
                                "color": "primary"
                        }],
                        [{
                            "action": {
                            "type": "text",
                            "payload": "{\"button\": \"4\"}",
                            "label": `💸:  ${utils.sp(value)}🍞`
                        },
                            "color": "positive"
                        }],
                        [{
                            "action": {
                            "type": "text",
                            "payload": "{\"button\": \"4\"}",
                            "label": `◀️ Главное Меню`
                         },
                            "color": "negative"
                        }]
                        ]
                        })//end
            });
        }
        if(message.isChat){
            const value = 8000;
            message.user.rating += value;
            await message.send(`вы выиграли ${utils.sp(value)}🍞!\n Хлеб: ${utils.rn(message.user.rating)}🍞`);
            }
        }
    }
    if(prize === 8)
    {
        {
            if(!message.isChat){
            const value = 16000;
            message.user.rating += value;
            await message.send(`вы выиграли ${utils.sp(value)}🍞!\n Хлеб: ${utils.rn(message.user.rating)}🍞`, {
               // keyboard: generateTopKeyboard([`🎁 Бонус Получен`, `💸:  ${utils.sp(value)}🍞`,`◀️ Главное Меню`])
               keyboard:JSON.stringify(//start
                {
                    "one_time": false,
                    "buttons": [
                        [{
                            "action": {
                            "type": "text",
                            "payload": "{\"button\": \"4\"}",
                            "label": `🎁 Бонус Получен`
                        },
                            "color": "primary"
                    }],
                    [{
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"4\"}",
                        "label": `💸:  ${utils.sp(value)}🍞`
                    },
                        "color": "positive"
                    }],
                    [{
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"4\"}",
                        "label": `◀️ Главное Меню`
                     },
                        "color": "negative"
                    }]
                    ]
                    })//end
            });
        }
        if(message.isChat){
            const value = 16000;
            message.user.rating += value;
            await message.send(`вы выиграли ${utils.sp(value)}🍞!\n Хлеб: ${utils.rn(message.user.rating)}🍞`);
            }
        }
    }
    if(prize === 9)
    {
        {
            if(!message.isChat){
            const value = 32000;
            message.user.rating += value;
            await message.send(`вы выиграли ${utils.sp(value)}🍞!\n Хлеб: ${utils.rn(message.user.rating)}🍞`, {
               // keyboard: generateTopKeyboard([`🎁 Бонус Получен`, `💸:  ${utils.sp(value)}🍞`,`◀️ Главное Меню`])
                keyboard:JSON.stringify(//start
                    {
                        "one_time": false,
                        "buttons": [
                            [{
                                "action": {
                                "type": "text",
                                "payload": "{\"button\": \"4\"}",
                                "label": `🎁 Бонус Получен`
                            },
                                "color": "primary"
                        }],
                        [{
                            "action": {
                            "type": "text",
                            "payload": "{\"button\": \"4\"}",
                            "label": `💸:  ${utils.sp(value)}🍞`
                        },
                            "color": "positive"
                        }],
                        [{
                            "action": {
                            "type": "text",
                            "payload": "{\"button\": \"4\"}",
                            "label": `◀️ Главное Меню`
                         },
                            "color": "negative"
                        }]
                        ]
                        })//end
            });
        }
        if(message.isChat){
            const value = 32000;
            message.user.rating += value;
            await message.send(`вы выиграли ${utils.sp(value)}🍞!\n Хлеб: ${utils.rn(message.user.rating)}🍞`);
            }
        }
    }
    if(prize === 10)
    {
        {
            if(!message.isChat){
            const value = 64000;
            message.user.rating += value;
            await message.send(`вы выиграли ${utils.sp(value)}🍞!\n Хлеб: ${utils.rn(message.user.rating)}🍞`, {
                //keyboard: generateTopKeyboard([`🎁 Бонус Получен`, `💸:  ${utils.sp(value)}🍞`,`◀️ Главное Меню`])
                keyboard:JSON.stringify(//start
                    {
                        "one_time": false,
                        "buttons": [
                            [{
                                "action": {
                                "type": "text",
                                "payload": "{\"button\": \"4\"}",
                                "label": `🎁 Бонус Получен`
                            },
                                "color": "primary"
                        }],
                        [{
                            "action": {
                            "type": "text",
                            "payload": "{\"button\": \"4\"}",
                            "label": `💸:  ${utils.sp(value)}🍞`
                        },
                            "color": "positive"
                        }],
                        [{
                            "action": {
                            "type": "text",
                            "payload": "{\"button\": \"4\"}",
                            "label": `◀️ Главное Меню`
                         },
                            "color": "negative"
                        }]
                        ]
                        })//end
            });
        }
        if(message.isChat){
            const value = 64000;
            message.user.rating += value;
            await message.send(`вы выиграли ${utils.sp(value)}🍞!\n Хлеб: ${utils.rn(message.user.rating)}🍞`);
            }
        }
    }
    //kusticoins
    if(prize === 11)
    {
        {
            if(!message.isChat){
            const value = 1000000;
            message.user.balance += value;
            await message.send(`вы выиграли ${utils.sp(value)}🌳!\n Кустики: ${utils.rn(message.user.balance)}🌳`, {
                    //keyboard: generateTopKeyboard([`🎁 Бонус Получен`, `💸:  ${utils.sp(value)}🌳`,`◀️ Главное Меню`])
                    keyboard:JSON.stringify(//start
                        {
                            "one_time": false,
                            "buttons": [
                                [{
                                    "action": {
                                    "type": "text",
                                    "payload": "{\"button\": \"4\"}",
                                    "label": `🎁 Бонус Получен`
                                },
                                    "color": "primary"
                            }],
                            [{
                                "action": {
                                "type": "text",
                                "payload": "{\"button\": \"4\"}",
                                "label": `💸:  ${utils.sp(value)}🌳`
                            },
                                "color": "positive"
                            }],
                            [{
                                "action": {
                                "type": "text",
                                "payload": "{\"button\": \"4\"}",
                                "label": `◀️ Главное Меню`
                             },
                                "color": "negative"
                            }]
                            ]
                            })//end
            });
        }
        if(message.isChat){
            const value = 1000000;
            message.user.balance += value;
            await message.send(`вы выиграли ${utils.sp(value)}🌳!\n Кустики: ${utils.rn(message.user.balance)}🌳`);
            }
        }
    }
    if(prize === 12)
    {
        {
            if(!message.isChat){
            const value = 2000000;
            message.user.balance += value;
            await message.send(`вы выиграли ${utils.sp(value)}🌳!\n Кустики: ${utils.rn(message.user.balance)}🌳`, {
                   // keyboard: generateTopKeyboard([`🎁 Бонус Получен`, `💸:  ${utils.sp(value)}🌳`,`◀️ Главное Меню`])
                   keyboard:JSON.stringify(//start
                    {
                        "one_time": false,
                        "buttons": [
                            [{
                                "action": {
                                "type": "text",
                                "payload": "{\"button\": \"4\"}",
                                "label": `🎁 Бонус Получен`
                            },
                                "color": "primary"
                        }],
                        [{
                            "action": {
                            "type": "text",
                            "payload": "{\"button\": \"4\"}",
                            "label": `💸:  ${utils.sp(value)}🌳`
                        },
                            "color": "positive"
                        }],
                        [{
                            "action": {
                            "type": "text",
                            "payload": "{\"button\": \"4\"}",
                            "label": `◀️ Главное Меню`
                         },
                            "color": "negative"
                        }]
                        ]
                        })//end
            });
        }
        if(message.isChat){
            const value = 2000000;
            message.user.balance += value;
            await message.send(`вы выиграли ${utils.sp(value)}🌳!\n Кустики: ${utils.rn(message.user.balance)}🌳`);
            }
        }
    }
    if(prize === 13)
    {
        {
            if(!message.isChat){
            const value = 4000000;
            message.user.balance += value;
            await message.send(`вы выиграли ${utils.sp(value)}🌳!\n Кустики: ${utils.rn(message.user.balance)}🌳`, {
                    //keyboard: generateTopKeyboard([`🎁 Бонус Получен`, `💸:  ${utils.sp(value)}🌳`,`◀️ Главное Меню`])
                    keyboard:JSON.stringify(//start
                        {
                            "one_time": false,
                            "buttons": [
                                [{
                                    "action": {
                                    "type": "text",
                                    "payload": "{\"button\": \"4\"}",
                                    "label": `🎁 Бонус Получен`
                                },
                                    "color": "primary"
                            }],
                            [{
                                "action": {
                                "type": "text",
                                "payload": "{\"button\": \"4\"}",
                                "label": `💸:  ${utils.sp(value)}🌳`
                            },
                                "color": "positive"
                            }],
                            [{
                                "action": {
                                "type": "text",
                                "payload": "{\"button\": \"4\"}",
                                "label": `◀️ Главное Меню`
                             },
                                "color": "negative"
                            }]
                            ]
                            })//end
            });
        }
        if(message.isChat){
            const value = 4000000;
            message.user.balance += value;
            await message.send(`вы выиграли ${utils.sp(value)}🌳!\n Кустики: ${utils.rn(message.user.balance)}🌳`);
            }
        }
    }
    if(prize === 14)
    {
        {
            if(!message.isChat){
            const value = 8000000;
            message.user.balance += value;
            await message.send(`вы выиграли ${utils.sp(value)}🌳!\n Кустики: ${utils.rn(message.user.balance)}🌳`, {
                   // keyboard: generateTopKeyboard([`🎁 Бонус Получен`, `💸:  ${utils.sp(value)}🌳`,`◀️ Главное Меню`])
                   keyboard:JSON.stringify(//start
                    {
                        "one_time": false,
                        "buttons": [
                            [{
                                "action": {
                                "type": "text",
                                "payload": "{\"button\": \"4\"}",
                                "label": `🎁 Бонус Получен`
                            },
                                "color": "primary"
                        }],
                        [{
                            "action": {
                            "type": "text",
                            "payload": "{\"button\": \"4\"}",
                            "label": `💸:  ${utils.sp(value)}🌳`
                        },
                            "color": "positive"
                        }],
                        [{
                            "action": {
                            "type": "text",
                            "payload": "{\"button\": \"4\"}",
                            "label": `◀️ Главное Меню`
                         },
                            "color": "negative"
                        }]
                        ]
                        })//end
            });
        }
        if(message.isChat){
            const value = 8000000;
            message.user.balance += value;
            await message.send(`вы выиграли ${utils.sp(value)}🌳!\n Кустики: ${utils.rn(message.user.balance)}🌳`);
            }
        }
    }
    if(prize === 15)
    {
        if(!message.isChat){
        const value = 1600000;
        message.user.balance += value;
        await message.send(`вы выиграли ${utils.sp(value)}🌳!\n Кустики: ${utils.rn(message.user.balance)}🌳`, {
              //  keyboard: generateTopKeyboard([`🎁 Бонус Получен`, `💸:  ${utils.sp(value)}🌳`,`◀️ Главное Меню`])
              keyboard:JSON.stringify(//start
                {
                    "one_time": false,
                    "buttons": [
                        [{
                            "action": {
                            "type": "text",
                            "payload": "{\"button\": \"4\"}",
                            "label": `🎁 Бонус Получен`
                        },
                            "color": "primary"
                    }],
                    [{
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"4\"}",
                        "label": `💸:  ${utils.sp(value)}🌳`
                    },
                        "color": "positive"
                    }],
                    [{
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"4\"}",
                        "label": `◀️ Главное Меню`
                     },
                        "color": "negative"
                    }]
                    ]
                    })//end
        });
    }
    if(message.isChat){
        const value = 1600000;
        message.user.balance += value;
        await message.send(`вы выиграли ${utils.sp(value)}🌳!\n Кустики: ${utils.rn(message.user.balance)}🌳`);
        }
    }
    //konoplja
    if(prize === 16)
    {
        if(!message.isChat){
            const value = 100;
            message.user.btc += value;
            await message.send(`вы выиграли ${utils.sp(value)} грамм 🌿!\n Конопля: ${utils.rn(message.user.btc)} грамм 🌿`, {
                   // keyboard: generateTopKeyboard([`🎁 Бонус Получен`, `💸:  ${utils.sp(value)} грамм 🌿`,`◀️ Главное Меню`])
                   keyboard:JSON.stringify(//start
                    {
                        "one_time": false,
                        "buttons": [
                            [{
                                "action": {
                                "type": "text",
                                "payload": "{\"button\": \"4\"}",
                                "label": `🎁 Бонус Получен`
                            },
                                "color": "primary"
                        }],
                        [{
                            "action": {
                            "type": "text",
                            "payload": "{\"button\": \"4\"}",
                            "label": `💸:  ${utils.sp(value)} грамм 🌿`
                        },
                            "color": "positive"
                        }],
                        [{
                            "action": {
                            "type": "text",
                            "payload": "{\"button\": \"4\"}",
                            "label": `◀️ Главное Меню`
                         },
                            "color": "negative"
                        }]
                        ]
                        })//end
            });
        }
        if(message.isChat){
                const value = 100;
                message.user.btc += value;
                await message.send(`вы выиграли ${utils.sp(value)} грамм 🌿!\n Конопля: ${utils.rn(message.user.btc)} грамм 🌿`);
        }
    }
    if(prize === 17)
    {
        if(!message.isChat){
        const value = 500;
        message.user.btc += value;
        await message.send(`вы выиграли ${utils.sp(value)} грамм 🌿!\n Конопля: ${utils.rn(message.user.btc)} грамм 🌿`, {
               // keyboard: generateTopKeyboard([`🎁 Бонус Получен`, `💸:  ${utils.sp(value)} грамм 🌿`,`◀️ Главное Меню`])
               keyboard:JSON.stringify(//start
                {
                    "one_time": false,
                    "buttons": [
                        [{
                            "action": {
                            "type": "text",
                            "payload": "{\"button\": \"4\"}",
                            "label": `🎁 Бонус Получен`
                        },
                            "color": "primary"
                    }],
                    [{
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"4\"}",
                        "label": `💸:  ${utils.sp(value)} грамм 🌿`
                    },
                        "color": "positive"
                    }],
                    [{
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"4\"}",
                        "label": `◀️ Главное Меню`
                     },
                        "color": "negative"
                    }]
                    ]
                    })//end
        });
        }
        if(message.isChat){
            const value = 500;
            message.user.btc += value;
            await message.send(`вы выиграли ${utils.sp(value)} грамм 🌿!\n Конопля: ${utils.rn(message.user.btc)} грамм 🌿`);
        }
    }
    if(prize === 18)
    {
        if(!message.isChat){
            const value = 1000;
            message.user.btc += value;
            await message.send(`вы выиграли ${utils.sp(value)} грамм 🌿!\n Конопля: ${utils.rn(message.user.btc)} грамм 🌿`, {
                   // keyboard: generateTopKeyboard([`🎁 Бонус Получен`, `💸:  ${utils.sp(value)} грамм 🌿`,`◀️ Главное Меню`])
                   keyboard:JSON.stringify(//start
                    {
                        "one_time": false,
                        "buttons": [
                            [{
                                "action": {
                                "type": "text",
                                "payload": "{\"button\": \"4\"}",
                                "label": `🎁 Бонус Получен`
                            },
                                "color": "primary"
                        }],
                        [{
                            "action": {
                            "type": "text",
                            "payload": "{\"button\": \"4\"}",
                            "label": `💸:  ${utils.sp(value)} грамм 🌿`
                        },
                            "color": "positive"
                        }],
                        [{
                            "action": {
                            "type": "text",
                            "payload": "{\"button\": \"4\"}",
                            "label": `◀️ Главное Меню`
                         },
                            "color": "negative"
                        }]
                        ]
                        })//end
            });
        }
        if(message.isChat){
                const value = 1000;
                message.user.btc += value;
                await message.send(`вы выиграли ${utils.sp(value)} грамм 🌿!\n Конопля: ${utils.rn(message.user.btc)} грамм 🌿`);
        }
    }
    if(prize === 19)
    {
        if(!message.isChat){
            const value = 2500;
            message.user.btc += value;
            await message.send(`вы выиграли ${utils.sp(value)} грамм 🌿!\n Конопля: ${utils.rn(message.user.btc)} грамм 🌿`, {
                    //keyboard: generateTopKeyboard([`🎁 Бонус Получен`, `💸:  ${utils.sp(value)} грамм 🌿`,`◀️ Главное Меню`])
                    keyboard:JSON.stringify(//start
                        {
                            "one_time": false,
                            "buttons": [
                                [{
                                    "action": {
                                    "type": "text",
                                    "payload": "{\"button\": \"4\"}",
                                    "label": `🎁 Бонус Получен`
                                },
                                    "color": "primary"
                            }],
                            [{
                                "action": {
                                "type": "text",
                                "payload": "{\"button\": \"4\"}",
                                "label": `💸:  ${utils.sp(value)} грамм 🌿`
                            },
                                "color": "positive"
                            }],
                            [{
                                "action": {
                                "type": "text",
                                "payload": "{\"button\": \"4\"}",
                                "label": `◀️ Главное Меню`
                             },
                                "color": "negative"
                            }]
                            ]
                            })//end
            });
        }
        if(message.isChat){
                const value = 2500;
                message.user.btc += value;
                await message.send(`вы выиграли ${utils.sp(value)} грамм 🌿!\n Конопля: ${utils.rn(message.user.btc)} грамм 🌿`);
        }
    }
    if(prize === 20)
    {
        if(!message.isChat){
            const value = 5000;
            message.user.btc += value;
            await message.send(`вы выиграли ${utils.sp(value)} грамм 🌿!\n Конопля: ${utils.rn(message.user.btc)} грамм 🌿`, {
                   // keyboard: generateTopKeyboard([`🎁 Бонус Получен`, `💸:  ${utils.sp(value)} грамм 🌿`,`◀️ Главное Меню`])
                   keyboard:JSON.stringify(//start
                    {
                        "one_time": false,
                        "buttons": [
                            [{
                                "action": {
                                "type": "text",
                                "payload": "{\"button\": \"4\"}",
                                "label": `🎁 Бонус Получен`
                            },
                                "color": "primary"
                        }],
                        [{
                            "action": {
                            "type": "text",
                            "payload": "{\"button\": \"4\"}",
                            "label": `💸:  ${utils.sp(value)} грамм 🌿`
                        },
                            "color": "positive"
                        }],
                        [{
                            "action": {
                            "type": "text",
                            "payload": "{\"button\": \"4\"}",
                            "label": `◀️ Главное Меню`
                         },
                            "color": "negative"
                        }]
                        ]
                        })//end
            });
        }
        if(message.isChat){
                const value = 5000;
                message.user.btc += value;
                const trans = message.user.transactions
                trans.push({
                    id: trans.length,
                    title: `Получен бонус`,
                    desc: ``,
                    targetType: "bonus",
                    targetId: 0,
                    charge: `+${utils.sp(value)}🌿`,
                });
                await message.send(`вы выиграли ${utils.sp(value)} грамм 🌿!\n Конопля: ${utils.rn(message.user.btc)} грамм 🌿`);
        }
    }
});

cmd.hear(/^(?:куст)\s([0-9]+)$/i, async (message, bot) => {
    if(message.user.marriage.partner) return bot(`❌ ${users[message.user.marriage.partner].tag} уже ваш кустик.`);
    if(Number(message.args[1]) === message.user.uid) return bot(`❌ Нельзя)`);

    let user = users.find(x=> x.uid === Number(message.args[1]));
    if(!user) return bot(`❌ неверный KustID`);

    if(user.marriage.partner) return bot(`❌ у этого кустика уже есть кустик.`);

    if(user.marriage.requests.find(x=> x == message.args[1])) return bot(`❌ этот кустик еще не ответил на запрос.`);

    if(message.user.marriage.requests.find(x=> x == message.args[1]))
    {
        message.user.marriage.requests = [];
        message.user.marriage.partner = user.uid;

        user.marriage.requests = [];
        user.marriage.partner = message.user.uid;

        return bot(`✅ "${user.tag}" стал вашим кустиком на века!`);
    }

    user.marriage.requests.push(message.user.uid);
    if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[👥]\n▶ [id${message.user.id}|${message.user.tag}] предложил [id${user.id}|вас] стать вашим кустиком.\nВведи "Запросы", чтобы посмотреть запросы.` });
    return bot(`✅ вы предложили ${user.tag} стать вашим кустиком`);
});

cmd.hear(/^(?:запросы)$/i, async (message, bot) => {
    if(message.user.marriage.partner) return bot(`❌ У тебя уже есть кустик, запросы скрыты.`);
    return bot(`запросы:
        ${message.user.marriage.requests.map(x=> `от кустика "${users[x].tag}" (${x})`).join('\n')}`);
});

cmd.hear(/^(?:хлеб клан|хлеб к|клан х|клан хлеб)\s([0-9]+)$/i, async (message, bot) => {
    message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
    message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
    message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
    message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.rating);

    if(message.user.inClan === false) return bot(`❌ Ты не состоишь в КустиКлане!`);

    if(!Number(message.args[1])) return bot(`❌ "клан хлеб {число хлеба для перевода}"`);
    message.args[1] = Math.floor(Number(message.args[1]));

    if(message.args[1] <= 0) return bot(`❌ Сумма не может быть меньше 0.`);
    let title = clans[message.user.clanId].title;
    if(message.args[1] > message.user.rating) return bot(`❌ Не Достаточно Хлеба🍞!`);
    else if(message.args[1] <= message.user.rating){
        clans[message.user.clanId].bread += message.args[1];
        message.user.rating -= message.args[1];
        message.user.breadtrans += message.args[1];
        const trans = message.user.transactions
        trans.push({
            id: trans.length,
            title: `Перевод в «${title}»`,
            desc: ``,
            targetType: "clan",
            targetId: 0,
            charge: `-${utils.rn(message.args[1])}🍞`,
        });
        return bot(`✅ Перевод в клан:\n🎯 Цель: клан [${title}]\n🍞 Сумма Перевода: ${utils.rn(message.args[1])}🍞\n🍞 Хлеб Клана: ${utils.rn(clans[message.user.clanId].bread)}🍞`);
    }
});

cmd.hear(/^(?:клан имя|клан название|клан назвать)\s(.*)$/i, async (message, bot) => {
    if(message.user.inClan === false) return bot(`❌ Ты не состоишь в КустиКлане!`);
    if(message.args[1].length >= 16) return bot(`❌ Максимум 15 символов!`);
    if(clans[message.user.clanId].admin != message.user.uid) return bot(`❌ Вы не глава КустиКлана!`);
    else if(clans[message.user.clanId].admin === message.user.uid)
    {
    let oldnick = clans[message.user.clanId].title
    clans[message.user.clanId].title = message.args[1];
    return bot(`✅ Название клана: [kustibot|${oldnick}] → [kustibot|${clans[message.user.clanId].title}].`);
    }
});

cmd.hear(/^(?:промокод|промо|promo|код)\s(.*)$/i, async (message, bot) => {
    const date = new Date();
    let code = promo.find(x=> x.ID.toLowerCase() === message.args[1].toLowerCase());
    if(!code) return bot(`❌ Промокод [kustibot|${String(message.args[1])}] не найден!`);
    let codeinuser = usedcodesbase.find(x=> x.code === `${String(message.args[1])}_${message.user.id}`);
    if(codeinuser) return bot(`❌ Промокод [kustibot|${codeinuser.originalCode}] уже был использован!\n📅 Дата Активации:\n ${codeinuser.activationDate}\n🕒 Время Активации:\n ${codeinuser.activationTime}\n🆔 Код Памяти:\n ${codeinuser.code}`);
    if(code.uses >= code.maxuses) return bot(`❌ Срок промокода истёк!\nИспользования: [${code.uses}/${code.maxuses}]`);
    else{
        bot(`⏳ Обработка Содержания Кода [kustibot|${code.ID}]...`);
        code.uses += 1;
        message.user[code.curr] += code.value;
        usedcodesbase.push({
            code:`${String(message.args[1])}_${message.user.id}`,
            originalCode: code.ID, 
            userUid:message.user.uid,
            activationDate: `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`,
            activationTime:`${date.getHours()}:${date.getMinutes()}`
    });
    return bot(`✅ Промокод [kustibot|${code.ID}] активирован!.\nНа аккаунт было зачислено ${utils.rn(code.value)}${code.sym}\nИспользовали: [${code.uses}/${code.maxuses}]`);
}});

cmd.hear(/^(?:-варн|-warn)\s?([0-9]+)\s(.*)$/i, async (message, bot) => {
    if(!message.user.admin) return bot('❌ Доступ Запрещён!');
    let user = users.find(x=> x.uid === Number(message.args[1]));
    if(!user) return bot(`❌ неверный KustID`);
    if(!message.args[1] && !message.args[2]) return bot('❌ неверные аргументы.\n -варн [ID] [REASON]')
    user.warns -= 1;
    if(user.warns != 3) vk.api.messages.send({ user_id: user.id, message: `[id${user.id}|${user.tag}],\n⚠️ Вам выдали предупреждение [${user.warns}/3]!\n📖 Причина: "${message.args[2]}"\n👤 Администратор: [id${message.user.id}|${message.user.tag}]` });
    return bot(`✅ С аккаунта [id${user.id}|${user.tag}] был снят варн.\n📖 Причина: "${message.args[2]}"`);
});

cmd.hear(/^(?:варн|warn)\s?([0-9]+)\s(.*)$/i, async (message, bot) => {
    if(!message.user.admin) return bot('❌ Доступ Запрещён!');
    let user = users.find(x=> x.uid === Number(message.args[1]));
    if(!user) return bot(`❌ неверный KustID`);
    if(user.admin) return bot(`❌ Этот пользователь не может быть предупрежден.`);
    if(!message.args[1] && !message.args[2]) return bot('❌ неверные аргументы.\n варн [ID] [REASON]')
    user.warns += 1;
    if(user.warns != 3) vk.api.messages.send({ user_id: user.id, message: `[id${user.id}|${user.tag}],\n⚠️ Вам выдали предупреждение [${user.warns}/3]!\n📖 Причина: "${message.args[2]}"\n👤 Администратор: [id${message.user.id}|${message.user.tag}]` });
    if(user.warns === 3){ 
        vk.api.messages.send({ user_id: user.id, message: `[id${user.id}|${user.tag}],\n⚠️ Вам выдали предупреждение [${user.warns}/3]!\n📖 Причина: "${message.args[2]}"\n👤 Администратор: [id${message.user.id}|${message.user.tag}]` });
        vk.api.messages.send({ user_id: user.id, message: `[id${user.id}|${user.tag}],\n❌ Ваш профиль был заблокирован!\n📖 Причина: "Варны [${user.warns}/3]"\n👤 Администратор: [kustibot|KustiBot]` });
    user.tag = `banned_${message.user.id}`;
    user.banreason = `Варны [${user.warns}/3]`;
    user.ban = true;
    return bot(`❌ Аккаунт [id${user.id}|${user.tag}] был заблокирован.\n📖 Причина: "${message.args[2]}"`);
}
    return bot(`✅ Аккаунту [id${user.id}|${user.tag}] был выдан варн.\n📖 Причина: "${message.args[2]}"`);
});

cmd.hear(/^(?:бан|ban)\s?([0-9]+)\s(.*)$/i, async (message, bot) => {
    if(!message.user.admin) return bot('❌ Доступ Запрещён!');
    let user = users.find(x=> x.uid === Number(message.args[1]));
    if(!user) return bot(`❌ неверный KustID`);
    if(user.admin) return bot(`❌ Этот пользователь не может быть забанен.`);
    if(!message.args[1] && !message.args[2]) return bot('❌ неверные аргументы.\n бан [ID] [REASON]')
    user.ban = true;
    vk.api.messages.send({ user_id: user.id, message: `[id${user.id}|${user.tag}],\n❌ Ваш профиль был заблокирован!\n📖 Причина: "${message.args[2]}"\n👤 Администратор: [id${message.user.id}|${message.user.tag}]` });
    user.tag = `banned_${message.user.id}`;
    user.banreason = `${message.args[2]}`;
    return bot(`✅ Аккаунт [id${user.id}|${user.tag}] был заблокирован.\n📖 Причина: "${message.args[2]}"`);
});

cmd.hear(/^(?:-бан|-ban)\s?([0-9]+)\s(.*)$/i, async (message, bot) => {
    if(!message.user.admin) return bot('❌ Доступ Запрещён!');
    let user = users.find(x=> x.uid === Number(message.args[1]));
    if(!user) return bot(`❌ неверный KustID`);
    if(!message.args[1] && !message.args[2]) return bot('❌ неверные аргументы.\n -бан [ID] [REASON]')
    user.ban = false;
    vk.api.messages.send({ user_id: user.id, message: `[id${user.id}|${user.tag}],\n✅ Ваш профиль был разблокирован!\n📖 Причина: "${message.args[2]}"\n👤 Администратор: [id${message.user.id}|${message.user.tag}]` });
    return bot(`✅ Аккаунт [id${user.id}|${user.tag}] был разблокирован.\n📖 Причина: "${message.args[2]}"`);
});

cmd.hear(/^(?:новый промо баланс)\s?([0-9]+)\s?([0-9]+)\s(.*)$/i, async (message, bot) => {
    const code = String(message.args[3]);
    const value = Number(message.args[2]);
    const maxuses = Number(message.args[1]);
    if(message.user.admin === false)return bot('❌ Доступ Запрещён!');
    else if(message.user.admin === true)
    {
    const date = new Date();
        promo.push({
            ID: code,
            creationData: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
            uses: 0,
            maxuses: maxuses,
            value: value,
            sym: "🌳",
            curr: "balance",
        });
       return bot(`✅ Промокод Был Создан.\n\nКод Активации:\n"${code}"\n\nСодержание Кода:\n${value}🌳\nИспользований:\n${maxuses}⚡`);
}});

cmd.hear(/^(?:сервер|инфо|инфо сервер|нагрузка)$/i, async (message, bot) => {
    if(message.user.admin === false)return bot('❌ Доступ Запрещён!');
    else if(message.user.admin === true){
        var uptime = process.uptime();
        console.log("Uptime raw:", uptime)
        const date = new Date(uptime*1000);
        const days = date.getUTCDate() - 1,
        hours = date.getUTCHours(),
        minutes = date.getUTCMinutes(),
        seconds = date.getUTCSeconds(),
        milliseconds = date.getUTCMilliseconds();
        let segments = [];
        if (days > 0) segments.push(days + ' Д' + ((days == 1) ? 'ень' : 'ней'));
        if (hours > 0) segments.push(hours + ' Час' + ((hours == 1) ? '' : 'ов'));
        if (minutes > 0) segments.push(minutes + ' Мину' + ((minutes == 1) ? 'та' : 'т'));
        if (seconds > 0) segments.push(seconds + ' Секун' + ((seconds == 1) ? 'да' : 'д(ы)'));
        const dateString = segments.join(', ');
        return bot(`⚡ Информация сервера\n🕒Аптайм:\n${dateString}`);
    }
});

cmd.hear(/^(?:новый промо хлеб)\s?([0-9]+)\s?([0-9]+)\s(.*)$/i, async (message, bot) => {
    const code = String(message.args[3]);
    const value = Number(message.args[2]);
    const maxuses = Number(message.args[1]);
    if(message.user.admin === false)return bot('❌ Доступ Запрещён!');
    else if(message.user.admin === true)
    {
    const date = new Date();
        promo.push({
            ID: code,
            creationData: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
            uses: 0,
            maxuses: maxuses,
            value: value,
            sym: "🍞",
            curr: "rating",
            already: [],
        });
       return bot(`✅ Промокод Был Создан.\n\nКод Активации:\n"${code}"\n\nСодержание Кода:\n${value}🍞\n\nИспользований:\n${maxuses}⚡`);
    }});

cmd.hear(/^(?:клан создать|клан с|новый клан)\s(.*)$/i, async (message, bot) => {
    if(message.user.inClan === true) return bot(`❌ Ты уже состоишь в "${clans(message.user.clanId).title}".`);
    if(message.args[1].length >= 16) return bot(`❌ Максимум 15 символов!`);
    else if(message.user.inClan === false)
    {
    const iden = clans.length;
    const date = new Date();
    let name = message.args[1];
        clans.push({
            clanId: iden,
            admin: message.user.uid,
            creationDate: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
            bread:0,
            level: 1,
            exp:0,
            needexp:100,
            title: name,
            desc:`описание не задано.`,
            memberval: 1,
            maxMembers: 15,
            rules:`правила не заданы.`,
            admins:[message.user.uid],
            members:[]
        });
        message.user.inClan = true;
        bdata[0].count += 1;
        message.user.clanId = iden;
        return bot(`✅ Клан [kustibot|${name}] Был Создан.\nДля Вступления в Клан введи\n "Вступить ${iden}"`);
    }
});

cmd.hear(/^(?:время|дата|time|date|🕒|🕒 Время)\s(.*)$/i, async (message, bot) => {
    const date = new Date();
        return bot(`\n📅 Дата ${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}\n🕒 Время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
});

cmd.hear(/^(?:клан правила|клан п)\s(.*)$/i, async (message, bot) => {
    if(message.user.inClan === false) return bot(`❌ Ты не состоишь в КустиКлане!`);
    if(message.args[1].length >= 121) return bot(`❌ Максимум 120 символов!`);
    if(clans[message.user.clanId].admin != message.user.uid) return bot(`❌ Вы не глава КустиКлана!`);
    else if(clans[message.user.clanId].admin === message.user.uid)
    {
    clans[message.user.clanId].rules = message.args[1];
    return bot(`✅ Правила клана изменены.`);
    }
});

cmd.hear(/^(?:клан описание|клан описать)\s(.*)$/i, async (message, bot) => {
    if(message.user.inClan === false) return bot(`❌ Ты не состоишь в КустиКлане!`);
    if(message.args[1].length >= 121) return bot(`❌ Максимум 120 символов!`);
    if(clans[message.user.clanId].admin != message.user.uid) return bot(`❌ Вы не глава КустиКлана!`);
    else if(clans[message.user.clanId].admin === message.user.uid)
    {
    clans[message.user.clanId].desc = message.args[1];
    return bot(`✅ Описание клана изменено.`);
    }
});


cmd.hear(/^(?:клан покинуть|клан п|клан выйти)$/i, async (message, bot) => {
    if(message.user.inClan === false) return bot(`❌ Ты не состоишь в КустиКлане!`);
    const clannmems = clans[message.user.clanId].members
    const clann = clans[message.user.clanId].title
    const clannad = clans[message.user.clanId].admin
    const clannads = clans[message.user.clanId].admins
    clans[message.user.clanId].memberval -= 1;
    message.user.inClan = false;
    message.user.clanId = null;
    message.user.breadtrans = 0;

    if (message.user.uid != clannad) {
    for( var i = 0; i < clannmems.length; i++){ 
        if ( clannmems[i] === message.user.uid) {
            clannmems.splice(i, 1); 
        }
    }}
    else if (message.user.uid === clannad) {
    for( var i = 0; i < clannads.length; i++){ 
        if ( clannads[i] === message.user.uid) {
            clannads.splice(i, 1); 
        }
    }}
    users.filter(x=> x.clanId === message.user.clanId).map(user => {
        vk.api.messages.send({ user_id: user.id, message: `[${clans[message.user.clanId].title}]\n▶ [id${message.user.id}|${message.user.tag}] покинул КустиКлан.`});
       });
    return bot(`✅ Вы покинули КустиКлан "${clann}"!`);
    
});

cmd.hear(/^(?:клан пригласить|клан пр)\s?([0-9]+)?$/i, async (message, bot) => {
    if(message.user.inClan === false) return bot(`👥 Ты не состоишь в КустиКлане!`);
    let user = users.find(x=> x.uid === Number(message.args[1]));
    if(!user) return bot(`❌ неверный KustID`);
    if(user.clanId === message.user.clanId) return bot(`❌ [id${user.id}|${user.tag}] уже состоит в этом КустиКлане.`);
    if(message.user.clanId === message.args[1]) return bot(`❌ Вы не можете пригласить себя."`);
    if(!user.notifications) return bot(`[id${users[message.args[1]].id}|${users[message.args[1]].tag}] Отключил Уведомления.\nПриглашение не отправлено.`);
    if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[${clans[message.user.clanId].title}]\n▶ [id${message.user.id}|${message.user.tag}] пригласил вас в КустиКлан [kustibot|${clans[message.user.clanId].title}]\nВведите "Вступить ${message.user.clanId}", чтобы вступить` });
    return bot(`✅ Вы отправили приглашение [id${users[message.args[1]].id}|${users[message.args[1]].tag}] в КустиКлан [kusticlan|${clans[message.user.clanId].title}]!`);
});

cmd.hear(/^(?:клан кик|клан бан|клан исключить)\s?([0-9]+)?$/i, async (message, bot) => {
    if(message.user.inClan === false) return bot(`❌ Ты не состоишь в КустиКлане!`);
    const adminuid = clans[message.user.clanId].admin
    if(clans[message.user.clanId].admin != message.user.uid) return bot(`❌ Вы не глава [kustibot|${clans[message.user.clanId].title}]!\nЭтим КустиКланом заправляет [id${users[adminuid].id}|${users[adminuid].tag}]`);
    let user = users.find(x=> x.uid === Number(message.args[1]));
    let user228 = users.find(x=> x.uid === Number(message.args[1]));
    if(!user) return bot(`❌ неверный KustID`);
    if(user.clanId != message.user.clanId) return bot(`❌ [id${user.id}|${user.tag}] не состоит в этом КустиКлане.`);
    clans[message.user.clanId].memberval -= 1;
    if(message.user.clanId === message.args[1]) return bot(`❌ Вы не можете кикнуть себя.\nДля этого введи "клан покинуть"`);
    user.inClan = false;
    user.breadtrans = 0;
    clans[message.user.clanId].memberval -= 1;
    const members = clans[message.user.clanId].members
    for( var i = 0; i < members.length; i++){ 
        if ( members[i] === users[message.args[1]].uid) {
            members.splice(i, 1); 
        }
    }
    if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[${clans[message.user.clanId].title}]\n▶ [id${message.user.id}|${message.user.tag}] исключил вас из КустиКлана [kustibot|${clans[message.user.clanId].title}]\nВведите "Уведомления нет", если не хотите получать уведомления.` });
    user.clanId = null;
    users.filter(x=> x.clanId === message.user.clanId).map(user => {
        vk.api.messages.send({ user_id: user.id, message: `[${clans[message.user.clanId].title}]\n▶ [id${user228.id}|${user228.tag}] был исключен.`});
       });
    return bot(`✅ Вы кикнули [id${users[message.args[1]].id}|${users[message.args[1]].tag}]!`);
});

cmd.hear(/^(?:вступить|вступить в клан|вступить клан|в клан|войти клан)\s?([0-9]+)?$/i, async (message, bot) => {
    if(message.user.inClan === true) return bot(`❌ Ты уже состоишь в клане "${clans[message.user.clanId].title}"`);

    let clan = clans.find(x=> x.clanId === Number(message.args[1]));
    if(!clan) return bot(`❌ неверный KustiClanID`);
    if(clans[message.args[1]].memberval >= clans[message.args[1]].maxmembers) return bot(`❌ Превышен лимит кустиков в клане.`);

    clans[message.args[1]].members.push(message.user.uid);
    message.user.clanId = message.args[1];
    message.user.inClan = true;
    clans[message.args[1]].memberval += 1;
    users.filter(x=> x.clanId === message.user.clanId).map(user => {
        vk.api.messages.send({ user_id: user.id, message: `[${clans[message.user.clanId].title}]\n▶ [id${message.user.id}|${message.user.tag}] вступил в КустиКлан.`});
       });
    return bot(`✅ Вы вступили в клан "${clans[message.args[1]].title}"!`);
});

cmd.hear(/^(?:клан уч|клан участники|инфо пользователи)$/i, async (message, bot) => {
    if(message.user.inClan === false) return bot(`👥 Ты не состоишь в КустиКлане!`);

    let adminid = clans[message.user.clanId].admin;
    let memberval = clans[message.user.clanId].memberval;
    let members = clans[message.user.clanId].members;
    let admins = clans[message.user.clanId].admins;
    let maxmembers = clans[message.user.clanId].maxMembers;
    let title = clans[message.user.clanId].title;
    let cid = clans[message.user.clanId].clanId;

    return bot(`Список Участников "${title}":\n👥 [${memberval}/${maxmembers}] Кустики:\n${admins.map(x=> `[👑] [id${users[x].id}|${users[x].tag}] (${x}) - (→${utils.rn(users[x].breadtrans)}🍞)`).join('\n')}    \n${members.map(x=> `[👤] [id${users[x].id}|${users[x].tag}] (${x}) - (→${utils.rn(users[x].breadtrans)}🍞)`).join('\n')}`);
});

cmd.hear(/^(?:клан|🛡️)$/i, async (message, bot) => {
    if(message.user.inClan === false) return bot(`👥 Ты не состоишь в КустиКлане!`);

    let adminid = clans[message.user.clanId].admin;
    let memberval = clans[message.user.clanId].memberval;
    let members = clans[message.user.clanId].members;
    let admins = clans[message.user.clanId].admins;
    let maxmembers = clans[message.user.clanId].maxMembers;
    let title = clans[message.user.clanId].title;
    let level = clans[message.user.clanId].level;
    let exp = clans[message.user.clanId].exp;
    let nexp = clans[message.user.clanId].needexp;
    let role = "Ошибка";
    let cid = clans[message.user.clanId].clanId;
    if(clans[message.user.clanId].admin === message.user.uid){
         role = "Глава";
    };
    if(clans[message.user.clanId].admin != message.user.uid){
         role = "Участник";
    };

    if(!message.isChat) {
    
        await message.send(`Информация о КустиКлане:
        ✏ Название: ${title}\n🛡️ Уровень: ${utils.sp(level)} ур. (${utils.sp(exp)}/${utils.sp(nexp)})\n🔎 ID клана: ${cid}\n👤 Роль: ${role}\n👑 Глава: [id${adminid}|${users[adminid].tag}]\n🍞 Хлеб: ${utils.rn(clans[message.user.clanId].bread)}\n\n✏️ Описание Клана:\n${clans[message.user.clanId].desc}
    
        📝 Правила Клана:
             ${clans[message.user.clanId].rules}
    
        👥 [${memberval}/${maxmembers}] Кустики:
            ${admins.map(x=> `[👑] [id${users[x].id}|${users[x].tag}] (${utils.rn(users[x].rating)}🍞) (${x})\n(${utils.rn(users[x].breadtrans)}🍞→🛡️)`).join('\n')}    
            ${members.map(x=> `[👤] [id${users[x].id}|${users[x].tag}] (${utils.rn(users[x].rating)}🍞) (${x})\n(${utils.rn(users[x].breadtrans)}🍞→🛡️)`).join('\n')}
    
        ⚠️ Инструкция:
            •Чтобы вступить в клан "${title}", введи "вступить ${cid}"`, {
            keyboard: generateTopKeyboard([`🛡️ ${title} (${cid})`, `🔼 ${utils.sp(level)} ур. (${utils.sp(exp)}/${utils.sp(nexp)})`, `👑 ${users[adminid].tag}`, `🍞 ${utils.rn(clans[message.user.clanId].bread)}`,`◀️ Главное Меню`])
        });
        }
        if(message.isChat) {
            await message.send(`Информация о КустиКлане:
            ✏ Название: ${title}
            🛡️ Уровень: ${utils.sp(level)} ур. (${utils.sp(exp)}/${utils.sp(nexp)})
            🔎 ID клана: ${cid}
            👤 Роль: ${role}
            👑 Глава: [id${adminid}|${users[adminid].tag}]
            🍞 Хлеб: ${utils.rn(clans[message.user.clanId].bread)}
            
            ✏️ Описание Клана:
            ${clans[message.user.clanId].desc}
        
            📝 Правила Клана:
            ${clans[message.user.clanId].rules}
        
            👥 [${memberval}/${maxmembers}] Кустики:
            ${admins.map(x=> `[👑] [id${users[x].id}|${users[x].tag}] (${utils.rn(users[x].rating)}🍞) (${x})\n(${utils.rn(users[x].breadtrans)}🍞→🛡️)`).join('\n')}    
            ${members.map(x=> `[👤] [id${users[x].id}|${users[x].tag}] (${utils.rn(users[x].rating)}🍞) (${x})\n(${utils.rn(users[x].breadtrans)}🍞→🛡️)`).join('\n')}
        
            ⚠️ Инструкция:
            •Чтобы вступить в клан "${title}", введи "вступить ${cid}"`);
        }
});

cmd.hear(/^(?:разкуст)$/i, async (message, bot) => {
    if(!message.user.marriage.partner) return bot(`🌳 у вас еще нету кустика.`);

    let user = users.find(x=> x.uid === message.user.marriage.partner);

    message.user.marriage.partner = 0;
    user.marriage.partner = 0;

    return bot(`🌳 вы бросили своего кустика.`);
});

cmd.hear(/^(?:перевод)\s?([0-9]+)?$/i, async (message, bot) => {
    let transfer = transfers.find(x=> x.id === Number(message.args[1]));
    if(!transfer) return bot(`❌ неверный ID Перевода`);
    if(transfer.private === true) return bot(`❌ Этот перевод был скрыт.`);
    let text = ``;
    text += `🆔 ID: ${transfer.id} (${transfer.activationDate} | ${transfer.activationTime})\n`;
    if(transfer.status === "confirmed") text += `🔎 Статус: ✅ Подтверждено\n`;
    if(transfer.status === "aborted") text += `🔎 Статус: ❌ Отклонено (${transfer.reason})\n`;
    text += `📤 Отправитель: ${transfer.from}\n`;
    text += `📥 Получатель: ${transfer.to}\n`;
    if(transfer.valuename === "coins") text += `💸 Сумма: ${utils.rn(transfer.value)}🌳\n`;
    if(transfer.valuename === "bread") text += `💸 Сумма: ${utils.rn(transfer.value)}🍞\n`;

    return bot(`\n🌐 KustiPay Service\n${text}`);
});

cmd.hear(/^(?:профиль)\s?([0-9]+)?$/i, async (message, bot) => {
    let user = users.find(x=> x.uid === Number(message.args[1]));
    if(!user) return bot(`❌ неверный KustID`);
    if(user.profilewatch === false) return bot(`❌ [id${user.id}|${user.tag}] закрыл свой профиль. Для открытия кустик должен ввести "профиль да".`);
    let text = ``;
    text += `🆔 KustID: ${user.uid}\n`;
    if(user.inClan === true) text += `👥 КустиКлан: ${clans[user.clanId].title}\n`;
    if(user.inClan === false) text += `👥 КустиКлан: кустик не состоит в КустиКлане\n`;
    text += `🔗 URL: vk.com/id${user.id}\n`;
    if(user.calls) text += `🤙 Обращений к Боту: ${utils.rn(user.calls)}🤙\n`;
    text += `📅 Первое Появление: ${user.regDate}\n`;
    if(user.balanceview === true) text += `🌳 Кустики: ${utils.rn(user.balance)}🌳\n`;
    if(user.balanceview === true) text += `🍞 Хлеб: ${utils.rn(user.rating)}🍞\n`;
    if(user.marriage.partner) text += `🌳 Кустик: ${users[user.marriage.partner].tag}\n`;
    text += `💎 Уровень: ${user.level} [${user.exp}/24]\n`;
    if(user.warns) text += `⚠️ Варны: ${user.warns}\n`;
    if(!message.isChat) {
        await message.send(`\n ${text}`, {
            keyboard: generateProfileKeyboard([`👤 ${user.tag}`,`🆔 ${user.uid}`, `🍞 ${utils.rn(user.rating)}`, `🌳 ${utils.rn(user.balance)}`,`◀️ Главное Меню`])
        });
    }
    if(message.isChat) {
        await message.send(`Профиль Кустика [id${user.id}|${user.tag}]:\n${text}`);
    }
});

cmd.hear(/^(?:баланс)\s?([0-9]+)?$/i, async (message, bot) => {
    let user = users.find(x=> x.uid === Number(message.args[1]));
    if(!user) return bot(`❌ неверный KustID`);
    if(user.balanceview === false) return bot(`❌ [id${user.id}|${user.tag}] закрыл свой кошелёк. Для открытия кустик должен ввести "кошелёк да".`);
    if(user.balanceview === true) return bot(`Кошелёк [id${user.id}|${user.tag}]:
    Кустики: ${utils.rn(user.balance)}🌳
    Хлеб: ${user.rating}🍞`);
});

cmd.hear(/^(?:варны)\s?([0-9]+)?$/i, async (message, bot) => {
    let user = users.find(x=> x.uid === Number(message.args[1]));
    if(!user) return bot(`❌ неверный KustID`);
    if(user.profilewatch === false) return bot(`❌ [id${user.id}|${user.tag}] закрыл свой профиль. Для открытия кустик должен ввести "профиль да".`);
    else return bot(`Варны [id${user.id}|${user.tag}]:
     ${user.warns}⚠️`);
});

cmd.hear(/^(?:варны)$/i, async (message, bot) => {
    return bot(`ваши варны ${message.user.warns}⚠️`);
});


cmd.hear(/^(?:список)\s([0-9]+)$/i, async (message, bot) => {
    let card = cards.find(x=> x.id === Number(message.args[1]));
    if(!card) return bot(`❌ неверный KustiCardID.`);

    //return bot(`⭐ ${card.name} (${card.id})
    //📅 Дата Выхода: ${card.date}
    //🎨 Цвета Рамок: ${card.colors}
   // 📓 Описание: ${card.desc}
   // 💰 Ценность: ${card.price}
   // 🖼 Изображение:`),
    //message.sendPhoto(card.photourl);
        return message.send(`⭐ ${card.name} (${card.id})
        📅 Дата Выхода: ${card.date}
        🎨 Цвета Рамок: ${card.colors}
        📓 Описание: ${card.desc}
        💰 Ценность: ${card.price}
        🖼 Изображение:`, {
        attachment: card.photourl});
});

cmd.hear(/^(?:Пинг|пинг)$/i, async (message, bot) => {
    return bot(`ПОНГ!`);
});

cmd.hear(/^(?:репорт|реп|rep|жалоба)\s([^]+)$/i, async (message, bot) => {
    if(message.user.repban) return message.reply(`❌ У вас больше нет доступа к этой команде. ${utils.getSadEmoji()}`);
    if(message.isChat) return bot(`команда работает только в ЛС.`);
    vk.api.messages.send({ user_id: 388871250, forward_messages: message.id, message: `KustID: ${message.user.uid}` }).then(() => {
        return bot(`✅ ваше сообщение отправлено.`);
    }).catch((err) => {
        return bot(`❌ Ошибка, сообщение не отправлено.`);
    });
});

cmd.hear(/^(?:msg|мсг|лс)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
    if(!message.user.admin) return bot('❌ Доступ Запрещён!'); //left danis, right roman

    const user = await users.find(x=> x.uid === Number(message.args[1]));
    if(!user) return bot('❌ Неверный KustID');;

    vk.api.messages.send({ user_id: user.id, message: `✉ Сообщение от администратора [id${message.user.id}|${message.user.tag}]:\n[id${user.id}|${user.tag}], ${message.args[2]}` });
    return bot(`\n✉ Сообщение отправлено!\nПолучатель: [id${user.id}|${user.tag}]\nСодержание:\n"[id${user.id}|${user.tag}], ${message.args[2]}"`);
});

cmd.hear(/^(?:sysmsg|smg)\s([0-9]+)\s(neg|pos)\s([^]+)$/i, async (message, bot) => {
    if(!message.user.admin) return bot('❌ Доступ Запрещён!'); //left danis, right roman
    let sign = ``;
    if(message.args[2] === 'neg') sign += `❌`;
    if(message.args[2] === 'pos') sign += `✅`;
    const user = await users.find(x=> x.uid === Number(message.args[1]));
    if(!user) return bot('❌ Неверный KustID');;

    vk.api.messages.send({ user_id: user.id, message: `[id${user.id}|${user.tag}],\n${sign} ${message.args[3]}` });
    return bot(`\n✉ Сис-сообщение отправлено!\nПолучатель: [id${user.id}|${user.tag}]\nСодержание:\n"[id${user.id}|${user.tag}],\n${sign} ${message.args[3]}"`);
});

cmd.hear(/^(?:ответ)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
    if(!message.user.admin) return bot('❌ Доступ Запрещён!'); //left danis, right roman

    const user = await users.find(x=> x.uid === Number(message.args[1]));
    if(!user) return;

    vk.api.messages.send({ user_id: user.id, message: `✉ Сообщение от администратора:
    ⠀Язык:🇷🇺s
    
    ${message.args[2]}` });
});

cmd.hear(/^(?:реши)\s([0-9]+)\s(\+|\-|\/|\*)\s([0-9]+)$/i, async (message, bot) => {
    const result = eval(`${message.args[1]} ${message.args[2]} ${message.args[3]}`);
    return bot(`${message.args[1]} ${message.args[2]} ${message.args[3]}=${result}`);
});

cmd.hear(/^(?:кубик|куб)\s([1-6])$/i, async (message, bot) => {
    const int = utils.pick([1, 2, 3, 4, 5, 6]);
    if(int == message.args[1])
    {
        message.user.balance += 2000000;
        trans.push({
            id: trans.length,
            title: `Выигрыш в Кубик`,
            desc: `👍 вы угадали! Приз 2000000🌳`,
            targetType: "cup",
            targetId: 0,
            charge: `+2000000🌳`,
        });
        return bot(`вы угадали! Приз 2,000,000🌳`);
    } else return bot(`не угадали
     Выпало число ${int}`);
});

cmd.hear(/^(?:rps|кнб)\s(.*)$/i, async (message, bot) => {
    const int = utils.pick(['камень', 'ножницы', 'бумага']);
    if(int == message.args[1])
    {
        message.user.balance += 15000000000;
        trans.push({
            id: trans.length,
            title: `Выигрыш в КНБ`,
            desc: `вы угадали, это ${int}! Приз 15,000,000,000🌳 ${utils.getHappyEmoji()}`,
            targetType: "cup",
            targetId: 0,
            charge: `+15Млрд.🌳`,
        });
        return bot(`вы угадали, это ${int}! Приз 15,000,000,000🌳 ${utils.getHappyEmoji()}`);
    }
    if(!message.args[1])
    {
        return message.send(`Команда "Кнб" сравнивает ваш вариант ответа со случайным (камень, ножницы, бумага, если вы угадали, то получаете вознаграждение.\nПример использования: "кнб [камень]"`);
    }
    else return bot(`вы не угадали, это ${int} ${utils.getSadEmoji()}`);
});



cmd.hear(/^(?:казино)\s(.*)$/i, async (message, bot) => {
    message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
    message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
    message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
    message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

    if(!Number(message.args[1])) return;
    message.args[1] = Math.floor(Number(message.args[1]));
    if(message.args[1] > 500000000000) return bot('Ставка не может быть больше 500.000.000.000');

    if(message.args[1] <= 0) return;
    if(message.user.balance <= 0) return bot(`Ты и так бомж, куда тебе еще казино?`);
    if(message.args[1] > message.user.balance) return bot(`Не достаточно Кустики🌳.\n   Кустики: ${utils.rn(message.user.balance)}🌳`);
    else if(message.args[1] <= message.user.balance)
    {
        message.user.balance -= message.args[1];
        const multiply = utils.pick([0.25, 0.75, 0.5, 0.5, 1, 1, 1, 1, 1, 0.75, 2, 2, 1, 1, 1, 1, 2, 2, 0.5, 0.5, 2, 1, 1, 1, 1, 2, 2]);

        
        return bot(`\n💸 Поставлено: ${utils.sp(message.args[1])}\n📊 Результат: ${multiply === 1 ? `ваши Кустики остаются` : `${multiply < 1 ? `проигрыш (x${multiply}) ${utils.rn(message.args[1] * multiply)}🌳` : `выигрыш (x${multiply}) ${utils.sp(message.args[1] * multiply)}🌳`}`}\n🌳 Кустики: ${utils.sp(message.user.balance)}`);
    }
});

cmd.hear(/^(?:трейд)\s(вверх|вниз)\s(.*)$/i, async (message, bot) => {
    message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
    message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
    message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
    message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

    if(!Number(message.args[2])) return;
    message.args[2] = Math.floor(Number(message.args[2]));

    if(message.args[2] <= 0) return;

    if(message.args[2] > message.user.balance) return bot(`Не достаточно Кустики🌳.`);
    else if(message.args[2] <= message.user.balance)
    {
        message.user.balance -= message.args[2];

        const rand = utils.pick([0, 1]);
        const nav = Number(message.args[1].toLowerCase().replace(/вверх/, '1').replace(/вниз/, '2'));

        if(rand === nav)
        {
            const multiply = utils.pick([1.15, 1.25, 1.5, 1.75, 2, 2.5]);
            message.user.balance += Math.floor(message.args[2] * multiply);
            const trans = message.user.transactions
            trans.push({
                id: trans.length,
                title: `Выигрыш`,
                desc: `🍞Хлеб ${nav === 1 ? `подорожал ⤴` : `подешевел ⤵`} на ${utils.random(100)}🌳`,
                targetType: "bet",
                targetId: 0,
                charge: `+${message.args[2] * multiply}🌳`,
            });
            return bot(`🍞Хлеб ${nav === 1 ? `подорожал ⤴` : `подешевел ⤵`} на ${utils.random(100)}🌳
            ✅ Вы заработали +${message.args[2] * multiply}🌳
             Кустики: ${message.user.balance}🌳`);
        } else {
            const trans = message.user.transactions
            trans.push({
                id: trans.length,
                title: `Проигрыш`,
                desc: `🍞Хлеб ${nav === 1 ? `подорожал ⤴` : `подешевел ⤵`} на ${utils.random(100)}🌳`,
                targetType: "bet",
                targetId: 0,
                charge: `-${message.args[2]}🌳`,
            });
            return bot(`🍞Хлеб ${nav === 2 ? `подорожал ⤴` : `подешевел ⤵`} на ${utils.random(100)}🌳
            ❌ Вы потеряли ${message.args[2]}🌳
             Кустики: ${message.user.balance}🌳`);
        }
    }
});

cmd.hear(/^(?:стаканчик)\s([1-3])\s(.*)$/i, async (message, bot) => {
    message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
    message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
    message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
    message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

    if(!Number(message.args[2])) return;
    message.args[2] = Math.floor(Number(message.args[2]));

    if(message.args[2] <= 0) return;

    if(message.args[2] > message.user.balance) return bot(`Не достаточно Кустики🌳.\n   Кустики: ${message.user.balance}🌳`);
    else if(message.args[2] <= message.user.balance)
    {
        message.user.balance -= message.args[2];

        const multiply = utils.pick([0.95, 0.90, 0.85, 0.80, 0.75, 0.70, 0.65]);
        const cup = utils.random(1, 3);

        if(cup == message.args[1])
        {
            message.user.balance += Math.floor(message.args[2] * multiply);
            const trans = message.user.transactions
            trans.push({
                id: trans.length,
                title: `Выигрыш`,
                desc: `👍 вы угадали! Приз ${message.args[2] * multiply}🌳`,
                targetType: "cup",
                targetId: 0,
                charge: `+${message.args[2] * multiply}🌳`,
            });
            return bot(`👍 вы угадали! Приз ${utils.rn(message.args[2] * multiply)}🌳`);
        } else {
            return bot(`👎 вы не угадали, это был ${cup} стаканчик`);
        }
    }
});

cmd.hear(/^(?:заказ|заказать)\s([0-9]+)\s([0-9]+)$/i, async (message, bot) => {

    const card = await cards.find(x=> x.id === Number(message.args[1]));
    const value = Number(message.args[2]);
    if(!message.args[1]) return bot(`⚠️ Использование:\n"заказать CardID Колличество"`);
    if(!message.args[2]) return bot(`⚠️ Использование:\n"заказать CardID Колличество"`);
    if(!card) return bot(`❌ Неверный ID Карты.`);
    const price = value * card.price1;
    vk.api.messages.send({ user_id: 388871250, forward_messages: message.id, message: `\n🌐 KustiPay Service [ADMIN]\n📨 Новый Заказ\n👤 Отправитель: [id${message.user.id}|${message.user.tag}] (${message.user.uid})\n📦 Товар: "${card.name} (${value})\n💸 Сумма: ${utils.sp(price)}€` }).then(() => {
        console.log(`\nORDER FROM ${message.user.tag} (${message.user.uid})\n--------------------\nCard Name: ${card.name} (${card.id})\nCards Value: ${value}\nPrice: ${utils.sp(price)}€`);
        var date = new Date();
        orders.push({
            id: orders.length,
            messageId: message.id,
            fromid: `${message.user.id}`, 
            fromuid: `${message.user.uid}`, 
            cardid: Number(message.args[1]),
            value: Number(message.args[2]),
            orderDate: `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`,
            orderTime:`${date.getHours()}:${date.getMinutes()}`
        });
        return bot(`\n🌐 KustiPay Service\n✅ Заказ на рассмотрении...\n📦 Товар: "${card.name}" (${value})\n💸 Сумма: ${utils.sp(price)}€`);
    });
});


cmd.hear(/^(?:заказответ|ответзаказ)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
    if(!message.user.admin) return bot('❌ Доступ Запрещён!'); //left danis, right roman

    const user = await users.find(x=> x.uid === Number(message.args[1]));
    if(!user) return bot('❌ Неверный KustID');

    vk.api.messages.send({ user_id: user.id, message: `📨 Ответ от Администратора [id${message.user.id}|${message.user.tag}]:\n${message.args[2]}` });
    return bot('📨 Ответ отправлен.');
});

cmd.hear(/^(?:mod kickbot)$/i, async (message, bot) => {
    if(!message.user.admin) return bot('❌ Доступ Запрещён!');
    await bot(`⏳ `);
});

cmd.hear(/^(?:mod restart|mod offline|mod shutdown|mod off)$/i, async (message, bot) => {
    if(!message.user.admin) return bot('❌ Доступ Запрещён!');
    console.log(`[System] Restarting server by ${message.user.tag} (${message.user.uid} | ${message.user.id})`)
    console.log(`[System] Saving database files...`)
    await saveActPromo();
    await savePromo();
    await saveChats();
    await saveData();
    await saveTransfers();
    await saveUsers();
    await saveOrders();
    await saveClans();
    await bot(`⏳ Сохранение выполнено, бот перезапускается...`);
    console.log(`[System] Succesfully saved, going down...`)
    process.exit(-1);
});

cmd.hear(/^(?:рассылка)\s(.*)$/i, async (message, bot) => {
 if(!message.user.admin) return message.send('❌ Доступ Запрещён!');
 users.filter(x=> x.id !== 0).map(user => {
  vk.api.messages.send({ user_id: user.id, message: message.args[1]});
 });
 message.send('✅ Рассылка выполнена.')
});