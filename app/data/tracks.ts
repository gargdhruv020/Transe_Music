export interface Track {
  id: number;
  title: string;
  artist: string;
  film: string;
  youtubeId?: string;
  audioUrl?: string;
  startSeconds?: number;
  isSpatial: boolean;
  isGlobal?: boolean;
  isGoa?: boolean;
  isRemix?: boolean;
  isKTrance?: boolean;
  isIndoHouse?: boolean;
  isSufi?: boolean;
  isAfro?: boolean;
  isX?: boolean;
  isClub?: boolean;
  isHaryanvi?: boolean;
  isHustle?: boolean;
  hustleSeason?: string;
  hustleNum?: number;
}

const list1: any[] = [
  {
    "title": "Chaiyya Chaiyya",
    "artist": "Iconic Indian Psytrance Edit",
    "film": "Dil Se",
    "youtubeId": "K-pX4qwtAxA"
  },
  {
    "title": "Kajra Re",
    "artist": "Ethnic Psytrance Remix",
    "film": "Bunty Aur Babli",
    "youtubeId": "4dsFQFCvVGU"
  },
  {
    "title": "Beedi Jalaile",
    "artist": "Dark Psytrance Mix",
    "film": "Omkara",
    "youtubeId": "uUPBMV3DAck"
  },
  {
    "title": "Dhan Te Nan",
    "artist": "High-BPM Psytrance Edit",
    "film": "Kaminey",
    "youtubeId": "4QVu6Vo6Jhw"
  },
  {
    "title": "Choli Ke Peeche",
    "artist": "Progressive Psytrance Remix",
    "film": "Khalnayak",
    "youtubeId": "3OXiqmUhB70"
  },
  {
    "title": "Mar Jawaan",
    "artist": "Psytrance Mashup (DJ NYK Edit)",
    "film": "Fashion",
    "youtubeId": "JNZi3k2Tiy8"
  },
  {
    "title": "Bulleya (Ae Dil Hai Mushkil)",
    "artist": "Psytrance Edit",
    "film": "Ae Dil Hai Mushkil",
    "youtubeId": "hXh35CtnSyU"
  },
  {
    "title": "Raataan Lambiyan",
    "artist": "Progressive Psy Remix",
    "film": "Shershaah",
    "youtubeId": "-JVBDtaHQaA"
  },
  {
    "title": "Dil Sambhal Ja Zara",
    "artist": "Dark Psytrance Remix",
    "film": "Murder 2",
    "youtubeId": "fA_xoB27LH4"
  },
  {
    "title": "Ghar More Pardesiya",
    "artist": "Ethnic Indian Psytrance Edit",
    "film": "Kalank",
    "youtubeId": "b5WF7yZcc1w"
  },
  {
    "title": "Nagada Nagada",
    "artist": "Dhol Psytrance Mix",
    "film": "Jab We Met",
    "youtubeId": "b27sfD4zJ6Y"
  },
  {
    "title": "Dola Re Dola",
    "artist": "Classical Folk Psy Edit",
    "film": "Devdas",
    "youtubeId": "B4HbUt58eFU"
  },
  {
    "title": "Engine Ki Seeti",
    "artist": "Psytrance Remix",
    "film": "Khoobsurat",
    "youtubeId": "YWhbDQeWfNk"
  },
  {
    "title": "Piya Tu Ab To Aaja",
    "artist": "Retro Psytrance Flip",
    "film": "Caravan",
    "youtubeId": "hOroPhFi4do"
  },
  {
    "title": "Aali Re",
    "artist": "Folk Psytrance Mix",
    "film": "No One Killed Jessica",
    "youtubeId": "HRnbmQYAIp0"
  },
  {
    "title": "Chinta Ta Ta Chita Chita",
    "artist": "Psytrance Edit",
    "film": "Rowdy Rathore",
    "youtubeId": "JhJHom7_6UQ"
  },
  {
    "title": "Rang De Basanti",
    "artist": "High Energy Psy Remix",
    "film": "Rang De Basanti",
    "youtubeId": "Azhtn4ptHQI"
  },
  {
    "title": "Chogada",
    "artist": "Garba Psytrance Mix",
    "film": "Loveyatri",
    "youtubeId": "8vwKq2K7jyg"
  },
  {
    "title": "Balam Pichkari",
    "artist": "Psytrance / Festival Edit",
    "film": "Yeh Jawaani Hai Deewani",
    "youtubeId": "QJDZu5berXs"
  },
  {
    "title": "Lovely (Happy New Year)",
    "artist": "Progressive Psy Edit",
    "film": "Happy New Year",
    "youtubeId": "9hGQwtXzfY4"
  },
  {
    "title": "Kesariya",
    "artist": "Deep House Remix",
    "film": "Brahmāstra",
    "youtubeId": "ptOcA86r7E8"
  },
  {
    "title": "Kabira",
    "artist": "Organic House / Deep House Mix",
    "film": "Yeh Jawaani Hai Deewani",
    "youtubeId": "mXxbnXo29eM"
  },
  {
    "title": "Kun Faya Kun",
    "artist": "Melodic Techno Edit",
    "film": "Rockstar",
    "youtubeId": "wi-_9gpJxpQ"
  },
  {
    "title": "Aayat",
    "artist": "Melodic Techno / Deep Remix",
    "film": "Bajirao Mastani",
    "youtubeId": "vKDsAB1ccn0"
  },
  {
    "title": "Shayad",
    "artist": "Progressive Melodic House Edit",
    "film": "Love Aaj Kal",
    "youtubeId": "HI5eULhmGOw"
  },
  {
    "title": "Ranjha",
    "artist": "Organic Deep House Mix",
    "film": "Shershaah",
    "youtubeId": "hPHU3oXzDaw"
  },
  {
    "title": "Agar Tum Saath Ho",
    "artist": "Atmospheric Deep House Remix",
    "film": "Tamasha",
    "youtubeId": "PYgnCOpmpMU"
  },
  {
    "title": "Mast Magan",
    "artist": "Melodic Techno Mix",
    "film": "2 States",
    "youtubeId": "ZrhQCtQJ13s"
  },
  {
    "title": "Pani Da Rang",
    "artist": "Chill Psytrance / Organic House",
    "film": "Vicky Donor",
    "youtubeId": "zRzD3-a9_qc"
  },
  {
    "title": "Galliyan",
    "artist": "Deep House Remix",
    "film": "Ek Villain",
    "youtubeId": "CGDezb6Jgoc"
  },
  {
    "title": "Subha Hun Ki Sham Se",
    "artist": "Deep House Edit",
    "film": "Retro",
    "youtubeId": "8dfIIse1fmM"
  },
  {
    "title": "Dil Diyan Gallan",
    "artist": "Deep House / Chillstep Mix",
    "film": "Tiger Zinda Hai",
    "youtubeId": "IdPlBcRZjbI"
  },
  {
    "title": "Tera Ban Jaunga",
    "artist": "Melodic House Remix",
    "film": "Kabir Singh",
    "youtubeId": "D7DQ72P1qdM"
  },
  {
    "title": "Soch (Hardy Sandhu)",
    "artist": "Deep House Flip",
    "film": "Airlift",
    "youtubeId": "KU6PF32U6V0"
  },
  {
    "title": "Kalla Sohna Nai",
    "artist": "Deep House Edit",
    "film": "Single",
    "youtubeId": "TIHmXfJc0os"
  },
  {
    "title": "Manike",
    "artist": "Deep House Club Mix",
    "film": "Thank God",
    "youtubeId": "-44OSXNSGtM"
  },
  {
    "title": "Ban Ja Rani",
    "artist": "Deep House Edit",
    "film": "Tumhari Sulu",
    "youtubeId": "LT0N96j-pG8"
  },
  {
    "title": "Tere Naina",
    "artist": "Melodic House Edit",
    "film": "My Name Is Khan",
    "youtubeId": "lHC1xPUgP5Q"
  },
  {
    "title": "Sajdaa",
    "artist": "Melodic Techno Mix",
    "film": "My Name Is Khan",
    "youtubeId": "HrFh_1axc1g"
  },
  {
    "title": "Mitwa",
    "artist": "Progressive House Edit",
    "film": "Kabhi Alvida Naa Kehna",
    "youtubeId": "6LtpYX3G0wc"
  },
  {
    "title": "Besharam Rang",
    "artist": "Tech House Remix",
    "film": "Pathaan",
    "youtubeId": "qZ2c0QamOCg"
  },
  {
    "title": "Chaleya",
    "artist": "Slap House Edit",
    "film": "Jawan",
    "youtubeId": "2s4JJwveyQQ"
  },
  {
    "title": "Senorita (ZNMD)",
    "artist": "Tech House Edit",
    "film": "Zindagi Na Milegi Dobara",
    "youtubeId": "CAHgJlOsNhM"
  },
  {
    "title": "High Rated Gabru",
    "artist": "Slap House Mix",
    "film": "Nawabzaade",
    "youtubeId": "MwuG3YntNhI"
  },
  {
    "title": "Bom Diggy Diggy",
    "artist": "Tech House Edit",
    "film": "Sonu Ke Titu Ki Sweety",
    "youtubeId": "yntV3qwOr-c"
  },
  {
    "title": "Lamberghini",
    "artist": "Slap House Remix",
    "film": "Single",
    "youtubeId": "5X7WWVTrBvM"
  },
  {
    "title": "Illegal Weapon 2.0",
    "artist": "Tech House / Slap Mix",
    "film": "Street Dancer 3D",
    "youtubeId": "1mwjRrS_9Os"
  },
  {
    "title": "Suit Suit",
    "artist": "Club Tech House Mix",
    "film": "Hindi Medium",
    "youtubeId": "Wo-aefcEfrA"
  },
  {
    "title": "Dus Bahane 2.0",
    "artist": "Slap House Remix",
    "film": "Baaghi 3",
    "youtubeId": "ebrZhf5BZGs"
  },
  {
    "title": "Crazy Kiya Re",
    "artist": "Tech House Edit",
    "film": "Dhoom 2",
    "youtubeId": "C0toSl4FAKM"
  },
  {
    "title": "Proper Patola",
    "artist": "Tech House Edit",
    "film": "Namaste England",
    "youtubeId": "s_yDx4yb3zE"
  },
  {
    "title": "Slow Motion (Bharat)",
    "artist": "Tech House Mix",
    "film": "Bharat",
    "youtubeId": "mClOxV5jGpY"
  },
  {
    "title": "Muqabla (Street Dancer 3D)",
    "artist": "Tech House Edit",
    "film": "Street Dancer 3D",
    "youtubeId": "9NfUb-e3DP8"
  },
  {
    "title": "Dance Ka Bhoot",
    "artist": "Slap House Mix",
    "film": "Brahmāstra",
    "youtubeId": "j9FWubgR__g"
  },
  {
    "title": "Nashe Si Chadh Gayi",
    "artist": "Tech House Remix",
    "film": "Befikre",
    "youtubeId": "u4FbmqEW_AU"
  },
  {
    "title": "Nadiyon Paar",
    "artist": "Slap House / Tech Remix",
    "film": "Roohi",
    "youtubeId": "K5wQDhYiUIs"
  },
  {
    "title": "O Bedardeya",
    "artist": "Deep Slap House Mix",
    "film": "Tu Jhoothi Main Makkaar",
    "youtubeId": "IBxJUr_zFuI"
  },
  {
    "title": "Gimme More x Desi Beat",
    "artist": "Tech House Flip",
    "film": "Bodyguard",
    "youtubeId": "cARCtDPFt3g"
  },
  {
    "title": "Daddy Whip",
    "artist": "Desi Bass House Edit",
    "film": "Single",
    "youtubeId": "ZWNCR9cfkPw"
  },
  {
    "title": "Kahani Suno",
    "artist": "Tech House Remix",
    "film": "Kaifi Khalil",
    "youtubeId": "gaPSrCXRPsw"
  },
  {
    "title": "Jawan Title Track",
    "artist": "Dark EDM / Club Mix",
    "film": "Jawan",
    "youtubeId": "sed86UEe_x0"
  },
  {
    "title": "Nacho Nacho (RRR)",
    "artist": "High Energy EDM / Hardstyle Mix",
    "film": "RRR",
    "youtubeId": "Ohocc4eD05Y"
  },
  {
    "title": "Jhoome Jo Pathaan",
    "artist": "Electro House Mix",
    "film": "Pathaan",
    "youtubeId": "nKUJ5WgpWmM"
  },
  {
    "title": "Swag Se Swagat",
    "artist": "Electro House Remix",
    "film": "Tiger Zinda Hai",
    "youtubeId": "_cPRjoX3kvM"
  },
  {
    "title": "Garmi",
    "artist": "Bass Boosted Club Mix",
    "film": "Street Dancer 3D",
    "youtubeId": "9bb74SbJJRg"
  },
  {
    "title": "Badtameez Dil",
    "artist": "Big Room EDM Remix",
    "film": "Yeh Jawaani Hai Deewani",
    "youtubeId": "WRz22ibD3qI"
  },
  {
    "title": "Dance Pe Chance",
    "artist": "Electro House Remix",
    "film": "Rab Ne Bana Di Jodi",
    "youtubeId": "AvO_umNLFhE"
  },
  {
    "title": "Subah Subah",
    "artist": "Commercial EDM Remix",
    "film": "Sonu Ke Titu Ki Sweety",
    "youtubeId": "PBxtTvxBp80"
  },
  {
    "title": "Dil Chori",
    "artist": "Melbourne Bounce / EDM Mix",
    "film": "Sonu Ke Titu Ki Sweety",
    "youtubeId": "S65zMe3NScQ"
  },
  {
    "title": "Cheez Badi (Machine)",
    "artist": "Electro House Mix",
    "film": "Machine",
    "youtubeId": "52o8srvFLvc"
  },
  {
    "title": "Tamma Tamma Again",
    "artist": "Electro Bounce Mix",
    "film": "Badrinath Ki Dulhania",
    "youtubeId": "Db7MAK5hVmU"
  },
  {
    "title": "Kar Gayi Chull",
    "artist": "Bass House Remix",
    "film": "Kapoor & Sons",
    "youtubeId": "NTHz9ephYTw"
  },
  {
    "title": "Let's Nacho",
    "artist": "EDM / Bounce Remix",
    "film": "Kapoor & Sons",
    "youtubeId": "M_SUHP_8CI8"
  },
  {
    "title": "High Heels Te Nachche",
    "artist": "Commercial Club Remix",
    "film": "Ki & Ka",
    "youtubeId": "mc4b_euqg6A"
  },
  {
    "title": "Rock Tha Party",
    "artist": "Hard Dance / EDM Mix",
    "film": "Rocky Handsome",
    "youtubeId": "jjGBkSjITF4"
  },
  {
    "title": "Saturday Saturday",
    "artist": "Bounce House Remix",
    "film": "Humpty Sharma Ki Dulhania",
    "youtubeId": "rW9_-dVCmrM"
  },
  {
    "title": "Abhi Toh Party Shuru Hui Hai",
    "artist": "High Energy Electro",
    "film": "Khoobsurat",
    "youtubeId": "E-YNx1e2abg"
  },
  {
    "title": "Party All Night",
    "artist": "Electro House Edit",
    "film": "Boss",
    "youtubeId": "Ak3NZekDOGc"
  },
  {
    "title": "Lungi Dance",
    "artist": "Festival EDM Mix",
    "film": "Chennai Express",
    "youtubeId": "nSUVNlC1zGs"
  },
  {
    "title": "1234 Get On The Dance Floor",
    "artist": "Desi EDM Flip",
    "film": "Chennai Express",
    "youtubeId": "nSPBJNqayF0"
  },
  {
    "title": "Mauja Hi Mauja",
    "artist": "Festival EDM Remix",
    "film": "Jab We Met",
    "youtubeId": "E-t3nejFRDo"
  },
  {
    "title": "Subhah Hone Na De",
    "artist": "Trance / House Edit",
    "film": "Desi Boyz",
    "youtubeId": "3SLXNc41-Uc"
  },
  {
    "title": "Desi Boyz (Title Track)",
    "artist": "Electro Remix",
    "film": "Desi Boyz",
    "youtubeId": "nr3ul-3k_9E"
  },
  {
    "title": "Chammak Challo",
    "artist": "Global EDM Edit",
    "film": "Ra.One",
    "youtubeId": "oAVhUAaVCVQ"
  },
  {
    "title": "Criminal (Ra.One)",
    "artist": "Slap House / Electro",
    "film": "Ra.One",
    "youtubeId": "VIV3nS7KRok"
  },
  {
    "title": "Dope Shope",
    "artist": "Bass House Remix",
    "film": "Honey Singh",
    "youtubeId": "rT0lgxmkPQ4"
  },
  {
    "title": "Angreji Beat",
    "artist": "Tech House Mix",
    "film": "Honey Singh",
    "youtubeId": "0x1BoFyJK0E"
  },
  {
    "title": "Sadi Gali",
    "artist": "Electro Folk Remix",
    "film": "Tanu Weds Manu",
    "youtubeId": "yuYiVWe0J-8"
  },
  {
    "title": "Character Dheela",
    "artist": "Progressive Electro Mix",
    "film": "Ready",
    "youtubeId": "p_0zsIyYs08"
  },
  {
    "title": "Dhinka Chika",
    "artist": "Commercial Bounce Remix",
    "film": "Ready",
    "youtubeId": "0l_sWiV5y7U"
  },
  {
    "title": "Zindagi Do Pal Ki",
    "artist": "Ambient Trance Remix",
    "film": "Kites",
    "youtubeId": "4DbVdym2M90"
  },
  {
    "title": "Mahi Ve (Kal Ho Naa Ho)",
    "artist": "Uplifting Trance Remix",
    "film": "Kal Ho Naa Ho",
    "youtubeId": "ikRuqEMhBqY"
  },
  {
    "title": "It's the Time to Disco",
    "artist": "Retro Electro House Mix",
    "film": "Kal Ho Naa Ho",
    "youtubeId": "IKaRLcOVj7I"
  },
  {
    "title": "Dhoom Machale",
    "artist": "Hardstyle / Big Room EDM Edit",
    "film": "Dhoom",
    "youtubeId": "wckDP1_HuGw"
  },
  {
    "title": "Aankh Marey",
    "artist": "Club Bounce Remix",
    "film": "Simmba",
    "youtubeId": "Et3PQvkcEtA"
  },
  {
    "title": "Mere Gully Mein",
    "artist": "Bass House Remix",
    "film": "Gully Boy",
    "youtubeId": "pGmbUdf6lEM"
  },
  {
    "title": "Apna Time Aayega",
    "artist": "Trap / Dubstep Remix",
    "film": "Gully Boy",
    "youtubeId": "EDQqPeezINs"
  },
  {
    "title": "Laung Laachi",
    "artist": "Tropical EDM Mix",
    "film": "Laung Laachi",
    "youtubeId": "z2w3ggdyGA8"
  },
  {
    "title": "Makhna (Drive)",
    "artist": "Tropical House Remix",
    "film": "Drive",
    "youtubeId": "VWehckbG_i0"
  },
  {
    "title": "Tera Yaar Hoon Main",
    "artist": "Progressive House Edit",
    "film": "Sonu Ke Titu Ki Sweety",
    "youtubeId": "1CESVshqWxA"
  }
];

const list2: any[] = [
  {
    "title": "Jimmy Jimmy (Trance)",
    "artist": "Sameer Sen, Abhijit, Paroma, etc.",
    "film": "Disco Dancer Remix",
    "youtubeId": "fRSLPx0HSvw"
  },
  {
    "title": "PYAAR KA PUNCHNAMA - Remix",
    "artist": "Mika Singh, Luv Ranjan, Akasa",
    "film": "Pyaar Ka Punchnama",
    "youtubeId": "zN6YlySa_44"
  },
  {
    "title": "Timmy Reworks",
    "artist": "Timmy Reworks, Pritam",
    "film": "Pritam Edit",
    "youtubeId": "LemcOS6EGBQ"
  },
  {
    "title": "Bhool Bhulaiyaa",
    "artist": "Timmy Reworks, Pritam",
    "film": "Bhool Bhulaiyaa",
    "youtubeId": "mll82yN_XZA"
  },
  {
    "title": "Ek Do Teen - Psy Trance",
    "artist": "Meet Bros, Neha Kakkar, Dhvani Bhanushali",
    "film": "Baaghi 2",
    "youtubeId": "JhaVdknWerA"
  },
  {
    "title": "Dum Karo Dum (Psytrance)",
    "artist": "Meet Bros, Dev Negi",
    "film": "Dum Maaro Dum",
    "youtubeId": "NDmrjwJXBlU"
  },
  {
    "title": "Aao Huzur - Psytrance",
    "artist": "Meet Bros, Neha Kakkar, Monali Thakur",
    "film": "Psy Remix",
    "youtubeId": "DxH123syr4o"
  },
  {
    "title": "Aap Jaisa Koi (Psytrance)",
    "artist": "Arijit Singh, Yash Narvekar, Dhvani Bhanushali",
    "film": "An Action Hero",
    "youtubeId": "Ovu5FepCzcc"
  },
  {
    "title": "Ang Laga De - Melodic Techno Remix",
    "artist": "Deepanshu, Melodic",
    "film": "Goliyon Ki Raasleela",
    "youtubeId": "VS2WMYuDk1Y"
  },
  {
    "title": "Yeh Sham Mastani - Bollywood Trance",
    "artist": "Deepanshu, Timmy Reworks",
    "film": "Retro Remix",
    "youtubeId": "LemcOS6EGBQ"
  },
  {
    "title": "Naino Mein Sapna - Tech House Remix",
    "artist": "Deepanshu, Timmy Reworks, Pritam",
    "film": "Himmatwala",
    "youtubeId": "ME6qRuoa9cg"
  },
  {
    "title": "Laila O Laila Remix",
    "artist": "Badshah, Pawandeep Rajan, Deepanshu",
    "film": "Raees",
    "youtubeId": "6Mc38m3xlac"
  },
  {
    "title": "Aali Re",
    "artist": "Pritam",
    "film": "No One Killed Jessica",
    "youtubeId": "HRnbmQYAIp0"
  },
  {
    "title": "Naa Ja - Psy Trance",
    "artist": "Pawandeep Rajan, Deepanshu",
    "film": "Sooryavanshi",
    "youtubeId": "riStn36xCQc"
  },
  {
    "title": "Jawani Jan-E-Man - Tech House Trance",
    "artist": "DJ Rink, DJ Lemon",
    "film": "Namak Halaal",
    "youtubeId": "nFbLjsQbdlo"
  },
  {
    "title": "Bachna Ae Haseeno - Trance",
    "artist": "Kishore Kumar, R.D. Burman",
    "film": "Bachna Ae Haseeno",
    "youtubeId": "E8X2Z_xFt4M"
  },
  {
    "title": "Aaj Tera Jawan - Tech House Remix",
    "artist": "DJ Rink, Amit Kumar",
    "film": "Kasme Vaade",
    "youtubeId": "BgX2YIWcCsQ"
  },
  {
    "title": "Radha Nachegi - Tech House Mix",
    "artist": "DJ Rink, Vishal & Shekhar",
    "film": "Tevar",
    "youtubeId": "K9UUbq0SZcw"
  },
  {
    "title": "Suno Suno Kaho Kaho (Trance Edit)",
    "artist": "DJ Rink, R.D. Burman",
    "film": "Classic",
    "youtubeId": "FJzLg6W4QRo"
  },
  {
    "title": "Main Hoon Don (Tech House Remix)",
    "artist": "DJ Rink, Kishore Kumar",
    "film": "Don",
    "youtubeId": "8FL2FLv5xC0"
  },
  {
    "title": "Chura Liya Hai Tumne Jo Dil (Tech House)",
    "artist": "Asha Bhosle, Mohammad Rafi, DJ Rink",
    "film": "Yaadon Ki Baaraat",
    "youtubeId": "xwJpIN_XF0A"
  },
  {
    "title": "Roop Tera Mastana (Trance Remix)",
    "artist": "DJ Rink, Kishore Kumar",
    "film": "Aradhana",
    "youtubeId": "d2wjhJstSP4"
  },
  {
    "title": "Koi Mil Gaya (Tech House Mix)",
    "artist": "Kishore Kumar, Asha Bhosle",
    "film": "Kuch Kuch Hota Hai",
    "youtubeId": "7qydPABqOvA"
  },
  {
    "title": "Deewane Hum Nahi (Remix)",
    "artist": "Aditya Yadav, DJ Rink, Deepanshu",
    "film": "Deewane",
    "youtubeId": "0A5MVZgga5U"
  },
  {
    "title": "Pehla Pyaar - Deep House Mix",
    "artist": "Armaan Malik, Vishal Mishra, Amaal Mallik",
    "film": "Kabir Singh",
    "youtubeId": "AJY70JDIZIk"
  },
  {
    "title": "Aaja Aaja - Tech Remix",
    "artist": "Asha Bhosle, R.D. Burman",
    "film": "Teesri Manzil",
    "youtubeId": "8fXmvexIPMQ"
  },
  {
    "title": "Humne Dekhi Hai - Deep House Remix",
    "artist": "Lata Mangeshkar, R.D. Burman",
    "film": "Khamoshi",
    "youtubeId": "doPtBhDTpj0"
  },
  {
    "title": "Shona Shona",
    "artist": "Tony Kakkar",
    "film": "Single",
    "youtubeId": "N9lqbhVVTck"
  },
  {
    "title": "Dil Tera - Slap House Remix",
    "artist": "DJ Rink",
    "film": "Slap House",
    "youtubeId": "z7uBkxKi2D8"
  },
  {
    "title": "Lea",
    "artist": "DJ Rink",
    "film": "DJ Rink",
    "youtubeId": "85Gy_cde77k"
  },
  {
    "title": "Deewana",
    "artist": "Pawandeep Rajan, Deepanshu",
    "film": "Single",
    "youtubeId": "SYzV_sJST1I"
  },
  {
    "title": "Kazi Rnk",
    "artist": "Kishore Kumar",
    "film": "Kazi Rnk",
    "youtubeId": "l3Q_zHd3kCA"
  },
  {
    "title": "Pauli",
    "artist": "Yo Yo Honey Singh",
    "film": "Honey Singh",
    "youtubeId": "q3EsYvIapPQ"
  },
  {
    "title": "Priyatam",
    "artist": "Pawandeep Rajan",
    "film": "Pawandeep",
    "youtubeId": "7mR31IcdQwU"
  },
  {
    "title": "Dil Bagi",
    "artist": "Pawandeep Rajan",
    "film": "Pawandeep",
    "youtubeId": "x8HMrGNAKAY"
  },
  {
    "title": "Humse Pyar - Psy Trance",
    "artist": "Pritam",
    "film": "Pritam",
    "youtubeId": "hM9QDpLHhdw"
  },
  {
    "title": "Kabhie Kabhie Aditi - Tech House Remix",
    "artist": "A.R. Rahman, Blaaze, Rashid Ali",
    "film": "Jaane Tu... Ya Jaane Na",
    "youtubeId": "dbdtBQ16CXc"
  },
  {
    "title": "Parda Hai Parda - Trance Mix",
    "artist": "Mohammed Rafi, Asha Bhosle",
    "film": "Amar Akbar Anthony",
    "youtubeId": "WCBkUNedgrk"
  },
  {
    "title": "Chot Dil Pe Lagi - Slap Mix",
    "artist": "Kumar Sanu, Alka Yagnik, DJ Rink",
    "film": "Dil Ka Rishta",
    "youtubeId": "zCamH8ur5hw"
  },
  {
    "title": "Dil To Pagal Hai - Club Mix",
    "artist": "DJ Rink, Uttam Singh",
    "film": "Dil To Pagal Hai",
    "youtubeId": "zIdexaFwsck"
  },
  {
    "title": "Tum - Slap Flip",
    "artist": "Pritam",
    "film": "Ludo",
    "youtubeId": "iKCGyy04ato"
  },
  {
    "title": "Roop Tera Mastana - Slap Mix",
    "artist": "Kishore Kumar, R.D. Burman",
    "film": "Aradhana",
    "youtubeId": "dyEdcOhxJNQ"
  },
  {
    "title": "Sanam Re - Psy Trance Mix",
    "artist": "Mithoon, Arijit Singh",
    "film": "Sanam Re",
    "youtubeId": "yCldJqnoNcw"
  },
  {
    "title": "Zara Zara - Psytrance Mix",
    "artist": "Bombay Jayashri, Harris Jayaraj",
    "film": "Rehnaa Hai Terre Dil Mein",
    "youtubeId": "buI_0KiInJ8"
  },
  {
    "title": "Shona Shona - Remix",
    "artist": "Tony Kakkar, Neha Kakkar",
    "film": "Single",
    "youtubeId": "N9lqbhVVTck"
  },
  {
    "title": "Piya Tu Ab To Aaja (Trance Remix)",
    "artist": "Asha Bhosle, R.D. Burman",
    "film": "Caravan",
    "youtubeId": "hOroPhFi4do"
  },
  {
    "title": "Aaj Tera Jawan - Slap House Remix",
    "artist": "DJ Rink, Amit Kumar",
    "film": "Kasme Vaade",
    "youtubeId": "NlsVaeP6CEA"
  },
  {
    "title": "Yeh Jawaani Hai Deewani - Off-The-Wall Edit",
    "artist": "Kishore Kumar, R.D. Burman",
    "film": "Yeh Jawaani Hai Deewani",
    "youtubeId": "jHNNMj5bNQw"
  },
  {
    "title": "Humma Humma - Tech House Mix",
    "artist": "A.R. Rahman, Badshah",
    "film": "OK Jaanu",
    "youtubeId": "H8HEFjx552I"
  },
  {
    "title": "Dil Cheez Kya Hai - Deep House Remix",
    "artist": "Asha Bhosle, Khayyam",
    "film": "Umrao Jaan",
    "youtubeId": "eFcs3p1moMA"
  },
  {
    "title": "Dilbar - Melodic Psytrance Mix",
    "artist": "Tanishk Bagchi, Neha Kakkar",
    "film": "Satyameva Jayate",
    "youtubeId": "jTZnWupUS50"
  },
  {
    "title": "Chura Liya Hai - Trance Edit",
    "artist": "Asha Bhosle, R.D. Burman",
    "film": "Yaadon Ki Baaraat",
    "youtubeId": "gQCpSKO8sL0"
  },
  {
    "title": "Pyar Ki Kasam - Tech House Mix",
    "artist": "R.D. Burman",
    "film": "Retro",
    "youtubeId": "Im8ZdmObSzo"
  },
  {
    "title": "Dum Karo Dum - Psytrance Mix",
    "artist": "Asha Bhosle, R.D. Burman",
    "film": "Hare Rama Hare Krishna",
    "youtubeId": "NDmrjwJXBlU"
  },
  {
    "title": "Tujhe Dekha Toh - Psytrance",
    "artist": "Jatin-Lalit, Kumar Sanu",
    "film": "Dilwale Dulhania Le Jayenge",
    "youtubeId": "YGaDzrsgFn4"
  },
  {
    "title": "Radha Nachegi - Trance Mix",
    "artist": "Vishal & Shekhar",
    "film": "Tevar",
    "youtubeId": "I4pGSV68Td0"
  },
  {
    "title": "Aaja Aaja - Trance Mix",
    "artist": "Asha Bhosle, R.D. Burman",
    "film": "Teesri Manzil",
    "youtubeId": "_Q2UOPqYEK8"
  },
  {
    "title": "Koi Mil Gaya - EDM Edit",
    "artist": "Kishore Kumar, Asha Bhosle",
    "film": "Kuch Kuch Hota Hai",
    "youtubeId": "Q1gvYNPswII"
  },
  {
    "title": "Aaj Tone - Trance Edit",
    "artist": "DJ Rink, Kishore Kumar",
    "film": "Classic",
    "youtubeId": "RL_f-GU_SaU"
  },
  {
    "title": "Dil Hai Ke Manta Nahin - Deep House",
    "artist": "Kumar Sanu, Anuradha Paudwal",
    "film": "Dil Hai Ke Manta Nahin",
    "youtubeId": "C9efe0rjDlE"
  },
  {
    "title": "Choti Si Asha - Electro Trance Remix",
    "artist": "A.R. Rahman, Minmini",
    "film": "Roja",
    "youtubeId": "esrRdJ9JTFE"
  },
  {
    "title": "Until",
    "artist": "DJ Rink, Pawandeep Rajan",
    "film": "DJ Rink",
    "youtubeId": "ON0i3dPKfJk"
  }
];

const list3: any[] = [
  {
    "title": "Mahishasura Mardini – Droplex Remix",
    "artist": "Ethnic Psytrance",
    "film": "Devi Stotram",
    "youtubeId": "Qz4LC9Pmo7Y"
  },
  {
    "title": "Silsila Yeh Chahat Ka",
    "artist": "Progressive Psytrance Edit",
    "film": "Devdas",
    "youtubeId": "NQDlHbS5ya8"
  },
  {
    "title": "Bolo Har Har Har (Shiva)",
    "artist": "High-BPM Psy Edit",
    "film": "Shivaay",
    "youtubeId": "nMjYG4uayM4"
  },
  {
    "title": "Hai Rama Ye Kya Hua",
    "artist": "Progressive Psy Remix",
    "film": "Rangeela",
    "youtubeId": "byAxJ9N_1dA"
  },
  {
    "title": "Tip Tip Barsa Phani",
    "artist": "Dark Psytrance Flip",
    "film": "Mohra",
    "youtubeId": "yMUA3wqd1qA"
  },
  {
    "title": "Piya (DJ NYK)",
    "artist": "Ethnic Progressive Psy",
    "film": "DJ NYK",
    "youtubeId": "aiIUwVKd3Yw"
  },
  {
    "title": "Shiva Tandava Stotram",
    "artist": "Festival Psytrance Remix",
    "film": "Shiva Stotram",
    "youtubeId": "cxzUFGftYeo"
  },
  {
    "title": "Deva Deva (Brahmastra)",
    "artist": "Progressive Psy Edit",
    "film": "Brahmāstra",
    "youtubeId": "6l8RnAIaVpo"
  },
  {
    "title": "Manali Trance",
    "artist": "Goa Psytrance Edit",
    "film": "The Shaukeens",
    "youtubeId": "wtF0ZuMCw4U"
  },
  {
    "title": "San Sanana",
    "artist": "Psytrance Remix",
    "film": "Asoka",
    "youtubeId": "_GGin5lPMbo"
  },
  {
    "title": "Ganesha Mantra",
    "artist": "Full-On Psytrance Edit",
    "film": "Devotional",
    "youtubeId": "8mn17GZXjQ4"
  },
  {
    "title": "Gully Boy Mashup",
    "artist": "Psytrance Edit",
    "film": "Gully Boy",
    "youtubeId": "K3atMxOw0aE"
  },
  {
    "title": "Galliyan (Ek Villain)",
    "artist": "Psytrance Flip",
    "film": "Ek Villain",
    "youtubeId": "O9CxpVHwNlc"
  },
  {
    "title": "Ghoomar",
    "artist": "Rajasthani Folk Psytrance Mix",
    "film": "Padmaavat",
    "youtubeId": "wHfblAn_0iM"
  },
  {
    "title": "Aayat (Bajirao Mastani)",
    "artist": "Melodic Psy Edit",
    "film": "Bajirao Mastani",
    "youtubeId": "vKDsAB1ccn0"
  },
  {
    "title": "Sun Saathiya",
    "artist": "Progressive Psytrance Edit",
    "film": "ABCD 2",
    "youtubeId": "FrgAmPnMwRA"
  },
  {
    "title": "Dard-E-Disco",
    "artist": "Dark Psytrance Flip",
    "film": "Om Shanti Om",
    "youtubeId": "Jnymuo4f-1A"
  },
  {
    "title": "Kamli (Dhoom 3)",
    "artist": "High-Energy Psy Remix",
    "film": "Dhoom 3",
    "youtubeId": "KuT0l96RXBA"
  },
  {
    "title": "Jhumka Gira Re",
    "artist": "Retro Psytrance Edit",
    "film": "Classic",
    "youtubeId": "04-qv2QoEJU"
  },
  {
    "title": "Malhari",
    "artist": "High-BPM Dhol Psytrance Mix",
    "film": "Bajirao Mastani",
    "youtubeId": "CQBPNOX80bI"
  },
  {
    "title": "Dil To Pagal Hai",
    "artist": "Progressive Psy Edit",
    "film": "Dil To Pagal Hai",
    "youtubeId": "J0ZfvjK__ko"
  },
  {
    "title": "Saiyaan (Kailash Kher)",
    "artist": "Deep Progressive Psy",
    "film": "Kailash Kher",
    "youtubeId": "TuUVVKVdZm4"
  },
  {
    "title": "Mitwa (Kabhi Alvida Naa Kehna)",
    "artist": "Melodic Psy Remix",
    "film": "Kabhi Alvida Naa Kehna",
    "youtubeId": "6LtpYX3G0wc"
  },
  {
    "title": "Ghanan Ghanan",
    "artist": "Indian Ethnic Psytrance Mix",
    "film": "Lagaan",
    "youtubeId": "bypl4JefIaY"
  },
  {
    "title": "Shubharambh (Kai Po Che)",
    "artist": "Festive Psy Edit",
    "film": "Kai Po Che",
    "youtubeId": "22MO_iJIQoM"
  },
  {
    "title": "Kun Faya Kun",
    "artist": "Sufi Progressive Psy Remix",
    "film": "Rockstar",
    "youtubeId": "dNpHJUTrqQU"
  },
  {
    "title": "Tere Bina (Guru)",
    "artist": "Organic Progressive Psy Edit",
    "film": "Guru",
    "youtubeId": "ny8lXZg9b74"
  },
  {
    "title": "Vande Mataram (A.R. Rahman)",
    "artist": "High-Voltage Psy Remix",
    "film": "A.R. Rahman",
    "youtubeId": "sO_rn41gJdU"
  },
  {
    "title": "Maha Mrityunjaya Mantra",
    "artist": "Psytrance Edit",
    "film": "Devotional",
    "youtubeId": "5ab5E6TdW5U"
  },
  {
    "title": "Namo Namo (Kedarnath)",
    "artist": "Progressive Psytrance Flip",
    "film": "Kedarnath",
    "youtubeId": "ednU5RyMc3Y"
  },
  {
    "title": "Jai Jai Shivshankar",
    "artist": "Festival Psytrance Remix",
    "film": "War",
    "youtubeId": "oGneAab3e88"
  },
  {
    "title": "Aankh Marey",
    "artist": "Slap-Psytrance Mix",
    "film": "Simmba",
    "youtubeId": "Ay-kHJZzmsw"
  },
  {
    "title": "Aisa Jadoo Dala Re",
    "artist": "Retro Psytrance Edit",
    "film": "Khakee",
    "youtubeId": "ToL9ecPfP_Y"
  },
  {
    "title": "Kukdoo Koo (Barfi!)",
    "artist": "Bounce Psy Remix",
    "film": "Barfi!",
    "youtubeId": "av5YCk2U5Ac"
  },
  {
    "title": "Nadiyon Paar",
    "artist": "Dark Progressive Psy Edit",
    "film": "Roohi",
    "youtubeId": "PKno7lqfHsU"
  },
  {
    "title": "Chhalia (Kurbaan)",
    "artist": "Psytrance Edit",
    "film": "Kurbaan",
    "youtubeId": "b0PfRRvQPOg"
  },
  {
    "title": "Duniyaa (Luka Chuppi)",
    "artist": "Melodic Psy Remix",
    "film": "Luka Chuppi",
    "youtubeId": "vzAr40-v3u0"
  },
  {
    "title": "Mast Kalandar",
    "artist": "Tribal Sufi Psytrance Mix",
    "film": "Heyy Babyy",
    "youtubeId": "AwWwjEHHydQ"
  },
  {
    "title": "Pasoori",
    "artist": "Indian/Pakistani Psytrance Bootleg",
    "film": "Coke Studio",
    "youtubeId": "HzMfmeKITaw"
  },
  {
    "title": "Param Sundari",
    "artist": "Folk Psytrance Flip",
    "film": "Mimi",
    "youtubeId": "w4ClQO0FFQg"
  },
  {
    "title": "Pinga (Bajirao Mastani)",
    "artist": "Classical Psytrance Remix",
    "film": "Bajirao Mastani",
    "youtubeId": "KMuOUIfFOPw"
  },
  {
    "title": "Breathless (Shankar Mahadevan)",
    "artist": "High-BPM Psy Remix",
    "film": "Shankar Mahadevan",
    "youtubeId": "oRnUIwQiP4w"
  },
  {
    "title": "Jaan Nisaar",
    "artist": "Atmospheric Progressive Psy Edit",
    "film": "Kedarnath",
    "youtubeId": "RF7srXtwub0"
  },
  {
    "title": "Challa (Jab Tak Hai Jaan)",
    "artist": "Punjabi Folk Psy Edit",
    "film": "Jab Tak Hai Jaan",
    "youtubeId": "b_soLl__eHI"
  },
  {
    "title": "O Saki Saki",
    "artist": "High-Energy Psytrance Edit",
    "film": "Batla House",
    "youtubeId": "IUvPVi-D7ho"
  },
  {
    "title": "Dil Cheez Tujhe Dedi",
    "artist": "Club Psytrance Remix",
    "film": "Airlift",
    "youtubeId": "XKnGKKbK_mo"
  },
  {
    "title": "Tattad Tattad",
    "artist": "Gujarati Folk Psy Edit",
    "film": "Goliyon Ki Raasleela",
    "youtubeId": "sIooFGRBZJY"
  },
  {
    "title": "Tum Hi Ho",
    "artist": "Deep Progressive Psytrance Remix",
    "film": "Aashiqui 2",
    "youtubeId": "WjPueYPwsO8"
  },
  {
    "title": "Ghar Kab Aayoge (Border)",
    "artist": "Emotional Progressive Psy Edit",
    "film": "Border",
    "youtubeId": "oodOj8jx8ds"
  },
  {
    "title": "Main Tera Boyfriend",
    "artist": "Drop-Heavy Psytrance Flip",
    "film": "Raabta",
    "youtubeId": "7uXu91IB3sA"
  },
  {
    "title": "Piya Ghar Aaya (Remix) Live",
    "artist": "Nusrat Fateh Ali Khan & Asad",
    "film": "Nusrat Fateh Ali Khan",
    "youtubeId": "g4xVDns_PO4",
    "startSeconds": 50
  }
];

const list4: any[] = [
  {
    "title": "O Maahi (16D Audio)",
    "artist": "Arijit Singh, Pritam, Shah Rukh Khan",
    "film": "Dunki",
    "youtubeId": "1JaMbp6BK0s",
    "isSpatial": true
  },
  {
    "title": "Chal Tere Ishq Mein",
    "artist": "Neeti Mohan, Vishal Mishra, Mithoon",
    "film": "Gadar 2",
    "youtubeId": "p_oYiDR6S0E",
    "isSpatial": true
  },
  {
    "title": "Sahiba x Samjho Na (16D Mashup)",
    "artist": "Aditya Rikhari / Wishes",
    "film": "Mashup",
    "youtubeId": "072mkD_3-dA",
    "isSpatial": true
  },
  {
    "title": "Qeher (16D Audio)",
    "artist": "Guru Randhawa",
    "film": "Dhamaal 4",
    "isSpatial": true,
    "youtubeId": "vW8f3DsOUtY"
  },
  {
    "title": "Ban Ja Tu (16D Audio)",
    "artist": "Charan Preet x Badshah ft. Ahsii",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "mCKbvedLakE"
  },
  {
    "title": "7.7 Magnitude (16D Heavy Trap Drop)",
    "artist": "Karan Aujla, Ikky",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "Pf311ETArlk"
  },
  {
    "title": "52 Bars (16D Spatial Trap Edit)",
    "artist": "Karan Aujla",
    "film": "Single",
    "youtubeId": "lU3nWOKRqco",
    "isSpatial": true
  },
  {
    "title": "Winning Speech (16D Brass & Trap Drop)",
    "artist": "Karan Aujla, Mxrci",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "vsWxs1tuwDk"
  },
  {
    "title": "Softly (16D Club Trap Remix)",
    "artist": "Karan Aujla, Ikky",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "cWMxCE2HTag"
  },
  {
    "title": "Low Fade / C Walk (16D Spatial Trap Drop)",
    "artist": "Karan Aujla, Mxrci",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "3j7bhOvW6jw"
  },
  {
    "title": "Admirin' You (16D Festival Trap Drop)",
    "artist": "Karan Aujla ft. Preston Pablo",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "ahaUNhScopE"
  },
  {
    "title": "Players (16D Audio Bass Boost)",
    "artist": "Karan Aujla & Badshah",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "CeFQO9MQNqs"
  },
  {
    "title": "Levels (16D Hard Drill Bass Drop)",
    "artist": "Sidhu Moose Wala ft. Sunny Malton",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "tpFljbJxZiw"
  },
  {
    "title": "The Last Ride (16D 90s Boom-Bap / 808 Drop)",
    "artist": "Sidhu Moose Wala, Wazir Patar",
    "film": "Single",
    "youtubeId": "uzEflg9g70o",
    "isSpatial": true
  },
  {
    "title": "Moosedrilla (16D Aggressive Drill Drop)",
    "artist": "Sidhu Moose Wala ft. DIVINE",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "GFUJ5mG_4NI"
  },
  {
    "title": "Devil (16D Heavy Bass Drop)",
    "artist": "Sidhu Moose Wala, Byg Byrd",
    "film": "PBX 1",
    "isSpatial": true,
    "youtubeId": "lnkXQ3dOruY"
  },
  {
    "title": "G-Shit (16D Audio)",
    "artist": "Sidhu Moose Wala, The Kidd, Blocknoi Twitch",
    "film": "Moosetape",
    "youtubeId": "prwzUKh0ji4",
    "isSpatial": true
  },
  {
    "title": "Bitch I’m Back (16D Sliding 808 Drop)",
    "artist": "Sidhu Moose Wala, The Kidd",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "W5NgXKe4SJk"
  },
  {
    "title": "Same Beef (16D Sub-Bass Drop)",
    "artist": "Sidhu Moose Wala & Bohemia",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "qk2WMmiiVFE"
  },
  {
    "title": "Baller (16D Massive 808 Drop)",
    "artist": "Shubh",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "xR3V5Ow2dTI"
  },
  {
    "title": "Cheques (16D Spatial Trap Drop)",
    "artist": "Shubh",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "4tywp83zkmk"
  },
  {
    "title": "No Love (16D Reverb & Hard Drop)",
    "artist": "Shubh",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "6RrEQJNZwPQ"
  },
  {
    "title": "One Love (16D Sub-Bass Drop)",
    "artist": "Shubh",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "0pWsCiBvLOk"
  },
  {
    "title": "Brown Munde (16D Festival Trap Drop)",
    "artist": "AP Dhillon, Gurinder Gill, Shinda Kahlon",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "VNs_cCtdbPc"
  },
  {
    "title": "Insane (16D 360° Moving Bass)",
    "artist": "AP Dhillon, Gurinder Gill",
    "film": "Single",
    "youtubeId": "TeAF3lCuDUk",
    "isSpatial": true
  },
  {
    "title": "Excuses (Slowed + 16D Subwoofer Drop)",
    "artist": "AP Dhillon, Intense",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "vX2cDW8LUWk"
  },
  {
    "title": "Ex Files (16D SMG Drill Drop)",
    "artist": "BAGGH-E SMG, Farmaan SMG, Big Kay SMG, Mxrci",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "phzMx7cZs04"
  },
  {
    "title": "NYPD (16D Dark Drill Drop)",
    "artist": "SMG Crew, Farmaan SMG",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "a5RhLw9SqJE"
  },
  {
    "title": "Headliner / Shimmy Shimmy (16D Hard Trap Drop)",
    "artist": "Navaan Sandhu, Haakam",
    "film": "Bipolar",
    "isSpatial": true,
    "youtubeId": "GE6w7DRyqcM"
  },
  {
    "title": "Kabze (16D Haryanvi Bass Blast)",
    "artist": "Pintu Pabra, Shiva Choudhary",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "Oyw1Eo21q5k"
  },
  {
    "title": "Naam Chale (16D Audio)",
    "artist": "Vikram Sarkar",
    "film": "Thought Music / All Good Music",
    "isSpatial": true,
    "youtubeId": "tYKrORILFOg"
  },
  {
    "title": "Jatt Mehkma (16D 808 Trap Drop)",
    "artist": "Yo Yo Honey Singh",
    "film": "Glory",
    "isSpatial": true,
    "youtubeId": "vrjndQ4BXMU"
  },
  {
    "title": "Moonlight (16D Spatial Bass Edit)",
    "artist": "Yo Yo Honey Singh ft. Priceless",
    "film": "Glory",
    "isSpatial": true,
    "youtubeId": "JF42RpxAEko"
  },
  {
    "title": "Payal (16D Heavy Drop Mix)",
    "artist": "Yo Yo Honey Singh ft. Nora Fatehi",
    "film": "Glory",
    "isSpatial": true,
    "youtubeId": "a-PAcmi5Kas"
  },
  {
    "title": "Millionaire (16D Club Trap Drop)",
    "artist": "Yo Yo Honey Singh",
    "film": "Glory",
    "isSpatial": true,
    "youtubeId": "uiNBqLphO2Y"
  },
  {
    "title": "Blue Eyes (Hardstyle / Sub-Bass Boost 16D)",
    "artist": "Yo Yo Honey Singh",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "NbyHNASFi6U"
  },
  {
    "title": "Love Dose (16D Trap Remix)",
    "artist": "Yo Yo Honey Singh",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "KpaSvprz01g"
  },
  {
    "title": "Dhurandhar - Title Track / Naal Nachna (16D Bass Boosted)",
    "artist": "Simran Choudhary",
    "film": "Dhurandhar",
    "isSpatial": true,
    "youtubeId": "TFTnJzWRTJ8"
  },
  {
    "title": "KGF Theme: Monster (16D Extreme Bass Blast)",
    "artist": "Anirudh Ravichander",
    "film": "KGF Chapter 2",
    "isSpatial": true,
    "youtubeId": "R4He_Gcn7cA"
  },
  {
    "title": "Vikram Title Track / Rolex Theme (16D Trap Edit)",
    "artist": "Anirudh Ravichander",
    "film": "Vikram",
    "isSpatial": true,
    "youtubeId": "IXTqQY-TiYQ"
  },
  {
    "title": "Sher Khul Gaye (16D Dance Mix)",
    "artist": "Vishal & Shekhar",
    "film": "Fighter",
    "isSpatial": true,
    "youtubeId": "e5Bj4Pf86sc"
  },
  {
    "title": "Ghamand Kar (16D Epic War Drums & Bass)",
    "artist": "Ajay-Atul",
    "film": "Tanhaji",
    "isSpatial": true,
    "youtubeId": "3qKi29UR2g4"
  },
  {
    "title": "Jee Karda (16D Rock-EDM Hard Drop)",
    "artist": "Divya Kumar",
    "film": "Badlapur",
    "isSpatial": true,
    "youtubeId": "C-JUAWxDkrA"
  },
  {
    "title": "Deva Deva (Slowed + 16D Sub-Bass Blast)",
    "artist": "Arijit Singh",
    "film": "Brahmāstra",
    "isSpatial": true,
    "youtubeId": "mNuhKUOD_A0"
  },
  {
    "title": "Makasam",
    "artist": "KR$NA",
    "film": "Single",
    "youtubeId": "cUfTYaVEnoA",
    "isSpatial": true
  },
  {
    "title": "Prarthana",
    "artist": "KR$NA ft. Seedhe Maut",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "OKPAPX_fGVw"
  },
  {
    "title": "Khatta Flow",
    "artist": "Seedhe Maut & KR$NA",
    "film": "Single",
    "youtubeId": "9UuwPhr_H2c",
    "isSpatial": true
  },
  {
    "title": "No Cap (16D Hard Drill Drop)",
    "artist": "KR$NA",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "PejQbGZraqg"
  },
  {
    "title": "Kahaani",
    "artist": "Seedhe Maut",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "VEQ-XJWiQMM"
  },
  {
    "title": "Dhundhala (16D Spatial Bass Drop)",
    "artist": "Yashraj ft. Talwiinder & Dropped Out",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "Xy1Pzu1yZGg"
  },
  {
    "title": "Hola Amigo (16D Aggressive Trap Drop)",
    "artist": "KR$NA ft. Seedhe Maut & Umair",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "De9VIp37CjY"
  },
  {
    "title": "Saza-E-Maut",
    "artist": "KR$NA & Raftaar",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "o907r6NsK9s"
  },
  {
    "title": "Boom Shaka",
    "artist": "Dhanda Nyoliwala ft. KR$NA",
    "film": "Single",
    "youtubeId": "7CwwStR5KBI",
    "isSpatial": true
  },
  {
    "title": "Bohot Sahi",
    "artist": "J Trix ft. Kr$na",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "n89UlGvWbHs"
  },
  {
    "title": "Fubuki",
    "artist": "Rawal x Bharg",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "D_VSfZQ55j0"
  },
  {
    "title": "3:59 AM",
    "artist": "DIVINE",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "eLSePtRKFhg"
  },
  {
    "title": "Kohinoor",
    "artist": "DIVINE",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "8q_eV_RErE4"
  },
  {
    "title": "Tadipaar (16D Hard Trap Drop)",
    "artist": "MC Stan",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "AKd-3Asq60M"
  },
  {
    "title": "Basti Ka Hasti (16D Subwoofer Drop)",
    "artist": "MC Stan",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "l0AvFp0_k14"
  },
  {
    "title": "Company (16D Club Trap Drop)",
    "artist": "Emiway Bantai",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "GuGYYdwcPYw"
  },
  {
    "title": "Machayenge",
    "artist": "Emiway Bantai",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "7tNPxY_ntEA"
  },
  {
    "title": "Punya Paap",
    "artist": "DIVINE",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "4wTTAWjNlDM"
  },
  {
    "title": "Angaar",
    "artist": "Ikka ft. Raftaar",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "GpjrKSyjXDE"
  },
  {
    "title": "Joota Japani",
    "artist": "KR$NA",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "vR16Gu-Uq00"
  },
  {
    "title": "Chhabi Kar",
    "artist": "Emiway Bantai",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "JMncZHRrIBY"
  },
  {
    "title": "Satya",
    "artist": "DIVINE",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "rO4DbBjaWJY"
  },
  {
    "title": "So High (16D Original Heavy Bass Drop)",
    "artist": "Sidhu Moose Wala",
    "film": "Single",
    "youtubeId": "u_nTzhCEb1Y",
    "isSpatial": true
  },
  {
    "title": "295 (16D Spatial Trap Drop)",
    "artist": "Sidhu Moose Wala",
    "film": "Single",
    "youtubeId": "tG6CJKqQQIo",
    "isSpatial": true
  },
  {
    "title": "They Know",
    "artist": "Karan Aujla",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "RehtHw2Gvfw"
  },
  {
    "title": "Drippy",
    "artist": "Sidhu Moose Wala x AR Paisley",
    "film": "Single",
    "youtubeId": "wyEAqyG1ka0",
    "isSpatial": true
  },
  {
    "title": "Barota",
    "artist": "Sidhu Moose Wala",
    "film": "Single",
    "youtubeId": "5feboL6vAtg",
    "isSpatial": true
  },
  {
    "title": "Watch Out",
    "artist": "Sidhu Moose Wala ft. Sikander Kahlon",
    "film": "Single",
    "youtubeId": "RL_SzW2zP6E",
    "isSpatial": true
  },
  {
    "title": "Dawood",
    "artist": "Sidhu Moose Wala",
    "film": "Single",
    "youtubeId": "UV7kWo3EYdk",
    "isSpatial": true
  },
  {
    "title": "Selfmade",
    "artist": "Sidhu Moose Wala",
    "film": "Single",
    "youtubeId": "b3o4nN-olpM",
    "isSpatial": true
  },
  {
    "title": "Bad",
    "artist": "Sidhu Moose Wala",
    "film": "Single",
    "youtubeId": "FpvIURClDY4",
    "isSpatial": true
  },
  {
    "title": "0 To 100",
    "artist": "Sidhu Moose Wala",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "pHtHF5Amw8Q"
  },
  {
    "title": "Expert Jatt (16D Audio / Subwoofer Bass Test)",
    "artist": "Nawab",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "LRcFuPUiY2s"
  },
  {
    "title": "Mere Varga (16D Spatial Bass Edit)",
    "artist": "Kaka",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "No4DviM7WC0"
  },
  {
    "title": "Chitta Kurta (16D 808 Bass Boost Drop)",
    "artist": "Karan Aujla",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "nBrBwGgY-Kg"
  },
  {
    "title": "Mexico (16D Moving Bassline Drop)",
    "artist": "Karan Aujla",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "Fifv0zWPDlk"
  },
  {
    "title": "East Side Flow (16D Hard Street Drop)",
    "artist": "Sidhu Moose Wala",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "jmigBo42low"
  },
  {
    "title": "Signed To God (16D Heavy 808 Trap)",
    "artist": "Sidhu Moose Wala",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "7DPcBQ1sjX4"
  },
  {
    "title": "Old Skool (16D Hard Bass Drop)",
    "artist": "Prem Dhillon ft. Sidhu Moose Wala",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "hBlO1i_WTiY"
  },
  {
    "title": "Majhail (16D Rolling Trap Drop)",
    "artist": "AP Dhillon & Gurinder Gill",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "yzIyufV6ADk"
  },
  {
    "title": "Daku (16D Sub-Bass Blast Drop)",
    "artist": "Chani Nattan & Inderpal Moga",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "WOdnRhWeHoY"
  },
  {
    "title": "Humnava Mere (16D Slowed Sub-Bass)",
    "artist": "Jubin Nautiyal",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "TqR_jWfHW4g"
  },
  {
    "title": "Pachtaoge (16D Lo-Fi Deep Bass)",
    "artist": "Arijit Singh",
    "film": "Single",
    "youtubeId": "-z3_pbNeR2Y",
    "isSpatial": true
  },
  {
    "title": "Mann Bharryaa 2.0 (16D Spatial Drop)",
    "artist": "B Praak",
    "film": "Shershaah",
    "isSpatial": true,
    "youtubeId": "JEgKJZEYsIU"
  },
  {
    "title": "Bekhayali (16D Metal/Trap Hybrid)",
    "artist": "Sachet Tandon",
    "film": "Kabir Singh",
    "isSpatial": true,
    "youtubeId": "HTQ2pSM49dc"
  },
  {
    "title": "O Saathi (16D Reverb & Sub-Bass)",
    "artist": "Atif Aslam",
    "film": "Baaghi 2",
    "youtubeId": "YuXLN23ZGQo",
    "isSpatial": true
  },
  {
    "title": "Nanchaku (16D Heavy Drill Drop)",
    "artist": "Seedhe Maut ft. MC Stan",
    "film": "Single",
    "youtubeId": "7IHqIfpQsBk",
    "isSpatial": true
  },
  {
    "title": "Mirchi (16D Club Trap Drop)",
    "artist": "DIVINE ft. Stylo G & MC Altaf",
    "film": "Single",
    "youtubeId": "wUmtFSmjKsU",
    "isSpatial": true
  },
  {
    "title": "52 Bars (16D Beat Switch Drop)",
    "artist": "Karan Aujla, Ikky",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "4DfVxVeqk2o"
  },
  {
    "title": "Players (16D Heavy Drop Edit)",
    "artist": "Badshah & Karan Aujla",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "CeFQO9MQNqs"
  },
  {
    "title": "White Brown Black (16D Bass Blast Drop)",
    "artist": "Karan Aujla & Avvy Sra",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "BtQp2U6hJII"
  },
  {
    "title": "Tauba Tauba (16D Trap Beat Drop)",
    "artist": "Karan Aujla x DIVINE",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "LK7-_dgAVQE"
  },
  {
    "title": "On Top (16D Aggressive Brass Drop)",
    "artist": "Karan Aujla",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "tMgEYaclnQ0"
  },
  {
    "title": "Don't Look (16D Trap Drop)",
    "artist": "Karan Aujla & Jay Trak",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "ahaUNhScopE"
  },
  {
    "title": "Jhanjar (16D Heavy Sub-Bass Drop)",
    "artist": "Karan Aujla",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "ZnGMxARIxoY"
  },
  {
    "title": "Kya Baat Aa (16D Bass Drop Mix)",
    "artist": "Karan Aujla",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "x-KbnJ9fvJc"
  },
  {
    "title": "Signed To God (16D Distorted Trap Drop)",
    "artist": "Sidhu Moose Wala, Steel Banglez & The Kidd",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "7DPcBQ1sjX4"
  },
  {
    "title": "G-Shit (16D Underground Trap Drop)",
    "artist": "Sidhu Moose Wala ft. Blocknoi Twitch",
    "film": "Moosetape",
    "isSpatial": true,
    "youtubeId": "YPPEZiDF4Xw"
  },
  {
    "title": "These Days (16D Subwoofer Trap Drop)",
    "artist": "Sidhu Moose Wala ft. Bohemia",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "MZRwvfoc3aU"
  },
  {
    "title": "GOAT (16D Hard Bass Beat Switch)",
    "artist": "Sidhu Moose Wala, Wazir Patar",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "M8vDwlHigJA"
  },
  {
    "title": "Celebrity Killer (16D UK Drill Drop)",
    "artist": "Sidhu Moose Wala ft. Tion Wayne",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "MyYAglA_Cdk"
  },
  {
    "title": "IDGAF (16D Hard Trap Drop)",
    "artist": "Sidhu Moose Wala ft. Morrisson",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "ctVAt8WGwJQ"
  },
  {
    "title": "Hood Anthem (16D Heavy Bass Drop)",
    "artist": "Shubh",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "jjiC7PfoIaY"
  },
  {
    "title": "King Shit (16D Heavy Bass Drop)",
    "artist": "Shubh",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "d2ofxg8pHfQ"
  },
  {
    "title": "Dior (16D Rolling 808 Drop)",
    "artist": "Shubh",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "vyrPwLoIYkc"
  },
  {
    "title": "Insane (16D Dark Synth Drop)",
    "artist": "AP Dhillon & Gurinder Gill",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "cqP8I5aaud8"
  },
  {
    "title": "Spaceship (16D Synthwave Bass Drop)",
    "artist": "AP Dhillon",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "RatDV50alQE"
  },
  {
    "title": "Foreigns (16D Drill Drop)",
    "artist": "AP Dhillon & Gurinder Gill",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "jWz5on5N14E"
  },
  {
    "title": "Tere Te (16D Club Drop)",
    "artist": "AP Dhillon",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "fG70qm6usR8"
  },
  {
    "title": "Dil Nu (16D Heavy Drop Mix)",
    "artist": "AP Dhillon",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "p2EdDiiVHh4"
  },
  {
    "title": "Wo Noor (16D Trap Bass Drop)",
    "artist": "AP Dhillon",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "HrcjFEK58ik"
  },
  {
    "title": "Baazigar (16D Hard Trap Drop)",
    "artist": "DIVINE ft. Armani White",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "sek3FhByr6w"
  },
  {
    "title": "Gunehgar (16D Dark Bass Drop)",
    "artist": "DIVINE & Hit-Boy",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "shSUDi4b2y8"
  },
  {
    "title": "I Guess (16D Sliding 808 Drop)",
    "artist": "KR$NA",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "Qg9LxRHLbAk"
  },
  {
    "title": "Big Moves (16D Street Trap Drop)",
    "artist": "Raga",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "vakdxu3pzBE"
  },
  {
    "title": "Machayenge 4 (16D Heavy Diss Trap Drop)",
    "artist": "Emiway Bantai",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "CSGFVogqhD0"
  },
  {
    "title": "Chore NCR Aale (16D Haryanvi Drill Drop)",
    "artist": "MC Square & Paradox",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "ydV_DOwndoI"
  },
  {
    "title": "Jadugar (16D Beat Switch Drop)",
    "artist": "Paradox",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "IOcGS4D1tM0"
  },
  {
    "title": "California Love (16D West Coast Trap Drop)",
    "artist": "Cheema Y, Gur Sidhu",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "rSxTumD4kew"
  },
  {
    "title": "Roll Deep (16D Heavy Bass Drop)",
    "artist": "Tegi Pannu & Sukha",
    "film": "Single",
    "youtubeId": "ixgaS-3FfK4",
    "isSpatial": true
  },
  {
    "title": "8 Parche (16D Trap Remix Drop)",
    "artist": "Baani Sandhu & Gur Sidhu",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "8WWv5_k8D14"
  },
  {
    "title": "Amplifier (16D Hardstyle / Trap Drop Mix)",
    "artist": "Imran Khan",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "_pkjkn3qZbM"
  },
  {
    "title": "Bewafa (16D Dubstep / Trap Drop)",
    "artist": "Imran Khan",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "rGGLINL6xfc"
  },
  {
    "title": "Satisfya (16D Subwoofer Trap Drop)",
    "artist": "Imran Khan",
    "film": "Single",
    "youtubeId": "pfVODjDBFxU",
    "isSpatial": true
  },
  {
    "title": "President (16D Heavy Trap Drop)",
    "artist": "Sukha",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "0FnZO-U5oHo"
  },
  {
    "title": "Attraction (16D Spatial Trap Drop)",
    "artist": "Sukha",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "lDxw_BRqul8"
  },
  {
    "title": "Sheesha / Aakhya Mai Aakh Ghali (16D Bass Drop)",
    "artist": "Mitta Ror",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "aRNfSqsgrgE"
  },
  {
    "title": "Together (16D Hard Trap Edit)",
    "artist": "Nirvair Pannu, Deol Harman",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "TuCTTCu0Rvg"
  },
  {
    "title": "Arjan Vailly (16D Hard Drill / Dhol Drop)",
    "artist": "Bhupinder Babbal",
    "film": "Animal",
    "isSpatial": true,
    "youtubeId": "0hYehuznQac"
  },
  {
    "title": "KGF: Monster Theme (16D Extreme Subwoofer Drop)",
    "artist": "Anirudh Ravichander",
    "film": "KGF Chapter 2",
    "isSpatial": true,
    "youtubeId": "R4He_Gcn7cA"
  },
  {
    "title": "Rolex Theme / Vikram (16D Distorted 808 Drop)",
    "artist": "Anirudh Ravichander",
    "film": "Vikram",
    "isSpatial": true,
    "youtubeId": "rBLCjz8as0E"
  },
  {
    "title": "Aaj Ki Raat (16D Club Drop Mix)",
    "artist": "Sachin-Jigar",
    "film": "Stree 2",
    "youtubeId": "Dq4HAzBtslo",
    "isSpatial": true
  },
  {
    "title": "Aayi Nai (16D Bass Blast Drop)",
    "artist": "Sachin-Jigar",
    "film": "Stree 2",
    "isSpatial": true,
    "youtubeId": "4Zw3R2CO-MM"
  },
  {
    "title": "Shararat (16D Trap Drop)",
    "artist": "Simran Choudhary",
    "film": "Dhurandhar",
    "isSpatial": true,
    "youtubeId": "dePa1Wtv88s"
  },
  {
    "title": "Run Down The City - Monica (16D Heavy Bass Drop)",
    "artist": "Simran Choudhary",
    "film": "Dhurandhar",
    "isSpatial": true,
    "youtubeId": "aT4N7jn2Eww"
  },
  {
    "title": "Pushpa Pushpa (16D Subwoofer Drop)",
    "artist": "Devi Sri Prasad",
    "film": "Pushpa 2: The Rule",
    "isSpatial": true,
    "youtubeId": "CLP0DfbMEkY"
  },
  {
    "title": "Kala Chashma (16D Trap / Future Bass Drop)",
    "artist": "Badshah",
    "film": "Baar Baar Dekho",
    "isSpatial": true,
    "youtubeId": "k4yXQkG2s1E"
  },
  {
    "title": "Hookah Bar (16D Psy-Bass / Hardstyle Drop)",
    "artist": "Himesh Reshammiya",
    "film": "Khiladi 786",
    "isSpatial": true,
    "youtubeId": "b4b1cMVZOUU"
  },
  {
    "title": "Dhan Te Nan (16D Electro Dubstep Drop)",
    "artist": "Sukhwinder Singh",
    "film": "Kaminey",
    "isSpatial": true,
    "youtubeId": "HvnMMAV8m5A"
  },
  {
    "title": "Aashiqui Mein Teri (16D Hard Bass Drop)",
    "artist": "Himesh Reshammiya",
    "film": "36 China Town",
    "isSpatial": true,
    "youtubeId": "pYiYSt5pGoU"
  },
  {
    "title": "Zara Zara Touch Me (16D Electro Trap Drop)",
    "artist": "Monali Thakur",
    "film": "Race",
    "isSpatial": true,
    "youtubeId": "vNlpgORSV7k"
  },
  {
    "title": "Dus Bahane 2.0 (16D Heavy Drop Remix)",
    "artist": "Vishal & Shekhar",
    "film": "Baaghi 3",
    "isSpatial": true,
    "youtubeId": "mIWpsOjQNDw"
  },
  {
    "title": "Ghungroo (16D Festival EDM Drop)",
    "artist": "Arijit Singh",
    "film": "War",
    "isSpatial": true,
    "youtubeId": "caySD0OJJvk"
  },
  {
    "title": "Jhoome Jo Pathaan (16D Hard Drop Remix)",
    "artist": "Arijit Singh",
    "film": "Pathaan",
    "isSpatial": true,
    "youtubeId": "pacvj3n-RLw"
  },
  {
    "title": "Illegal Weapon 2.0 (16D EDM Bass Drop)",
    "artist": "Jasmine Sandlas",
    "film": "Street Dancer 3D",
    "isSpatial": true,
    "youtubeId": "HLoJnZU3WcQ"
  },
  {
    "title": "Kar Gayi Chull (16D Bounce Trap Drop)",
    "artist": "Badshah",
    "film": "Kapoor & Sons",
    "isSpatial": true,
    "youtubeId": "Bea019pOw5w"
  },
  {
    "title": "Aankh Marey (16D Hard Bass Drop)",
    "artist": "Neha Kakkar",
    "film": "Simmba",
    "isSpatial": true,
    "youtubeId": "_KhQT-LGb-4"
  },
  {
    "title": "Six (16D Audio)",
    "artist": "Guru Randhawa, Kiran Bajwa, Gurjit Gill",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "PEdDI1A17qc"
  },
  {
    "title": "Tauba Tauba (16D Trap Remix)",
    "artist": "Karan Aujla x DIVINE",
    "film": "Single",
    "isSpatial": true,
    "youtubeId": "LK7-_dgAVQE"
  }
];

const listGlobal: any[] = [
  {
    "title": "Sandstorm",
    "artist": "Darude",
    "film": "Global Anthems",
    "youtubeId": "UdWRghH6EzY",
    "isGlobal": true
  },
  {
    "title": "Better Off Alone",
    "artist": "Alice Deejay",
    "film": "Global Anthems",
    "youtubeId": "Ck0LO6b6OQc",
    "isGlobal": true
  },
  {
    "title": "Adagio for Strings",
    "artist": "Tiësto",
    "film": "Global Anthems",
    "youtubeId": "EiS9isTa82Y",
    "isGlobal": true
  },
  {
    "title": "Children",
    "artist": "Robert Miles",
    "film": "Global Anthems",
    "youtubeId": "CC5ca6Hsb2Q",
    "isGlobal": true
  },
  {
    "title": "Insomnia",
    "artist": "Faithless",
    "film": "Global Anthems",
    "youtubeId": "f2sv98d0gS4",
    "isGlobal": true
  },
  {
    "title": "9 PM (Till I Come)",
    "artist": "ATB",
    "film": "Global Anthems",
    "youtubeId": "QFGMQZyvnmY",
    "isGlobal": true
  },
  {
    "title": "In and Out of Love",
    "artist": "Armin van Buuren ft. Sharon den Adel",
    "film": "Global Anthems",
    "youtubeId": "krHqVGz_o18",
    "isGlobal": true
  },
  {
    "title": "Sun & Moon",
    "artist": "Above & Beyond ft. Richard Bedford",
    "film": "Global Anthems",
    "youtubeId": "ll5ykbAumD4",
    "isGlobal": true
  },
  {
    "title": "Silence (Tiësto's In Search of Sunrise Remix)",
    "artist": "Delerium ft. Sarah McLachlan",
    "film": "Global Anthems",
    "youtubeId": "ugsQypXvJQw",
    "isGlobal": true
  },
  {
    "title": "Concrete Angel",
    "artist": "Gareth Emery ft. Christina Novelli",
    "film": "Global Anthems",
    "youtubeId": "f3GRM0Yz7wM",
    "isGlobal": true
  },
  {
    "title": "Miracle",
    "artist": "Calvin Harris & Ellie Goulding",
    "film": "Global Anthems",
    "youtubeId": "961v0E3b01g",
    "isGlobal": true
  },
  {
    "title": "For an Angel (PvD E-Werk Club Mix)",
    "artist": "Paul van Dyk",
    "film": "Global Anthems",
    "youtubeId": "evPhEkujDxw",
    "isGlobal": true
  },
  {
    "title": "Ecstasy",
    "artist": "ATB",
    "film": "Global Anthems",
    "youtubeId": "LI_3Jsyuma4",
    "isGlobal": true
  },
  {
    "title": "As The Rush Comes (Gabriel & Dresden Sweeping Strings Mix)",
    "artist": "Motorcycle",
    "film": "Global Anthems",
    "youtubeId": "TwNV5ytRh5I",
    "isGlobal": true
  },
  {
    "title": "Café Del Mar (Three 'N One Remix)",
    "artist": "Energy 52",
    "film": "Global Anthems",
    "youtubeId": "yyvp_nCM15Q",
    "isGlobal": true
  },
  {
    "title": "Castles in the Sky",
    "artist": "Ian Van Dahl ft. Marsha",
    "film": "Global Anthems",
    "youtubeId": "npYyiwpPR2I",
    "isGlobal": true
  },
  {
    "title": "This Is What It Feels Like",
    "artist": "Armin van Buuren ft. Trevor Guthrie",
    "film": "Global Anthems",
    "youtubeId": "HukyFUAVuGo",
    "isGlobal": true
  },
  {
    "title": "Saltwater",
    "artist": "Chicane ft. Moya Brennan",
    "film": "Global Anthems",
    "youtubeId": "UZmg8NnVe74",
    "isGlobal": true
  },
  {
    "title": "Waiting",
    "artist": "Dash Berlin ft. Emma Hewitt",
    "film": "Global Anthems",
    "youtubeId": "pH_H1cfttVw",
    "isGlobal": true
  },
  {
    "title": "Exploration of Space",
    "artist": "Cosmic Gate",
    "film": "Global Anthems",
    "isGlobal": true,
    "youtubeId": "NE2AvbROl5k"
  },
  {
    "title": "Satellite",
    "artist": "OceanLab (Above & Beyond)",
    "film": "Vocal & Melodic",
    "isGlobal": true,
    "youtubeId": "GrOy-0wBlGo"
  },
  {
    "title": "Shivers",
    "artist": "Armin van Buuren ft. Susana",
    "film": "Vocal & Melodic",
    "isGlobal": true,
    "youtubeId": "zCmDEnN8gkw"
  },
  {
    "title": "Traffic",
    "artist": "Tiësto",
    "film": "Vocal & Melodic",
    "isGlobal": true,
    "youtubeId": "cSW3y98ObQY"
  },
  {
    "title": "Southern Sun (Tiësto Remix)",
    "artist": "Paul Oakenfold",
    "film": "Vocal & Melodic",
    "isGlobal": true,
    "youtubeId": "UgiqJxYCuh8"
  },
  {
    "title": "Carte Blanche",
    "artist": "Veracocha",
    "film": "Vocal & Melodic",
    "isGlobal": true,
    "youtubeId": "L0KokdO6WR4"
  },
  {
    "title": "Out of the Blue",
    "artist": "System F (Ferry Corsten)",
    "film": "Vocal & Melodic",
    "isGlobal": true,
    "youtubeId": "Qgx_V0So0qk"
  },
  {
    "title": "Airwave",
    "artist": "Rank 1",
    "film": "Vocal & Melodic",
    "isGlobal": true,
    "youtubeId": "reimbkBhL1A"
  },
  {
    "title": "Take Me Away (Into the Night)",
    "artist": "4 Strings",
    "film": "Vocal & Melodic",
    "isGlobal": true,
    "youtubeId": "hBc3zfexMrk"
  },
  {
    "title": "Toca Me / Toca's Miracle",
    "artist": "Fragma",
    "film": "Vocal & Melodic",
    "isGlobal": true,
    "youtubeId": "ahaUNhScopE"
  },
  {
    "title": "On A Good Day",
    "artist": "Above & Beyond pres. OceanLab",
    "film": "Vocal & Melodic",
    "isGlobal": true,
    "youtubeId": "LthW0Zt4y8s"
  },
  {
    "title": "Till the Sky Falls Down",
    "artist": "Dash Berlin",
    "film": "Vocal & Melodic",
    "isGlobal": true,
    "youtubeId": "Tr7C0nBHOHI"
  },
  {
    "title": "Flaming June",
    "artist": "BT",
    "film": "Vocal & Melodic",
    "isGlobal": true,
    "youtubeId": "ic-NqkDTROY"
  },
  {
    "title": "Nothing But You",
    "artist": "Paul van Dyk ft. Hemstock & Jennings",
    "film": "Vocal & Melodic",
    "isGlobal": true,
    "youtubeId": "BuxM6OQKIOw"
  },
  {
    "title": "Silence",
    "artist": "Tiësto",
    "film": "Vocal & Melodic",
    "isGlobal": true,
    "youtubeId": "LqCcdtM7Qe4"
  },
  {
    "title": "Universal Nation",
    "artist": "Push",
    "film": "Vocal & Melodic",
    "isGlobal": true,
    "youtubeId": "mxGMfKtqi8o"
  },
  {
    "title": "Gouryella",
    "artist": "Gouryella (Ferry Corsten & Tiësto)",
    "film": "Vocal & Melodic",
    "isGlobal": true,
    "youtubeId": "0uAt2SDDYJM"
  },
  {
    "title": "1998 (Paul van Dyk Remix)",
    "artist": "Binary Finary",
    "film": "Vocal & Melodic",
    "isGlobal": true,
    "youtubeId": "E_CFtuh81DM"
  },
  {
    "title": "Big Sky (Agnelli & Nelson Remix)",
    "artist": "John O'Callaghan ft. Audrey Gallagher",
    "film": "Vocal & Melodic",
    "isGlobal": true,
    "youtubeId": "6xWKFSrjSbI"
  },
  {
    "title": "We Control The Sunlight",
    "artist": "Aly & Fila ft. Jwaydan",
    "film": "Vocal & Melodic",
    "isGlobal": true,
    "youtubeId": "Ad_eViMKuF8"
  },
  {
    "title": "Man On The Run",
    "artist": "Dash Berlin with Cerf, Mitiska & Jaren",
    "film": "Vocal & Melodic",
    "isGlobal": true,
    "youtubeId": "C7Qsj6MGVHE"
  },
  {
    "title": "Xpander",
    "artist": "Sasha",
    "film": "Golden Era & Progressive",
    "isGlobal": true,
    "youtubeId": "HRqPeKbYoGw"
  },
  {
    "title": "Offshore",
    "artist": "Chicane",
    "film": "Golden Era & Progressive",
    "isGlobal": true,
    "youtubeId": "7BYTIATwb0E"
  },
  {
    "title": "Communication",
    "artist": "Armin van Buuren",
    "film": "Golden Era & Progressive",
    "isGlobal": true,
    "youtubeId": "bn1ycNxQMvk"
  },
  {
    "title": "Greece 2000",
    "artist": "Three Drives on a Vinyl",
    "film": "Golden Era & Progressive",
    "isGlobal": true,
    "youtubeId": "25BGvZ-SSro"
  },
  {
    "title": "Tuvan",
    "artist": "Gaia",
    "film": "Golden Era & Progressive",
    "isGlobal": true,
    "youtubeId": "4dBZ5_jPqX0"
  },
  {
    "title": "Be Your Sound",
    "artist": "Cosmic Gate ft. Emma Hewitt",
    "film": "Golden Era & Progressive",
    "isGlobal": true,
    "youtubeId": "5MBL0eJrMCo"
  },
  {
    "title": "Good For Me",
    "artist": "Above & Beyond ft. Zoë Johnston",
    "film": "Golden Era & Progressive",
    "isGlobal": true,
    "youtubeId": "yUOWsl7TDtY"
  },
  {
    "title": "Lethal Industry",
    "artist": "Tiësto",
    "film": "Golden Era & Progressive",
    "isGlobal": true,
    "youtubeId": "f-xKKx5eVZg"
  },
  {
    "title": "The Age of Love (Jam & Spoon Remix)",
    "artist": "Age of Love",
    "film": "Golden Era & Progressive",
    "isGlobal": true,
    "youtubeId": "0YVvcTIGy40"
  },
  {
    "title": "The New World",
    "artist": "Markus Schulz",
    "film": "Golden Era & Progressive",
    "isGlobal": true,
    "youtubeId": "BMTK8OiUWIg"
  },
  {
    "title": "Helsinki Scorchin'",
    "artist": "Super8 & Tab",
    "film": "Golden Era & Progressive",
    "isGlobal": true,
    "youtubeId": "ahaUNhScopE"
  },
  {
    "title": "Burned With Desire (Rising Star Vocal Mix)",
    "artist": "Armin van Buuren ft. Justine Suissa",
    "film": "Golden Era & Progressive",
    "isGlobal": true,
    "youtubeId": "N3KFopyDs64"
  },
  {
    "title": "Seven Cities (Solarstone Atlantis Mix)",
    "artist": "Solarstone",
    "film": "Golden Era & Progressive",
    "isGlobal": true,
    "youtubeId": "awxQuhay_mo"
  },
  {
    "title": "RAMsterdam (Jorn van Deynhoven Remix)",
    "artist": "RAM",
    "film": "Golden Era & Progressive",
    "isGlobal": true,
    "youtubeId": "xBMwMjGPmaM"
  },
  {
    "title": "Beautiful",
    "artist": "Ferry Corsten",
    "film": "Golden Era & Progressive",
    "isGlobal": true,
    "youtubeId": "WdGwqUtJ03o"
  },
  {
    "title": "Alone Tonight",
    "artist": "Above & Beyond",
    "film": "Golden Era & Progressive",
    "isGlobal": true,
    "youtubeId": "ur1F0eb2VL8"
  },
  {
    "title": "Are You Fine?",
    "artist": "Kyau & Albert",
    "film": "Golden Era & Progressive",
    "isGlobal": true,
    "youtubeId": "tWsS8XSIL0Q"
  },
  {
    "title": "Out of the Sky",
    "artist": "Lange ft. Sarah Howells",
    "film": "Golden Era & Progressive",
    "isGlobal": true,
    "youtubeId": "lLjsxzCcTwo"
  },
  {
    "title": "Faces",
    "artist": "Andy Moor & Ashley Wallbridge ft. Meighan Nealon",
    "film": "Golden Era & Progressive",
    "isGlobal": true,
    "youtubeId": "ea0Lr55TOds"
  },
  {
    "title": "Strange World (2000 Remake)",
    "artist": "Push",
    "film": "Golden Era & Progressive",
    "isGlobal": true,
    "youtubeId": "n4Hh2G_Ygh8"
  },
  {
    "title": "Great Spirit",
    "artist": "Vini Vici & Armin van Buuren ft. Hilight Tribe",
    "film": "Modern & Festival",
    "isGlobal": true,
    "youtubeId": "yo4pmauhugo"
  },
  {
    "title": "Free Tibet (Vini Vici Remix)",
    "artist": "Vini Vici",
    "film": "Modern & Festival",
    "isGlobal": true,
    "youtubeId": "0lBjcaMokvo"
  },
  {
    "title": "Deep Jungle Walk",
    "artist": "Astrix",
    "film": "Modern & Festival",
    "isGlobal": true,
    "youtubeId": "lIuEuJvKos4"
  },
  {
    "title": "Anahera",
    "artist": "Ferry Corsten pres. Gouryella",
    "film": "Modern & Festival",
    "isGlobal": true,
    "youtubeId": "7ZMZHbAKvGA"
  },
  {
    "title": "United",
    "artist": "Armin van Buuren vs. Vini Vici",
    "film": "Modern & Festival",
    "isGlobal": true,
    "youtubeId": "PVurTWZu7VU"
  },
  {
    "title": "U (Bryan Kearney Remix)",
    "artist": "Gareth Emery ft. Bo Bruce",
    "film": "Modern & Festival",
    "isGlobal": true,
    "youtubeId": "jF7qGaKKD4M"
  },
  {
    "title": "Thing Called Love",
    "artist": "Above & Beyond ft. Richard Bedford",
    "film": "Modern & Festival",
    "isGlobal": true,
    "youtubeId": "ZgRnLM9Vi24"
  },
  {
    "title": "Dark Warrior",
    "artist": "Andrew Rayel",
    "film": "Modern & Festival",
    "isGlobal": true,
    "youtubeId": "CE4TdjQK_V4"
  },
  {
    "title": "Chakra",
    "artist": "W&W & Vini Vici",
    "film": "Modern & Festival",
    "isGlobal": true,
    "youtubeId": "Dx_qGfJq_Go"
  },
  {
    "title": "Through Your Eyes",
    "artist": "Giuseppe Ottaviani",
    "film": "Modern & Festival",
    "isGlobal": true,
    "youtubeId": "2Zzpp9Ktb3k"
  },
  {
    "title": "43",
    "artist": "ilan Bluestone",
    "film": "Modern & Festival",
    "isGlobal": true,
    "youtubeId": "exFy7ppnFkA"
  },
  {
    "title": "Waiting for the Night",
    "artist": "Armin van Buuren ft. Fiora",
    "film": "Modern & Festival",
    "isGlobal": true,
    "youtubeId": "SJ_tpbriGpE"
  },
  {
    "title": "Pikachu",
    "artist": "Key4050 (John O'Callaghan & Bryan Kearney)",
    "film": "Modern & Festival",
    "isGlobal": true,
    "youtubeId": "B2wxoZL3IaM"
  },
  {
    "title": "Visions",
    "artist": "MaRLo",
    "film": "Modern & Festival",
    "isGlobal": true,
    "youtubeId": "mTemgyKTmhw"
  },
  {
    "title": "Lost Language",
    "artist": "Aly & Fila",
    "film": "Modern & Festival",
    "isGlobal": true,
    "youtubeId": "VqqnRKA1kxM"
  },
  {
    "title": "Sirens of the Sea (Above & Beyond Club Mix)",
    "artist": "OceanLab",
    "film": "Modern & Festival",
    "isGlobal": true,
    "youtubeId": "RjWLs8pDCYw"
  },
  {
    "title": "Opus",
    "artist": "Eric Prydz",
    "film": "Modern & Festival",
    "isGlobal": true,
    "youtubeId": "CzqJelgEBsA"
  },
  {
    "title": "L.E.D. There Be Light",
    "artist": "Rank 1",
    "film": "Modern & Festival",
    "isGlobal": true,
    "youtubeId": "VwxnB4kL0nM"
  },
  {
    "title": "Sun In Your Eyes",
    "artist": "Above & Beyond",
    "film": "Modern & Festival",
    "isGlobal": true,
    "youtubeId": "PCKSLa1tsAk"
  },
  {
    "title": "Keep Your Dreams Alive",
    "artist": "Giuseppe Ottaviani",
    "film": "Modern & Festival",
    "isGlobal": true,
    "youtubeId": "yAw1nLVxFs8"
  },
  {
    "title": "Komodo (Save a Soul)",
    "artist": "Mauro Picotto",
    "film": "Heritage & Club Classics",
    "isGlobal": true,
    "youtubeId": "hem6LPHa5zQ"
  },
  {
    "title": "Bellissima",
    "artist": "DJ Quicksilver",
    "film": "Heritage & Club Classics",
    "isGlobal": true,
    "youtubeId": "YQQokcoOzeY"
  },
  {
    "title": "Ayla (Veracocha / Taucher Remix)",
    "artist": "Ayla",
    "film": "Heritage & Club Classics",
    "isGlobal": true,
    "youtubeId": "LtRsf9wAc4E"
  },
  {
    "title": "Heaven Scent",
    "artist": "Bedrock",
    "film": "Heritage & Club Classics",
    "isGlobal": true,
    "youtubeId": "iqh5bMu9Jmo"
  },
  {
    "title": "Mysterious Times ft. Tina Cousins",
    "artist": "Sash!",
    "film": "Heritage & Club Classics",
    "isGlobal": true,
    "youtubeId": "y1T1dS-bh4s"
  },
  {
    "title": "Protect Your Mind (Braveheart)",
    "artist": "DJ Sakin & Friends",
    "film": "Heritage & Club Classics",
    "isGlobal": true,
    "youtubeId": "xz2Yq02HX4E"
  },
  {
    "title": "Lizard",
    "artist": "Mauro Picotto",
    "film": "Heritage & Club Classics",
    "isGlobal": true,
    "youtubeId": "B2jPPGTtgC0"
  },
  {
    "title": "Madagascar (Ferry Corsten Remix)",
    "artist": "Art of Trance",
    "film": "Heritage & Club Classics",
    "isGlobal": true,
    "youtubeId": "uuH_nYKXqHM"
  },
  {
    "title": "Love Shines Through",
    "artist": "Chakra",
    "film": "Heritage & Club Classics",
    "isGlobal": true,
    "youtubeId": "zRayl-nl8rs"
  },
  {
    "title": "The Theme",
    "artist": "Jurgen Vries",
    "film": "Heritage & Club Classics",
    "isGlobal": true,
    "youtubeId": "srwCUS8jiXw"
  },
  {
    "title": "Beachball",
    "artist": "Nalin & Kane",
    "film": "Heritage & Club Classics",
    "isGlobal": true,
    "youtubeId": "FwXskdcCRIk"
  },
  {
    "title": "Beautiful",
    "artist": "Matt Darey ft. Marcella Woods",
    "film": "Heritage & Club Classics",
    "isGlobal": true,
    "youtubeId": "WdGwqUtJ03o"
  },
  {
    "title": "What Ya Got 4 Me",
    "artist": "Signum",
    "film": "Heritage & Club Classics",
    "isGlobal": true,
    "youtubeId": "NnI5upfK6mA"
  },
  {
    "title": "Fire Wire",
    "artist": "Cosmic Gate",
    "film": "Heritage & Club Classics",
    "isGlobal": true,
    "youtubeId": "jlwPNroYv1U"
  },
  {
    "title": "Blue Fear",
    "artist": "Armin van Buuren",
    "film": "Heritage & Club Classics",
    "isGlobal": true,
    "youtubeId": "vfgnh7Thp-A"
  },
  {
    "title": "The Spell (Solarstone Pure Mix)",
    "artist": "Solarstone & Clare Stagg",
    "film": "Heritage & Club Classics",
    "isGlobal": true,
    "youtubeId": "-bAo69SJwFk"
  },
  {
    "title": "Anthem",
    "artist": "Filo & Peri ft. Eric Lumiere",
    "film": "Heritage & Club Classics",
    "isGlobal": true,
    "youtubeId": "gDMfAiX7zRk"
  },
  {
    "title": "Elektra",
    "artist": "Super8 & Tab",
    "film": "Heritage & Club Classics",
    "isGlobal": true,
    "youtubeId": "fBn8F9VIbDU"
  },
  {
    "title": "Happiness Happening",
    "artist": "Lost Witness",
    "film": "Heritage & Club Classics",
    "isGlobal": true,
    "youtubeId": "jYsfR7e4gHI"
  },
  {
    "title": "Stella",
    "artist": "Jam & Spoon",
    "film": "Heritage & Club Classics",
    "isGlobal": true,
    "youtubeId": "zLy--cFj6W0"
  }
];

const listGoa: any[] = [
  {
    "title": "Mahadeva",
    "artist": "Astral Projection",
    "film": "Iconic Anthems",
    "youtubeId": "Ix0lduF1Co4",
    "isGoa": true
  },
  {
    "title": "Free Tibet (Vini Vici Remix)",
    "artist": "Hilight Tribe",
    "film": "Iconic Anthems",
    "youtubeId": "0lBjcaMokvo",
    "isGoa": true
  },
  {
    "title": "Deep Jungle Walk",
    "artist": "Astrix",
    "film": "Iconic Anthems",
    "youtubeId": "lIuEuJvKos4",
    "isGoa": true
  },
  {
    "title": "Shiva’s India (Outsiders Remix)",
    "artist": "1200 Micrograms",
    "film": "Iconic Anthems",
    "youtubeId": "qJtWEhl5smA",
    "isGoa": true
  },
  {
    "title": "Great Spirit",
    "artist": "Armin van Buuren vs. Vini Vici ft. Hilight Tribe",
    "film": "Iconic Anthems",
    "youtubeId": "yo4pmauhugo",
    "isGoa": true
  },
  {
    "title": "L.S.D.",
    "artist": "Hallucinogen",
    "film": "Iconic Anthems",
    "youtubeId": "iIsVzSMRw8E",
    "isGoa": true
  },
  {
    "title": "Mahishasura Mardini (Droplex & Psy Edit)",
    "artist": "Shanti People",
    "film": "Iconic Anthems",
    "isGoa": true,
    "youtubeId": "Qz4LC9Pmo7Y"
  },
  {
    "title": "Becoming Insane",
    "artist": "Infected Mushroom",
    "film": "Iconic Anthems",
    "isGoa": true,
    "youtubeId": "wVwQYSVNJVM"
  },
  {
    "title": "Kabalah",
    "artist": "Astral Projection",
    "film": "Iconic Anthems",
    "isGoa": true,
    "youtubeId": "mvF8zruukjU"
  },
  {
    "title": "Teleport",
    "artist": "Man With No Name",
    "film": "Iconic Anthems",
    "isGoa": true,
    "youtubeId": "efc7WLCVWmw"
  },
  {
    "title": "Chakra",
    "artist": "Vini Vici & W&W",
    "film": "Iconic Anthems",
    "isGoa": true,
    "youtubeId": "Dx_qGfJq_Go"
  },
  {
    "title": "Pranava",
    "artist": "Astrix & Ace Ventura",
    "film": "Iconic Anthems",
    "isGoa": true,
    "youtubeId": "0JEmUHq2QNw"
  },
  {
    "title": "Universe Inside Me",
    "artist": "Liquid Soul & Vini Vici",
    "film": "Iconic Anthems",
    "isGoa": true,
    "youtubeId": "yvBK1rSUzTc"
  },
  {
    "title": "Pistolero",
    "artist": "Juno Reactor",
    "film": "Iconic Anthems",
    "isGoa": true,
    "youtubeId": "wZqNUo6y52Q"
  },
  {
    "title": "Parvati Valley",
    "artist": "Blastoyz",
    "film": "Iconic Anthems",
    "isGoa": true,
    "youtubeId": "FHUo4NQPaxs"
  },
  {
    "title": "The Prayer",
    "artist": "Electric Universe",
    "film": "Iconic Anthems",
    "isGoa": true,
    "youtubeId": "Jtb1THFjA2o"
  },
  {
    "title": "Tandava",
    "artist": "Shanti People",
    "film": "Iconic Anthems",
    "isGoa": true,
    "youtubeId": "iiTeiOdAJSQ"
  },
  {
    "title": "Smashing the Opponent",
    "artist": "Infected Mushroom",
    "film": "Iconic Anthems",
    "isGoa": true,
    "youtubeId": "HDs5OlRLr9M"
  },
  {
    "title": "People Can Fly",
    "artist": "Astral Projection",
    "film": "Iconic Anthems",
    "isGoa": true,
    "youtubeId": "kJSyBUZshfs"
  },
  {
    "title": "Neurochemistry",
    "artist": "Ace Ventura & Liquid Soul",
    "film": "Iconic Anthems",
    "isGoa": true,
    "youtubeId": "gOKopmV4rFI"
  },
  {
    "title": "Wire-Tap",
    "artist": "GMS & Vini Vici",
    "film": "Iconic Anthems",
    "isGoa": true,
    "youtubeId": "A_70gFGTCR4"
  },
  {
    "title": "Ayahuasca",
    "artist": "1200 Micrograms",
    "film": "Iconic Anthems",
    "isGoa": true,
    "youtubeId": "5kom6v1jNkM"
  },
  {
    "title": "Sahara",
    "artist": "Astrix",
    "film": "Iconic Anthems",
    "isGoa": true,
    "youtubeId": "5_ehdwsv5BI"
  },
  {
    "title": "Heavyweight",
    "artist": "Infected Mushroom",
    "film": "Iconic Anthems",
    "isGoa": true,
    "youtubeId": "h4YvkZeLrjs"
  },
  {
    "title": "Bungee Jump",
    "artist": "Captain Hook & Astrix",
    "film": "Iconic Anthems",
    "isGoa": true,
    "youtubeId": "tIGH8nWZXOQ"
  },
  {
    "title": "Floor-Essence",
    "artist": "Man With No Name",
    "film": "Golden Era & Acid",
    "isGoa": true,
    "youtubeId": "S6DiMtRD70Y"
  },
  {
    "title": "Let’s Turn On",
    "artist": "Doof",
    "film": "Golden Era & Acid",
    "isGoa": true,
    "youtubeId": "_IUtwc1SzTA"
  },
  {
    "title": "Geomantik",
    "artist": "Prana",
    "film": "Golden Era & Acid",
    "isGoa": true,
    "youtubeId": "MFd7_zTci_g"
  },
  {
    "title": "Liquid Sun",
    "artist": "Astral Projection",
    "film": "Golden Era & Acid",
    "isGoa": true,
    "youtubeId": "0KYdyzYuKAg"
  },
  {
    "title": "Der Damm",
    "artist": "Hallucinogen",
    "film": "Golden Era & Acid",
    "isGoa": true,
    "youtubeId": "-v2WPraVyhA"
  },
  {
    "title": "Canopy",
    "artist": "Total Eclipse",
    "film": "Golden Era & Acid",
    "isGoa": true,
    "youtubeId": "oNH3akWXaV8"
  },
  {
    "title": "Alcyone",
    "artist": "Pleiadians",
    "film": "Golden Era & Acid",
    "isGoa": true,
    "youtubeId": "FYAGSQIt1jY"
  },
  {
    "title": "Sugar Rush",
    "artist": "Man With No Name",
    "film": "Golden Era & Acid",
    "isGoa": true,
    "youtubeId": "-neNVbU2KpY"
  },
  {
    "title": "High Energy Protons",
    "artist": "Juno Reactor",
    "film": "Golden Era & Acid",
    "isGoa": true,
    "youtubeId": "HeD-hpqaDfk"
  },
  {
    "title": "Searching For UFOs",
    "artist": "Astral Projection",
    "film": "Golden Era & Acid",
    "isGoa": true,
    "youtubeId": "rcs31PkDWGM"
  },
  {
    "title": "Cor",
    "artist": "Green Nuns of the Revolution",
    "film": "Golden Era & Acid",
    "isGoa": true,
    "youtubeId": "rGsouPH0ayQ"
  },
  {
    "title": "Dansul Ielelor",
    "artist": "E-Mantra",
    "film": "Golden Era & Acid",
    "isGoa": true,
    "youtubeId": "zHx-N0EOh6Y"
  },
  {
    "title": "A Bit of Goa",
    "artist": "Koxbox",
    "film": "Golden Era & Acid",
    "isGoa": true,
    "youtubeId": "9M5ShTEE-UU"
  },
  {
    "title": "Cannabanoid",
    "artist": "Cosmosis",
    "film": "Golden Era & Acid",
    "isGoa": true,
    "youtubeId": "ilWeV9isl5o"
  },
  {
    "title": "X-File",
    "artist": "Chakra & Edi Mis",
    "film": "Golden Era & Acid",
    "isGoa": true,
    "youtubeId": "scOydQ2QWU4"
  },
  {
    "title": "Deep Space 5D",
    "artist": "Dimension 5",
    "film": "Golden Era & Acid",
    "isGoa": true,
    "youtubeId": "ixP7HP2hwt0"
  },
  {
    "title": "Trash Shiva",
    "artist": "Transwave",
    "film": "Golden Era & Acid",
    "isGoa": true,
    "youtubeId": "VyiPWKJh4kg"
  },
  {
    "title": "Epilogue",
    "artist": "Asia 2001",
    "film": "Golden Era & Acid",
    "isGoa": true,
    "youtubeId": "0mVFOMSY4nI"
  },
  {
    "title": "Magnetic Activity",
    "artist": "MFG (Message From God)",
    "film": "Golden Era & Acid",
    "isGoa": true,
    "youtubeId": "KXl730YLodc"
  },
  {
    "title": "Trip Tonite",
    "artist": "Etnica",
    "film": "Golden Era & Acid",
    "isGoa": true,
    "youtubeId": "UEkeptXz63A"
  },
  {
    "title": "Camel",
    "artist": "Indoor",
    "film": "Golden Era & Acid",
    "isGoa": true,
    "youtubeId": "cNlPs0v6b34"
  },
  {
    "title": "Kreak",
    "artist": "Space Cat",
    "film": "Golden Era & Acid",
    "isGoa": true,
    "youtubeId": "P9VlJ4VOF84"
  },
  {
    "title": "Bust a Move",
    "artist": "Infected Mushroom",
    "film": "Golden Era & Acid",
    "isGoa": true,
    "youtubeId": "J4mulG7cglQ"
  },
  {
    "title": "Divine Moments of Truth (D.M.T.)",
    "artist": "Shpongle",
    "film": "Golden Era & Acid",
    "isGoa": true,
    "youtubeId": "8CXhYAiPIZY"
  },
  {
    "title": "Forest of the Saints (Live Ritual Edit)",
    "artist": "Goa Gil",
    "film": "Golden Era & Acid",
    "isGoa": true,
    "youtubeId": "6Af0I6BVQBo"
  },
  {
    "title": "Shankara",
    "artist": "Shanti People",
    "film": "Vedic & Tribal",
    "isGoa": true,
    "youtubeId": "iiTeiOdAJSQ"
  },
  {
    "title": "Karma",
    "artist": "Vini Vici & Reality Test ft. Shanti People",
    "film": "Vedic & Tribal",
    "isGoa": true,
    "youtubeId": "Z_7JKe7Idao"
  },
  {
    "title": "Kabalah",
    "artist": "Blastoyz & Reality Test",
    "film": "Vedic & Tribal",
    "isGoa": true,
    "youtubeId": "83q0276ovCQ"
  },
  {
    "title": "Sem Chão",
    "artist": "Mandragora",
    "film": "Vedic & Tribal",
    "isGoa": true,
    "youtubeId": "EL037NUroYY"
  },
  {
    "title": "1000 Sterne",
    "artist": "Neelix",
    "film": "Vedic & Tribal",
    "isGoa": true,
    "youtubeId": "wAeml8gaHoI"
  },
  {
    "title": "Artcore",
    "artist": "Astrix",
    "film": "Vedic & Tribal",
    "isGoa": true,
    "youtubeId": "pzS3ipQIQDk"
  },
  {
    "title": "Wake and Bake",
    "artist": "Avalon & Laughing Buddha",
    "film": "Vedic & Tribal",
    "isGoa": true,
    "youtubeId": "mZgQgcxLLd4"
  },
  {
    "title": "Shankara",
    "artist": "Hilight Tribe",
    "film": "Vedic & Tribal",
    "isGoa": true,
    "youtubeId": "hLEn0yQFtrs"
  },
  {
    "title": "Key to the Universe",
    "artist": "Sesto Sento",
    "film": "Vedic & Tribal",
    "isGoa": true,
    "youtubeId": "y1vKzg7FSAc"
  },
  {
    "title": "Stomping Ground",
    "artist": "Ace Ventura",
    "film": "Vedic & Tribal",
    "isGoa": true,
    "youtubeId": "SBX9gyNbnLU"
  },
  {
    "title": "Adhana",
    "artist": "Vini Vici & Astrix",
    "film": "Vedic & Tribal",
    "isGoa": true,
    "youtubeId": "Aooy7iw-7cY"
  },
  {
    "title": "Cherokee",
    "artist": "Neelix",
    "film": "Vedic & Tribal",
    "isGoa": true,
    "youtubeId": "U0g0GaZtAEo"
  },
  {
    "title": "Hit and Run",
    "artist": "Skazi",
    "film": "Vedic & Tribal",
    "isGoa": true,
    "youtubeId": "FvHjjhnslNg"
  },
  {
    "title": "Mama India",
    "artist": "Technical Hitch",
    "film": "Vedic & Tribal",
    "isGoa": true,
    "youtubeId": "xEsIkXk5hmo"
  },
  {
    "title": "A Journey in Trance",
    "artist": "Talamasca",
    "film": "Vedic & Tribal",
    "isGoa": true,
    "youtubeId": "XPDzEyORJVI"
  },
  {
    "title": "Life Frequency",
    "artist": "Liquid Soul & Outsiders",
    "film": "Vedic & Tribal",
    "isGoa": true,
    "youtubeId": "X-RyuuXhyiU"
  },
  {
    "title": "Awake",
    "artist": "Astrix & Tristan",
    "film": "Vedic & Tribal",
    "isGoa": true,
    "youtubeId": "zAm1OJ8Lvgw"
  },
  {
    "title": "Rumble on the Jungle",
    "artist": "Tristan & Avalon",
    "film": "Vedic & Tribal",
    "isGoa": true,
    "youtubeId": "LE_FTeHBLrA"
  },
  {
    "title": "Step Aside",
    "artist": "Blastoyz",
    "film": "Vedic & Tribal",
    "isGoa": true,
    "youtubeId": "BaE5gLZ83xs"
  },
  {
    "title": "Spitfire",
    "artist": "Infected Mushroom",
    "film": "Vedic & Tribal",
    "isGoa": true,
    "youtubeId": "U4XOZeJb2ZQ"
  },
  {
    "title": "The Tree",
    "artist": "Vini Vici & WHITENO1SE",
    "film": "Vedic & Tribal",
    "isGoa": true,
    "youtubeId": "0lBjcaMokvo"
  },
  {
    "title": "God Is God",
    "artist": "Juno Reactor",
    "film": "Vedic & Tribal",
    "isGoa": true,
    "youtubeId": "v8LY2VgiikE"
  },
  {
    "title": "Raya",
    "artist": "Outsiders & Volcano",
    "film": "Vedic & Tribal",
    "isGoa": true,
    "youtubeId": "rP7YmmZuhD4"
  },
  {
    "title": "The Alien Jams",
    "artist": "Ajja & Cosmosis",
    "film": "Vedic & Tribal",
    "isGoa": true,
    "youtubeId": "R3T_9NdqlsI"
  },
  {
    "title": "Prime Time",
    "artist": "Ace Ventura & Symbolic",
    "film": "Vedic & Tribal",
    "isGoa": true,
    "youtubeId": "2BHnthbpk2I"
  },
  {
    "title": "We Are Intelligent",
    "artist": "Laughing Buddha",
    "film": "Twilight Underground",
    "isGoa": true,
    "youtubeId": "MCX4YqcW7kU"
  },
  {
    "title": "Deep Mind",
    "artist": "Tristan",
    "film": "Twilight Underground",
    "isGoa": true,
    "youtubeId": "2SF_ejQkVJg"
  },
  {
    "title": "Tumbleweed",
    "artist": "Dickster & Burn in Noise",
    "film": "Twilight Underground",
    "isGoa": true,
    "youtubeId": "a6H7hcIjuVU"
  },
  {
    "title": "Duck Fuzz",
    "artist": "Fungus Funk",
    "film": "Twilight Underground",
    "isGoa": true,
    "youtubeId": "gIZg37e2cpo"
  },
  {
    "title": "The Mushroom Network",
    "artist": "Earthling & Virtual Light",
    "film": "Twilight Underground",
    "isGoa": true,
    "youtubeId": "1ZeIfg0bT6c"
  },
  {
    "title": "Navigate",
    "artist": "Filteria",
    "film": "Twilight Underground",
    "isGoa": true,
    "youtubeId": "-vxGiH1wSUU"
  },
  {
    "title": "Cyclone in Your Heart",
    "artist": "Crossing Mind",
    "film": "Twilight Underground",
    "isGoa": true,
    "youtubeId": "4RA-q6xMjMo"
  },
  {
    "title": "Just Another Jam",
    "artist": "Sonic Species",
    "film": "Twilight Underground",
    "isGoa": true,
    "youtubeId": "GAjw9ShIsEk"
  },
  {
    "title": "Source of Light",
    "artist": "Braincell",
    "film": "Twilight Underground",
    "isGoa": true,
    "youtubeId": "n4HPc8757qo"
  },
  {
    "title": "Vuuv Festival Anthem",
    "artist": "Burn in Noise",
    "film": "Twilight Underground",
    "isGoa": true,
    "youtubeId": "NwRUREdM1mg"
  },
  {
    "title": "Orange Sunshine",
    "artist": "Hypnocoustics",
    "film": "Twilight Underground",
    "isGoa": true,
    "youtubeId": "IWanz09wk2c"
  },
  {
    "title": "Origin",
    "artist": "Captain Hook",
    "film": "Twilight Underground",
    "isGoa": true,
    "youtubeId": "wfEUjkhqXeE"
  },
  {
    "title": "Cyber Space",
    "artist": "Symbolic & Waio",
    "film": "Twilight Underground",
    "isGoa": true,
    "youtubeId": "hggG_TARAjs"
  },
  {
    "title": "Floating Waves",
    "artist": "Protonica",
    "film": "Twilight Underground",
    "isGoa": true,
    "youtubeId": "jWwKQVJexP0"
  },
  {
    "title": "Dragonfly",
    "artist": "Zen Mechanics & Egorythmia",
    "film": "Twilight Underground",
    "isGoa": true,
    "youtubeId": "DufGGaNC3sY"
  },
  {
    "title": "The Seed",
    "artist": "Ritmo & Sphera",
    "film": "Twilight Underground",
    "isGoa": true,
    "youtubeId": "N2y948aWD2c"
  },
  {
    "title": "Salvia Divinorum",
    "artist": "E-Clip",
    "film": "Twilight Underground",
    "isGoa": true,
    "youtubeId": "kwZq4yaaCfE"
  },
  {
    "title": "Flying Objects",
    "artist": "Faders",
    "film": "Twilight Underground",
    "isGoa": true,
    "youtubeId": "gtk2wpmtcvc"
  },
  {
    "title": "Mantra",
    "artist": "Electric Universe",
    "film": "Twilight Underground",
    "isGoa": true,
    "youtubeId": "Oo0o84-TJTU"
  },
  {
    "title": "Million Little Pieces",
    "artist": "Freedom Fighters & Ryanosaurus",
    "film": "Twilight Underground",
    "isGoa": true,
    "youtubeId": "Ng317420V3k"
  },
  {
    "title": "Whispering Gallery",
    "artist": "Arjuna",
    "film": "Twilight Underground",
    "isGoa": true,
    "youtubeId": "MBSfZ9O96fc"
  },
  {
    "title": "Rings of Fairy",
    "artist": "Atriohm",
    "film": "Twilight Underground",
    "isGoa": true,
    "youtubeId": "ZCI1rzPp5J4"
  },
  {
    "title": "Acid Country",
    "artist": "Dust",
    "film": "Twilight Underground",
    "isGoa": true,
    "youtubeId": "okYLtLtGXtA"
  },
  {
    "title": "Ritual of the Elements",
    "artist": "Parasense",
    "film": "Twilight Underground",
    "isGoa": true,
    "youtubeId": "AxjFWf2IMDo"
  },
  {
    "title": "Spirit of the Forest",
    "artist": "Kindzadza",
    "film": "Twilight Underground",
    "isGoa": true,
    "youtubeId": "t-D9Iu2JnTY"
  }
];

const listRemix: any[] = [
  {
    "title": "Mera Yaar x Alif Allah",
    "artist": "Extended Sufi House Mix (DJ Abhii Edit)",
    "film": "Remix",
    "isRemix": true,
    "youtubeId": "ycS5PagXvhQ"
  },
  {
    "title": "Mera Yaar x Losing It",
    "artist": "Peak-Time Tech House Club Banger",
    "film": "Remix",
    "isRemix": true,
    "youtubeId": "u31thuMehjM"
  },
  {
    "title": "Mera Yaar x Drugs From Amsterdam",
    "artist": "Minimal BollyTech Edit",
    "film": "Remix",
    "isRemix": true,
    "youtubeId": "lOtl4W_ZCu4"
  },
  {
    "title": "Lutt Le Gaya x Voices In My Head x Aria (Edit)",
    "artist": "AFTERLYF / FLIPSYD",
    "film": "Bollytech Flips",
    "isRemix": true,
    "youtubeId": "MSwl5ZCHryk"
  },
  {
    "title": "Zara Zara x Voices In My Head / Age of Love (Mix)",
    "artist": "Dark Techno",
    "film": "Bollytech Flips",
    "isRemix": true,
    "youtubeId": "IyJjKAGV1dk"
  },
  {
    "title": "Pehle Bhi Main (Animal) x Heartless (Flip)",
    "artist": "Melodic Techno",
    "film": "Bollytech Flips",
    "isRemix": true
  },
  {
    "title": "Dilbar x The Age of Love (Acid Techno Bootleg)",
    "artist": "Enrico Sangiuliano",
    "film": "Bollytech Flips",
    "isRemix": true
  },
  {
    "title": "Aao Milo Chalein x Syren / Eternity (Bollytech Edit)",
    "artist": "Anyma",
    "film": "Bollytech Flips",
    "isRemix": true
  },
  {
    "title": "Kabira (Festival Afterhours Flip)",
    "artist": "Fred again.. (Delilah)",
    "film": "Bollytech Flips",
    "isRemix": true
  },
  {
    "title": "Besharam Rang (Afro / Peak-Time Techno Edit)",
    "artist": "Mwaki",
    "film": "Bollytech Flips",
    "isRemix": true,
    "youtubeId": "_fb72ArcgBk"
  },
  {
    "title": "Tu Tu Hai Wahi (Acid Techno Edit)",
    "artist": "How Deep Is Your Love",
    "film": "Bollytech Flips",
    "isRemix": true,
    "youtubeId": "gHHzamssfT8"
  },
  {
    "title": "Ghungroo x Piece of Your Heart (Peak-Time Mashup)",
    "artist": "Meduza",
    "film": "Bollytech Flips",
    "isRemix": true,
    "youtubeId": "NtAvc3TNkPY"
  },
  {
    "title": "Raabta x Breathe (Melodic Techno Mashup)",
    "artist": "CamelPhat",
    "film": "Bollytech Flips",
    "isRemix": true,
    "youtubeId": "0MPFz6o_u14"
  },
  {
    "title": "Ghar Aaja Pardesi x Innerbloom (Dil Se Rave Edit)",
    "artist": "RÜFÜS DU SOL",
    "film": "Bollytech Flips",
    "isRemix": true,
    "youtubeId": "p7kCKn9283k"
  },
  {
    "title": "Main Hoon Don x Simulation (Techno Mashup)",
    "artist": "Little Noise",
    "film": "Bollytech Flips",
    "isRemix": true,
    "youtubeId": "sed86UEe_x0"
  },
  {
    "title": "Ae Dil Hai Mushkil x Spaceman (Techno Edit)",
    "artist": "Hardwell",
    "film": "Bollytech Flips",
    "isRemix": true,
    "youtubeId": "kIgvQxBpbA0"
  },
  {
    "title": "Satrangi Re (Dil Se) x Matan Caspi - Agadir (Edit)",
    "artist": "DJ NYK",
    "film": "Bollytech Flips",
    "isRemix": true
  },
  {
    "title": "Akhiyaan Gulaab x Safari / Melodic Techno (Remix)",
    "artist": "DJ NYK",
    "film": "Bollytech Flips",
    "isRemix": true,
    "youtubeId": "sWMhhboqwMc"
  },
  {
    "title": "Woh Lamhe x State of Mind (Bigroom Techno Mix)",
    "artist": "Maddix",
    "film": "Bollytech Flips",
    "isRemix": true
  },
  {
    "title": "Aaja Nachle x Be The One (Hard Techno Edit)",
    "artist": "Eli Brown",
    "film": "Bollytech Flips",
    "isRemix": true
  },
  {
    "title": "Biba x Underground Melodic Stabs (Mashup)",
    "artist": "BluPrint",
    "film": "Bollytech Flips",
    "isRemix": true
  },
  {
    "title": "Deewani Mastani x Consciousness (DEBB Melodic Techno)",
    "artist": "Anyma",
    "film": "Bollytech Flips",
    "isRemix": true,
    "youtubeId": "U3O23ctaRCM"
  },
  {
    "title": "Dum Maro Dum x Progressive Techno Stabs (Remix)",
    "artist": "Dj Ujjwal",
    "film": "Bollytech Flips",
    "isRemix": true,
    "youtubeId": "DsQC-IwETro"
  },
  {
    "title": "Chaar Bottle Vodka x Stephanie",
    "artist": "Peak-Time Edit",
    "film": "Bollytech Flips",
    "isRemix": true,
    "youtubeId": "NKqlFpHzPBY"
  },
  {
    "title": "Nadaan Parinde x Astral (Melodic Techno Edit)",
    "artist": "Tale of Us",
    "film": "Bollytech Flips",
    "isRemix": true
  },
  {
    "title": "Tujhe Bhula Diya (Techno Mashup)",
    "artist": "Beat Of The Drum",
    "film": "Bollytech Flips",
    "isRemix": true,
    "youtubeId": "ulY5VbAwcIo"
  },
  {
    "title": "Uff Teri Ada x Birds Of A Feather / Techno Stabs (Edit)",
    "artist": "DJ Kawal",
    "film": "Bollytech Flips",
    "isRemix": true
  },
  {
    "title": "Where's The Party Tonight (Techno Bootleg)",
    "artist": "Feedback",
    "film": "Bollytech Flips",
    "isRemix": true
  },
  {
    "title": "Zara Zara (RHTDM) (Psytrance Remix)",
    "artist": "Dee & Matz",
    "film": "Psytrance & Festival",
    "isRemix": true,
    "youtubeId": "LkOZTTFPsMU"
  },
  {
    "title": "Silsila Yeh Chahat Ka (Psy Edit)",
    "artist": "TrapAsur / ZOINT",
    "film": "Psytrance & Festival",
    "isRemix": true,
    "youtubeId": "NQDlHbS5ya8"
  },
  {
    "title": "Choli Ke Peeche x Great Spirit (Goa Club Mashup)",
    "artist": "Vini Vici",
    "film": "Psytrance & Festival",
    "isRemix": true,
    "youtubeId": "V2H6z2XJnqw"
  },
  {
    "title": "Manali Trance (Forest Flip)",
    "artist": "Heavy Psycore",
    "film": "Psytrance & Festival",
    "isRemix": true
  },
  {
    "title": "Hai Rama Ye Kya Hua (Psy Edit)",
    "artist": "Beats By Nakai",
    "film": "Psytrance & Festival",
    "isRemix": true,
    "youtubeId": "a5F_AywRQ7Q"
  },
  {
    "title": "Bolo Har Har Har (Shiva)",
    "artist": "High-BPM Psy Remix",
    "film": "Psytrance & Festival",
    "isRemix": true,
    "youtubeId": "nMjYG4uayM4"
  },
  {
    "title": "Aankh Marey x Deep Jungle Walk (Psy Mashup)",
    "artist": "Astrix",
    "film": "Psytrance & Festival",
    "isRemix": true,
    "youtubeId": "gyIpuVYXO9Y"
  },
  {
    "title": "Tip Tip Barsa Paani (Club Edit)",
    "artist": "Offbeat Psy Bass",
    "film": "Psytrance & Festival",
    "isRemix": true,
    "youtubeId": "Yu5NzVb87rk"
  },
  {
    "title": "Dua (Shanghai) (Dark Trance Mix)",
    "artist": "DJ Lemon",
    "film": "Psytrance & Festival",
    "isRemix": true,
    "youtubeId": "8kivtIa8VVw"
  },
  {
    "title": "Ganesha / Shiva Tandava Stotram x Psytrance Drops",
    "artist": "Shanti People Style",
    "film": "Psytrance & Festival",
    "isRemix": true,
    "youtubeId": "TzM0OgGHJLg"
  },
  {
    "title": "Beedi Jalaile x Free Tibet (Goa Rave Bootleg)",
    "artist": "Vini Vici",
    "film": "Psytrance & Festival",
    "isRemix": true
  },
  {
    "title": "Dhoom Machale x Narco (Hardstyle/Psy Edit)",
    "artist": "Timmy Trumpet",
    "film": "Psytrance & Festival",
    "isRemix": true,
    "youtubeId": "X3pfwOznsl0"
  },
  {
    "title": "Mast Magan x Parvati Valley (Psytrance Flip)",
    "artist": "Blastoyz",
    "film": "Psytrance & Festival",
    "isRemix": true
  },
  {
    "title": "Jiya Jale x Shankara (Tribal Psy Mashup)",
    "artist": "Hilight Tribe",
    "film": "Psytrance & Festival",
    "isRemix": true
  },
  {
    "title": "Bumbro Bumbro x Sahara (Goa Trance Edit)",
    "artist": "Astrix",
    "film": "Psytrance & Festival",
    "isRemix": true
  },
  {
    "title": "Pardesiya x Sem Chão (Alien Psy Edit)",
    "artist": "Mandragora",
    "film": "Psytrance & Festival",
    "isRemix": true
  },
  {
    "title": "Chaiyya Chaiyya x Chakra (Psy Festival Bootleg)",
    "artist": "Vini Vici",
    "film": "Psytrance & Festival",
    "isRemix": true,
    "youtubeId": "W1hlk1DjLLU"
  },
  {
    "title": "Deva Deva (Brahmastra) x Kabalah (Uplifting Psy)",
    "artist": "Reality Test",
    "film": "Psytrance & Festival",
    "isRemix": true
  },
  {
    "title": "Marjaani Marjaani x Heavyweight (Psy Edit)",
    "artist": "Infected Mushroom",
    "film": "Psytrance & Festival",
    "isRemix": true
  },
  {
    "title": "Bhool Bhulaiyaa x 1000 Sterne (Progressive Psy)",
    "artist": "Neelix",
    "film": "Psytrance & Festival",
    "isRemix": true
  },
  {
    "title": "Babuji Zara Dheere Chalo x Ayahuasca (Psy Mix)",
    "artist": "1200 Micrograms",
    "film": "Psytrance & Festival",
    "isRemix": true
  },
  {
    "title": "Aahun Aahun x Key to the Universe (Psytrance Edit)",
    "artist": "Sesto Sento",
    "film": "Psytrance & Festival",
    "isRemix": true
  },
  {
    "title": "Dhan Te Nan x Hit and Run (Guitar Psy Mix)",
    "artist": "Skazi",
    "film": "Psytrance & Festival",
    "isRemix": true
  },
  {
    "title": "Kajra Re x Mahadeva (Goa Trance Bootleg)",
    "artist": "Astral Projection",
    "film": "Psytrance & Festival",
    "isRemix": true
  },
  {
    "title": "Namaste Salaam x Mama India (High-BPM Psy)",
    "artist": "Technical Hitch",
    "film": "Psytrance & Festival",
    "isRemix": true
  },
  {
    "title": "Elevated (Shubh) x ACID / Bigroom Techno",
    "artist": "Maddix",
    "film": "Punjabi x Techno",
    "isRemix": true,
    "youtubeId": "-ch2zjaWHOM"
  },
  {
    "title": "Cheques (Shubh) x Be The One (Hard Techno Edit)",
    "artist": "Eli Brown",
    "film": "Punjabi x Techno",
    "isRemix": true,
    "youtubeId": "5JrX4YFppxQ"
  },
  {
    "title": "Baller (Shubh) x Doppler (Dark Club Edit)",
    "artist": "Charlotte de Witte",
    "film": "Punjabi x Techno",
    "isRemix": true
  },
  {
    "title": "Mi Amor x Kronos (Future Rave / Techno Flip)",
    "artist": "Hi-LO",
    "film": "Punjabi x Techno",
    "isRemix": true
  },
  {
    "title": "Brown Munde (AP Dhillon) (Festival Bootleg)",
    "artist": "Hardwell & Maddix",
    "film": "Punjabi x Techno",
    "isRemix": true,
    "youtubeId": "acGrsySsJuE"
  },
  {
    "title": "Softly (Karan Aujla) x Glue (Melodic Techno Edit)",
    "artist": "Fred again.. / Bicep",
    "film": "Punjabi x Techno",
    "isRemix": true,
    "youtubeId": "Y2Tb6yWsa3Q"
  },
  {
    "title": "Excuses (AP Dhillon) x Consciousness (Techno Flip)",
    "artist": "Anyma",
    "film": "Punjabi x Techno",
    "isRemix": true
  },
  {
    "title": "Tauba Tauba (Bootleg)",
    "artist": "Techno Stabs",
    "film": "Punjabi x Techno",
    "isRemix": true,
    "youtubeId": "AKd-3Asq60M"
  },
  {
    "title": "Dope Shope (Techno Edit)",
    "artist": "Body Move",
    "film": "Punjabi x Techno",
    "isRemix": true,
    "youtubeId": "rT0lgxmkPQ4"
  },
  {
    "title": "White Brown Black (Festival Techno Mashup)",
    "artist": "Light It Up",
    "film": "Punjabi x Techno",
    "isRemix": true,
    "youtubeId": "r2LpOUwca94"
  },
  {
    "title": "Obsessed (Riar Saab) (Techno Remix)",
    "artist": "Adam Port",
    "film": "Punjabi x Techno",
    "isRemix": true,
    "youtubeId": "KWqpaPCDp6Q"
  },
  {
    "title": "Arjan Vailly (Animal) x Heavy Hardstyle",
    "artist": "Hard Techno Stabs",
    "film": "Punjabi x Techno",
    "isRemix": true
  },
  {
    "title": "Panjabi MC - Mundian To Bach Ke (Edit)",
    "artist": "CAVALLI / Charlotte de Witte",
    "film": "Punjabi x Techno",
    "isRemix": true
  },
  {
    "title": "Jogi (Panjabi MC) (Peak-Time Techno Edit)",
    "artist": "Mike Prado",
    "film": "Punjabi x Techno",
    "isRemix": true,
    "youtubeId": "y9GHO-UND1s"
  },
  {
    "title": "True Stories (AP Dhillon) x Hell on Earth (Melodic Flip)",
    "artist": "KAS:ST",
    "film": "Punjabi x Techno",
    "isRemix": true
  },
  {
    "title": "Suniyan Suniyan x Skyhunter / Melodic Techno (Edit)",
    "artist": "DJ Kawal",
    "film": "Punjabi x Techno",
    "isRemix": true
  },
  {
    "title": "Gabhru (Karan Aujla) (Bootleg)",
    "artist": "Techno Driver",
    "film": "Punjabi x Techno",
    "isRemix": true,
    "youtubeId": "-Uvk0NWQ8Lc"
  },
  {
    "title": "With You (Afterhours Melodic Edit)",
    "artist": "AP Dhillon",
    "film": "Punjabi x Techno",
    "isRemix": true,
    "youtubeId": "-wFTG_f-W4c"
  },
  {
    "title": "Laung Gawacha (Techno / Afro House Edit)",
    "artist": "H33T",
    "film": "Punjabi x Techno",
    "isRemix": true,
    "youtubeId": "ekyEQNT_XEI"
  },
  {
    "title": "Jatt Don't Care (Peak-Time Mashup)",
    "artist": "Work",
    "film": "Punjabi x Techno",
    "isRemix": true
  },
  {
    "title": "No Love (Shubh) x Move Your Body (Acid Techno)",
    "artist": "Reinier Zonneveld",
    "film": "Punjabi x Techno",
    "isRemix": true
  },
  {
    "title": "Players (Badshah & Karan Aujla) x Today (Bigroom Techno)",
    "artist": "Maddix",
    "film": "Punjabi x Techno",
    "isRemix": true,
    "youtubeId": "r6FgpR-9YVc"
  },
  {
    "title": "King Shit (Shubh) x The Door (Hard Techno Edit)",
    "artist": "Space 92",
    "film": "Punjabi x Techno",
    "isRemix": true
  },
  {
    "title": "Insane (AP Dhillon) x Crawler (Dark Techno Bootleg)",
    "artist": "Joyhauser",
    "film": "Punjabi x Techno",
    "isRemix": true
  },
  {
    "title": "52 Bars (Karan Aujla) x Future Dust (Peak-Time)",
    "artist": "Enrico Sangiuliano",
    "film": "Punjabi x Techno",
    "isRemix": true
  },
  {
    "title": "Chura Liya Hai Tumne x Spaceman (Festival Drop)",
    "artist": "Hardwell",
    "film": "Nostalgic Re-Flips",
    "isRemix": true,
    "youtubeId": "ppy-fgbPn2s"
  },
  {
    "title": "Tujhe Dekha Toh Yeh Jaana Sanam x Opus (Progressive Edit)",
    "artist": "Eric Prydz",
    "film": "Nostalgic Re-Flips",
    "isRemix": true
  },
  {
    "title": "Kaho Naa Pyaar Hai x Where You Are (Club Bootleg)",
    "artist": "John Summit",
    "film": "Nostalgic Re-Flips",
    "isRemix": true,
    "youtubeId": "9UaX96j9_uw"
  },
  {
    "title": "Tum Hi Ho x Adagio for Strings (Euphoric Trance Edit)",
    "artist": "Tiësto",
    "film": "Nostalgic Re-Flips",
    "isRemix": true,
    "youtubeId": "wD0Mm6WIcYs"
  },
  {
    "title": "Ya Ali (Gangster) x Tiger Lili (Sufi Melodic Techno)",
    "artist": "Alar",
    "film": "Nostalgic Re-Flips",
    "isRemix": true,
    "youtubeId": "XuxLs3p58mw"
  },
  {
    "title": "Akhiyaan Nu Rehn De x Seventh Day (Sufi Techno)",
    "artist": "Max & Dana",
    "film": "Nostalgic Re-Flips",
    "isRemix": true,
    "youtubeId": "Dt9mhc4Rr4Q"
  },
  {
    "title": "Karz Theme (2024 Reboot)",
    "artist": "Melodic Driving Bass",
    "film": "Nostalgic Re-Flips",
    "isRemix": true,
    "youtubeId": "Dt9mhc4Rr4Q"
  },
  {
    "title": "Aao Huzur x Hot Tub Time Machine (Deep Techno Mashup)",
    "artist": "AVIRA",
    "film": "Nostalgic Re-Flips",
    "isRemix": true,
    "youtubeId": "Dt9mhc4Rr4Q"
  },
  {
    "title": "Tere Bina (A.R. Rahman) (Melodic House/Techno)",
    "artist": "Cloudcage",
    "film": "Nostalgic Re-Flips",
    "isRemix": true,
    "youtubeId": "rQ5ccu4hvvo"
  },
  {
    "title": "Sajni Re x Euphoria Techno Stabs (Mashup)",
    "artist": "DJ NYK",
    "film": "Nostalgic Re-Flips",
    "isRemix": true
  },
  {
    "title": "Fanaa (A.R. Rahman) x Sixth Ocean Remix",
    "artist": "Deeper Purpose",
    "film": "Nostalgic Re-Flips",
    "isRemix": true,
    "youtubeId": "y14vtDqKqPw"
  },
  {
    "title": "Pardesiya (Param Sundari) (Melodic Techno Edit)",
    "artist": "Manee",
    "film": "Nostalgic Re-Flips",
    "isRemix": true,
    "youtubeId": "XRCBkt19hQA"
  },
  {
    "title": "Mere Khwabon Mein Jo Aaye x Fire Fire",
    "artist": "Kasango",
    "film": "Nostalgic Re-Flips",
    "isRemix": true,
    "youtubeId": "CuKl21RydoY"
  },
  {
    "title": "Kaho Na Kaho (Murder) (Edit)",
    "artist": "Arabic Melodic Techno",
    "film": "Nostalgic Re-Flips",
    "isRemix": true,
    "youtubeId": "FuxEantalfE"
  },
  {
    "title": "Aaj Ki Raat (Stree 2) x Hard Techno Stabs (Remix)",
    "artist": "DJ NYK",
    "film": "Nostalgic Re-Flips",
    "isRemix": true
  },
  {
    "title": "Aayi Nai (Stree 2) (Edit)",
    "artist": "Peak-Time Bounce",
    "film": "Nostalgic Re-Flips",
    "isRemix": true,
    "youtubeId": "eUwS1KJhQAc"
  },
  {
    "title": "Saat Samundar Paar x Techno Edit",
    "artist": "Masai / Drumcode",
    "film": "Nostalgic Re-Flips",
    "isRemix": true
  },
  {
    "title": "Kay Sera Sera (Techno Mashup)",
    "artist": "Meet Her At The Love Parade",
    "film": "Nostalgic Re-Flips",
    "isRemix": true,
    "youtubeId": "GOYAGCJLZ9I"
  },
  {
    "title": "Sexy Lady (Edit)",
    "artist": "Sweet Nothing / Hardwell",
    "film": "Nostalgic Re-Flips",
    "isRemix": true,
    "youtubeId": "oPqsK_RfCQA"
  },
  {
    "title": "Shararat (Peak-Time Bollytech)",
    "artist": "Caramelle",
    "film": "Nostalgic Re-Flips",
    "isRemix": true
  },
  {
    "title": "Slowly Slowly (Techno Edit)",
    "artist": "Jungle / Acid",
    "film": "Nostalgic Re-Flips",
    "isRemix": true,
    "youtubeId": "xw3C03Ba8Dk"
  },
  {
    "title": "Sadqay (Melodic Techno Bootleg)",
    "artist": "Desires",
    "film": "Nostalgic Re-Flips",
    "isRemix": true,
    "youtubeId": "Hf244LCkkLc"
  },
  {
    "title": "Lucky Boy (Dark Techno Flip)",
    "artist": "Portrait",
    "film": "Nostalgic Re-Flips",
    "isRemix": true,
    "youtubeId": "xU6LYReBjQM"
  },
  {
    "title": "Humma Humma x Moth To A Flame (Club Bootleg)",
    "artist": "Swedish House Mafia",
    "film": "Nostalgic Re-Flips",
    "isRemix": true
  },
  {
    "title": "Suraj Hua Maddham x Return to Oz (Melodic Afterhours Mix)",
    "artist": "ARTBAT",
    "film": "Nostalgic Re-Flips",
    "isRemix": true
  },
  {
    "title": "Zara Sa (KK) x State of Mind (Acid Techno Edit)",
    "artist": "Maddix",
    "film": "Afterhours Bollytech",
    "isRemix": true
  },
  {
    "title": "Da Da Dasse x Syren (Mr Jammer Flip)",
    "artist": "Anyma",
    "film": "Afterhours Bollytech",
    "isRemix": true
  },
  {
    "title": "Aadat (Atif Aslam) x Sgadi Li Mi (Peak-Time Edit)",
    "artist": "Charlotte de Witte",
    "film": "Afterhours Bollytech",
    "isRemix": true,
    "youtubeId": "Myv3Z_I1_40"
  },
  {
    "title": "Mere Rashke Qamar x Mercury (Techno Mashup)",
    "artist": "Hi-LO & Space 92",
    "film": "Afterhours Bollytech",
    "isRemix": true
  },
  {
    "title": "Mitwa x Akkan (Bollytech Flip)",
    "artist": "Vikas J",
    "film": "Afterhours Bollytech",
    "isRemix": true,
    "youtubeId": "so3IPK4qegs"
  },
  {
    "title": "Karvaan x Out Of My Body (Techno Edit)",
    "artist": "Little Noise",
    "film": "Afterhours Bollytech",
    "isRemix": true,
    "youtubeId": "0t1jaJhPTw8"
  },
  {
    "title": "Yeh Tune Kya Kiya x Control (Dark Techno Bootleg)",
    "artist": "Joyhauser",
    "film": "Afterhours Bollytech",
    "isRemix": true
  },
  {
    "title": "Malang (Title Track) x Diamonds On My Mind (Techno Edit)",
    "artist": "Eli Brown",
    "film": "Afterhours Bollytech",
    "isRemix": true
  },
  {
    "title": "Char Baj Gaye (Peak-Time Bollytech)",
    "artist": "Feel The Vibe",
    "film": "Afterhours Bollytech",
    "isRemix": true,
    "youtubeId": "4VBUvzCyeJ4"
  },
  {
    "title": "Aaja Mahi (Hard Acid Flip)",
    "artist": "Ultimate Seduction",
    "film": "Afterhours Bollytech",
    "isRemix": true
  },
  {
    "title": "Dhun (Saiyaara) x Melodic Stabs (Melodic Techno)",
    "artist": "DJ NYK",
    "film": "Afterhours Bollytech",
    "isRemix": true
  },
  {
    "title": "Jiya Jale (Deep Techno Mashup)",
    "artist": "Killing Me",
    "film": "Afterhours Bollytech",
    "isRemix": true,
    "youtubeId": "rsfMmjZmoUQ"
  },
  {
    "title": "Barbaad (Debb Flip) x Sound Of Space",
    "artist": "Enrico Sangiuliano",
    "film": "Afterhours Bollytech",
    "isRemix": true
  },
  {
    "title": "Tera Mera Rishta Purana x Carnival of Souls (Bollytech Edit)",
    "artist": "Spektre",
    "film": "Afterhours Bollytech",
    "isRemix": true
  },
  {
    "title": "Chand Sifarish x Phobos (Mr Jammer Mashup)",
    "artist": "Space 92",
    "film": "Afterhours Bollytech",
    "isRemix": true
  },
  {
    "title": "Pardesi (Peak-Time Melodic Flip)",
    "artist": "Anchor Point",
    "film": "Afterhours Bollytech",
    "isRemix": true,
    "youtubeId": "YtwEgVDooGM"
  },
  {
    "title": "Ek Pal Ka Jeena x Horizon (Techno Bootleg)",
    "artist": "ARTBAT",
    "film": "Afterhours Bollytech",
    "isRemix": true,
    "youtubeId": "FF6TeQZbub0"
  },
  {
    "title": "Noorie x Drugs From Amsterdam (Tech House / Bollytech)",
    "artist": "Mau P",
    "film": "Afterhours Bollytech",
    "isRemix": true
  },
  {
    "title": "Naina (Crew) (Peak-Time Mashup)",
    "artist": "Club Can't Handle Me",
    "film": "Afterhours Bollytech",
    "isRemix": true
  },
  {
    "title": "Tere Liye (Prince) (Melodic Techno Flip)",
    "artist": "Snow Flakes",
    "film": "Afterhours Bollytech",
    "isRemix": true,
    "youtubeId": "8EIKpArIsqg"
  },
  {
    "title": "Tum Kya Jano x Rave (Hard Techno Edit)",
    "artist": "Reinier Zonneveld",
    "film": "Afterhours Bollytech",
    "isRemix": true
  },
  {
    "title": "Naughty Naughty x VTOPIA (Dark Club Edit)",
    "artist": "KAS:ST",
    "film": "Afterhours Bollytech",
    "isRemix": true
  },
  {
    "title": "Pyaar Zindagi Hai x Hidden T (Acid Edit)",
    "artist": "Enrico Sangiuliano",
    "film": "Afterhours Bollytech",
    "isRemix": true
  },
  {
    "title": "Heera Raanja (Bollytech Flip)",
    "artist": "Let The Music Play",
    "film": "Afterhours Bollytech",
    "isRemix": true,
    "youtubeId": "pxrZubvyfqE"
  },
  {
    "title": "Doobey (Gehraiyaan) x Explore Your Future (Melodic Techno)",
    "artist": "Anyma",
    "film": "Afterhours Bollytech",
    "isRemix": true
  },
  {
    "title": "Choli Ke Peeche (Psy-Bolly Flip)",
    "artist": "Mr Jammer",
    "film": "Psytrance & Forest",
    "isRemix": true,
    "youtubeId": "rchXKQ8jZ8Q"
  },
  {
    "title": "Aigiri Nandini x Adhana (High-BPM Psy Stomper)",
    "artist": "Vini Vici",
    "film": "Psytrance & Forest",
    "isRemix": true
  },
  {
    "title": "Rabba Rabba (Aks) x Shiva's India (Psy Bootleg)",
    "artist": "1200 Micrograms",
    "film": "Psytrance & Forest",
    "isRemix": true
  },
  {
    "title": "Namo Namo (Kedarnath) x Mandala (Vedic Psy Mix)",
    "artist": "Blastoyz",
    "film": "Psytrance & Forest",
    "isRemix": true
  },
  {
    "title": "Jugni Ji x Poison (Goa Trance Flip)",
    "artist": "Astrix",
    "film": "Psytrance & Forest",
    "isRemix": true
  },
  {
    "title": "Bulleya x Cydonia (Progressive Psy Edit)",
    "artist": "Liquid Soul",
    "film": "Psytrance & Forest",
    "isRemix": true
  },
  {
    "title": "Aafaton Ke Parinde (Darkpsy Mashup)",
    "artist": "Technical Hitch",
    "film": "Psytrance & Forest",
    "isRemix": true
  },
  {
    "title": "Shaitan Ka Saala x Bang Bang (Bounce Psy Edit)",
    "artist": "Neelix",
    "film": "Psytrance & Forest",
    "isRemix": true
  },
  {
    "title": "Ghanan Ghanan x Shankara (Tribal Psy Mix)",
    "artist": "Hilight Tribe",
    "film": "Psytrance & Forest",
    "isRemix": true
  },
  {
    "title": "Khoon Choos Le x Anarchy (Psycore Stomper)",
    "artist": "Skazi",
    "film": "Psytrance & Forest",
    "isRemix": true
  },
  {
    "title": "Chaar Diwaari (Jhaag) x Forest Psy Bass (Mashup)",
    "artist": "Mr Jammer",
    "film": "Psytrance & Forest",
    "isRemix": true
  },
  {
    "title": "Jiyein Kyun x Pranava (Progressive Psy Edit)",
    "artist": "Ace Ventura",
    "film": "Psytrance & Forest",
    "isRemix": true
  },
  {
    "title": "Ainvayi Ainvayi x 1000 Planets (Goa Club Flip)",
    "artist": "Outsiders",
    "film": "Psytrance & Forest",
    "isRemix": true
  },
  {
    "title": "Mitwa (KANK) x Plur (Festival Psy Bootleg)",
    "artist": "Sesto Sento",
    "film": "Psytrance & Forest",
    "isRemix": true,
    "youtubeId": "TY_3hUPsoQM"
  },
  {
    "title": "Bhaag DK Bose x Guitarmass (Guitar Psy Mix)",
    "artist": "Infected Mushroom",
    "film": "Psytrance & Forest",
    "isRemix": true
  },
  {
    "title": "Pungi (Agent Vinod) x The Tribe (Psy Edit)",
    "artist": "Vini Vici",
    "film": "Psytrance & Forest",
    "isRemix": true
  },
  {
    "title": "Gallan Goodiyan x The Prayer (Psytrance Flip)",
    "artist": "Electric Universe",
    "film": "Psytrance & Forest",
    "isRemix": true
  },
  {
    "title": "Chammak Challo x High On Acid (Club Psy Edit)",
    "artist": "Blastoyz",
    "film": "Psytrance & Forest",
    "isRemix": true
  },
  {
    "title": "Subha Hone Na De x Bungee Jump (Psy Mashup)",
    "artist": "Captain Hook",
    "film": "Psytrance & Forest",
    "isRemix": true
  },
  {
    "title": "Taal Se Taal Mila x Kabalah (Classic Goa Mix)",
    "artist": "Astral Projection",
    "film": "Psytrance & Forest",
    "isRemix": true
  },
  {
    "title": "Badtameez Dil x Makeup (Offbeat Psy Edit)",
    "artist": "Neelix",
    "film": "Psytrance & Forest",
    "isRemix": true
  },
  {
    "title": "Chak De India x Sahara (Uplifting Psy Anthem)",
    "artist": "Astrix",
    "film": "Psytrance & Forest",
    "isRemix": true
  },
  {
    "title": "Kar Gayi Chull x Codeine (Alien Bass Psy)",
    "artist": "Mandragora",
    "film": "Psytrance & Forest",
    "isRemix": true
  },
  {
    "title": "Bumbro (Mission Kashmir) x Day Dreaming (Psy Flip)",
    "artist": "Talamasca",
    "film": "Psytrance & Forest",
    "isRemix": true
  },
  {
    "title": "Ang Laga De (Ram-Leela) x Deep Psy",
    "artist": "Driving Bass",
    "film": "Psytrance & Forest",
    "isRemix": true
  },
  {
    "title": "Winning Speech (Karan Aujla) x Cooper (Hard Techno Edit)",
    "artist": "Space 92",
    "film": "Punjabi & Urban Techno",
    "isRemix": true
  },
  {
    "title": "One Love (Shubh) x Open Sesame (Bigroom Techno)",
    "artist": "Maddix",
    "film": "Punjabi & Urban Techno",
    "isRemix": true
  },
  {
    "title": "You (Armaan Malik) x Love Is Free (Peak-Time Mashup)",
    "artist": "Eli Brown",
    "film": "Punjabi & Urban Techno",
    "isRemix": true
  },
  {
    "title": "Amplifier (Imran Khan) (Acid Techno Edit)",
    "artist": "CAVALLI",
    "film": "Punjabi & Urban Techno",
    "isRemix": true
  },
  {
    "title": "Bewafa (Imran Khan) x Attack (Dark Techno Flip)",
    "artist": "Alignment",
    "film": "Punjabi & Urban Techno",
    "isRemix": true
  },
  {
    "title": "Mundian To Bach Ke (Bollytech Session)",
    "artist": "Mr Jammer",
    "film": "Punjabi & Urban Techno",
    "isRemix": true
  },
  {
    "title": "Satisfya (Imran Khan) x Heute Nacht (Peak-Time Bootleg)",
    "artist": "Maddix",
    "film": "Punjabi & Urban Techno",
    "isRemix": true
  },
  {
    "title": "Sade Vicha x Time (Hard Techno Flip)",
    "artist": "Alignment",
    "film": "Punjabi & Urban Techno",
    "isRemix": true
  },
  {
    "title": "Mitthe Paan Di Lahori x Pura Vida (Techno Edit)",
    "artist": "HI-LO",
    "film": "Punjabi & Urban Techno",
    "isRemix": true
  },
  {
    "title": "Takeover x Dhyan Melodic",
    "artist": "Driving Bass",
    "film": "Punjabi & Urban Techno",
    "isRemix": true
  },
  {
    "title": "Chorni (DIVINE & Sidhu Moose Wala) x Kali",
    "artist": "Charlotte de Witte",
    "film": "Punjabi & Urban Techno",
    "isRemix": true
  },
  {
    "title": "410 (Sidhu Moose Wala) x I Wanna Dance To The Bass",
    "artist": "Hardwell",
    "film": "Punjabi & Urban Techno",
    "isRemix": true
  },
  {
    "title": "295 (Sidhu Moose Wala) x Hold Me To The Light (Melodic Edit)",
    "artist": "KAS:ST",
    "film": "Punjabi & Urban Techno",
    "isRemix": true
  },
  {
    "title": "So High (Sidhu Moose Wala) x Fist on the Table",
    "artist": "Reinier Zonneveld",
    "film": "Punjabi & Urban Techno",
    "isRemix": true
  },
  {
    "title": "Same Beef (Bohemia & Sidhu) x Legend (Psy-Techno)",
    "artist": "Indira Paganotto",
    "film": "Punjabi & Urban Techno",
    "isRemix": true
  },
  {
    "title": "Bandana Gang x Pigment (Hard Peak-Time Edit)",
    "artist": "Joyhauser",
    "film": "Punjabi & Urban Techno",
    "isRemix": true
  },
  {
    "title": "Wavy (Karan Aujla) x Ghostmode (Techno Bootleg)",
    "artist": "Adam Beyer",
    "film": "Punjabi & Urban Techno",
    "isRemix": true
  },
  {
    "title": "Try Me (Karan Aujla) x Believe (Club Techno Mashup)",
    "artist": "Eli Brown",
    "film": "Punjabi & Urban Techno",
    "isRemix": true
  },
  {
    "title": "Lifestyle (Amrit Maan) x Colonia (Acid Edit)",
    "artist": "Space 92",
    "film": "Punjabi & Urban Techno",
    "isRemix": true
  },
  {
    "title": "Let's Nacho (Techno Drop)",
    "artist": "Nucleya & Maddix",
    "film": "Punjabi & Urban Techno",
    "isRemix": true
  },
  {
    "title": "Bapu Zimidar (Jassi Gill)",
    "artist": "Hard Techno Stabs",
    "film": "Punjabi & Urban Techno",
    "isRemix": true
  },
  {
    "title": "Coka (Sukh-E) x Camelot (Psy/Hardstyle Bootleg)",
    "artist": "Timmy Trumpet",
    "film": "Punjabi & Urban Techno",
    "isRemix": true
  },
  {
    "title": "Nikle Currant x Power (Peak-Time Mashup)",
    "artist": "Alignment",
    "film": "Punjabi & Urban Techno",
    "isRemix": true
  },
  {
    "title": "Prada (Jass Manak) x My Mind (Future Rave Bootleg)",
    "artist": "Maddix",
    "film": "Punjabi & Urban Techno",
    "isRemix": true
  },
  {
    "title": "Lehanga (Jass Manak) x Running (Melodic House/Techno)",
    "artist": "Anyma",
    "film": "Punjabi & Urban Techno",
    "isRemix": true
  },
  {
    "title": "Rabba (Lounge Mix / Musafir)",
    "artist": "Melodic Techno Flip",
    "film": "Sufi Techno & Bootlegs",
    "isRemix": true
  },
  {
    "title": "Yeh Raat (Aks)",
    "artist": "Dark Acid Bassline",
    "film": "Sufi Techno & Bootlegs",
    "isRemix": true
  },
  {
    "title": "Kesariya x CamelPhat - For a Feeling (Melodic Edit)",
    "artist": "Mr Jammer",
    "film": "Sufi Techno & Bootlegs",
    "isRemix": true
  },
  {
    "title": "Tere Vaaste (Melodic Techno Mashup)",
    "artist": "DJ Nik",
    "film": "Sufi Techno & Bootlegs",
    "isRemix": true
  },
  {
    "title": "Meri Jaan (Gangubai) (Melodic Techno Remix)",
    "artist": "Ansick",
    "film": "Sufi Techno & Bootlegs",
    "isRemix": true
  },
  {
    "title": "Koi Si",
    "artist": "Techno Groove Edit",
    "film": "Sufi Techno & Bootlegs",
    "isRemix": true
  },
  {
    "title": "Laadoo (Mashup)",
    "artist": "Peak-Time Bollytech",
    "film": "Sufi Techno & Bootlegs",
    "isRemix": true
  },
  {
    "title": "Kahani Suno (Kaifi Khalil) x Chimerical (Melodic Flip)",
    "artist": "Anyma",
    "film": "Sufi Techno & Bootlegs",
    "isRemix": true
  },
  {
    "title": "O Maahi (Dunki) x Nova (Afterhours Edit)",
    "artist": "Tale of Us",
    "film": "Sufi Techno & Bootlegs",
    "isRemix": true
  },
  {
    "title": "Tu Jaane Na x Everyday (Progressive Bootleg)",
    "artist": "Eric Prydz",
    "film": "Sufi Techno & Bootlegs",
    "isRemix": true
  },
  {
    "title": "Pee Loon x Flame (Melodic House/Techno Mashup)",
    "artist": "ARTBAT",
    "film": "Sufi Techno & Bootlegs",
    "isRemix": true
  },
  {
    "title": "Soniyo x Because You Move Me (Progressive Edit)",
    "artist": "Tinlicker",
    "film": "Sufi Techno & Bootlegs",
    "isRemix": true
  },
  {
    "title": "Hale Dil x Tell It To My Heart (Club Techno Edit)",
    "artist": "Meduza",
    "film": "Sufi Techno & Bootlegs",
    "isRemix": true
  },
  {
    "title": "Bulleya (Sultan) x Road to Nowhere (Sufi Melodic Techno)",
    "artist": "KAS:ST",
    "film": "Sufi Techno & Bootlegs",
    "isRemix": true
  },
  {
    "title": "Iktara x On My Knees (Melodic Bootleg)",
    "artist": "RÜFÜS DU SOL",
    "film": "Sufi Techno & Bootlegs",
    "isRemix": true
  },
  {
    "title": "Jee Karda (Badlapur) x Raw Diamonds (Bigroom Techno)",
    "artist": "Maddix",
    "film": "Sufi Techno & Bootlegs",
    "isRemix": true
  },
  {
    "title": "Dilliwaali Girlfriend x PACMAN (Festival Drop)",
    "artist": "Hardwell",
    "film": "Sufi Techno & Bootlegs",
    "isRemix": true
  },
  {
    "title": "Matargashti x Take It Off (Tech House/Bollytech Edit)",
    "artist": "Fisher",
    "film": "Sufi Techno & Bootlegs",
    "isRemix": true
  },
  {
    "title": "London Thumakda x Trickster (Hard Techno Edit)",
    "artist": "Eli Brown",
    "film": "Sufi Techno & Bootlegs",
    "isRemix": true
  },
  {
    "title": "High Heels Te Nachche x Gravity (Peak-Time Mix)",
    "artist": "Space 92",
    "film": "Sufi Techno & Bootlegs",
    "isRemix": true
  },
  {
    "title": "Kala Chashma x 100 (Festival Mashup)",
    "artist": "Timmy Trumpet & Vini Vici",
    "film": "Sufi Techno & Bootlegs",
    "isRemix": true
  },
  {
    "title": "Saturday Saturday x The Rave (Future Rave Edit)",
    "artist": "Maddix",
    "film": "Sufi Techno & Bootlegs",
    "isRemix": true
  },
  {
    "title": "Karunesh (Ambient/Techno Flip)",
    "artist": "Mr Jammer",
    "film": "Sufi Techno & Bootlegs",
    "isRemix": true
  },
  {
    "title": "Aasa Kooda (Melodic Techno Edit)",
    "artist": "Sai Abhyankkar",
    "film": "Sufi Techno & Bootlegs",
    "isRemix": true
  },
  {
    "title": "BamBholle (Psycore / Hard Bass Edit)",
    "artist": "Viruss",
    "film": "Sufi Techno & Bootlegs",
    "isRemix": true
  },
  {
    "title": "Abhi Toh Party Shuru Hui Hai x Heads Will Roll",
    "artist": "(DJ Chetas Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Apna Bana Le x Miracle",
    "artist": "(Calvin Harris & Ellie Goulding Flip)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Badtameez Dil x Satisfaction",
    "artist": "(Benny Benassi Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Balam Pichkari x Kernkraft 400",
    "artist": "(Zombie Nation Club Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Besharam Rang x One More Time",
    "artist": "(Daft Punk Indo Flip)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Brown Munde x Laserbeam",
    "artist": "(Ray Volpe x DJ Shadow Dubai)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Chaiyya Chaiyya x Work It",
    "artist": "(Fisher Tech Mix)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Chaleya x Padam Padam",
    "artist": "(Kylie Minogue Tech Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Chammak Challo x Low",
    "artist": "(Flo Rida Tribal Tech Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Chand Sifarish x Stereo Love",
    "artist": "(Edward Maya House Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Chhota Sa Fasana x Calabria",
    "artist": "(Enur Melodic House Mix)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Chikni Chameli x Tremor",
    "artist": "(Dimitri Vegas & Like Mike Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Crazy Kiya Re x Titanium",
    "artist": "(David Guetta Club Mix)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Dard-E-Disco x Move Your Body",
    "artist": "(Öwnboss Tech Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Deewani Mastani x Deep Fear",
    "artist": "(Sidekick Tech House Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Dekha Ek Khwaab x Stay",
    "artist": "(The Kid LAROI Deep House Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Desi Boyz x Turn Down For What",
    "artist": "(DJ Snake Festival Flip)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Dhoom Again x Destination Calabria",
    "artist": "(Alex Gaudino Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Dil Chahta Hai x Rather Be",
    "artist": "(Clean Bandit Melodic House)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Dil Dhadakne Do x Show Me Love",
    "artist": "(Robin S House Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Dil Sambhal Ja Zara x Don't You Worry Child",
    "artist": "(SHM Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Disco Deewane x Where Are Ü Now",
    "artist": "(Skrillex & Diplo Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Dus Bahane x Piece Of Your Heart",
    "artist": "(Meduza Tech House Mix)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Ek Do Teen x Gasolina",
    "artist": "(Daddy Yankee Tech Flip)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Gallan Goodiyaan x The Rockafeller Skank",
    "artist": "(Fatboy Slim Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Gandi Baat x Levels",
    "artist": "(Avicii Mainstage Mashup)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Genda Phool x Taki Taki",
    "artist": "(DJ Snake Afro-Tech Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Ghungroo x Pepas",
    "artist": "(Farruko Latin Tech Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Gulaabo x Uptown Funk",
    "artist": "(Mark Ronson Funk House Mix)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Halka Halka Suroor x Losing It",
    "artist": "(FISHER Tech Flip)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Hookah Bar x Party Till We Die",
    "artist": "(MAKJ & Timmy Trumpet Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Hua Hain Aaj Pehli Baar x Sweet Dreams",
    "artist": "(Eurythmics House Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Humma Humma x Mi Gente",
    "artist": "(J Balvin Tribal House Mix)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Humnava Mere x Habits",
    "artist": "(Stay High) (Tove Lo Deep House)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "I Hate Luv Storys x Wake Me Up",
    "artist": "(Avicii Sunset Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Ik Junoon x Silicon Luv",
    "artist": "(Indo-Tech Peak Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Illegal Weapon x Spaceman",
    "artist": "(Hardwell Tech Rework)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Ishq Shava x Bangarang",
    "artist": "(Skrillex Tech Flip)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Ishq Sufiyana x Sun & Moon",
    "artist": "(Above & Beyond Progressive Mix)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Ishq Wala Love x Titanium",
    "artist": "(Afrojack Club Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Jai Jai Shivshankar x Mammoth",
    "artist": "(Dimitri Vegas & Like Mike Mix)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Jee Karda x Animals",
    "artist": "(Martin Garrix Big Room Flip)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Jhoome Jo Pathaan x Lay Low",
    "artist": "(Tiësto Tech House Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Jiyein Kyun x Leave The World Behind",
    "artist": "(Axwell House Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Kabira x Clarity",
    "artist": "(Zedd Melodic House Flip)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Kar Gayi Chull x Better Off Alone",
    "artist": "(Alice Deejay Tech Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Khadke Glassy x Bounce Generation",
    "artist": "(TJR Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Khaike Paan Banaraswala x The Real Slim Shady",
    "artist": "(Tech Flip)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Khairiyat x Let Me Love You",
    "artist": "(DJ Snake Vocal Mix)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Khuda Jaane x Reload",
    "artist": "(Sebastian Ingrosso Progressive Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Kinna Sohna x Take Over Control",
    "artist": "(Afrojack Tech Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Kudi Nu Nachne De x How Deep Is Your Love",
    "artist": "(Calvin Harris Mix)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Kurti Mal Mal Di x Satisfaction",
    "artist": "(Tech House Bootleg)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Kya Hua Tera Wada x Love Nwantiti",
    "artist": "(Afro-Tech Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Lagdi Lahore Di x Lean On",
    "artist": "(Major Lazer Club Mix)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Lahu Munh Lag Gaya x Ferrari",
    "artist": "(James Hype Tech Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "London Thumakda x Danza Kuduro",
    "artist": "(Don Omar Latin Tech Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Locha-E-Ulfat x In Da Club",
    "artist": "(50 Cent House Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Love Mera Hit Hit x Pump It",
    "artist": "(Black Eyed Peas Tech Flip)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Lungi Dance x Turn Up The Speakers",
    "artist": "(Afrojack & Martin Garrix)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Malhari x Booyah",
    "artist": "(Showtek Festival Banger)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Matargashti x Thrift Shop",
    "artist": "(Macklemore Groovy House)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Mitwa x Opus",
    "artist": "(Eric Prydz Melodic Techno Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Morni Banke x Temperature",
    "artist": "(Sean Paul Afro-Tech Mix)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Nadiyon Paar x Let's Get It Started",
    "artist": "(Tech House Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Naacho Naacho x Jump & Sweat",
    "artist": "(Garmiani Tribal Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Nashe Si Chadh Gayi x One Kiss",
    "artist": "(Calvin Harris & Dua Lipa Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "O O Jane Jaana x Push The Feeling On",
    "artist": "(Nightcrawlers House)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "O Saki Saki x Do It To It",
    "artist": "(ACRAZE Tech House Mix)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Pani Da Rang x Faded",
    "artist": "(Alan Walker Melodic House)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Party All Night x Riverside",
    "artist": "(Sidney Samson Tech Flip)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Pee Loon x Sunset Lover",
    "artist": "(Petit Biscuit Deep House)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Proper Patola x Drop It Like It's Hot",
    "artist": "(Snoop Dogg Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Raataan Lambiyan x Under The Stars",
    "artist": "(Melodic Techno Mix)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Radha Kaise Na Jale x Baianá",
    "artist": "(Bakermat Tribal House)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Rock Tha Party x Yeah!",
    "artist": "(Usher Tech House Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Saadi Galli x Samba De Janeiro",
    "artist": "(Bellini Afro-Tech Flip)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Sauda Khara Khara x Low Frequency",
    "artist": "(Denney Tech Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Senorita x Baila Conmigo",
    "artist": "(Dayvi Latin House Flip)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Shanivaar Raati x Tsunami",
    "artist": "(DVBBS & Borgeous Festival Mix)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Show Me The Thumka x Drugs From Amsterdam",
    "artist": "(Mau P Tech Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Subah Hone Na De x Greyhound",
    "artist": "(Swedish House Mafia Mix)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Suraj Hua Maddham x Age Of Love",
    "artist": "(Melodic Techno Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Sweety Tera Drama x Macarena",
    "artist": "(Los Del Rio House Flip)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Taal Se Taal x Deep Down",
    "artist": "(Alok & Ella Eyre House Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Tamanche Pe Disco x Bonkers",
    "artist": "(Dizzee Rascal Tech Mix)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Tarasti Hain Nigahein x Silence",
    "artist": "(Delerium Melodic Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "The Humma Song x Trumpets",
    "artist": "(Sak Noel Tech House Mix)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Tujh Mein Rab Dikhta Hai x Ocean",
    "artist": "(Martin Garrix Progressive)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Tune Maari Entriyaan x Intoxicated",
    "artist": "(Martin Solveig House Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Udi Teri Aankhon Se x World, Hold On",
    "artist": "(Bob Sinclar Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Vele x Bla Bla Bla",
    "artist": "(Gigi D'Agostino Tech House Flip)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Woh Din x Summer",
    "artist": "(Calvin Harris Sunset House Mix)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Ya Baba x Habibi",
    "artist": "(I Need Your Love) (Shaggy Afro-Tech)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Yaar Naa Miley x Animals",
    "artist": "(Martin Garrix Tech Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Yeh Ladka Hai Deewana x SexyBack",
    "artist": "(Justin Timberlake Flip)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Zaalima x Cold Water",
    "artist": "(Major Lazer & Justin Bieber Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Zingaat x Rave Tool",
    "artist": "(High-Energy Festival Tech Mix)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Zinda Banda x Turn Off The Lights",
    "artist": "(Fred Again.. Tech Edit)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "Zubi Zubi x Rasputin",
    "artist": "(Boney M x Majestic Tech House Rework)",
    "film": "Remix",
    "isRemix": true
  },
  {
    "title": "System Pe System x Laserbeam",
    "artist": "Ray Volpe Heavy Bass Trap Drop",
    "film": "Remix",
    "isRemix": true,
    "youtubeId": "6BxGumtWc_c"
  },
  {
    "title": "Kala Daman x Do It To It",
    "artist": "ACRAZE Tech Drop Flip",
    "film": "Remix",
    "isRemix": true,
    "youtubeId": "cBSYJqv0Fjc"
  },
  {
    "title": "Laad Piya Ke x Heads Will Roll",
    "artist": "A-Trak Club Banger Edit",
    "film": "Remix",
    "isRemix": true,
    "youtubeId": "hRxv0EmgEaY"
  },
  {
    "title": "Bhookh (Gulzaar Chhaniwala) x Turn Off The Lights",
    "artist": "Fred Again.. Bass Edit",
    "film": "Remix",
    "isRemix": true,
    "youtubeId": "Uw64lL583uU"
  },
  {
    "title": "Diler Harkhiya - Kaleshi Chori x Turn Down For What",
    "artist": "DJ Snake Trap Drop",
    "film": "Remix",
    "isRemix": true,
    "youtubeId": "702uU0t65og"
  },
  {
    "title": "Chunni Me Chunni x Riverside",
    "artist": "Sidney Samson Bounce Tech Rework",
    "film": "Remix",
    "isRemix": true,
    "youtubeId": "V775PPuBc7Y"
  },
  {
    "title": "Thada Bhartar x Booyah",
    "artist": "Showtek Festival Peak-Time Drop",
    "film": "Remix",
    "isRemix": true,
    "youtubeId": "QCyIY10KBnk"
  },
  {
    "title": "Fauji Faujan x Mammoth",
    "artist": "DVLM Mainstage Big-Room Drop",
    "film": "Remix",
    "isRemix": true,
    "youtubeId": "3Qq7kNjg-KY"
  },
  {
    "title": "Kabootar x Low",
    "artist": "Flo Rida Heavy Bassline Flip",
    "film": "Remix",
    "isRemix": true,
    "youtubeId": "LUL_42vsLVE"
  },
  {
    "title": "Gaam Ka Desi x Turn Off The Lights",
    "artist": "Fred Again.. Style Hard Indo-Bass Flip",
    "film": "Remix",
    "isRemix": true,
    "youtubeId": "Q22MCFC0CP0"
  },
  {
    "title": "Kala Chashma Drip x Kernkraft 400",
    "artist": "Zombie Nation Aggressive Big-Room Flip",
    "film": "Remix",
    "isRemix": true,
    "youtubeId": "ZPonBufRfBg"
  },
  {
    "title": "Moto (Ajay Hooda) x Booyah",
    "artist": "Showtek Festival Trap Edit",
    "film": "Remix",
    "isRemix": true,
    "youtubeId": "a7ANDh9k76o"
  },
  {
    "title": "Choudhar Jaat Ki x Ferrari",
    "artist": "James Hype Aggressive Tech Rework",
    "film": "Remix",
    "isRemix": true,
    "youtubeId": "CgeleP7nWN0"
  },
  {
    "title": "Boli Haryanvi x Bounce Generation",
    "artist": "TJR Hard Bounce Festival Drop",
    "film": "Remix",
    "isRemix": true,
    "youtubeId": "aevDBNHf5zs"
  },
  {
    "title": "Diler Harkesh x Mammoth",
    "artist": "DVLM Aggressive Mainstage Banger",
    "film": "Remix",
    "isRemix": true,
    "youtubeId": "4kT0NXiu4Hk"
  },
  {
    "title": "Bandook Chalegi x Bonkers",
    "artist": "Dizzee Rascal Heavy Bass Mashup",
    "film": "Remix",
    "isRemix": true,
    "youtubeId": "P7dKhiJXSKI"
  },
  {
    "title": "Jail Karawegi x Rave Tool",
    "artist": "High-Energy Industrial Drop Edit",
    "film": "Remix",
    "isRemix": true,
    "youtubeId": "F-iiuSk0pgw"
  },
  {
    "title": "Gajban Paani Ne Chali x Pepas",
    "artist": "Farruko Latin-House Heavy Drop",
    "film": "Remix",
    "isRemix": true,
    "youtubeId": "kAhcPRCIFvk"
  },
  {
    "title": "Laung Gawacha x Bangarang",
    "artist": "Nucleya x Skrillex (Festival Trap Mashup)",
    "film": "Remix",
    "isRemix": true,
    "youtubeId": "oVkS1Ff4AhY"
  },
  {
    "title": "Tamil Fever x Lean On",
    "artist": "Nucleya x Major Lazer (Desi Moombahton Flip)",
    "film": "Remix",
    "isRemix": true,
    "youtubeId": "dVYQOW2CIDw"
  },
  {
    "title": "Aaja x Magenta Riddim",
    "artist": "Nucleya x DJ Snake (Bass Mashup)",
    "film": "Remix",
    "isRemix": true,
    "youtubeId": "op4B9sNGi0k"
  },
  {
    "title": "Bass Rani x Kaolo",
    "artist": "Nucleya x Yellow Claw (Hard Trap Edit)",
    "film": "Remix",
    "isRemix": true,
    "youtubeId": "SoSMY5CVIXo"
  },
  {
    "title": "Bhayanak Atma x Do It To It",
    "artist": "Nucleya x ACRAZE (Tech Bass Flip)",
    "film": "Remix",
    "isRemix": true,
    "youtubeId": "z6H7QX0fQrE"
  },
  {
    "title": "Akkad Bakkad x Satisfaction",
    "artist": "Nucleya x Benny Benassi (Street Bass Rework)",
    "film": "Remix",
    "isRemix": true,
    "youtubeId": "lpV5UZaiq3s"
  },
  {
    "title": "Scene Kya Hai x Losing It",
    "artist": "Nucleya x FISHER (Bass House Mashup)",
    "film": "Remix",
    "isRemix": true,
    "youtubeId": "4zYOO4F1ecw"
  },
  {
    "title": "Nonstop Nucleya Megamix / Festival Mashup",
    "artist": "Nucleya x DJ Mark",
    "film": "Remix",
    "isRemix": true,
    "youtubeId": "FqWQT0eExyE"
  }
];

const listKTrance: any[] = [
  {
    "title": "Uff Teri Adaa x I Adore You | SORVV Afrohouse Flip",
    "artist": "Hugel | Shankar Mahadevan | 2025 (SORVV)",
    "film": "K//TRANCE",
    "isKTrance": true,
    "youtubeId": "jaoHIhutbgU"
  },
  {
    "title": "Sahiba X Titanium (SORVV Afro Edit)",
    "artist": "Jasleen Royal | Sia | BollyTech (SORVV)",
    "film": "K//TRANCE",
    "isKTrance": true,
    "youtubeId": "LuvExjG_lsQ"
  },
  {
    "title": "Arjan Vailley X Jatt Don't Care X Alameyo X Anchor Point",
    "artist": "Krautek & Ryan Nogar Mashup (Krautek)",
    "film": "K//TRANCE",
    "isKTrance": true,
    "youtubeId": "ahaUNhScopE"
  },
  {
    "title": "Alameyo X Jee Karda X Jatt Don't Care (Aarmash Edit)",
    "artist": "AARMASH",
    "film": "K//TRANCE",
    "isKTrance": true,
    "youtubeId": "ahaUNhScopE"
  },
  {
    "title": "Papi (Bhabi)",
    "artist": "Eden Shalev",
    "film": "K//TRANCE",
    "isKTrance": true,
    "youtubeId": "0RazWJu8qog"
  },
  {
    "title": "Papi x Aria x Tujhe Bhula Diya // Flipsyd",
    "artist": "FLIPSYD",
    "film": "K//TRANCE",
    "isKTrance": true,
    "youtubeId": "C6J9VTcBkEw"
  },
  {
    "title": "Tenu Leke x Say What | Dj Ganesh | Afro Bollywood",
    "artist": "Dj Ganesh Bombay",
    "film": "K//TRANCE",
    "isKTrance": true,
    "youtubeId": "00LKC7mKz6Y"
  },
  {
    "title": "CHAR BAJ GAYE X ALAMEYO (MASHUP)",
    "artist": "D-Rain",
    "film": "K//TRANCE",
    "isKTrance": true,
    "youtubeId": "EgiRj6DNqvE"
  },
  {
    "title": "Adore You x Tujhe Bhula Diya (Afro Bollywood Mashup)",
    "artist": "Vishal Shekhar | DJ Ganesh (Dj Ganesh Bombay)",
    "film": "K//TRANCE",
    "isKTrance": true,
    "youtubeId": "Q7mtgh-wCMM"
  },
  {
    "title": "FE!N x Paisa Hai Toh (DJ Suketu Mashup)",
    "artist": "DJ Suketu",
    "film": "K//TRANCE",
    "isKTrance": true,
    "youtubeId": "DEc4ovyG3Ww"
  },
  {
    "title": "Move With Woh Lamhe | Dj Ganesh | Afro House",
    "artist": "Dj Ganesh Bombay",
    "film": "K//TRANCE",
    "isKTrance": true,
    "youtubeId": "ZYjbzUSR3gc"
  },
  {
    "title": "Big Dawgs x Karan Aujla (Trapperx Mashup)",
    "artist": "Hanumankind | Karan Aujla | Trapperx (Trapperx)",
    "film": "K//TRANCE",
    "isKTrance": true,
    "youtubeId": "ggAveCJfdBU"
  },
  {
    "title": "Vem Dançar Kuduro",
    "artist": "Lucenzo",
    "film": "K//TRANCE",
    "isKTrance": true,
    "youtubeId": "uv9CjsQNtf4"
  },
  {
    "title": "Jimmy Jimmy Jimmy Aaja (BollyTech Mix)",
    "artist": "Deepanshu Ruhela, Priyank, Parvati Khan & I",
    "film": "K//TRANCE",
    "isKTrance": true,
    "youtubeId": "2FfTO-Bu-nY"
  },
  {
    "title": "CHAR BAJ GAYE (BOLLYTECH EDIT)",
    "artist": "Dj Dextron",
    "film": "K//TRANCE",
    "isKTrance": true,
    "youtubeId": "EMZRf48PEis"
  },
  {
    "title": "Big Dawgs X Winning Speech",
    "artist": "IAMPRANN",
    "film": "K//TRANCE",
    "isKTrance": true,
    "youtubeId": "vPwot7jrOf8"
  },
  {
    "title": "Jawani Jan-E-Man House Trap",
    "artist": "DJ Percy & Asha Bhosle",
    "film": "K//TRANCE",
    "isKTrance": true,
    "youtubeId": "eQt2XlFTq3U"
  },
  {
    "title": "Ek Pal Ka Jeena Tech Remix | Kaho Naa Pyaar Hai",
    "artist": "Hrithik Roshan | Lucky Ali | KTONIKK (KTONIKK)",
    "film": "K//TRANCE",
    "isKTrance": true,
    "youtubeId": "1fJ2YWKFOds"
  },
  {
    "title": "Desi Girl x Akon Sexy Bitch",
    "artist": "David Guetta | Vishal & Shekhar | DJ Ganesh (Dj Ganesh Bombay)",
    "film": "K//TRANCE",
    "isKTrance": true,
    "youtubeId": "XU3pFs_MwXk"
  },
  {
    "title": "Naadan Parindey (Rumble) // Flipsyd",
    "artist": "FLIPSYD",
    "film": "K//TRANCE",
    "isKTrance": true,
    "youtubeId": "SSd3zEBVpj4"
  },
  {
    "title": "RANGILO MARO DHOLNA - ROHAN MUKATI EDIT",
    "artist": "Rohan Mukati",
    "film": "K//TRANCE",
    "isKTrance": true,
    "youtubeId": "WgJBQfFVXQU"
  },
  {
    "title": "Tune O Rangeele (Brazilian Funk Mix)",
    "artist": "Knockwell & Lata Mangeshkar",
    "film": "K//TRANCE",
    "isKTrance": true,
    "youtubeId": "W6Op1RjLXQg"
  },
  {
    "title": "Aaj Sajeya x Kudmayi (Mashup)",
    "artist": "Knockwell, Goldie Sohel & Pritam",
    "film": "K//TRANCE",
    "isKTrance": true,
    "youtubeId": "PGer5XYPaPk"
  },
  {
    "title": "Papi X Move It X Aahun Aahun (Private Edit)",
    "artist": "DJ Missy K",
    "film": "K//TRANCE",
    "isKTrance": true,
    "youtubeId": "fODdPEatDqU"
  },
  {
    "title": "MAMTA'S INTERLUDE - Trance Remix",
    "artist": "Gauntlet. & NARCO",
    "film": "K//TRANCE",
    "isKTrance": true,
    "youtubeId": "ahaUNhScopE"
  },
  {
    "title": "Joota Japani",
    "artist": "KR$NA and Mukesh",
    "film": "K//TRANCE",
    "isKTrance": true,
    "youtubeId": "vR16Gu-Uq00"
  },
  {
    "title": "Rasputin",
    "artist": "Majestic & Boney M.",
    "film": "K//TRANCE",
    "isKTrance": true,
    "youtubeId": "b8XADglx9z4"
  },
  {
    "title": "Mockingbird",
    "artist": "Tiësto, Dimitri Vegas & Like Mike & Gabry Ponte",
    "film": "K//TRANCE",
    "isKTrance": true,
    "youtubeId": "LCY0SUhS6ec"
  },
  {
    "title": "Woops (Dimitri Vegas & Junkie Kid Remix)",
    "artist": "Bountyhunter, Dimitri Vegas & Junkie Kid",
    "film": "K//TRANCE",
    "isKTrance": true,
    "youtubeId": "9NixMYOdiOE"
  },
  {
    "title": "Aria (Hard Techno Edit)",
    "artist": "Sandro Cardio, GEWOONRAVES & AEXTRAX",
    "film": "K//TRANCE",
    "isKTrance": true,
    "youtubeId": "lZj1S8mbXZw"
  },
  {
    "title": "Dernière Danse (Hard Techno Edit)",
    "artist": "Sandro Cardio, GEWOONRAVES, Zantryc and AEXTRAX",
    "film": "K//TRANCE",
    "isKTrance": true,
    "youtubeId": "lasnA_VSYoA"
  },
  {
    "title": "São Paulo",
    "artist": "The Weeknd & Anitta",
    "film": "K//TRANCE",
    "isKTrance": true,
    "youtubeId": "AQ5NlI-SJR0"
  },
  {
    "title": "Ankhe Khuli x Fire Fire // Flipsyd",
    "artist": "FLIPSYD",
    "film": "K//TRANCE",
    "isKTrance": true,
    "youtubeId": "JDWWZZawcbw"
  }
];

const listIndoHouse: any[] = [
  {
    "title": "Mera Yaar (Wo Noor Ka Jharna)",
    "artist": "Melodic Techno / Deep Indo-House Flip",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "zXy_8U-_RNc"
  },
  {
    "title": "Aa Zara",
    "artist": "Dhyan BollyTech",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Aa Zara EDIT",
    "artist": "(126 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Aa Zara x Before My Eyes",
    "artist": "(Fiyan Melodic Techno)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Aa Zara x PWR",
    "artist": "(Melodic Techno)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Aadat",
    "artist": "(Aaryan Gala Afro House Mashup)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Aadat",
    "artist": "Rohan Mukati Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Aadat of Eternity",
    "artist": "(Trux Edit)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Aadat Se Majboor",
    "artist": "(Bluprint Tech)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Aadat Se Majboor",
    "artist": "DJ Sujooy & DJ Brij",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Aadat Se Majboor x Edge of Desire",
    "artist": "Unknown",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Aahista Aahista",
    "artist": "(Zroxx Edit)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Aaj Ki Raat",
    "artist": "(D-Rain & Hrutik Mashup)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Aaj Ki Raat",
    "artist": "Don (Vicky Noise Faktory)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Aaj Ki Raat",
    "artist": "Punit x Chirag",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Aaj Ki Raat EDIT",
    "artist": "(128 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Aaj Ki Raat x All Night Long",
    "artist": "(DJ Wish Mashup)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Aaj Ki Raat x Baladi",
    "artist": "(DJ Vaibhav Edit)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Aaj Ki Raat x Day N Night",
    "artist": "(Melodic Mix)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Aaj Ki Raat x Stephanie (D",
    "artist": "Rain & Hrutik)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Aaja Mahi x Wind",
    "artist": "Delhi Bad Boys x Dewik",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Aankh Maare (Vish VS",
    "artist": "Tech Edition)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Aankho Se Tune x Run The World",
    "artist": "Unknown",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Aari Aari",
    "artist": "(Tech House Edit)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Aari Aari EDIT",
    "artist": "(126 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Aari Aari x Anchor Point",
    "artist": "(Groovedev Edit)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Aari Aari x Pararam",
    "artist": "DJ Marsh",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Abhi Toh Party",
    "artist": "(Codeone Latin House Remix)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Achko Machko (Mashup)",
    "artist": "DJ Sam",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Achko Machko x Feel It",
    "artist": "(DJ Naairo Redrum)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "AFTERAll",
    "artist": "Choli x lag Bari",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Afsana Banake",
    "artist": "DJ Aftab & DJ Ad",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Afreen Remix",
    "artist": "(Flipsyd x Vipul Pawar)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Aga Bai x Taambdi Chaamdi",
    "artist": "DJ Jackroh Remake",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Agar Tum Saath Ho",
    "artist": "Flipsyd",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Agar Tum Saath Ho",
    "artist": "(DJ Aenzo & Zroxx)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Agar Tum Saath Ho x Chasing Highs Midnight",
    "artist": "Unknown",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Allah Duhai",
    "artist": "Trux Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Allah Maaf Kare x Take That",
    "artist": "(Flipsyd)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Ankhein Khuli Ho x Fire Fire",
    "artist": "DJ Skelltron",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Arjan Vailly x The Feeling",
    "artist": "(Nitish Wadhwa Mashup)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Baaki Baatein Peene Baad (Bolly",
    "artist": "Tech)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Baaki Baatein x Let's Go",
    "artist": "(Neel Chhabra)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Baazigar x Simulation",
    "artist": "Vaibhav x Stan Mashup",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Babli Badmaash Hai EDIT",
    "artist": "(127 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Bachna Ae Haseeno",
    "artist": "A-Rise Mashup",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Bachna Ae Haseeno",
    "artist": "DJ Sam",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Badan Pe Sitaare",
    "artist": "Vicky x Samz",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Badshah Merther",
    "artist": "(MusicbyArnav Edit)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Badshah o Badshah",
    "artist": "Mashup – DJ Sam",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Balam Pichkari Holi FLP",
    "artist": "Samz",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Bang Bang x Movin to the Sun",
    "artist": "Srinjay / Smokie",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Banjaare",
    "artist": "Bairan EDIT (127 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Barbaad (Saiyaara)",
    "artist": "DJ Vaibhav Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Be Intehaan Techno EDIT",
    "artist": "(127 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Be Intehaan x Keyta",
    "artist": "(Flipsyd)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Beedi",
    "artist": "V Sky Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Bewafa",
    "artist": "Mashup – DJ Sam Bolly Banger",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Bewafa x Taka Taka",
    "artist": "Unknown",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Bhaag DK Bose x Saxobeat",
    "artist": "(Saif Side)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Bhool Bhulaiyaa",
    "artist": "Smokie x Teja",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Bhool Bhulaiya x Jungle (Edit)",
    "artist": "Samz",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Biba",
    "artist": "Enzed Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Breakup Party",
    "artist": "DJ Nuklr Mashup",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Breakup Party x Horny",
    "artist": "(Cosmic Rhythm Edit)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Chaar Baj Gaye EDIT",
    "artist": "(125 BPM / 143 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Chaar Baj Gayee (Mashup)",
    "artist": "Dhyan, DJ Kawal",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Chaar Botal Vodka x Say What",
    "artist": "(Pawan x Srinjay)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Chaiyya Chaiyya x Gate (Mashup)",
    "artist": "DJ Pearl",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Challa",
    "artist": "(Saket Maskara Edit)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Choli EDIT",
    "artist": "(123 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Choli Ke Peeche",
    "artist": "TrapperX Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Choli x Taambdi Chaamdi",
    "artist": "DJ Oppozit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Chupke Se x Snehidhane EDIT",
    "artist": "(122 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Dance Pe Chance",
    "artist": "(Raul Music House Mix)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Dard E Disco",
    "artist": "Avattar (Indo Tech Project)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Dard-E-Disco",
    "artist": "DJ Sujooy & DJ Brij",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Deewaniyat (BollyTech)",
    "artist": "NIK",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Deewaniyat",
    "artist": "Lume x Chandan",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Desi Girl",
    "artist": "(Raul Music Techno Mix)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Dhan Ta Dan (Mashup)",
    "artist": "DJ Kawal (2025 Edit)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Dhurandhar EDIT",
    "artist": "(128 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Die With A Smile x Teri Deewani",
    "artist": "DJ Ajee",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Dil Cheez Tujhe Arabic",
    "artist": "(MusicByArnav Edit)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Dil Dooba Edit",
    "artist": "(122 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Dil Dooba x Waka",
    "artist": "Music By Arnav",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Dil Jo Haal Hai x Lookin For Love",
    "artist": "(Chirag)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Dil Luteya EDIT",
    "artist": "(125 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Dil Ye Bekarar Kyun Hai",
    "artist": "Where You Are (PRFCT Edit)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Dil Ye Bekarar x Anchor Point",
    "artist": "(Minus Edit)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Dilli Se Hai BC",
    "artist": "DJ Oppozit Mashup",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Dilli Se Hu BC (Troll Edit) x Side To Side",
    "artist": "Samz",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Disco Disco (Tech House)",
    "artist": "DJ AD",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Dola Re Dola (Mashup)",
    "artist": "DJ Lalit & Sidharth Music",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Dola Re Dola x Old School",
    "artist": "(Osci x Baeric)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Doobey",
    "artist": "(Tech House Edit)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Dope Shope",
    "artist": "Karan x Rushi Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Dope Shop",
    "artist": "(Tech House)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Dope Shop x Paleta x Faint EDIT",
    "artist": "(150 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Dum Dum Ranbir Singh",
    "artist": "DJ Saurabh (Edit)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Dum Maaro Dum",
    "artist": "(Kaash BollyTech Mix)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Dum Maaro Dum",
    "artist": "Mashup – DJ Sam",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Edge Of Desire x Locha E Ulfat",
    "artist": "(Tech Edit)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Ek Pal Ka Jeena",
    "artist": "Rohan Mukati / BollyTech Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Fanaa EDIT",
    "artist": "(128 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "For A Reason x So High",
    "artist": "(Aaryan Gala Flip)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Garam Masala x James Hype EDIT",
    "artist": "(128 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Gehra Hua EDIT",
    "artist": "(128 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Gehra Hua x Magic Drgon",
    "artist": "(Sykar & Teja)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Ghafoor",
    "artist": "Aenzo",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Ghafoor",
    "artist": "(Bam Bam Edit) (122 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Ghungroo (Mashup)",
    "artist": "Duomusic",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Hai Junoon x Beauty and a Beat",
    "artist": "(Little Noise)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Haseeno",
    "artist": "Tangoes Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "High Heels",
    "artist": "Mashup – DJ Sam Banger",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "High Heels (Tribal)",
    "artist": "Zear",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Honthon Mein Aisi Baat",
    "artist": "(Paroma)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Hum Pyaar Karne Wale",
    "artist": "(QuickHit x DJ Lalit Mashup)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Humko Tumse Pyaar Hai",
    "artist": "DJ Oppozit Remix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "I Hate Love Story (BollyTech)",
    "artist": "Dextron",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Ishq Jalakar Karvaan EDIT",
    "artist": "(126 BPM) / Bluprint Techhouse Remix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Ishq Risk",
    "artist": "(Raag&Riff & Neel Chhabra Edit)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "It's The Time To Disco x It Goes Like",
    "artist": "(Tech Edit)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Jaan Se Guzarte Hain",
    "artist": "DJ Lalit & DJ Pearl",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Jaan Se Guzarte Hain EDIT (128 BPM / 130 BPM)",
    "artist": "DJ Skelltron",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Janam x Voices",
    "artist": "(Avneet Music)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Jhalak Dikhla Ja",
    "artist": "DJ Anmoll Mehta x Sanju Purohit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Jhalla Wallah EDIT",
    "artist": "(130 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Jimmy Jimmy Aaja EDIT",
    "artist": "(127 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Jhoom Barabar",
    "artist": "Indo Tech Project Avattar",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Jo Tere Sang",
    "artist": "V Sky Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Jo Tere Sang x Beautiful Now",
    "artist": "(DJ Ganesh)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Jo Tere Sang x Loco Loco EDIT",
    "artist": "(128 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Jo Tere Sang Techno",
    "artist": "(Raag&Riff & Neel Chhabra Mashup)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Joota Japani",
    "artist": "BollyTech Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Jumma Chumma Tech Mix",
    "artist": "Unknown",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Kabira x Simulation EDIT",
    "artist": "(126 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Kaho Na Kaho EDIT",
    "artist": "(127 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Kaanta Laga EDIT",
    "artist": "(128 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Kahin Aag Lage Lag Jaaye",
    "artist": "Dewik",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Kajra Re",
    "artist": "G Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Kalyo EDIT",
    "artist": "(140 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Kar Gayi Chull x Oscill8",
    "artist": "DJ Mayurrr",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Karvaan x The Feeling",
    "artist": "Neel Chhabra",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Karvaan",
    "artist": "Srinjay x Smokie Mashup",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Kawa Kawa",
    "artist": "Sazz Edit / BollyTech Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Kay Sera Sera",
    "artist": "Rage Mashup",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Kem Chhe x Heavy Heart",
    "artist": "(DJ Wish & AYO)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Kiya Kiya",
    "artist": "DJ Avishek Dinda",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Koi Mil Gaya (Mashup)",
    "artist": "Duomusic",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Koi Si x One Of A Kind x Ya Ali EDIT",
    "artist": "(125 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Kya Mujhe Pyaar Hai x Edge of Desire Tech Edit / BollyTech Mix",
    "artist": "Unknown",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Laal Pari",
    "artist": "(DJ Wish & AYO Mashup)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Ladki Badi Anjani Hai EDIT",
    "artist": "(134 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Laila Main Laila",
    "artist": "BollyTech Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Lak 28 Kudi Da",
    "artist": "(Banger Party Mix Midnight) / EDIT (128 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Lambi Judai",
    "artist": "Prithvi Sai Mashup (Bolly Tech)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Le Gayi",
    "artist": "DJ Utkarsh (Tech House Remix)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Love Dose x Butterfly",
    "artist": "(DJ Wish Mashup)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Lutt Le Gaya x Freed From Desire",
    "artist": "DJ Lemon Flip",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Main Aur Tu (Tech House Edit)",
    "artist": "Dewik",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Main Deewana x Losing It",
    "artist": "DJ Oppozite & DJ Clemet",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Main Deewana x Take Me Deep",
    "artist": "(Flipsyd)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Main Hoon Don Mashup",
    "artist": "DJ Skelltron",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Main Pareshaan",
    "artist": "DJ Jam Bolly Tech",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Manali x Love Is Shanthi",
    "artist": "Purohit x Agxstya Mashup",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Mann Mera",
    "artist": "(House Edit)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Maria Maria Taka EDIT",
    "artist": "(128 BPM) / Purohit Hitmix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Maria x Maria",
    "artist": "Srinjay x Smokie",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Masakali",
    "artist": "Ansick",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Mashooqa",
    "artist": "VDJ Shaan / DJ Kamra",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Mast Kalandar",
    "artist": "Avattar / DJ Yogii",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Maston Ka Jhund",
    "artist": "Srinjay x Smokie",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Mere Mehboob Mere Sanam",
    "artist": "DJ Tejas",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Millionaire",
    "artist": "DJ Jam & DJ A-Scape",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Millionaire x I Know You Want To",
    "artist": "(Basspatch Edit)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Money Follows x Paisa x Millionaire",
    "artist": "Unknown",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Monica",
    "artist": "Rohan Mukati Edit / Neel Mashup",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Mundiyan Tu Bachke EDIT",
    "artist": "(126 BPM) / Someone Music Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Muqabla x Baladi",
    "artist": "(DJ Jack x San Jerome)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Naadan Parindey EDIT",
    "artist": "(130 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Naal Nachna",
    "artist": "(H33T Remix Ext / Pawan x Srinjay Mashup / Dewik Edit)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "O Humdum",
    "artist": "Rohan Mukati",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "O Meri Jaane Jaan",
    "artist": "(Vicky Dance Remix)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "O O Jane Jana x Bam Bam",
    "artist": "DJ Sharad",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Papi Bhabhi",
    "artist": "DJ Axonn Mashup Bollytech",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Pappu Can't Dance EDIT",
    "artist": "(123 BPM) / Tejas Shetty x VDJ Rohit Mashup",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Parda x Love Parade",
    "artist": "(Rohan Mukati Edit)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Party Getting Hot Folk",
    "artist": "(The Coders Decoded)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Party On My Mind",
    "artist": "Abhay Music",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Party With Bhoothnath",
    "artist": "(DJ Avishek Dinda)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Patakha Guddi x What Is Rave EDIT",
    "artist": "(130 BPM) / H33TX Armero Mashup",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Piya Ghar",
    "artist": "Asad Remix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Piya Ghar Aaya Nusrat Fateh Ali",
    "artist": "(Asad S Remix)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Pyaar Dilon Ka Mela Hai EDIT",
    "artist": "(130 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Pyar Zindagi Hai x World On Hold",
    "artist": "(DJ Sunny)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Raanjhan x Belong Axtone",
    "artist": "(Madoco Official)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Ramba Ho",
    "artist": "Rowan Mashup",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Ramba Ho x Gizula",
    "artist": "(Sykar & Teja)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Ramta Jogi (Slip Mix)",
    "artist": "Sykar & Teja / Ansick & DJ San J / EDIT (124 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Rang De Basanti x Block",
    "artist": "(Sykar & Teja)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Rangilo Maro Dholna (Flipsyd x Dhyan / Ultimate Purohit Re",
    "artist": "Edit / EDIT 130 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Roja Janeman EDIT",
    "artist": "(125 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Run Down The City Monica",
    "artist": "(Rowan Edit)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Saat Samundar EDIT",
    "artist": "(130 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Sach Keh Raha Hai (B Praak)",
    "artist": "Hiren Chawda & DJ Lucky Remix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Sadda Haq",
    "artist": "VDJ Shaan",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Sahiba",
    "artist": "Darksidez Melodic / EDIT (128 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Sahiba x Positive",
    "artist": "(Sykar & Teja)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Saiyaara",
    "artist": "(Designiter Remix)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Saiyaara x Like I Like It",
    "artist": "(Basspatch Edit)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Saki Saki",
    "artist": "Sai Bollytech Remix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Sau Tarah Ke x Ma Tnsani EDIT",
    "artist": "(127 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Second Hand Jawani x Brother",
    "artist": "(Adarsh x Abhijeet)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Shararath x Famaz",
    "artist": "(Sykar & Teja)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Siddh Bhatt",
    "artist": "Ban Than Chali (BollyBassHouse)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Stephanie x Jatt Dont Care EDIT",
    "artist": "(134 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Stephanie x Mit Jaaye Ghum",
    "artist": "(Dhyan Edit)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Subha Hone Na De x Let’s Go",
    "artist": "DJ Abhii",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Taal Tech",
    "artist": "BollyTech Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Tauba Tauba",
    "artist": "BollyTech Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Tera Mera Rishta x Simulation EDIT",
    "artist": "(126 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Tera Naam Japdi Phiran",
    "artist": "(Yoschi x Tedd Edit)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Tera Naam Japdi Phiran x Shut Down EDIT",
    "artist": "(126 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Teri Meri Kahani x Katuma",
    "artist": "Smokie x Teja",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "This Party Getting Hot",
    "artist": "VDJ Shaan",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Titliaan",
    "artist": "Tech Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Toh Phir Aao",
    "artist": "(Bluprint Melodic Remix)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Too Addictive EDIT",
    "artist": "(125 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Tra Tra vs Saki Saki",
    "artist": "(Neel Chhabra Mashup)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Trux",
    "artist": "Tumse Milke Coke",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Tu Hi Meri Shab Hai EDIT",
    "artist": "(126 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Tu Jaane Na EDIT",
    "artist": "(130 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Tujhe Bhula Diya (V",
    "artist": "Edit)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Tumhe Jo Maine Dekha EDIT",
    "artist": "(126 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Tumse Milke Dil Ka",
    "artist": "DJ Sharad x DJ Smoke / BollyTech Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Tumse Milke Tech x Baglami",
    "artist": "(AfterAll Edit)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Udta Punjab",
    "artist": "(Saket Maskara Techno Edit)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Wannabe x Bheege Hont Tere (V",
    "artist": "Niks Flip)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Where's The Party Tonight",
    "artist": "(DJ Naairo Mashup)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "White Brown Black",
    "artist": "BollyTech Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Womaniya EDIT",
    "artist": "(130 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "World Hold On x Vaada Karo x I Love You",
    "artist": "(DJ Ganesh x Pro Bro)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Yaar Na Miley",
    "artist": "Srinjay x Smokie Mashup",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Yaron Dosti",
    "artist": "BollyTech Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Ye Mera Jaha",
    "artist": "Prithvi Sai Mashup",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Yeh Ishq Hai EDIT",
    "artist": "(130 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Yeh Jawani x Baazigar",
    "artist": "Vicky x Aaryan (House Flip)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Zara Sa x Last Night",
    "artist": "DJ Ajee",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Zindagi Ek Safar (Mashup)",
    "artist": "Chirag",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Aankh Marey",
    "artist": "Melodic Techno Edit (126 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Aao Milo Chalo",
    "artist": "Deep Indo-House Club Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Ab Toh Forever",
    "artist": "BollyTech Peak-Time Flip",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Ae Dil Hai Mushkil",
    "artist": "Progressive Melodic House Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Afreen Afreen",
    "artist": "Tech House Extended Drop Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Ahista Ahista",
    "artist": "Indo Minimal Techno Version",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Amplifier (Imran Khan)",
    "artist": "Driving Tech House Bootleg",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Ankhon Mein Teri",
    "artist": "Sunset Melodic House Flip",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Apna Bana Le",
    "artist": "Peak-Time BollyTech Club Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Arijit Singh Medley",
    "artist": "Continuous BollyTech Transition Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Aye Udi Udi",
    "artist": "Percussive Latin-Tech House Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Badtameez Dil",
    "artist": "128 BPM Tech House Banger",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Bakhuda Tumhi Ho",
    "artist": "Melodic Techno Club Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Banjaara (Ek Villain)",
    "artist": "Dark Tech House Flip",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Batshit x Desi Beats",
    "artist": "High-Energy Tech Bootleg",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Besharam Rang",
    "artist": "Deep Groove Tech House Flip",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Bhare Naina",
    "artist": "Heavy Baseline BollyTech Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Brown Munde",
    "artist": "Tech House Festival Drop Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Chaar Botal Vodka",
    "artist": "Tech House Club Rework",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Chaiyya Chaiyya",
    "artist": "126 BPM Indo-House Peak-Time Flip",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Chaleya",
    "artist": "Melodic Tech House Club Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Chammak Challo",
    "artist": "Afro-Tech & BollyTech Hybrid Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Chand Sifarish",
    "artist": "Progressive Tech House Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Char Baj Gaye (Party Abhi Baaki Hai)",
    "artist": "Peak-Time Tech Flip",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Chitta Ve",
    "artist": "Industrial Melodic Techno Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Crazy Kiya Re",
    "artist": "Driving Tech House Club Rework",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Danza Kuduro x Bolly Beats",
    "artist": "Tech House Mashup",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Deewana Dil",
    "artist": "Classic Bollywood Tech House Flip",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Dekha Ek Khwaab",
    "artist": "Ambient Melodic House Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Desi Boyz (Make Some Noise)",
    "artist": "128 BPM BollyTech Remix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Dhoom Machale",
    "artist": "High-Octane Tech House Festival Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Dil Chahta Hai",
    "artist": "Summer Indo-House Groove",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Dil Dhadakne Do",
    "artist": "Vocal Tech House Club Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Dil Sambhal Ja Zara",
    "artist": "Melodic Techno Club Version",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Disco Deewane",
    "artist": "Peak-Time Tech House Rework",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Dus Bahane 2.0",
    "artist": "Bass-Heavy Tech House Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Ek Do Teen",
    "artist": "Tribal-Infused BollyTech Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Gallan Goodiyaan",
    "artist": "High-BPM Wedding BollyTech Banger",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Gandi Baat",
    "artist": "Groovy Minimal Tech Flip",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Genda Phool",
    "artist": "Folk-Tech House Extended Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Ghungroo Toot Gaye",
    "artist": "Melodic Indo-House Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Gulaabo",
    "artist": "Funky Tech House Rework",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Halka Halka Suroor",
    "artist": "Progressive BollyTech Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Hookah Bar",
    "artist": "128 BPM Festival Tech House Flip",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Hua Hain Aaj Pehli Baar",
    "artist": "Melodic Tech House Rework",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Humnava Mere",
    "artist": "Deep Melodic Techno Version",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "I Hate Luv Storys (Title Track)",
    "artist": "Upbeat BollyTech Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Ik Junoon (Paint It Red)",
    "artist": "Sunset Tech House Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Illegal Weapon 2.0",
    "artist": "Heavy BollyTech Drop Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Ishq Shava",
    "artist": "Percussive Afro-Tech House Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Ishq Wala Love",
    "artist": "Deep Melodic House Rework",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Jai Jai Shivshankar",
    "artist": "Festival Peak-Time Tech House Flip",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Jee Karda (Badlapur)",
    "artist": "Aggressive BollyTech Banger",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Jhoome Jo Pathaan",
    "artist": "Big Room Tech House Club Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Kabira (Encore)",
    "artist": "Melodic Techno Festival Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Kar Gayi Chull",
    "artist": "126 BPM BollyTech Club Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Khadke Glassy",
    "artist": "Punjabi-Tech House Banger",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Khaike Paan Banaraswala",
    "artist": "Funky Indo-House Flip",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Khairiyat",
    "artist": "Melodic House Extended Vocal Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Khuda Jaane",
    "artist": "Progressive House & Melodic Techno Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Kudi Nu Nachne De",
    "artist": "Uplifting BollyTech House Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Kurti Mal Mal Di",
    "artist": "Punjabi Tech House Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Kya Hua Tera Wada",
    "artist": "Retro Melodic Tech Flip",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Lagdi Lahore Di",
    "artist": "Afro-Infused BollyTech Remix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "London Thumakda",
    "artist": "High-Energy Wedding Tech Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Locha-E-Ulfat",
    "artist": "Groovy Indo-House Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Love Mera Hit Hit",
    "artist": "128 BPM Tech House Banger",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Lungi Dance",
    "artist": "Big Room BollyTech Festival Rework",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Malhari",
    "artist": "Heavy Peak-Time BollyTech Tribal Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Matargashti",
    "artist": "Funky Minimal Tech House Rework",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Mitwa (KANK)",
    "artist": "Progressive Melodic House Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Nadiyon Paar (Let The Music Play)",
    "artist": "Deep Tech House Club Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Naacho Naacho (RRR)",
    "artist": "Fast-Paced BollyTech Tribal Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Nashe Si Chadh Gayi",
    "artist": "French-Touch Indo-House Flip",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "O Saki Saki (New Version)",
    "artist": "Peak-Time BollyTech Drop",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Pani Da Rang",
    "artist": "Ambient Deep Tech House Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Party All Night",
    "artist": "128 BPM Tech House Festival Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Pee Loon",
    "artist": "Deep Melodic House Vocal Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Pretty Hot Tempting (P.H.A.T)",
    "artist": "Tech House Rework",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Raataan Lambiyan",
    "artist": "Sunset Melodic Techno Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Radha Kaise Na Jale",
    "artist": "Classical-Infused Indo-House Flip",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Rock Tha Party (Bombay Rockers)",
    "artist": "Driving Tech House Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Sauda Khara Khara",
    "artist": "Bhangra-Tech House Club Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Senorita (ZNMD)",
    "artist": "Flamenco Indo-Tech House Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Shanivaar Raati",
    "artist": "Peak-Time BollyTech Club Banger",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Show Me The Thumka",
    "artist": "Upbeat BollyTech House Version",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Subah Hone Na De",
    "artist": "126 BPM Tech House Mainstage Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Suraj Hua Maddham",
    "artist": "Melodic Techno Sunset Rework",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Sweety Tera Drama",
    "artist": "Desi Tech House Club Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Tamanche Pe Disco",
    "artist": "Bass-Heavy BollyTech Flip",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Tarasti Hain Nigahein",
    "artist": "Melodic Techno Club Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "The Humma Song",
    "artist": "Deep Tech House Groove Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Tujh Mein Rab Dikhta Hai",
    "artist": "Progressive Indo-House Flip",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Tune Maari Entriyaan",
    "artist": "Big Room Tech House Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Udi Teri Aankhon Se",
    "artist": "Melodic Afro-Tech Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Vele (SOTY)",
    "artist": "128 BPM BollyTech Club Banger",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Woh Din",
    "artist": "Chill Indo-House Vocal Flip",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Ya Baba (Arabic-Bolly)",
    "artist": "Dark Tech House Club Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Zingaat",
    "artist": "Tribal Tech House Peak-Time Banger",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Zinda Banda",
    "artist": "Heavy Bassline BollyTech Festival Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Gypsy (Balam Thanedar) x Losing It",
    "artist": "FISHER Tech House Banger",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "u31thuMehjM"
  },
  {
    "title": "52 Gaj Ka Daman x Satisfaction",
    "artist": "Benny Benassi Electro-Tech Drop",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "lpV5UZaiq3s"
  },
  {
    "title": "Chatak Matak x Tremor",
    "artist": "Dimitri Vegas & Like Mike Heavy Drop Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "9vMh9f41pqE"
  },
  {
    "title": "Bahu Kale Ki x Ferrari",
    "artist": "James Hype High-Energy Tech Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "CgeleP7nWN0"
  },
  {
    "title": "Dum Maro Dum",
    "artist": "Nucleya Remix / Mashup",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "gVG8dHCd9PI"
  },
  {
    "title": "Disco Dancer",
    "artist": "Nucleya Bass Flip",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "f0DkVn-joQc"
  },
  {
    "title": "Aao Huzoor Tumko",
    "artist": "Nucleya Trap Remix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "5QWW2zTvJHo"
  },
  {
    "title": "Raat Baaki Baat Baaki",
    "artist": "Nucleya Bassline Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "W81HtSrG4LA"
  },
  {
    "title": "Chandan Sa Badan",
    "artist": "Nucleya Moombahton Rework",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "vKLayRJY_ac"
  },
  {
    "title": "Boom Boom",
    "artist": "Nucleya Street Bass Remix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "azKJCG9RNd0"
  },
  {
    "title": "Mein Ek Chor",
    "artist": "Nucleya Glitch-Hop Flip",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "PfJJlQbWtcs"
  },
  {
    "title": "Solid Body x Drugs From Amsterdam",
    "artist": "Mau P Minimal Tech Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "juuIhW8V1Xw"
  },
  {
    "title": "Gulzaar Chhaniwala - Dada x Kernkraft 400",
    "artist": "Zombie Nation Big-Room Drop",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "rXxXOuZYECA"
  },
  {
    "title": "Goli Chal Javegi x Animals",
    "artist": "Martin Garrix Peak-Time Festival Banger",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "gCYcHz2k5x0"
  },
  {
    "title": "Badli Badli Laage x Move Your Body",
    "artist": "Öwnboss Bass House Bootleg",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "gi0nqupQ94E"
  },
  {
    "title": "Moto x Danza Kuduro",
    "artist": "High-Tempo Latin Tech Flip",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "nll9oomd_gY"
  },
  {
    "title": "Chambal Ke Daaku x Spaceman",
    "artist": "Hardwell Festival Drop Rework",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "rJiTPa3G4r8"
  },
  {
    "title": "Aaj Ki Raat (Stree 2) x Losing It",
    "artist": "FISHER Hard Tech House Drop",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "S3MCXK0vflk"
  },
  {
    "title": "Tauba Tauba (Bad Newz) x Ferrari",
    "artist": "James Hype High-BPM Aggressive Tech Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "LK7-_dgAVQE"
  },
  {
    "title": "Taras (Munjya) x Drugs From Amsterdam",
    "artist": "Mau P Minimal Hard-Kick Drop",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "juuIhW8V1Xw"
  },
  {
    "title": "Arjan Vailly (Animal) x Rave Tool",
    "artist": "Industrial Dark Techno Peak Drop",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "zqGW6x_5N0k"
  },
  {
    "title": "Sher Khul Gaye (Fighter) x Satisfaction",
    "artist": "Benny Benassi Electro-Tech Crunch Drop",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "exdsbFvhocI"
  },
  {
    "title": "Choli Ke Peeche (Crew) x Do It To It",
    "artist": "ACRAZE Hard Bass Drop",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "co4EBYZZhg4"
  },
  {
    "title": "Antidote (Karan Aujla) x Animals",
    "artist": "Martin Garrix Big-Room Festival Drop",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "lvzAxbs_x4w"
  },
  {
    "title": "Winning Speech (Karan Aujla) x Spaceman",
    "artist": "Hardwell Peak-Time Heavy Kick Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "zXHgLwShHI8"
  },
  {
    "title": "Tauba Tauba x Losing It",
    "artist": "Karan Aujla x FISHER Tech-House Drop",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "ahaUNhScopE"
  },
  {
    "title": "Winning Speech x Laserbeam",
    "artist": "Karan Aujla x Ray Volpe Dubstep Trap Drop",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "EyI2ChkxL0c"
  },
  {
    "title": "Softly x Do It To It",
    "artist": "Karan Aujla x ACRAZE Tech-House Groove",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "6wwuEXlIniU"
  },
  {
    "title": "52 Bars x Ferrari",
    "artist": "Karan Aujla x James Hype Club House Mix",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "4DfVxVeqk2o"
  },
  {
    "title": "Admirin' You x Move Your Body",
    "artist": "Karan Aujla x Öwnboss Brazilian Bass Drop",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "k85UB5b6pJU"
  },
  {
    "title": "Antidote x Satisfaction",
    "artist": "Karan Aujla x Benny Benassi Electro-House Drop",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "D3MbiqzktkY"
  },
  {
    "title": "On Top x Tremor",
    "artist": "Karan Aujla x Martin Garrix & DVLM Festival Drop",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "9vMh9f41pqE"
  },
  {
    "title": "White Brown Black x Drugs From Amsterdam",
    "artist": "Karan Aujla & Avvy Sra x Mau P Minimal Tech Drop",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "BtQp2U6hJII"
  },
  {
    "title": "Check Kar (Parmish Verma) x Tsunami",
    "artist": "DVBBS & Borgeous Hard-Drop Bootleg",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "0EWbonj7f18"
  },
  {
    "title": "God Damn (Badshah x Karan Aujla) x Mammoth",
    "artist": "DVLM Heavy Mainstage Drop",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Chambal Ka Daku x Laserbeam",
    "artist": "Ray Volpe Style Trap/Hard-Drop Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "f4lJx5IufPE"
  },
  {
    "title": "Gypsy (Balam Thanedar) x Tremor",
    "artist": "DVLM Big-Room Festival Banger",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "9vMh9f41pqE"
  },
  {
    "title": "Bahu Kale Ki x Satisfaction",
    "artist": "Benny Benassi Electro-Tech Bootleg",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "lpV5UZaiq3s"
  },
  {
    "title": "2 Numbari x Losing It",
    "artist": "FISHER Style Tech-Bass Flip",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "o3WdLtpWM_c"
  },
  {
    "title": "Badnam Gabru x Move Your Body",
    "artist": "Öwnboss Hard Bass House Rework",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "d2QaN6jHWFI"
  },
  {
    "title": "Randa Party x Spaceman",
    "artist": "Hardwell Peak-Time Festival Drop",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "ppy-fgbPn2s"
  },
  {
    "title": "Solid Body x Drugs From Amsterdam",
    "artist": "Mau P Minimal Aggressive Tech Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "juuIhW8V1Xw"
  },
  {
    "title": "Dada Sadhu x Animals",
    "artist": "Martin Garrix Big-Room Aggressive Mashup",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "gCYcHz2k5x0"
  },
  {
    "title": "Systum (Elvish Yadav / Masoom Sharma) x Do It To It",
    "artist": "Heavy Tech-House Edit",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "VGAdlwHcbqs"
  },
  {
    "title": "52 Gaj Ka Daman x Heads Will Roll",
    "artist": "High-BPM Electro Club Drop",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "NcsFsq7a6vg"
  },
  {
    "title": "Aaj Ki Raat x Tremor",
    "artist": "Stree 2 x DVLM & Martin Garrix Big-Room Drop",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "U2QkIUhT6Jw"
  },
  {
    "title": "Malhari x Laserbeam",
    "artist": "Bajirao Mastani x Ray Volpe Dubstep Trap Drop",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true
  },
  {
    "title": "Chaiyya Chaiyya x Kernkraft 400",
    "artist": "A.R. Rahman x Zombie Nation Peak Rave Synth",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "79TEKzCxZM0"
  },
  {
    "title": "Badtameez Dil x Spaceman",
    "artist": "Yeh Jawaani Hai Deewani x Hardwell Big-Room Drop",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "WRz22ibD3qI"
  },
  {
    "title": "Dhan Te Nan x Mammoth",
    "artist": "Kaminey x DVLM & MOGUAI Mainstage Drop",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "AKF2whlGnr4"
  },
  {
    "title": "Zingaat x Booyah",
    "artist": "Dhadak x Showtek Dutch-House Drop",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "bsytWBV3XVo"
  },
  {
    "title": "Jee Karda (Badlapur Vocals) x Turn Off The Lights",
    "artist": "Fred Again.. Hard Bass Flip",
    "film": "Remix",
    "isRemix": true,
    "isIndoHouse": true,
    "youtubeId": "KAIyRiigews"
  }
];

const listAfro: any[] = [
  {
    "title": "Mera Yaar (Sufi Extended Vocal Mix)",
    "artist": "Organic Afro House Edit (122 BPM)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "WLkTlxJVQiE"
  },
  {
    "title": "Aadat AP Dhillon Afro x DJ Ashu",
    "artist": "Unknown",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Aayi Nai (Afro Mashup)",
    "artist": "DJ MHD IND",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Afsos",
    "artist": "(Aaryan Gala Afro House Mashup)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Aisa Jadoo Mashup",
    "artist": "DJ Kawal",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Akhiyaan Gulaab x Elektro",
    "artist": "(Yoschi x Tedd Afro)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Alharan Kuarian Diljit Dosanjh x Jamaican",
    "artist": "Unknown",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Alibaba x High Heels",
    "artist": "(Saunyk Afro Edit)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Amplifier Afro Banger",
    "artist": "DJ Ronnie",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Anchor x Alameyo x Jatt Dont Care",
    "artist": "(Aarmash)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Angreji Beat (Bolly",
    "artist": "Afro Music Midnight)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Ankhiyaan Gulaab",
    "artist": "(Aaryan Gala Afro House Mashup)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Bhool Bhulaiyaa x Dame Un Grr",
    "artist": "Vicky Noise Faktory",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Bonita (Afro Mix)",
    "artist": "DJ Avishek Dinda",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Case x Run Free x Laserbeam (Bolly",
    "artist": "Afro)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Chanakya (V",
    "artist": "Edit) x DJ Vaibhav",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Chanel x Tanha Dil (V",
    "artist": "Niks Flip)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Dhoor Afrodesia",
    "artist": "Unknown",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Didi vs Stephanie (Sher-e-Baloch) Afro House",
    "artist": "DJ Tejas",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Dil Ye Bekarar Kyu vs Give It To Me (Afro House)",
    "artist": "DJ Tejas",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Excuses x COD Japan",
    "artist": "(Yoschi x Tedd Afro Edit)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Gangsta",
    "artist": "Karan Aujla – VDJ Shaan",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Gehra Hua x Fire Fire",
    "artist": "(DJ Shadow Dubai)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Ghafoor (Bolly",
    "artist": "Banger Edit Midnight)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Guzarish (Ghajni) Afro House",
    "artist": "DJ Tejas",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Haseen - Talwiinder (Afro House)",
    "artist": "DJ Tejas",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Hey Ya ! Karthik Calling (Afro House)",
    "artist": "DJ Tejas",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "High Heels (Bolly",
    "artist": "Banger Mix Midnight)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Hum Pyaar Karne Wale vs Calabria (Afro House)",
    "artist": "DJ Tejas",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "I Adore You x Mouth Go La",
    "artist": "(Afro Junction)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "I Hate Luv Story vs Movin' To The Sun (Afro House)",
    "artist": "DJ Tejas",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Ishq Risq x DJ Yamraj Arabic Afro Mix",
    "artist": "(MoBlack)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Ishq Risk x Go Again",
    "artist": "(Hugel SC Remix)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Kaho Na Kaho (Afro Mashup)",
    "artist": "DJ MHD Ind",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Karvaan x Drugs From Amsterdam (Afro",
    "artist": "Edit)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Khuda Gawah",
    "artist": "(DJ Jack x San Jerome)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Kya Mujhe Pyaar Hai",
    "artist": "(Afro Edit)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Laapata",
    "artist": "(Afro Edit Midnight Edition)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Labon Ko x Ma Tnsani",
    "artist": "(Regish Flip House)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Lak 28",
    "artist": "(H33T x Armero)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Let's Nacho",
    "artist": "(Cosmic Rhythm Edit)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Life Is Calling x Fire Fire",
    "artist": "(Hyperjaxx Mashup)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Love Tujhe Love x Alicante",
    "artist": "(Afro Music)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Lover x Rise (Bolly",
    "artist": "Techno Edit Midnight)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Lutt Le Gaya - Dhurander",
    "artist": "Avattar",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Lutt Le Gaya x Deja Vu (Bolly",
    "artist": "Tech Edit)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Mafia x Get Down",
    "artist": "(Hyperjaxx Mashup)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Masakali x Yuma",
    "artist": "Antriksh",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Mauja Hi Mauja",
    "artist": "(Rohan Mukati x Shome)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Maula Mere",
    "artist": "(H33T Flip)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Mehbooba x Alameyo",
    "artist": "Shanaya Mashup",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Mein Sharabi vs Bam Bam - Cocktail (Afro House)",
    "artist": "DJ Tejas",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Mundiyan Tu Bachke x Caramelle (Afro",
    "artist": "Edit)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Mundiyan Tu Bach Ke",
    "artist": "(Srinjay's Afro Edit)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Nachange x Underground",
    "artist": "(Flipsyd)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Nagada",
    "artist": "(Sanskari Mashup)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "O Mere Khuda x Chanti",
    "artist": "(Afro Junction Midnight)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Om Shanti Om",
    "artist": "DJ Sharad x DJ Smoke",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Qatal",
    "artist": "(Mehul Kukreja x Yoschi)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Rama Re - Kaante (Afro House)",
    "artist": "DJ Tejas",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Rang De Basanti (V",
    "artist": "Edit)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Saiyaara x Mwaki Zerb",
    "artist": "(DJ Abhishek)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Second Hand Jawani",
    "artist": "DJ Sharad",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Sooraj Dooba Hai x Pump It Up",
    "artist": "(Yoschi x Tedd Edit)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Stephanie x Dhurandhar x Culo",
    "artist": "Basspatch",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Tamma Tamma (Afro House)",
    "artist": "DJ Tejas",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Tera Naam Japdi Phiran x Ma Tnsani",
    "artist": "DJ BMGM",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Tera Naam Japd vs Empire State Of Mind (Afro House)",
    "artist": "DJ Tejas",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Tere Bina (Zaeden) x Morten Holger Edit (V",
    "artist": "Niks)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Tere Bina - Guru (Afro House)",
    "artist": "DJ Tejas",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Tere Liya vs Titanium - Prince (Afro House)",
    "artist": "DJ Tejas",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Titliian x Sadete x Biba",
    "artist": "(Kaydrop Edit)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Toh Phir Aao (Afro House)",
    "artist": "DJ Tejas",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Tu Hi Haqeeqat (Afro House)",
    "artist": "DJ Tejas",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Tu Hi Meri Sab Hai x Blessing",
    "artist": "(SD Style)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Tum Tak vs Day 'N' Night - Raanjhanaa (Afro House)",
    "artist": "DJ Tejas",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Vaari Jaawan",
    "artist": "(Saket Maskara / Shantrap x Dewik / DJ Tejas)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Woh Lamhe (Afro House)",
    "artist": "DJ Tejas",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Yaar Na Miley vs Dont Give A F*** (Afro House)",
    "artist": "DJ Tejas",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Yeh Dil Deewana x Wascuka",
    "artist": "(Flipsyd Music)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Yeh Kaali Kaali Aankhen vs Tokyo Drift (Afro House)",
    "artist": "DJ Tejas",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Zara Zara vs Mi Chico (Afro House)",
    "artist": "DJ Tejas",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Chhore NCR Aale x Baianá",
    "artist": "Bakermat Afro-Tech Percussive Drop",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "iaGjz4dtr3o"
  },
  {
    "title": "Lala Lala Lori x Gasolina",
    "artist": "Daddy Yankee Latin House Mix",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "BYRUn1DtccE"
  },
  {
    "title": "Softly x Mwaki",
    "artist": "Karan Aujla x Zerb Afro-House Rhythm",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "XnDwZTaqHOs"
  },
  {
    "title": "IDK HOW x Turn Off The Lights",
    "artist": "Karan Aujla x Fred Again.. UK Garage / Bass Edit",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "Uw64lL583uU"
  },
  {
    "title": "Jee Ni Lagda x Anchor Point",
    "artist": "Karan Aujla x Groovedev Organic Tribal House",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "BXNxrT59MzQ"
  },
  {
    "title": "Players x Temperature",
    "artist": "Badshah & Karan Aujla x Sean Paul Club Mashup",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "CeFQO9MQNqs"
  },
  {
    "title": "Chitta Kurta x Heads Will Roll",
    "artist": "Karan Aujla x A-Trak Electro Flip",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "o9PY6NsB3_E"
  },
  {
    "title": "Jail Karawegi x Tsunami",
    "artist": "DVBBS & Borgeous Hard-Drop Bootleg",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "0EWbonj7f18"
  },
  {
    "title": "Haryanvi Mashup (Diler Harkhiya / Renuka Panwar) x Rave Tool",
    "artist": "Continuous Peak-Drop Club Edit",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "BDWVdumiNJk"
  },
  {
    "title": "Gulzaar Chhaniwala Medley x Bounce Generation",
    "artist": "High-BPM Festival Edit",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "z6sDIc1Zqzs"
  },
  {
    "title": "Big Dawgs (Hanumankind) x Laserbeam",
    "artist": "Ray Volpe Heavy Festival Trap Drop",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true
  },
  {
    "title": "Taambdi Chaamdi x Tremor",
    "artist": "Dimitri Vegas & Like Mike Aggressive Mainstage Drop",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "9vMh9f41pqE"
  },
  {
    "title": "Illuminati (Aavesham) x Move Your Body",
    "artist": "Öwnboss Bass House Heavy Edit",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "Hx0koX2kcio"
  },
  {
    "title": "Aayi Nai (Stree 2) x Booyah",
    "artist": "Showtek Hardstyle / Peak Drop Mix",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "nFgsBxw-zWQ"
  },
  {
    "title": "Dhurandhar x Kernkraft 400",
    "artist": "Zombie Nation Big-Room Aggressive Drop",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "x2DfXg8aslY"
  },
  {
    "title": "Blockbuster (Faris Shafi) x Turn Down For What",
    "artist": "DJ Snake 808 Trap Drop",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "-urTPhh7gNk"
  },
  {
    "title": "Let's Nacho x Tamil Fever",
    "artist": "Nucleya x Benny Dayal x Badshah",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "dVYQOW2CIDw"
  },
  {
    "title": "Laung Gawacha (Nucleya Bass Rani Flip)",
    "artist": "ft. Avneet Khurmi",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "l12_JIQ2TqA"
  },
  {
    "title": "Aaja (Nucleya Street Bass Mashup)",
    "artist": "ft. Avneet Khurmi & Guri Gangsta",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "slNebO7Yips"
  },
  {
    "title": "Bhayanak Atma (Nucleya Festival Flip)",
    "artist": "ft. Gagan Mudgal",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "z6H7QX0fQrE"
  },
  {
    "title": "Scene Kya Hai",
    "artist": "Nucleya x DIVINE Bass Mashup",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "4zYOO4F1ecw"
  },
  {
    "title": "Jind Mahi (Nucleya Bass Edit)",
    "artist": "ft. Avneet Khurmi",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "EyvA65wimJs"
  },
  {
    "title": "Bakar Bakar",
    "artist": "Across The Spider-Verse Festival Edit",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "UcgTeZVBNZw"
  },
  {
    "title": "Jadi Buti (Nucleya VIP Remix / Mashup)",
    "artist": "Major Lazer x Nucleya ft. Rashmeet Kaur",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "4IymJWeIV-k"
  },
  {
    "title": "Mirza x Trap Drop",
    "artist": "Nucleya ft. Raftaar & Rashmeet Kaur",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "7fM4u782EuY"
  },
  {
    "title": "Chennai Bass (South Indian Folk x Dubstep Mashup)",
    "artist": "Nucleya ft. Sivamani & Chinna Ponnu",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "vdy4koj9haA"
  },
  {
    "title": "Bangla Bass (Folk-Bass Mashup)",
    "artist": "Nucleya ft. Mou Sultana & Brooklyn Shanti",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "57_x2GHX7Zw"
  },
  {
    "title": "Mumbai Dance (Street Moombahton Edit)",
    "artist": "ft. Julius Sylvest & Gagan Mudgal",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "f0DkVn-joQc"
  },
  {
    "title": "Akkad Bakkad (Desi Bass Drop)",
    "artist": "Nucleya",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "3mVFS8suPb0"
  },
  {
    "title": "Bell Gaadi (Koocha Trap Edit)",
    "artist": "ft. Chinna Ponnu & Relok",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "Q0Bm3lZ5jzs"
  },
  {
    "title": "Thandi Hawa (Nucleya Official Remix / Mashup)",
    "artist": "Ritviz x Nucleya",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "UNNOR690320"
  },
  {
    "title": "Roz (Baaraat Bass Edit)",
    "artist": "Ritviz x Nucleya",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "WCauHgLeqZc"
  },
  {
    "title": "Ari Ari (Punjabi Folk-Bass Mashup)",
    "artist": "Ritviz x Nucleya",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "uk-MjNSgrlY"
  },
  {
    "title": "Tauba Tauba x Losing It",
    "artist": "Bad Newz x FISHER Tech House Drop",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "LK7-_dgAVQE"
  },
  {
    "title": "Dum Maaro Dum x Turn Off The Lights",
    "artist": "Asha Bhosle x Fred Again.. London Bass Edit",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "c0-hvjV2A5Y"
  },
  {
    "title": "Sadda Haq x Heads Will Roll",
    "artist": "Rockstar x A-Trak Peak-Time Electro Drop",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "RUIFRhHDLqY"
  },
  {
    "title": "Bhaag D.K. Bose x Bonkers",
    "artist": "Delhi Belly x Dizzee Rascal Bass Rave Drop",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "IQEDu8SPHao"
  },
  {
    "title": "Kala Chashma x Bounce Generation",
    "artist": "Baar Baar Dekho x TJR & VINAI Bounce Drop",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "k4yXQkG2s1E"
  },
  {
    "title": "Besharam Rang x Drugs From Amsterdam",
    "artist": "Pathaan x Mau P Minimal Tech Punch",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "juuIhW8V1Xw"
  },
  {
    "title": "Aankh Marey x Move Your Body",
    "artist": "Simmba x Öwnboss & FAST BOY Brazilian Bass Drop",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "_KhQT-LGb-4"
  },
  {
    "title": "Choli Ke Peeche x Satisfaction",
    "artist": "Crew x Benny Benassi Electro-Tech Drop",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "lpV5UZaiq3s"
  },
  {
    "title": "Ghungroo x Ferrari",
    "artist": "War x James Hype Percussive Tech-House Drop",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "9uuCfUe7mb0"
  },
  {
    "title": "Dope Shope x Do It To It",
    "artist": "Yo Yo Honey Singh x ACRAZE Slap / Tech House Drop",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "vuCA_Xn5Kkg"
  },
  {
    "title": "Jaldi Aao (Bella Ciao x Desi Street Bass Mashup)",
    "artist": "Nucleya (Money Heist India)",
    "film": "Remix",
    "isRemix": true,
    "isAfro": true,
    "youtubeId": "nNDbFYfIU1A"
  }
];

const listSufi: any[] = [
  {
    "title": "Mera Yaar (Original Sufi Version)",
    "artist": "Javed Bashir & Shankar-Ehsaan-Loy",
    "film": "Bhaag Milkha Bhaag",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "ycS5PagXvhQ"
  },
  {
    "title": "Bol Kaffara Kya Hoga (Extended Version 1)",
    "artist": "DJ Abhii",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Bol Kaffara Kya Hoga (Extended Version 2)",
    "artist": "DJ Abhii",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Bulleya (Extended Version)",
    "artist": "DJ Abhii",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Jaan Se Guzarte Hai (Extended Version 1)",
    "artist": "DJ Abhii",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Jaan Se Guzarte Hai (Extended Version 2)",
    "artist": "DJ Abhii",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Kehna Galat Galat (Extended Version)",
    "artist": "DJ Abhii",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Maan Ki Lagan (Extended Version)",
    "artist": "DJ Abhii",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Sajdaa (Extended Version)",
    "artist": "DJ Abhii",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Tum Jo Aaye (Extended Version)",
    "artist": "DJ Abhii",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Tum Tak (Extended Version)",
    "artist": "DJ Abhii",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Yeh Tune Kya Kiya (Extended Version)",
    "artist": "DJ Abhii",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Kun Faya Kun",
    "artist": "(Extended Deep Melodic Mix)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Khwaja Mere Khwaja",
    "artist": "(Extended BollyTech Flip)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Arziyan (Delhi",
    "artist": "6) (Extended Sufi House Mix)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Tajdar",
    "artist": "E",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Afreen Afreen",
    "artist": "(Extended Organic House Edit)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Nit Khair Manga",
    "artist": "(Extended Melodic Techno Edit)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Sanu Ek Pal Chain",
    "artist": "(Extended Afro House Mix)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Rashke Qamar",
    "artist": "(Extended BollyTech Club Edit)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Chhaap Tilak",
    "artist": "(Extended Tribal Afro House Edit)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Halka Halka Suroor",
    "artist": "(Extended Progressive Sufi Mix)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Tu Mane Ya Na Mane",
    "artist": "(Extended Deep House Version)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Kinna Sohna Tenu Rab Ne Banaya",
    "artist": "(Extended Tech House Flip)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Mast Nazron Se Allah Bachaye",
    "artist": "(Extended Melodic Edit)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "O Re Piya",
    "artist": "(Extended Deep Spiritual House Edit)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Jiya Dhadak Dhadak Jaye (Extended Afro",
    "artist": "Tech Mix)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Dama Dam Mast Qalandar",
    "artist": "(Extended BollyTech Banger Edit)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Ali Maula Ali Maula",
    "artist": "(Extended Techno Flip)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Iktara",
    "artist": "(Extended Melodic House Mix)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Tere Bin Nahi Lagda",
    "artist": "(Extended Deep Afro Edit)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Man Kunto Maula",
    "artist": "(Extended Spiritual House Mix)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Allah Hoo",
    "artist": "(Extended Organic Techno Edit)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Saanson Ki Mala Pe",
    "artist": "(Extended Melodic Tech Edit)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Yeh Jo Halka Halka Suroor Hai",
    "artist": "(Extended Club Tech Mix)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Noor",
    "artist": "E",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Bhar Do Jholi Meri",
    "artist": "(Extended Afro House Flip)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Main Talkhiye Hayaat Se",
    "artist": "(Extended Sufi Deep Mix)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Piya Haji Ali",
    "artist": "(Extended Melodic House Edit)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Tu Jhoom",
    "artist": "(Extended Afro House Mix)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Faasle",
    "artist": "(Extended Deep Melodic Techno Edit)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Jugni",
    "artist": "(Extended BollyTech Club Mix)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Maula Mere Maula",
    "artist": "(Extended Organic Deep Mix)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Aap Baithe Hain Balin Peh Meri",
    "artist": "(Extended Tech House Flip)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Wohi Khuda Hai",
    "artist": "(Extended Ambient House Mix)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Ghum Charakhra",
    "artist": "(Extended Tribal Tech Edit)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Kiven Mukhre Ton Nazran Hatawan",
    "artist": "(Extended Afro House Version)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Lal Meri Pat",
    "artist": "(Extended Progressive Techno Edit)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Mera Piya Ghar Aaya (Extended High",
    "artist": "BPM Tech Mix)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Ali Dum Dum De Andar",
    "artist": "(Extended Tribal Sufi Mix)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Akhiyan Udeek Diyan (Extended Afro",
    "artist": "Tech Edit)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Kali Kali Zulfon Ke",
    "artist": "(Extended Tech House Remix)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Yaar Da Makaan",
    "artist": "(Extended Deep Sufi Flip)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Ishq Aap Bhe Awalla",
    "artist": "(Extended Organic Afro House Mix)",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Tajdar-E-Haram x Bhar Do Jholi",
    "artist": "Atif Aslam & Sabri Brothers Medley",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "a18py61_F_w"
  },
  {
    "title": "Afreen Afreen x Sanu Ek Pal Chain",
    "artist": "Acoustic Guitar Sufi Fusion",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "kw4tT7SCmaY"
  },
  {
    "title": "Kun Faya Kun x Arziyan",
    "artist": "Deep Spiritual Medley",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "uizBajSQurU"
  },
  {
    "title": "Iktara x Kabira",
    "artist": "Acoustic Indie-Sufi Mashup",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "55n0XterUkI"
  },
  {
    "title": "Tu Mane Ya Na Mane x Bulla Ki Jaana",
    "artist": "Wadali Brothers x Rabbi Shergill Fusion",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "coSX7DqD7MY"
  },
  {
    "title": "O Re Piya x Maula Mere Maula",
    "artist": "Soulful Rahat Fateh Ali Khan Blend",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "llS3TVkGA04"
  },
  {
    "title": "Nit Khair Manga x Halka Halka Suroor",
    "artist": "Nusrat Fateh Ali Khan Classic Mashup",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "cmG51rEThuM"
  },
  {
    "title": "Chaap Tilak x Dama Dam Mast Qalandar",
    "artist": "Raw Acoustic Qawwali Medley",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "3Tj3pbUy55s"
  },
  {
    "title": "Kun Faya Kun x Mwaki",
    "artist": "Zerb Style Afro-House Spiritual Flip",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "y6iMvNkAQt4"
  },
  {
    "title": "Mera Yaar (Wo Noor Ka Jharna) x Alif Allah",
    "artist": "DJ Abhii Extended Sufi House Mix",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "ycS5PagXvhQ"
  },
  {
    "title": "Tajdar-E-Haram x Miracle",
    "artist": "Calvin Harris Melodic Techno Mashup",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "e9xxt8VPvSA"
  },
  {
    "title": "Afreen Afreen x Move Your Body",
    "artist": "Öwnboss Style Bass-Tech Flip",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "CASyPdNqc_o"
  },
  {
    "title": "Kinna Sohna Tenu x Drugs From Amsterdam",
    "artist": "Mau P Minimal Tech Bootleg",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "juuIhW8V1Xw"
  },
  {
    "title": "Rashke Qamar x Losing It",
    "artist": "FISHER Tech House Club Edit",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "oUbpmjOgmmU"
  },
  {
    "title": "Bol Kaffara Kya Hoga x Do It To It",
    "artist": "ACRAZE Tech Flip",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "wBk4o-NrKN0"
  },
  {
    "title": "Yeh Tune Kya Kiya x Turn Off The Lights",
    "artist": "Fred Again.. Style Deep House Edit",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "Q22MCFC0CP0"
  },
  {
    "title": "Chhaap Tilak x Baianá",
    "artist": "Bakermat Afro-House Spiritual Edit",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "iaGjz4dtr3o"
  },
  {
    "title": "Jaan Se Guzarte Hain x Ferrari",
    "artist": "James Hype Tech House Rework",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "vj-2HsjJX94"
  },
  {
    "title": "Bulleya x Tremor",
    "artist": "High-Energy Big-Room Festival Mashup",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "09Rr3BIe5s0"
  },
  {
    "title": "Khwaja Mere Khwaja x Age Of Love",
    "artist": "Peak-Time Melodic Techno Flip",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "4YbAaRFk70o"
  },
  {
    "title": "Nit Khair Manga x Deep Down",
    "artist": "Alok Melodic House Edit",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "RoF8lw6q57U"
  },
  {
    "title": "Sanu Ek Pal Chain x Anchor Point",
    "artist": "Organic Afro-House Groove",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "_fb72ArcgBk"
  },
  {
    "title": "Ali Maula x Satisfaction",
    "artist": "Benny Benassi Tech House Bootleg",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "lpV5UZaiq3s"
  },
  {
    "title": "Afreen Afreen x Sanu Ek Pal Chain (Acoustic)",
    "artist": "Acoustic Sufi Medley",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "34BTjZd-dYE"
  },
  {
    "title": "Halka Halka Suroor x Nit Khair Manga",
    "artist": "Classic NFAK Qawwali Blend",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "cmG51rEThuM"
  },
  {
    "title": "Kinna Sohna Tenu x Tere Bin Nahi Lagda",
    "artist": "Soulful Romantic Sufi Mashup",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "55n0XterUkI"
  },
  {
    "title": "Rashke Qamar x Sochta Hoon Ke Woh Kitne Masoom The",
    "artist": "Qawwali Fusion Edit",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "RaRHiuYXr80"
  },
  {
    "title": "Kali Kali Zulfon Ke x Mast Nazron Se Allah Bachaye",
    "artist": "Fast-Tempo NFAK Medley",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "o-7b6ctrQX0"
  },
  {
    "title": "Mera Piya Ghar Aaya x Dama Dam Mast Qalandar",
    "artist": "High-Energy Traditional Sufi Mashup",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "K3FOnamKIm4"
  },
  {
    "title": "Kiven Mukhre Ton Nazran Hatawan x Akhiyan Udeek Diyan",
    "artist": "Melodic Folk Sufi Blend",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "92fsyPmSmBM"
  },
  {
    "title": "Tumhein Dillagi Bhool Jaani Padegi x Halka Halka Suroor",
    "artist": "Emotional Sufi Medley",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "MpmUpxuBWOs"
  },
  {
    "title": "Rashke Qamar x Losing It (FISHER)",
    "artist": "Tech House Festival Edit",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "oUbpmjOgmmU"
  },
  {
    "title": "Kinna Sohna Tenu x Drugs From Amsterdam (Mau P)",
    "artist": "Minimal Tech Club Flip",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "juuIhW8V1Xw"
  },
  {
    "title": "Nit Khair Manga x Deep Down (Alok)",
    "artist": "Melodic House Extended Edit",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "cmG51rEThuM"
  },
  {
    "title": "Sanu Ek Pal Chain x Anchor Point (Organic)",
    "artist": "Organic Afro-House Spiritual Edit",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "m4j3nvuULSM"
  },
  {
    "title": "Halka Halka Suroor x Satisfaction (Benny Benassi)",
    "artist": "Driving Electro-Tech Bootleg",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "lpV5UZaiq3s"
  },
  {
    "title": "Kali Kali Zulfon Ke x Ferrari (James Hype)",
    "artist": "High-BPM Peak-Time Tech Rework",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "qA5zMom6WAc"
  },
  {
    "title": "Mera Piya Ghar Aaya x Tremor (DVLM)",
    "artist": "Big-Room Festival Drop Mix",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "hC2uh53pc20"
  },
  {
    "title": "Mast Nazron Se x Do It To It (ACRAZE)",
    "artist": "BollyTech Club Edit",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "6wwuEXlIniU"
  },
  {
    "title": "Tere Bin Nahi Lagda x Baianá (Bakermat)",
    "artist": "Deep Afro-Tech House Flip",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "H_QO_nmONEU"
  },
  {
    "title": "Kiven Mukhre Ton x Turn Off The Lights (Fred Again..)",
    "artist": "Melodic Indo-Bass Rework",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true,
    "youtubeId": "s-gVxITC_pI"
  },
  {
    "title": "Teri Deewani x Die With A Smile (Kailash Kher x Bruno Mars & Lady Gaga)",
    "artist": "Melodic Afro-House / Progressive crossover edit",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Saiyyan x Sunset Lover (Kailash Kher x Petit Biscuit)",
    "artist": "Chill deep house vocal flip with ambient pads",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Allah Ke Bande x Don't You Worry Child (Kailash Kher x Swedish House Mafia)",
    "artist": "Uplifting festival progressive house bootleg",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Bam Lahiri x Rave Tool / Laserbeam (Kailash Kher x Ray Volpe)",
    "artist": "High-energy folk-trance buildup leading into a heavy bass drop",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Chaandan Mein x Anchor Point (Kailash Kher x Groovedev Edit)",
    "artist": "Percussive Afro-Tech groove beneath traditional acoustic Sufi vocals",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Ya Rabba x Faded (Kailash Kher x Alan Walker)",
    "artist": "Melodic house bootleg pairing soulful vocals with rolling basslines",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Arziyan x Turn Off The Lights (Kailash Kher & Javed Ali x Fred Again..)",
    "artist": "UK Garage and deep Indo-bass crossover",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Chak Lein De x Animals (Kailash Kher x Martin Garrix)",
    "artist": "High-tempo motivational vocal build transitioning into a big-room electro drop",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Tu Jaane Na (Unplugged) x Clarity (Kailash Kher x Zedd)",
    "artist": "Melodic festival house vocal mashup",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  },
  {
    "title": "Albela Sajan x Losing It (Kailash Kher x FISHER)",
    "artist": "Classical fusion vocals layered over an aggressive minimal tech-house punch",
    "film": "Remix",
    "isRemix": true,
    "isSufi": true
  }
];

const listX: any[] = [
  {
    "title": "Baap Se x Ferrari (James Hype Tech Rework)",
    "artist": "Seedhe Maut x KR$NA",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Asthagfirullah x Snake (Bass House Edit)",
    "artist": "DIVINE x MC Stan",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Open Letter x Satisfaction (Benny Benassi Tech Flip)",
    "artist": "Talha Anjum x Umair",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Trap Praa x Laserbeam (Ray Volpe Festival Drop)",
    "artist": "Raftaar x Prabh Deep",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Giraftaar x Losing It (FISHER Tech House Mix)",
    "artist": "Emiway Bantai x DIVINE",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Luka Chippi x Drugs From Amsterdam (Mau P Minimal Tech)",
    "artist": "Seedhe Maut x Calm",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Forever x Do It To It (ACRAZE Tech Edit)",
    "artist": "KR$NA x Brodha V",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Tadipaar x Turn Off The Lights (Fred Again.. Edit)",
    "artist": "MC Stan x Seedhe Maut",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Wish You Were Here x Heads Will Roll (A-Trak Mix)",
    "artist": "Seedhe Maut x Encore ABJ",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Gumaan x Piece Of Your Heart (Meduza Deep Tech)",
    "artist": "Talha Anjum x Talhah Yunus",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "100 Million x Move Your Body (Öwnboss Bass House)",
    "artist": "DIVINE x Karan Aujla",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Damn x Gasolina (Daddy Yankee Latin Tech House)",
    "artist": "KR$NA x Raftaar",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Maya x Sweet Dreams (Eurythmics Dark Techno)",
    "artist": "Prabh Deep x Sez On The Beat",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Kavi x Danza Kuduro (Don Omar Afro-Tech Edit)",
    "artist": "Seedhe Maut x Umair",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Khatam Hue Waande x Tremor (DVLM Festival Edit)",
    "artist": "Emiway Bantai x MC Stan",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Tu Aake Dekhle x Baianá (Bakermat Afro House Flip)",
    "artist": "King x Zaeden",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Monster x Spaceman (Hardwell Peak-Time Tech)",
    "artist": "Bella x Seedhe Maut",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Zaruri Nahi x Destination Calabria (Alex Gaudino Flip)",
    "artist": "KR$NA x Karma",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Mirchi x Kernkraft 400 (Zombie Nation Big-Room Edit)",
    "artist": "DIVINE x Phenom",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Touch Base x Mammoth (DVLM Club Banger)",
    "artist": "Talha Anjum x Umair",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Ball x One Kiss (Calvin Harris & Dua Lipa Edit)",
    "artist": "Seedhe Maut x Sez On The Beat",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Drama x Animals (Martin Garrix Big-Room Flip)",
    "artist": "Raftaar x Badshah",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Basti Ka Hasti x Titanium (David Guetta Electro Edit)",
    "artist": "MC Stan x DIVINE",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Touch Base (Drill) x Work It (Fisher Tech Mix) 25. Prabh Deep x Calm – Amar x Low Frequency (Denney Deep Tech Flip) 26. Seedhe Maut x Fotty Seven – Haath Baandh x Deep Down (Alok Melodic House) 27. Emiway Bantai x Celina Sharma – Machayenge x Lean On (Major Lazer Tech Flip) 28. Talha Anjum x Savage – Karachi Mera x Sunset Lover (Petit Biscuit Chill House) 29. DIVINE x Nas – NY Se Mumbai x Turn Down For What (DJ Snake Trap Edit) 30. Raftaar x KR$NA – Saath Ya Khilaaf x Age Of Love (Melodic Techno Flip)",
    "artist": "KR$NA x Talha Anjum",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Baat Bangayi x Better Off Alone (Alice Deejay Tech)",
    "artist": "Seedhe Maut x Ahmer",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Ek Din Pyaar x Deep Fear (Sidekick Tech House Mix)",
    "artist": "MC Stan x King",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Khoya Sab x Stay (The Kid LAROI Deep House Edit)",
    "artist": "Bella x Gravity",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Farak Nahi Padta x The Rockafeller Skank (Fatboy Slim)",
    "artist": "KR$NA x Subspace",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Mirchi Remix x Mi Gente (J Balvin Tribal House Mix)",
    "artist": "DIVINE x Stylo G",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Agency x Habits (Stay High) (Tove Lo Deep House)",
    "artist": "Talha Anjum x Umair",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Scalp Dem x Silicon Luv (Indo-Tech Peak Edit)",
    "artist": "Seedhe Maut x Foreign Beggars",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Saza-E-Maut x Bangarang (Skrillex Tech Flip)",
    "artist": "Raftaar x Deep Kalsi",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "New Bombay x Drop It Like It's Hot (House Mix)",
    "artist": "Emiway Bantai x Snoop Dogg",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Chitta x Sun & Moon (Above & Beyond Progressive)",
    "artist": "Prabh Deep x Sez On The Beat",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Kahan Par Hai x Clarity (Zedd Melodic House Flip)",
    "artist": "MC Stan x Raftaar",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Hola Amigo x Pepas (Farruko Latin Tech Edit)",
    "artist": "KR$NA x Seedhe Maut",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Wish x Wake Me Up (Avicii Sunset Tech)",
    "artist": "Talha Anjum x Hasan Raheem",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Gandhi Money x Bounce Generation (TJR Big-Room)",
    "artist": "DIVINE x Shah Rule",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Class-Sikh Maut x Show Me Love (Robin S House Edit)",
    "artist": "Seedhe Maut x Tienas",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Chehre x Let Me Love You (DJ Snake Vocal Mix)",
    "artist": "Bella x MC Square",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Maaye Ni x Reload (Sebastian Ingrosso Progressive)",
    "artist": "Raftaar x Salim-Sulaiman",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Grind x Thrift Shop (Macklemore Groovy House)",
    "artist": "Emiway Bantai x Macklemore",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Haath Varthi x Opus (Eric Prydz Melodic Techno Edit)",
    "artist": "MC Stan x KSHMR",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Villena x Take Over Control (Afrojack Tech Edit)",
    "artist": "KR$NA x Phenom",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "King x How Deep Is Your Love (Calvin Harris Mix)",
    "artist": "Prabh Deep x DIVINE",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Afsanay x Love Nwantiti (Afro-Tech Edit)",
    "artist": "Talha Anjum x Talhah Yunus",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Do Guna x Luv Deluxe (Minimal Tech Rework)",
    "artist": "Seedhe Maut x Sez On The Beat",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Chal Bombay x Cold Water (Major Lazer Club Mix)",
    "artist": "DIVINE x Jonita Gandhi",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Aage Chal x Danza Kuduro (Don Omar Latin Tech)",
    "artist": "Raftaar x Deep Kalsi",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Amin x In Da Club (50 Cent House Edit)",
    "artist": "MC Stan x Seedhe Maut",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Prarthana x Pump It (Black Eyed Peas Tech Flip) 58. Bella x King – Sweet Poison x Turn Up The Speakers (Afrojack & Martin Garrix) 59. Emiway Bantai x Meme Machine – Machayenge 3 x Booyah (Showtek Festival Mix) 60. Talha Anjum x Umair – Secrets x Push The Feeling On (Nightcrawlers House) 61. Seedhe Maut x Rawal – Kyu x Temperature (Sean Paul Afro-Tech Mix) 62. DIVINE x Vince Staples – Punya Paap x Let's Get It Started (Tech House Edit) 63. Prabh Deep x Sez On The Beat – Tabia x Jump & Sweat (Garmiani Tribal Edit) 64. Raftaar x KR$NA – Untitled x Riverside (Sidney Samson Tech Flip)",
    "artist": "KR$NA x Kidshot",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Regret x Under The Stars (Melodic Techno Mix)",
    "artist": "MC Stan x Umair",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Vyanjan x Silence (Delerium Melodic Edit)",
    "artist": "KR$NA x Brodha V",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Jawab De x Samba De Janeiro (Bellini Afro-Tech)",
    "artist": "Talha Anjum x Faris Shafi",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Keh Chuka x Low Frequency (Denney Tech Edit)",
    "artist": "Seedhe Maut x Calm",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Level Up x Baila Conmigo (Dayvi Latin House Flip)",
    "artist": "DIVINE x MC Altaf",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Ring Ring x Tsunami (DVBBS & Borgeous Mix)",
    "artist": "Emiway Bantai x Swaalina",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Antidote x Greyhound (Swedish House Mafia Mix)",
    "artist": "Bella x Deepak Rathore Project",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Ready For My City x Macarena (Los Del Rio House Flip)",
    "artist": "Raftaar x Badshah",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Broke Is A Joke x Bonkers (Dizzee Rascal Tech Mix)",
    "artist": "MC Stan x DIVINE",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "I Guess x Trumpets (Sak Noel Tech House Mix)",
    "artist": "KR$NA x Seedhe Maut",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Downers At Dusk x Ocean (Martin Garrix Progressive)",
    "artist": "Talha Anjum x Umair",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Suno x Intoxicated (Martin Solveig House Edit)",
    "artist": "Prabh Deep x Calm",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Nawaazishein x World, Hold On (Bob Sinclar Edit)",
    "artist": "Seedhe Maut x Encore ABJ",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Kohinoor x Bla Bla Bla (Gigi D'Agostino Tech House)",
    "artist": "DIVINE x Phenom",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Jump Kar x Summer (Calvin Harris House Mix)",
    "artist": "Emiway Bantai x Young Galib",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Naiyyo x Habibi (Shaggy Afro-Tech)",
    "artist": "Raftaar x Akasa",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Yede Ki Chaal x SexyBack (Justin Timberlake Flip)",
    "artist": "MC Stan x Sez On The Beat",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Dekh Kaun Aaya Wapas x Rave Tool (High-Energy Festival Mix)",
    "artist": "KR$NA x Raga",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Bandish x Rasputin (Majestic Tech House Rework)",
    "artist": "Talha Anjum x Savage",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "PNP x Heads Will Roll (A-Trak House Edit)",
    "artist": "Seedhe Maut x Sez On The Beat",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Teesri Manzil x Losing It (FISHER Tech Flip)",
    "artist": "DIVINE x D'Evil",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Spacecraft x Ferrari (James Hype Tech Rework)",
    "artist": "Bella x Seedhe Maut",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Sher x Do It To It (ACRAZE Tech Edit)",
    "artist": "Prabh Deep x Raftaar",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Snake x Drugs From Amsterdam (Mau P Minimal Tech)",
    "artist": "MC Stan x Karma",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Round One x Turn Off The Lights (Fred Again.. Edit)",
    "artist": "Emiway Bantai x Loka",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "OG x Gasolina (Daddy Yankee Latin Tech)",
    "artist": "KR$NA x Seedhe Maut",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Talk To Me x Sweet Dreams (Eurythmics Dark Techno)",
    "artist": "Talha Anjum x Umair",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Sitara x Danza Kuduro (Don Omar Afro-Tech)",
    "artist": "DIVINE x Shah Rule",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Pain x Tremor (DVLM Festival Edit)",
    "artist": "Seedhe Maut x Calm",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Sheikh Chilli x Piece Of Your Heart (Meduza Deep Tech)",
    "artist": "Raftaar x Prabh Deep",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "I'm Done x Move Your Body (Öwnboss Bass House)",
    "artist": "MC Stan x King",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Humble Poet x Kernkraft 400 (Zombie Nation Edit)",
    "artist": "Bella x Talhah Yunus",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Bag x Satisfaction (Benny Benassi Tech House)",
    "artist": "KR$NA x DIVINE",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Yaad x Laserbeam (Ray Volpe Festival Drop)",
    "artist": "Seedhe Maut x Sez On The Beat",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Glass Half Full x Spaceman (Hardwell Tech Rework)",
    "artist": "Talha Anjum x Umair",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  },
  {
    "title": "Chhod Daale x Animals (Martin Garrix Big-Room Flip)",
    "artist": "Emiway Bantai x MC Stan",
    "film": "Remix",
    "isRemix": true,
    "isX": true
  }
];

const listHustle: any[] = [
  {
    "title": "Baaghi",
    "artist": "M-Zee Bella",
    "film": "MTV Hustle",
    "youtubeId": "QuAPfzCD6Zo",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 1
  },
  {
    "title": "Goku",
    "artist": "M-Zee Bella",
    "film": "MTV Hustle",
    "youtubeId": "1glWWQP5ENs",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 2
  },
  {
    "title": "Door",
    "artist": "M-Zee Bella",
    "film": "MTV Hustle",
    "youtubeId": "9fAzyTza7W8",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 3
  },
  {
    "title": "Chal Koi Baat Nahi",
    "artist": "M-Zee Bella",
    "film": "MTV Hustle",
    "youtubeId": "HDi-5Ox9kgE",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 4
  },
  {
    "title": "Tamasha",
    "artist": "M-Zee Bella",
    "film": "MTV Hustle",
    "youtubeId": "dR9BS1E_PXw",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 5
  },
  {
    "title": "Psycho",
    "artist": "M-Zee Bella",
    "film": "MTV Hustle",
    "youtubeId": "pPEY3ztOqLw",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 6
  },
  {
    "title": "Namastey Hindustaan",
    "artist": "M-Zee Bella",
    "film": "MTV Hustle",
    "youtubeId": "DAxJYxYWrMw",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 7
  },
  {
    "title": "Parchhaiyan",
    "artist": "M-Zee Bella",
    "film": "MTV Hustle",
    "youtubeId": "-OBBy7sQJd0",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 8
  },
  {
    "title": "Aazadi",
    "artist": "M-Zee Bella",
    "film": "MTV Hustle",
    "youtubeId": "J9mpbVOpkJc",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 9
  },
  {
    "title": "Agneepath",
    "artist": "EPR Iyer",
    "film": "MTV Hustle",
    "youtubeId": "tHD5xuuRQsQ",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 10
  },
  {
    "title": "Insaaf Ka Qatil",
    "artist": "EPR Iyer",
    "film": "MTV Hustle",
    "youtubeId": "E6s0XVrfpKk",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 11
  },
  {
    "title": "Har Kadam Pe",
    "artist": "EPR Iyer",
    "film": "MTV Hustle",
    "youtubeId": "rFa3cr34HAI",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 12
  },
  {
    "title": "Srini Bana EPR",
    "artist": "EPR Iyer",
    "film": "MTV Hustle",
    "youtubeId": "9EdD4q4jm8k",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 13
  },
  {
    "title": "Raasta-Man",
    "artist": "EPR Iyer",
    "film": "MTV Hustle",
    "youtubeId": "CyBNBQcdFCY",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 14
  },
  {
    "title": "Main Rawa",
    "artist": "EPR Iyer",
    "film": "MTV Hustle",
    "youtubeId": "th8WTaH5f64",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 15
  },
  {
    "title": "Rok Nah Ruke Hum",
    "artist": "EPR Iyer",
    "film": "MTV Hustle",
    "youtubeId": "mmDi340rFvo",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 16
  },
  {
    "title": "Kalam Kari",
    "artist": "EPR Iyer",
    "film": "MTV Hustle",
    "youtubeId": "Xlc4bfBunh8",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 17
  },
  {
    "title": "Badnaam Raja",
    "artist": "King",
    "film": "MTV Hustle",
    "youtubeId": "QgYV6HxkpsM",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 18
  },
  {
    "title": "Aye Jaani",
    "artist": "King",
    "film": "MTV Hustle",
    "youtubeId": "FrdLXPdcVpQ",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 19
  },
  {
    "title": "Gold Digger",
    "artist": "King",
    "film": "MTV Hustle",
    "youtubeId": "Lrk7UIfjMjU",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 20
  },
  {
    "title": "Memories",
    "artist": "King",
    "film": "MTV Hustle",
    "youtubeId": "kulwUCAapjs",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 21
  },
  {
    "title": "Moment Hai",
    "artist": "King",
    "film": "MTV Hustle",
    "youtubeId": "XshjDhMhzBo",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 22
  },
  {
    "title": "Usool",
    "artist": "King",
    "film": "MTV Hustle",
    "youtubeId": "s3ZbJUMmn9k",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 23
  },
  {
    "title": "She Don't Give A",
    "artist": "King",
    "film": "MTV Hustle",
    "youtubeId": "YTSDgHuWVN4",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 24
  },
  {
    "title": "High",
    "artist": "King",
    "film": "MTV Hustle",
    "youtubeId": "tqHENdlpLLw",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 25
  },
  {
    "title": "Father",
    "artist": "RCR",
    "film": "MTV Hustle",
    "youtubeId": "v8Pc2XOpTCs",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 26
  },
  {
    "title": "Aaja Mere Nede Nede",
    "artist": "RCR",
    "film": "MTV Hustle",
    "youtubeId": "bFZnULfmP8c",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 27
  },
  {
    "title": "Leja Kahin Door Khuda",
    "artist": "RCR",
    "film": "MTV Hustle",
    "youtubeId": "p9tvdKK8uJs",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 28
  },
  {
    "title": "Rap Ki Bimaari",
    "artist": "RCR",
    "film": "MTV Hustle",
    "youtubeId": "BuMIUUgDVdQ",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 29
  },
  {
    "title": "Main Pagal",
    "artist": "RCR",
    "film": "MTV Hustle",
    "youtubeId": "jrOZ9RU7zXw",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 30
  },
  {
    "title": "Tum Ho Jaali",
    "artist": "RCR",
    "film": "MTV Hustle",
    "youtubeId": "zReBtzODbso",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 31
  },
  {
    "title": "Yeh Dil Chup Chaap",
    "artist": "RCR",
    "film": "MTV Hustle",
    "youtubeId": "R5mYtEHboaA",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 32
  },
  {
    "title": "RCR Standard",
    "artist": "RCR",
    "film": "MTV Hustle",
    "youtubeId": "ooK9kuQdlZE",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 33
  },
  {
    "title": "Swan Song",
    "artist": "Shloka",
    "film": "MTV Hustle",
    "youtubeId": "o8sdS8sjeMA",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 34
  },
  {
    "title": "Laashein",
    "artist": "Shloka",
    "film": "MTV Hustle",
    "youtubeId": "AGPCLpPkGIA",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 35
  },
  {
    "title": "Maaya",
    "artist": "Shloka",
    "film": "MTV Hustle",
    "youtubeId": "bfzBu4Hctt0",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 36
  },
  {
    "title": "Peedha",
    "artist": "Shloka",
    "film": "MTV Hustle",
    "youtubeId": "SS_F-b5FDog",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 37
  },
  {
    "title": "Pita",
    "artist": "Shloka",
    "film": "MTV Hustle",
    "youtubeId": "ArkuaXAQ_-k",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 38
  },
  {
    "title": "Garda Urega",
    "artist": "Shloka",
    "film": "MTV Hustle",
    "youtubeId": "jTAxcOCUCgA",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 39
  },
  {
    "title": "Kaarvaan",
    "artist": "Shloka",
    "film": "MTV Hustle",
    "youtubeId": "CNiRFTI5PtA",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 40
  },
  {
    "title": "Indian Diversity",
    "artist": "Agsy",
    "film": "MTV Hustle",
    "youtubeId": "ZjcsnDkyiMQ",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 41
  },
  {
    "title": "Bezubaan",
    "artist": "Agsy",
    "film": "MTV Hustle",
    "youtubeId": "Ws5IlKQ-CC8",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 42
  },
  {
    "title": "Janani",
    "artist": "Agsy",
    "film": "MTV Hustle",
    "youtubeId": "Tfy0JXrbxOQ",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 43
  },
  {
    "title": "Khai",
    "artist": "Agsy",
    "film": "MTV Hustle",
    "youtubeId": "iXagS04G6NY",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 44
  },
  {
    "title": "Latt",
    "artist": "Agsy",
    "film": "MTV Hustle",
    "youtubeId": "XsGJGIgEXKA",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 45
  },
  {
    "title": "Na Tum Akele",
    "artist": "Agsy",
    "film": "MTV Hustle",
    "youtubeId": "QaKpeRxaZxM",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 46
  },
  {
    "title": "Danav",
    "artist": "Agsy",
    "film": "MTV Hustle",
    "youtubeId": "lmgCGHkeh4c",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 47
  },
  {
    "title": "Haarun Main Kaise",
    "artist": "Void",
    "film": "MTV Hustle",
    "youtubeId": "vTdZtpWKw-Y",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 48
  },
  {
    "title": "Void Kaun Hai",
    "artist": "Void",
    "film": "MTV Hustle",
    "youtubeId": "UGPdjICNv1g",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 49
  },
  {
    "title": "Raghav Aur Arpan",
    "artist": "Void",
    "film": "MTV Hustle",
    "youtubeId": "BA66itXmfxQ",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 50
  },
  {
    "title": "Solo",
    "artist": "Void",
    "film": "MTV Hustle",
    "youtubeId": "nyi4SKQzwRA",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 51
  },
  {
    "title": "No Pain",
    "artist": "Void",
    "film": "MTV Hustle",
    "youtubeId": "bz2uhi5mqh0",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 52
  },
  {
    "title": "No Sleep",
    "artist": "MC Heam",
    "film": "MTV Hustle",
    "youtubeId": "lsLEbgdtJ5A",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 53
  },
  {
    "title": "Pratik",
    "artist": "MC Heam",
    "film": "MTV Hustle",
    "youtubeId": "qPPVM2Gh5fM",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 54
  },
  {
    "title": "Daud Baag",
    "artist": "MC Heam",
    "film": "MTV Hustle",
    "youtubeId": "18zMTSKkDYY",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 55
  },
  {
    "title": "Welcome",
    "artist": "MC Heam",
    "film": "MTV Hustle",
    "youtubeId": "JJNKqMcCu7k",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 56
  },
  {
    "title": "Launda Befikar",
    "artist": "MC Heam",
    "film": "MTV Hustle",
    "youtubeId": "8DMlJ3FVPl8",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 57
  },
  {
    "title": "Body Shaming",
    "artist": "Raeza",
    "film": "MTV Hustle",
    "youtubeId": "0UXyAKRFVvs",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 58
  },
  {
    "title": "Expression",
    "artist": "Raeza",
    "film": "MTV Hustle",
    "youtubeId": "HQZL7PHZ2vY",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 59
  },
  {
    "title": "Comeback",
    "artist": "Raeza",
    "film": "MTV Hustle",
    "youtubeId": "Q6xrawvWA1M",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 60
  },
  {
    "title": "Kranti",
    "artist": "Raeza",
    "film": "MTV Hustle",
    "youtubeId": "Fd81aiHnFOQ",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 61
  },
  {
    "title": "Khel Abhi Jari Hain",
    "artist": "Raeza",
    "film": "MTV Hustle",
    "youtubeId": "8tXmfDmui4c",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 62
  },
  {
    "title": "Udaan Le Le",
    "artist": "Raeza",
    "film": "MTV Hustle",
    "youtubeId": "2v0TwVp4XfM",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 63
  },
  {
    "title": "Raeza Ladegi",
    "artist": "Raeza",
    "film": "MTV Hustle",
    "youtubeId": "MTLfgMjupKA",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 64
  },
  {
    "title": "Bajao",
    "artist": "Shetty Saa",
    "film": "MTV Hustle",
    "youtubeId": "SO74tGYb5og",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 65
  },
  {
    "title": "Chinese",
    "artist": "Shetty Saa",
    "film": "MTV Hustle",
    "youtubeId": "GYHY1a2wz6Q",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 66
  },
  {
    "title": "Maa",
    "artist": "Shetty Saa",
    "film": "MTV Hustle",
    "youtubeId": "-sUDGEcqNJM",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 67
  },
  {
    "title": "Road Pe",
    "artist": "Shetty Saa",
    "film": "MTV Hustle",
    "youtubeId": "RZDEnyl4HJY",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 68
  },
  {
    "title": "Stage Pe",
    "artist": "Shetty Saa",
    "film": "MTV Hustle",
    "youtubeId": "TeaMjaCKEis",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 69
  },
  {
    "title": "6 Mahine Ruk Jaa",
    "artist": "Himan",
    "film": "MTV Hustle",
    "youtubeId": "zbNfwoEwrOA",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 70
  },
  {
    "title": "Aunga Aunga",
    "artist": "Himan",
    "film": "MTV Hustle",
    "youtubeId": "MQfP_rmssB8",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 71
  },
  {
    "title": "Hinda Musalman",
    "artist": "Himan",
    "film": "MTV Hustle",
    "youtubeId": "pSw1kc9kWeM",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 72
  },
  {
    "title": "Middle Class",
    "artist": "Himan",
    "film": "MTV Hustle",
    "youtubeId": "1SFLf3IXZ7I",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 73
  },
  {
    "title": "Don't Drink And Drive",
    "artist": "Himan",
    "film": "MTV Hustle",
    "youtubeId": "H0VUX01HG6w",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 74
  },
  {
    "title": "Fakeman",
    "artist": "Himan",
    "film": "MTV Hustle",
    "youtubeId": "uCrBL-8qgFo",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 75
  },
  {
    "title": "Kya Dikkat Hai",
    "artist": "Firaag",
    "film": "MTV Hustle",
    "youtubeId": "vsFeZGpkIRk",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 76
  },
  {
    "title": "Aag Se Jalte",
    "artist": "Firaag",
    "film": "MTV Hustle",
    "youtubeId": "sf5soB47vUk",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 77
  },
  {
    "title": "Faadunga",
    "artist": "Firaag",
    "film": "MTV Hustle",
    "youtubeId": "nA65wBvSIGI",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 78
  },
  {
    "title": "Haar Gaya Hoon",
    "artist": "Firaag",
    "film": "MTV Hustle",
    "youtubeId": "slCywwRhraM",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 79
  },
  {
    "title": "Kal",
    "artist": "Zack",
    "film": "MTV Hustle",
    "youtubeId": "PJK2drP5KG4",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 80
  },
  {
    "title": "Cancer",
    "artist": "Zack",
    "film": "MTV Hustle",
    "youtubeId": "uvGdMu8Xilg",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 81
  },
  {
    "title": "Mazaak",
    "artist": "Zack",
    "film": "MTV Hustle",
    "youtubeId": "pJtSJpei4YM",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 82
  },
  {
    "title": "Chalta Hai",
    "artist": "Starnick",
    "film": "MTV Hustle",
    "youtubeId": "T4i_2WwZZI8",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 83
  },
  {
    "title": "Sukoon Lotade",
    "artist": "Starnick",
    "film": "MTV Hustle",
    "youtubeId": "zv7d9tuD5VA",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 84
  },
  {
    "title": "Taqdeer",
    "artist": "Neeru Pal",
    "film": "MTV Hustle",
    "youtubeId": "LhtB8URsUxU",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S1",
    "hustleNum": 85
  },
  {
    "title": "Ram Ram",
    "artist": "MC Square",
    "film": "MTV Hustle",
    "youtubeId": "Tnfs0MZsBBE",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 86
  },
  {
    "title": "Badmosh Chora",
    "artist": "MC Square",
    "film": "MTV Hustle",
    "youtubeId": "kqYYu1cK7nY",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 87
  },
  {
    "title": "Naina Ki Talwar",
    "artist": "MC Square",
    "film": "MTV Hustle",
    "youtubeId": "kpNYfy0Do0I",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 88
  },
  {
    "title": "Aadha Gyaan",
    "artist": "MC Square",
    "film": "MTV Hustle",
    "youtubeId": "SOfITbM5Z7M",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 89
  },
  {
    "title": "Chehre",
    "artist": "MC Square",
    "film": "MTV Hustle",
    "youtubeId": "504IurO7F94",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 90
  },
  {
    "title": "Bhoj",
    "artist": "MC Square",
    "film": "MTV Hustle",
    "youtubeId": "K5qaXkvk0SE",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 91
  },
  {
    "title": "2 Woofer",
    "artist": "MC Square",
    "film": "MTV Hustle",
    "youtubeId": "_um_FCOKYco",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 92
  },
  {
    "title": "4 Din",
    "artist": "MC Square",
    "film": "MTV Hustle",
    "youtubeId": "90r1L3wtIiU",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 93
  },
  {
    "title": "Chhore NCR Aale",
    "artist": "MC Square & Paradox",
    "film": "MTV Hustle",
    "youtubeId": "0tyrb2mxNSo",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 94
  },
  {
    "title": "Babam Bam",
    "artist": "Paradox",
    "film": "MTV Hustle",
    "youtubeId": "lDbItmGvzDM",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 95
  },
  {
    "title": "Bt Ho Gayi",
    "artist": "Paradox",
    "film": "MTV Hustle",
    "youtubeId": "ybRYNRcIuA4",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 96
  },
  {
    "title": "Gang Wale Munde",
    "artist": "Paradox",
    "film": "MTV Hustle",
    "youtubeId": "mQUzZnec6jg",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 97
  },
  {
    "title": "Jaadugar",
    "artist": "Paradox",
    "film": "MTV Hustle",
    "youtubeId": "IOcGS4D1tM0",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 98
  },
  {
    "title": "Cowboy",
    "artist": "Paradox",
    "film": "MTV Hustle",
    "youtubeId": "4UUC_dBlRuc",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 99
  },
  {
    "title": "Rihaayi",
    "artist": "Paradox",
    "film": "MTV Hustle",
    "youtubeId": "uTgsRbvLhUI",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 100
  },
  {
    "title": "Mileya Ni",
    "artist": "Paradox",
    "film": "MTV Hustle",
    "youtubeId": "EUvF8k3zxqA",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 101
  },
  {
    "title": "Glitch",
    "artist": "Paradox",
    "film": "MTV Hustle",
    "youtubeId": "i9x21WIgaSo",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 102
  },
  {
    "title": "Perfy",
    "artist": "Paradox",
    "film": "MTV Hustle",
    "youtubeId": "gBmDrUBugns",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 103
  },
  {
    "title": "Main Nahi Toh Kaun",
    "artist": "Srushti Tawade",
    "film": "MTV Hustle",
    "youtubeId": "RyJW3NbN9XA",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 104
  },
  {
    "title": "Dummies Guide To Mumbai",
    "artist": "Srushti Tawade",
    "film": "MTV Hustle",
    "youtubeId": "CKcLnDT26Nc",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 105
  },
  {
    "title": "Chill Kinda Guy",
    "artist": "Srushti Tawade",
    "film": "MTV Hustle",
    "youtubeId": "mV0e6XE7Vj8",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 106
  },
  {
    "title": "Ek Tha Kauvva",
    "artist": "Srushti Tawade",
    "film": "MTV Hustle",
    "youtubeId": "C79881j11C0",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 107
  },
  {
    "title": "Chhota Don",
    "artist": "Srushti Tawade",
    "film": "MTV Hustle",
    "youtubeId": "pTY6TyUoqjM",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 108
  },
  {
    "title": "Fool Out Of You",
    "artist": "Srushti Tawade",
    "film": "MTV Hustle",
    "youtubeId": "iNPY6W1mfMU",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 109
  },
  {
    "title": "Dukandaar",
    "artist": "Gravity",
    "film": "MTV Hustle",
    "youtubeId": "AZLZlx4gfNI",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 110
  },
  {
    "title": "Maut Ka Manzar",
    "artist": "Gravity",
    "film": "MTV Hustle",
    "youtubeId": "0_mwr3r6VTs",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 111
  },
  {
    "title": "Toothpick",
    "artist": "Gravity",
    "film": "MTV Hustle",
    "youtubeId": "HbECKXdfv7A",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 112
  },
  {
    "title": "Jalaluddin",
    "artist": "Gravity",
    "film": "MTV Hustle",
    "youtubeId": "icyurMo3MtU",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 113
  },
  {
    "title": "Main Bikhar Chuka Hoon",
    "artist": "Gravity",
    "film": "MTV Hustle",
    "youtubeId": "F2uJQahK4-Q",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 114
  },
  {
    "title": "Pop Smoke",
    "artist": "Gravity",
    "film": "MTV Hustle",
    "youtubeId": "4EWIPKhQH1c",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 115
  },
  {
    "title": "Sim Sim",
    "artist": "Gravity",
    "film": "MTV Hustle",
    "youtubeId": "HQiAThcmSYA",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 116
  },
  {
    "title": "Represent",
    "artist": "Gravity",
    "film": "MTV Hustle",
    "youtubeId": "hQHETHpUiUo",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 117
  },
  {
    "title": "Gadar",
    "artist": "Panther",
    "film": "MTV Hustle",
    "youtubeId": "dPEifJRd0QI",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 118
  },
  {
    "title": "Bus Ek Baar",
    "artist": "Panther",
    "film": "MTV Hustle",
    "youtubeId": "lYWHz2cdjzY",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 119
  },
  {
    "title": "Bhasad",
    "artist": "Panther",
    "film": "MTV Hustle",
    "youtubeId": "L6RZtcxEvtI",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 120
  },
  {
    "title": "Kaha Hai Tu",
    "artist": "Panther",
    "film": "MTV Hustle",
    "youtubeId": "Dm0Io9-BQB8",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 121
  },
  {
    "title": "Homeopathy",
    "artist": "Panther",
    "film": "MTV Hustle",
    "youtubeId": "o1js6cxPSJg",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 122
  },
  {
    "title": "Chashmey",
    "artist": "Panther",
    "film": "MTV Hustle",
    "youtubeId": "iKT3EvDiMlw",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 123
  },
  {
    "title": "Up Se",
    "artist": "Panther",
    "film": "MTV Hustle",
    "youtubeId": "BrUceMIqUvM",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 124
  },
  {
    "title": "Bande",
    "artist": "Panther",
    "film": "MTV Hustle",
    "youtubeId": "FhI6KPPo8t4",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 125
  },
  {
    "title": "Loriyan",
    "artist": "Spectra & Panther",
    "film": "MTV Hustle",
    "youtubeId": "SEGbtty0WFs",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 126
  },
  {
    "title": "Sadko Pe",
    "artist": "Nazz",
    "film": "MTV Hustle",
    "youtubeId": "ZP_3S8I1mi4",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 127
  },
  {
    "title": "Ghar Pe Jaa",
    "artist": "Nazz",
    "film": "MTV Hustle",
    "youtubeId": "tTGinzNq7IQ",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 128
  },
  {
    "title": "Heavy Driver",
    "artist": "Nazz",
    "film": "MTV Hustle",
    "youtubeId": "zEFhJF0xkSI",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 129
  },
  {
    "title": "Maut Ka Kuan",
    "artist": "Nazz",
    "film": "MTV Hustle",
    "youtubeId": "FbAQIr66Mkg",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 130
  },
  {
    "title": "Bakasur",
    "artist": "Nazz",
    "film": "MTV Hustle",
    "youtubeId": "PPYDruL0QFc",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 131
  },
  {
    "title": "Agar Main Hota Bhagwan",
    "artist": "Nazz",
    "film": "MTV Hustle",
    "youtubeId": "giREsH0H_jc",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 132
  },
  {
    "title": "Lump Sum",
    "artist": "Spectra",
    "film": "MTV Hustle",
    "youtubeId": "chwP-XcjQIo",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 133
  },
  {
    "title": "PTSD",
    "artist": "Spectra",
    "film": "MTV Hustle",
    "youtubeId": "Py-_kgC0UfA",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 134
  },
  {
    "title": "Watch Out",
    "artist": "Spectra",
    "film": "MTV Hustle",
    "youtubeId": "TG8nPm1L5M4",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 135
  },
  {
    "title": "Waise Wala Rap",
    "artist": "Spectra",
    "film": "MTV Hustle",
    "youtubeId": "t9w3Z4Tlgf8",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 136
  },
  {
    "title": "Fake Gareebi",
    "artist": "Wicked Sunny",
    "film": "MTV Hustle",
    "youtubeId": "4d7YFdGc_Y8",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 137
  },
  {
    "title": "Sexy Lag Raha Tha",
    "artist": "Wicked Sunny",
    "film": "MTV Hustle",
    "youtubeId": "tXw0eJ6YEMc",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 138
  },
  {
    "title": "Asli Hero",
    "artist": "Wicked Sunny",
    "film": "MTV Hustle",
    "youtubeId": "ggjJpIxJyIU",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 139
  },
  {
    "title": "Kaha Pe Hoon",
    "artist": "Wicked Sunny",
    "film": "MTV Hustle",
    "youtubeId": "c2TOsS7KBlk",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 140
  },
  {
    "title": "Prayag Mein",
    "artist": "Wicked Sunny",
    "film": "MTV Hustle",
    "youtubeId": "yqPMGzpmq-Q",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 141
  },
  {
    "title": "Aadhi Shakti",
    "artist": "Wicked Sunny",
    "film": "MTV Hustle",
    "youtubeId": "U2Fe2PtUVb4",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 142
  },
  {
    "title": "Husnpari",
    "artist": "UK Rapi Boy",
    "film": "MTV Hustle",
    "youtubeId": "Jb5ASdpCsHk",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 143
  },
  {
    "title": "Rooh",
    "artist": "UK Rapi Boy",
    "film": "MTV Hustle",
    "youtubeId": "I9sTAHC059g",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 144
  },
  {
    "title": "Galti",
    "artist": "UK Rapi Boy",
    "film": "MTV Hustle",
    "youtubeId": "zzGEbXwOcLM",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 145
  },
  {
    "title": "Pahado Ki Aur",
    "artist": "UK Rapi Boy",
    "film": "MTV Hustle",
    "youtubeId": "szBuxfX6AeU",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 146
  },
  {
    "title": "Bharosa Nahi",
    "artist": "MC Headshot",
    "film": "MTV Hustle",
    "youtubeId": "FAFLIkKvhzg",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 147
  },
  {
    "title": "Meri Marzi",
    "artist": "MC Headshot",
    "film": "MTV Hustle",
    "youtubeId": "C5dtGp_n-aQ",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 148
  },
  {
    "title": "Ami Tomake",
    "artist": "MC Headshot",
    "film": "MTV Hustle",
    "youtubeId": "pQzJ8bR3HM4",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 149
  },
  {
    "title": "Sho Sha",
    "artist": "MC Headshot",
    "film": "MTV Hustle",
    "youtubeId": "0Nt4CE6_EU4",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 150
  },
  {
    "title": "Mere Papa Mast",
    "artist": "MC Headshot",
    "film": "MTV Hustle",
    "youtubeId": "88p6hf_BtPE",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 151
  },
  {
    "title": "Chaplin",
    "artist": "Supermanikk",
    "film": "MTV Hustle",
    "youtubeId": "GUn5mfPYirk",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 152
  },
  {
    "title": "Johny Johny Yes Papa",
    "artist": "Supermanikk",
    "film": "MTV Hustle",
    "youtubeId": "90QyivWes3s",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 153
  },
  {
    "title": "Deathbed",
    "artist": "Supermanikk",
    "film": "MTV Hustle",
    "youtubeId": "v4eOV_n3OMQ",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 154
  },
  {
    "title": "Mirza",
    "artist": "Supermanikk",
    "film": "MTV Hustle",
    "youtubeId": "fM16zxfQ2aY",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 155
  },
  {
    "title": "Beizzati Kara Di",
    "artist": "KhullarG",
    "film": "MTV Hustle",
    "youtubeId": "wlnCT_-Qs6g",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 156
  },
  {
    "title": "Khush Hoon Main Bohot",
    "artist": "KhullarG",
    "film": "MTV Hustle",
    "youtubeId": "Nq8-UUJrvNE",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 157
  },
  {
    "title": "Upar Neeche",
    "artist": "KhullarG",
    "film": "MTV Hustle",
    "youtubeId": "RqDsCAhFNC8",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 158
  },
  {
    "title": "Lady Don",
    "artist": "KhanZaadi",
    "film": "MTV Hustle",
    "youtubeId": "B8RGPteougY",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 159
  },
  {
    "title": "Azaadi",
    "artist": "KhanZaadi",
    "film": "MTV Hustle",
    "youtubeId": "vC1mdTJGocQ",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 160
  },
  {
    "title": "Umar Meri 26",
    "artist": "Shlovij",
    "film": "MTV Hustle",
    "youtubeId": "bjSupBR-T_Q",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 161
  },
  {
    "title": "She Likes My Momo",
    "artist": "UNB",
    "film": "MTV Hustle",
    "youtubeId": "lA_Oh5TTQ2I",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 162
  },
  {
    "title": "Naari",
    "artist": "Rhyme",
    "film": "MTV Hustle",
    "youtubeId": "T6c0yn5igms",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 163
  },
  {
    "title": "Zidd Mein Arya",
    "artist": "QK",
    "film": "MTV Hustle",
    "youtubeId": "Lgcc6Cx-q60",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 164
  },
  {
    "title": "Bata De",
    "artist": "Lxsh",
    "film": "MTV Hustle",
    "youtubeId": "uqXxJkPRbig",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S2",
    "hustleNum": 165
  },
  {
    "title": "Sharam Nahi",
    "artist": "Uday",
    "film": "MTV Hustle",
    "youtubeId": "DFZO-pFGK3c",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 166
  },
  {
    "title": "I Tried My Best",
    "artist": "Uday",
    "film": "MTV Hustle",
    "youtubeId": "gfWsv8Uou0E",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 167
  },
  {
    "title": "Balancing Sheets",
    "artist": "Uday",
    "film": "MTV Hustle",
    "youtubeId": "22xvhqYVBpE",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 168
  },
  {
    "title": "Kaun Hai",
    "artist": "Uday",
    "film": "MTV Hustle",
    "youtubeId": "759qdWYjElY",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 169
  },
  {
    "title": "Kalamkaar",
    "artist": "Uday",
    "film": "MTV Hustle",
    "youtubeId": "KT4LoRZMq1Y",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 170
  },
  {
    "title": "Best In The Biz",
    "artist": "Bassick",
    "film": "MTV Hustle",
    "youtubeId": "-9qXkFRK99A",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 171
  },
  {
    "title": "Bhoolo Bhatko",
    "artist": "Bassick",
    "film": "MTV Hustle",
    "youtubeId": "M1mS4MDFNus",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 172
  },
  {
    "title": "MTV Anthem",
    "artist": "Bassick",
    "film": "MTV Hustle",
    "youtubeId": "LqAnOPXKlPk",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 173
  },
  {
    "title": "Bepanah",
    "artist": "Bassick",
    "film": "MTV Hustle",
    "youtubeId": "YcQm-0XacIE",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 174
  },
  {
    "title": "Kaam Baari",
    "artist": "Bassick",
    "film": "MTV Hustle",
    "youtubeId": "6xJypoyQFnQ",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 175
  },
  {
    "title": "Ground Shunya",
    "artist": "Uday & Bassick",
    "film": "MTV Hustle",
    "youtubeId": "Opyd-GTbAMc",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 176
  },
  {
    "title": "Street Celebrity",
    "artist": "Kayden Sharma",
    "film": "MTV Hustle",
    "youtubeId": "2u80yFDtszE",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 177
  },
  {
    "title": "Celebrities",
    "artist": "Kayden Sharma",
    "film": "MTV Hustle",
    "youtubeId": "FjUzFX5A5BM",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 178
  },
  {
    "title": "Haseena",
    "artist": "Kayden Sharma",
    "film": "MTV Hustle",
    "youtubeId": "29a4axIeI80",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 179
  },
  {
    "title": "Aamchi Mumbai",
    "artist": "Kayden Sharma",
    "film": "MTV Hustle",
    "youtubeId": "Jcd-2CqsbGc",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 180
  },
  {
    "title": "Kalyan",
    "artist": "Kayden Sharma",
    "film": "MTV Hustle",
    "youtubeId": "q0M5TY8hC-I",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 181
  },
  {
    "title": "Zanjeer",
    "artist": "100RBH",
    "film": "MTV Hustle",
    "youtubeId": "QQ4Xgp1c8TU",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 182
  },
  {
    "title": "Sarkar",
    "artist": "100RBH",
    "film": "MTV Hustle",
    "youtubeId": "zqlSdIKS7T0",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 183
  },
  {
    "title": "Ladki Ya Galti",
    "artist": "100RBH",
    "film": "MTV Hustle",
    "youtubeId": "Gc8RhZr-FRE",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 184
  },
  {
    "title": "Amravati Potta",
    "artist": "100RBH",
    "film": "MTV Hustle",
    "youtubeId": "8iPvy-9TwU4",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 185
  },
  {
    "title": "Andhere Mein Ujala",
    "artist": "100RBH",
    "film": "MTV Hustle",
    "youtubeId": "iW-bZOj6WFI",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 186
  },
  {
    "title": "Warriors",
    "artist": "100RBH",
    "film": "MTV Hustle",
    "youtubeId": "LV0GahsxQ_s",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 187
  },
  {
    "title": "Full Ijjat",
    "artist": "100RBH",
    "film": "MTV Hustle",
    "youtubeId": "U7_YXVY-yKA",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 188
  },
  {
    "title": "Azadi",
    "artist": "Shen B",
    "film": "MTV Hustle",
    "youtubeId": "TkcIgENK26k",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 189
  },
  {
    "title": "Lockdown",
    "artist": "Shen B",
    "film": "MTV Hustle",
    "youtubeId": "5NfRNifugZA",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 190
  },
  {
    "title": "Mujhe Dekh",
    "artist": "Shen B",
    "film": "MTV Hustle",
    "youtubeId": "r9iuLYNu5Cg",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 191
  },
  {
    "title": "JK02",
    "artist": "Shen B",
    "film": "MTV Hustle",
    "youtubeId": "yylgMcSD89U",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 192
  },
  {
    "title": "Run",
    "artist": "GAUSH",
    "film": "MTV Hustle",
    "youtubeId": "rI_QCDzU_XI",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 193
  },
  {
    "title": "Dumb It Down",
    "artist": "GAUSH",
    "film": "MTV Hustle",
    "youtubeId": "6BKAu4pjBsM",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 194
  },
  {
    "title": "Spit It Back",
    "artist": "GAUSH",
    "film": "MTV Hustle",
    "youtubeId": "nTfy93V3MLs",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 195
  },
  {
    "title": "Janaaze",
    "artist": "Shen B & GAUSH",
    "film": "MTV Hustle",
    "youtubeId": "NYopBDy1Rcc",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 196
  },
  {
    "title": "My Dad",
    "artist": "Poet Shaf",
    "film": "MTV Hustle",
    "youtubeId": "g1BUyJ3D3Cc",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 197
  },
  {
    "title": "Awaargi",
    "artist": "Poet Shaf",
    "film": "MTV Hustle",
    "youtubeId": "_ixaYiHFY1s",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 198
  },
  {
    "title": "Kafila",
    "artist": "Poet Shaf",
    "film": "MTV Hustle",
    "youtubeId": "Nrbh_X3Lbj8",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 199
  },
  {
    "title": "Waqt Ab Gaya",
    "artist": "Rap ID",
    "film": "MTV Hustle",
    "youtubeId": "HyLQAwUiAcU",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 200
  },
  {
    "title": "Devi",
    "artist": "Rap ID",
    "film": "MTV Hustle",
    "youtubeId": "JZohD-2hnsw",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 201
  },
  {
    "title": "India Wale",
    "artist": "Rap ID",
    "film": "MTV Hustle",
    "youtubeId": "wtIroldDvGI",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 202
  },
  {
    "title": "Scam",
    "artist": "Rap ID",
    "film": "MTV Hustle",
    "youtubeId": "pzTa96RcPpM",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 203
  },
  {
    "title": "Tu Te Main",
    "artist": "Burrah",
    "film": "MTV Hustle",
    "youtubeId": "zFVnP93rfrE",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 204
  },
  {
    "title": "Main Sochi Jaavan",
    "artist": "Burrah",
    "film": "MTV Hustle",
    "youtubeId": "Igz7VAs-DMw",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 205
  },
  {
    "title": "Fikar Nahi Hai",
    "artist": "Burrah",
    "film": "MTV Hustle",
    "youtubeId": "OGyIbJUT_Go",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 206
  },
  {
    "title": "Lo-Kal",
    "artist": "Vijay Dada",
    "film": "MTV Hustle",
    "youtubeId": "Cp7YtlTxKtY",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 207
  },
  {
    "title": "Nahi Mama",
    "artist": "Vijay Dada",
    "film": "MTV Hustle",
    "youtubeId": "3GwZI6jlfvE",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 208
  },
  {
    "title": "Chai",
    "artist": "Vijay Dada",
    "film": "MTV Hustle",
    "youtubeId": "2IHWEhv_BOk",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 209
  },
  {
    "title": "Albela Sajan",
    "artist": "Mrunal Shankar",
    "film": "MTV Hustle",
    "youtubeId": "0xKjcVcWJrI",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 210
  },
  {
    "title": "Ameeri",
    "artist": "Mrunal Shankar",
    "film": "MTV Hustle",
    "youtubeId": "XxPwymLjYso",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 211
  },
  {
    "title": "Mommy Issues",
    "artist": "Mrunal Shankar",
    "film": "MTV Hustle",
    "youtubeId": "rqWMapZZTqM",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 212
  },
  {
    "title": "Folk Rapper",
    "artist": "Bob.B Randhawa",
    "film": "MTV Hustle",
    "youtubeId": "-YFTJ7eAgkU",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 213
  },
  {
    "title": "This Is Hip Hop",
    "artist": "Bob.B Randhawa",
    "film": "MTV Hustle",
    "youtubeId": "5ht_MTFcWNE",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 214
  },
  {
    "title": "Lit Game",
    "artist": "Prince The Artist Singh",
    "film": "MTV Hustle",
    "youtubeId": "IFFV7sRN4Yw",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 215
  },
  {
    "title": "Wah Re Wah",
    "artist": "Prince The Artist Singh",
    "film": "MTV Hustle",
    "youtubeId": "MrBVlNSpIgg",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 216
  },
  {
    "title": "Dil De Lootere",
    "artist": "Prince The Artist Singh",
    "film": "MTV Hustle",
    "youtubeId": "Y4UIfzUT2sQ",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 217
  },
  {
    "title": "Salamat",
    "artist": "Vish",
    "film": "MTV Hustle",
    "youtubeId": "89_W4LDdSGk",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 218
  },
  {
    "title": "Blood In",
    "artist": "Vish",
    "film": "MTV Hustle",
    "youtubeId": "fRXWT_vs6AA",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 219
  },
  {
    "title": "Bhadak",
    "artist": "Vish",
    "film": "MTV Hustle",
    "youtubeId": "hMFIL74xRl4",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 220
  },
  {
    "title": "Dream Girl",
    "artist": "Badal",
    "film": "MTV Hustle",
    "youtubeId": "mKwIrqyEcdM",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 221
  },
  {
    "title": "Naar Gajab",
    "artist": "Jaya Rohilla",
    "film": "MTV Hustle",
    "youtubeId": "EciHkG0HMi4",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 222
  },
  {
    "title": "Chhatrapati",
    "artist": "Meetoride",
    "film": "MTV Hustle",
    "youtubeId": "94oG36x0hTQ",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S3",
    "hustleNum": 223
  },
  {
    "title": "Bhaag Bhag",
    "artist": "Lashcurry",
    "film": "MTV Hustle",
    "youtubeId": "WWJKaV1lWHs",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 224
  },
  {
    "title": "Ulte Karam",
    "artist": "Lashcurry",
    "film": "MTV Hustle",
    "youtubeId": "g_JTe3VcyMc",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 225
  },
  {
    "title": "Delhi 83",
    "artist": "Lashcurry",
    "film": "MTV Hustle",
    "youtubeId": "BNyHYXAzfog",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 226
  },
  {
    "title": "Bhanje",
    "artist": "Lashcurry",
    "film": "MTV Hustle",
    "youtubeId": "A_vf3wCJGOo",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 227
  },
  {
    "title": "Drop",
    "artist": "Lashcurry",
    "film": "MTV Hustle",
    "youtubeId": "vg56fEmKHAE",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 228
  },
  {
    "title": "Protocol",
    "artist": "Naam Sujal",
    "film": "MTV Hustle",
    "youtubeId": "7v9-Su9WKtk",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 229
  },
  {
    "title": "PYAAR?",
    "artist": "Naam Sujal",
    "film": "MTV Hustle",
    "youtubeId": "KigR4MQUxE8",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 230
  },
  {
    "title": "Safar",
    "artist": "Naam Sujal",
    "film": "MTV Hustle",
    "youtubeId": "MDU3UMbbloc",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 231
  },
  {
    "title": "3AM In Nagpur",
    "artist": "Naam Sujal",
    "film": "MTV Hustle",
    "youtubeId": "6curEndNLf0",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 232
  },
  {
    "title": "Chhote Tera Kya Hoga",
    "artist": "Naam Sujal",
    "film": "MTV Hustle",
    "youtubeId": "aOlrR2p--n8",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 233
  },
  {
    "title": "Dhingana",
    "artist": "99side",
    "film": "MTV Hustle",
    "youtubeId": "yRqgQ0yiyaM",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 234
  },
  {
    "title": "Chowk Pe",
    "artist": "99side",
    "film": "MTV Hustle",
    "youtubeId": "FM89Ctrxfzc",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 235
  },
  {
    "title": "Gondhal",
    "artist": "99side",
    "film": "MTV Hustle",
    "youtubeId": "z4g9XvqVAf8",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 236
  },
  {
    "title": "Bataa De Tu",
    "artist": "99side",
    "film": "MTV Hustle",
    "youtubeId": "_jneKZPjLJI",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 237
  },
  {
    "title": "Main Hoon Don (The Hustle Flip)",
    "artist": "99side",
    "film": "MTV Hustle",
    "youtubeId": "Js2sa7VL6YI",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 238
  },
  {
    "title": "All Night",
    "artist": "Sense",
    "film": "MTV Hustle",
    "youtubeId": "WZ91d6GiL-E",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 239
  },
  {
    "title": "Dharavi 400017",
    "artist": "Sense",
    "film": "MTV Hustle",
    "youtubeId": "xyb9hEJy5kQ",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 240
  },
  {
    "title": "Taza Khabar",
    "artist": "Sense",
    "film": "MTV Hustle",
    "youtubeId": "f7AWTQNaDnU",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 241
  },
  {
    "title": "Dana Dana",
    "artist": "Sense & Dharmik",
    "film": "MTV Hustle",
    "youtubeId": "WDWr63SBPyc",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 242
  },
  {
    "title": "Murran",
    "artist": "Vichaar",
    "film": "MTV Hustle",
    "youtubeId": "AiegkitGHSk",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 243
  },
  {
    "title": "Vaadi Bounce",
    "artist": "Vichaar",
    "film": "MTV Hustle",
    "youtubeId": "dNSIlswxomc",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 244
  },
  {
    "title": "No Pockets",
    "artist": "Vichaar",
    "film": "MTV Hustle",
    "youtubeId": "VFzyhd6NVkQ",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 245
  },
  {
    "title": "5 Fingers of Death",
    "artist": "Vichaar",
    "film": "MTV Hustle",
    "youtubeId": "r4_Z51mdzJU",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 246
  },
  {
    "title": "Khalbatta",
    "artist": "Dharmik",
    "film": "MTV Hustle",
    "youtubeId": "J_49h7-AEFA",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 247
  },
  {
    "title": "Main Kalam Tu Kitab",
    "artist": "Dharmik",
    "film": "MTV Hustle",
    "youtubeId": "ATuP82zV67c",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 248
  },
  {
    "title": "South Ka Superstar",
    "artist": "Dharmik",
    "film": "MTV Hustle",
    "youtubeId": "Em4Sc9hlpBw",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 249
  },
  {
    "title": "Naya Music",
    "artist": "Dharmik",
    "film": "MTV Hustle",
    "youtubeId": "57t7gORaGFs",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 250
  },
  {
    "title": "Ek Pyar Ka Naghma Hai (Hustle Flip)",
    "artist": "Dharmik",
    "film": "MTV Hustle",
    "youtubeId": "4ozllMDxoaM",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 251
  },
  {
    "title": "Badmash Munda",
    "artist": "Ghaint Jxtt",
    "film": "MTV Hustle",
    "youtubeId": "5hYL2vUAR2g",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 252
  },
  {
    "title": "Chaye Hoye Ne",
    "artist": "Ghaint Jxtt",
    "film": "MTV Hustle",
    "youtubeId": "yPZuEtXkrEE",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 253
  },
  {
    "title": "Gaddi Vich Cash",
    "artist": "Ghaint Jxtt & Ajitesh",
    "film": "MTV Hustle",
    "youtubeId": "TF04wuzqKqM",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 254
  },
  {
    "title": "Baapu",
    "artist": "Ajitesh",
    "film": "MTV Hustle",
    "youtubeId": "HKc-pfn7Og4",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 255
  },
  {
    "title": "YES SIR",
    "artist": "Rajjo",
    "film": "MTV Hustle",
    "youtubeId": "rr2v16mj8GE",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 256
  },
  {
    "title": "Jaadu",
    "artist": "Pho",
    "film": "MTV Hustle",
    "youtubeId": "IeB0LGmgl8M",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 257
  },
  {
    "title": "Befikar",
    "artist": "Pho",
    "film": "MTV Hustle",
    "youtubeId": "hnA9PnngcEQ",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 258
  },
  {
    "title": "Boom Padi Dese",
    "artist": "Mad Trip",
    "film": "MTV Hustle",
    "youtubeId": "HqavQvSEINc",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 259
  },
  {
    "title": "Dhiktana Dhiktana (Hustle Flip)",
    "artist": "Mad Trip",
    "film": "MTV Hustle",
    "youtubeId": "eNtGTIK2yD8",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 260
  },
  {
    "title": "Let Them Say",
    "artist": "DOTM",
    "film": "MTV Hustle",
    "youtubeId": "tcEZetFA-LE",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 261
  },
  {
    "title": "Goli Baari",
    "artist": "DOTM",
    "film": "MTV Hustle",
    "youtubeId": "SHWgkPUJ_Qc",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 262
  },
  {
    "title": "GG",
    "artist": "Little Bhatia",
    "film": "MTV Hustle",
    "youtubeId": "tDiz17bU9sc",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 263
  },
  {
    "title": "Kohraam",
    "artist": "Devil The Rhymer",
    "film": "MTV Hustle",
    "youtubeId": "F6iTKo6z0Zk",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 264
  },
  {
    "title": "Naach Devil Ke Saath",
    "artist": "Devil The Rhymer",
    "film": "MTV Hustle",
    "youtubeId": "UHNEht1qbg4",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 265
  },
  {
    "title": "Suryaputra",
    "artist": "Volt",
    "film": "MTV Hustle",
    "youtubeId": "CGTrsSoBvCI",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 266
  },
  {
    "title": "Mattha Tek",
    "artist": "Manisten",
    "film": "MTV Hustle",
    "youtubeId": "YoJM4sjn5Q4",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 267
  },
  {
    "title": "Nazar",
    "artist": "Siyaahi",
    "film": "MTV Hustle",
    "youtubeId": "gI0F_Pam8G0",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 268
  },
  {
    "title": "Drop The Beat",
    "artist": "Season 4 All-Stars",
    "film": "MTV Hustle",
    "youtubeId": "b_Mm4o_f7jI",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S4",
    "hustleNum": 269
  },
  {
    "title": "Hustle 5 Anthem",
    "artist": "Squad Bosses & Rap Supremo Badshah",
    "film": "MTV Hustle",
    "youtubeId": "ewdmwG0ex9c",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 270
  },
  {
    "title": "Obsession",
    "artist": "Whysokai",
    "film": "MTV Hustle",
    "youtubeId": "jPITKm3OP7o",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 271
  },
  {
    "title": "Payback",
    "artist": "Whysokai",
    "film": "MTV Hustle",
    "youtubeId": "GpQqgKYyiZk",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 272
  },
  {
    "title": "Jhoot",
    "artist": "Harmeeet",
    "film": "MTV Hustle",
    "youtubeId": "8D3Eu4B9J-I",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 273
  },
  {
    "title": "LET GO",
    "artist": "Harmeeet",
    "film": "MTV Hustle",
    "youtubeId": "izSy4fm-oQM",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 274
  },
  {
    "title": "Barood",
    "artist": "OG Tehran",
    "film": "MTV Hustle",
    "youtubeId": "K13_ADVxrRE",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 275
  },
  {
    "title": "Zaalim",
    "artist": "OG Tehran",
    "film": "MTV Hustle",
    "youtubeId": "doq3q8symSI",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 276
  },
  {
    "title": "Likhta Hoon",
    "artist": "Farak",
    "film": "MTV Hustle",
    "youtubeId": "PQQ9oskTGrY",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 277
  },
  {
    "title": "Kora Panna",
    "artist": "Farak",
    "film": "MTV Hustle",
    "youtubeId": "E9EnA-wyVoA",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 278
  },
  {
    "title": "Lickety Rap",
    "artist": "Gargi",
    "film": "MTV Hustle",
    "youtubeId": "2zH1XCYGkdo",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 279
  },
  {
    "title": "Not All Men",
    "artist": "Gargi",
    "film": "MTV Hustle",
    "youtubeId": "5ckNCDjykCM",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 280
  },
  {
    "title": "Ek Tha Kalakaar",
    "artist": "R-mridul",
    "film": "MTV Hustle",
    "youtubeId": "5HpemsorYXI",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 281
  },
  {
    "title": "Baukhaal Tight",
    "artist": "R-mridul",
    "film": "MTV Hustle",
    "youtubeId": "M3GuRr5HOG0",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 282
  },
  {
    "title": "Catchy",
    "artist": "Anushka Baduwal",
    "film": "MTV Hustle",
    "youtubeId": "4JOYnS64VBo",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 283
  },
  {
    "title": "Kalakaar Banna Hai",
    "artist": "Anushka Baduwal",
    "film": "MTV Hustle",
    "youtubeId": "o9ep7IpV6fQ",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 284
  },
  {
    "title": "Khatarnaak Zamaana",
    "artist": "Raaj Babu",
    "film": "MTV Hustle",
    "youtubeId": "hA47Q2tZMLA",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 285
  },
  {
    "title": "Roti",
    "artist": "Raaj Babu",
    "film": "MTV Hustle",
    "youtubeId": "xOYwvACIIvA",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 286
  },
  {
    "title": "Scene Check",
    "artist": "TXAMA",
    "film": "MTV Hustle",
    "youtubeId": "cjbZlGcA1MI",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 287
  },
  {
    "title": "Gidhaad",
    "artist": "Hruday",
    "film": "MTV Hustle",
    "youtubeId": "Lnd1rU9Cuo0",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 288
  },
  {
    "title": "Ulti Ginti",
    "artist": "Hruday",
    "film": "MTV Hustle",
    "youtubeId": "ugH0uIYt-lo",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 289
  },
  {
    "title": "Push Start Freeverse",
    "artist": "Dflacko",
    "film": "MTV Hustle",
    "youtubeId": "vajoC0VVFyI",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 290
  },
  {
    "title": "Kathputli",
    "artist": "Vasu Kainth",
    "film": "MTV Hustle",
    "youtubeId": "NB_qlowpHIg",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 291
  },
  {
    "title": "Honey Multigrain Oats",
    "artist": "Vasu Kainth",
    "film": "MTV Hustle",
    "youtubeId": "gvubiOI5LSk",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 292
  },
  {
    "title": "Culture",
    "artist": "Dhadkan",
    "film": "MTV Hustle",
    "youtubeId": "exMAMr2z2Zs",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 293
  },
  {
    "title": "Thar Coast",
    "artist": "Dhadkan",
    "film": "MTV Hustle",
    "youtubeId": "kxASSmD2fEo",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 294
  },
  {
    "title": "Puneri Freeverse",
    "artist": "Siroyi",
    "film": "MTV Hustle",
    "youtubeId": "8ug4D4hjlg0",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 295
  },
  {
    "title": "Piya Bairi Lage",
    "artist": "Siroyi",
    "film": "MTV Hustle",
    "youtubeId": "Lf92_Vctk6Q",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 296
  },
  {
    "title": "Ludo",
    "artist": "XEEMO",
    "film": "MTV Hustle",
    "youtubeId": "AwMKZKftr1c",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 297
  },
  {
    "title": "Game Baabe",
    "artist": "Bhaktaaa",
    "film": "MTV Hustle",
    "youtubeId": "vAg6e6cXVKI",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 298
  },
  {
    "title": "Parv Man",
    "artist": "Parv",
    "film": "MTV Hustle",
    "youtubeId": "llk9VrljLlY",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 299
  },
  {
    "title": "Dentist",
    "artist": "Parv",
    "film": "MTV Hustle",
    "youtubeId": "l4VyaZybFo8",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 300
  },
  {
    "title": "Doctor-Doctor",
    "artist": "Ansh4sure",
    "film": "MTV Hustle",
    "youtubeId": "fWl0tC3RzZ0",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 301
  },
  {
    "title": "Shehenshah",
    "artist": "Eddy",
    "film": "MTV Hustle",
    "youtubeId": "F7FYkaGMfrc",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 302
  },
  {
    "title": "Dope Bars",
    "artist": "Split",
    "film": "MTV Hustle",
    "youtubeId": "oSmXUMoOmmA",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 303
  },
  {
    "title": "Aura",
    "artist": "Mars King",
    "film": "MTV Hustle",
    "youtubeId": "GtWVOro0Vc8",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 304
  },
  {
    "title": "Charo Kone Chit",
    "artist": "D.Raashi & Kod.E",
    "film": "MTV Hustle",
    "youtubeId": "U6xWNsuqcDU",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 305
  },
  {
    "title": "Bael Buddhi",
    "artist": "Khudraaz",
    "film": "MTV Hustle",
    "youtubeId": "xFvWPRNNlRM",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 306
  },
  {
    "title": "Shikari",
    "artist": "Urban Poet",
    "film": "MTV Hustle",
    "youtubeId": "WqxEmTcPod0",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 307
  },
  {
    "title": "Daye Baye",
    "artist": "Deep Harks",
    "film": "MTV Hustle",
    "youtubeId": "UFOJd3NpJHo",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 308
  },
  {
    "title": "Drunk",
    "artist": "Deep Harks",
    "film": "MTV Hustle",
    "youtubeId": "qQFsIj43hh0",
    "startSeconds": 5,
    "isRemix": true,
    "isHustle": true,
    "hustleSeason": "S5",
    "hustleNum": 309
  },
  {
    "title": "Aaj Ki Raat x Tauba Tauba (Stree 2 x Bad Newz)",
    "artist": "Vocal hook exchange layered over a high-BPM driving tech groove.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "PvWhAlMGam4"
  },
  {
    "title": "Badtameez Dil x Dilliwaali Girlfriend (Yeh Jawaani Hai Deewani)",
    "artist": "Dual vocal hook collision over an aggressive electro-house drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "BqqeZxesXq8"
  },
  {
    "title": "Malhari x Zingaat (Bajirao Mastani x Dhadak)",
    "artist": "Dhol rhythms from Malhari running under Zingaat's vocal shout with a festival brass drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "eQWK1Iz_qBc"
  },
  {
    "title": "Chaiyya Chaiyya x Dhan Te Nan (Dil Se x Kaminey)",
    "artist": "Vintage Rahman rhythm chopped with Dhan Te Nan’s aggressive bass riff.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "DNwq-N2Y76w"
  },
  {
    "title": "Besharam Rang x Ghungroo (Pathaan x War)",
    "artist": "Seductive verses leading into Ghungroo’s high-energy vocal hook over a rolling tech drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "mLbG_sQcsBY"
  },
  {
    "title": "Choli Ke Peeche x Aaj Ki Raat (Crew x Don)",
    "artist": "Classic vocal cuts layered across a 128 BPM club drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "qKq4M3K6U-g"
  },
  {
    "title": "Kala Chashma x Kar Gayi Chull (Baar Baar Dekho x Kapoor & Sons)",
    "artist": "Punjabi hook running continuously over Chull’s synth build and drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "8ZhwlX2EDiA"
  },
  {
    "title": "Aankh Marey x Cheez Badi (Simmba x Machine)",
    "artist": "Rapid vocal back-and-forth layered over an aggressive Brazilian bassline.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "Gv_4t6iF8t0"
  },
  {
    "title": "Sadda Haq x Jee Karda (Rockstar x Badlapur)",
    "artist": "Aggressive rock vocals layered over Jee Karda's heavy electronic drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "9xGj5g_bZ_g"
  },
  {
    "title": "Jhoome Jo Pathaan x Besharam Rang (Pathaan)",
    "artist": "Pathaan vocal hook looped over Besharam Rang’s syncopated sub-bass.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "YxW5y24s3oU"
  },
  {
    "title": "Abhi Toh Party Shuru Hui Hai x Kar Gayi Chull (Khoobsurat x Kapoor & Sons)",
    "artist": "Party rap cadence matched over peak-time bounce beats.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "mLbG_sQcsBY"
  },
  {
    "title": "Dus Bahane x Right Here Right Now (Dus x Bluffmaster)",
    "artist": "Dual 2000s club anthems layered over a punchy bass-house groove.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "zEsVOsLZo8s"
  },
  {
    "title": "Subah Hone Na De x Desi Boyz (Desi Boyz)",
    "artist": "Simultaneous vocal arrangement driving into a big-room electro build.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "eQWK1Iz_qBc"
  },
  {
    "title": "Hookah Bar x Party On My Mind (Khiladi 786 x Race 2)",
    "artist": "Melodic hooks running together over a hard-hitting club synth.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "w1p7N0vD5z4"
  },
  {
    "title": "Dope Shope x Angreji Beat (International Villager x Cocktail)",
    "artist": "Honey Singh vocals layered over aggressive driving house bass.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "r8P_Gvj7_7E"
  },
  {
    "title": "Jai Jai Shivshankar x Ghungroo (War)",
    "artist": "Hrithik dance track battle drop with fast-paced club kicks.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "ahaUNhScopE"
  },
  {
    "title": "Nashe Si Chadh Gayi x Ude Dil Befikre (Befikre)",
    "artist": "High-energy vocal chop overlap backed by driving 126 BPM tech house.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "9gpXOxiNIok"
  },
  {
    "title": "Balam Pichkari x Badtameez Dil (Yeh Jawaani Hai Deewani)",
    "artist": "Percussive folk build colliding with a peak-time stadium synth.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "DNedQIpgdak"
  },
  {
    "title": "The Humma Song x Muqabla (OK Jaanu x Street Dancer 3D)",
    "artist": "Rahman melody mashup over a hard slap-house drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "G-YRF-AE6p0"
  },
  {
    "title": "Show Me The Thumka x Pyaar Hota Kayi Baar Hai (Tu Jhoothi Main Makkaar)",
    "artist": "Fast-paced Ranbir Kapoor club collision over punchy tech drums.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "kAmcygnlW0w"
  },
  {
    "title": "Chammak Challo x Criminal (Ra.One)",
    "artist": "Akon vocals layered across Vishal-Shekhar’s electro drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "qKq4M3K6U-g"
  },
  {
    "title": "O Saki Saki x Dilbar (Batla House x Satyameva Jayate)",
    "artist": "Nora Fatehi peak-time battle drop with dark Middle Eastern synth riffs.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "8ZhwlX2EDiA"
  },
  {
    "title": "London Thumakda x Gallan Goodiyaan (Queen x Dil Dhadakne Do)",
    "artist": "Wedding energy forced into high-BPM festival basslines.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "Gv_4t6iF8t0"
  },
  {
    "title": "Lungi Dance x One Two Three Four (Chennai Express)",
    "artist": "South-Indian percussion clash layered over aggressive festival horns.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "9xGj5g_bZ_g"
  },
  {
    "title": "Illegal Weapon 2.0 x Morni Banke (Street Dancer 3D x Badhaai Ho)",
    "artist": "Punjabi-Bolly club crossover on an aggressive bounce drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "YxW5y24s3oU"
  },
  {
    "title": "Gandi Baat x Saree Ke Fall Sa (R... Rajkumar)",
    "artist": "High-intensity mass-appeal vocal blend over modern electro drums.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "mLbG_sQcsBY"
  },
  {
    "title": "Tamanche Pe Disco x Babli Badmaash (Bullett Raja x Shootout at Wadala)",
    "artist": "Gritty street vocals over heavy electronic stabs.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "zEsVOsLZo8s"
  },
  {
    "title": "Khadke Glassy x Dil Chori (Jabariya Jodi x Sonu Ke Titu Ki Sweety)",
    "artist": "Rap layers riding over hard club kicks.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "eQWK1Iz_qBc"
  },
  {
    "title": "First Class x Slow Motion (Kalank x Bharat)",
    "artist": "Fast-tempo vocal exchange driving directly into a big-room drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "w1p7N0vD5z4"
  },
  {
    "title": "Lahu Munh Lag Gaya x Nagada Sang Dhol (Goliyon Ki Raasleela Ram-Leela)",
    "artist": "Folk garba rhythms amplified by aggressive club drops.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "r8P_Gvj7_7E"
  },
  {
    "title": "Tune Maari Entriyaan x Jashn-E-Ishqa (Gunday)",
    "artist": "High-octane commercial hooks over driving four-on-the-floor kicks.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "ahaUNhScopE"
  },
  {
    "title": "Dil Chori x Makhna (Sonu Ke Titu Ki Sweety x Drive)",
    "artist": "Honey Singh vocals layered across a tech-house club rhythm.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "9gpXOxiNIok"
  },
  {
    "title": "Zinda Banda x Not Ramaiya Vastavaiya (Jawan)",
    "artist": "Anirudh festival percussion clashing on a hard peak-time drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "DNedQIpgdak"
  },
  {
    "title": "Genda Phool x Chittiyaan Kalaiyaan (Badshah x Roy)",
    "artist": "Folk-rap vocals layered directly over rolling bass grooves.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "G-YRF-AE6p0"
  },
  {
    "title": "Bhaag D.K. Bose x Dhan Te Nan (Delhi Belly x Kaminey)",
    "artist": "Relentless rock-rap overlap slamming into distorted electro saws.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "kAmcygnlW0w"
  },
  {
    "title": "Ek Do Teen x Tamma Tamma Again (Baaghi 2 x Badrinath Ki Dulhania)",
    "artist": "Retro-remake vocal battle layered over a bouncy festival bass.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "qKq4M3K6U-g"
  },
  {
    "title": "Taal Se Taal x Chaiyya Chaiyya (Taal x Dil Se)",
    "artist": "Classical vocal runs colliding with fast-paced tribal house drums.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "8ZhwlX2EDiA"
  },
  {
    "title": "Dum Maaro Dum x Hare Ram Hare Krishna (Dum Maaro Dum x Bhool Bhulaiyaa)",
    "artist": "Psychedelic vocal hooks over driving minimal techno bass.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "Gv_4t6iF8t0"
  },
  {
    "title": "Shanivaar Raati x Palat Tera Hero Idhar Hai (Main Tera Hero)",
    "artist": "Energetic party vocals combined over a massive synth drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "9xGj5g_bZ_g"
  },
  {
    "title": "Sweety Tera Drama x Twist (Bareilly Ki Barfi x Love Aaj Kal)",
    "artist": "Upbeat Punjabi-Bollywood hooks layered over modern dancefloor kicks.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "YxW5y24s3oU"
  },
  {
    "title": "Paisa Paisa x Subah Hone Na De (De Dana Dan x Desi Boyz)",
    "artist": "High-energy throwback hooks layered over an electro drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "mLbG_sQcsBY"
  },
  {
    "title": "Vele x Student Of The Year (Disco Song) (Student of the Year)",
    "artist": "Vishal-Shekhar college anthems colliding on peak-time club drums.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "zEsVOsLZo8s"
  },
  {
    "title": "Khaike Paan Banaraswala x O O Jane Jaana (Don x Pyaar Kiya To Darna Kya)",
    "artist": "Vintage energetic hooks reworked over a rolling club bassline.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "eQWK1Iz_qBc"
  },
  {
    "title": "Aashiq Banaya Aapne x Jhalak Dikhla Jaa (Aashiq Banaya Aapne x Aksar)",
    "artist": "Himesh Reshammiya vocal chops over a high-energy bass-house drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "w1p7N0vD5z4"
  },
  {
    "title": "Rock Tha Party x Saturday Saturday (Rocky Handsome x Humpty Sharma Ki Dulhania)",
    "artist": "Heavy club bass drops with dual party vocals.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "r8P_Gvj7_7E"
  },
  {
    "title": "Mundiyan To Bach Ke x Baaki Baatein Peene Baad (Baaghi 2 x Arjun Kanungo)",
    "artist": "Tumbi hooks laced over aggressive club drums.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "ahaUNhScopE"
  },
  {
    "title": "Chhote Chhote Bhaiyon Ke x Didi Tera Devar Deewana (Rave Flip)",
    "artist": "Nostalgic wedding vocal samples chopped aggressively over peak-time synths.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "9gpXOxiNIok"
  },
  {
    "title": "Ainvayi Ainvayi x Thug Le (Band Baaja Baaraat x Ladies vs Ricky Bahl)",
    "artist": "Dynamic male/female vocal trade-offs over driving tech house.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "DNedQIpgdak"
  },
  {
    "title": "Gali Gali x Dilbar (KGF x Satyameva Jayate)",
    "artist": "Dual item-track hooks colliding over an aggressive festival drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "G-YRF-AE6p0"
  },
  {
    "title": "Bhool Bhulaiyaa Title Track x Character Dheela (Bhool Bhulaiyaa x Ready)",
    "artist": "High-tempo vocal rhythms running simultaneously into an electro drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "kAmcygnlW0w"
  },
  {
    "title": "Aaj Ki Raat x Tauba Tauba x Besharam Rang (Stree 2 x Bad Newz x Pathaan)",
    "artist": "Vocal call-and-response running across a 128 BPM tech-house drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "qKq4M3K6U-g"
  },
  {
    "title": "Badtameez Dil x Dilliwaali Girlfriend x Balam Pichkari (Yeh Jawaani Hai Deewani)",
    "artist": "Triple Ranbir Kapoor vocal overlap layered on an electro-house drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "8ZhwlX2EDiA"
  },
  {
    "title": "Malhari x Zingaat x Dhan Te Nan (Bajirao Mastani x Dhadak x Kaminey)",
    "artist": "Dhol percussion, energetic chants, and gritty rock stabs colliding over a massive festival drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "Gv_4t6iF8t0"
  },
  {
    "title": "Chaiyya Chaiyya x Dhan Te Nan x Sadda Haq (Dil Se x Kaminey x Rockstar)",
    "artist": "Sukhwinder Singh hooks chopped over heavy rock-electro synths.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "9xGj5g_bZ_g"
  },
  {
    "title": "Besharam Rang x Ghungroo x Jai Jai Shivshankar (Pathaan x War)",
    "artist": "Seductive verses building into dual Hrithik Roshan vocal hooks over a rolling bassline.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "YxW5y24s3oU"
  },
  {
    "title": "Choli Ke Peeche x Aaj Ki Raat x O Saki Saki (Crew x Don x Batla House)",
    "artist": "Triple female vocal battle built over a punchy bass-house kick.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "mLbG_sQcsBY"
  },
  {
    "title": "Kala Chashma x Kar Gayi Chull x Abhi Toh Party (Baar Baar Dekho x Kapoor & Sons x Khoobsurat)",
    "artist": "Non-stop party rap cadence layered over a peak-time bounce drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "zEsVOsLZo8s"
  },
  {
    "title": "Aankh Marey x Cheez Badi x Dilbar (Simmba x Machine x Satyameva Jayate)",
    "artist": "90s remake vocal chops layered across an aggressive Brazilian bassline.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "eQWK1Iz_qBc"
  },
  {
    "title": "Jhoome Jo Pathaan x Besharam Rang x Not Ramaiya Vastavaiya (Pathaan x Jawan)",
    "artist": "SRK peak-time vocal trade-offs over driving four-on-the-floor kicks.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "w1p7N0vD5z4"
  },
  {
    "title": "Subah Hone Na De x Desi Boyz x Hookah Bar (Desi Boyz x Khiladi 786)",
    "artist": "Dual Akshay Kumar hooks matched with Himesh Reshammiya melodies on a festival drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "r8P_Gvj7_7E"
  },
  {
    "title": "Dope Shope x Angreji Beat x Blue Eyes (International Villager x Cocktail)",
    "artist": "Honey Singh rap verses and hooks intertwined over heavy tech-house bass.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "ahaUNhScopE"
  },
  {
    "title": "Ghungroo x Nashe Si Chadh Gayi x Ude Dil Befikre (War x Befikre)",
    "artist": "Vishal-Shekhar dance vocals overlapping on a driving 126 BPM groove.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "9gpXOxiNIok"
  },
  {
    "title": "The Humma Song x Muqabla x Urvashi (OK Jaanu x Street Dancer 3D)",
    "artist": "Classic A.R. Rahman dance melodies colliding over a hard slap-house drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "DNedQIpgdak"
  },
  {
    "title": "Show Me The Thumka x Pyaar Hota Kayi Baar Hai x Badtameez Dil (Tu Jhoothi Main Makkaar x YJHD)",
    "artist": "Triple Ranbir dance hooks driving into a high-energy tech drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "G-YRF-AE6p0"
  },
  {
    "title": "Chammak Challo x Criminal x Right Here Right Now (Ra.One x Bluffmaster)",
    "artist": "Akon vocals and retro hip-hop flows layered over aggressive electro saws.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "kAmcygnlW0w"
  },
  {
    "title": "London Thumakda x Gallan Goodiyaan x Sadi Gali (Queen x Dil Dhadakne Do x Tanu Weds Manu)",
    "artist": "Dhol rhythms and Punjabi-Bolly hooks layered over a high-BPM rave synth.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "qKq4M3K6U-g"
  },
  {
    "title": "Lungi Dance x One Two Three Four x Zingaat (Chennai Express x Dhadak)",
    "artist": "Fast-paced regional percussion clash driving an aggressive stadium brass drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "8ZhwlX2EDiA"
  },
  {
    "title": "Illegal Weapon 2.0 x Morni Banke x High Rated Gabru (Street Dancer 3D x Badhaai Ho x Nawabzaade)",
    "artist": "Punjabi-Bollywood hooks trading off over an aggressive bounce drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "Gv_4t6iF8t0"
  },
  {
    "title": "Gandi Baat x Saree Ke Fall Sa x Tamanche Pe Disco (R... Rajkumar x Bullett Raja)",
    "artist": "Raw massy vocal delivery riding simultaneously on heavy electronic stabs.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "9xGj5g_bZ_g"
  },
  {
    "title": "Khadke Glassy x Dil Chori x Makhna (Jabariya Jodi x Sonu Ke Titu Ki Sweety x Drive)",
    "artist": "Triple party-rap vocal blend layered over a rolling tech groove.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "YxW5y24s3oU"
  },
  {
    "title": "Lahu Munh Lag Gaya x Nagada Sang Dhol x Dholida (Ram-Leela x Gangubai Kathiawadi)",
    "artist": "High-intensity garba vocal layers colliding over an aggressive club drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "mLbG_sQcsBY"
  },
  {
    "title": "Zinda Banda x Not Ramaiya Vastavaiya x Chaleya (Jawan)",
    "artist": "Anirudh festival percussion and vocal hooks running continuously into a peak drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "zEsVOsLZo8s"
  },
  {
    "title": "Genda Phool x Chittiyaan Kalaiyaan x Baby Doll (Badshah x Roy x Ragini MMS 2)",
    "artist": "Melodic hooks running simultaneously over driving basslines.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "eQWK1Iz_qBc"
  },
  {
    "title": "Bhaag D.K. Bose x Dhan Te Nan x Jee Karda (Delhi Belly x Kaminey x Badlapur)",
    "artist": "Aggressive rock-rap shouts crashing over distorted electro-house drops.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "w1p7N0vD5z4"
  },
  {
    "title": "Ek Do Teen x Tamma Tamma Again x Cheez Badi (Baaghi 2 x Badrinath Ki Dulhania x Machine)",
    "artist": "90s remake hooks running in sync over a driving festival beat.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "r8P_Gvj7_7E"
  },
  {
    "title": "Taal Se Taal x Chaiyya Chaiyya x Ramta Jogi (Taal x Dil Se)",
    "artist": "Classical vocal runs colliding over fast-paced tribal house drums.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "ahaUNhScopE"
  },
  {
    "title": "Dum Maaro Dum x Hare Ram Hare Krishna x Bhool Bhulaiyaa (Dum Maaro Dum x Bhool Bhulaiyaa)",
    "artist": "Psychedelic vocal hooks laced across minimal techno basslines.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "9gpXOxiNIok"
  },
  {
    "title": "Shanivaar Raati x Palat Tera Hero Idhar Hai x Besharmi Ki Height (Main Tera Hero)",
    "artist": "Non-stop Varun Dhawan vocal anthems built over a peak-time synth.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "DNedQIpgdak"
  },
  {
    "title": "Sweety Tera Drama x Twist x Chor Bazari (Bareilly Ki Barfi x Love Aaj Kal)",
    "artist": "Upbeat hooks running simultaneously into an aggressive electro build.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "G-YRF-AE6p0"
  },
  {
    "title": "Paisa Paisa x Subah Hone Na De x Right Here Right Now (De Dana Dan x Desi Boyz x Bluffmaster)",
    "artist": "2000s commercial party hooks colliding over a bass-heavy drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "kAmcygnlW0w"
  },
  {
    "title": "Vele x The Disco Song x Kukkad (Student of the Year)",
    "artist": "Vishal-Shekhar college club anthems overlapping on massive mainstage kicks.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "qKq4M3K6U-g"
  },
  {
    "title": "Aashiq Banaya Aapne x Jhalak Dikhla Jaa x Naam Hai Tera (Aashiq Banaya Aapne x Aksar x Aap Kaa Surroor)",
    "artist": "High-energy Himesh vocal chops over an aggressive bass-house drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "8ZhwlX2EDiA"
  },
  {
    "title": "Rock Tha Party x Saturday Saturday x Kar Gayi Chull (Rocky Handsome x HSKD x Kapoor & Sons)",
    "artist": "Relentless party anthems driving into a hard club bounce.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "Gv_4t6iF8t0"
  },
  {
    "title": "Mundiyan To Bach Ke x Baaki Baatein Peene Baad x Kala Chashma (Baaghi 2 x Arjun Kanungo x Baar Baar Dekho)",
    "artist": "Punjabi tumbi hooks colliding over an aggressive drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "9xGj5g_bZ_g"
  },
  {
    "title": "Ainvayi Ainvayi x Thug Le x Dum Dum (Band Baaja Baaraat x Ladies vs Ricky Bahl)",
    "artist": "Dynamic vocal trade-offs running over high-BPM tech drums.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "YxW5y24s3oU"
  },
  {
    "title": "Gali Gali x Dilbar x O Saki Saki (KGF x Satyameva Jayate x Batla House)",
    "artist": "Middle Eastern synth riffs and female item hooks over an aggressive drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "mLbG_sQcsBY"
  },
  {
    "title": "Bhool Bhulaiyaa Title Track x Character Dheela x Dhinka Chika (Bhool Bhulaiyaa x Ready)",
    "artist": "Fast vocal rhythms layered over an energetic electro-saw synth.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "zEsVOsLZo8s"
  },
  {
    "title": "First Class x Slow Motion x Dil Chori (Kalank x Bharat x SKTKS)",
    "artist": "Fast-tempo vocal exchange driving directly into a big-room drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "eQWK1Iz_qBc"
  },
  {
    "title": "Dus Bahane x Right Here Right Now x Dus Bahane 2.0 (Dus x Bluffmaster x Baaghi 3)",
    "artist": "Nostalgic vocal interplay backed by an aggressive tech drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "w1p7N0vD5z4"
  },
  {
    "title": "Tune Maari Entriyaan x Jashn-E-Ishqa x Asalaam-E-Ishqum (Gunday)",
    "artist": "High-octane commercial hooks over driving four-on-the-floor festival kicks.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "r8P_Gvj7_7E"
  },
  {
    "title": "Balam Pichkari x Chitiyan Kalaiyan x Baby Doll (YJHD x Roy x Ragini MMS 2)",
    "artist": "Playful vocal hooks locked into a driving club baseline.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "ahaUNhScopE"
  },
  {
    "title": "Khaike Paan Banaraswala x O O Jane Jaana x Jumma Chumma (Don x PKTDK x Hum)",
    "artist": "Vintage high-energy vocals layered over an aggressive tech-house sub-bass.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "9gpXOxiNIok"
  },
  {
    "title": "Chhote Chhote Bhaiyon Ke x Didi Tera Devar Deewana x Bole Chudiyan (HSKCS x HAHK x K3G)",
    "artist": "Classic wedding hooks chopped aggressively over a 128 BPM rave drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "DNedQIpgdak"
  },
  {
    "title": "Garmi x Muqabla x Illegal Weapon 2.0 (Street Dancer 3D)",
    "artist": "High-impact dance battle vocals colliding over a heavy festival drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "G-YRF-AE6p0"
  },
  {
    "title": "Party On My Mind x Lat Lag Gayi x Dilliwaali Girlfriend (Race 2 x YJHD)",
    "artist": "Seductive dancefloor vocals running simultaneously over rolling basslines.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "kAmcygnlW0w"
  },
  {
    "title": "Makhna x Proper Patola x Tareefan (Drive x Namaste England x Veere Di Wedding)",
    "artist": "Sleek urban vocal cadences over a punchy slap-house groove.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "qKq4M3K6U-g"
  },
  {
    "title": "Dil Dance Maare x Marjaani x Billo Rani (Tashan x Billu x Dhan Dhana Dhan Goal)",
    "artist": "Fast-paced retro vocals running across an aggressive electronic drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "8ZhwlX2EDiA"
  },
  {
    "title": "Sooraj Dooba Hain x Subah Hone Na De x Senorita (Roy x Desi Boyz x ZNMD)",
    "artist": "Melodic summer party hooks layered over a peak-time progressive drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "Gv_4t6iF8t0"
  },
  {
    "title": "Dilli Ki Raat x Darde Disco x It's The Time To Disco (Indoo Ki Jawani x Om Shanti Om x KHNH)",
    "artist": "Disco vocal hooks mashed into an aggressive club beat.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "9xGj5g_bZ_g"
  },
  {
    "title": "Tauba Tauba x Aaj Ki Raat x Zingaat (Bad Newz x Stree 2 x Dhadak)",
    "artist": "Modern Punjabi flow, high-energy Hindi club vocals, and folk chants colliding over a heavy peak-time drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "YxW5y24s3oU"
  },
  {
    "title": "Arjan Vailly x Malhari (Animal x Bajirao Mastani)",
    "artist": "Raw Punjabi battle-cry energy overlaid on rapid dhol rhythms and brass festival stabs.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "s-K7HinTAgA"
  },
  {
    "title": "Aayi Nai x Zingaat (Stree 2 x Dhadak)",
    "artist": "Upbeat regional Bhojpuri folk hook overlapping relentless Marathi street percussion.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "eQWK1Iz_qBc"
  },
  {
    "title": "What Jhumka? x Show Me The Thumka (Rocky Aur Rani Kii Prem Kahaani x Tu Jhoothi Main Makkaar)",
    "artist": "Fast-paced vocal exchanges driving into an aggressive tech-house bounce drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "xV22cenBGb8"
  },
  {
    "title": "Sher Khul Gaye x Ghungroo (Fighter x War)",
    "artist": "Dual Hrithik Roshan dance-groove vocals colliding over a driving four-on-the-floor club bassline.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "ChNT2E1jJQI"
  },
  {
    "title": "Jamal Kudu x Dum Maaro Dum (Animal x Hare Rama Hare Krishna)",
    "artist": "Chanted Iranian-folk vocal chops colliding with vintage psychedelic synth hooks.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "luO5Fffkcnc"
  },
  {
    "title": "Naina x Tareefan (Crew x Veere Di Wedding)",
    "artist": "Diljit Dosanjh verses layered smoothly over Badshah’s urban club cadence.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "qKq4M3K6U-g"
  },
  {
    "title": "Not Ramaiya Vastavaiya x Badtameez Dil (Jawan x Yeh Jawaani Hai Deewani)",
    "artist": "Anirudh's high-tempo dance hook interwoven with Ranbir Kapoor’s rapid vocal run.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "8ZhwlX2EDiA"
  },
  {
    "title": "Ishq Jaisa Kuch x Nashe Si Chadh Gayi (Fighter x Befikre)",
    "artist": "Seductive vocal chops trading bars over a rolling 126 BPM tech-house groove.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "Gv_4t6iF8t0"
  },
  {
    "title": "Bhool Bhulaiyaa 3 (Title Track) x Character Dheela 2.0 (Bhool Bhulaiyaa 3 x Shehzada)",
    "artist": "Kartik Aaryan peak-time anthems layered over aggressive electro synths.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "9xGj5g_bZ_g"
  },
  {
    "title": "Lutt Putt Gaya x Twist (Dunki x Love Aaj Kal)",
    "artist": "Upbeat commercial hooks trading off over an aggressive festival bassline.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "YxW5y24s3oU"
  },
  {
    "title": "Dance Ka Bhoot x Saree Ke Fall Sa (Brahmāstra x R... Rajkumar)",
    "artist": "High-energy festival dhol build colliding directly with massy electro stabs.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "mLbG_sQcsBY"
  },
  {
    "title": "Baby Bring It On x Zingaat (Madgaon Express x Dhadak)",
    "artist": "Dual high-BPM party anthems colliding on aggressive Dutch-house synth leads.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "zEsVOsLZo8s"
  },
  {
    "title": "Chaleya x Apna Bana Le (Jawan x Bhediya)",
    "artist": "Arijit Singh vocal stems intertwined over a driving festival progressive drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "eQWK1Iz_qBc"
  },
  {
    "title": "Pyaar Hota Kayi Baar Hai x Subah Hone Na De (Tu Jhoothi Main Makkaar x Desi Boyz)",
    "artist": "High-energy commercial vocals running simultaneously into a peak-time club build.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "w1p7N0vD5z4"
  },
  {
    "title": "Kaavaalaa (Hindi) x Muqabla (Jailer x Street Dancer 3D)",
    "artist": "Infectious tribal dance hook layered across Prabhu Deva's electro-funk bassline.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "r8P_Gvj7_7E"
  },
  {
    "title": "Main Nikla Gaddi Leke x Khadke Glassy (Gadar 2 x Jabariya Jodi)",
    "artist": "High-octane Punjabi-folk shouts riding an aggressive bounce-house kick.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "PvWhAlMGam4"
  },
  {
    "title": "Kusu Kusu x O Saki Saki (Satyameva Jayate 2 x Batla House)",
    "artist": "Nora Fatehi item-track hooks running simultaneously over Middle Eastern synth stabs.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "BqqeZxesXq8"
  },
  {
    "title": "Tip Tip Barsa Paani x Choli Ke Peeche (Sooryavanshi x Crew)",
    "artist": "Classic 90s remake vocal chops layered across a distorted 128 BPM saw-wave drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "DNwq-N2Y76w"
  },
  {
    "title": "Chandigarh Mein x Makhna (Good Newwz x Drive)",
    "artist": "Polished urban party vocals traded off over an aggressive slap-house groove.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "ahaUNhScopE"
  },
  {
    "title": "Sauda Khara Khara x Proper Patola (Good Newwz x Namaste England)",
    "artist": "Heavy Punjabi club hooks colliding on a driving four-on-the-floor beat.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "9gpXOxiNIok"
  },
  {
    "title": "Coka 2.0 x Illegal Weapon 2.0 (Liger x Street Dancer 3D)",
    "artist": "High-intensity Punjabi bass vocals layered directly over an aggressive club kick.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "DNedQIpgdak"
  },
  {
    "title": "Ra Ra Rakkamma x Chikni Chameli (Vikrant Rona x Agneepath)",
    "artist": "Fast-paced regional dance verses building into a massive stadium drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "G-YRF-AE6p0"
  },
  {
    "title": "Param Sundari x Genda Phool (Mimi x Badshah)",
    "artist": "Folk melodies and rap verses trading bars over a rolling sub-bass drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "kAmcygnlW0w"
  },
  {
    "title": "BurjKhalifa x Dope Shope (Laxmii x International Villager)",
    "artist": "Commercial urban party flows running side-by-side into an electronic club drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "qKq4M3K6U-g"
  },
  {
    "title": "Nadiyon Paar x Chamma Chamma (Roohi x Fraud Saiyaan)",
    "artist": "Hypnotic vocal loops driving into an aggressive Brazilian bassline.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "8ZhwlX2EDiA"
  },
  {
    "title": "Morani Baga Ma x Morni Banke (Animal x Badhaai Ho)",
    "artist": "Rajasthani folk vocals chopped and overlaid with modern Punjabi dancefloor rhythms.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "Gv_4t6iF8t0"
  },
  {
    "title": "Lazy Lamhe x Besharam Rang (Thoda Pyaar Thoda Magic x Pathaan)",
    "artist": "Sultry vocal verses laced across a driving minimal-tech groove.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "9xGj5g_bZ_g"
  },
  {
    "title": "Touch Me Touch Me x Zara Zara Touch Me (Race)",
    "artist": "Classic thriller dance vocals intertwined over punchy four-on-the-floor house beats.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "YxW5y24s3oU"
  },
  {
    "title": "High Rated Gabru x Ban Ja Rani (Nawabzaade x Tumhari Sulu)",
    "artist": "Guru Randhawa hooks layered seamlessly over a hard club rhythm.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "mLbG_sQcsBY"
  },
  {
    "title": "Coca Cola Tu x She Move It Like (Luka Chuppi x Badshah)",
    "artist": "Bouncy pop hooks matched with high-tempo rap cadences on a festival drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "zEsVOsLZo8s"
  },
  {
    "title": "Chhote Chhote Peg x Chaar Botal Vodka (Sonu Ke Titu Ki Sweety x Ragini MMS 2)",
    "artist": "Yo Yo Honey Singh party anthems trading verses over driving bass-house stabs.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "eQWK1Iz_qBc"
  },
  {
    "title": "Buzz x Naah (Aastha Gill x Harrdy Sandhu)",
    "artist": "Modern pop-club vocal duets layered over driving punchy kicks.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "w1p7N0vD5z4"
  },
  {
    "title": "Kya Baat Ay 2.0 x Bijlee Bijlee (Govinda Naam Mera x Harrdy Sandhu)",
    "artist": "Upbeat Punjabi-Bollywood vocal overlap backed by an aggressive synth lead.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "r8P_Gvj7_7E"
  },
  {
    "title": "Pappi Jhappi x Gandi Baat (Govinda Naam Mera x R... Rajkumar)",
    "artist": "Quirky mass-appeal vocal deliveries riding together on an aggressive electro drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "PvWhAlMGam4"
  },
  {
    "title": "Jeda Nasha x Jehda Nasha (An Action Hero x Amar Jalal)",
    "artist": "Modern dancefloor remake vocals colliding with raw original folk stems over driving club drums.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "BqqeZxesXq8"
  },
  {
    "title": "Alcoholia x Dhan Te Nan (Vikram Vedha x Kaminey)",
    "artist": "Raw, unhinged vocal chants layered over heavy rock-infused electronic basslines.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "DNwq-N2Y76w"
  },
  {
    "title": "Besharmi Ki Height x Hookah Bar (Main Tera Hero x Khiladi 786)",
    "artist": "2010s peak-time commercial hooks locked into a massive festival build.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "ahaUNhScopE"
  },
  {
    "title": "Fevicol Se x Munni Badnaam Hui (Dabangg 2 x Dabangg)",
    "artist": "Classic rustic item-song vocal hooks trading bars over aggressive festival brass.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "9gpXOxiNIok"
  },
  {
    "title": "Sheila Ki Jawani x Chikni Chameli (Tees Maar Khan x Agneepath)",
    "artist": "High-BPM item track battle drop featuring dual female vocal hooks.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "DNedQIpgdak"
  },
  {
    "title": "Dhoom Machale x Crazy Kiya Re (Dhoom x Dhoom 2)",
    "artist": "Sunidhi Chauhan vocal runs intertwined over driving tech-house percussion.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "G-YRF-AE6p0"
  },
  {
    "title": "Paisa Yeh Paisa x Bhaag D.K. Bose (Total Dhamaal x Delhi Belly)",
    "artist": "High-energy vocal madness slamming into aggressive rock-techno drops.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "kAmcygnlW0w"
  },
  {
    "title": "Slow Motion x First Class (Bharat x Kalank)",
    "artist": "Fast commercial choruses overlapping seamlessly on an energetic big-room drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "qKq4M3K6U-g"
  },
  {
    "title": "Kala Chashma x Dilliwaali Girlfriend (Baar Baar Dekho x Yeh Jawaani Hai Deewani)",
    "artist": "Iconic hooklines colliding directly over a 128 BPM bounce drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "8ZhwlX2EDiA"
  },
  {
    "title": "Ainvayi Ainvayi x London Thumakda (Band Baaja Baaraat x Queen)",
    "artist": "High-tempo wedding dance vocals layered into an aggressive club mix.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "Gv_4t6iF8t0"
  },
  {
    "title": "Muqabla x Zingaat (Street Dancer 3D x Dhadak)",
    "artist": "Fast rhythmic shouting chops riding alongside Prabhu Deva's synth hooks.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "9xGj5g_bZ_g"
  },
  {
    "title": "Tauba Tauba x Aankh Marey (Bad Newz x Simmba)",
    "artist": "Karan Aujla's modern cadence trading bars with classic 90s remake vocal chops.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "YxW5y24s3oU"
  },
  {
    "title": "Dilbar x Kamli (Satyameva Jayate x Dhoom 3)",
    "artist": "High-energy vocal runs colliding over a driving tech-house bassline.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "mLbG_sQcsBY"
  },
  {
    "title": "Tumse Milke Dil Ka Jo Haal x Chammak Challo (Main Hoon Na x Ra.One)",
    "artist": "Qawwali-pop crossover stems layered directly over Akon’s electro-pop vocals.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "zEsVOsLZo8s"
  },
  {
    "title": "Gali Gali x Tip Tip Barsa Paani (KGF x Sooryavanshi)",
    "artist": "Seductive vocal layers alternating on top of an aggressive four-on-the-floor drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "eQWK1Iz_qBc"
  },
  {
    "title": "Bhool Bhulaiyaa (Title Track) x Hare Ram Hare Krishna (Bhool Bhulaiyaa x Commando 3)",
    "artist": "Iconic vocal chants overlaid directly across dark minimal techno synths.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "w1p7N0vD5z4"
  },
  {
    "title": "Arjan Vailly x Malhari x Dhan Te Nan (Animal x Bajirao Mastani x Kaminey)",
    "artist": "Raw folk battle shouts and live dhol percussion colliding over an aggressive rock-electro drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "r8P_Gvj7_7E"
  },
  {
    "title": "Aayi Nai x Zingaat x Baby Bring It On (Stree 2 x Dhadak x Madgaon Express)",
    "artist": "High-BPM Bhojpuri vocal hooks and Marathi street rhythms driving into an intense festival brass drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "PvWhAlMGam4"
  },
  {
    "title": "What Jhumka? x Show Me The Thumka x Badtameez Dil (RRKPK x TJMM x YJHD)",
    "artist": "Triple Ranbir-Alia era commercial vocal trade-offs layered over a 128 BPM bouncy tech-house drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "BqqeZxesXq8"
  },
  {
    "title": "Sher Khul Gaye x Ghungroo x Jai Jai Shivshankar (Fighter x War)",
    "artist": "Hrithik Roshan dance-groove vocals trading bars across a driving four-on-the-floor electro bassline.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "DNwq-N2Y76w"
  },
  {
    "title": "Jamal Kudu x Dum Maaro Dum x Hare Ram Hare Krishna (Animal x Dum Maaro Dum x Bhool Bhulaiyaa)",
    "artist": "Hypnotic Iranian vocal chops and retro hooks layered over a rolling minimal tech kick.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "ahaUNhScopE"
  },
  {
    "title": "Naina x Tareefan x Proper Patola (Crew x Veere Di Wedding x Namaste England)",
    "artist": "Urban Punjabi flows and female vocal harmonies intertwined across an aggressive slap-house groove.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "9gpXOxiNIok"
  },
  {
    "title": "Not Ramaiya Vastavaiya x Zinda Banda x Badtameez Dil (Jawan x YJHD)",
    "artist": "Anirudh festival percussion and rapid vocal runs crashing into an electro-house drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "DNedQIpgdak"
  },
  {
    "title": "Ishq Jaisa Kuch x Nashe Si Chadh Gayi x Besharam Rang (Fighter x Befikre x Pathaan)",
    "artist": "Sultry Vishal-Shekhar verses and high-energy vocal hooks layered over a driving 126 BPM bassline.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "G-YRF-AE6p0"
  },
  {
    "title": "Bhool Bhulaiyaa 3 (Title Track) x Character Dheela 2.0 x Dil Chori (BB3 x Shehzada x SKTKS)",
    "artist": "High-energy Kartik Aaryan party anthems riding simultaneously on an aggressive saw-wave synth.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "kAmcygnlW0w"
  },
  {
    "title": "Lutt Putt Gaya x Twist x Chor Bazari (Dunki x Love Aaj Kal)",
    "artist": "Upbeat vocal cadences trading off over an aggressive four-on-the-floor festival drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "qKq4M3K6U-g"
  },
  {
    "title": "Dance Ka Bhoot x Saree Ke Fall Sa x Gandi Baat (Brahmāstra x R... Rajkumar)",
    "artist": "Festival dhol build matched with raw massy vocal shouts over heavy electronic stabs.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "8ZhwlX2EDiA"
  },
  {
    "title": "Kaavaalaa (Hindi) x Muqabla x The Humma Song (Jailer x Street Dancer 3D x OK Jaanu)",
    "artist": "Infectious tribal rhythm layered with iconic dance hooks over an aggressive slap-house kick.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "Gv_4t6iF8t0"
  },
  {
    "title": "Main Nikla Gaddi Leke x Khadke Glassy x Dil Chori (Gadar 2 x Jabariya Jodi x SKTKS)",
    "artist": "High-octane Punjabi-folk shouts riding continuously on a bouncy bass-house drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "9xGj5g_bZ_g"
  },
  {
    "title": "Kusu Kusu x O Saki Saki x Dilbar (Satyameva Jayate 2 x Batla House x Satyameva Jayate)",
    "artist": "Triple Nora Fatehi item hooks running simultaneously over dark Middle Eastern synth riffs.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "YxW5y24s3oU"
  },
  {
    "title": "Tip Tip Barsa Paani x Choli Ke Peeche x Aaj Ki Raat (Sooryavanshi x Crew x Stree 2)",
    "artist": "90s remake vocal chops running in sync over an aggressive 128 BPM club drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "mLbG_sQcsBY"
  },
  {
    "title": "Chandigarh Mein x Makhna x Proper Patola (Good Newwz x Drive x Namaste England)",
    "artist": "Urban party vocals trading off seamlessly over a punchy club groove.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "zEsVOsLZo8s"
  },
  {
    "title": "Sauda Khara Khara x Coka 2.0 x Illegal Weapon 2.0 (Good Newwz x Liger x Street Dancer 3D)",
    "artist": "Heavy Punjabi club hooks and rapid female vocals colliding on a hard four-on-the-floor beat.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "eQWK1Iz_qBc"
  },
  {
    "title": "Ra Ra Rakkamma x Chikni Chameli x Sheila Ki Jawani (Vikrant Rona x Agneepath x Tees Maar Khan)",
    "artist": "Fast-paced regional dance verses and classic item hooks crashing into a massive stadium drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "w1p7N0vD5z4"
  },
  {
    "title": "Param Sundari x Genda Phool x Chittiyaan Kalaiyaan (Mimi x Badshah x Roy)",
    "artist": "Folk melodies and female pop vocal chops riding together on a rolling sub-bass drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "r8P_Gvj7_7E"
  },
  {
    "title": "BurjKhalifa x Dope Shope x Angreji Beat (Laxmii x International Villager)",
    "artist": "Commercial urban party flows running side-by-side into a driving electronic drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "PvWhAlMGam4"
  },
  {
    "title": "Nadiyon Paar x Chamma Chamma x Aankh Marey (Roohi x Fraud Saiyaan x Simmba)",
    "artist": "Hypnotic dance loops and party hooks driving an aggressive Brazilian bassline.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "BqqeZxesXq8"
  },
  {
    "title": "Morani Baga Ma x Morni Banke x London Thumakda (Animal x Badhaai Ho x Queen)",
    "artist": "Rajasthani folk vocal chops and Punjabi wedding anthems layered on an aggressive festival beat.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "DNwq-N2Y76w"
  },
  {
    "title": "Lazy Lamhe x Besharam Rang x Ghungroo (Thoda Pyaar Thoda Magic x Pathaan x War)",
    "artist": "Sultry vocal verses trading bars across a driving minimal-tech groove.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "ahaUNhScopE"
  },
  {
    "title": "Touch Me Touch Me x Zara Zara Touch Me x Race Saanson Ki (Race)",
    "artist": "Iconic thriller dance vocal hooks intertwined over punchy four-on-the-floor house beats.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "9gpXOxiNIok"
  },
  {
    "title": "High Rated Gabru x Ban Ja Rani x Suit Suit (Nawabzaade x Tumhari Sulu x Hindi Medium)",
    "artist": "Guru Randhawa hooks layered seamlessly over a driving tech rhythm.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "DNedQIpgdak"
  },
  {
    "title": "Coca Cola Tu x She Move It Like x Buzz (Luka Chuppi x Badshah x Aastha Gill)",
    "artist": "Pop hooks matched with fast-paced rap cadences over a heavy festival drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "G-YRF-AE6p0"
  },
  {
    "title": "Chhote Chhote Peg x Chaar Botal Vodka x Blue Eyes (SKTKS x Ragini MMS 2 x Honey Singh)",
    "artist": "Yo Yo Honey Singh party anthems trading verses over driving bass-house stabs.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "kAmcygnlW0w"
  },
  {
    "title": "Kya Baat Ay 2.0 x Bijlee Bijlee x Naah (Govinda Naam Mera x Harrdy Sandhu)",
    "artist": "Upbeat Punjabi-Bollywood vocal overlap backed by an aggressive synth lead.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "qKq4M3K6U-g"
  },
  {
    "title": "Pappi Jhappi x Gandi Baat x Saree Ke Fall Sa (Govinda Naam Mera x R... Rajkumar)",
    "artist": "Mass-appeal vocal deliveries riding together on an aggressive electro drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "8ZhwlX2EDiA"
  },
  {
    "title": "Jeda Nasha x Jehda Nasha x Kusu Kusu (An Action Hero x Amar Jalal x Satyameva Jayate 2)",
    "artist": "Modern dancefloor vocals and hypnotic folk stems running simultaneously over driving club drums.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "Gv_4t6iF8t0"
  },
  {
    "title": "Alcoholia x Dhan Te Nan x Jee Karda (Vikram Vedha x Kaminey x Badlapur)",
    "artist": "Gritty street vocals and rock shouts colliding over heavy electronic basslines.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "9xGj5g_bZ_g"
  },
  {
    "title": "Besharmi Ki Height x Hookah Bar x Subah Hone Na De (Main Tera Hero x Khiladi 786 x Desi Boyz)",
    "artist": "Peak-time commercial hooks locked into a massive mainstage festival build.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "YxW5y24s3oU"
  },
  {
    "title": "Fevicol Se x Munni Badnaam Hui x Chikni Chameli (Dabangg 2 x Dabangg x Agneepath)",
    "artist": "Classic rustic item-track hooks trading bars over aggressive festival brass stabs.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "mLbG_sQcsBY"
  },
  {
    "title": "Sheila Ki Jawani x Chikni Chameli x O Saki Saki (Tees Maar Khan x Agneepath x Batla House)",
    "artist": "High-BPM item-track battle drop featuring rapid-fire female vocal chops.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "zEsVOsLZo8s"
  },
  {
    "title": "Dhoom Machale x Crazy Kiya Re x Kamli (Dhoom x Dhoom 2 x Dhoom 3)",
    "artist": "Iconic Dhoom franchise vocal runs intertwined over driving tech-house percussion.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "eQWK1Iz_qBc"
  },
  {
    "title": "Paisa Yeh Paisa x Bhaag D.K. Bose x Dhan Te Nan (Total Dhamaal x Delhi Belly x Kaminey)",
    "artist": "High-energy vocal madness slamming into aggressive rock-techno drops.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "w1p7N0vD5z4"
  },
  {
    "title": "Slow Motion x First Class x Gallan Goodiyaan (Bharat x Kalank x Dil Dhadakne Do)",
    "artist": "Fast commercial choruses overlapping seamlessly on an energetic big-room drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "r8P_Gvj7_7E"
  },
  {
    "title": "Kala Chashma x Dilliwaali Girlfriend x Kar Gayi Chull (Baar Baar Dekho x YJHD x Kapoor & Sons)",
    "artist": "Iconic party hooks colliding directly over a 128 BPM bounce drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "PvWhAlMGam4"
  },
  {
    "title": "Ainvayi Ainvayi x London Thumakda x Sadi Gali (Band Baaja Baaraat x Queen x Tanu Weds Manu)",
    "artist": "High-tempo wedding dance vocals layered into an aggressive club mix.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "BqqeZxesXq8"
  },
  {
    "title": "Muqabla x Zingaat x Malhari (Street Dancer 3D x Dhadak x Bajirao Mastani)",
    "artist": "Relentless regional percussion chops and chants riding alongside Prabhu Deva's synth hooks.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "DNwq-N2Y76w"
  },
  {
    "title": "Tauba Tauba x Aankh Marey x Cheez Badi (Bad Newz x Simmba x Machine)",
    "artist": "Karan Aujla's modern cadence trading bars with classic 90s remake vocal chops over heavy bass.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "ahaUNhScopE"
  },
  {
    "title": "Dilbar x Kamli x Gali Gali (Satyameva Jayate x Dhoom 3 x KGF)",
    "artist": "High-energy female vocal runs colliding over a driving tech-house bassline.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "9gpXOxiNIok"
  },
  {
    "title": "Tumse Milke Dil Ka Jo Haal x Chammak Challo x Criminal (Main Hoon Na x Ra.One)",
    "artist": "Qawwali-pop crossover stems layered directly over Akon’s electro-pop vocals.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "DNedQIpgdak"
  },
  {
    "title": "Gali Gali x Tip Tip Barsa Paani x Choli Ke Peeche (KGF x Sooryavanshi x Crew)",
    "artist": "Seductive vocal layers alternating on top of an aggressive four-on-the-floor drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "G-YRF-AE6p0"
  },
  {
    "title": "Bhool Bhulaiyaa (Title Track) x Hare Ram Hare Krishna x Character Dheela (BB1 x Commando 3 x Ready)",
    "artist": "Iconic vocal chants overlaid directly across dark minimal techno synths.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "kAmcygnlW0w"
  },
  {
    "title": "Makhna x Dil Chori x Chhote Chhote Peg (Drive x SKTKS)",
    "artist": "Urban Punjabi-Hindi verses running together across a rolling bounce-house groove.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "qKq4M3K6U-g"
  },
  {
    "title": "Chak Lein De x Sadda Haq x Jee Karda (Chandni Chowk to China x Rockstar x Badlapur)",
    "artist": "High-energy motivational rock vocals colliding over distorted electro saws.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "8ZhwlX2EDiA"
  },
  {
    "title": "Garmi x Muqabla x Aankh Marey (Street Dancer 3D x Simmba)",
    "artist": "Dance battle vocal chops layered together over an aggressive peak-time festival kick.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "Gv_4t6iF8t0"
  },
  {
    "title": "Lat Lag Gayi x Party On My Mind x Besharam Rang (Race 2 x Pathaan)",
    "artist": "Sultry dancefloor vocals running simultaneously over punchy basslines.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "9xGj5g_bZ_g"
  },
  {
    "title": "Tauba Tauba x Aaj Ki Raat x Aayi Nai (Bad Newz x Stree 2)",
    "artist": "Modern Punjabi flow, dark Hindi club vocals, and high-energy folk hooks slamming into a peak-time tech drop.",
    "film": "Remix",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "YxW5y24s3oU"
  }
];

const listClub: any[] = [
  {
    "title": "Tum Tak x Naina Tarse (AFTERAll Style Bolly-Tech Mashup)",
    "artist": "AFTERAll Style Bolly-Tech Mashup",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "UGsjMwa-ylc"
  },
  {
    "title": "Arjan Vailly (AFTERAll Festival Trap & Hard Drop Edit)",
    "artist": "AFTERAll Festival Trap & Hard Drop Edit",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "DEc4ovyG3Ww"
  },
  {
    "title": "Dola Re Dola (AFTERAll Fast-Paced Bolly-Tech Rework)",
    "artist": "AFTERAll Fast-Paced Bolly-Tech Rework",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "B4HbUt58eFU"
  },
  {
    "title": "Naina Tarse (Live Arena VIP Festival Mix)",
    "artist": "Live Arena VIP Festival Mix",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "UGsjMwa-ylc"
  },
  {
    "title": "Maula Mere (Deep Vocal House Club Flip)",
    "artist": "Deep Vocal House Club Flip",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "pFxzF6lUx_0"
  },
  {
    "title": "Aaj Ki Raat (Minimal Tech-House Club Rework)",
    "artist": "Minimal Tech-House Club Rework",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "5ArBAojc-K4"
  },
  {
    "title": "Tauba Tauba (Driving Tech-House Peak-Time VIP)",
    "artist": "Driving Tech-House Peak-Time VIP",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "-qH8RwUx0mk"
  },
  {
    "title": "Besharam Rang (Rolling Sub-Bass Tech Flip)",
    "artist": "Rolling Sub-Bass Tech Flip",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "qZ2c0QamOCg"
  },
  {
    "title": "Choli Ke Peeche (Aggressive Electro-Saw Tech Bootleg)",
    "artist": "Aggressive Electro-Saw Tech Bootleg",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "FFVgllzFAro"
  },
  {
    "title": "Ghungroo (126 BPM Peak-Time Tech-House Edit)",
    "artist": "126 BPM Peak-Time Tech-House Edit",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "VR0NTbkDGVw"
  },
  {
    "title": "Malhari (Live Dhol & Heavy Tech-Drop Mix)",
    "artist": "Live Dhol & Heavy Tech-Drop Mix",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "9bpbAc2U53M"
  },
  {
    "title": "Chaiyya Chaiyya (Tribal Percussion & Tech-House Flip)",
    "artist": "Tribal Percussion & Tech-House Flip",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "K-pX4qwtAxA"
  },
  {
    "title": "Zingaat (Festival Rave & Big-Room Tech Bootleg)",
    "artist": "Festival Rave & Big-Room Tech Bootleg",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "Hr8CDoYQiZ4"
  },
  {
    "title": "Dhan Te Nan (Distorted Industrial Tech Edit)",
    "artist": "Distorted Industrial Tech Edit",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "4QVu6Vo6Jhw"
  },
  {
    "title": "Badtameez Dil (High-BPM Electro-Tech Club Flip)",
    "artist": "High-BPM Electro-Tech Club Flip",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "WRz22ibD3qI"
  },
  {
    "title": "Aankh Marey (Brazilian Bass & Low-End Tech Edit)",
    "artist": "Brazilian Bass & Low-End Tech Edit",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "_KhQT-LGb-4"
  },
  {
    "title": "Kala Chashma (Peak-Time Bounce & Tech-House Rework)",
    "artist": "Peak-Time Bounce & Tech-House Rework",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "iSO4OErJT7U"
  },
  {
    "title": "Kar Gayi Chull (Slap-House & Rolling Bass Mix)",
    "artist": "Slap-House & Rolling Bass Mix",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "NTHz9ephYTw"
  },
  {
    "title": "Sadda Haq (Mainstage Electro & Hard-Drop Edit)",
    "artist": "Mainstage Electro & Hard-Drop Edit",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "yhkYGro0Eq0"
  },
  {
    "title": "Jee Karda (Heavy Industrial Techno Rework)",
    "artist": "Heavy Industrial Techno Rework",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "JFHo9y0czds"
  },
  {
    "title": "Dum Maaro Dum (London Underground Bass & Tech Flip)",
    "artist": "London Underground Bass & Tech Flip",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "hNz3e5ef-B0"
  },
  {
    "title": "Bhaag D.K. Bose (Raw Rock-Tech Peak-Time Bootleg)",
    "artist": "Raw Rock-Tech Peak-Time Bootleg",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "tpEoIiHVJsI"
  },
  {
    "title": "Abhi Toh Party (High-Energy Tech Club Flip)",
    "artist": "High-Energy Tech Club Flip",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "2GMAmutnVPw"
  },
  {
    "title": "Dus Bahane (Meduza-Style Deep Tech-House Edit)",
    "artist": "Meduza-Style Deep Tech-House Edit",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "YnRjhOR0JAg"
  },
  {
    "title": "Hookah Bar (Punchy Club Bassline Rework)",
    "artist": "Punchy Club Bassline Rework",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "cZJwK0r4R6c"
  },
  {
    "title": "Jhoome Jo Pathaan (Driving Slap-House Festival Edit)",
    "artist": "Driving Slap-House Festival Edit",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "YxWlaYCA8MU"
  },
  {
    "title": "Not Ramaiya Vastavaiya (Percussive Club Tech Mix)",
    "artist": "Percussive Club Tech Mix",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "aBhUA6FGpSE"
  },
  {
    "title": "Sher Khul Gaye (Four-on-the-Floor Groove House Edit)",
    "artist": "Four-on-the-Floor Groove House Edit",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "4VBUvzCyeJ4"
  },
  {
    "title": "Ishq Jaisa Kuch (Sunset Melodic Tech Rework)",
    "artist": "Sunset Melodic Tech Rework",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "0z9zZdv7nnw"
  },
  {
    "title": "Show Me The Thumka (Modern Tech-House Club Mix)",
    "artist": "Modern Tech-House Club Mix",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "KgpFBdapobY"
  },
  {
    "title": "Pyaar Hota Kayi Baar Hai (Punchy Club Tech Edit)",
    "artist": "Punchy Club Tech Edit",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "2yeRRm9AIxI"
  },
  {
    "title": "What Jhumka? (Bouncy Festival Tech-House Flip)",
    "artist": "Bouncy Festival Tech-House Flip",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "Td06W5pjhhE"
  },
  {
    "title": "Aayi Nai (Bhojpuri-Tech High-BPM Peak Edit)",
    "artist": "Bhojpuri-Tech High-BPM Peak Edit",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "NDJ-1FK1c_k"
  },
  {
    "title": "Bhool Bhulaiyaa (Dark Minimal Tech Club Bootleg)",
    "artist": "Dark Minimal Tech Club Bootleg",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "B9_nql5xBFo"
  },
  {
    "title": "Subah Hone Na De (Festival Progressive Tech Edit)",
    "artist": "Festival Progressive Tech Edit",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "Mm7ijWjQ3b8"
  },
  {
    "title": "Tamanche Pe Disco (Rave Tool & Aggressive Synth Mix)",
    "artist": "Rave Tool & Aggressive Synth Mix",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "66LV6KqGHEo"
  },
  {
    "title": "The Humma Song (Deep Slap-House Rework)",
    "artist": "Deep Slap-House Rework",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "1tVL11ULjYY"
  },
  {
    "title": "Tune Maari Entriyaan (High-Octane Club House Flip)",
    "artist": "High-Octane Club House Flip",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "m678o7kK2pI"
  },
  {
    "title": "Yaar Naa Miley (Stadium Big-Room Tech Edit)",
    "artist": "Stadium Big-Room Tech Edit",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "ualSQg7Pfgo"
  },
  {
    "title": "Zinda Banda (Anirudh Percussive Tech-Drop Mix)",
    "artist": "Anirudh Percussive Tech-Drop Mix",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "stjZKBhQ3lg"
  },
  {
    "title": "Jai Jai Shivshankar (Peak-Time Mainstage Tech Drop)",
    "artist": "Peak-Time Mainstage Tech Drop",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "oGneAab3e88"
  },
  {
    "title": "Lahu Munh Lag Gaya (Driving Latin/Tech Percussion Mix)",
    "artist": "Driving Latin/Tech Percussion Mix",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "szVW_w-W8cQ"
  },
  {
    "title": "London Thumakda (Tribal House Wedding Rework)",
    "artist": "Tribal House Wedding Rework",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "O9QgTH6vpjo"
  },
  {
    "title": "Lungi Dance (Festival Horns & Tech-House Flip)",
    "artist": "Festival Horns & Tech-House Flip",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "nSUVNlC1zGs"
  },
  {
    "title": "Naacho Naacho (Aggressive Tribal Bassline Mix)",
    "artist": "Aggressive Tribal Bassline Mix",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "OarRXer64P8"
  },
  {
    "title": "O Saki Saki (Middle-Eastern Synth & Tech-Drop Edit)",
    "artist": "Middle-Eastern Synth & Tech-Drop Edit",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "IUvPVi-D7ho"
  },
  {
    "title": "Sauda Khara Khara (Low-Frequency Club Tech Bootleg)",
    "artist": "Low-Frequency Club Tech Bootleg",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "LYEqeUr-158"
  },
  {
    "title": "Shanivaar Raati (Big-Room Festival Electro Edit)",
    "artist": "Big-Room Festival Electro Edit",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "KgNspr1dB0c"
  },
  {
    "title": "Chammak Challo (Slap-Bass & Deep Tech Rework)",
    "artist": "Slap-Bass & Deep Tech Rework",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "oAVhUAaVCVQ"
  },
  {
    "title": "Dilbar (Arabic Tech-House Club Mix)",
    "artist": "Arabic Tech-House Club Mix",
    "film": "Bolly-Tech",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "IvrAITiFAgs"
  },
  {
    "title": "Raanjhan Mora (AFTERAll & Shreya Jain Afro-House Mix)",
    "artist": "AFTERAll & Shreya Jain Afro-House Mix",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "6vg4Cggyqr8"
  },
  {
    "title": "Challa (AFTERAll & Mitika Kanwar Afro Club Flip)",
    "artist": "AFTERAll & Mitika Kanwar Afro Club Flip",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "dJkM9jMKQ3M"
  },
  {
    "title": "Paranda (AFTERAll Signature Bolly-Afro Single)",
    "artist": "AFTERAll Signature Bolly-Afro Single",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "UnVGau74a-g"
  },
  {
    "title": "Vatta Vatta (AFTERAll Tribal Percussion Rework)",
    "artist": "AFTERAll Tribal Percussion Rework",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "PTb83KzAAlY"
  },
  {
    "title": "Tadke Tadke (AFTERAll Sundowner Club Mix)",
    "artist": "AFTERAll Sundowner Club Mix",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "ETsmAnCfY68"
  },
  {
    "title": "Johri (AFTERAll Organic Melodic Afro Track)",
    "artist": "AFTERAll Organic Melodic Afro Track",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "5jTMEhtEXaU"
  },
  {
    "title": "Saajan (AFTERAll Afro-House Deep Flip)",
    "artist": "AFTERAll Afro-House Deep Flip",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "5VaqiH1QMTw"
  },
  {
    "title": "Na Roko Mujhe (AFTERAll Melodic Club Single)",
    "artist": "AFTERAll Melodic Club Single",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "fOUTFsfvGyw"
  },
  {
    "title": "Abhi Abhi (AFTERAll Afro-Tech Sunset Edit)",
    "artist": "AFTERAll Afro-Tech Sunset Edit",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "Q7mtgh-wCMM"
  },
  {
    "title": "Kun Faya Kun (Mwaki-Style Afro-House Flip)",
    "artist": "Mwaki-Style Afro-House Flip",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "wi-_9gpJxpQ"
  },
  {
    "title": "Tajdar-E-Haram (Afro-Melodic Deep House Bootleg)",
    "artist": "Afro-Melodic Deep House Bootleg",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "WRYSIDfeBsM"
  },
  {
    "title": "Afreen Afreen (Zerb-Style Tribal Afro Rework)",
    "artist": "Zerb-Style Tribal Afro Rework",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "SMlGGRAB3Hc"
  },
  {
    "title": "Kinna Sohna (Sunset Organic House Edit)",
    "artist": "Sunset Organic House Edit",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "UO838ivMLp4"
  },
  {
    "title": "Sanu Ek Pal Chain (Groovedev-Style Afro Groove)",
    "artist": "Groovedev-Style Afro Groove",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "lddka-q8zVI"
  },
  {
    "title": "Khwaja Mere Khwaja (Festival Melodic Afro Mix)",
    "artist": "Festival Melodic Afro Mix",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "4YbAaRFk70o"
  },
  {
    "title": "O Re Piya (Deep Melodic Afro-House Bootleg)",
    "artist": "Deep Melodic Afro-House Bootleg",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "ySYHcfvrmyw"
  },
  {
    "title": "Nit Khair Manga (Sufi-Afro Percussion Club Mix)",
    "artist": "Sufi-Afro Percussion Club Mix",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "oBIx6tsc1Mk"
  },
  {
    "title": "Arziyan (Tribal Drums & Vocal Afro Flip)",
    "artist": "Tribal Drums & Vocal Afro Flip",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "dXdD1_AGBZg"
  },
  {
    "title": "Tum Se Hi (Sunset Beach Club Afro Edit)",
    "artist": "Sunset Beach Club Afro Edit",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "Q7mtgh-wCMM"
  },
  {
    "title": "Pee Loon (Melodic Afro-House Vocal Rework)",
    "artist": "Melodic Afro-House Vocal Rework",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "uLBSQXnazyM"
  },
  {
    "title": "Tum Hi Ho (Organic House & Deep Percussion Mix)",
    "artist": "Organic House & Deep Percussion Mix",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "WjPueYPwsO8"
  },
  {
    "title": "Dil Sambhal Ja Zara (Afro-Tech Club Bootleg)",
    "artist": "Afro-Tech Club Bootleg",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "fA_xoB27LH4"
  },
  {
    "title": "Khuda Jaane (Sundowner Afro Groove Mix)",
    "artist": "Sundowner Afro Groove Mix",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "rrMKtS3miAk"
  },
  {
    "title": "Subhanallah (Chilled Afro-House Sunset Edit)",
    "artist": "Chilled Afro-House Sunset Edit",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "SKhc9HGIKXc"
  },
  {
    "title": "Raataan Lambiyan (Deep Melodic Afro-Tech Mix)",
    "artist": "Deep Melodic Afro-Tech Mix",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "-JVBDtaHQaA"
  },
  {
    "title": "Apna Bana Le (Afro-House Tribal Festival Rework)",
    "artist": "Afro-House Tribal Festival Rework",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "k_38GcMf84A"
  },
  {
    "title": "Kesariya (Organic Percussion Sunset Flip)",
    "artist": "Organic Percussion Sunset Flip",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "ptOcA86r7E8"
  },
  {
    "title": "Ghar More Pardesiya (Bakermat-Style Afro-House Edit)",
    "artist": "Bakermat-Style Afro-House Edit",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "b5WF7yZcc1w"
  },
  {
    "title": "Chaandan Mein (Groovedev Anchor Point Tribal Mix)",
    "artist": "Groovedev Anchor Point Tribal Mix",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "3281U9o9J3g"
  },
  {
    "title": "Saiyyan (Deep Organic Sunset Afro Bootleg)",
    "artist": "Deep Organic Sunset Afro Bootleg",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "BjWbMCqbYag"
  },
  {
    "title": "Teri Deewani (Tribal Afro-Tech Festival Rework)",
    "artist": "Tribal Afro-Tech Festival Rework",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "zZasH6qkn8M"
  },
  {
    "title": "Allah Ke Bande (Melodic Afro Deep House Mix)",
    "artist": "Melodic Afro Deep House Mix",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "Ltw4PgKjN_w"
  },
  {
    "title": "Bam Lahiri (High-BPM Tribal Afro-Trance Flip)",
    "artist": "High-BPM Tribal Afro-Trance Flip",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "E-cy1HqqXys"
  },
  {
    "title": "Mast Magan (Sundowner Organic Afro Edit)",
    "artist": "Sundowner Organic Afro Edit",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "y16oHpDfKiY"
  },
  {
    "title": "Agar Tum Saath Ho (Deep Percussive Afro Rework)",
    "artist": "Deep Percussive Afro Rework",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "PYgnCOpmpMU"
  },
  {
    "title": "Iktara (Chill Melodic Afro-House Bootleg)",
    "artist": "Chill Melodic Afro-House Bootleg",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "akjdj6iHttY"
  },
  {
    "title": "Kabira (Sunset Tribal Vocal Flip)",
    "artist": "Sunset Tribal Vocal Flip",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "mXxbnXo29eM"
  },
  {
    "title": "Samjhawan (Deep Afro-House Lounge Rework)",
    "artist": "Deep Afro-House Lounge Rework",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "yHCNgo1SbGs"
  },
  {
    "title": "Hasi Ban Gaye (Melodic Organic House Mix)",
    "artist": "Melodic Organic House Mix",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "lmg5NCHJ9EM"
  },
  {
    "title": "Soch Na Sake (Sunset Groove Afro Bootleg)",
    "artist": "Sunset Groove Afro Bootleg",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "KU6PF32U6V0"
  },
  {
    "title": "Chaleya (Afro-Tech Festival Dance Edit)",
    "artist": "Afro-Tech Festival Dance Edit",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "2s4JJwveyQQ"
  },
  {
    "title": "Jiyein Kyun (Deep Percussion Club Afro Mix)",
    "artist": "Deep Percussion Club Afro Mix",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "_mR6bY-ndso"
  },
  {
    "title": "Moh Moh Ke Dhaage (Organic Tribal House Flip)",
    "artist": "Organic Tribal House Flip",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "JbDktrsnH40"
  },
  {
    "title": "Dil Diyan Gallan (Melodic Afro Sunset Rework)",
    "artist": "Melodic Afro Sunset Rework",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "IdPlBcRZjbI"
  },
  {
    "title": "Hawayein (Afro-House Festival Sunset Mix)",
    "artist": "Afro-House Festival Sunset Mix",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "JLFK8BzyLQY"
  },
  {
    "title": "Enna Sona (Deep Tropical Afro-Tech Edit)",
    "artist": "Deep Tropical Afro-Tech Edit",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "2n00wX0cj0w"
  },
  {
    "title": "Shayad (Organic House Melodic Rework)",
    "artist": "Organic House Melodic Rework",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "HI5eULhmGOw"
  },
  {
    "title": "Rasiya (Tribal Afro Festival Bootleg)",
    "artist": "Tribal Afro Festival Bootleg",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "6yssxOVr6xQ"
  },
  {
    "title": "Kaun Tujhe (Melodic Afro Sunset Groove)",
    "artist": "Melodic Afro Sunset Groove",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "b-PG_D00pcw"
  },
  {
    "title": "Tu Jaane Na (Deep Afro Vocal Club Edit)",
    "artist": "Deep Afro Vocal Club Edit",
    "film": "Afro-House",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "RpKxgkLiRw4"
  },
  {
    "title": "Don't You Worry Child x With You x Dil Nu (AFTERAll Festival Edit)",
    "artist": "AFTERAll Festival Edit",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "F5X6qZ_cwMo"
  },
  {
    "title": "Baarishein x Love Story (AFTERAll Prism Live Mashup)",
    "artist": "AFTERAll Prism Live Mashup",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "edfyQIQBBf4"
  },
  {
    "title": "Koi Si (I'm Good) (AFTERAll x David Guetta Reel Edit)",
    "artist": "I'm Good",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "KSrt9oMElpQ"
  },
  {
    "title": "Playboi Carti x Punjabi Hip-Hop (AFTERAll Club Flip)",
    "artist": "AFTERAll Club Flip",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "4h9enflIg8c"
  },
  {
    "title": "Jaan Se Guzarte (AFTERAll Sufi-Tech NFAK Bootleg)",
    "artist": "AFTERAll Sufi-Tech NFAK Bootleg",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "U2jhF7RI-p4"
  },
  {
    "title": "Tauba Tauba x Losing It (FISHER Style Tech-House Mashup)",
    "artist": "FISHER Style Tech-House Mashup",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "ahaUNhScopE"
  },
  {
    "title": "Aaj Ki Raat x Tremor (DVLM Mainstage Festival Mashup)",
    "artist": "DVLM Mainstage Festival Mashup",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "-nobw5Szkhk"
  },
  {
    "title": "Winning Speech x Laserbeam (Ray Volpe Heavy Bassline Edit)",
    "artist": "Ray Volpe Heavy Bassline Edit",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "EyI2ChkxL0c"
  },
  {
    "title": "Malhari x Laserbeam (Dhol Trap & Festival Dubstep Drop)",
    "artist": "Dhol Trap & Festival Dubstep Drop",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "oU706jVWVBg"
  },
  {
    "title": "Chaiyya Chaiyya x Kernkraft 400 (Zombie Nation Rave Flip)",
    "artist": "Zombie Nation Rave Flip",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "Q8DyPg2aM_A"
  },
  {
    "title": "Badtameez Dil x Spaceman (Hardwell Big-Room Mashup)",
    "artist": "Hardwell Big-Room Mashup",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "Im9HHMU60Hs"
  },
  {
    "title": "Dhan Te Nan x Mammoth (DVLM Festival Stadium Bootleg)",
    "artist": "DVLM Festival Stadium Bootleg",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "3h1EuJkgL_A"
  },
  {
    "title": "Zingaat x Booyah (Showtek Dutch House Screech Mashup)",
    "artist": "Showtek Dutch House Screech Mashup",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "8Cc8hFlHmgw"
  },
  {
    "title": "Besharam Rang x Drugs From Amsterdam (Mau P Tech Edit)",
    "artist": "Mau P Tech Edit",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "fyuaq0jFfJE"
  },
  {
    "title": "Aankh Marey x Move Your Body (Öwnboss Brazilian Bass Flip)",
    "artist": "Öwnboss Brazilian Bass Flip",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "8iQU0ubwVdY"
  },
  {
    "title": "Choli Ke Peeche x Satisfaction (Benny Benassi Electro Saw)",
    "artist": "Benny Benassi Electro Saw",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "JuZpSPmocdU"
  },
  {
    "title": "Ghungroo x Ferrari (James Hype High-BPM House Mashup)",
    "artist": "James Hype High-BPM House Mashup",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "XUwCeFgFKQc"
  },
  {
    "title": "Dope Shope x Do It To It (ACRAZE Slap Tech-House Edit)",
    "artist": "ACRAZE Slap Tech-House Edit",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "dHsV56I1GwE"
  },
  {
    "title": "Dum Maaro Dum x Turn Off The Lights (Fred Again.. UK Bass)",
    "artist": "Fred Again.. UK Bass",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "8BbdTa6_Aak"
  },
  {
    "title": "Sadda Haq x Heads Will Roll (A-Trak Electro House Bootleg)",
    "artist": "A-Trak Electro House Bootleg",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "6xeYav0rbz8"
  },
  {
    "title": "Bhaag D.K. Bose x Bonkers (Dizzee Rascal Rave Bass Edit)",
    "artist": "Dizzee Rascal Rave Bass Edit",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "IQEDu8SPHao"
  },
  {
    "title": "Kala Chashma x Bounce Generation (TJR & VINAI Bounce Flip)",
    "artist": "TJR & VINAI Bounce Flip",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "5iW2rlGvtdw"
  },
  {
    "title": "52 Bars x Animals (Martin Garrix Big-Room Crossover)",
    "artist": "Martin Garrix Big-Room Crossover",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "ggAveCJfdBU"
  },
  {
    "title": "On Top x Tsunami (DVBBS & Borgeous Festival Drop)",
    "artist": "DVBBS & Borgeous Festival Drop",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "QaRHAvWT6Gg"
  },
  {
    "title": "Softly x Do It To It (ACRAZE Tech-House Vocal Mashup)",
    "artist": "ACRAZE Tech-House Vocal Mashup",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "w0AlESQzsKI"
  },
  {
    "title": "White Brown Black x Piece Of Your Heart (Meduza House Mix)",
    "artist": "Meduza House Mix",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "zr_sTaYTCnU"
  },
  {
    "title": "Apna Bana Le x Miracle (Calvin Harris & Ellie Goulding Flip)",
    "artist": "Calvin Harris & Ellie Goulding Flip",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "u2NAuswnTKs"
  },
  {
    "title": "Kesariya x Don't You Worry Child (SHM Progressive House)",
    "artist": "SHM Progressive House",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "hKM5JkIDTeE"
  },
  {
    "title": "Tum Hi Ho x Reload (Sebastian Ingrosso Progressive Drop)",
    "artist": "Sebastian Ingrosso Progressive Drop",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "dcgk8AUjrX4"
  },
  {
    "title": "Kabira x Clarity (Zedd Melodic Festival Bootleg)",
    "artist": "Zedd Melodic Festival Bootleg",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "V3NHpNmYY8U"
  },
  {
    "title": "Pee Loon x Sunset Lover (Petit Biscuit Chill Deep House)",
    "artist": "Petit Biscuit Chill Deep House",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "Ew7_HAhF8Rw"
  },
  {
    "title": "Tum Se Hi x Ocean (Martin Garrix Melodic Festival Edit)",
    "artist": "Martin Garrix Melodic Festival Edit",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "mt9xg0mmt28"
  },
  {
    "title": "Zaalima x Cold Water (Major Lazer Tropical Club Mashup)",
    "artist": "Major Lazer Tropical Club Mashup",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "jK0K-2Gz780"
  },
  {
    "title": "Dil Sambhal Ja Zara x Piece Of Your Heart (Meduza Bassline)",
    "artist": "Meduza Bassline",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "uTQTnig-p2o"
  },
  {
    "title": "Khuda Jaane x Without You (David Guetta Progressive Mix)",
    "artist": "David Guetta Progressive Mix",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "nCKRkqyKncw"
  },
  {
    "title": "Subhanallah x Titanium (David Guetta Festival House Flip)",
    "artist": "David Guetta Festival House Flip",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "PR2JGFF3IzM"
  },
  {
    "title": "Ishq Sufiyana x Sun & Moon (Above & Beyond Trance Edit)",
    "artist": "Above & Beyond Trance Edit",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "cvBwKeJRoNc"
  },
  {
    "title": "Hasi Ban Gaye x Heroes (Alesso Progressive House Mashup)",
    "artist": "Alesso Progressive House Mashup",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "5YGc9Y_BRXU"
  },
  {
    "title": "Soch Na Sake x Stay The Night (Zedd High-Energy Bootleg)",
    "artist": "Zedd High-Energy Bootleg",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "oPNv4dxWJHc"
  },
  {
    "title": "Agar Tum Saath Ho x Faded (Alan Walker Melodic House Mix)",
    "artist": "Alan Walker Melodic House Mix",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "dZse1_yBeKI"
  },
  {
    "title": "Chaleya x Padam Padam (Kylie Minogue Tech-House Rework)",
    "artist": "Kylie Minogue Tech-House Rework",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "GJd7wnPhX8o"
  },
  {
    "title": "Mast Magan x In My Mind (Dynoro Slap-House Festival Flip)",
    "artist": "Dynoro Slap-House Festival Flip",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "gvPjxYkXloU"
  },
  {
    "title": "Sun Saathiya x This Is What You Came For (Calvin Harris)",
    "artist": "Calvin Harris",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "2ZFyi22tGtU"
  },
  {
    "title": "Jeena Jeena x Calling [Lose My Mind] (Ingrosso & Alesso)",
    "artist": "Ingrosso & Alesso",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "yDAu3r44KJA"
  },
  {
    "title": "Tere Sang Yaara x If I Lose Myself (Alesso Festival Bootleg)",
    "artist": "Alesso Festival Bootleg",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "TGB9SNGoEKg"
  },
  {
    "title": "Mitwa x Opus (Eric Prydz Progressive Build & Drop)",
    "artist": "Eric Prydz Progressive Build & Drop",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "ru_5PA8cwkE"
  },
  {
    "title": "Tera Hone Laga Hoon x Wake Me Up (Avicii Country-House)",
    "artist": "Avicii Country-House",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "rTuxUAuJRyY"
  },
  {
    "title": "Kaun Tujhe x Something Just Like This (Chainsmokers Edit)",
    "artist": "Chainsmokers Edit",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "8YLtmmIq7ZQ"
  },
  {
    "title": "Bakhuda Tumhi Ho x Tremor (Martin Garrix Festival Drop)",
    "artist": "Martin Garrix Festival Drop",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "ENklhABDmck"
  },
  {
    "title": "Tu Jaane Na x Mammoth (DVLM Mainstage Progressive Mashup)",
    "artist": "DVLM Mainstage Progressive Mashup",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "estNgy3He1g"
  },
  {
    "title": "Softly (Bolly-Tech Extended Dancefloor Flip)",
    "artist": "Karan Aujla",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "G55cWLos73s"
  },
  {
    "title": "Winning Speech (Heavy Tech & Drill Drop Rework)",
    "artist": "Karan Aujla",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "9n5cgvaZqWQ"
  },
  {
    "title": "Admirin' You (Deep Melodic Tech House Edit)",
    "artist": "Karan Aujla",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "k85UB5b6pJU"
  },
  {
    "title": "52 Bars (Underground Minimal Tech Rework)",
    "artist": "Karan Aujla",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "4DfVxVeqk2o"
  },
  {
    "title": "White Brown Black (Driving Four-on-the-Floor Mix)",
    "artist": "Karan Aujla",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "wb1oGY-BMp4"
  },
  {
    "title": "Baller (Punchy Slap-House Club Mix)",
    "artist": "Shubh",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "xnSqbFONVNM"
  },
  {
    "title": "Cheques (Deep Bassline & Rolling Tech Bootleg)",
    "artist": "Shubh",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "2bzLVvvBqkg"
  },
  {
    "title": "Elevated (Festival Trap & Heavy Sub-Bass Mix)",
    "artist": "Shubh",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "9li8Ixx8VlQ"
  },
  {
    "title": "Still Rollin (Low-End Tech-House Club Edit)",
    "artist": "Shubh",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "hGhoYclk1qs"
  },
  {
    "title": "King Shit (Aggressive Mainstage Drop Flip)",
    "artist": "Shubh",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "d2ofxg8pHfQ"
  },
  {
    "title": "No Love (Brazilian Bass & Club Bounce Mix)",
    "artist": "Shubh",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "yInmc1KtE2k"
  },
  {
    "title": "Her (Melodic Deep House Sunset Rework)",
    "artist": "Shubh",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "0LpNZvFC6c4"
  },
  {
    "title": "Dior (High-BPM Tech-House Club Edit)",
    "artist": "Shubh",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "fK5HG6dFYo0"
  },
  {
    "title": "One Love (Afro-Tech Dancefloor Flip)",
    "artist": "Shubh",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "Q_CGKJwRfh8"
  },
  {
    "title": "Safety Off (Industrial Bassline Rework)",
    "artist": "Shubh",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "s_7GHPHnXGQ"
  },
  {
    "title": "Excuses (Melodic Tech House Club Bootleg)",
    "artist": "AP Dhillon",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "L3QnPNloqt8"
  },
  {
    "title": "Brown Munde (Festival Big-Room House Flip)",
    "artist": "AP Dhillon",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "SQ7BycCqy9g"
  },
  {
    "title": "Insane (Tech-House Punchy Bass Edit)",
    "artist": "AP Dhillon",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "PAg1MjOZTgs"
  },
  {
    "title": "With You (Deep Afro-House Sunset Edit)",
    "artist": "AP Dhillon",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "i1r7bCNuDnM"
  },
  {
    "title": "Summer High (Ibiza Sunset Melodic Rework)",
    "artist": "AP Dhillon",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "nqUN530Rgtw"
  },
  {
    "title": "Dil Nu (Rolling Bassline Club Flip)",
    "artist": "AP Dhillon",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "p2EdDiiVHh4"
  },
  {
    "title": "Wo Noor (Afro-Tech Sunset Session Edit)",
    "artist": "AP Dhillon",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "HrcjFEK58ik"
  },
  {
    "title": "Spaceship (Deep House Nightclub Bootleg)",
    "artist": "AP Dhillon",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "Q3VdSem24kU"
  },
  {
    "title": "Tere Te (High-Energy Bounce Club Mix)",
    "artist": "AP Dhillon",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "hL1fJH0UiHA"
  },
  {
    "title": "G.O.A.T. (Peak-Time Festival Tech-House Flip)",
    "artist": "Diljit Dosanjh",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "-BuX-bxXF2Y"
  },
  {
    "title": "Lover (Nu-Disco & Melodic House Club Mix)",
    "artist": "Diljit Dosanjh",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "mH_LFkWxpI0"
  },
  {
    "title": "Born To Shine (Aggressive Brass Festival Drop)",
    "artist": "Diljit Dosanjh",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "dCmp56tSSmA"
  },
  {
    "title": "Clash (Heavy Tech-House Sub-Woofer Rework)",
    "artist": "Diljit Dosanjh",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "KX06ksuS6Xo"
  },
  {
    "title": "Lemonade (Bouncy Slap-House Dance Edit)",
    "artist": "Diljit Dosanjh",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "ZVgergj8Xe4"
  },
  {
    "title": "Peaches (Groove House Summer Club Flip)",
    "artist": "Diljit Dosanjh",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "is0O2721_mA"
  },
  {
    "title": "Case (Driving Four-on-the-Floor Club Mix)",
    "artist": "Diljit Dosanjh",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "g-Ij0idc_dk"
  },
  {
    "title": "Hass Hass (Afro-Tech Crossover Edit)",
    "artist": "Diljit & Sia",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "jADTdg-o8i0"
  },
  {
    "title": "Naina (Bolly-Tech VIP Club Rework)",
    "artist": "Diljit & Badshah",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "3u6lLWGjFLY"
  },
  {
    "title": "Kinni Kinni (Deep Afro-House Sunset Bootleg)",
    "artist": "Diljit Dosanjh",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "ejYe2GwBEJ0"
  },
  {
    "title": "295 (Festival Tribute Hardstyle & Bass Edit)",
    "artist": "Sidhu Moose Wala",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "t-Sxsd-cu4A"
  },
  {
    "title": "The Last Ride (Low-End Trap & Bassline Mix)",
    "artist": "Sidhu Moose Wala",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "6xoB4ZiKKn0"
  },
  {
    "title": "So High (Heavy Dubstep & Trap Festival Flip)",
    "artist": "Sidhu Moose Wala",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "GgmFC8y8q3k"
  },
  {
    "title": "Same Beef (Industrial Bass & Drill Rework)",
    "artist": "Sidhu Moose Wala",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "JLjRYb4RwVA"
  },
  {
    "title": "Levels (Driving Tech-House Dancefloor Edit)",
    "artist": "Sidhu Moose Wala",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "oRDkkD0HZmA"
  },
  {
    "title": "Never Fold (Aggressive Sub-Bass Festival Bootleg)",
    "artist": "Sidhu Moose Wala",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "EKvxoXqz2-0"
  },
  {
    "title": "Old Skool (High-BPM Punchy Tech Flip)",
    "artist": "Prem Dhillon & Sidhu",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "D0WIwnGYtLA"
  },
  {
    "title": "Majhail (Tech-House Underground Edit)",
    "artist": "AP Dhillon",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "aBVd78VlssY"
  },
  {
    "title": "Droptop (Minimal Tech Club Rework)",
    "artist": "AP Dhillon",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "YINxH2VLP-A"
  },
  {
    "title": "Chitta Kurta (Slap-House Peak-Time Bootleg)",
    "artist": "Karan Aujla",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "Guq9Vl8dK30"
  },
  {
    "title": "Don't Look (Sunset Melodic Tech House Edit)",
    "artist": "Karan Aujla",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "KNxv88wUgnM"
  },
  {
    "title": "Mexico (Latin Tech-House Crossover Rework)",
    "artist": "Karan Aujla",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "T0LlJeSlp9A"
  },
  {
    "title": "Players (Dancehall Tech Club Mix)",
    "artist": "Badshah & Karan Aujla",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "CeFQO9MQNqs"
  },
  {
    "title": "Kya Baat Ay (Bolly-Tech High-Energy Flip)",
    "artist": "Harrdy Sandhu",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "NM0oqeLJmmA"
  },
  {
    "title": "Bijlee Bijlee (Festival Bounce House Rework)",
    "artist": "Harrdy Sandhu",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "AoPY6cYprm0"
  },
  {
    "title": "Naah (Aggressive Slap-Bass Club Mix)",
    "artist": "Harrdy Sandhu",
    "film": "Punjabi Club",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "WlLMXGf3p8Y"
  },
  {
    "title": "Don't You Worry Child x With You x Dil Nu (AFTERAll Festival Edit)",
    "artist": "AFTERAll",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "F5X6qZ_cwMo"
  },
  {
    "title": "Baarishein x Love Story (AFTERAll Prism Live Mashup)",
    "artist": "AFTERAll",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "edfyQIQBBf4"
  },
  {
    "title": "Koi Si (I'm Good) (AFTERAll x David Guetta Reel Edit)",
    "artist": "AFTERAll x David Guetta",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "KSrt9oMElpQ"
  },
  {
    "title": "Playboi Carti x Punjabi Hip-Hop (AFTERAll Club Flip)",
    "artist": "AFTERAll",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "4h9enflIg8c"
  },
  {
    "title": "Jaan Se Guzarte (AFTERAll Sufi-Tech NFAK Bootleg)",
    "artist": "AFTERAll",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "U2jhF7RI-p4"
  },
  {
    "title": "Tauba Tauba x Losing It (FISHER Style Tech-House Mashup)",
    "artist": "FISHER",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "ahaUNhScopE"
  },
  {
    "title": "Aaj Ki Raat x Tremor (DVLM Mainstage Festival Mashup)",
    "artist": "DVLM",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "-nobw5Szkhk"
  },
  {
    "title": "Winning Speech x Laserbeam (Ray Volpe Heavy Bassline Edit)",
    "artist": "Ray Volpe",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "EyI2ChkxL0c"
  },
  {
    "title": "Malhari x Laserbeam (Dhol Trap & Festival Dubstep Drop)",
    "artist": "Ray Volpe",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "oU706jVWVBg"
  },
  {
    "title": "Chaiyya Chaiyya x Kernkraft 400 (Zombie Nation Rave Flip)",
    "artist": "Zombie Nation",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "Q8DyPg2aM_A"
  },
  {
    "title": "Badtameez Dil x Spaceman (Hardwell Big-Room Mashup)",
    "artist": "Hardwell",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "Im9HHMU60Hs"
  },
  {
    "title": "Dhan Te Nan x Mammoth (DVLM Festival Stadium Bootleg)",
    "artist": "DVLM",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "3h1EuJkgL_A"
  },
  {
    "title": "Zingaat x Booyah (Showtek Dutch House Screech Mashup)",
    "artist": "Showtek",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "8Cc8hFlHmgw"
  },
  {
    "title": "Besharam Rang x Drugs From Amsterdam (Mau P Tech Edit)",
    "artist": "Mau P",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "fyuaq0jFfJE"
  },
  {
    "title": "Aankh Marey x Move Your Body (Öwnboss Brazilian Bass Flip)",
    "artist": "Öwnboss",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "8iQU0ubwVdY"
  },
  {
    "title": "Choli Ke Peeche x Satisfaction (Benny Benassi Electro Saw)",
    "artist": "Benny Benassi",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "JuZpSPmocdU"
  },
  {
    "title": "Ghungroo x Ferrari (James Hype High-BPM House Mashup)",
    "artist": "James Hype",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "XUwCeFgFKQc"
  },
  {
    "title": "Dope Shope x Do It To It (ACRAZE Slap Tech-House Edit)",
    "artist": "ACRAZE",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "dHsV56I1GwE"
  },
  {
    "title": "Dum Maaro Dum x Turn Off The Lights (Fred Again.. UK Bass)",
    "artist": "Fred Again..",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "8BbdTa6_Aak"
  },
  {
    "title": "Sadda Haq x Heads Will Roll (A-Trak Electro House Bootleg)",
    "artist": "A-Trak",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "6xeYav0rbz8"
  },
  {
    "title": "Bhaag D.K. Bose x Bonkers (Dizzee Rascal Rave Bass Edit)",
    "artist": "Dizzee Rascal",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "IQEDu8SPHao"
  },
  {
    "title": "Kala Chashma x Bounce Generation (TJR & VINAI Bounce Flip)",
    "artist": "TJR & VINAI",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "5iW2rlGvtdw"
  },
  {
    "title": "52 Bars x Animals (Martin Garrix Big-Room Crossover)",
    "artist": "Martin Garrix",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "ggAveCJfdBU"
  },
  {
    "title": "On Top x Tsunami (DVBBS & Borgeous Festival Drop)",
    "artist": "DVBBS & Borgeous",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "QaRHAvWT6Gg"
  },
  {
    "title": "Softly x Do It To It (ACRAZE Tech-House Vocal Mashup)",
    "artist": "ACRAZE",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "w0AlESQzsKI"
  },
  {
    "title": "White Brown Black x Piece Of Your Heart (Meduza House Mix)",
    "artist": "Meduza",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "zr_sTaYTCnU"
  },
  {
    "title": "Apna Bana Le x Miracle (Calvin Harris & Ellie Goulding Flip)",
    "artist": "Calvin Harris",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "u2NAuswnTKs"
  },
  {
    "title": "Kesariya x Don't You Worry Child (SHM Progressive House)",
    "artist": "Swedish House Mafia",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "hKM5JkIDTeE"
  },
  {
    "title": "Tum Hi Ho x Reload (Sebastian Ingrosso Progressive Drop)",
    "artist": "Sebastian Ingrosso",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "dcgk8AUjrX4"
  },
  {
    "title": "Kabira x Clarity (Zedd Melodic Festival Bootleg)",
    "artist": "Zedd",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "V3NHpNmYY8U"
  },
  {
    "title": "Pee Loon x Sunset Lover (Petit Biscuit Chill Deep House)",
    "artist": "Petit Biscuit",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "Ew7_HAhF8Rw"
  },
  {
    "title": "Tum Se Hi x Ocean (Martin Garrix Melodic Festival Edit)",
    "artist": "Martin Garrix",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "mt9xg0mmt28"
  },
  {
    "title": "Zaalima x Cold Water (Major Lazer Tropical Club Mashup)",
    "artist": "Major Lazer",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "jK0K-2Gz780"
  },
  {
    "title": "Dil Sambhal Ja Zara x Piece Of Your Heart (Meduza Bassline)",
    "artist": "Meduza",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "uTQTnig-p2o"
  },
  {
    "title": "Khuda Jaane x Without You (David Guetta Progressive Mix)",
    "artist": "David Guetta",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "nCKRkqyKncw"
  },
  {
    "title": "Subhanallah x Titanium (David Guetta Festival House Flip)",
    "artist": "David Guetta",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "PR2JGFF3IzM"
  },
  {
    "title": "Ishq Sufiyana x Sun & Moon (Above & Beyond Trance Edit)",
    "artist": "Above & Beyond",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "cvBwKeJRoNc"
  },
  {
    "title": "Hasi Ban Gaye x Heroes (Alesso Progressive House Mashup)",
    "artist": "Alesso",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "5YGc9Y_BRXU"
  },
  {
    "title": "Soch Na Sake x Stay The Night (Zedd High-Energy Bootleg)",
    "artist": "Zedd",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "oPNv4dxWJHc"
  },
  {
    "title": "Agar Tum Saath Ho x Faded (Alan Walker Melodic House Mix)",
    "artist": "Alan Walker",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "dZse1_yBeKI"
  },
  {
    "title": "Chaleya x Padam Padam (Kylie Minogue Tech-House Rework)",
    "artist": "Kylie Minogue",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "GJd7wnPhX8o"
  },
  {
    "title": "Mast Magan x In My Mind (Dynoro Slap-House Festival Flip)",
    "artist": "Dynoro",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "gvPjxYkXloU"
  },
  {
    "title": "Sun Saathiya x This Is What You Came For (Calvin Harris)",
    "artist": "Calvin Harris",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "2ZFyi22tGtU"
  },
  {
    "title": "Jeena Jeena x Calling [Lose My Mind] (Ingrosso & Alesso)",
    "artist": "Ingrosso & Alesso",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "yDAu3r44KJA"
  },
  {
    "title": "Tere Sang Yaara x If I Lose Myself (Alesso Festival Bootleg)",
    "artist": "Alesso",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "TGB9SNGoEKg"
  },
  {
    "title": "Mitwa x Opus (Eric Prydz Progressive Build & Drop)",
    "artist": "Eric Prydz",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "ru_5PA8cwkE"
  },
  {
    "title": "Tera Hone Laga Hoon x Wake Me Up (Avicii Country-House)",
    "artist": "Avicii",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "rTuxUAuJRyY"
  },
  {
    "title": "Kaun Tujhe x Something Just Like This (Chainsmokers Edit)",
    "artist": "The Chainsmokers",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "8YLtmmIq7ZQ"
  },
  {
    "title": "Bakhuda Tumhi Ho x Tremor (Martin Garrix Festival Drop)",
    "artist": "Martin Garrix",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "ENklhABDmck"
  },
  {
    "title": "Tu Jaane Na x Mammoth (DVLM Mainstage Progressive Mashup)",
    "artist": "DVLM",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "estNgy3He1g"
  },
  {
    "title": "Arjan Vailly x Laserbeam (Ray Volpe Dubstep/Trap Drop)",
    "artist": "Ray Volpe",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "bwMTnhglpJY"
  },
  {
    "title": "Aayi Nai x Bounce Generation (TJR & VINAI Festival Bounce)",
    "artist": "TJR & VINAI",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "0NeKfKBd6S0"
  },
  {
    "title": "What Jhumka? x Do It To It (ACRAZE Tech-House Punch)",
    "artist": "ACRAZE",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "sDSud3GfY0I"
  },
  {
    "title": "Sher Khul Gaye x Ferrari (James Hype High-Energy Tech Edit)",
    "artist": "James Hype",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "n9dNhtq32wY"
  },
  {
    "title": "Jamal Kudu x Losing It (FISHER Rolling Tech-Bass Bootleg)",
    "artist": "FISHER",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "HlHQbV0JbAE"
  },
  {
    "title": "Naina x Move Your Body (Öwnboss Deep Brazilian Bass)",
    "artist": "Öwnboss",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "V8MbMgCn4tM"
  },
  {
    "title": "Not Ramaiya Vastavaiya x Tremor (DVLM Mainstage Banger)",
    "artist": "DVLM",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "9vMh9f41pqE"
  },
  {
    "title": "Ishq Jaisa Kuch x Piece Of Your Heart (Meduza Tech-House Flip)",
    "artist": "Meduza",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "hE2Ira-Cwxo"
  },
  {
    "title": "Bhool Bhulaiyaa 3 x Satisfaction (Benny Benassi Electro Saw)",
    "artist": "Benny Benassi",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "aZcSCT34H84"
  },
  {
    "title": "Lutt Putt Gaya x Levels (Avicii Melodic Progressive Drop)",
    "artist": "Avicii",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "_ovdm2yX4MA"
  },
  {
    "title": "Dance Ka Bhoot x Animals (Martin Garrix Big-Room Drop)",
    "artist": "Martin Garrix",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "gCYcHz2k5x0"
  },
  {
    "title": "Kaavaalaa x Turn Off The Lights (Fred Again.. Bassline Flip)",
    "artist": "Fred Again..",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "xMV6l2y67rk"
  },
  {
    "title": "Main Nikla Gaddi Leke x Booyah (Showtek Dutch House Drop)",
    "artist": "Showtek",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "W-SFi3UhEOY"
  },
  {
    "title": "Kusu Kusu x Drugs From Amsterdam (Mau P Minimal Tech Edit)",
    "artist": "Mau P",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "NZd7q60bHck"
  },
  {
    "title": "Tip Tip Barsa Paani x Ferrari (James Hype Tech Rework)",
    "artist": "James Hype",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "n9dNhtq32wY"
  },
  {
    "title": "Chandigarh Mein x Move Your Body (Öwnboss Bass House Edit)",
    "artist": "Öwnboss",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "V8MbMgCn4tM"
  },
  {
    "title": "Coka 2.0 x Tsunami (DVBBS & Borgeous Hard Festival Drop)",
    "artist": "DVBBS & Borgeous",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "0EWbonj7f18"
  },
  {
    "title": "Ra Ra Rakkamma x Laserbeam (Ray Volpe Heavy Bass Flip)",
    "artist": "Ray Volpe",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "bwMTnhglpJY"
  },
  {
    "title": "Param Sundari x Do It To It (ACRAZE Punchy Bassline Mix)",
    "artist": "ACRAZE",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "sDSud3GfY0I"
  },
  {
    "title": "BurjKhalifa x Heads Will Roll (A-Trak Electro House Bootleg)",
    "artist": "A-Trak",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "umAL-6_sddA"
  },
  {
    "title": "Nadiyon Paar x Losing It (FISHER Minimal Tech Drop)",
    "artist": "FISHER",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "HlHQbV0JbAE"
  },
  {
    "title": "Morani Baga Ma x Spaceman (Hardwell Big-Room Festival Edit)",
    "artist": "Hardwell",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "6_i71QOQG5g"
  },
  {
    "title": "High Rated Gabru x Tremor (Martin Garrix Mainstage Rework)",
    "artist": "Martin Garrix",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "9vMh9f41pqE"
  },
  {
    "title": "Coca Cola Tu x Bounce Generation (VINAI Festival Bounce)",
    "artist": "VINAI",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "0NeKfKBd6S0"
  },
  {
    "title": "Chhote Chhote Peg x Bonkers (Dizzee Rascal Rave Bassline)",
    "artist": "Dizzee Rascal",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "ISy0Hl0SBfg"
  },
  {
    "title": "Buzz x Animals (Martin Garrix Peak-Time Club Mashup)",
    "artist": "Martin Garrix",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "gCYcHz2k5x0"
  },
  {
    "title": "Kya Baat Ay 2.0 x Move Your Body (Öwnboss Brazilian Bass Flip)",
    "artist": "Öwnboss",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "V8MbMgCn4tM"
  },
  {
    "title": "Jeda Nasha x Drugs From Amsterdam (Mau P Tech-House Bootleg)",
    "artist": "Mau P",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "NZd7q60bHck"
  },
  {
    "title": "Alcoholia x Laserbeam (Ray Volpe Hard Trap/Dubstep Edit)",
    "artist": "Ray Volpe",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "bwMTnhglpJY"
  },
  {
    "title": "Besharmi Ki Height x Spaceman (Hardwell Peak-Time Club Mix)",
    "artist": "Hardwell",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "6_i71QOQG5g"
  },
  {
    "title": "Fevicol Se x Booyah (Showtek Festival Screech Drop)",
    "artist": "Showtek",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "W-SFi3UhEOY"
  },
  {
    "title": "Sheila Ki Jawani x Kernkraft 400 (Zombie Nation Rave Synth)",
    "artist": "Zombie Nation",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "z5LW07FTJbI"
  },
  {
    "title": "Dhoom Machale x Mammoth (DVLM Mainstage Stadium Drop)",
    "artist": "DVLM",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "_o-XIryB2gg"
  },
  {
    "title": "Paisa Yeh Paisa x Bonkers (Dizzee Rascal Aggressive Bass)",
    "artist": "Dizzee Rascal",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "ISy0Hl0SBfg"
  },
  {
    "title": "Slow Motion x Turn Up The Speakers (Afrojack & Garrix Drop)",
    "artist": "Afrojack & Martin Garrix",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "SRq7FUGxJew"
  },
  {
    "title": "Ainvayi Ainvayi x Bounce Generation (TJR Bounce House Edit)",
    "artist": "TJR",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "0NeKfKBd6S0"
  },
  {
    "title": "Muqabla x Satisfaction (Benny Benassi Distorted Saw Drop)",
    "artist": "Benny Benassi",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "aZcSCT34H84"
  },
  {
    "title": "Dilbar x Ferrari (James Hype Tech-House Club Flip)",
    "artist": "James Hype",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "n9dNhtq32wY"
  },
  {
    "title": "Tumse Milke Dil Ka Jo Haal x Turn Off The Lights (Fred Again..)",
    "artist": "Fred Again..",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "xMV6l2y67rk"
  },
  {
    "title": "Gali Gali x Losing It (FISHER Tech-House Peak-Time Rework)",
    "artist": "FISHER",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "HlHQbV0JbAE"
  },
  {
    "title": "295 x Laserbeam (Ray Volpe Heavy Bass Tribute Edit)",
    "artist": "Ray Volpe",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "bwMTnhglpJY"
  },
  {
    "title": "The Last Ride x Mammoth (DVLM Mainstage Festival Flip)",
    "artist": "DVLM",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "_o-XIryB2gg"
  },
  {
    "title": "Elevated x Do It To It (ACRAZE Slap Tech-House Mashup)",
    "artist": "ACRAZE",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "sDSud3GfY0I"
  },
  {
    "title": "Baller x Move Your Body (Öwnboss Brazilian Bass Drop)",
    "artist": "Öwnboss",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "V8MbMgCn4tM"
  },
  {
    "title": "Insane x Drugs From Amsterdam (Mau P Minimal Tech Edit)",
    "artist": "Mau P",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "NZd7q60bHck"
  },
  {
    "title": "Summer High x Sunset Lover (Petit Biscuit Chill Deep House)",
    "artist": "Petit Biscuit",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "wuCK-oiE3rM"
  },
  {
    "title": "Excuses x Piece Of Your Heart (Meduza Melodic Tech Mix)",
    "artist": "Meduza",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "hE2Ira-Cwxo"
  },
  {
    "title": "Lover x Ferrari (James Hype High-BPM Dancefloor Rework)",
    "artist": "James Hype",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "n9dNhtq32wY"
  },
  {
    "title": "Born To Shine x Spaceman (Hardwell Festival Brass Bootleg)",
    "artist": "Hardwell",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "6_i71QOQG5g"
  },
  {
    "title": "Hass Hass x Don't You Worry Child (SHM Progressive House Edit)",
    "artist": "Swedish House Mafia",
    "film": "Club Mashup",
    "isRemix": true,
    "isClub": true,
    "youtubeId": "1y6smkh6c-0"
  }
];

const listHaryanvi: any[] = [
  {
    "title": "Chambal Ka Daku (Heavy Bass Drop Edit)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "2_3kLZS0FKY",
    "videoTitle": "Chambal Ke Dakku [BASS BOOSTED] SONG DEEP BASS NAMO MASOON SHARMA | ARYAN BASS",
    "author": "Aryan Bass"
  },
  {
    "title": "Systum (Tech-House Club Mix)",
    "artist": "Masoom Sharma & Elvish Yadav",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "QohIp3-Ygxk",
    "videoTitle": "SADI SUN - Elvish Yadav & Simrat Kaur Randhawa | Harsh Nussi | Anshul Garg",
    "author": "Play DMF"
  },
  {
    "title": "2 Numbari (Sub-Bass Club Rework)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "wYaSn-zChMs",
    "videoTitle": "2 Numberi Masoom Sharma New Haryanvi Latest Song 2021 Bass Boosted Song",
    "author": "JBL Trap"
  },
  {
    "title": "Badnam Gabru (Drill Bass Flip)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "zfK305I1yNw",
    "videoTitle": "BADNAAM GABRU I CONCERT HALL 🔊 SURROUNDING SOUND #haryanvi #bassboosted#music#trending #concerthall",
    "author": "MAFIA"
  },
  {
    "title": "Kala Daman (Extended Bass Mix)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "xnVAT1e1VoQ",
    "videoTitle": "Kala Daman Bass Boosted | Renuka Panwar | Kay D | New Haryanvi Songs Haryanavi 2021",
    "author": "SY Techie Song"
  },
  {
    "title": "Dada Sadhu (Hard Trap Festival Edit)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "gfBTUmBwtq0",
    "videoTitle": "Dada (Official Video) | Masoom Sharma | Sapna Choudhary | Prem Vats | New Haryanvi Song 2026",
    "author": "Mahra Tora"
  },
  {
    "title": "Jail Karawegi (Peak-Time Electro Drop)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "2fUpGHEO8Bs",
    "videoTitle": "Ek Khatola Jail Ke Bhitar | Masoom Sharma | High Gain Remix - Dj Tushar Gautam X Dj Pari Nand Nagri",
    "author": "DJ GAUTAM PRODUCTION OF DELHI"
  },
  {
    "title": "Badmashi (Low-End Club Mix)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "5HYoJeiAYKw",
    "videoTitle": "MASOOM SHARMA ; Badmashi On Top | Rahul Lamba | Nisha Bhatt | Swara Verma | New Hindi Song 2025",
    "author": "Filmy Facts HR08"
  },
  {
    "title": "Gunda Raj (Heavy Bassline Edit)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "KUF4gE1EBUE",
    "videoTitle": "Gundagarh (Official Video) Masoom Sharma | Ashu Twinkle | Pulkit S, Manvi B | New Haryanvi Song 2025",
    "author": "Anand Haryanvi"
  },
  {
    "title": "Kalesh (Industrial Bass Drop)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "7VIkpI6mxSE",
    "videoTitle": "Masoom Sharma : Bhaichara | Kaash Beniwal | Mithuu Worldz | Shiva Chaudhary | New Haryanvi Song 2025",
    "author": "Milan Records"
  },
  {
    "title": "Raaj (Sub-Woofer Club Mix)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "Yapi0DpVDd8",
    "videoTitle": "Tuition Badmashi Kaa (8D AUDIO) Hemant Faujdar, Kiran, Masoom Sharma, Manisha S, Mukesh J, Aman J",
    "author": "8D Active Music"
  },
  {
    "title": "Pistol (Trap Bass Mix)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "-r_Lj6aCNV0",
    "videoTitle": "Pistol 4 5 Ka (BASS BOOSTED) Masoom Sharma | Shivani Yadav | New Haryanvi Bass Boosted Songs 2026",
    "author": "𝙍𝙚𝙘𝙖𝙥 𝙈𝙤𝙫𝙞𝙚𝙨𝙨 "
  },
  {
    "title": "Randa Party (Club Bounce Edit)",
    "artist": "Diler Kharkiya",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "2rBd4KHmrf4",
    "videoTitle": "Sare jamjam nach ke dikha do | VideoMusic| Nonstop Party Song| NewDjRemix | Round2hell HrCrazyStatus",
    "author": "Hr Crazy Status"
  },
  {
    "title": "Boli Haryanvi (Hard Dance Rework)",
    "artist": "Diler Kharkiya",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "Z1GZTTg3kd4",
    "videoTitle": "High Court (Official Music Video) Diler Kharkiya | Haryanvi song 2025",
    "author": "Diler Kharkiya"
  },
  {
    "title": "Moto (Festival Bassline Edit)",
    "artist": "Diler Kharkiya & Ajay Hooda",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "kMoy9lcVcrY",
    "videoTitle": "MOTO - Dixie x Costary x B WAVE",
    "author": "B_WAVE"
  },
  {
    "title": "Albelo (Club Tech Flip)",
    "artist": "Diler Kharkiya",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "GTHxTw4hPrU",
    "videoTitle": "Mein Angreji Padi Likhi |  मैं अंग्रेजी पड़ी लिखी || Vijay Verma || Haryanvi Song Haryanavi",
    "author": "Sonotek"
  },
  {
    "title": "Diler Harkesh (Aggressive Bass Mix)",
    "artist": "Diler Kharkiya",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "q1y-ZbxrH4s",
    "videoTitle": "High Court Diler Kharkiya Song Dj Remix | Hard Bass Vibration Competition Mix |Dj Chandu Hd ",
    "author": "MIXER CHANDU "
  },
  {
    "title": "Fauji (Extended Peak-Time Edit)",
    "artist": "Diler Kharkiya",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "ptlfNSJyfBU",
    "videoTitle": "Jija Ji (Official Video) Diler Kharkiya | Preeti Jangra | Kehar Kharkiya | New Haryanvi Song 2025",
    "author": "Sonotek Music"
  },
  {
    "title": "Feel (Club Slap-House Mix)",
    "artist": "Sumit Goswami",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "-QuiDAufvQo",
    "videoTitle": "Feelings | Tropical vs Trap Remix | Dj Dalal London | Sumit Goswami | KHATRI | Haryanvi DJ Song 2021",
    "author": "DJ HUNTER YTC"
  },
  {
    "title": "Parindey (Tech Bass Rework)",
    "artist": "Sumit Goswami",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "ZEkW7pd5vo0",
    "videoTitle": "Parindey Lyrical Video | SUMIT GOSWAMI | New Haryanvi Songs Haryanavi 2019 | Haryanvi Maina",
    "author": "Haryanvi Maina"
  },
  {
    "title": "Yaar Ki Shaadi (High-BPM Club Mix)",
    "artist": "Sumit Goswami",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "Q8hw-mAuKFQ",
    "videoTitle": "Mere Yaar Ki Shadi Hai Dance Remix - DJ Kailash Raipur | Mere Yaar Ki Shadi Hai Dj Mix | DJ Mohit Mk",
    "author": "DJ Mohit Mk"
  },
  {
    "title": "Feelings (Deep Bassline Flip)",
    "artist": "Sumit Goswami",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "FDk3P_Nruyk",
    "videoTitle": "Feelings Sumit Goswami [Bass boosted] KHATRI|DBB|Haryanvi Song 2020 Latest song",
    "author": "DEEP BOOSTED BASS (DBB)"
  },
  {
    "title": "Baazigar (Drill Drop Mix)",
    "artist": "Sumit Goswami",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "AkdFJKldHUo",
    "videoTitle": "DIVINE Baazigar Ft. KR$NA By (Decade x Rishabh)",
    "author": "DECADE"
  },
  {
    "title": "Army (Hardstyle Club Edit)",
    "artist": "Sumit Goswami",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "729n8l90byw",
    "videoTitle": "Army",
    "author": "Sumit Goswami - Topic"
  },
  {
    "title": "Sweet Poison (Tech-House Drop)",
    "artist": "Sumit Goswami",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "QFTAWTjVtFU",
    "videoTitle": "Baarish Ki Jaaye Moombahton DJ remix song Latest DJ song DJ Sonu",
    "author": "DjSAHU Sonu"
  },
  {
    "title": "Yaariyan (Extended Club Edit)",
    "artist": "Sumit Goswami",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "dB8CvI31FfY",
    "videoTitle": "Sumit Goswami all song 🎶🎤sumit goswami 11 top songs🎧🎵 Dj mix jukebox sumit Goswamnon stop song i",
    "author": "Archit Mishra musical"
  },
  {
    "title": "Gangwar (Aggressive Trap Mix)",
    "artist": "Sumit Goswami",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "SEpTl9hlyq8",
    "videoTitle": "SUMIT GOSWAMI - ARMY (GANGWAR 2) | SHANKY GOSWAMI | New Haryanvi Songs Haryanavi | SONOTEK",
    "author": "Sonotek Music"
  },
  {
    "title": "Raajneeti (Hard Bass Rework)",
    "artist": "Sumit Goswami",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "dp9aZ2NHN_E",
    "videoTitle": "Le_aau_safari_ji_karda___Dj_Remix||Hard bass||Sumit goswami song||MAHADEV DJ PRODUCTION",
    "author": "MAHADEV DJ PRODUCTION"
  },
  {
    "title": "Gaam Ka Desi (UK Drill Club Mix)",
    "artist": "KD",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "1GgPK1dGW6o",
    "videoTitle": "Chora Gaam Ka Song | Sumit Goswami | Boys Attitude Song | Sun le main Chora Gaam Ka | chota gaam ka",
    "author": "LOVE REZ"
  },
  {
    "title": "Haryanvi Swag (Peak-Time Electro Mix)",
    "artist": "KD",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "igX5G1c4kTs",
    "videoTitle": "JAZBAATI BANDE (Full Video) Khasa Aala Chahar | KD DESIROCK | KHAAS REEL | Haryanvi Songs 2021",
    "author": "White Hill Dhaakad"
  },
  {
    "title": "Desi Desi Na Bolya Kar (Hard Slap Mix)",
    "artist": "MD KD",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "NCc0vovj7KM",
    "videoTitle": "✓ DESI DESI (OFFICIAL VIDEO) Raju Punjabi, MD & KD DESIROCK , Vicky Kajla | New Haryanvi Songs",
    "author": "Sonotek"
  },
  {
    "title": "2 Raflaan (Tech Bass Edit)",
    "artist": "MD KD",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "NkgmX511d0s",
    "videoTitle": "Dunaali (Official Song) MD Desi Rockstar | AK Jatti | Geetanjali Mishra | Latest Haryanvi Song 2021",
    "author": "Sonotek Music"
  },
  {
    "title": "Bapu Tera Putt (Bassline Extended Edit)",
    "artist": "Sumit Goswami",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "rxY7MXJCQVo",
    "videoTitle": "Bapu Tere Putt Nu Star Akhde : Sidhu Moose Wala | Baapu Song | Sidhu Moose Wala Trending Song 2022",
    "author": "Six Star Saga"
  },
  {
    "title": "Badmashi Ka Rog (Heavy Bass Mix)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "j67MMW8h9Ic",
    "videoTitle": "MASOOM SHARMA : Chulla Nondh (Official Video) Nidhi Sharma Ft. Harsh Sandhu | New Haryanvi Song 2024",
    "author": "HKI MUSIC"
  },
  {
    "title": "Asla (Hard Trap Drop Edit)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "PgjrJAyGHQc",
    "videoTitle": "WARNING (Slowed & Reverb) | Masoom Sharma | Malika Kaliraman | New Haryanvi Songs Haryanavi 2025",
    "author": "ɪᴛs' ꝛᴀᴊ"
  },
  {
    "title": "Haryane Ka Chhora (Club Punch Rework)",
    "artist": "Raju Punjabi",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "r4Cdibl_MaA",
    "videoTitle": "Haryana Ka chora|NJ Nindaniya | Dhull Saab|Lamba Thada Chora  | New Haryanvi Song 2024 Jaat Song2024",
    "author": "Moc Ministry of Cinemas"
  },
  {
    "title": "Choudhar Jaat Ki (Sub-Bass Club Mix)",
    "artist": "Raju Punjabi",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "JFnb3P0VHRs",
    "videoTitle": "Choudhar Jaat Ki | Kon Rees Karega Duniya Me Mhare | Raju Punjabi | New Haryanvi Songs 2024",
    "author": "Aansh Music"
  },
  {
    "title": "Solid Body (Extended Bass Flip)",
    "artist": "Raju Punjabi & Ajay Hooda",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "CQWZtM9C9sI",
    "videoTitle": "Solid body - Ajay Hooda, Raju Punjabi and Anjali ragahv (Lyrics)",
    "author": "Vibezone"
  },
  {
    "title": "Sandal (Tech-House Edit)",
    "artist": "Raju Punjabi",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "ajSBOb7U0DY",
    "videoTitle": "Sandal | सैंडल | Haryanvi DJ Song 2016 | Vijay Varma, Anjali Raghav | Raju Punjabi, Sonika Singh",
    "author": "Voice of Heart Music"
  },
  {
    "title": "Zero Figure (High-Energy Club Rework)",
    "artist": "Raju Punjabi",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "6iTjoV4oHQY",
    "videoTitle": "Latest Haryanvi Song 2017 Zero Figure  T M Kharkhoda, Sapna Chaudhary   New VIDEO SONG",
    "author": "Royal Rajsthan "
  },
  {
    "title": "Tu Cheez Lajawab (Peak-Time Electro Edit)",
    "artist": "Raju Punjabi",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "Vi7-HjOtyKA",
    "videoTitle": "Tu Cheej Lajwaab | तू चीज लाजबाब | Pardeep Boora & Sapna Chaudhary | New Haryanvi Song",
    "author": "Sonotek Digital"
  },
  {
    "title": "Aala Re Aala (Hard Trap Mix)",
    "artist": "Raju Punjabi",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "S1g_C34cqZI",
    "videoTitle": "HOOKE AALA JAAT - Raju Punjabi, Pardeep Boora | VR Bros | New Haryanvi Song 2018 | Nav Haryanvi",
    "author": "Nav Haryanvi"
  },
  {
    "title": "Fair Lovely (Slap-House Edit)",
    "artist": "Raju Punjabi",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "E_iwMtz2Mz4",
    "videoTitle": "Fair & Lovely || Raju Punjabi & Sonika Singh || New Latest D J Song 2017 || Mor Music",
    "author": "Mor Haryanvi"
  },
  {
    "title": "Desi Ka Pavva (Extended Bassline)",
    "artist": "Raju Punjabi",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "HKXfSei0k30",
    "videoTitle": "Mai So Khau Tere Sar ki (Official Video) Raju Punjabi | Sushila Takhar | Latest Haryanvi Song 2025",
    "author": "@Love Records"
  },
  {
    "title": "Kache Kateinge (Club Bounce Mix)",
    "artist": "Raju Punjabi",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "dQw4w9WgXcQ"
  },
  {
    "title": "Bholenath (Psy-Trance Club Mix)",
    "artist": "Kaka",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "a4pi2zKbf8Q",
    "videoTitle": "Bholenath (A Love Story) – Kaka WRLD | Main Bhola Parvat Ka",
    "author": "Pellet Drum Productions"
  },
  {
    "title": "Bhole Baba (Trance Festival Edit)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "--YDrVkgh7E",
    "videoTitle": "Hum to Bhole Hain (Full Song) Masoom Sharma, Srishati Sharma, Manjeet Mor | Bhole Baba Song 2026",
    "author": "Masoom Sharma"
  },
  {
    "title": "Bam Lahiri (Industrial Rave Mix)",
    "artist": "Traditional / DJ Edit",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "GkFYVJG2lrg",
    "videoTitle": "Shiv Stuti (Bum Lehri) BxckBencher | Shri Bansi Jogi | 1995 - 2025 | Latest New Song",
    "author": "BxckBencher "
  },
  {
    "title": "Damru Bajaya (Psy Bass Edit)",
    "artist": "Narender Bhagana",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "hjD2b8MtJJc",
    "videoTitle": "SHANKRA (Official Video) | Narender Bhagana | Sunny Joon| Bijender Jaji | Kanwar Jaji",
    "author": "Redtune Music"
  },
  {
    "title": "Mahadev (Peak-Time Trap Mix)",
    "artist": "Kaka",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "kTJmO0gLPGY",
    "videoTitle": "Kaka WRLD - Bholenath 2 (The Destroyer) | Official Audio",
    "author": "Pellet Drum Productions"
  },
  {
    "title": "Bahu Kale Ki (Slap-House Club Mix)",
    "artist": "Ajay Hooda & Gajender Phogat",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "Mlj0hdOG4QQ",
    "videoTitle": "Bahu Kale Ki || Ajay Hooda || Gajender Phogat & Anu Kadyan || New D J song 2018 || Mor Music",
    "author": "Mor Haryanvi"
  },
  {
    "title": "Gypsy / Balam Thanedar (Electro-Saw Drop)",
    "artist": "GD Kaur & Pranjal Dahiya",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "cZSrWoBMSrg",
    "videoTitle": "Gypsy (Balam Thanedar) - GD Kaur ft. Pranjal Dahiya & Dinesh Golan | Haryanvi Song | Real Music",
    "author": "Real Music"
  },
  {
    "title": "52 Gaj Ka Daman (Festival Bounce Edit)",
    "artist": "Renuka Panwar",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "CZt-rVn2BJs",
    "videoTitle": "52 GAJ KA DAMAN | PRANJAL DAHIYA | AMAN JAJI | RENUKA PANWAR  | MUKESH JAJI | SAHIL SANDHU",
    "author": "Mahra Tora"
  },
  {
    "title": "Kabootar (High-Energy Dance Mix)",
    "artist": "Renuka Panwar & Surender Romio",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "Eb28L8PO-qc",
    "videoTitle": "Kabootar 2(Official Video) Renuka Panwar |Surender Romio|Aamin Barodi|Sahil Sandhu|New Haryanvi Song",
    "author": "Dhaakad Music"
  },
  {
    "title": "Matak Chalungi (Club Tech Flip)",
    "artist": "Renuka Panwar",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "3Osb9EUYum0",
    "videoTitle": "52 Gaj Ka Damen Phar Matak Chalungi ~ Renuka Panwar New Haryanvi Hit Song 2020",
    "author": "Aditya Kaushik"
  },
  {
    "title": "DJ Pe Nachungi (Extended Club Edit)",
    "artist": "Renuka Panwar",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "qz1e9oCwXmE",
    "videoTitle": "Naal Nachna x Aaaja Nachle (Farooq Got Audio Remix) | Afsana Khan x Hans Raj Hans",
    "author": "Farooq"
  },
  {
    "title": "Chhatri (Slap-House Rework)",
    "artist": "Renuka Panwar",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "q09QvdvB1Iw",
    "videoTitle": "Geeta Zaildar: Chattri Full Song | Latest Punjabi Songs 2016 | Aman Hayer | T-Series Apna Punjab",
    "author": "T-Series Apna Punjab"
  },
  {
    "title": "Balam Ka System (Brazilian Bass Flip)",
    "artist": "Fazilpuria",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "cl-fJfpRiDk",
    "videoTitle": "Hawa Hawa Ae Hawa (BASS BOOSTED) | Full Remix Song #bassboosted #remix #music",
    "author": "SRT-REMIX2"
  },
  {
    "title": "Lala Lala Lori (Club House Rework)",
    "artist": "Fazilpuria & Afsana Khan",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "hNYGYjnnyuA",
    "videoTitle": "Million Dollar | Official Song | Fazilpuria & Lauren Gottlieb | Rossh",
    "author": "Zee Music Company"
  },
  {
    "title": "Chhaliya (Peak-Time Dance Mix)",
    "artist": "Ajay Hooda & Ruchika Jangid",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "ui75YBBgk-0",
    "videoTitle": "Balam (Official Video) | Sapna Choudhary | Mahi Gaur | Ruchika Jangid | New Haryanvi Song 2022",
    "author": "Desi Geet"
  },
  {
    "title": "Tagdi (Big-Room Festival Drop)",
    "artist": "Ajay Hooda & Gagan Haryanvi",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "t9dWF8jQRog",
    "videoTitle": "तागड़ी # Tagdi # Ajay Hooda # New DJ Song 2018 # Gagan & Anu Kadyan # Mor Music",
    "author": "Mor Haryanvi"
  },
  {
    "title": "Goli Chal Javegi (Bassline Club Edit)",
    "artist": "Ajay Hooda",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "Ger_7-Ai7lk",
    "videoTitle": "Goli Chal Javegi  || Latest Song 2016 || New Melody Song || Mor Music Company",
    "author": "Mor Haryanvi"
  },
  {
    "title": "Gajban Pani Ne Chali (High-BPM Electro Mix)",
    "artist": "Vishvajeet Choudhary",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "MD2Or5ZxBSs",
    "videoTitle": "Gajban Pani Ne Challi | Vishvjeet Chaudhary Ft. Sapna Choudhary",
    "author": "Single Track Haryanvi"
  },
  {
    "title": "Kothe Upar Kothri / Ghungroo (Tech-House Edit)",
    "artist": "Sapna Choudhary",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "0mrqjNU15-Y",
    "videoTitle": "Jai Vikraanta - Kothe Uper Kothri Main Us Pe Rail Chala Doongi - Alka Yagnik",
    "author": "Shemaroo"
  },
  {
    "title": "Bandook Chalegi (Festival Hardstyle Drop)",
    "artist": "Sapna Choudhary",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "WRgNXE3ITag",
    "videoTitle": "Bandook Ka Riwaaz DJ Remix VIKAS GAURAV Productions sapna choudhary latest haryanvi DJ song 2022",
    "author": "DJ GAURAV VIKAS "
  },
  {
    "title": "Teri Aakhya Ka Yo Kajal (Club Extended Mix)",
    "artist": "DC Madana & Sapna",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "zC6bs6rFWG4",
    "videoTitle": "Sapna Super Hit Song Teri Aakhya Ka Yo Kajal | Lyrics Video | New Haryanvi Song 2018 | Sonotek",
    "author": "Sonotek Punjabi"
  },
  {
    "title": "Bahu Jamidar Ki (Slap-Bass Edit)",
    "artist": "Vinod Chimpa",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "we-RbtAjW54",
    "videoTitle": "Vinod chimpa",
    "author": "Omjee Prajapati"
  },
  {
    "title": "Dhanak Ka Tota (Tech-House Mix)",
    "artist": "Ruchika Jangid",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "sLsTWm17h8U",
    "videoTitle": "Matak Matak Ke (Official Video) Sapna Choudhary | Ruchika Jangid | New Haryanvi Song 2026 | Sonotek",
    "author": "Sonotek Music"
  },
  {
    "title": "Gore Tan Pe Marjani (Extended Club Flip)",
    "artist": "Ruchika Jangid",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "VGiO8AJ9gE8",
    "videoTitle": "Bahu Rangeeli | Ruchika Jangid | Gori Nagori | Kay D | New Haryanvi Song | Sonotek Music World",
    "author": "Sonotek Music World"
  },
  {
    "title": "Madam Baith Bolero Mein (Hard Dance Edit)",
    "artist": "Raju Punjabi",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "PJyK_DHUfjY",
    "videoTitle": "Madam Baith Bolero Mein | Chanpreet Channi, Minakshi Panchal | Haryanvi Song | Sonotek",
    "author": "Sonotek"
  },
  {
    "title": "Teri Lat Lag Jagi (Sub-Bass Club Mix)",
    "artist": "Sonu Sharma & Ruchika",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "XqUl0LtdYw8",
    "videoTitle": "Latest Haryanvi Song 2017 | Teri Lat Lag Jagi | New Haryanvi Song | Sonu Sharma | Rucika | Maina",
    "author": "Haryanvi Maina"
  },
  {
    "title": "Thada Bhartar (Club Bounce Edit)",
    "artist": "Raju Punjabi & Sushila Thakar",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "Uq4dyDHgqAI",
    "videoTitle": "Thada Bhartar | Sapna Chaudhary, Raju Punjabi | Sushila Takhar, Ronit | Latest Haryanvi Song 2020",
    "author": "Sonotek"
  },
  {
    "title": "Chetak (High-Energy Electro Mix)",
    "artist": "Raj Mawar",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "UZjPQ-r5LyA",
    "videoTitle": "Chetak - Sapna Chaudhary | Raj Mawar | Mehar Risky | New Haryanvi Songs Haryanavi | Sapna Choudhary",
    "author": "Sonotek"
  },
  {
    "title": "Laad Ladaun (Club Slap Rework)",
    "artist": "Raj Mawar",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "YcIrGqyNdC4",
    "videoTitle": "Laad Ladaunga | Vijay Varma, Raj Mawar, Mahi, Sakshi D | New Haryanvi Songs Haryanavi 2025 | DJ Song",
    "author": "Vijay Varma Official"
  },
  {
    "title": "Kasoota (Hard Bass Club Edit)",
    "artist": "Fazilpuria",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "G47KEW-Xon4",
    "videoTitle": "Ghana Kasoota (8D Audio) |@Raftaar | Surbhi Jyoti | @Rashmeet Kaur | 3D Surround Sounds | HQ",
    "author": "Just Rahulz"
  },
  {
    "title": "Jimmy Choo (Tech House Drop)",
    "artist": "Fazilpuria",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "0S8sA4ygEfc",
    "videoTitle": "JIMMY CHOO | JIMMY CHOO FULL SONG| FAZILPURIA | PRIYANKA GOYAT | #jimmychoo #newsong  #partymusic",
    "author": "9XM"
  },
  {
    "title": "Pallo Latke (Haryanvi Trap Flip)",
    "artist": "Fazilpuria",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "FjQk-2jHevs",
    "videoTitle": "Pallo Latke | Jyotica Tangri | Shaadi Mein Zaroor Aana |Rajkummar & Kriti Kharbanda | Fazilpuria",
    "author": "Zee Music Company"
  },
  {
    "title": "Angoor (Extended Club Mix)",
    "artist": "Surender Romio",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "OdbrTKjTs-g",
    "videoTitle": "\"Soven De Piya\" - New Haryanvi Romantic Song - Full Song 2017 - TR - Sonu Kundu - Sonika Singh -NDJ",
    "author": "NDJ Film Official"
  },
  {
    "title": "Koka (High-BPM Dance Rework)",
    "artist": "Ruchika Jangid",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "9UaG7UL5yS4",
    "videoTitle": "COCO COLA (Official Video) Ruchika Jangid | Kay D | New Haryanvi Songs Haryanavi 2020 | New DJ Song",
    "author": "Nav Haryanvi"
  },
  {
    "title": "Balam Chhoto (Slap Bass Mix)",
    "artist": "Renuka Panwar",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "Osl_iMma8sI",
    "videoTitle": "Balam Chhoto So | Hit New Rajasthani DJ Dance Song | Seema Mishra | Veena Music",
    "author": "Veena Music"
  },
  {
    "title": "Chhori Tu Pataka (Peak-Time Edit)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "wcwOUyORkvk",
    "videoTitle": "Chatpati Haryanvi playlist for a self obsessed person ",
    "author": "Kiara♡"
  },
  {
    "title": "Jhumke (Club Tech Rework)",
    "artist": "Renuka Panwar",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "PRixiTErxuc",
    "videoTitle": "Nainital K Jhumke (Official Video) Renuka Panwar, Anjali Raghav | New Haryanvi Songs Haryanavi",
    "author": "Black Key Tunes Haryanvi"
  },
  {
    "title": "Tokk (Sub-Bass Extended Mix)",
    "artist": "KD",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "2pQSKqOE7Rs",
    "videoTitle": "Tokk | Ek Suthri Tu Top | Pranjal Dahiya, Kay D | Vishvajeet Choudhary | New Haryanvi Dj Songs 2020",
    "author": "Haridhum Music"
  },
  {
    "title": "Goli Wargi (Hardstyle Club Flip)",
    "artist": "MD KD",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "b6S5UcRJuVw",
    "videoTitle": "Shoot Out - MD KD DESIROCK | Haryanvi Songs Haryanavi 2020 | Meri Jaan Thi Pistol Bargi Re",
    "author": "Desi Rock"
  },
  {
    "title": "Nakhro (Club Tech Edit)",
    "artist": "Raj Mawar",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "wUF5qwrFDek",
    "videoTitle": "32 Bore (Official Video) Raj Mawar & Ashu Twinkle | Haryanvi Song Video 2025 | #haryanvisong",
    "author": "White Hill Dhaakad"
  },
  {
    "title": "Gulabo (Festival Bassline Mix)",
    "artist": "Ajay Hooda",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "47YvkG8OqzI",
    "videoTitle": "Latest Haryanvi Song - Gulabo - गुलाबो - Sonu Shrama, Ajay Hooda Sonika Singh Haryanvi Hits 2018",
    "author": "JAWAN MUSIC"
  },
  {
    "title": "Mote Mote Nain (Slap House Flip)",
    "artist": "Ruchika Jangid",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "s1xAfOoZiN4",
    "videoTitle": "Mote Mote Nain - Renuka Panwar | New Haryanvi Video Songs 2023 | T-SERIES HARYANVI",
    "author": "T-SERIES HARYANVI"
  },
  {
    "title": "Padosan (Club Bounce Edit)",
    "artist": "Surender Romio",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "cUqqasIG7bk",
    "videoTitle": "PADOSAN - Surender Romio | Mukesh Jaji | Aman Jaji ( Jal Ja Khun Padosan ka) New Haryanvi djSong2024",
    "author": "Hello Beats"
  },
  {
    "title": "Sharab (Extended Bass Mix)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "aTySxIPTRjk",
    "videoTitle": "Masoom Sharma Viral Songs Playlist  ▄︻デ══━一💥l Masoom Nonstop Songs 2026 | Sharp Shooter, Jailer",
    "author": "The Hood"
  },
  {
    "title": "Hookah (Hard Trap Club Edit)",
    "artist": "KD",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "jzKYAGNoEs4",
    "videoTitle": "Pooranviram Meri Maa Mera Rab | Maa Song | मेरे होंठ जो खुलै तो तेरा नाम आवै | KD DESIROCK AkkiAryan",
    "author": "Desi Rock"
  },
  {
    "title": "Yaar Ki Gaadi (Drill Bassline Rework)",
    "artist": "Sumit Goswami",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "O93irdmz134",
    "videoTitle": "सिलाई मशीन की सुई और सटल की सेटिंग करे । siali machine repair । sewing machine shuttle setting ।",
    "author": "Nusrat Sewing Machine "
  },
  {
    "title": "Bullet (Sub-Woofer Club Mix)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "na3f6y1Rn3c",
    "videoTitle": "Road pe chaale mini cooper , Ghode 3 , masoom Sharma new song",
    "author": "Music World"
  },
  {
    "title": "Scorpian (Aggressive Club Mix)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "s6ZR2Ve18H0",
    "videoTitle": "FEEL BADMASHA AALI (Official Video)-Masoom Sharma & Ashu | Sanket & Divyanka | New Haryanvi songs",
    "author": "Gaurika Records"
  },
  {
    "title": "Kaafila (Industrial Bass Edit)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "qoUlJpJ5Iw4",
    "videoTitle": "Masoom Sharma : KAFILA (Official Video) Aamin Barodi | Muskan Thakur | New Haryanvi Song 2026",
    "author": "Haryanvi Bol"
  },
  {
    "title": "Route (High-BPM Club Mix)",
    "artist": "KD",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "nYGXeiQJUb8",
    "videoTitle": "Best of Emraan Hashmi (Nonstop Remixes) - Priyanshu Nayak || A Compilation Of Alltime Superhit Songs",
    "author": "Priyanshu Nayak"
  },
  {
    "title": "Desi Look (Peak-Time Bounce)",
    "artist": "Raju Punjabi",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "O2t0BsiyeJE",
    "videoTitle": "'Desi Look' FULL Song with LYRICS | Sunny Leone | Kanika Kapoor | Ek Paheli Leela",
    "author": "T-Series"
  },
  {
    "title": "Suit Ki Kadhai (Tech House Flip)",
    "artist": "Ruchika Jangid",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "qRfCC0lmAdI",
    "videoTitle": "Kale Ke Papa - Ruchika Jangid ft. Pranjal Dahiya & Aman Jaji | Haryanvi Song | Real Music",
    "author": "Real Music"
  },
  {
    "title": "Dori (Slap-Bass Club Mix)",
    "artist": "Renuka Panwar",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "nibbDZ1yZ30",
    "videoTitle": "Renuka Panwar | 61-62 Challu (Official Video) | Sahil Sandhu | New Haryanvi Song 2024",
    "author": "Dhaakad Music"
  },
  {
    "title": "Hathiyar (Hard Trap Edit)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "QJJWMwinIFk",
    "videoTitle": "Baaghi - Masoom Sharma, Ashu Twinkle, Feat. Abhay Baisla, Maahie Sharma | New Haryanvi Video Song",
    "author": "T-SERIES HARYANVI"
  },
  {
    "title": "Parcha (Sub-Bass Peak-Time Flip)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "h5p3zqf1Wrc",
    "videoTitle": "Sidhu Moosewala X Karan Aujla - The Gangsters Remix (Part 2) | Sifar Safar X Wavy | Chill Vibes",
    "author": "Chill Vibes"
  },
  {
    "title": "Kar Gayi Chull (Haryanvi Peak-Time Mix)",
    "artist": "Badshah & Fazilpuria",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "NTHz9ephYTw",
    "videoTitle": "Kar Gayi Chull - Kapoor & Sons | Sidharth Malhotra, Alia Bhatt | Badshah | Amaal Mallik | Fazilpuria",
    "author": "Sony Music India"
  },
  {
    "title": "Chull 2.0 (Club Slap-House Rework)",
    "artist": "Fazilpuria",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "Bea019pOw5w",
    "videoTitle": "Chull – Badshah & Fazilpuria | Superhit Haryanvi Party Hit Song | Dance Anthem",
    "author": "Sony Music India"
  },
  {
    "title": "2 Many Girls (Extended Club Mix)",
    "artist": "Fazilpuria",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "PJGVDaSaQWQ",
    "videoTitle": "'2 Many Girls' FULL VIDEO SONG | Fazilpuria, Badshah | T-Series",
    "author": "T-Series"
  },
  {
    "title": "Haryana Roadways (High-BPM Electro Mix)",
    "artist": "Fazilpuria",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "bdAgJDQin24",
    "videoTitle": "DJ Tournament Ep 5. | DJ Bravo 🇬🇧 VS DJ Awol 🇮🇪 | By DJ Jesse",
    "author": "DJ Jesse"
  },
  {
    "title": "Billori Akh (Club Tech Flip)",
    "artist": "Fazilpuria",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "Wt5BB1ZtZsw",
    "videoTitle": "Billori Akh | Daljeet Kalsi | Sapna Chaudhary | Kaptan Laadi & RDK | Jagga Jiunda E",
    "author": "Music Sound"
  },
  {
    "title": "Jalebi Juda (Slap-House Rework)",
    "artist": "Renuka Panwar",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "RkNsHkLk1OU",
    "videoTitle": "Jalebi Juda (Lyrical Video) - New Haryanvi Dj Songs Haryanavi 2019 | Rakesh Tanwar ,Anjali Raghav",
    "author": "Voice of Heart Music"
  },
  {
    "title": "Kala Tikka (Extended Club Mix)",
    "artist": "Ruchika Jangid",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "dHiM_-INgZM",
    "videoTitle": "Kaala Tikka Laya Kar",
    "author": "Ruchika Jangid - Topic"
  },
  {
    "title": "Lal Dupatta (Tech-House Club Edit)",
    "artist": "Surender Romio",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "l1wmMlCWd8s",
    "videoTitle": "DJ OM ROCK MOOD GARAM NEW HARYANVI SONG REMIX DJ PUNCH VIBRATION MIX BY DJ OM ROCK 2022",
    "author": "EDM KING DJ OM ROCK"
  },
  {
    "title": "Payal Chham Chham (Festival Bounce Mix)",
    "artist": "Vishvajeet Choudhary",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "f6MIYAf1vfY",
    "videoTitle": "हरियाणे की छोरी -Latest Haryanvi Cultural Song and Dance |Amit Saini | Somvir Kathurwal |Shalu Kirar",
    "author": "Shalu Kirar"
  },
  {
    "title": "Dil Ki Dhadkan (Sub-Bass Club Edit)",
    "artist": "Diler Kharkiya",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "bx9jNdoqPTo",
    "videoTitle": "Tere Bargi - Latest Haryanvi Songs Haryanvi - Diler Kharkiya Ft Anjali Arora - Sadgi Teri Ne Dil",
    "author": "SagaHits"
  },
  {
    "title": "Sapna Ka Dance (Electro Rave Edit)",
    "artist": "Sapna Choudhary",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "TtobQeGjTpM",
    "videoTitle": "Sapna Dance - Teri Aakhya Ka Kajal I Sapna Chaudhary I Live Dance Performance 2026 I Tashan Haryanvi",
    "author": "Tashan Haryanvi"
  },
  {
    "title": "Engine Ki Seeti (Haryanvi Bass Mix)",
    "artist": "Traditional / DJ Edit",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "YWhbDQeWfNk",
    "videoTitle": "OFFICIAL: 'Engine Ki Seeti' FULL VIDEO Song | Khoobsurat | Sonam Kapoor, Fawad Khan",
    "author": "T-Series"
  },
  {
    "title": "Chunni Mein (Slap-Bass Rework)",
    "artist": "Ajay Hooda",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "WTOmEQNCwCw",
    "videoTitle": "Dayan (Official Video) Ajay Hooda | Peehu Yadav | New Haryanvi Song | Ajay Hooda New Song | Sonotek",
    "author": "Sonotek Music"
  },
  {
    "title": "Gaam Ki Haveli (Extended Club Edit)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "NQ6PNyZbs88",
    "videoTitle": "Lofar",
    "author": "Masoom Sharma - Topic"
  },
  {
    "title": "Thar (Heavy Bassline Mix)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "aFSGHvDU4fI",
    "videoTitle": "Badnam Gabru [BASS BOOSTED] Remix || Masoom Sharma|| Latest Bass Boosted Haryanvi song 2021",
    "author": "DEEP BOOSTED BASS (DBB)"
  },
  {
    "title": "Fortuner (Drill Drop Club Mix)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "ZVSBQFnHVo0",
    "videoTitle": "Rubicon Drill : Laddi Chahal (BASS BOOSTED) | Parmish Verma | New Punjabi Songs 2023 [4K]",
    "author": "Next Level Bass"
  },
  {
    "title": "32 Bore (Hard Trap Rework)",
    "artist": "Sumit Goswami",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "lCwMmH-GIn8",
    "videoTitle": "Dj Vibration Sound check || खतरनाक DJ साउंड चेक || JBL Sound Check || full bass check || Top check |",
    "author": "Global Deep Drillers"
  },
  {
    "title": "Raflaan (Peak-Time Bass Mix)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "NEonPmF-cVo",
    "videoTitle": "ZAMANAT II OFFICIAL VIDEO II MASOOM SHARMA II ASHU TWINKLE II MANJEET M...",
    "author": "Rohit Takdaina001"
  },
  {
    "title": "Badmash (Industrial Club Edit)",
    "artist": "KD",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "Mk132xeCnMQ",
    "videoTitle": "Badmash Bolu Su (Official Video) || KD DESI ROCK || Rap Song || New Haryanvi Song 2021 | Mor Music",
    "author": "Mor Haryanvi"
  },
  {
    "title": "Yaaran Da Tashan (High-BPM Edit)",
    "artist": "MD KD",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "Bd88W08T2R0",
    "videoTitle": "Tashan Haryanvi By Md KD DESIROCK & Akki Aryan | Haryanvi Songs Haryanavi 2021 | Desi Rock",
    "author": "Desi Rock"
  },
  {
    "title": "Chhori Bindass (Club Bounce Mix)",
    "artist": "Sapna Choudhary",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "JfqEFThW-vQ",
    "videoTitle": "Chhori Bindass | Sapna Choudhary | Aakash Akki, AK Jatti | New Haryanvi Song | Sonotek",
    "author": "Sonotek"
  },
  {
    "title": "Rotiyaan (Tech House Club Edit)",
    "artist": "Ajay Hooda",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "C15_fu8sTrQ",
    "videoTitle": "#ETAWHA.  MAHIYA I CUTE LOVE STORY I PRASHANT SHARMA I VARSHA RAJPOOT I BY MIX HOME TUBE",
    "author": "Game tech"
  },
  {
    "title": "Doodh Ki Katori (Slap-House Mix)",
    "artist": "Ruchika Jangid",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "p7OhYgEwUWo",
    "videoTitle": "Kothe Upar Kothri Mai Uspar Relchala Dungu Hindi Dj Song Dj Remix Song Dj Rohit Kumar No.1 New Remix",
    "author": "Dj Rohit Kumar No.1"
  },
  {
    "title": "Tik Tok (Festival Bassline Edit)",
    "artist": "Surender Romio",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "fUxS-dKtskk",
    "videoTitle": "Desi Nakhre Surender Romio | Vandna Jangir (Official Video) Ft Anjali Raghav 👍 2022",
    "author": "TPZ Haryanvi"
  },
  {
    "title": "Gaam Ka Chhora (Extended Peak-Time Mix)",
    "artist": "Raju Punjabi",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "R1VxjQ16HrQ",
    "videoTitle": "RAJU PUNJABI | GAAM KA DESI CHHORA | FULL VIDEO | ARJUN | RICHA HOODA | VR BROS | NEW SONG 2018",
    "author": "VR BROS ENTERTAINMENT"
  },
  {
    "title": "Mitti Ka Khilona (Sub-Bass Rework)",
    "artist": "Raju Punjabi",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "5GrY2vcoCxY",
    "videoTitle": "Ek khadi se kali thar | Raju Punjabi | New Haryanvi Songs 2024 Song : slow and reversed",
    "author": "Rahul yadav"
  },
  {
    "title": "Haveli Pe Aa Jana (Hard Trap Club Edit)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "1TlHM1lR09o",
    "videoTitle": "Mahila Mittar (FULL SONG) - Masoom Sharma, Khushi Baliyan, Kulbir, Komal C | New Haryanvi Songs 2025",
    "author": "DAKS Music"
  },
  {
    "title": "Jija Tu Kala (High-Energy Dance Mix)",
    "artist": "Renuka Panwar",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "vJop8AsLYdA",
    "videoTitle": "Jija Tu Kaala Main Gori Ghani (Remix) | Dance Mix |  Haryanvi DJ Remix Song 2026",
    "author": "Show-Keen Productions"
  },
  {
    "title": "Bhabhi Aali (Club Tech Rework)",
    "artist": "Surender Romio",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "DkwZpQYflZk",
    "videoTitle": "Over Age | Surender Romio & Anjali99 | Ft. Nidhi Sharma | Official Music Video | #haryanvisong",
    "author": "Mahra Tora"
  },
  {
    "title": "Sarpanch (Sub-Woofer Club Mix)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "TZnAkDTUE0Y",
    "videoTitle": "Sarpanch (Official Video) Masoom Sharma | Shiva Choudhary | Harry Lather | New Haryanvi Song 2025",
    "author": "Masoom Sharma"
  },
  {
    "title": "Thekedar (Slap-Bass Extended Mix)",
    "artist": "Ajay Hooda",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "zSaddAr8cA0",
    "videoTitle": "Thekedara Ka Byah | Masoom Sharma new song  | Shivani Yadav | New Haryanvi Songs Haryanavi 2024",
    "author": "Purple Music"
  },
  {
    "title": "Gaddi Fortuner (Peak-Time Bounce)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "eSUPbqtiOrE",
    "videoTitle": "ARBI GHODE (Official Video) - Masoom Sharma | Jaivir Rathee | New Haryanvi Songs 2024 | Bounce Music",
    "author": "Bounce Music"
  },
  {
    "title": "Jatt Brand (Club Bassline Rework)",
    "artist": "KD",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "iOv4yzcgbRU",
    "videoTitle": "BEAT PE BOTY DJ REWORK IN DILIP JAYCLEYA",
    "author": "THE_DILIP_OFFICIAL_ SONI_"
  },
  {
    "title": "Shehar Ki Chhori (Tech-House Drop)",
    "artist": "MD KD",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "Tnfs0MZsBBE",
    "videoTitle": "Ram Ram | MC SQUARE | Hustle 2.0",
    "author": "KaanPhod Music"
  },
  {
    "title": "Akhada (Hardstyle Festival Mix)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "itENU-5XnvQ",
    "videoTitle": "🎶 Defqon.1 Countdown 2018 | Best Hardstyle Mix ♦",
    "author": "Hardstyleofchoice"
  },
  {
    "title": "Desi Gym (High-BPM Workout Club Edit)",
    "artist": "KD",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "nCh2oy6xWho",
    "videoTitle": "Bollywood Workout Mashup 2026 | Non Stop Hindi Gym Songs 2026 💪🔥",
    "author": "Desi DJ Adda"
  },
  {
    "title": "Fauji Ki Bandook (Sub-Bass Club Edit)",
    "artist": "Diler Kharkiya",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "ksHq08S_Un8",
    "videoTitle": "Fojiyan Ke Tambu Me | फोजिया के तम्बू में | MD Desi Rockstar & KD DESIROCK | Haryanvi Shiv Bhajan",
    "author": "Sonotek Bhakti"
  },
  {
    "title": "Daaru Ki Botal (Extended Club Mix)",
    "artist": "Raju Punjabi",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "bzW9fmwcmG4",
    "videoTitle": "Daru Badnaam | Kamal Kahlon & Param Singh | Official Video | Pratik Studio | Latest Punjabi Songs",
    "author": "VIP Records"
  },
  {
    "title": "Peg Patiala (Haryanvi Bassline Rework)",
    "artist": "Ajay Hooda",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "QjD_JPz5Ops",
    "videoTitle": "OLHA MEIN PATOLA AJAY HOODA OLD SUPERHIT HARYANVI SONG REMIX DJ DEEPAK PRODUCTION #remix2023",
    "author": "DEEPAK PRODUCTION🤟"
  },
  {
    "title": "Chora Jaat Ka (Aggressive Trap Mix)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "4_0r_e-AnCo",
    "videoTitle": "Chora Jaat Ka : MASOOM SHARMA, SONIKA SINGH | New Haryanvi Songs Haryanavi 2020 | Sonotek",
    "author": "Haryanvi Music Club"
  },
  {
    "title": "Gujjar Ka Kharcha (Heavy Bass Drop)",
    "artist": "Traditional / DJ Edit",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "X5lTbzKYeq4",
    "videoTitle": "Gujjar Jaati Veero Ki & Gujjar Ke Charche MASHUP Official Club (Remix) Dj Ajay Aurangabad",
    "author": "AJAY AURANGABAD"
  },
  {
    "title": "Rajputana Swag (Peak-Time Festival Mix)",
    "artist": "DJ Edit",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "0xM2-Bj1-LU",
    "videoTitle": "Rajput Sarkar 3 (राजपूत सरकार 3)| @officialvikrantthakur  , @officialrahulthakur , Keddy Katladi",
    "author": "V R Official"
  },
  {
    "title": "Yadav Brand (Hard Bounce Club Mix)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "BU7tDrJUO38",
    "videoTitle": "Yadav Brand song bass boosted 🎧",
    "author": "music lab bass boosted"
  },
  {
    "title": "Jaat Land (Industrial Bass Rework)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "szUSkYTXq7A",
    "videoTitle": "Ramayan Ka Saar (Full Song) Masoom Sharma | Amar Karnawal | Pinna Music | New Haryanvi Song 2025",
    "author": "Masoom Sharma"
  },
  {
    "title": "Randa Squad (High-Energy Dance Edit)",
    "artist": "Diler Kharkiya",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "Jx3_hN4b9UY",
    "videoTitle": "Aari Thi Marjaani Bandook Banke : Mukesh Foji | Ajay Hooda | Anu Kadyan | Haryanvi Song",
    "author": "D2K Beats"
  },
  {
    "title": "Bachelor Party (Tech-House Flip)",
    "artist": "Ajay Hooda",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "AgiRLkaR3FM",
    "videoTitle": "Bachelor party - girl dancing on solid body song -",
    "author": "Trending Rajasthan"
  },
  {
    "title": "Sharaabi Yaar (Extended Club Bass)",
    "artist": "Raju Punjabi",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "hzTg4zPBtDU",
    "videoTitle": "\"3 Peg Sharry Mann\" (Full Video) | Mista Baaz | Parmish Verma | Ravi Raj | Latest Punjabi Songs 2016",
    "author": "T-Series Apna Punjab"
  },
  {
    "title": "Gaam Ka Pradhan (Sub-Bass Club Mix)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "fKLYe6bnXFQ",
    "videoTitle": "DJ Pe Lath Bajwade Gi",
    "author": "Masoom Sharma - Topic"
  },
  {
    "title": "Chhori Patola (Slap-House Edit)",
    "artist": "Fazilpuria",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "_WnXZbvqpgk",
    "videoTitle": "Olha Mein Patola | Slowed + Reverb | Haryanvi Song | Ajay Hooda | Masoom Sharma | Hey Shivam ",
    "author": "Hey Shivam"
  },
  {
    "title": "London Ka Tour (Club Bounce Mix)",
    "artist": "Renuka Panwar",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "zk3TC7O7eO8",
    "videoTitle": "DJ Dance Video | 52 Gaj Ka Daman | Renuka Panwar & Kay D",
    "author": "Renuka Panwar"
  },
  {
    "title": "Haryanvi Mashup 1 (Peak-Time Club Mix)",
    "artist": "Laddi Gill & Gurmeet Bhadana",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "rEvArAKQPkw",
    "videoTitle": "Halka Dupatta Tera Muh Dikhe | THM 8 - Gurmeet Bhadana, Lokesh Gurjar, Desi King, Totaram, Baba",
    "author": "I am Desi World"
  },
  {
    "title": "Haryanvi Mashup 2 (Extended Bassline Rework)",
    "artist": "Totaram Sondhiya",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "b44T0FPt6mU",
    "videoTitle": "RAJASTHANI FOLK ANTHEM 2 FULL SONG | SUMSA SUPARI | RASHMI N. | MR. RADHEY | NEW FOLK MASHUP 2022",
    "author": "Sumsa Supari"
  },
  {
    "title": "Haryanvi Mashup 3 (Big-Room Festival Edit)",
    "artist": "Laddi Gill",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "FtXcRgYvpd0",
    "videoTitle": "The Haryanvi Mashup 3 | Lokesh Gurjar | Gurmeet Bhadana | Desi King | Baba Bhairupia | Akki Kalyan",
    "author": "I am Desi World"
  },
  {
    "title": "Haryanvi Mashup 4 (High-Energy Club Flip)",
    "artist": "Totaram Sondhiya",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "tvRRxEVBKqk",
    "videoTitle": "New Haryanvi Mashup 4 - Official Video | Akash Dixit | Masoom sharma | kanchan Nagar | Mannu Pahari",
    "author": "Prime Time Originals"
  },
  {
    "title": "Haryanvi Mashup 5 (Hard Trap & Slap Mix)",
    "artist": "Totaram Sondhiya",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "alt1I8HfZus",
    "videoTitle": "THM 5, Mat Rakhe Dhunge Pe - Lokesh Gurjar | Gurmeet Bhadana | Desi King | Baba | Totaram | Priyanka",
    "author": "I am Desi World"
  },
  {
    "title": "Haryanvi Mashup 6 (Industrial Bass Edit)",
    "artist": "Laddi Gill",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "cE9HqlsjCd8",
    "videoTitle": "The Haryanvi Mashup 12, Gurmeet Bhadana, Lokesh Gurjar, Desi King, Totaram, Priyanka N,",
    "author": "Desi Raag"
  },
  {
    "title": "Haryanvi Mashup 7 (Tech-House Extended Mix)",
    "artist": "Gurmeet Bhadana",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "FNQghjEz-FM",
    "videoTitle": "Dale",
    "author": "MASF - Topic"
  },
  {
    "title": "Haryanvi Mashup 8 (Sub-Woofer Peak Edit)",
    "artist": "Totaram Sondhiya",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "v-85MDmn1bw",
    "videoTitle": "The Haryanvi Mashup 8 Lyrics | Gurmeet Bhadana | Lokesh Gurjar | Desi King | THM8 | Baba Bhairupia",
    "author": "Nomadic Gaurav"
  },
  {
    "title": "Haryanvi Mashup 9 (Festival Bounce Mix)",
    "artist": "Laddi Gill",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "8LWfVLQYrKw",
    "videoTitle": "The Haryanvi Mashup 10",
    "author": "Totaram Sondhiya - Topic"
  },
  {
    "title": "Haryanvi Mashup 10 (Hardstyle Club Rework)",
    "artist": "Totaram Sondhiya",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "ZjRS9_LiyBc",
    "videoTitle": "The Haryanvi Mashup 10, Gurmeet Bhadana, Lokesh Gurjar, Desi King, Totaram Sondhiya, Priyanka Nagar",
    "author": "Desi Raag"
  },
  {
    "title": "Nonstop Haryanvi DJ War Edit (Part 1)",
    "artist": "Club Mix",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "nC4bDgukWC8",
    "videoTitle": "World War (Official Video) - Saaaj Tomar ft. Ira Chauhan | Haryanvi Song | Real Music",
    "author": "Real Music"
  },
  {
    "title": "Nonstop Haryanvi DJ War Edit (Part 2)",
    "artist": "Bassline Mix",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "A4OyNqxdnAw",
    "videoTitle": "Dj Song💙 || Top Dj | Hard Bass ❤️‍🔥 | JBL Dj Remix | Old Hindi Dj Song 🥀| | Dj Remix Song 2025",
    "author": "JBL RemiX Beat "
  },
  {
    "title": "Balamji (High-BPM Dance Rework)",
    "artist": "Renuka Panwar",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "SEqQp7bJLUQ",
    "videoTitle": "Balam Ji Tu Satrong Renuka Panwar  Sumer Rajput  Divya jangir New Haryanvi Song 2022",
    "author": "NDJ Digital"
  },
  {
    "title": "Chunni Sitare Wali (Slap-House Club Mix)",
    "artist": "Ruchika Jangid",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "e9D9nGSDbKY",
    "videoTitle": "Chunri Sitare Wali (Official Video) New Haryanvi Song / 💞 Mehboob Khan_Priya Sharma /  Its Mk Studio",
    "author": "Its Mk Studio"
  },
  {
    "title": "Ghungroo Tut Jaega (Sub-Bass Edit)",
    "artist": "Sapna Choudhary",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "1XjSl2dc9-Y",
    "videoTitle": "SAPNA CHOUDHARY | Ghungroo Toot Jayega [ Official Remix Song ]  | Dj Dks Deepesh X Manoj",
    "author": "☞𝐃𝐣 𝐃𝐤𝐬 𝐎𝐟 𝐃𝐞𝐥𝐡𝐢☜"
  },
  {
    "title": "Badli Badli Laage (Peak-Time Electro Mix)",
    "artist": "Sapna Choudhary",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "gi0nqupQ94E",
    "videoTitle": "Badli Badli Laage | Sapna Chaudhary, Vicky Kajla | Ruchika Jangid, New Haryanvi Songs Haryanavi 2020",
    "author": "Sonotek"
  },
  {
    "title": "English Medium (Club Bounce Edit)",
    "artist": "Sapna Choudhary",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "yxWhD4a21sQ",
    "videoTitle": "सपना चौधरी और मासूम शर्मा ने स्टेज पर मचाया धमाल I English Medium I Dance Performance 2026 I Sonotek",
    "author": "Sonotek Ragni"
  },
  {
    "title": "Chetak 2.0 (High-Energy Bassline Rework)",
    "artist": "Raj Mawar",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "xDwTiMQ-sJU",
    "videoTitle": "Chetak 2.0",
    "author": "Raj Mawar - Topic"
  },
  {
    "title": "Raasleela (Tech-House Festival Flip)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "5LhwcQdHhbQ",
    "videoTitle": "राधारानी जनम के बाद Banke Bihari मंदिर मे रास लीला | Radha Krishna Milan Leela",
    "author": "Madhur Rasleela"
  },
  {
    "title": "Kaalja (Slap-Bass Club Mix)",
    "artist": "Diler Kharkiya",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "sZrKbyVKqK8",
    "videoTitle": "Kaalja Dre New Haryanvi Video Gd Kaur,Feat Raj Mawer,Yashpal Bajana,Sonika Singh Haryanvi 2019",
    "author": "T-SERIES HARYANVI"
  },
  {
    "title": "Aam Jaat (Sub-Woofer Club Edit)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "mXCERdDK56k",
    "videoTitle": "BYAH KE LAVANGE ( Feat. Sachin Jaat & Swarnima Chuhnx ) Masoom Sharma | Ashu Twinkle | HR MUSIC",
    "author": "HR MUSIC"
  },
  {
    "title": "Haryana Hood (Drill Trap Mix)",
    "artist": "KD",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "7ygHBSh4LTw",
    "videoTitle": "Haryana Hood x Unstoppable - Irshad Khan x Dhanda Nyoliwala | DRILL REMIX",
    "author": "Ether"
  },
  {
    "title": "Yaari Ka Rutba (Hard Trap Rework)",
    "artist": "Sumit Goswami",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "bPTdNRgEtgg",
    "videoTitle": "Labh Heera - Rutba Yaari Da (Official Video) Shavy Vik | New Punjabi Song 2024 | New Punjabi Songs",
    "author": "I Studios"
  },
  {
    "title": "Don (Aggressive Bassline Mix)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "2Pta29pxTbk",
    "videoTitle": "Madam Ji (Official Video) Masoom Sharma | Amar Karnawal, Pinna Music | New Haryanvi Song 2025",
    "author": "Masoom Sharma"
  },
  {
    "title": "Baap Baap Hota Hai (Industrial Rave Edit)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "YRxzw3bSkvE",
    "videoTitle": "MASOOM SHARMA : BAAP (OFFICIAL VIDEO) | Amar Karnawal I Manjeet Mor I New Haryanvi Song 2026",
    "author": "Haryanvi Bol"
  },
  {
    "title": "Gadi Number (Slap-House Club Mix)",
    "artist": "Raju Punjabi",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "ou-litQ9hWQ",
    "videoTitle": "SOLID BODY || Ajay Hooda & Anjali Raghav || Raju Punjabi & Sheenam || New song of 2015 || Mor Music",
    "author": "Mor Haryanvi"
  },
  {
    "title": "Red Suit (Tech-House Extended Mix)",
    "artist": "Surender Romio",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "tYHJwczMgHo",
    "videoTitle": "Maregi | Khushi Baliyan | Raj Mawar & Ashu Twinkle | Haryanvi Song 2024 | Haryanvi Song 2024 |",
    "author": "Crystal Music Haryanvi "
  },
  {
    "title": "Ghoonghat Ki Oot Mein (Peak-Time Electro Drop)",
    "artist": "Ruchika Jangid",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "Ye43FbcVZQ0",
    "videoTitle": "Ghunghat Bain : Ajay Hooda | Ruchika Jangid | Surender Romio | Haryanvi Song",
    "author": "Gem Tunes Haryanvi"
  },
  {
    "title": "Bhabhi Ri Bhabhi (Club Bounce Edit)",
    "artist": "Ajay Hooda",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "OGIvZMVRqbM",
    "videoTitle": "Age Gap | Ajay Hooda | Sana Sultan | Surender Romio | Ruchika Jangid | New Haryanvi Song 2023",
    "author": "DAKS Music"
  },
  {
    "title": "Khap Panchayat (Sub-Bass Hard Mix)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "cTHI_SVtnTo",
    "videoTitle": "70 SARPANCH MASOOM SHARMA REMIX | AMAR K | SARKAR GHAR KI ME DJ REMIX SONG 2024 | DJ SAHIL BADSIKRI",
    "author": "DJ SAHIL BADSIKRI"
  },
  {
    "title": "Police Ki Gaddi (Trap Bass Edit)",
    "artist": "KD",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "GQCLrtd5vrc",
    "videoTitle": "Police (Full Song) | DJ Flow Ft. Afsana Khan, Shree Brar | Punjabi Song 2020 | Ishtar Punjabi",
    "author": "Ishtar Punjabi"
  },
  {
    "title": "Kacheri (Hardstyle Club Mix)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "M2eHFVXP4DM",
    "videoTitle": "Kashyap Kom Dilero Ki - Saurabh Kashyap - New Haryanvi Song - Hard Bass Remix By Dj Ganesh Kashyap",
    "author": "Dj Ganesh Kashyap"
  },
  {
    "title": "Mukadma (Sub-Woofer Bassline)",
    "artist": "Sumit Goswami",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "ZVk49KmJ-SE",
    "videoTitle": "60 MUKADME : MASOOM SHARMA | Manjeet Mor, Shivani Yadav, Shiva Chaudhary | New Haryanvi Song 2024",
    "author": "Tuffan Music"
  },
  {
    "title": "Zaildar (High-BPM Electro Mix)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "aOHOAMAYGIU",
    "videoTitle": "Chambal K Dakku | Masoom Sharma | Swara Verma | Rahul Muana | Ruba Khan | New Haryanvi Song 2025",
    "author": "Bajewala Records Haryanvi"
  },
  {
    "title": "Landlord (Club Tech Flip)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "2ExVSgd_Kuk",
    "videoTitle": "Bandekhani",
    "author": "Masoom Sharma - Topic"
  },
  {
    "title": "Pehalwan (Workout Bassline Mix)",
    "artist": "KD",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "W8llfTFuOto",
    "videoTitle": "KD Jadhav ने कैसे जीता था 1952 Helsinki Olympics में Wrestling Bronze Medal? Vijeta Episode-1",
    "author": "The Lallantop"
  },
  {
    "title": "Dangal (Heavy Dhol Bass Drop)",
    "artist": "Traditional / DJ Edit",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "EDjWTVHrMgQ",
    "videoTitle": "Ganpati Mashup 2023 | DJ Arjav | Nonstop Ganpati DJ Songs | New Visarjan Mashup | Ganesha Festival",
    "author": "djarjav"
  },
  {
    "title": "Akhada Bass (Industrial Rave Rework)",
    "artist": "Masoom Sharma",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "DpDaIH5Znss",
    "videoTitle": "Rangdaar Ke Akhada Aawata Dj Humming Bass | Pramod Premi | Akhada Mela DJ Song 2025 | Dj Hariom 2025",
    "author": "Dj Hariom Basantpur"
  },
  {
    "title": "Gaam Ka Tashan (Extended Club Edit)",
    "artist": "Raju Punjabi",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "1LsjOGhVBCA",
    "videoTitle": "म्हारे गाम का पानी # Mahre Gaam Ka Pani #New Haryanvi Songs # Meeta Baroda # Raju Punjabi #NDJ Music",
    "author": "NDJ MUSIC"
  },
  {
    "title": "Chhori Tu Haryana Ki (Slap-House Rework)",
    "artist": "Fazilpuria",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "GI30zqFk0sU",
    "videoTitle": "LALA LORI : Fazilpuria ft. Deepti | Afsana Khan | Jaani | SukhE | Haryanvi Songs Haryanavi 2021",
    "author": "White Hill Dhaakad"
  },
  {
    "title": "Desi Swagger (Club Bounce Mix)",
    "artist": "MD KD",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "8_aYuYJyVFs",
    "videoTitle": "Vele x SOTY x Ritzzze x Desi Swagger Remix",
    "author": "Ritzzze"
  },
  {
    "title": "Royal Jaat (Festival Big-Room Mix)",
    "artist": "DJ Edit",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "xpU3hYijieo",
    "videoTitle": "Jaat | Royal Jaat | Siddh B | Rohit Malik, Jonu Chariya, Mad Deep | Haryanvi Video Song | Sonotek",
    "author": "Sonotek"
  },
  {
    "title": "Haryanvi Swag Anthem (Peak-Time Edit)",
    "artist": "KD",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "AEgCI5f_iBc",
    "videoTitle": "On The Way (Official Video) | Khasa Aala Chahar Ft. KD DESIROCK | New Haryanvi Songs Haryanavi 2022",
    "author": "Nav Haryanvi"
  },
  {
    "title": "Bass Rani Haryanvi Rework (Trap Flip)",
    "artist": "Nucleya Style DJ Edit",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "EXTdj7rons4",
    "videoTitle": "Soundcheck 🔥 Sidhu Moosewala Song 295 Dj Remix | DJ Sound Check JBL Bass Mix | Dj Song | Bass Song",
    "author": "DJ SHYAM GURJAR"
  },
  {
    "title": "Baaraat Dance (High-Energy Dhol Mix)",
    "artist": "Ajay Hooda",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "7I3uy9yESiQ",
    "videoTitle": "Barati - Ajay Hooda | Pooja Hooda | Pardeep , Peehu | New Haryanvi Song 2025 | T-Series Haryanvi",
    "author": "T-SERIES HARYANVI"
  },
  {
    "title": "DJ Wale Babu Haryanvi Flip (Tech House Mix)",
    "artist": "Club Edit",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "cDw--CTpRgc",
    "videoTitle": "DJ REMIX EDM MIX FLP PROJECT | Tapori Circuit Mix | FL STUDIO SONG 2025  FLP",
    "author": "Fl Bazer"
  },
  {
    "title": "Khet Khaliyan (Sub-Bass Extended Rework)",
    "artist": "Raju Punjabi",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "G7KG7bgK6Bg",
    "videoTitle": "Baat Gori Ki # Joban Rulta Hande # Anjali Raghav_Raju Punjabi_Sanju Khewriya # Latest Haryanvi Song",
    "author": "NDJ MUSIC"
  },
  {
    "title": "Haryanvi Drill Nonstop Set (Vol. 1)",
    "artist": "Underground Mix",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "CQW4A3cV2Oo",
    "videoTitle": "Masoom Sharma X Dhanda Nyoliwala Mashup - Deejay Rax | Best of Haryanvi | Haryanvi Dance Mashup",
    "author": "Deejay Rax"
  },
  {
    "title": "Peak-Time Desi Techno Edit (Vol. 2)",
    "artist": "Hardstyle Rework",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "rdykdUqPXYc",
    "videoTitle": "Ricchi E Poveri - Sara Perche Ti Amo (MaTiAsS Hardstyle Remix)",
    "author": "MaTiAsS"
  },
  {
    "title": "Haryanvi Bass War Finale (130",
    "artist": "140 BPM Mainstage Drop) – Festival Edit",
    "film": "Haryanvi",
    "isRemix": true,
    "isHaryanvi": true,
    "youtubeId": "jMjmnSraNe8",
    "videoTitle": "BERETTA (Official Video) Amanraj Gill, Jaya Rohilla ft. Shivani Yadav | New Haryanvi Song 2025",
    "author": "Nav Haryanvi"
  }
];

// Helper to assign sequential IDs and strict isolated category tags
let nextTrackId = 1;

function tagCategory(list: any[], flags: Partial<Track>): Track[] {
  return list.map((item) => ({
    id: nextTrackId++,
    title: item.title,
    artist: item.artist || "Unknown Artist",
    film: item.film || "Trance Sangeet",
    youtubeId: item.youtubeId,
    audioUrl: item.audioUrl,
    startSeconds: item.startSeconds,
    isSpatial: flags.isSpatial ?? false,
    isGlobal: flags.isGlobal ?? false,
    isGoa: flags.isGoa ?? false,
    isRemix: flags.isRemix ?? false,
    isKTrance: flags.isKTrance ?? false,
    isIndoHouse: flags.isIndoHouse ?? false,
    isSufi: flags.isSufi ?? false,
    isAfro: flags.isAfro ?? false,
    isX: flags.isX ?? false,
    isClub: flags.isClub ?? false,
    isHaryanvi: flags.isHaryanvi ?? false,
    isHustle: flags.isHustle ?? false,
    hustleSeason: item.hustleSeason,
    hustleNum: item.hustleNum,
  }));
}

// Convert unique track entries to rawTracks array with strictly isolated categories and unique IDs
const rawTracks: Track[] = [
  ...tagCategory([...list1, ...list2, ...list3, ...list4], { isSpatial: true }),
  ...tagCategory(listGlobal, { isGlobal: true }),
  ...tagCategory(listGoa, { isGoa: true }),
  ...tagCategory(listKTrance, { isKTrance: true }),
  ...tagCategory(listRemix, { isRemix: true }),
  ...tagCategory(listIndoHouse, { isRemix: true, isIndoHouse: true }),
  ...tagCategory(listAfro, { isRemix: true, isAfro: true }),
  ...tagCategory(listSufi, { isRemix: true, isSufi: true }),
  ...tagCategory(listX, { isRemix: true, isX: true }),
  ...tagCategory(listHustle, { isRemix: true, isHustle: true }),
  ...tagCategory(listClub, { isRemix: true, isClub: true }),
  ...tagCategory(listHaryanvi, { isRemix: true, isHaryanvi: true }),
];

// Stable deterministic pseudo-random number generator to prevent hydration errors
function seedableRandom(seed: number) {
  let s = seed;
  return function() {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

// Export the sequential deterministic tracks
export const tracks: Track[] = rawTracks;

export function getRandomDuration(): number {
  return Math.floor(Math.random() * 120) + 180;
}
