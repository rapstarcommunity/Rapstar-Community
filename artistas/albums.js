const albumsData = [
  {
    title: "Red Flags",
    year: "Year 03",
    image: "https://i.imgur.com/43L8OKY.png",
    label: "℗ © Starlight Studios",
    artist: "Blair",
    featuring: []
  },
  {
    title: "Voz do Brasil",
    year: "Year 03",
    image: "https://i.imgur.com/tvOI6s2.jpeg",
    link: "https://discord.com/channels/1279249850185154704/1279482834540826696/1560136549625241721",
    label: "℗ © Rocktopia",
    artist: "Nielly",
    featuring: []
  },
  {
    title: "LATINAJE",
    year: "Year 03",
    image: "https://i.imgur.com/MIhfVRk.jpeg",
    link: "https://discord.com/channels/1279249850185154704/1279484081792487541/1560480051735167092",
    label: "℗ © Rocktopia",
    artist: "Emília Ramirez",
    featuring: []
  },
  {
    title: "Fantasmagoric Feelings",
    year: "-",
    image: "https://i.imgur.com/5Xgn5gI.jpeg",
    label: "℗ © Joint Nation",
    artist: "Liza",
    featuring: []
  },
  {
    title: "Everloved",
    year: "-",
    image: "https://i.imgur.com/j7fLWHV.jpeg",
    label: "℗ © Joint Nation",
    artist: "Liza",
    featuring: []
  },
  {
    title: "Eletrogasm",
    year: "Year 03",
    image: "https://i.imgur.com/nTdddCx.jpeg",
    link: "https://discord.com/channels/1279249850185154704/1279482057105342567/1557209440548298783",
    label: "℗ © Starlight Studios",
    artist: "Aiddan King",
    featuring: []
  },
  {
    title: "SUMMER REMAINS",
    year: "Year 03",
    image: "https://i.imgur.com/CX87G23.png",
    label: "℗ © Rocktopia",
    artist: "Nate",
    featuring: []
  },
  {
    title: "HONEY",
    year: "Year 03",
    image: "https://i.imgur.com/Rld7gSG.png",
    label: "℗ © Rocktopia",
    artist: "Bianca",
    featuring: []
  },
  {
    title: "Alone In Days Like This",
    year: "-",
    image: "https://i.imgur.com/EIKnQDt.jpeg",
    label: "℗ © Rocktopia",
    artist: "Bianca",
    featuring: []
  },
  {
    title: "When I Open My Eyes",
    year: "-",
    image: "https://i.imgur.com/9u0GTOY.jpeg",
    label: "℗ © Rocktopia",
    artist: "Bianca",
    featuring: []
  },
  {
    title: "Don't Tell Your Friends",
    year: "-",
    image: "https://i.imgur.com/0J7ikHf.png",
    label: "℗ © Rocktopia",
    artist: "Bianca",
    featuring: []
  },
  {
    title: "Dandelions",
    year: "Year 02",
    image: "https://i.imgur.com/Fp8M9ZI.png",
    label: "℗ © Starlight Studios",
    artist: "Riley",
    featuring: []
  },
  {
    title: "Flourish",
    year: "Year 02",
    image: "https://i.imgur.com/DwbD3KP.png",
    label: "℗ © Empire Music Group",
    artist: "Matteo",
    featuring: []
  },
  {
    title: "Salute (Deluxe)",
    year: "Year 02",
    image: "https://i.imgur.com/cKHfsvQ.png",
    label: "℗ © Rocktopia",
    artist: "Mason",
    featuring: []
  },
  {
    title: "Salute",
    year: "Year 02",
    image: "https://i.imgur.com/4lwZZtP.png",
    label: "℗ © Rocktopia",
    artist: "Mason",
    featuring: []
  },
  {
    title: "MELANCHOLIA",
    year: "Year 02",
    image: "https://i.imgur.com/n5OTHPi.png",
    label: "℗ © Rocktopia",
    artist: "Maeve",
    featuring: []
  },
  {
    title: "The Drive",
    year: "Year 02",
    image: "https://i.imgur.com/xkyQrbf.png",
    label: "℗ © Rocktopia",
    artist: "Daniel",
    featuring: []
  },
  {
    title: "Overgrown",
    year: "Year 02",
    image: "https://i.imgur.com/SjmmVKv.png",
    label: "℗ © Joint Nation",
    artist: "Eric",
    featuring: []
  },
  {
    title: "Dreamscape (Deluxe)",
    year: "Year 02",
    image: "https://i.imgur.com/tEUHtTy.png",
    label: "℗ © Empire Music Group",
    artist: "Aria",
    featuring: []
  },
  {
    title: "Forbidden Whispers (Live On Lost & Found Tour)",
    year: "Year 02",
    image: "https://i.imgur.com/fndjU94.png",
    label: "℗ © Starlight Studios",
    artist: "Conan Woolridge",
    featuring: []
  },
  {
    title: "meaningless",
    year: "Year 01",
    image: "https://i.imgur.com/YPbjHzk.png",
    label: "℗ © Empire Music Group",
    artist: "Anthony",
    featuring: []
  },
  {
    title: "Before Sunrise (Original Motion Picture Soundtrack)",
    year: "Year 01",
    image: "https://i.imgur.com/dCHj2tL.png",
    label: "℗ © Starlight Studios",
    artist: "Conan Woolridge",
    featuring: ["Fiona"]
  },
  {
    title: "Dreamscape",
    year: "Year 01",
    image: "https://i.imgur.com/YOeKr4e.png",
    label: "℗ © Empire Music Group",
    artist: "Aria",
    featuring: []
  },
  {
    title: "Forbidden Whispers",
    year: "Year 01",
    image: "https://i.imgur.com/dcXh0vd.png",
    label: "℗ © Starlight Studios",
    artist: "Conan Woolridge",
    featuring: []
  },
  {
    title: "When I Get Lost",
    year: "-",
    image: "https://i.imgur.com/O95qUG8.png",
    label: "℗ © Rocktopia",
    artist: "Conan Woolridge",
    featuring: []
  },
  {
    title: "What Ever Happened?",
    year: "Year 01",
    image: "https://i.imgur.com/4UxqnEn.png",
    label: "℗ © Rocktopia",
    artist: "Logan",
    featuring: []
  },
  {
    title: "House of the Rising Sun",
    year: "Year 01",
    image: "https://i.imgur.com/sifpteD.png",
    label: "℗ © Rocktopia",
    artist: "Daniel",
    featuring: []
  },
  {
    title: "I Really Don't Wanna Hear It Anymore",
    year: "-",
    image: "https://pbs.twimg.com/media/FycJA3HacAAl4w7.jpg:large",
    label: "℗ © Sterling Records",
    artist: "Holligan",
    featuring: []
  },
  {
    title: "i owe it to myself",
    year: "-",
    image: "https://i.imgur.com/QeOU7TT.png",
    label: "℗ © Rocktopia",
    artist: "Owen Graham",
    featuring: []
  },
  {
    title: "Purple Dream",
    year: "-",
    image: "https://i.imgur.com/gssMuy8.png",
    label: "℗ © Rocktopia",
    artist: "Logan",
    featuring: []
  },
  {
    title: "A Brief Inquiry Into Online Relationships",
    year: "-",
    image: "https://i.imgur.com/ZyaFSC1.png",
    label: "℗ © Rocktopia",
    artist: "Logan",
    featuring: []
  },
  {
    title: "Gone Now",
    year: "-",
    image: "https://i.imgur.com/40ePcbw.png",
    label: "℗ © Rocktopia",
    artist: "Logan",
    featuring: []
  },
  {
    title: "Confessions Of A Broken Heart (Deluxe)",
    year: "-",
    image: "https://i.imgur.com/BbAnTz7.jpg",
    label: "℗ © Rocktopia",
    artist: "Fiona",
    featuring: []
  },
  {
    title: "Confessions Of A Broken Heart",
    year: "-",
    image: "https://i.imgur.com/dowVhSr.jpeg",
    label: "℗ © Rocktopia",
    artist: "Fiona",
    featuring: []
  },
  {
    title: "Poets Can't Be Murdered",
    year: "Year 02",
    image: "https://i.imgur.com/yhwmxiR.png",
    label: "℗ © Starlight Studios",
    artist: "Trevor",
    featuring: []
  },
  {
    title: "KIDS SEE GHOSTS",
    year: "Year 01",
    image: "https://i.imgur.com/XCuBO7u.png",
    label: "℗ © Starlight Studios",
    artist: "Trevor",
    featuring: []
  },
  {
    title: "Everything Is Freedom",
    year: "-",
    image: "https://i.imgur.com/oHMpTes.jpeg",
    label: "℗ © Starlight Studios",
    artist: "Trevor",
    featuring: []
  },
  {
    title: "Heartache",
    year: "-",
    image: "https://i.imgur.com/mCa18jo.png",
    label: "℗ © Starlight Studios",
    artist: "Trevor",
    featuring: []
  },
  {
    title: "The Life Of Greg",
    year: "-",
    image: "https://i.imgur.com/KEpcSKt.jpeg",
    label: "℗ © Starlight Studios",
    artist: "Trevor",
    featuring: []
  },
  {
    title: "Under Pressure",
    year: "-",
    image: "https://i.imgur.com/O4aH1Hj.png",
    label: "℗ © Starlight Studios",
    artist: "Trevor",
    featuring: []
  },
  {
    title: "Love, Trevor",
    year: "-",
    image: "https://i.imgur.com/6Nbj45z.png",
    label: "℗ © Starlight Studios",
    artist: "Trevor",
    featuring: []
  },
  {
    title: "THE COUNTRY CLUB",
    year: "Year 02",
    image: "https://i.imgur.com/mzd5oqC.png",
    label: "℗ © Rocktopia",
    artist: "Millie",
    featuring: []
  },
  {
    title: "VANGUARD",
    year: "-",
    image: "https://i.imgur.com/fSJ9aJD.png",
    label: "℗ © Rocktopia",
    artist: "Millie",
    featuring: []
  },
  {
    title: "The Lights Out",
    year: "-",
    image: "https://i.imgur.com/HmUiXD0.png",
    label: "℗ © Rocktopia",
    artist: "Millie",
    featuring: []
  },
  {
    title: "everlasting",
    year: "Year 01",
    image: "https://i.imgur.com/5psYO2t.png",
    label: "℗ © Joint Nation",
    artist: "Liz",
    featuring: []
  },
  {
    title: "Lockdown",
    year: "-",
    image: "https://i.imgur.com/WasLUob.png",
    label: "℗ © Joint Nation",
    artist: "Liz",
    featuring: []
  },
  {
    title: "Alpha",
    year: "-",
    image: "https://i.imgur.com/aPJDMdP.png",
    label: "℗ © Joint Nation",
    artist: "Liz",
    featuring: []
  },
  {
    title: "Purpose",
    year: "-",
    image: "https://i.imgur.com/QVil8Ah.png",
    label: "℗ © Joint Nation",
    artist: "Liz",
    featuring: []
  },
  {
    title: "Becoming",
    year: "-",
    image: "https://i.imgur.com/eqUXWow.png",
    label: "℗ © Joint Nation",
    artist: "Starlights",
    featuring: []
  },
  {
    title: "A Trip Down Memory Lane",
    year: "-",
    image: "https://i.imgur.com/UvEtZtx.jpeg",
    label: "℗ © Rocktopia",
    artist: "Nate",
    featuring: []
  },
  {
    title: "Metamorphosis",
    year: "-",
    image: "https://i.imgur.com/CoXXuXd.png",
    label: "℗ © Rocktopia",
    artist: "Nate",
    featuring: []
  },
];
