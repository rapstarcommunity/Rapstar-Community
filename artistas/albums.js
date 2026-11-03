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
    title: "Reflections",
    year: "Year 03",
    image: "https://i.imgur.com/Kcb4ESk.png",
    label: "℗ © Dawn Records",
    artist: "Ivy Sinclair",
    featuring: []
  },
  {
    title: "Even After All",
    year: "Year 03",
    image: "https://i.imgur.com/uZemeHK.png",
    label: "℗ © Dawn Records",
    artist: "Even Grace",
    featuring: []
  },
  {
    title: "Fantasmagoric Feelings",
    year: "-",
    image: "https://i.imgur.com/5Xgn5gI.jpeg",
    label: "℗ © YG Entertainment",
    artist: "Liza",
    featuring: []
  },
  {
    title: "Everloved",
    year: "-",
    image: "https://i.imgur.com/j7fLWHV.jpeg",
    label: "℗ © YG Entertainment",
    artist: "Liza",
    featuring: []
  },
  {
    title: "Once Upon a Time...",
    year: "Year 03",
    image: "https://i.imgur.com/dudcjbk.png",
    label: "℗ © Starlight Studios",
    artist: "Conan Woolridge",
    featuring: []
  },
  {
    title: "SUMMER REMAINS",
    year: "Year 03",
    image: "https://i.imgur.com/CX87G23.png",
    label: "℗ © Dawn Records",
    artist: "Nate",
    featuring: []
  },
  {
    title: "HONEY",
    year: "Year 03",
    image: "https://i.imgur.com/Rld7gSG.png",
    label: "℗ © Dawn Records",
    artist: "Bianca",
    featuring: []
  },
  {
    title: "Alone In Days Like This",
    year: "-",
    image: "https://i.imgur.com/EIKnQDt.jpeg",
    label: "℗ © Dawn Records",
    artist: "Bianca",
    featuring: []
  },
  {
    title: "When I Open My Eyes",
    year: "-",
    image: "https://i.imgur.com/9u0GTOY.jpeg",
    label: "℗ © Dawn Records",
    artist: "Bianca",
    featuring: []
  },
  {
    title: "Don't Tell Your Friends",
    year: "-",
    image: "https://i.imgur.com/0J7ikHf.png",
    label: "℗ © Dawn Records",
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
    label: "℗ © Illuminati Records",
    artist: "Matteo",
    featuring: []
  },
  {
    title: "Salute (Deluxe)",
    year: "Year 02",
    image: "https://i.imgur.com/cKHfsvQ.png",
    label: "℗ © Dawn Records",
    artist: "4Music",
    featuring: []
  },
  {
    title: "Salute",
    year: "Year 02",
    image: "https://i.imgur.com/4lwZZtP.png",
    label: "℗ © Dawn Records",
    artist: "4Music",
    featuring: []
  },
  {
    title: "MELANCHOLIA",
    year: "Year 02",
    image: "https://i.imgur.com/n5OTHPi.png",
    label: "℗ © Dawn Records",
    artist: "Alana Grace",
    featuring: []
  },
  {
    title: "The Drive",
    year: "Year 02",
    image: "https://i.imgur.com/xkyQrbf.png",
    label: "℗ © Dawn Records",
    artist: "Ava",
    featuring: []
  },
  {
    title: "Overgrown",
    year: "Year 02",
    image: "https://i.imgur.com/SjmmVKv.png",
    label: "℗ © YG Entertainment",
    artist: "Eric",
    featuring: []
  },
  {
    title: "Dreamscape (Deluxe)",
    year: "Year 02",
    image: "https://i.imgur.com/tEUHtTy.png",
    label: "℗ © Illuminati Records",
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
    label: "℗ © Illuminati Records",
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
    label: "℗ © Illuminati Records",
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
    label: "℗ © Dawn Records",
    artist: "Conan Woolridge",
    featuring: []
  },
  {
    title: "What Ever Happened?",
    year: "Year 01",
    image: "https://i.imgur.com/4UxqnEn.png",
    label: "℗ © Dawn Records",
    artist: "Even Grace",
    featuring: []
  },
  {
    title: "House of the Rising Sun",
    year: "Year 01",
    image: "https://i.imgur.com/sifpteD.png",
    label: "℗ © Dawn Records",
    artist: "Ava",
    featuring: []
  },
  {
    title: "I Really Don't Wanna Hear It Anymore",
    year: "-",
    image: "https://pbs.twimg.com/media/FycJA3HacAAl4w7.jpg:large",
    label: "℗ © Pacific Records",
    artist: "Holligan",
    featuring: []
  },
  {
    title: "i owe it to myself",
    year: "-",
    image: "https://i.imgur.com/QeOU7TT.png",
    label: "℗ © Dawn Records",
    artist: "Owen Graham",
    featuring: []
  },
  {
    title: "Purple Dream",
    year: "-",
    image: "https://i.imgur.com/gssMuy8.png",
    label: "℗ © Dawn Records",
    artist: "Even Grace",
    featuring: []
  },
  {
    title: "A Brief Inquiry Into Online Relationships",
    year: "-",
    image: "https://i.imgur.com/ZyaFSC1.png",
    label: "℗ © Dawn Records",
    artist: "Even Grace",
    featuring: []
  },
  {
    title: "Gone Now",
    year: "-",
    image: "https://i.imgur.com/40ePcbw.png",
    label: "℗ © Dawn Records",
    artist: "Even Grace",
    featuring: []
  },
  {
    title: "Confessions Of A Broken Heart (Deluxe)",
    year: "-",
    image: "https://i.imgur.com/BbAnTz7.jpg",
    label: "℗ © Dawn Records",
    artist: "Fiona",
    featuring: []
  },
  {
    title: "Confessions Of A Broken Heart",
    year: "-",
    image: "https://i.imgur.com/dowVhSr.jpeg",
    label: "℗ © Dawn Records",
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
    label: "℗ © Dawn Records",
    artist: "Hannah",
    featuring: []
  },
  {
    title: "VANGUARD",
    year: "-",
    image: "https://i.imgur.com/fSJ9aJD.png",
    label: "℗ © Dawn Records",
    artist: "Hannah",
    featuring: []
  },
  {
    title: "The Lights Out",
    year: "-",
    image: "https://i.imgur.com/HmUiXD0.png",
    label: "℗ © Dawn Records",
    artist: "Hannah",
    featuring: []
  },
  {
    title: "everlasting",
    year: "Year 01",
    image: "https://i.imgur.com/5psYO2t.png",
    label: "℗ © YG Entertainment",
    artist: "Liz",
    featuring: []
  },
  {
    title: "Lockdown",
    year: "-",
    image: "https://i.imgur.com/WasLUob.png",
    label: "℗ © YG Entertainment",
    artist: "Liz",
    featuring: []
  },
  {
    title: "Alpha",
    year: "-",
    image: "https://i.imgur.com/aPJDMdP.png",
    label: "℗ © YG Entertainment",
    artist: "Liz",
    featuring: []
  },
  {
    title: "Purpose",
    year: "-",
    image: "https://i.imgur.com/QVil8Ah.png",
    label: "℗ © YG Entertainment",
    artist: "Liz",
    featuring: []
  },
  {
    title: "Becoming",
    year: "-",
    image: "https://i.imgur.com/eqUXWow.png",
    label: "℗ © YG Entertainment",
    artist: "Starlights",
    featuring: []
  },
  {
    title: "A Trip Down Memory Lane",
    year: "-",
    image: "https://i.imgur.com/UvEtZtx.jpeg",
    label: "℗ © Dawn Records",
    artist: "Nate",
    featuring: []
  },
  {
    title: "Metamorphosis",
    year: "-",
    image: "https://i.imgur.com/CoXXuXd.png",
    label: "℗ © Dawn Records",
    artist: "Nate",
    featuring: []
  },
];
