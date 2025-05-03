// lrc:https://music.163.com/api/song/media?id=

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    lrcType: 3,
    audio: [
        {
            "name": "take it back",
            "artist": "JAWNY/Beck",
            "url": "https://ik.imagekit.io/haoyu223/music/1956701408/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1956701408/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1956701408/pic.jpg",
            "theme": "#828382"
        },
        {
            "name": "借酒",
            "artist": "聲無哀樂",
            "url": "https://ik.imagekit.io/haoyu223/music/1809688312/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1809688312/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1809688312/pic.jpg",
            "theme": "#7A82AD"
        },
        {
            "name": "Me Da Igual",
            "artist": "L'Impératrice",
            "url": "https://ik.imagekit.io/haoyu223/music/2131946793/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2131946793/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2131946793/pic.jpg",
            "theme": "#268DBE"
        },
        {
            "name": "The Light",
            "artist": "Loving Caliber/Ooyy",
            "url": "https://ik.imagekit.io/haoyu223/music/1844120057/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1844120057/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1844120057/pic.jpg",
            "theme": "#828388"
        },
        {
            "name": "《雪人》",
            "artist": "驼儿",
            "url": "https://ik.imagekit.io/haoyu223/music/2685515657/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2685515657/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2685515657/pic.jpg",
            "theme": "#868282"
        },
        {
            "name": "Shanghai",
            "artist": "King Gizzard & The Lizard Wizard",
            "url": "https://ik.imagekit.io/haoyu223/music/1852214423/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1852214423/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1852214423/pic.jpg",
            "theme": "#A37B50"
        },
        {
            "name": "Serenity",
            "artist": "Joshua Burnell",
            "url": "https://ik.imagekit.io/haoyu223/music/2120338529/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2120338529/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2120338529/pic.jpg",
            "theme": "#838383"
        },
        {
            "name": "Les rues de Paris",
            "artist": "Nicolas Godin",
            "url": "https://ik.imagekit.io/haoyu223/music/573870212/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/573870212/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/573870212/pic.jpg",
            "theme": "#858380"
        },
        {
            "name": "1979",
            "artist": "Else",
            "url": "https://ik.imagekit.io/haoyu223/music/406347881/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/406347881/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/406347881/pic.jpg",
            "theme": "#B16D9D"
        },
        {
            "name": "Beating Like a Drum",
            "artist": "Lovers Electric",
            "url": "https://ik.imagekit.io/haoyu223/music/2937886/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2937886/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2937886/pic.jpg",
            "theme": "#838383"
        },
        {
            "name": "Nagori",
            "artist": "Polo & Pan",
            "url": "https://ik.imagekit.io/haoyu223/music/2088138751/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2088138751/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2088138751/pic.jpg",
            "theme": "#858380"
        },
        {
            "name": "オトノケ - Otonoke",
            "artist": "Creepy Nuts",
            "url": "https://ik.imagekit.io/haoyu223/music/2633450766/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2633450766/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2633450766/pic.jpg",
            "theme": "#808484"
        },
        {
            "name": "a slice of peach",
            "artist": "牛尾憲輔",
            "url": "https://ik.imagekit.io/haoyu223/music/2652554212/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2652554212/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2652554212/pic.jpg",
            "theme": "#918071"
        },
        {
            "name": "Neg Odor 一天 ᠨᠢᠭᠡ ᠡᠳᠦᠷ",
            "artist": "Horseradio",
            "url": "https://ik.imagekit.io/haoyu223/music/2139618424/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2139618424/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2139618424/pic.jpg",
            "theme": "#818388"
        },
        {
            "name": "Boy & Bear",
            "artist": "Pogo",
            "url": "https://ik.imagekit.io/haoyu223/music/522511545/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/522511545/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/522511545/pic.jpg",
            "theme": "#BA703B"
        },
        {
            "name": "嗵嗵",
            "artist": "DOUDOU",
            "url": "https://ik.imagekit.io/haoyu223/music/2668317465/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2668317465/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2668317465/pic.jpg",
            "theme": "#808391"
        },
        {
            "name": "Dramamine",
            "artist": "flawed mangoes",
            "url": "https://ik.imagekit.io/haoyu223/music/2621452337/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2621452337/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2621452337/pic.jpg",
            "theme": "#DE5434"
        },
        {
            "name": "Who Are You, Really?",
            "artist": "Mikky Ekko",
            "url": "https://ik.imagekit.io/haoyu223/music/21122528/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/21122528/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/21122528/pic.jpg",
            "theme": "#878283"
        },
        {
            "name": "Lionheart",
            "artist": "Emancipator",
            "url": "https://ik.imagekit.io/haoyu223/music/1302604/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1302604/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1302604/pic.jpg",
            "theme": "#86837E"
        },
        {
            "name": "ライトダンス YSST Remix 2015 (Remixed by Yoshinori Sunahara)",
            "artist": "サカナクション",
            "url": "https://ik.imagekit.io/haoyu223/music/33735887/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/33735887/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/33735887/pic.jpg",
            "theme": "#838383"
        },
        {
            "name": "tiger and flower",
            "artist": "牛尾憲輔",
            "url": "https://ik.imagekit.io/haoyu223/music/2652554214/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2652554214/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2652554214/pic.jpg",
            "theme": "#918071"
        },
        {
            "name": "Suéltame, Bogotá",
            "artist": "Diamante Eléctrico",
            "url": "https://ik.imagekit.io/haoyu223/music/1812467310/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1812467310/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1812467310/pic.jpg",
            "theme": "#9178B9"
        },
        {
            "name": "Natural Cause",
            "artist": "Emancipator",
            "url": "https://ik.imagekit.io/haoyu223/music/26830927/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/26830927/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/26830927/pic.jpg",
            "theme": "#868285"
        },
        {
            "name": "Puzzle Pieces",
            "artist": "Saint Motel",
            "url": "https://ik.imagekit.io/haoyu223/music/21715511/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/21715511/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/21715511/pic.jpg",
            "theme": "#5E8D79"
        },
        {
            "name": "Together Again",
            "artist": "Alastair Gavin",
            "url": "https://ik.imagekit.io/haoyu223/music/2083530698/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2083530698/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2083530698/pic.jpg",
            "theme": "#C26488"
        },
        {
            "name": "Prickling",
            "artist": "Ladylike Lily",
            "url": "https://ik.imagekit.io/haoyu223/music/20987503/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/20987503/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/20987503/pic.jpg",
            "theme": "#828384"
        },
        {
            "name": "Drift",
            "artist": "Ratatat",
            "url": "https://ik.imagekit.io/haoyu223/music/33054150/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/33054150/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/33054150/pic.jpg",
            "theme": "#848384"
        },
        {
            "name": "Sunburn",
            "artist": "Brian Cheng",
            "url": "https://ik.imagekit.io/haoyu223/music/2635250005/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2635250005/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2635250005/pic.jpg",
            "theme": "#7C8396"
        },
        {
            "name": "Место для шага вперед",
            "artist": "Кино",
            "url": "https://ik.imagekit.io/haoyu223/music/2008662088/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2008662088/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2008662088/pic.jpg",
            "theme": "#87818B"
        },
        {
            "name": "The Bird Song (with Em Beihold)",
            "artist": "Noah Floersch/Em Beihold",
            "url": "https://ik.imagekit.io/haoyu223/music/2648334276/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2648334276/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2648334276/pic.jpg",
            "theme": "#658C76"
        },
        {
            "name": "breezeblocks",
            "artist": "Alt-J",
            "url": "https://ik.imagekit.io/haoyu223/music/28171824/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/28171824/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/28171824/pic.jpg",
            "theme": "#A46EC6"
        },
        {
            "name": "A Great Escape",
            "artist": "Satellite Stories",
            "url": "https://ik.imagekit.io/haoyu223/music/27928495/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/27928495/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/27928495/pic.jpg",
            "theme": "#768783"
        },
        {
            "name": "Twilight",
            "artist": "Bôa",
            "url": "https://ik.imagekit.io/haoyu223/music/3956914/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/3956914/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/3956914/pic.jpg",
            "theme": "#8A7F94"
        },
        {
            "name": "Walk With Me",
            "artist": "Bôa",
            "url": "https://ik.imagekit.io/haoyu223/music/2125182959/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2125182959/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2125182959/pic.jpg",
            "theme": "#868373"
        },
        {
            "name": "永恒的奥古斯都",
            "artist": "Fayzz",
            "url": "https://ik.imagekit.io/haoyu223/music/2097762669/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2097762669/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2097762669/pic.jpg",
            "theme": "#828383"
        },
        {
            "name": "Whirling-In-Rags, 8 AM",
            "artist": "Sea Power",
            "url": "https://ik.imagekit.io/haoyu223/music/2006478677/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2006478677/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2006478677/pic.jpg",
            "theme": "#947D81"
        },
        {
            "name": "Frozen",
            "artist": "Bôa",
            "url": "https://ik.imagekit.io/haoyu223/music/2602201972/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2602201972/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2602201972/pic.jpg",
            "theme": "#BE6B63"
        },
        {
            "name": "(I Want to Be Your) Mirror",
            "artist": "Temples",
            "url": "https://ik.imagekit.io/haoyu223/music/462895692/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/462895692/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/462895692/pic.jpg",
            "theme": "#3090A2"
        },
        {
            "name": "The Planets, Op. 32:4. Jupiter, the Bringer of Jollity",
            "artist": "Herbert von Karajan/Berliner Philharmoniker",
            "url": "https://ik.imagekit.io/haoyu223/music/1458770/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1458770/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1458770/pic.jpg",
            "theme": "#8A8362"
        },
        {
            "name": "Life Itself",
            "artist": "Glass Animals",
            "url": "https://ik.imagekit.io/haoyu223/music/427416514/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/427416514/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/427416514/pic.jpg",
            "theme": "#C66913"
        },
        {
            "name": "The Beach",
            "artist": "Wolf Alice",
            "url": "https://ik.imagekit.io/haoyu223/music/1848244625/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1848244625/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1848244625/pic.jpg",
            "theme": "#768595"
        },
        {
            "name": "Field Of Dreams",
            "artist": "Low Roar",
            "url": "https://ik.imagekit.io/haoyu223/music/2645841921/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2645841921/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2645841921/pic.jpg",
            "theme": "#808484"
        },
        {
            "name": "Fossils",
            "artist": "acloudyskye",
            "url": "https://ik.imagekit.io/haoyu223/music/2128096788/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2128096788/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2128096788/pic.jpg",
            "theme": "#6288A9"
        },
        {
            "name": "La La La",
            "artist": "Midnight Generation",
            "url": "https://ik.imagekit.io/haoyu223/music/2024710008/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2024710008/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2024710008/pic.jpg",
            "theme": "#BC6B78"
        },
        {
            "name": "Sigh",
            "artist": "The Bilinda Butchers",
            "url": "https://ik.imagekit.io/haoyu223/music/4397005/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/4397005/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/4397005/pic.jpg",
            "theme": "#C76561"
        },
        {
            "name": "Emma Blowgun's Last Stand",
            "artist": "Beulah",
            "url": "https://ik.imagekit.io/haoyu223/music/2220971/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2220971/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2220971/pic.jpg",
            "theme": "#828382"
        },
        {
            "name": "Feel Alright",
            "artist": "Poolside",
            "url": "https://ik.imagekit.io/haoyu223/music/1839038324/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1839038324/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1839038324/pic.jpg",
            "theme": "#997C76"
        },
        {
            "name": "Colors",
            "artist": "Beck",
            "url": "https://ik.imagekit.io/haoyu223/music/512648448/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/512648448/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/512648448/pic.jpg",
            "theme": "#4782F1"
        },
        {
            "name": "UGLY",
            "artist": "MISOGI",
            "url": "https://ik.imagekit.io/haoyu223/music/32405361/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/32405361/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/32405361/pic.jpg",
            "theme": "#9F7981"
        },
        {
            "name": "15 Headed",
            "artist": "The GALTMAH",
            "url": "https://ik.imagekit.io/haoyu223/music/1943623654/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1943623654/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1943623654/pic.jpg",
            "theme": "#77868E"
        },
        {
            "name": "Lupino",
            "artist": "The GALTMAH",
            "url": "https://ik.imagekit.io/haoyu223/music/1877710779/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1877710779/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1877710779/pic.jpg",
            "theme": "#B77145"
        },
        {
            "name": "Galzuurhan",
            "artist": "The GALTMAH",
            "url": "https://ik.imagekit.io/haoyu223/music/1943623659/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1943623659/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1943623659/pic.jpg",
            "theme": "#6D8799"
        },
        {
            "name": "Miracle",
            "artist": "Caravan Palace",
            "url": "https://ik.imagekit.io/haoyu223/music/1387849181/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1387849181/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1387849181/pic.jpg",
            "theme": "#A87675"
        },
        {
            "name": "是谁让你如此疲惫",
            "artist": "Since TMRW 始于明天",
            "url": "https://ik.imagekit.io/haoyu223/music/1987842075/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1987842075/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1987842075/pic.jpg",
            "theme": "#B76E7A"
        },
        {
            "name": "Go Out And Love Someone",
            "artist": "Pogo",
            "url": "https://ik.imagekit.io/haoyu223/music/1861453/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1861453/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1861453/pic.jpg",
            "theme": "#988126"
        },
        {
            "name": "Black",
            "artist": "Danger Mouse & Daniele Luppi",
            "url": "https://ik.imagekit.io/haoyu223/music/3935006/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/3935006/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/3935006/pic.jpg",
            "theme": "#838383"
        },
        {
            "name": "Tardigrade Song",
            "artist": "Cosmo Sheldrake",
            "url": "https://ik.imagekit.io/haoyu223/music/33111369/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/33111369/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/33111369/pic.jpg",
            "theme": "#8D8442"
        },
        {
            "name": "Canopée",
            "artist": "Polo & Pan",
            "url": "https://ik.imagekit.io/haoyu223/music/472219608/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/472219608/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/472219608/pic.jpg",
            "theme": "#9A7B7D"
        },
        {
            "name": "Fairground",
            "artist": "Leo Kalyan",
            "url": "https://ik.imagekit.io/haoyu223/music/33419045/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/33419045/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/33419045/pic.jpg",
            "theme": "#7483B2"
        },
        {
            "name": "Young And Beautiful",
            "artist": "Lana Del Rey",
            "url": "https://ik.imagekit.io/haoyu223/music/1839420177/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1839420177/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1839420177/pic.jpg",
            "theme": "#7C8589"
        },
        {
            "name": "Bus",
            "artist": "Travis",
            "url": "https://ik.imagekit.io/haoyu223/music/2164297038/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2164297038/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2164297038/pic.jpg",
            "theme": "#838383"
        },
        {
            "name": "When the wind talks",
            "artist": "Yatao and Malte Marten",
            "url": "https://ik.imagekit.io/haoyu223/music/1815196161/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1815196161/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1815196161/pic.jpg",
            "theme": "#81856D"
        },
        {
            "name": "Fly Away",
            "artist": "Urbandawn",
            "url": "https://ik.imagekit.io/haoyu223/music/1888184300/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1888184300/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1888184300/pic.jpg",
            "theme": "#EE3286"
        },
        {
            "name": "Bittersweet Symphony",
            "artist": "Marc Scibilia",
            "url": "https://ik.imagekit.io/haoyu223/music/2155774610/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2155774610/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2155774610/pic.jpg",
            "theme": "#838383"
        },
        {
            "name": "Levitating",
            "artist": "Dua Lipa",
            "url": "https://ik.imagekit.io/haoyu223/music/1446218812/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1446218812/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1446218812/pic.jpg",
            "theme": "#B76A95"
        },
        {
            "name": "Nu",
            "artist": "Philippe Katerine",
            "url": "https://ik.imagekit.io/haoyu223/music/2606378309/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2606378309/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2606378309/pic.jpg",
            "theme": "#D65953"
        },
        {
            "name": "Boljmor",
            "artist": "The GALTMAH",
            "url": "https://ik.imagekit.io/haoyu223/music/1877710653/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1877710653/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1877710653/pic.jpg",
            "theme": "#8D8080"
        },
        {
            "name": "FLY-飞",
            "artist": "ANU",
            "url": "https://ik.imagekit.io/haoyu223/music/479422828/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/479422828/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/479422828/pic.jpg",
            "theme": "#868287"
        },
        {
            "name": "Lepus",
            "artist": "The GALTMAH",
            "url": "https://ik.imagekit.io/haoyu223/music/2083228703/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2083228703/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2083228703/pic.jpg",
            "theme": "#907F80"
        },
        {
            "name": "Good Vibrations (Mono)",
            "artist": "The Beach Boys",
            "url": "https://ik.imagekit.io/haoyu223/music/3559305/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/3559305/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/3559305/pic.jpg",
            "theme": "#728A5F"
        },
        {
            "name": "Slapocalypse",
            "artist": "Charles Berthoud/Giacomo Turra",
            "url": "https://ik.imagekit.io/haoyu223/music/2134596642/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2134596642/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2134596642/pic.jpg",
            "theme": "#D6538A"
        },
        {
            "name": "Silence is Golden, Speech is Golden",
            "artist": "GTS Sound Team/庭師",
            "url": "https://ik.imagekit.io/haoyu223/music/1991288211/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1991288211/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1991288211/pic.jpg",
            "theme": "#848383"
        },
        {
            "name": "闲人夜游灯火会",
            "artist": "聲無哀樂",
            "url": "https://ik.imagekit.io/haoyu223/music/1809692124/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1809692124/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1809692124/pic.jpg",
            "theme": "#7A82AD"
        },
        {
            "name": "童话镇",
            "artist": "暗杠",
            "url": "https://ik.imagekit.io/haoyu223/music/413829859/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/413829859/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/413829859/pic.jpg",
            "theme": "#838383"
        },
        {
            "name": "轻舞（Moonlit paths heart follows）",
            "artist": "陈抒妮",
            "url": "https://ik.imagekit.io/haoyu223/music/2159641385/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2159641385/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2159641385/pic.jpg",
            "theme": "#CA644C"
        },
        {
            "name": "Небо",
            "artist": "SadSvit",
            "url": "https://ik.imagekit.io/haoyu223/music/1914043954/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1914043954/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1914043954/pic.jpg",
            "theme": "#7F8393"
        },
        {
            "name": "Columbus",
            "artist": "Snowmine",
            "url": "https://ik.imagekit.io/haoyu223/music/28256197/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/28256197/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/28256197/pic.jpg",
            "theme": "#838383"
        },
        {
            "name": "Duvet",
            "artist": "Bôa",
            "url": "https://ik.imagekit.io/haoyu223/music/3956911/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/3956911/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/3956911/pic.jpg",
            "theme": "#8A7F94"
        },
        {
            "name": "Head Empty",
            "artist": "Tsundere Twintails",
            "url": "https://ik.imagekit.io/haoyu223/music/1969479264/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1969479264/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1969479264/pic.jpg",
            "theme": "#838383"
        },
        {
            "name": "Towards the Light",
            "artist": "Jacoo",
            "url": "https://ik.imagekit.io/haoyu223/music/1364292313/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1364292313/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1364292313/pic.jpg",
            "theme": "#7F8489"
        },
        {
            "name": "Chiquitita X Twilight - Slowed Remix",
            "artist": "DJ Stephany/DJ RKT",
            "url": "https://ik.imagekit.io/haoyu223/music/1860677934/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1860677934/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1860677934/pic.jpg",
            "theme": "#BB7000"
        },
        {
            "name": "Самые грустные песни",
            "artist": "Перемотка",
            "url": "https://ik.imagekit.io/haoyu223/music/1887399757/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1887399757/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1887399757/pic.jpg",
            "theme": "#838385"
        },
        {
            "name": "навсегда",
            "artist": "Дурной Вкус",
            "url": "https://ik.imagekit.io/haoyu223/music/1836364746/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1836364746/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1836364746/pic.jpg",
            "theme": "#848383"
        },
        {
            "name": "The Moss",
            "artist": "Cosmo Sheldrake",
            "url": "https://ik.imagekit.io/haoyu223/music/28432684/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/28432684/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/28432684/pic.jpg",
            "theme": "#8C8452"
        },
        {
            "name": "Белая кошка",
            "artist": "Мельница",
            "url": "https://ik.imagekit.io/haoyu223/music/27591598/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/27591598/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/27591598/pic.jpg",
            "theme": "#8E816D"
        },
        {
            "name": "匆匆",
            "artist": "胡德夫",
            "url": "https://ik.imagekit.io/haoyu223/music/5276737/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/5276737/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/5276737/pic.jpg",
            "theme": "#8B8272"
        },
        {
            "name": "What Goes Up",
            "artist": "Lenka",
            "url": "https://ik.imagekit.io/haoyu223/music/1456541324/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1456541324/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1456541324/pic.jpg",
            "theme": "#84837E"
        },
        {
            "name": "Running With The Wolves (Wolfwalkers Edition)",
            "artist": "AURORA",
            "url": "https://ik.imagekit.io/haoyu223/music/1822675821/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1822675821/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1822675821/pic.jpg",
            "theme": "#838383"
        },
        {
            "name": "Unidentified Flavourful Object",
            "artist": "Mili",
            "url": "https://ik.imagekit.io/haoyu223/music/1456086908/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1456086908/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1456086908/pic.jpg",
            "theme": "#BF6E06"
        },
        {
            "name": "Wicked Games (From Westworld: Season 3)",
            "artist": "Ramin Djawadi",
            "url": "https://ik.imagekit.io/haoyu223/music/1437405183/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1437405183/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1437405183/pic.jpg",
            "theme": "#BB6E54"
        },
        {
            "name": "特伦斯梦游仙境",
            "artist": "林家谦",
            "url": "https://ik.imagekit.io/haoyu223/music/1471289407/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1471289407/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1471289407/pic.jpg",
            "theme": "#6F8B66"
        },
        {
            "name": "The Sun",
            "artist": "YokoDeux",
            "url": "https://ik.imagekit.io/haoyu223/music/2015913075/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2015913075/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2015913075/pic.jpg",
            "theme": "#8C8350"
        },
        {
            "name": "We Two Too Shy",
            "artist": "ARAI",
            "url": "https://ik.imagekit.io/haoyu223/music/2058095534/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2058095534/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2058095534/pic.jpg",
            "theme": "#B1726F"
        },
        {
            "name": "リメンバー",
            "artist": "Melanie/cadode",
            "url": "https://ik.imagekit.io/haoyu223/music/1919133819/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1919133819/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1919133819/pic.jpg",
            "theme": "#6085C2"
        },
        {
            "name": "Arpège",
            "artist": "Tony Anderson/Bonnie Brooksbank",
            "url": "https://ik.imagekit.io/haoyu223/music/1821368740/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1821368740/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1821368740/pic.jpg",
            "theme": "#7A849C"
        },
        {
            "name": "Forest Mixtape",
            "artist": "Christina Kuong",
            "url": "https://ik.imagekit.io/haoyu223/music/1908182683/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1908182683/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1908182683/pic.jpg",
            "theme": "#B7714B"
        },
        {
            "name": "张生传",
            "artist": "音速行星",
            "url": "https://ik.imagekit.io/haoyu223/music/2101421982/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2101421982/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2101421982/pic.jpg",
            "theme": "#858380"
        },
        {
            "name": "Zurkhen Helbert Boroo",
            "artist": "The GALTMAH",
            "url": "https://ik.imagekit.io/haoyu223/music/1874356963/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1874356963/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1874356963/pic.jpg",
            "theme": "#7E8392"
        },
        {
            "name": "Namuuhan",
            "artist": "The GALTMAH",
            "url": "https://ik.imagekit.io/haoyu223/music/1873983333/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1873983333/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1873983333/pic.jpg",
            "theme": "#818386"
        },
        {
            "name": "断魂汤 (Formatting)",
            "artist": "音速行星",
            "url": "https://ik.imagekit.io/haoyu223/music/2067405008/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2067405008/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2067405008/pic.jpg",
            "theme": "#838389"
        },
        {
            "name": "Me Gustas Tu",
            "artist": "Manu Chao",
            "url": "https://ik.imagekit.io/haoyu223/music/3038482/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/3038482/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/3038482/pic.jpg",
            "theme": "#9D7C68"
        },
        {
            "name": "王维说",
            "artist": "梁正",
            "url": "https://ik.imagekit.io/haoyu223/music/2115966555/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2115966555/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2115966555/pic.jpg",
            "theme": "#8E825B"
        },
        {
            "name": "El Condor Pasa",
            "artist": "Leo Rojas",
            "url": "https://ik.imagekit.io/haoyu223/music/408522839/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/408522839/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/408522839/pic.jpg",
            "theme": "#5B8C8A"
        },
        {
            "name": "Tomorrow",
            "artist": "Young Rising Sons",
            "url": "https://ik.imagekit.io/haoyu223/music/2074960042/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2074960042/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2074960042/pic.jpg",
            "theme": "#8D8178"
        },
        {
            "name": "Innerbloom",
            "artist": "RÜFÜS DU SOL",
            "url": "https://ik.imagekit.io/haoyu223/music/41643734/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/41643734/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/41643734/pic.jpg",
            "theme": "#A77675"
        },
        {
            "name": "Fireflies",
            "artist": "Owl City",
            "url": "https://ik.imagekit.io/haoyu223/music/1969768769/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1969768769/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1969768769/pic.jpg",
            "theme": "#F53233"
        },
        {
            "name": "Old School",
            "artist": "SORIANO",
            "url": "https://ik.imagekit.io/haoyu223/music/1302150880/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1302150880/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1302150880/pic.jpg",
            "theme": "#8A827C"
        },
        {
            "name": "乌桓",
            "artist": "AirJordy",
            "url": "https://ik.imagekit.io/haoyu223/music/1473518506/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1473518506/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1473518506/pic.jpg",
            "theme": "#7983A2"
        },
        {
            "name": "Young and Beautiful",
            "artist": "The Bryan Ferry Orchestra",
            "url": "https://ik.imagekit.io/haoyu223/music/26429459/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/26429459/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/26429459/pic.jpg",
            "theme": "#5B88B2"
        },
        {
            "name": "The devil is in the details",
            "artist": "The Chemical Brothers",
            "url": "https://ik.imagekit.io/haoyu223/music/4335955/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/4335955/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/4335955/pic.jpg",
            "theme": "#8F8173"
        },
        {
            "name": "Звёздное лето",
            "artist": "Алла Пугачёва/Ритм",
            "url": "https://ik.imagekit.io/haoyu223/music/1953273961/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1953273961/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1953273961/pic.jpg",
            "theme": "#808579"
        },
        {
            "name": "沉睡花园(Remix)",
            "artist": "HOW",
            "url": "https://ik.imagekit.io/haoyu223/music/2007861182/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2007861182/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2007861182/pic.jpg",
            "theme": "#838383"
        },
        {
            "name": "懂你(Remix)",
            "artist": "HOW",
            "url": "https://ik.imagekit.io/haoyu223/music/2007861264/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2007861264/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2007861264/pic.jpg",
            "theme": "#838383"
        },
        {
            "name": "1985",
            "artist": "Bo Burnham",
            "url": "https://ik.imagekit.io/haoyu223/music/1954311269/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1954311269/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1954311269/pic.jpg",
            "theme": "#8F8072"
        },
        {
            "name": "Free Bird",
            "artist": "Lynyrd Skynyrd",
            "url": "https://ik.imagekit.io/haoyu223/music/21052194/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/21052194/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/21052194/pic.jpg",
            "theme": "#828382"
        },
        {
            "name": "Gravity",
            "artist": "Lexurus",
            "url": "https://ik.imagekit.io/haoyu223/music/1415295927/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1415295927/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1415295927/pic.jpg",
            "theme": "#8F807A"
        },
        {
            "name": "Virtual Insanity",
            "artist": "Jamiroquai",
            "url": "https://ik.imagekit.io/haoyu223/music/27461858/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/27461858/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/27461858/pic.jpg",
            "theme": "#918400"
        },
        {
            "name": "Музыка вечер",
            "artist": "Перемотка",
            "url": "https://ik.imagekit.io/haoyu223/music/2084359251/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2084359251/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2084359251/pic.jpg",
            "theme": "#8A8274"
        },
        {
            "name": "Dream On",
            "artist": "Aerosmith",
            "url": "https://ik.imagekit.io/haoyu223/music/20506035/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/20506035/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/20506035/pic.jpg",
            "theme": "#838290"
        },
        {
            "name": "Осколки",
            "artist": "Перемотка/внимание брусника!",
            "url": "https://ik.imagekit.io/haoyu223/music/2037072752/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2037072752/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2037072752/pic.jpg",
            "theme": "#838383"
        },
        {
            "name": "夜に浮かぶ",
            "artist": "Haruna",
            "url": "https://ik.imagekit.io/haoyu223/music/1488866474/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1488866474/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1488866474/pic.jpg",
            "theme": "#7B8492"
        },
        {
            "name": "Anything You Need",
            "artist": "Low Roar",
            "url": "https://ik.imagekit.io/haoyu223/music/28764325/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/28764325/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/28764325/pic.jpg",
            "theme": "#728977"
        },
        {
            "name": "Poznań",
            "artist": "Low Roar",
            "url": "https://ik.imagekit.io/haoyu223/music/472045275/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/472045275/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/472045275/pic.jpg",
            "theme": "#838380"
        },
        {
            "name": "Bones",
            "artist": "Low Roar/Jofridur Akadottir",
            "url": "https://ik.imagekit.io/haoyu223/music/472045267/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/472045267/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/472045267/pic.jpg",
            "theme": "#838380"
        },
        {
            "name": "Don't Be So Serious",
            "artist": "Low Roar",
            "url": "https://ik.imagekit.io/haoyu223/music/472045266/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/472045266/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/472045266/pic.jpg",
            "theme": "#838380"
        },
        {
            "name": "Yes I'm A Mess",
            "artist": "AJR",
            "url": "https://ik.imagekit.io/haoyu223/music/2086317196/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2086317196/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2086317196/pic.jpg",
            "theme": "#8C8272"
        },
        {
            "name": "Chemtrails Over The Country Club",
            "artist": "Lana Del Rey",
            "url": "https://ik.imagekit.io/haoyu223/music/1830664231/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1830664231/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1830664231/pic.jpg",
            "theme": "#838383"
        },
        {
            "name": "重生",
            "artist": "姜米條",
            "url": "https://ik.imagekit.io/haoyu223/music/1402185189/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1402185189/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1402185189/pic.jpg",
            "theme": "#917D8E"
        },
        {
            "name": "Stand Alone",
            "artist": "obylx",
            "url": "https://ik.imagekit.io/haoyu223/music/1367329985/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1367329985/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1367329985/pic.jpg",
            "theme": "#788778"
        },
        {
            "name": "You So (Youth Soul)",
            "artist": "I Mean Us",
            "url": "https://ik.imagekit.io/haoyu223/music/1313107109/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1313107109/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1313107109/pic.jpg",
            "theme": "#518CA2"
        },
        {
            "name": "Drunk (Inspired by 酒狂)",
            "artist": "3ASiC",
            "url": "https://ik.imagekit.io/haoyu223/music/406821052/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/406821052/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/406821052/pic.jpg",
            "theme": "#838384"
        },
        {
            "name": "Billie Toppy",
            "artist": "Men I Trust",
            "url": "https://ik.imagekit.io/haoyu223/music/1981444669/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1981444669/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1981444669/pic.jpg",
            "theme": "#8F8080"
        },
        {
            "name": "Starboy",
            "artist": "The Weeknd/Daft Punk",
            "url": "https://ik.imagekit.io/haoyu223/music/461544117/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/461544117/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/461544117/pic.jpg",
            "theme": "#848383"
        },
        {
            "name": "Gengis",
            "artist": "Polo & Pan",
            "url": "https://ik.imagekit.io/haoyu223/music/1378849035/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1378849035/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1378849035/pic.jpg",
            "theme": "#6485C0"
        },
        {
            "name": "Les jolies choses",
            "artist": "Polo & Pan",
            "url": "https://ik.imagekit.io/haoyu223/music/1854380440/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1854380440/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1854380440/pic.jpg",
            "theme": "#9A8100"
        },
        {
            "name": "怒马",
            "artist": "羽果",
            "url": "https://ik.imagekit.io/haoyu223/music/1439345988/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1439345988/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1439345988/pic.jpg",
            "theme": "#838383"
        },
        {
            "name": "Ani Kuni",
            "artist": "Polo & Pan",
            "url": "https://ik.imagekit.io/haoyu223/music/1842952863/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1842952863/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1842952863/pic.jpg",
            "theme": "#9B8000"
        },
        {
            "name": "Bedtime Angel",
            "artist": "Ivoris",
            "url": "https://ik.imagekit.io/haoyu223/music/1970542285/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1970542285/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1970542285/pic.jpg",
            "theme": "#B27263"
        },
        {
            "name": "无挂碍",
            "artist": "音速行星",
            "url": "https://ik.imagekit.io/haoyu223/music/2048345455/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2048345455/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2048345455/pic.jpg",
            "theme": "#9A7C78"
        },
        {
            "name": "Welcome Home",
            "artist": "Radical Face",
            "url": "https://ik.imagekit.io/haoyu223/music/18495436/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/18495436/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/18495436/pic.jpg",
            "theme": "#848383"
        },
        {
            "name": "Another Holiday",
            "artist": "Dylan Dunlap",
            "url": "https://ik.imagekit.io/haoyu223/music/1822723519/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1822723519/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1822723519/pic.jpg",
            "theme": "#428DA7"
        },
        {
            "name": "A Long Way",
            "artist": "Josh Garrels",
            "url": "https://ik.imagekit.io/haoyu223/music/31460059/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/31460059/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/31460059/pic.jpg",
            "theme": "#838383"
        },
        {
            "name": "Scatman (Ski-Ba-Bop-Ba-Dop-Bop) (Karaoke)",
            "artist": "Scatman John",
            "url": "https://ik.imagekit.io/haoyu223/music/27297382/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/27297382/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/27297382/pic.jpg",
            "theme": "#828482"
        },
        {
            "name": "There You Are",
            "artist": "Pogo",
            "url": "https://ik.imagekit.io/haoyu223/music/451372087/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/451372087/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/451372087/pic.jpg",
            "theme": "#6A87A0"
        },
        {
            "name": "Organic Bijou",
            "artist": "Ooyy",
            "url": "https://ik.imagekit.io/haoyu223/music/1300712920/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1300712920/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1300712920/pic.jpg",
            "theme": "#5E8F4D"
        },
        {
            "name": "Data & Picard",
            "artist": "Pogo",
            "url": "https://ik.imagekit.io/haoyu223/music/451376031/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/451376031/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/451376031/pic.jpg",
            "theme": "#6A87A0"
        },
        {
            "name": "Movin' With It",
            "artist": "Mike Franklyn",
            "url": "https://ik.imagekit.io/haoyu223/music/1387892225/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1387892225/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1387892225/pic.jpg",
            "theme": "#60899F"
        },
        {
            "name": "Lose You Now",
            "artist": "Lindsey Stirling/Mako",
            "url": "https://ik.imagekit.io/haoyu223/music/1809169083/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1809169083/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1809169083/pic.jpg",
            "theme": "#6D888D"
        },
        {
            "name": "Lipstick On The Glass",
            "artist": "Wolf Alice",
            "url": "https://ik.imagekit.io/haoyu223/music/1848244626/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1848244626/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1848244626/pic.jpg",
            "theme": "#768595"
        },
        {
            "name": "The Fly",
            "artist": "Cosmo Sheldrake",
            "url": "https://ik.imagekit.io/haoyu223/music/33111366/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/33111366/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/33111366/pic.jpg",
            "theme": "#8D8442"
        },
        {
            "name": "东海老人",
            "artist": "裁缝铺",
            "url": "https://ik.imagekit.io/haoyu223/music/1991332315/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1991332315/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1991332315/pic.jpg",
            "theme": "#7B8582"
        },
        {
            "name": "Bottai",
            "artist": "Ooyy",
            "url": "https://ik.imagekit.io/haoyu223/music/1397140856/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1397140856/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1397140856/pic.jpg",
            "theme": "#838383"
        },
        {
            "name": "labour",
            "artist": "Paris Paloma",
            "url": "https://ik.imagekit.io/haoyu223/music/2026410789/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2026410789/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2026410789/pic.jpg",
            "theme": "#86818E"
        },
        {
            "name": "Wriggle (Mr Jukes Edit)",
            "artist": "Cosmo Sheldrake/Mr Jukes",
            "url": "https://ik.imagekit.io/haoyu223/music/1295114264/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1295114264/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1295114264/pic.jpg",
            "theme": "#BA7027"
        },
        {
            "name": "Lion",
            "artist": "Hearts & Colors",
            "url": "https://ik.imagekit.io/haoyu223/music/1491054227/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1491054227/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1491054227/pic.jpg",
            "theme": "#848384"
        },
        {
            "name": "The Clouds in Camarillo",
            "artist": "Brazzaville",
            "url": "https://ik.imagekit.io/haoyu223/music/1084273/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1084273/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1084273/pic.jpg",
            "theme": "#9C7F2F"
        },
        {
            "name": "Fame and Fortune",
            "artist": "The Libertines",
            "url": "https://ik.imagekit.io/haoyu223/music/34532858/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/34532858/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/34532858/pic.jpg",
            "theme": "#7F7FB5"
        },
        {
            "name": "Outer Wilds",
            "artist": "Andrew Prahlow",
            "url": "https://ik.imagekit.io/haoyu223/music/1903401563/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1903401563/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1903401563/pic.jpg",
            "theme": "#828384"
        },
        {
            "name": "Ferrari",
            "artist": "Jayvine Ramma",
            "url": "https://ik.imagekit.io/haoyu223/music/2020576962/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2020576962/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2020576962/pic.jpg",
            "theme": "#8B8084"
        },
        {
            "name": "Hiding In The Blue",
            "artist": "TheFatRat/RIELL",
            "url": "https://ik.imagekit.io/haoyu223/music/1852002829/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1852002829/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1852002829/pic.jpg",
            "theme": "#6B8A7D"
        },
        {
            "name": "Heat Waves",
            "artist": "Glass Animals",
            "url": "https://ik.imagekit.io/haoyu223/music/1459128908/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1459128908/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1459128908/pic.jpg",
            "theme": "#628C7F"
        },
        {
            "name": "novocaine",
            "artist": "GenriX/CORBAL/Shiloh Dynasty",
            "url": "https://ik.imagekit.io/haoyu223/music/2006693987/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2006693987/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2006693987/pic.jpg",
            "theme": "#7A849A"
        },
        {
            "name": "90",
            "artist": "Pompeya",
            "url": "https://ik.imagekit.io/haoyu223/music/1939352327/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1939352327/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1939352327/pic.jpg",
            "theme": "#8D8178"
        },
        {
            "name": "Never Be Alone",
            "artist": "TheFatRat",
            "url": "https://ik.imagekit.io/haoyu223/music/30987781/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/30987781/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/30987781/pic.jpg",
            "theme": "#A97293"
        },
        {
            "name": "Wisdom",
            "artist": "The Guggenheim Grotto",
            "url": "https://ik.imagekit.io/haoyu223/music/4344799/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/4344799/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/4344799/pic.jpg",
            "theme": "#F03C35"
        },
        {
            "name": "Preach",
            "artist": "Saint Motel",
            "url": "https://ik.imagekit.io/haoyu223/music/1479681630/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1479681630/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1479681630/pic.jpg",
            "theme": "#C76559"
        },
        {
            "name": "Riptide",
            "artist": "Vancouver Sleep Clinic/Pop Goes Ambient/Amelia Magdalena",
            "url": "https://ik.imagekit.io/haoyu223/music/2013823506/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2013823506/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2013823506/pic.jpg",
            "theme": "#7B8682"
        },
        {
            "name": "whoa (mind in awe)",
            "artist": "XXXTENTACION",
            "url": "https://ik.imagekit.io/haoyu223/music/1331880361/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1331880361/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1331880361/pic.jpg",
            "theme": "#838383"
        },
        {
            "name": "Losing Game",
            "artist": "Maximillian",
            "url": "https://ik.imagekit.io/haoyu223/music/1890653477/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1890653477/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1890653477/pic.jpg",
            "theme": "#8C817E"
        },
        {
            "name": "Once Upon a Time",
            "artist": "Max Oazo/Moonessa",
            "url": "https://ik.imagekit.io/haoyu223/music/1299570939/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1299570939/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1299570939/pic.jpg",
            "theme": "#937D8A"
        },
        {
            "name": "East of Eden",
            "artist": "Zella Day",
            "url": "https://ik.imagekit.io/haoyu223/music/30967819/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/30967819/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/30967819/pic.jpg",
            "theme": "#9E7D4A"
        },
        {
            "name": "Yellow",
            "artist": "Coldplay",
            "url": "https://ik.imagekit.io/haoyu223/music/26807310/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/26807310/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/26807310/pic.jpg",
            "theme": "#B07539"
        },
        {
            "name": "Everything At Your Feet (feat. The Chamanas)",
            "artist": "ODESZA/The Chamanas",
            "url": "https://ik.imagekit.io/haoyu223/music/1329664859/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1329664859/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1329664859/pic.jpg",
            "theme": "#838386"
        },
        {
            "name": "Are You Lost",
            "artist": "Park Bird",
            "url": "https://ik.imagekit.io/haoyu223/music/518894020/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/518894020/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/518894020/pic.jpg",
            "theme": "#848383"
        },
        {
            "name": "十万嬉皮",
            "artist": "万能青年旅店",
            "url": "https://ik.imagekit.io/haoyu223/music/386837/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/386837/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/386837/pic.jpg",
            "theme": "#848380"
        },
        {
            "name": "Миллион алых роз",
            "artist": "Алла Пугачёва",
            "url": "https://ik.imagekit.io/haoyu223/music/1296864970/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1296864970/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1296864970/pic.jpg",
            "theme": "#888281"
        },
        {
            "name": "You Can Get It",
            "artist": "Arkells/K.Flay",
            "url": "https://ik.imagekit.io/haoyu223/music/1832516742/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1832516742/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1832516742/pic.jpg",
            "theme": "#D04DC5"
        },
        {
            "name": "Prairies",
            "artist": "BoyWithUke/mxmtoon",
            "url": "https://ik.imagekit.io/haoyu223/music/1944897224/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1944897224/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1944897224/pic.jpg",
            "theme": "#7C848F"
        },
        {
            "name": "踊り子",
            "artist": "Vaundy",
            "url": "https://ik.imagekit.io/haoyu223/music/1888864514/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1888864514/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1888864514/pic.jpg",
            "theme": "#9D7C6C"
        },
        {
            "name": "Toxic People out of My Life (Remix)",
            "artist": "Deviana Sharon S",
            "url": "https://ik.imagekit.io/haoyu223/music/1880946907/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1880946907/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1880946907/pic.jpg",
            "theme": "#7F838F"
        },
        {
            "name": "Hello Hello Hello",
            "artist": "Remi Wolf",
            "url": "https://ik.imagekit.io/haoyu223/music/1457709585/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1457709585/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1457709585/pic.jpg",
            "theme": "#C8663F"
        },
        {
            "name": "NIGHT DANCER",
            "artist": "imase",
            "url": "https://ik.imagekit.io/haoyu223/music/1973593792/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1973593792/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1973593792/pic.jpg",
            "theme": "#718E00"
        },
        {
            "name": "isahini",
            "artist": "LÜCY",
            "url": "https://ik.imagekit.io/haoyu223/music/1954146692/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1954146692/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1954146692/pic.jpg",
            "theme": "#7D8581"
        },
        {
            "name": "Redbone",
            "artist": "Childish Gambino",
            "url": "https://ik.imagekit.io/haoyu223/music/1468248736/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1468248736/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1468248736/pic.jpg",
            "theme": "#8F8259"
        },
        {
            "name": "Nothings Gonna Change My Love For You",
            "artist": "George Benson",
            "url": "https://ik.imagekit.io/haoyu223/music/25880355/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/25880355/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/25880355/pic.jpg",
            "theme": "#A07B68"
        },
        {
            "name": "Sony Vegas 9.x Keygen Music",
            "artist": "Joey Mizers/Kenet/Rez/Digital Insanity",
            "url": "https://ik.imagekit.io/haoyu223/music/433103958/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/433103958/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/433103958/pic.jpg",
            "theme": "#838383"
        },
        {
            "name": "Brain Eater",
            "artist": "Epic Mountain",
            "url": "https://ik.imagekit.io/haoyu223/music/2014210827/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2014210827/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2014210827/pic.jpg",
            "theme": "#9076C7"
        },
        {
            "name": "Full Heart Fancy (Instrumental)",
            "artist": "Lucky Chops",
            "url": "https://ik.imagekit.io/haoyu223/music/1374607534/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1374607534/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1374607534/pic.jpg",
            "theme": "#0091BD"
        },
        {
            "name": "风吹麦浪 (Live)",
            "artist": "李健/孙俪",
            "url": "https://ik.imagekit.io/haoyu223/music/25714332/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/25714332/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/25714332/pic.jpg",
            "theme": "#CE614D"
        },
        {
            "name": "德彪西-月光",
            "artist": "橙光音乐/Shockwave-Sound",
            "url": "https://ik.imagekit.io/haoyu223/music/488919883/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/488919883/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/488919883/pic.jpg",
            "theme": "#847FA7"
        },
        {
            "name": "Merry Christmas Mr. Lawrence",
            "artist": "坂本龍一",
            "url": "https://ik.imagekit.io/haoyu223/music/4899152/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/4899152/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/4899152/pic.jpg",
            "theme": "#868282"
        },
        {
            "name": "Late Truth",
            "artist": "Audio Hertz",
            "url": "https://ik.imagekit.io/haoyu223/music/1940135624/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1940135624/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1940135624/pic.jpg",
            "theme": "#758B45"
        },
        {
            "name": "Record Player",
            "artist": "Daisy the Great/AJR",
            "url": "https://ik.imagekit.io/haoyu223/music/1874302915/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1874302915/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1874302915/pic.jpg",
            "theme": "#4B8E97"
        },
        {
            "name": "Shrooms",
            "artist": "San Holo",
            "url": "https://ik.imagekit.io/haoyu223/music/32364904/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/32364904/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/32364904/pic.jpg",
            "theme": "#838386"
        },
        {
            "name": "Rage Your Dream",
            "artist": "m.o.v.e",
            "url": "https://ik.imagekit.io/haoyu223/music/28823239/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/28823239/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/28823239/pic.jpg",
            "theme": "#7F848D"
        },
        {
            "name": "Nijamena(From“Sita”)",
            "artist": "Anurag Kulkarni",
            "url": "https://ik.imagekit.io/haoyu223/music/1941891917/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1941891917/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1941891917/pic.jpg",
            "theme": "#748784"
        },
        {
            "name": "Nothing Is Lost (You Give Me Strength) (From \"Avatar: The Way of Water\"/Soundtrack Version)",
            "artist": "The Weeknd",
            "url": "https://ik.imagekit.io/haoyu223/music/2007188824/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/2007188824/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/2007188824/pic.jpg",
            "theme": "#4888CD"
        },
        {
            "name": "In The Night Garden-Hello Makka Pakka!（TØm / iMoon remix）",
            "artist": "TØm/iMoon",
            "url": "https://ik.imagekit.io/haoyu223/music/1831544363/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1831544363/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1831544363/pic.jpg",
            "theme": "#838383"
        },
        {
            "name": "冬の花",
            "artist": "宮本浩次",
            "url": "https://ik.imagekit.io/haoyu223/music/1896116362/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1896116362/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1896116362/pic.jpg",
            "theme": "#828295"
        },
        {
            "name": "Dragonfruit Salad",
            "artist": "Lacheque",
            "url": "https://ik.imagekit.io/haoyu223/music/1413085132/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1413085132/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1413085132/pic.jpg",
            "theme": "#C66921"
        },
        {
            "name": "Cornfield Chase (Piano-Cello Version)",
            "artist": "Michael Forster/Anna Stevens",
            "url": "https://ik.imagekit.io/haoyu223/music/1354653787/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1354653787/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1354653787/pic.jpg",
            "theme": "#977D71"
        },
        {
            "name": "Tangled Up",
            "artist": "Caro Emerald",
            "url": "https://ik.imagekit.io/haoyu223/music/1913268565/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1913268565/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1913268565/pic.jpg",
            "theme": "#868378"
        },
        {
            "name": "Yesterday Once More",
            "artist": "Carpenters",
            "url": "https://ik.imagekit.io/haoyu223/music/3986241/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/3986241/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/3986241/pic.jpg",
            "theme": "#9D7D57"
        },
        {
            "name": "500 Miles Away from Home",
            "artist": "Bobby Bare",
            "url": "https://ik.imagekit.io/haoyu223/music/566160219/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/566160219/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/566160219/pic.jpg",
            "theme": "#89827A"
        },
        {
            "name": "Gymnopedie No.1",
            "artist": "Erik Satie",
            "url": "https://ik.imagekit.io/haoyu223/music/1436101985/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1436101985/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1436101985/pic.jpg",
            "theme": "#957F64"
        },
        {
            "name": "Wavin' Flag",
            "artist": "K'NAAN",
            "url": "https://ik.imagekit.io/haoyu223/music/5097737/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/5097737/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/5097737/pic.jpg",
            "theme": "#828482"
        },
        {
            "name": "Take On Me",
            "artist": "a-ha",
            "url": "https://ik.imagekit.io/haoyu223/music/26726145/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/26726145/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/26726145/pic.jpg",
            "theme": "#848381"
        },
        {
            "name": "Stayin' Alive (From \"Saturday Night Fever\" Soundtrack)",
            "artist": "Bee Gees",
            "url": "https://ik.imagekit.io/haoyu223/music/3952752/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/3952752/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/3952752/pic.jpg",
            "theme": "#838386"
        },
        {
            "name": "Watch Me Work",
            "artist": "Tinashe",
            "url": "https://ik.imagekit.io/haoyu223/music/1304347114/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1304347114/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1304347114/pic.jpg",
            "theme": "#4E8E8C"
        },
        {
            "name": "Sail",
            "artist": "AWOLNATION",
            "url": "https://ik.imagekit.io/haoyu223/music/3935191/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/3935191/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/3935191/pic.jpg",
            "theme": "#28928D"
        },
        {
            "name": "Free Loop",
            "artist": "Daniel Powter",
            "url": "https://ik.imagekit.io/haoyu223/music/5179543/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/5179543/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/5179543/pic.jpg",
            "theme": "#748695"
        },
        {
            "name": "Haus Abendrot",
            "artist": "Wilbert Eckart & Volksmusik Stars",
            "url": "https://ik.imagekit.io/haoyu223/music/32234589/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/32234589/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/32234589/pic.jpg",
            "theme": "#D75954"
        },
        {
            "name": "Do It Better",
            "artist": "The Blah Blah Blahs",
            "url": "https://ik.imagekit.io/haoyu223/music/1892470945/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1892470945/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1892470945/pic.jpg",
            "theme": "#5487C5"
        },
        {
            "name": "Ladyfingers",
            "artist": "Herb Alpert & the Tijuana Brass",
            "url": "https://ik.imagekit.io/haoyu223/music/1419321891/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1419321891/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1419321891/pic.jpg",
            "theme": "#A37971"
        },
        {
            "name": "Bones",
            "artist": "Imagine Dragons",
            "url": "https://ik.imagekit.io/haoyu223/music/1960362416/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1960362416/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1960362416/pic.jpg",
            "theme": "#D75955"
        },
        {
            "name": "petit poney",
            "artist": "88century",
            "url": "https://ik.imagekit.io/haoyu223/music/1926707767/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1926707767/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1926707767/pic.jpg",
            "theme": "#D95756"
        },
        {
            "name": "Why Not",
            "artist": "Ghostface Playa",
            "url": "https://ik.imagekit.io/haoyu223/music/1931045567/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1931045567/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1931045567/pic.jpg",
            "theme": "#818483"
        },
        {
            "name": "Somebody That I Used To Know",
            "artist": "Gotye/Kimbra",
            "url": "https://ik.imagekit.io/haoyu223/music/17939827/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/17939827/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/17939827/pic.jpg",
            "theme": "#878467"
        },
        {
            "name": "Carmen Suite No. 2:II. Habanera",
            "artist": "Slovak Philharmonic Orchestra/Anthony Bramall",
            "url": "https://ik.imagekit.io/haoyu223/music/464891963/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/464891963/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/464891963/pic.jpg",
            "theme": "#898367"
        },
        {
            "name": "Peer Gynt Suite No. 1, Op. 46: In the Hall of the Mountain King",
            "artist": "Wilhelm Dunzter/The Hays Langley Orchestra",
            "url": "https://ik.imagekit.io/haoyu223/music/1348939657/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1348939657/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1348939657/pic.jpg",
            "theme": "#8A827B"
        },
        {
            "name": "Haltija",
            "artist": "Etherwood",
            "url": "https://ik.imagekit.io/haoyu223/music/1312570616/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1312570616/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1312570616/pic.jpg",
            "theme": "#838389"
        },
        {
            "name": "Forget (Slowed Down)",
            "artist": "Storm Lake",
            "url": "https://ik.imagekit.io/haoyu223/music/1978593877/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1978593877/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1978593877/pic.jpg",
            "theme": "#8B8181"
        },
        {
            "name": "Alpha",
            "artist": "C418",
            "url": "https://ik.imagekit.io/haoyu223/music/27961148/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/27961148/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/27961148/pic.jpg",
            "theme": "#8A817D"
        },
        {
            "name": "护花使者",
            "artist": "李克勤",
            "url": "https://ik.imagekit.io/haoyu223/music/115569/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/115569/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/115569/pic.jpg",
            "theme": "#838476"
        },
        {
            "name": "初恋",
            "artist": "回春丹",
            "url": "https://ik.imagekit.io/haoyu223/music/1873049720/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1873049720/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1873049720/pic.jpg",
            "theme": "#838382"
        },
        {
            "name": "Numb Little Bug",
            "artist": "Em Beihold",
            "url": "https://ik.imagekit.io/haoyu223/music/1915796767/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1915796767/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1915796767/pic.jpg",
            "theme": "#5D86BF"
        },
        {
            "name": "Encanto (游戏《极限竞速：地平线5》主题曲)",
            "artist": "SKY_无极限",
            "url": "https://ik.imagekit.io/haoyu223/music/1943478950/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1943478950/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1943478950/pic.jpg",
            "theme": "#A47966"
        },
        {
            "name": "World's Smallest Violin",
            "artist": "AJR",
            "url": "https://ik.imagekit.io/haoyu223/music/1830531332/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1830531332/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1830531332/pic.jpg",
            "theme": "#987D79"
        },
        {
            "name": "Animal Crossing: New Horizons Main Theme (Lofi Version)",
            "artist": "Closed on Sunday",
            "url": "https://ik.imagekit.io/haoyu223/music/1443127271/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1443127271/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1443127271/pic.jpg",
            "theme": "#4E8BAA"
        },
        {
            "name": "Gimme! Gimme! Gimme! (A Man After Midnight)",
            "artist": "ABBA",
            "url": "https://ik.imagekit.io/haoyu223/music/3880252/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/3880252/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/3880252/pic.jpg",
            "theme": "#977F62"
        },
        {
            "name": "啷个哩个啷",
            "artist": "鹏泊",
            "url": "https://ik.imagekit.io/haoyu223/music/410801653/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/410801653/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/410801653/pic.jpg",
            "theme": "#00929F"
        },
        {
            "name": "Playground Politica",
            "artist": "Netta/Mr Eazi",
            "url": "https://ik.imagekit.io/haoyu223/music/1977087801/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1977087801/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1977087801/pic.jpg",
            "theme": "#C06D22"
        },
        {
            "name": "Intro",
            "artist": "ODESZA",
            "url": "https://ik.imagekit.io/haoyu223/music/1329665665/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1329665665/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1329665665/pic.jpg",
            "theme": "#838386"
        },
        {
            "name": "A Moment Apart",
            "artist": "ODESZA",
            "url": "https://ik.imagekit.io/haoyu223/music/1329665666/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1329665666/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1329665666/pic.jpg",
            "theme": "#838386"
        },
        {
            "name": "Revolution",
            "artist": "Kirk Franklin",
            "url": "https://ik.imagekit.io/haoyu223/music/28746152/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/28746152/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/28746152/pic.jpg",
            "theme": "#838383"
        },
        {
            "name": "Flamingo",
            "artist": "Kero Kero Bonito",
            "url": "https://ik.imagekit.io/haoyu223/music/36872361/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/36872361/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/36872361/pic.jpg",
            "theme": "#858283"
        },
        {
            "name": "7th Element (HD)",
            "artist": "Vitas",
            "url": "https://ik.imagekit.io/haoyu223/music/1322142290/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1322142290/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1322142290/pic.jpg",
            "theme": "#7182BA"
        },
        {
            "name": "Baby I'm Yours",
            "artist": "Breakbot",
            "url": "https://ik.imagekit.io/haoyu223/music/28751367/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/28751367/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/28751367/pic.jpg",
            "theme": "#878284"
        },
        {
            "name": "Blinding Lights",
            "artist": "The Weeknd",
            "url": "https://ik.imagekit.io/haoyu223/music/1958346537/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1958346537/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1958346537/pic.jpg",
            "theme": "#9B7E59"
        },
        {
            "name": "Immortals",
            "artist": "Fall Out Boy",
            "url": "https://ik.imagekit.io/haoyu223/music/1858072261/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1858072261/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1858072261/pic.jpg",
            "theme": "#AF7800"
        },
        {
            "name": "Slow Down",
            "artist": "Madnap/Pauline Herr",
            "url": "https://ik.imagekit.io/haoyu223/music/1356658022/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1356658022/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1356658022/pic.jpg",
            "theme": "#87818B"
        },
        {
            "name": "BALLIN'",
            "artist": "Jupiter",
            "url": "https://ik.imagekit.io/haoyu223/music/523046147/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/523046147/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/523046147/pic.jpg",
            "theme": "#84efff"
        },
        {
            "name": "Rush Area 51 (Impossible Version)",
            "artist": "Sheet Music Boss",
            "url": "https://ik.imagekit.io/haoyu223/music/1807741819/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1807741819/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1807741819/pic.jpg",
            "theme": "#7E8A00"
        },
        {
            "name": "Rush G (Impossible Version)",
            "artist": "Sheet Music Boss",
            "url": "https://ik.imagekit.io/haoyu223/music/1807741818/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1807741818/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1807741818/pic.jpg",
            "theme": "#7E8A00"
        },
        {
            "name": "Rush E (Impossible Version)",
            "artist": "Sheet Music Boss",
            "url": "https://ik.imagekit.io/haoyu223/music/1807742799/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1807742799/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1807742799/pic.jpg",
            "theme": "#7E8A00"
        },
        {
            "name": "Madu Dan Racun (Remaster)",
            "artist": "Bill & Brod",
            "url": "https://ik.imagekit.io/haoyu223/music/528478974/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/528478974/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/528478974/pic.jpg",
            "theme": "#8B8086"
        },
        {
            "name": "Pixel Pig（Henry Remix）",
            "artist": "Henry",
            "url": "https://ik.imagekit.io/haoyu223/music/1969366432/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1969366432/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1969366432/pic.jpg",
            "theme": "#A87768"
        },
        {
            "name": "奇妙的约会",
            "artist": "洪钟",
            "url": "https://ik.imagekit.io/haoyu223/music/5261697/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/5261697/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/5261697/pic.jpg",
            "theme": "#7B839E"
        },
        {
            "name": "We All Lift Together",
            "artist": "Keith Power",
            "url": "https://ik.imagekit.io/haoyu223/music/1345938424/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1345938424/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1345938424/pic.jpg",
            "theme": "#6E869E"
        },
        {
            "name": "Bassa Sababa",
            "artist": "Netta",
            "url": "https://ik.imagekit.io/haoyu223/music/1343461479/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1343461479/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1343461479/pic.jpg",
            "theme": "#B46E88"
        },
        {
            "name": "What U Do",
            "artist": "Wild Culture/Shel Bee",
            "url": "https://ik.imagekit.io/haoyu223/music/1459697279/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1459697279/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1459697279/pic.jpg",
            "theme": "#838383"
        },
        {
            "name": "Glow Me",
            "artist": "Magdy Haddad",
            "url": "https://ik.imagekit.io/haoyu223/music/1447797075/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1447797075/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1447797075/pic.jpg",
            "theme": "#788595"
        },
        {
            "name": "Mr. Sandman",
            "artist": "The Chordettes",
            "url": "https://ik.imagekit.io/haoyu223/music/23899600/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/23899600/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/23899600/pic.jpg",
            "theme": "#85837D"
        },
        {
            "name": "Seasons (Futuristik & Whogaux Remix)",
            "artist": "Futuristik/Harley Bird/CADMIUM/Whogaux/Rival",
            "url": "https://ik.imagekit.io/haoyu223/music/557583842/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/557583842/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/557583842/pic.jpg",
            "theme": "#947E7F"
        },
        {
            "name": "Wait Another Day",
            "artist": "Mike Williams/Mesto",
            "url": "https://ik.imagekit.io/haoyu223/music/1404819549/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1404819549/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1404819549/pic.jpg",
            "theme": "#C5628B"
        },
        {
            "name": "Ice Tea",
            "artist": "Not The King.",
            "url": "https://ik.imagekit.io/haoyu223/music/448917124/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/448917124/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/448917124/pic.jpg",
            "theme": "#8F8163"
        },
        {
            "name": "Swamp Thing",
            "artist": "Pegboard Nerds",
            "url": "https://ik.imagekit.io/haoyu223/music/32717985/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/32717985/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/32717985/pic.jpg",
            "theme": "#7C876F"
        },
        {
            "name": "This Far (Rudelies Radio Remix)",
            "artist": "Raven & Kreyn/Nino Lucarelli/RudeLies",
            "url": "https://ik.imagekit.io/haoyu223/music/1450158244/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1450158244/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1450158244/pic.jpg",
            "theme": "#DE43AC"
        },
        {
            "name": "Crockett's Theme",
            "artist": "Jan Hammer",
            "url": "https://ik.imagekit.io/haoyu223/music/5052210/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/5052210/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/5052210/pic.jpg",
            "theme": "#957C8C"
        },
        {
            "name": "Trouble I'm In",
            "artist": "Twinbed",
            "url": "https://ik.imagekit.io/haoyu223/music/29758362/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/29758362/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/29758362/pic.jpg",
            "theme": "#87836F"
        },
        {
            "name": "Shackleton",
            "artist": "Adam Young",
            "url": "https://ik.imagekit.io/haoyu223/music/444267119/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/444267119/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/444267119/pic.jpg",
            "theme": "#6987A6"
        },
        {
            "name": "Fairy Fountain",
            "artist": "Mikel/GameChops",
            "url": "https://ik.imagekit.io/haoyu223/music/1484861101/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1484861101/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1484861101/pic.jpg",
            "theme": "#838388"
        },
        {
            "name": "We Were Set Up",
            "artist": "Tangerine Dream/Woody Jackson/The Alchemist/Oh No",
            "url": "https://ik.imagekit.io/haoyu223/music/27770739/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/27770739/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/27770739/pic.jpg",
            "theme": "#B0754C"
        },
        {
            "name": "Grand Theft Auto III",
            "artist": "1Nose beatZ",
            "url": "https://ik.imagekit.io/haoyu223/music/1305172482/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1305172482/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1305172482/pic.jpg",
            "theme": "#E44C47"
        },
        {
            "name": "Time to Pretend",
            "artist": "Lazer Boomerang",
            "url": "https://ik.imagekit.io/haoyu223/music/1377642003/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1377642003/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1377642003/pic.jpg",
            "theme": "#9E68F0"
        },
        {
            "name": "Memes",
            "artist": "NIVIRO",
            "url": "https://ik.imagekit.io/haoyu223/music/550786832/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/550786832/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/550786832/pic.jpg",
            "theme": "#838386"
        },
        {
            "name": "The Lion Sleeps Tonight",
            "artist": "The Tokens",
            "url": "https://ik.imagekit.io/haoyu223/music/534906173/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/534906173/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/534906173/pic.jpg",
            "theme": "#AC7900"
        },
        {
            "name": "YONA YONA DANCE",
            "artist": "和田アキ子",
            "url": "https://ik.imagekit.io/haoyu223/music/1874878825/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1874878825/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1874878825/pic.jpg",
            "theme": "#BC6F1B"
        },
        {
            "name": "Still Life",
            "artist": "Sitcom",
            "url": "https://ik.imagekit.io/haoyu223/music/1416744276/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1416744276/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1416744276/pic.jpg",
            "theme": "#7581BE"
        },
        {
            "name": "迈 阿 密 游 记",
            "artist": "虞海游Shadow/黑瘦的鱼头",
            "url": "https://ik.imagekit.io/haoyu223/music/1833084091/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1833084091/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1833084091/pic.jpg",
            "theme": "#9378B7"
        },
        {
            "name": "Two Feet-Go F**k Yourself Remake（Voison remix）",
            "artist": "Vo",
            "url": "https://ik.imagekit.io/haoyu223/music/1808599945/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1808599945/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1808599945/pic.jpg",
            "theme": "#8E8266"
        },
        {
            "name": "So Far Away",
            "artist": "Martin Garrix/David Guetta/Jamie Scott/Romy Dya",
            "url": "https://ik.imagekit.io/haoyu223/music/521416693/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/521416693/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/521416693/pic.jpg",
            "theme": "#718882"
        },
        {
            "name": "Three Rules of Discipline and the Eight Rules of Attention",
            "artist": "Pete Seeger/Arlo Guthrie",
            "url": "https://ik.imagekit.io/haoyu223/music/552175255/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/552175255/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/552175255/pic.jpg",
            "theme": "#B2744A"
        },
        {
            "name": "The Lonely Goatheard (Remastered)",
            "artist": "Rodgers & Hammerstein",
            "url": "https://ik.imagekit.io/haoyu223/music/3377289/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/3377289/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/3377289/pic.jpg",
            "theme": "#4C9164"
        },
        {
            "name": "Undead Funeral March",
            "artist": "Ugress",
            "url": "https://ik.imagekit.io/haoyu223/music/19606011/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/19606011/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/19606011/pic.jpg",
            "theme": "#BD659E"
        },
        {
            "name": "Let the Games Begin",
            "artist": "AJR",
            "url": "https://ik.imagekit.io/haoyu223/music/36102468/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/36102468/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/36102468/pic.jpg",
            "theme": "#82847C"
        },
        {
            "name": "Frolic (Theme from \"Curb Your Enthusiasm\" TV Show)",
            "artist": "Luciano Michelini",
            "url": "https://ik.imagekit.io/haoyu223/music/534863046/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/534863046/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/534863046/pic.jpg",
            "theme": "#8E8344"
        },
        {
            "name": "Come Back For You (Morgan Page Remix)",
            "artist": "Eiephante/Matluck",
            "url": "https://ik.imagekit.io/haoyu223/music/531040135/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/531040135/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/531040135/pic.jpg",
            "theme": "#818391"
        },
        {
            "name": "Burn the House Down",
            "artist": "AJR",
            "url": "https://ik.imagekit.io/haoyu223/music/545655045/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/545655045/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/545655045/pic.jpg",
            "theme": "#878191"
        },
        {
            "name": "Juntos",
            "artist": "TiN",
            "url": "https://ik.imagekit.io/haoyu223/music/1419156333/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1419156333/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1419156333/pic.jpg",
            "theme": "#73859C"
        },
        {
            "name": "Ticking",
            "artist": "TIN",
            "url": "https://ik.imagekit.io/haoyu223/music/410519534/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/410519534/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/410519534/pic.jpg",
            "theme": "#977F5F"
        },
        {
            "name": "Sunny",
            "artist": "Boney M.",
            "url": "https://ik.imagekit.io/haoyu223/music/26952317/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/26952317/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/26952317/pic.jpg",
            "theme": "#AD7568"
        },
        {
            "name": "Macarena",
            "artist": "Los del Rio",
            "url": "https://ik.imagekit.io/haoyu223/music/26947355/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/26947355/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/26947355/pic.jpg",
            "theme": "#838383"
        },
        {
            "name": "My Ordinary Life (Instrumental)",
            "artist": "The Living Tombstone",
            "url": "https://ik.imagekit.io/haoyu223/music/1828240212/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1828240212/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1828240212/pic.jpg",
            "theme": "#BB58E3"
        },
        {
            "name": "Y.M.C.A",
            "artist": "Village People",
            "url": "https://ik.imagekit.io/haoyu223/music/27203936/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/27203936/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/27203936/pic.jpg",
            "theme": "#867DB5"
        },
        {
            "name": "一笑懸命",
            "artist": "遊助",
            "url": "https://ik.imagekit.io/haoyu223/music/399249/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/399249/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/399249/pic.jpg",
            "theme": "#9C8000"
        },
        {
            "name": "【FREE】lucky",
            "artist": "Salder4cash",
            "url": "https://ik.imagekit.io/haoyu223/music/1392600538/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1392600538/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1392600538/pic.jpg",
            "theme": "#788499"
        },
        {
            "name": "Pacific Rim (feat. Tom Morello)",
            "artist": "Ramin Djawadi/Tom Morello",
            "url": "https://ik.imagekit.io/haoyu223/music/26625301/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/26625301/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/26625301/pic.jpg",
            "theme": "#7E867A"
        },
        {
            "name": "The Sun Also Rises",
            "artist": "久石譲",
            "url": "https://ik.imagekit.io/haoyu223/music/441722/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/441722/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/441722/pic.jpg",
            "theme": "#8C8176"
        },
        {
            "name": "Laxed",
            "artist": "The Harmony Group",
            "url": "https://ik.imagekit.io/haoyu223/music/1457914405/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1457914405/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1457914405/pic.jpg",
            "theme": "#838383"
        },
        {
            "name": "Shooting Stars (Instrumental)",
            "artist": "Bag Raiders",
            "url": "https://ik.imagekit.io/haoyu223/music/27219537/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/27219537/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/27219537/pic.jpg",
            "theme": "#838383"
        },
        {
            "name": "Stick Bug Song (Bee Swarm Simulator)",
            "artist": "RevoMemel",
            "url": "https://ik.imagekit.io/haoyu223/music/1473832343/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1473832343/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1473832343/pic.jpg",
            "theme": "#A17E00"
        },
        {
            "name": "Everyday Normal Guy 2",
            "artist": "Jon lajoie",
            "url": "https://ik.imagekit.io/haoyu223/music/1516895/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1516895/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1516895/pic.jpg",
            "theme": "#80847D"
        },
        {
            "name": "This Girl",
            "artist": "Kungs",
            "url": "https://ik.imagekit.io/haoyu223/music/425280625/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/425280625/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/425280625/pic.jpg",
            "theme": "#947D82"
        },
        {
            "name": "Funky Stars",
            "artist": "Quazar",
            "url": "https://ik.imagekit.io/haoyu223/music/428350808/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/428350808/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/428350808/pic.jpg",
            "theme": "#84809C"
        },
        {
            "name": "Always Remember Us This Way (Complete version originally performed by Lady Gaga)",
            "artist": "Various Artists",
            "url": "https://ik.imagekit.io/haoyu223/music/1369031121/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1369031121/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1369031121/pic.jpg",
            "theme": "#8B817F"
        },
        {
            "name": "Rain For You",
            "artist": "Windwan/Mestie/HertzRecords",
            "url": "https://ik.imagekit.io/haoyu223/music/1867754556/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1867754556/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1867754556/pic.jpg",
            "theme": "#6879FE"
        },
        {
            "name": "Dancin (Krono Remix)",
            "artist": "Aaron Smith/Luvli/Krono",
            "url": "https://ik.imagekit.io/haoyu223/music/439121233/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/439121233/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/439121233/pic.jpg",
            "theme": "#92824A"
        },
        {
            "name": "Mystery of Love",
            "artist": "Luke Pickman",
            "url": "https://ik.imagekit.io/haoyu223/music/1457681678/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1457681678/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1457681678/pic.jpg",
            "theme": "#858285"
        },
        {
            "name": "Libella Swing",
            "artist": "Parov Stelar",
            "url": "https://ik.imagekit.io/haoyu223/music/1401237426/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1401237426/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1401237426/pic.jpg",
            "theme": "#A77678"
        },
        {
            "name": "黄晓明-One World One Dream（李祥晖Bootleg）（李祥晖 Remix）",
            "artist": "李祥晖",
            "url": "https://ik.imagekit.io/haoyu223/music/1386372586/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1386372586/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1386372586/pic.jpg",
            "theme": "#A37A59"
        },
        {
            "name": "The Muffin Song (asdfmovie)",
            "artist": "The Gregory Brothers/TomSka",
            "url": "https://ik.imagekit.io/haoyu223/music/1296111482/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1296111482/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1296111482/pic.jpg",
            "theme": "#837DB8"
        },
        {
            "name": "BGM2",
            "artist": "コナミ矩形波倶楽部",
            "url": "https://ik.imagekit.io/haoyu223/music/28258086/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/28258086/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/28258086/pic.jpg",
            "theme": "#CF5F5E"
        },
        {
            "name": "American Patrol",
            "artist": "コナミ矩形波倶楽部",
            "url": "https://ik.imagekit.io/haoyu223/music/31719167/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/31719167/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/31719167/pic.jpg",
            "theme": "#868800"
        },
        {
            "name": "SpongeBob Closing Theme",
            "artist": "Various Artists",
            "url": "https://ik.imagekit.io/haoyu223/music/29822196/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/29822196/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/29822196/pic.jpg",
            "theme": "#83847A"
        },
        {
            "name": "Turn It Up",
            "artist": "Chamillionaire/Lil' Flip",
            "url": "https://ik.imagekit.io/haoyu223/music/26877048/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/26877048/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/26877048/pic.jpg",
            "theme": "#848286"
        },
        {
            "name": "Hey Mama",
            "artist": "Monk",
            "url": "https://ik.imagekit.io/haoyu223/music/1830799856/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1830799856/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1830799856/pic.jpg",
            "theme": "#838383"
        },
        {
            "name": "落日",
            "artist": "Nacyan",
            "url": "https://ik.imagekit.io/haoyu223/music/1441875530/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1441875530/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1441875530/pic.jpg",
            "theme": "#9D7A7B"
        },
        {
            "name": "Six Forty Seven",
            "artist": "instupendo",
            "url": "https://ik.imagekit.io/haoyu223/music/480426221/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/480426221/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/480426221/pic.jpg",
            "theme": "#80838D"
        },
        {
            "name": "The Other Side Of Paradise",
            "artist": "Glass Animals",
            "url": "https://ik.imagekit.io/haoyu223/music/427416520/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/427416520/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/427416520/pic.jpg",
            "theme": "#C66913"
        },
        {
            "name": "Enemy (Arcane League of Legends) (Epic Version)",
            "artist": "Krutikov Music",
            "url": "https://ik.imagekit.io/haoyu223/music/1895879668/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1895879668/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1895879668/pic.jpg",
            "theme": "#7C8495"
        },
        {
            "name": "BLUE SAPPHIRE",
            "artist": "ØMI",
            "url": "https://ik.imagekit.io/haoyu223/music/1357399415/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1357399415/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1357399415/pic.jpg",
            "theme": "#80857B"
        },
        {
            "name": "カメレオン",
            "artist": "Nyarons",
            "url": "https://ik.imagekit.io/haoyu223/music/1342511614/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1342511614/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1342511614/pic.jpg",
            "theme": "#81838B"
        },
        {
            "name": "Happy Song",
            "artist": "Boney M.",
            "url": "https://ik.imagekit.io/haoyu223/music/16776608/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/16776608/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/16776608/pic.jpg",
            "theme": "#D7594A"
        },
        {
            "name": "夏日漱石 (Summer Cozy Rock)",
            "artist": "橘子海 (Orange Ocean)",
            "url": "https://ik.imagekit.io/haoyu223/music/1359818052/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1359818052/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1359818052/pic.jpg",
            "theme": "#8B7DA8"
        },
        {
            "name": "Welcome to the Internet",
            "artist": "Bo Burnham",
            "url": "https://ik.imagekit.io/haoyu223/music/1851572012/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1851572012/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1851572012/pic.jpg",
            "theme": "#8B817B"
        },
        {
            "name": "夏浪",
            "artist": "塞壬唱片-MSR/横山克",
            "url": "https://ik.imagekit.io/haoyu223/music/1467848445/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1467848445/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1467848445/pic.jpg",
            "theme": "#7B8584"
        },
        {
            "name": "Next Level",
            "artist": "PLEEG",
            "url": "https://ik.imagekit.io/haoyu223/music/1419315093/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1419315093/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1419315093/pic.jpg",
            "theme": "#3088DE"
        },
        {
            "name": "享受这一刻宁静",
            "artist": "Slim Fey",
            "url": "https://ik.imagekit.io/haoyu223/music/1364586007/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1364586007/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1364586007/pic.jpg",
            "theme": "#688B7A"
        },
        {
            "name": "偏偏喜欢你",
            "artist": "霓虹花园",
            "url": "https://ik.imagekit.io/haoyu223/music/1880855946/music.mp3",
            "lrc": "https://ik.imagekit.io/haoyu223/music/1880855946/lrc.txt",
            "cover": "https://ik.imagekit.io/haoyu223/music/1880855946/pic.jpg",
            "theme": "#838382"
        }
    ]
});