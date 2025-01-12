//EVENTS DATA
const defaultEvents = [
  {
    promotion: "UFC",
    event_name: "UFC 285: Jones vs Gane",
    date: "2023-03-04T00:00:00Z",
    location: "T-Mobile Arena, Las Vegas, NV",
    main_event: {
      fighter1: "Jon Jones",
      fighter2: "Ciryl Gane"
    },
    results: [
      {
        fight: "Jon Jones vs Ciryl Gane",
        winner: "Jon Jones"
      }
    ]
  },
  {
    promotion: "Boxing",
    event_name: "Mike Tyson vs Evander Holyfield II",
    date: "1997-06-28T00:00:00Z",
    location: "MGM Grand Garden Arena, Las Vegas, NV",
    main_event: {
      fighter1: "Mike Tyson",
      fighter2: "Evander Holyfield"
    },
    results: [
      {
        fight: "Mike Tyson vs Evander Holyfield",
        winner: "Evander Holyfield"
      }
    ]
  },
  {
    promotion: "WWE",
    event_name: "WrestleMania 37",
    date: "2021-04-10T00:00:00Z",
    location: "Raymond James Stadium, Tampa, FL",
    main_event: {
      fighter1: "Dwayne Johnson",
      fighter2: "John Cena"
    },
    results: [
      {
        fight: "Dwayne Johnson vs John Cena",
        winner: "Dwayne Johnson"
      }
    ]
  },
  {
    promotion: "Boxing",
    event_name: "Floyd Mayweather vs Manny Pacquiao",
    date: "2015-05-02T00:00:00Z",
    location: "MGM Grand Garden Arena, Las Vegas, NV",
    main_event: {
      fighter1: "Floyd Mayweather",
      fighter2: "Manny Pacquiao"
    },
    results: [
      {
        fight: "Floyd Mayweather vs Manny Pacquiao",
        winner: "Floyd Mayweather"
      }
    ]
  }
];

 
  //FIGHTERS DATA
  const defaultFighters = [
    {
      "name": "Mike Tyson",
      "nickname": "Iron Mike",
      "weight_class": "Heavyweight",
      "record": { "wins": 50, "losses": 6, "draws": 0 },
      "style": ["Boxing"],
      "gym": "Catskill Boxing Club",
      "nationality": "USA",
      "active": false
    },
    {
      "name": "Floyd Mayweather",
      "nickname": "Money",
      "weight_class": "Welterweight",
      "record": { "wins": 50, "losses": 0, "draws": 0 },
      "style": ["Boxing"],
      "gym": "Mayweather Boxing Club",
      "nationality": "USA",
      "active": false
    },
    {
      "name": "Jon Jones",
      "nickname": "Bones",
      "weight_class": "Light Heavyweight",
      "record": { "wins": 27, "losses": 1, "draws": 0 },
      "style": ["Muay Thai", "Jiu-Jitsu", "Wrestling"],
      "gym": "Jackson Wink MMA Academy",
      "nationality": "USA",
      "active": true
    },
    {
      "name": "Conor McGregor",
      "nickname": "The Notorious",
      "weight_class": "Lightweight",
      "record": { "wins": 22, "losses": 6, "draws": 0 },
      "style": ["Boxing", "Jiu-Jitsu"],
      "gym": "SBG Ireland",
      "nationality": "Ireland",
      "active": true
    },
    {
      "name": "John Cena",
      "nickname": "The Champ",
      "weight_class": "Heavyweight",
      "record": { "wins": 16, "losses": 4, "draws": 0 },
      "style": ["Professional Wrestling"],
      "gym": "WWE Performance Center",
      "nationality": "USA",
      "active": false
    },
    {
      "name": "Dwayne Johnson",
      "nickname": "The Rock",
      "weight_class": "Heavyweight",
      "record": { "wins": 17, "losses": 5, "draws": 0 },
      "style": ["Professional Wrestling"],
      "gym": "WWE Performance Center",
      "nationality": "USA",
      "active": false
    }
  ]

//FIGHTS DATA
const defaultFights = [
  {
    "event_id": "UFC 285: Jones vs Gane",
    "fighter1_id": "Jon Jones",
    "fighter2_id": "Ciryl Gane",
    "winner": "Jon Jones",
    "method": "Submission",
    "round": 1,
    "duration": "2:04",
    "weight_class": "Heavyweight"
  },
  {
    "event_id": "Mike Tyson vs Evander Holyfield II",
    "fighter1_id": "Mike Tyson",
    "fighter2_id": "Evander Holyfield",
    "winner": "Evander Holyfield",
    "method": "Disqualification",
    "round": 3,
    "duration": "2:19",
    "weight_class": "Heavyweight"
  },
  {
    "event_id": "Floyd Mayweather vs Manny Pacquiao",
    "fighter1_id": "Floyd Mayweather",
    "fighter2_id": "Manny Pacquiao",
    "winner": "Floyd Mayweather",
    "method": "Decision",
    "round": 12,
    "duration": "36:00",
    "weight_class": "Welterweight"
  },
  {
    "event_id": "WrestleMania 37",
    "fighter1_id": "Dwayne Johnson",
    "fighter2_id": "John Cena",
    "winner": "Dwayne Johnson",
    "method": "Pinfall",
    "round": 1,
    "duration": "10:15",
    "weight_class": "Heavyweight"
  }
]


  module.exports = { defaultEvents, defaultFighters, defaultFights};
  

  