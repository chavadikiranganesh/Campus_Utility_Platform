// Test script for Gemini service
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

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

async function testGeminiAPI() {
  console.log('🧪 Testing Gemini API Integration...\n');

  const apiKey = process.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;

  if (!apiKey || apiKey === 'PLACEHOLDER_API_KEY') {
    console.log('❌ API Key not configured. Please set VITE_GEMINI_API_KEY in your .env.local file');
    console.log('📖 Get your API key from: https://makersuite.google.com/app/apikey');
    return;
  }

  console.log('✅ API Key found');

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-pro",
      systemInstruction: SYSTEM_INSTRUCTION,
    });

    console.log('🔄 Testing basic functionality...');

    const testMessages = [
      'Hello! Who are you?',
      'What can you help me with at SVCE?',
      'How do I find used engineering books?',
      'Tell me about PG accommodations near campus'
    ];

    for (const message of testMessages) {
      console.log(`\n❓ User: ${message}`);
      const result = await model.generateContent(message);
      const response = await result.response;
      const text = response.text();
      console.log(`🤖 Assistant: ${text}`);
    }

    console.log('\n✅ All tests passed! Gemini API is working correctly.');

  } catch (error) {
    console.error('❌ API Test Failed:', error.message);
    console.log('\n🔧 Troubleshooting tips:');
    console.log('1. Verify your API key is valid');
    console.log('2. Check your internet connection');
    console.log('3. Ensure the API key has proper permissions');
    console.log('4. Try regenerating your API key');
  }
}

testGeminiAPI();