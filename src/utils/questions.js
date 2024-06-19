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
      answer: null,
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
      question: "Take a photo with the man walking through the wall.",
      type: "photo",
      answer: "photo",
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
      answer: null,
    },
    {
      question: "Find the historic passage named after a panoramic viewfinder. It's close to the Grands Boulevards metro station. Look for an entrance near the corner of Boulevard Montmartre and Rue Vivienne.",
      type: "text",
      answer: "Passage des Panoramas",
    },
    {
      question: "Find the historic passage named after a panoramic viewfinder near the Grands Boulevards station. Look for an entrance near the corner of Boulevard Montmartre and Rue Vivienne.",
      type: "geolocation",
      location: {
        latitude: 48.8713,
        longitude: 2.3431,
        radius: 50,
      },
      answer: null,
    },
    {
      question: "Find a Space Invader",
      type: "text",
      answer: "invader",
    },
  ],
  day4: [
    {
      question: "fill in",
      type: "text",
      answer: "ribbit",
    },
    {
      question: "Eat in a classic French cafe",
      type: "text",
      answer: "cafe",
    },
    {
      question: "Order food in French",
      type: "text",
      answer: "menu",
    },
    {
      question: "What is a boulangerie?",
      type: "text",
      answer: "bakery",
    },
    {
      question: "Try escargot or froglegs",
      type: "text",
      answer: "ribbit",
    },
  ],
  day5: [
    {
      question: "Climb up the Arc de Triomphe",
      type: "geolocation",
      location: {
        latitude: 48.8738,
        longitude: 2.295,
        radius: 500, // 500 meters around the Arc de Triomphe
      },
      answer: null,
    },
    {
      question: "Take a picture of the Mona Lisa",
      type: "photo",
      answer: "mona_lisa", // Placeholder; actual check would involve image analysis
    },
    {
      question: "Watch a street performer",
      type: "text",
      answer: "performer",
    },
    {
      question: "Say Bonjour to 5 people",
      type: "text",
      answer: "bonjour",
    },
    {
      question: "Stand on Point Zero",
      type: "text",
      answer: "zero",
    },
  ],
  day6: [
    {
      question: "What do the French call the Mona Lisa",
      type: "photo",
      answer: "La Joconde",
    },
    {
      question: "How many steps lead to the entrance of Sacré-Cœur?",
      type: "number",
      answer: 300,
    },
    {
      question: "Find the street performer near Place du Tertre.",
      type: "text",
      answer: "mime",
    },
    {
      question: "What is the main ingredient in a croque-monsieur?",
      type: "text",
      answer: "cheese",
    },
    {
      question: "Take a photo of the Eiffel Tower at night.",
      type: "photo",
      answer: "eiffel_photo",
    },
  ],
};

export const checkAnswer = (day, index, userAnswer) => {
  const correctAnswer = questions[day][index].answer?.toLowerCase();
  return userAnswer.toLowerCase() === correctAnswer;
};

export default questions;
