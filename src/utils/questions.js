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
  // Add more days as needed
};

export const checkAnswer = (day, index, userAnswer) => {
  const correctAnswer = questions[day][index].answer.toLowerCase();
  return userAnswer.toLowerCase() === correctAnswer;
};

export default questions;
