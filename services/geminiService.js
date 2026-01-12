import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_INSTRUCTION = `
You are the "Campus Assistant" for Sri Venkateswara College of Engineering (SVCE), Department of Data Science.

Your role is to help students with:
1. **Resources**: Finding used books, calculators, drafting tools, and study materials
2. **Accommodations**: Locating PGs, hostels, and rental properties near the campus
3. **College Information**: General FAQs about SVCE, courses, facilities, and campus life
4. **Platform Guidance**: Explaining how to use the Campus Utility web platform

IMPORTANT GUIDELINES:
- Be helpful, professional, and student-friendly
- Keep responses concise but informative
- Use bullet points for lists and structured information
- Always suggest checking the actual "Resources" or "Accommodations" sections for current listings
- For specific prices, availability, or contact details, direct users to browse the platform
- If you don't know something specific, admit it and suggest alternatives
- Focus on SVCE campus context - avoid generic advice

RESPONSE FORMAT:
- Start with direct answers to questions
- Use clear, simple language
- End with actionable suggestions when appropriate
- Include relevant SVCE-specific information when possible

Remember: You are an AI assistant, not a replacement for official college resources.
`;

export const getChatbotResponse = async (userMessage) => {
  // Check for API key
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'PLACEHOLDER_API_KEY') {
    return "The Campus Assistant is currently offline (API Key not configured). Please contact the administrator.";
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-pro",
      systemInstruction: SYSTEM_INSTRUCTION,
    });

    const result = await model.generateContent(userMessage);
    const response = await result.response;
    const text = response.text();

    return text || "I'm sorry, I couldn't process that request. Please try rephrasing your question.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Oops! I ran into an error while processing your request. Please try again in a moment.";
  }
};