const grammyData = [
  {
    edition: "3rd Annual GRAMMY Awards",
    categories: [
      {
        category: "Album of the Year",
        nominees: [
          { artist: "Emília Ramirez", song: "LATINAJE" },
          { artist: "Bianca", song: "HONEY" },
          { artist: "Blair", song: "Red Flags" },
          { artist: "Nielly", song: "Voz do Brasil" },
          { artist: "Nate", song: "SUMMER REMAINS" },
        ],
        winner: { artist: "Emília Ramirez", song: "LATINAJE" }
      },
      {
        category: "Record of the Year",
        nominees: [
          { artist: "Mia", song: "False Idols" },
          { artist: "Logan & Daniel & Owen Graham", song: "In The End, Just Party" },
          { artist: "Blair", song: "NaNaNa" },
          { artist: "Bianca", song: "SOFTLY, FOREVER" },
          { artist: "Maya Caccini", song: "Unanswered Questions" },
        ],
        winner: { artist: "Logan & Daniel & Owen Graham", song: "In The End, Just Party" }
      },
      {
        category: "Song of the Year",
        nominees: [
          { artist: "Daniel", song: "All Over Again... Again" },
          { artist: "Maya Caccini", song: "Chasing Freedom" },
          { artist: "Logan", song: "RADICAL EXXXTASY" },
          { artist: "Bianca", song: "SOFTLY, FOREVER" },
          { artist: "Nate", song: "WHERE THE CORNFIELD ENDS" },
        ],
        winner: { artist: "Bianca", song: "SOFTLY, FOREVER" }
      },
      {
        category: "Best New Artist",
        nominees: [
          { artist: "Blair", song: "Blair" },
          { artist: "Maya Caccini", song: "Maya Caccini"},
          { artist: "Mia", song: "Mia" },
        ],
        winner: { artist: "Blair", song: "Blair" }
      },
      {
        category: "Producer of the Year, Non-Classical",
        nominees: [
          { artist: "Bianca", song: "Bianca"},
          { artist: "Logan", song: "Logan" },
          { artist: "Maya Caccini", song: "Maya Caccini" },
          { artist: "Nate", song: "Nate" },
          { artist: "Owen Graham", song: "Owen Graham" },
        ],
        winner: { artist: "Logan", song: "Logan" }
      },
      {
        category: "Songwriter of the Year, Non-Classical",
        nominees: [
          { artist: "Bianca", song: "Bianca"},
          { artist: "Logan", song: "Logan" },
          { artist: "Maya Caccini", song: "Maya Caccini" },
          { artist: "Nate", song: "Nate" },
          { artist: "Blair", song: "Blair" },
        ],
        winner: { artist: "Bianca", song: "Bianca" }
      },
      {
        category: "Best Pop Vocal Album",
        nominees: [
          { artist: "Emília Ramirez", song: "LATINAJE" },
          { artist: "Bianca", song: "HONEY" },
          { artist: "Blair", song: "Red Flags" },
          { artist: "Nielly", song: "Voz do Brasil" },
          { artist: "Nate", song: "SUMMER REMAINS" },
        ],
        winner: { artist: "Nielly", song: "Voz do Brasil" }
      },
      {
        category: "Best Pop Solo Performance",
        nominees: [
          { artist: "Maya Caccini", song: "Chasing Freedom" },
          { artist: "Mia", song: "False Idols" },
          { artist: "Blair", song: "NaNaNa" },
          { artist: "Logan", song: "RADICAL EXXXTASY" },
          { artist: "Bianca", song: "SOFTLY, FOREVER" },
        ],
        winner: { artist: "Blair", song: "NaNaNa" }
      },
      {
        category: "Best Pop Duo/Group Performance",
        nominees: [
          { artist: "Logan & Daniel & Owen Graham", song: "In The End, Just Party" },
          { artist: "Blair & Owen Graham", song: "Be Careful" },
          { artist: "Nate & Logan", song: "WHISKEY FEVER" },
        ],
        winner: { artist: "Logan & Daniel & Owen Graham", song: "In The End, Just Party" }
      },
      {
        category: "Best Dance Pop Recording",
        nominees: [
          { artist: "Mia", song: "False Idols" },
          { artist: "Logan & Daniel & Owen Graham", song: "In The End, Just Party" },
          { artist: "Blair", song: "NaNaNa" },
          { artist: "Maya Caccini", song: "Unanswered Questions" }
        ],
        winner: { artist: "Mia", song: "False Idols" }
      },
      {
        category: "Best Rock/Alternative Album",
        nominees: [
          { artist: "Emília Ramirez", song: "LATINAJE" },
          { artist: "Bianca", song: "HONEY" },
          { artist: "Nate", song: "SUMMER REMAINS" }
        ],
        winner: { artist: "Nate", song: "SUMMER REMAINS" }
      },
      {
        category: "Best Rock/Alternative Performance",
        nominees: [
          { artist: "Daniel", song: "All Over Again... Again" },
          { artist: "Maya Caccini", song: "Chasing Freedom" },
          { artist: "Logan", song: "RADICAL EXXXTASY" },
          { artist: "Bianca", song: "SOFTLY, FOREVER" },
          { artist: "Nate", song: "WHERE THE CORNFIELD ENDS" }
        ],
        winner: { artist: "Daniel", song: "All Over Again... Again" }
      },
      {
        category: "Best Rock/Alternative Song",
        nominees: [
          { artist: "Daniel", song: "All Over Again... Again" },
          { artist: "Maya Caccini", song: "Chasing Freedom" },
          { artist: "Logan", song: "RADICAL EXXXTASY" },
          { artist: "Bianca", song: "SOFTLY, FOREVER" },
          { artist: "Nate", song: "WHERE THE CORNFIELD ENDS" }
        ],
        winner: { artist: "Logan", song: "RADICAL EXXXTASY" }
      },
      {
        category: "Best Music Video",
        nominees: [
          { artist: "Daniel", song: "All Over Again... Again" },
          { artist: "Mia", song: "False Idols" },
          { artist: "Blair", song: "NaNaNa" },
          { artist: "Logan", song: "RADICAL EXXXTASY" },
          { artist: "Maya Caccini", song: "Unanswered Questions" },
        ],
        winner: { artist: "Mia", song: "False Idols" }
      },
      {
        category: "Best Engineered Album, Non-Classical",
        nominees: [
          { artist: "Emília Ramirez", song: "LATINAJE" },
          { artist: "Bianca", song: "HONEY" },
          { artist: "Blair", song: "Red Flags" },
          { artist: "Nielly", song: "Voz do Brasil" },
          { artist: "Nate", song: "SUMMER REMAINS" },
        ],
        winner: { artist: "Bianca", song: "HONEY" }
      },
      {
        category: "Best Recording Package",
        nominees: [
          { artist: "Emília Ramirez", song: "LATINAJE" },
          { artist: "Bianca", song: "HONEY" },
          { artist: "Blair", song: "Red Flags" },
          { artist: "Nielly", song: "Voz do Brasil" },
          { artist: "Nate", song: "SUMMER REMAINS" },
        ],
        winner: { artist: "Emília Ramirez", song: "LATINAJE" }
      },
      {
        category: "Best Album Art",
        nominees: [
          { artist: "Emília Ramirez", song: "LATINAJE" },
          { artist: "Bianca", song: "HONEY" },
          { artist: "Blair", song: "Red Flags" },
          { artist: "Nielly", song: "Voz do Brasil" },
          { artist: "Nate", song: "SUMMER REMAINS" },
        ],
        winner: { artist: "Nielly", song: "Voz do Brasil" }
      },
      {
        category: "Best Single Art",
        nominees: [
          { artist: "Daniel", song: "All Over Again... Again" },
          { artist: "Blair & Owen Graham", song: "Be Careful" },
          { artist: "Maya Caccini", song: "Chasing Freedom" },
          { artist: "Mia", song: "False Idols" },
          { artist: "Logan & Daniel & Owen Graham", song: "In The End, Just Party" },
        ],
        winner: { artist: "Daniel", song: "All Over Again... Again" }
      }
    ]
  },
  {
    edition: "2nd Annual GRAMMY Awards",
    categories: [
      {
        category: "Grammy Legend Award",
        nominees: [
          { artist: "Trevor", song: "Trevor" },
        ],
        winner: { artist: "Trevor", song: "Trevor" }
      },
      {
        category: "Album of the Year",
        nominees: [
          { artist: "Riley", song: "Dandelions" },
          { artist: "Eric", song: "Overgrown" },
          { artist: "Trevor", song: "Poets Can't Be Murdered" },
          { artist: "Mason", song: "Salute" },
          { artist: "Millie", song: "THE COUNTRY CLUB" },
          { artist: "Daniel", song: "The Drive" },
        ],
        winner: { artist: "Daniel", song: "The Drive" }
      },
      {
        category: "Record of the Year",
        nominees: [
          { artist: "Daniel", song: "Bloodsucker" },
          { artist: "Nate", song: "HIGHWAY BOYS" },
          { artist: "Mason & Miles Carson", song: "I Got The Power" },
          { artist: "Eric & Liz", song: "Late Night Talking" },
          { artist: "Riley", song: "Remains For Us" },
          { artist: "Millie", song: "TEXAS ON FIRE" },
        ],
        winner: { artist: "Eric & Liz", song: "Late Night Talking" }
      },
      {
        category: "Song of the Year",
        nominees: [
          { artist: "Maeve", song: "AFTERMATH" },
          { artist: "Daniel", song: "Bloodsucker" },
          { artist: "Eric & Liz", song: "Late Night Talking" },
          { artist: "Trevor", song: "Over Those Hills" },
          { artist: "Riley", song: "Remains For Us" },
          { artist: "Millie", song: "TEXAS ON FIRE" },
        ],
        winner: { artist: "Trevor", song: "Over Those Hills" }
      },
      {
        category: "Best New Artist",
        nominees: [
          { artist: "Mason", song: "Mason" },
          { artist: "Maeve", song: "Maeve"},
          { artist: "Blair", song: "Blair" },
          { artist: "Eric", song: "Eric"},
          { artist: "Riley", song: "Riley" },
          { artist: "Zuri", song: "Zuri" },
        ],
        winner: { artist: "Eric", song: "Eric" }
      },
      {
        category: "Producer of the Year, Non-Classical",
        nominees: [
          { artist: "Aria", song: "Aria"},
          { artist: "Eric", song: "Eric" },
          { artist: "Logan", song: "Logan" },
          { artist: "Millie", song: "Millie" },
          { artist: "Trevor", song: "Trevor" },
        ],
        winner: { artist: "Logan", song: "Logan" }
      },
      {
        category: "Songwriter of the Year, Non-Classical",
        nominees: [
          { artist: "Daniel", song: "Daniel" },
          { artist: "Eric", song: "Eric" },
          { artist: "Millie", song: "Millie" },
          { artist: "Riley", song: "Riley" },
          { artist: "Trevor", song: "Trevor" },
        ],
        winner: { artist: "Trevor", song: "Trevor" }
      },
      {
        category: "Best Pop Vocal Album",
        nominees: [
          { artist: "Riley", song: "Dandelions" },
          { artist: "Aria", song: "Dreamscape (Deluxe)" },
          { artist: "Mason", song: "Salute" },
          { artist: "Millie", song: "THE COUNTRY CLUB" },
          { artist: "Daniel", song: "The Drive" },
        ],
        winner: { artist: "Riley", song: "Dandelions" }
      },
      {
        category: "Best Pop Solo Performance",
        nominees: [
          { artist: "Daniel", song: "Bloodsucker" },
          { artist: "Nate", song: "HIGHWAY BOYS" },
          { artist: "Riley", song: "Let It Go" },
          { artist: "Millie", song: "SHOTGUN" },
          { artist: "Owen Graham", song: "Stolen" },
        ],
        winner: { artist: "Riley", song: "Let It Go" }
      },
      {
        category: "Best Pop Duo/Group Performance",
        nominees: [
          { artist: "Eric & Liz", song: "Late Night Talking" },
          { artist: "Mason", song: "Salute" },
          { artist: "Millie & Megan", song: "THE DAY I DIE" },
          { artist: "Trevor & Millie", song: "Verlaten" },
          { artist: "Zuri & Riley", song: "Young Night" }
        ],
        winner: { artist: "Eric & Liz", song: "Late Night Talking" }
      },
      {
        category: "Best Dance Pop Recording",
        nominees: [
          { artist: "Aria & Miles Carson", song: "Body Language" },
          { artist: "Riley", song: "Hearthous" },
          { artist: "Mason & Miles Carson", song: "I Got The Power" },
          { artist: "Zuri & Riley", song: "Young Night" }
        ],
        winner: { artist: "Mason & Miles Carson", song: "I Got The Power" }
      },
      {
        category: "Best Rock/Alternative Performance",
        nominees: [
          { artist: "Maeve", song: "AFTERMATH" },
          { artist: "Daniel", song: "DRUNK!" },
          { artist: "Nate", song: "HIGHWAY BOYS" },
          { artist: "Owen Graham", song: "Stolen" }
        ],
        winner: { artist: "Nate", song: "HIGHWAY BOYS" }
      },
      {
        category: "Best Rock/Alternative Song",
        nominees: [
          { artist: "Maeve", song: "AFTERMATH" },
          { artist: "Daniel", song: "Oh, Was That Yours?" },
          { artist: "Nate", song: "HIGHWAY BOYS" },
          { artist: "Owen Graham", song: "Stolen" }
        ],
        winner: { artist: "Daniel", song: "Oh, Was That Yours?" }
      },
      {
        category: "Best Rap/R&B Album",
        nominees: [
          { artist: "Aria", song: "Dreamscape (Deluxe)" },
          { artist: "Eric", song: "Overgrown" },
          { artist: "Trevor", song: "Poets Can't Be Murdered" },
          { artist: "Millie", song: "THE COUNTRY CLUB" }
        ],
        winner: { artist: "Trevor", song: "Poets Can't Be Murdered" }
      },
      {
        category: "Best Rap/R&B Performance",
        nominees: [
          { artist: "Aria & Miles Carson", song: "By My Side" },
          { artist: "Eric & Liz", song: "Late Night Talking" },
          { artist: "Trevor", song: "Over Those Hills" },
          { artist: "Millie", song: "TEXAS ON FIRE" }
        ],
        winner: { artist: "Millie", song: "TEXAS ON FIRE" }
      },
      {
        category: "Best Rap/R&B Song",
        nominees: [
          { artist: "Aria", song: "Permanent" },
          { artist: "Eric & Liz", song: "Late Night Talking" },
          { artist: "Trevor", song: "Over Those Hills" },
          { artist: "Millie", song: "TEXAS ON FIRE" }
        ],
        winner: { artist: "Eric & Liz", song: "Late Night Talking" }
      },
      {
        category: "Best Music Video",
        nominees: [
          { artist: "Daniel", song: "Bloodsucker" },
          { artist: "Nate", song: "HIGHWAY BOYS" },
          { artist: "Eric & Liz", song: "Late Night Talking" },
          { artist: "Trevor", song: "Over Those Hills" },
          { artist: "Riley", song: "Remains For Us" },
        ],
        winner: { artist: "Trevor", song: "Over Those Hills" }
      },
      {
        category: "Best Engineered Album, Non-Classical",
        nominees: [
          { artist: "Riley", song: "Dandelions" },
          { artist: "Maeve", song: "MELANCHOLIA" },
          { artist: "Eric", song: "Overgrown" },
          { artist: "Millie", song: "THE COUNTRY CLUB" },
          { artist: "Daniel", song: "The Drive" }
        ],
        winner: { artist: "Maeve", song: "MELANCHOLIA" }
      },
      {
        category: "Best Boxed Or Special Limited Edition Package",
        nominees: [
          { artist: "Riley", song: "Dandelions" },
          { artist: "Aria", song: "Dreamscape (Deluxe)" },
          { artist: "Maeve", song: "MELANCHOLIA" },
          { artist: "Millie", song: "THE COUNTRY CLUB" },
          { artist: "Daniel", song: "The Drive" },
        ],
        winner: { artist: "Daniel", song: "The Drive" }
      },
      {
        category: "Best Recording Package",
        nominees: [
          { artist: "Riley", song: "Dandelions" },
          { artist: "Eric", song: "Overgrown" },
          { artist: "Maeve", song: "MELANCHOLIA" },
          { artist: "Millie", song: "THE COUNTRY CLUB" },
          { artist: "Daniel", song: "The Drive" },
        ],
        winner: { artist: "Eric", song: "Overgrown" }
      },
      {
        category: "Best Album Art",
        nominees: [
          { artist: "Riely", song: "Dandelions" },
          { artist: "Aria", song: "Dreamscape (Deluxe)" },
          { artist: "Trevor", song: "Poets Can't Be Murdered" },
          { artist: "Millie", song: "THE COUNTRY CLUB" },
          { artist: "Daniel", song: "The Drive" },
        ],
        winner: { artist: "Millie", song: "THE COUNTRY CLUB" }
      },
      {
        category: "Best Single Art",
        nominees: [
          { artist: "Nate", song: "HIGHWAY BOYS" },
          { artist: "Eric & Liz", song: "Late Night Talking" },
          { artist: "Riley", song: "Let It Go" },
          { artist: "Daniel", song: "Oh, Was That Yours?" },
          { artist: "Millie", song: "SHOTGUN" },
        ],
        winner: { artist: "Millie", song: "SHOTGUN" }
      }
    ]
  },
  {
    edition: "1st Annual GRAMMY Awards",
    categories: [
      {
        category: "Album of the Year",
        nominees: [
          { artist: "Daniel", song: "House Of The Rising Sun" },
          { artist: "Aria", song: "Dreamscape" },
          { artist: "Logan", song: "What Ever Happened?" },
          { artist: "Liz", song: "everlasting" },
          { artist: "Conan Woolridge", song: "Forbidden Whispers" },
          { artist: "Anthony", song: "meaningless" },
          { artist: "Trevor", song: "KIDS SEE GHOSTS" },
        ],
        winner: { artist: "Liz", song: "everlasting" }
      },
      {
        category: "Record of the Year",
        nominees: [
          { artist: "Daniel", song: "Soul For My Love" },
          { artist: "Aria & Millie & Liza", song: "Boom Boom" },
          { artist: "Fiona", song: "My Game" },
          { artist: "Liz", song: "here's to the nights" },
          { artist: "Owen Graham", song: "Rumors" },
          { artist: "Matteo", song: "Forbidden" },
          { artist: "Conan Woolridge", song: "Memories From Home" },
          { artist: "Trevor", song: "Inner Self" },
        ],
        winner: { artist: "Matteo", song: "Forbidden" }
      },
      {
        category: "Song of the Year",
        nominees: [
          { artist: "Logan", song: "Alone in Kyoto" },
          { artist: "Trevor", song: "Inner Self" },
          { artist: "Conan Woolridge", song: "Memories From Home" },
          { artist: "Daniel", song: "Soul For My Love" },
          { artist: "Owen Graham", song: "Rumors" },
          { artist: "Anthony", song: "lunatic" },
          { artist: "Aria", song: "Eyes On Me" },
        ],
        winner: { artist: "Trevor", song: "Inner Self" }
      },
      {
        category: "Best New Artist",
        nominees: [
          { artist: "Daniel", song: "Daniel" },
          { artist: "Zara", song: "Zara"},
          { artist: "Maya Caccini", song: "Maya Caccini" },
          { artist: "Anthony", song: "Anthony"},
          { artist: "Matteo", song: "Matteo" },
          { artist: "Aria", song: "Aria" },
        ],
        winner: { artist: "Daniel", song: "Daniel" }
      },
      {
        category: "Producer of the Year, Non-Classical",
        nominees: [
          { artist: "Trevor", song: "Trevor"},
          { artist: "Fiona", song: "Fiona" },
          { artist: "Logan", song: "Logan" },
          { artist: "Otto", song: "Otto" },
          { artist: "Anthony", song: "Anthony" },
          { artist: "Conan Woolridge", song: "Conan Woolridge" },
        ],
        winner: { artist: "Logan", song: "Logan" }
      },
      {
        category: "Songwriter of the Year, Non-Classical",
        nominees: [
          { artist: "Liz", song: "Liz" },
          { artist: "Anthony", song: "Anthony" },
          { artist: "Logan", song: "Logan" },
          { artist: "Daniel", song: "Daniel" },
          { artist: "Trevor", song: "Trevor" },
          { artist: "Conan Woolridge", song: "Conan Woolridge" },
        ],
        winner: { artist: "Trevor", song: "Trevor" }
      },
      {
        category: "Best Pop Vocal Album",
        nominees: [
          { artist: "Liz", song: "everlasting" },
          { artist: "Matteo", song: "Flourish" },
          { artist: "Aria", song: "Dreamscape" },
          { artist: "Daniel", song: "House Of The Rising Sun" },
          { artist: "Millie", song: "Little Mermaid (Original Soundtrack)" },
        ],
        winner: { artist: "Aria", song: "Dreamscape" }
      },
      {
        category: "Best Pop Solo Performance",
        nominees: [
          { artist: "Aria", song: "Eyes On Me" },
          { artist: "Daniel", song: "Soul For My Love" },
          { artist: "Liz", song: "here's to the nights" },
          { artist: "Matteo", song: "Forbidden" },
          { artist: "Maya Caccini", song: "feel like sheet" },
          { artist: "Owen Graham", song: "Rumors" },
          { artist: "Millie", song: "Part Of The World (From Little Mermaid)" }

        ],
        winner: { artist: "Aria", song: "Eyes On Me" }
      },
      {
        category: "Best Pop Duo/Group Performance",
        nominees: [
          { artist: "Fiona & Daniel", song: "My Game (Remix)" },
          { artist: "Logan & Daniel", song: "April Skies" },
          { artist: "Aria & Millie & Liza", song: "Boom Boom" },
          { artist: "Trevor & Zion", song: "I May Destroy You" }
        ],
        winner: { artist: "Aria & Millie & Liza", song: "Boom Boom" }
      },
      {
        category: "Best Rock/Alternative Album",
        nominees: [
          { artist: "Fiona", song: "Confessions Of A Broken Heart (Deluxe)" },
          { artist: "Conan Woolridge", song: "Forbidden Whispers" },
          { artist: "Logan", song: "What Ever Happened?" },
          { artist: "Anthony", song: "meaningless" }
        ],
        winner: { artist: "Conan Woolridge", song: "Forbidden Whispers" }
      },
      {
        category: "Best Rock/Alternative Performance",
        nominees: [
          { artist: "Fiona", song: "My Game" },
          { artist: "Conan Woolridge", song: "Memories From Home" },
          { artist: "Logan", song: "Alone in Kyoto" },
          { artist: "Anthony", song: "lunatic" }
        ],
        winner: { artist: "Conan Woolridge", song: "Memories From Home" }
      },
      {
        category: "Best Rock/Alternative Song",
        nominees: [
          { artist: "Fiona", song: "My Game" },
          { artist: "Conan Woolridge", song: "20" },
          { artist: "Logan", song: "Alone in Kyoto" },
          { artist: "Anthony", song: "lunatic" }
        ],
        winner: { artist: "Logan", song: "Alone in Kyoto" }
      },
      {
        category: "Best Rap/R&B Performance",
        nominees: [
          { artist: "Zara", song: "Nasty" },
          { artist: "Trevor", song: "Genuine Tales" },
          { artist: "Daniel", song: "I Hope U Cried" },
          { artist: "Aria & Nate", song: "Journey To You" }
        ],
        winner: { artist: "Daniel", song: "I Hope U Cried" }
      },
      {
        category: "Best Rap/R&B Song",
        nominees: [
          { artist: "Zara", song: "Nasty" },
          { artist: "Trevor", song: "Genuine Tales" },
          { artist: "Daniel", song: "I Hope U Cried" },
          { artist: "Aria & Nate", song: "Journey To You" }
        ],
        winner: { artist: "Trevor", song: "Genuine Tales" }
      },
      {
        category: "Best Remixed Recording",
        nominees: [
          { artist: "Fiona & Daniel", song: "My Game (Remix)" },
          { artist: "Aria", song: "Boom Boom (Otto's Remix)" },
          { artist: "Liza", song: "Boom Boom (Otto's Remix)" },
          { artist: "Millie", song: "Boom Boom (Otto's Remix)" },
          { artist: "Daniel", song: "Feeling (Remix)" },
          { artist: "Anthony", song: "LUNATIC PARADOX REMIX" }
        ],
        winner: { artist: "Daniel & Fiona", song: "My Game (Remix)" }
      },
      {
        category: "Best Music Video",
        nominees: [
          { artist: "Matteo", song: "Forbidden" },
          { artist: "Trevor", song: "Genuine Tales" },
          { artist: "Daniel", song: "Soul For My Love" },
          { artist: "Logan", song: "Alone in Kyoto" },
          { artist: "Liz", song: "here's to the nights" },
          { artist: "Owen Graham", song: "Rumors" },
          { artist: "Fiona", song: "My Game" }
        ],
        winner: { artist: "Trevor", song: "Genuine Tales" }
      },
      {
        category: "Best Engineered Album, Non-Classical",
        nominees: [
          { artist: "Liz", song: "everlasting" },
          { artist: "Daniel", song: "House Of The Rising Sun" },
          { artist: "Trevor", song: "KIDS SEE GHOSTS" },
          { artist: "Logan", song: "What Ever Happened?" },
          { artist: "Conan Woolridge", song: "Forbidden Whispers" }
        ],
        winner: { artist: "Logan", song: "What Ever Happened?" }
      },
      {
        category: "Best Recording Package",
        nominees: [
          { artist: "Aria", song: "Dreamscape" },
          { artist: "Liz", song: "everlasting" },
          { artist: "Daniel", song: "House Of The Rising Sun" },
          { artist: "Trevor", song: "KIDS SEE GHOSTS" },
          { artist: "Anthony", song: "meaningless" },
          { artist: "Logan", song: "What Ever Happened?" },
          { artist: "Conan Woolridge", song: "Forbidden Whispers" }
        ],
        winner: { artist: "Logan", song: "What Ever Happened?" }
      },
      {
        category: "Best Album Art",
        nominees: [
          { artist: "Aria", song: "Dreamscape" },
          { artist: "Liz", song: "everlasting" },
          { artist: "Matteo", song: "Flourish" },
          { artist: "Anthony", song: "meaningless" },
          { artist: "Logan", song: "What Ever Happened?" },
          { artist: "Conan Woolridge", song: "Forbidden Whispers" }
        ],
        winner: { artist: "Liz", song: "everlasting" }
      },
      {
        category: "Best Single Art",
        nominees: [
          { artist: "Logan", song: "Beetlebum" },
          { artist: "Aria", song: "Boom Boom" },
          { artist: "Liza", song: "Boom Boom" },
          { artist: "Millie", song: "Boom Boom" },
          { artist: "Maya Caccini", song: "feel like sheet" },
          { artist: "Fiona", song: "My Game (Remix)" },
          { artist: "Daniel", song: "My Game (Remix)" },
          { artist: "Conan Woolridge", song: "20" },
          { artist: "Matteo", song: "What if my thoughts could speak?"},
          { artist: "Liz", song: "here's to the nights"}
        ],
        winner: { artist: "Logan", song: "Beetlebum" }
      }
    ]
  },
];
