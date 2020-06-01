export interface selector {
    value: string;
    viewValue: string;
  }

  export interface Respond {
  response_code: number;
  results: Result[];
}

export interface Result {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface question {
  
   "results":[
      {
         "category":"Entertainment: Television",
         "type":"multiple",
         "difficulty":"easy",
         "question":"In the TV show &quot;Cheers&quot;, Sam Malone was a former relief pitcher for which baseball team?",
         "correct_answer":"Boston Red Sox",
         "incorrect_answers":[
            "New York Mets",
            "Baltimore Orioles",
            "Milwaukee Brewers"
         ]
      },
      {
         "category":"Entertainment: Video Games",
         "type":"multiple",
         "difficulty":"medium",
         "question":"What was the code name for the &quot;Nintendo Gamecube&quot;?",
         "correct_answer":"Dolphin",
         "incorrect_answers":[
            "Nitro",
            "Revolution",
            "Atlantis"
         ]
      },
      {
         "category":"Science & Nature",
         "type":"multiple",
         "difficulty":"easy",
         "question":"What is the standard atomic weight of a Plutonium nucleus?",
         "correct_answer":"244",
         "incorrect_answers":[
            "94",
            "481",
            "128"
         ]
      },
      {
         "category":"Entertainment: Film",
         "type":"multiple",
         "difficulty":"medium",
         "question":"What year did the James Cameron film &quot;Titanic&quot; come out in theaters?",
         "correct_answer":"1997",
         "incorrect_answers":[
            "1996",
            "1998",
            "1999"
         ]
      },
      {
         "category":"Entertainment: Television",
         "type":"multiple",
         "difficulty":"easy",
         "question":"In season one of the Netflix political drama &quot;House of Cards&quot;, what government position does Frank Underwood hold?",
         "correct_answer":"House Majority Whip",
         "incorrect_answers":[
            "Attorney General",
            "President",
            "Chief of Staff"
         ]
      },
      {
         "category":"Entertainment: Television",
         "type":"multiple",
         "difficulty":"medium",
         "question":"What was Nickelodeon&#039;s original name?",
         "correct_answer":"Pinwheel",
         "incorrect_answers":[
            "MTVKids",
            "KidsTV",
            "Splat!"
         ]
      },
      {
         "category":"Entertainment: Film",
         "type":"multiple",
         "difficulty":"medium",
         "question":"What is the make and model of the tour vehicles in &quot;Jurassic Park&quot; (1993)?",
         "correct_answer":"1992 Ford Explorer XLT",
         "incorrect_answers":[
            "1992 Toyota Land Cruiser",
            "1992 Jeep Wrangler YJ Sahar",
            "Mercedes M-Class"
         ]
      },
      {
         "category":"Entertainment: Video Games",
         "type":"multiple",
         "difficulty":"hard",
         "question":"Which of these characters wasn&#039;t a villian in Club Penguin?",
         "correct_answer":"The Director",
         "incorrect_answers":[
            "Herbert P. Bear",
            "Tusk",
            "Ultimate Proto-Bot 10000"
         ]
      },
      {
         "category":"Entertainment: Japanese Anime & Manga",
         "type":"multiple",
         "difficulty":"hard",
         "question":"Which animation studio animated &quot;Hidamari Sketch&quot;?",
         "correct_answer":"Shaft",
         "incorrect_answers":[
            "Trigger",
            "Kyoto Animation",
            "Production I.G"
         ]
      },
      {
         "category":"Entertainment: Music",
         "type":"multiple",
         "difficulty":"medium",
         "question":"Which song previously recorded by Elvis Presley was covered by UB40 with a reggae beat?",
         "correct_answer":"Can&#039;t Help Falling in Love",
         "incorrect_answers":[
            "Jailhouse Rock",
            "In the Ghetto",
            "Wooden Heart"
         ]
      }
   ]
}

