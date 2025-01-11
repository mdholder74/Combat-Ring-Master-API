//EVENTS DATA
const defaultEvents = [
    {
      "promotion": "UFC",
      "event_name": "UFC 285: Jones vs Gane",
      "date": "2023-03-04T00:00:00Z",
      "location": "T-Mobile Arena, Las Vegas, NV",
      "main_event": {
        "fighter1": "Jon Jones",
        "fighter2": "Ciryl Gane"
      },
      "results": []
    },
    {
      "promotion": "Boxing",
      "event_name": "Mike Tyson vs Evander Holyfield II",
      "date": "1997-06-28T00:00:00Z",
      "location": "MGM Grand Garden Arena, Las Vegas, NV",
      "main_event": {
        "fighter1": "Mike Tyson",
        "fighter2": "Evander Holyfield"
      },
      "results": []
    },
    {
      "promotion": "WWE",
      "event_name": "WrestleMania 37",
      "date": "2021-04-10T00:00:00Z",
      "location": "Raymond James Stadium, Tampa, FL",
      "main_event": {
        "fighter1": "Dwayne Johnson",
        "fighter2": "John Cena"
      },
      "results": []
    },
    {
      "promotion": "Boxing",
      "event_name": "Floyd Mayweather vs Manny Pacquiao",
      "date": "2015-05-02T00:00:00Z",
      "location": "MGM Grand Garden Arena, Las Vegas, NV",
      "main_event": {
        "fighter1": "Floyd Mayweather",
        "fighter2": "Manny Pacquiao"
      },
      "results": []
    }
  ]
 
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
      "promotion": "UFC",
      "event_name": "UFC 285: Jones vs Gane",
      "date": "2023-03-04T00:00:00Z",
      "location": "T-Mobile Arena, Las Vegas, NV",
      "main_event": {
        "fighter1": "Jon Jones",
        "fighter2": "Ciryl Gane"
      },
      "results": []
    },
    {
      "promotion": "Boxing",
      "event_name": "Mike Tyson vs Evander Holyfield II",
      "date": "1997-06-28T00:00:00Z",
      "location": "MGM Grand Garden Arena, Las Vegas, NV",
      "main_event": {
        "fighter1": "Mike Tyson",
        "fighter2": "Evander Holyfield"
      },
      "results": []
    },
    {
      "promotion": "WWE",
      "event_name": "WrestleMania 37",
      "date": "2021-04-10T00:00:00Z",
      "location": "Raymond James Stadium, Tampa, FL",
      "main_event": {
        "fighter1": "Dwayne Johnson",
        "fighter2": "John Cena"
      },
      "results": []
    },
    {
      "promotion": "Boxing",
      "event_name": "Floyd Mayweather vs Manny Pacquiao",
      "date": "2015-05-02T00:00:00Z",
      "location": "MGM Grand Garden Arena, Las Vegas, NV",
      "main_event": {
        "fighter1": "Floyd Mayweather",
        "fighter2": "Manny Pacquiao"
      },
      "results": []
    }
  ]

  module.exports = { defaultEvents, defaultFighters, defaultFights};
  

  