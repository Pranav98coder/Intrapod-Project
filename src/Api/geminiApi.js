import axios from "axios";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const generateGeminiResponse = async (message) => {
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
      {
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `You are a professional AI resume assistant. Your job is to help users build resumes, suggest job roles, and improve their professional profiles. 

Only answer questions related to:
- Resume building
- Job applications
- Interview tips
- Career advice
- Skills for specific job roles

If the user's input is irrelevant, respond with: "I can only assist with job-related queries."
only reply within 50 words and dont use any type of text format

Now, analyze the following message and respond professionall:

"${message}"
`,
              },
            ],
          },
        ],
      }
    );

    let aiText =
      response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I can only assist with job-related queries.";

    return { aiText };
  } catch (error) {
    console.error("Gemini API Error:", error.response?.data || error.message);
    return { aiText: "Error processing request. Please try again." };
  }
};
