const questions = {
  day2: [
    {
      question: "Find the route from the airport to our Airbnb on the metro map",
      type: "text",
      answer: "61",
    },
    {
      question: "This will be revealed when we land in Paris!",
      type: "geolocation",
      location: {
        latitude: 48.8566,
        longitude: 2.3522,
        radius: 20000,
      },
    },
    {
      question: "What color is the door of the Airbnb?",
      type: "text",
      answer: "blue",
    },
    {
      question: "What is the name of the guide for the Montmartre Walking Tour?",
      type: "text",
      answer: "Marie",
    },
    {
      question: "Take a photo of your dinner.",
      type: "photo",
      answer: "dinner_photo", // Placeholder; actual check would involve image analysis
    },
    {
      question: "Enter the time for dessert on the steps of the Sacré-Cœur.",
      type: "text",
      answer: "8pm",
    },
  ],
  day3: [
    {
      question: "What is the name of the guide for the Montmartre Walking Tour?",
      type: "text",
      answer: "Marie",
    },
    {
      question: "What color is the door of the Airbnb?",
      type: "text",
      answer: "blue",
    },
    {
      question: "Count the number of steps to the top of the Sacré-Cœur.",
      type: "number",
      answer: 300,
    },
    {
      question: "What is the name of the guide for the Montmartre Walking Tour?",
      type: "text",
      answer: "Marie",
    },
    {
      question: "Take a photo of your dinner.",
      type: "photo",
      answer: "dinner_photo", // Placeholder; actual check would involve image analysis
    },
    {
      question: "Enter the time for dessert on the steps of the Sacré-Cœur.",
      type: "text",
      answer: "8pm",
    },
  ],
  day4: [
    {
      question: "Try Escargot, Frog Legs or Moules",
      type: "text",
      answer: "delicious",
    },
    {
      question: "Munch on some Macarons",
      type: "text",
      answer: "macarons",
    },
    {
      question: "Order from a creperie",
      type: "text",
      answer: "crepe",
    },
    {
      question: "Eat in a classic French cafe",
      type: "text",
      answer: "cafe",
    },
    {
      question: "What is a boulangerie?",
      type: "text",
      answer: "bakery",
    },
    {
      question: "What is a patisserie?",
      type: "text",
      answer: "pastry shop",
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
    {
      question: "Find a Space Invader",
      type: "text",
      answer: "invader",
    },
  ],
  day6: [
    // Additional questions can be added here
  ],
  day7: [
    // Additional questions can be added here
  ],
};

export const checkAnswer = (day, index, userAnswer) => {
  const correctAnswer = questions[day][index].answer.toLowerCase();
  return userAnswer.toLowerCase() === correctAnswer;
};

export default questions;
