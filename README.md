# Campus Utility Platform

A comprehensive web platform for Sri Venkateswara College of Engineering (SVCE) students to buy/sell resources, find accommodations, and get AI-powered assistance.

## Features

- 🔐 **User Authentication** - Secure login/registration with MongoDB
- 📚 **Resource Marketplace** - Buy/sell used books, calculators, drafting tools
- 🏠 **Accommodation Finder** - Find PGs and hostels near campus
- 🤖 **AI Chatbot** - Gemini-powered campus assistant
- 📱 **Responsive Design** - Works on all devices

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Gemini API Key (from Google AI Studio)

### Installation

1. **Clone and Install Dependencies:**
   ```bash
   npm install
   ```

2. **Configure Environment Variables:**

   Create/update `.env.local` with your API keys:
   ```env
   VITE_GEMINI_API_KEY=your_actual_gemini_api_key_here
   ```

   **Get Gemini API Key:**
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Copy the key and paste it in `.env.local`

3. **Start MongoDB:**
   ```bash
   # If using local MongoDB
   mongod
   ```

4. **Run the Application:**
   ```bash
   # Start the frontend (development)
   npm run dev

   # Start the backend API server (in another terminal)
   npm run server
   ```

## Chatbot Setup

The AI chatbot uses Google's Gemini 1.5 Flash model for accurate, campus-specific assistance.

### Testing the Chatbot

Run the test script to verify Gemini integration:
```bash
node test-chatbot.js
```

### Chatbot Features

- **Context-Aware**: Specifically trained for SVCE campus information
- **Resource Guidance**: Helps users navigate the platform
- **Error Handling**: Graceful fallbacks when API is unavailable
- **Quick Suggestions**: Pre-built prompts for common questions

### Troubleshooting

**Chatbot shows "API Key not configured":**
- Verify `VITE_GEMINI_API_KEY` is set in `.env.local`
- Ensure the API key is valid and has proper permissions
- Restart the development server after changing environment variables

**Chatbot gives inaccurate responses:**
- The AI is trained specifically for SVCE context
- For specific prices/details, it directs users to browse listings
- Report issues for continuous improvement

## Project Structure

```
├── components/          # React components
│   └── Layout.tsx      # Main layout with navigation
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── Resources.tsx   # Resource marketplace
│   ├── Accommodations.tsx # Housing listings
│   ├── Chatbot.tsx     # AI assistant
│   └── Documentation.tsx # Project docs
├── services/           # API services
│   └── geminiService.ts # Gemini AI integration
├── server.js           # Express backend API
└── constants.tsx       # App constants and data
```

## API Endpoints

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User authentication
- `GET /api/auth/profile` - Get user profile

## Technologies Used

- **Frontend:** React 19, TypeScript, Tailwind CSS, Vite
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **AI:** Google Gemini 1.5 Flash
- **Authentication:** JWT, bcryptjs
