const questions = {
  day2: [
    {
      question: "Welcome to Paris!",
      type: "geolocation",
      location: {
        latitude: 48.8566,
        longitude: 2.3522,
        radius: 20000,
      },
      backupAnswer: "paris",
    },
    {
      question: "Find the route from the airport to our Airbnb on the metro map",
      type: "text",
      answer: "61",
    },
    {
      question: "What is the name of the neighborhood where we're staying?",
      type: "text",
      answer: "Montmartre",
    },
    {
      question: "Name 6 languages on the mur de je t'aime",
      type: "text",
      answer: "love",
    },
    {
      question: "Find a Space Invader",
      type: "photo",
      answer: "space",
    },
  ],
  day3: [
    {
      question: "How many steps to the top of the Sacré-Cœur?",
      type: "number",
      answer: 300,
    },
    {
      question: "Go to the location listed under the previous question",
      type: "geolocation",
      location: {
        latitude: 48.8738,
        longitude: 2.295,
        radius: 500, // 500 meters around the Arc de Triomphe
      },
      backupAnswer: "arc",
    },
    {
      question: "Be in charge of the money for the day",
      type: "text",
      answer: "euros",
    },
    {
      question: "Find the historic passage named after a panoramic viewfinder near the Grands Boulevards station. Look for an entrance near the corner of Boulevard Montmartre and Rue Vivienne.",
      type: "geolocation",
      location: {
        latitude: 48.8713,
        longitude: 2.3431,
        radius: 50,
      },
      backupAnswer: "passage",
    },
    {
      question: "Navigate to the metro station named after a famous military school.",
      type: "geolocation",
      location: {
        latitude: 48.8529,  // Latitude for École Militaire station
        longitude: 2.3041,  // Longitude for École Militaire station
        radius: 100,       // 100 meters radius
      },
      backupAnswer: "military",
    },
  ],
  day4: [
    {
      question: "How long was the Eiffel Tower intended to stand?",
      type: "text",
      answer: "20 years",
    },
    {
      question: "Say Bonjour to 5 people",
      type: "text",
      answer: "bonjour",
    },
    {
      question: "Order food in French",
      type: "text",
      answer: "menu",
    },
    {
      question: "Say merci to 5 people",
      type: "text",
      answer: "merci",
    },
    {
      question: "Try escargot or froglegs",
      type: "text",
      answer: "ribbit",
    },
  ],
  day5: [
    {
      question: "Stand on Point Zero",
      type: "geolocation",
      location: {
        latitude: 48.853,  // Latitude for Point Zero in Paris
        longitude: 2.3499,  // Longitude for Point Zero in Paris
        radius: 5,
      },
      answer: "zero",
    },
    {
      question: "Look for the bridge with distinctive stone masks decorating its sides and several arches. What is its name?",
      type: "text",
      answer: "Pont Neuf",
    },
    {
      question: "Find the bridge with the love locks that spans the Seine River near Île de la Cité. What is its name?",
      type: "text",
      answer: "Pont des Arts",
    },
    {
      question: "Find the secret tunnels beneath the city. What is the historical marker you see at the entrance?",
      type: "text",
      answer: "Denfert-Rochereau",
    },
    {
      question: "What do the French call the Mona Lisa?",
      type: "text",
      answer: "La Joconde",
    },
  ],
  day6: [
    {
      question: "French sometimes refere to France as a shape. What shape?",
      type: "text",
      answer: "hexagon",
    },
    {
      question: "Watch a street performer",
      type: "text",
      answer: "performer",
    },
    {
      question: "Eat a macaron",
      type: "text",
      answer: "macaron",
    },
    {
      question: "Take the green line to the 8th stop heading north. From there, head north on the street named after a saint. Take the first right. Your destination is number 6 on this street.",
      type: "text",
      answer: "escape",
    },
    {
      question: "Échapper",
      type: "photo",
      answer: "fait",
    },
  ],
};

export const checkAnswer = (day, index, userAnswer) => {
  const question = questions[day][index];
  const correctAnswer = question.answer;

  if (question.type === 'number') {
    return parseInt(userAnswer, 10) === correctAnswer;
  } else if (question.type === 'geolocation') {
    return userAnswer.toLowerCase() === question.backupAnswer.toLowerCase();
  } else {
    return userAnswer.toLowerCase() === correctAnswer.toString().toLowerCase();
  }
};

export default questions;
