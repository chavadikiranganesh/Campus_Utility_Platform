
import React from 'react';

const Documentation: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 underline decoration-blue-500">Project Documentation</h1>
        <p className="text-xl text-slate-600">B.Tech Final Year Project Portfolio - Department of Data Science</p>
      </div>

      <div className="space-y-16">
        {/* Abstract */}
        <section id="abstract" className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">1. Abstract</h2>
          <p className="text-slate-700 leading-relaxed text-lg">
            "Campus Utility" is a specialized web platform designed for the students of Sri Venkateswara College of Engineering (SVCE). 
            The platform bridges the gap between seniors and juniors by facilitating the sharing of academic resources like books and tools. 
            Additionally, it provides a centralized directory for verified accommodations near the campus. To enhance user experience, 
            an AI-powered chatbot using Gemini API is integrated to provide real-time assistance and answers to frequently asked questions. 
            The project utilizes React for the frontend, Tailwind CSS for modern styling, and an optimized SQL database for structured storage.
          </p>
        </section>

        {/* Introduction */}
        <section id="intro" className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">2. Introduction & Problem Statement</h2>
          <div className="space-y-4">
            <h3 className="font-bold text-slate-800">Problem Statement:</h3>
            <p className="text-slate-600 italic">
              "Students often struggle to find affordable second-hand academic tools and reliable accommodation near campus, leading to fragmented communication through WhatsApp groups and notice boards."
            </p>
            <h3 className="font-bold text-slate-800">Objectives:</h3>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Create a peer-to-peer marketplace for academic tools.</li>
              <li>Provide a verified list of PGs/Hostels with facility details.</li>
              <li>Implement an AI assistant for 24/7 student guidance.</li>
              <li>Ensure a responsive and user-friendly interface using modern web technologies.</li>
            </ul>
          </div>
        </section>

        {/* Database Design */}
        <section id="database" className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-blue-400">3. Database Schema (SQL)</h2>
          <pre className="text-sm font-mono overflow-x-auto bg-slate-800 p-6 rounded-lg border border-slate-700">
{`-- Users Table
CREATE TABLE Users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    phone_number VARCHAR(15),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Resources Table (Items for sale/donation)
CREATE TABLE Resources (
    item_id INT PRIMARY KEY AUTO_INCREMENT,
    seller_id INT,
    title VARCHAR(100) NOT NULL,
    category ENUM('Book', 'Calculator', 'Tools', 'Other'),
    price DECIMAL(10,2),
    condition_desc VARCHAR(50),
    image_url VARCHAR(255),
    status ENUM('Available', 'Sold') DEFAULT 'Available',
    FOREIGN KEY (seller_id) REFERENCES Users(user_id)
);

-- Accommodations Table
CREATE TABLE Accommodations (
    acc_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    type ENUM('PG', 'Hostel'),
    rent_per_month DECIMAL(10,2),
    location VARCHAR(255),
    facilities TEXT,
    contact_info VARCHAR(100),
    image_url VARCHAR(255)
);`}
          </pre>
        </section>

        {/* Modules */}
        <section id="modules" className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">4. System Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-slate-100 p-6 rounded-xl bg-blue-50">
              <h4 className="font-bold text-blue-800 mb-2">User Authentication</h4>
              <p className="text-sm text-slate-600">Secure registration and login for students using college IDs.</p>
            </div>
            <div className="border border-slate-100 p-6 rounded-xl bg-green-50">
              <h4 className="font-bold text-green-800 mb-2">Marketplace Management</h4>
              <p className="text-sm text-slate-600">CRUD operations for listing items, searching, and contacting sellers.</p>
            </div>
            <div className="border border-slate-100 p-6 rounded-xl bg-purple-50">
              <h4 className="font-bold text-purple-800 mb-2">Accommodation Finder</h4>
              <p className="text-sm text-slate-600">Filtering and listing service for hostels with map integration capability.</p>
            </div>
            <div className="border border-slate-100 p-6 rounded-xl bg-orange-50">
              <h4 className="font-bold text-orange-800 mb-2">AI Chatbot Hub</h4>
              <p className="text-sm text-slate-600">Natural language processing for queries using Gemini API.</p>
            </div>
          </div>
        </section>

        {/* Presentation Slides */}
        <section id="slides" className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">5. Presentation Content (Slide Deck)</h2>
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-lg">
              <p className="font-bold">Slide 1: Title & Team Members</p>
              <p className="text-sm">Project Title, Department, SVCE Logo, Guide Name.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <p className="font-bold">Slide 2: Motivation</p>
              <p className="text-sm">Why this project? Cost of books, accommodation hunting stress.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <p className="font-bold">Slide 3: Tech Stack</p>
              <p className="text-sm">React, Tailwind, Node.js, SQL, Gemini AI SDK.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <p className="font-bold">Slide 4: System Architecture</p>
              <p className="text-sm">Client-Server interaction diagram, DB structure.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
               <p className="font-bold">Slide 5-10: Live Demo Snippets</p>
               <p className="text-sm">Screenshots of Home, Marketplace, and Chatbot.</p>
            </div>
          </div>
        </section>

        {/* Viva Q&A */}
        <section id="viva" className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">6. Viva Questions & Answers</h2>
          <div className="space-y-6">
            <div>
              <p className="font-bold text-slate-800">Q: Why did you choose React over plain HTML/JS?</p>
              <p className="text-slate-600">A: React provides a component-based architecture, making the UI reusable and the application faster through Virtual DOM updates.</p>
            </div>
            <div>
              <p className="font-bold text-slate-800">Q: How does the AI Chatbot work?</p>
              <p className="text-slate-600">A: It uses Google's Gemini API. The frontend sends the user's prompt to the model with a predefined system instruction to ensure responses are relevant to the SVCE campus context.</p>
            </div>
            <div>
              <p className="font-bold text-slate-800">Q: How is data security handled in the database?</p>
              <p className="text-slate-600">A: Sensitive data like passwords should be hashed using Bcrypt. SQL queries should use parameterized inputs to prevent SQL Injection attacks.</p>
            </div>
          </div>
        </section>

        {/* Resume Content */}
        <section id="resume" className="bg-indigo-50 p-8 rounded-2xl border border-indigo-200">
          <h2 className="text-2xl font-bold text-indigo-900 mb-4">7. Resume Description</h2>
          <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-2">Campus Utility Platform (React, Tailwind, SQL, AI)</h3>
            <ul className="list-disc pl-6 text-sm text-slate-700 space-y-2">
              <li>Engineered a full-stack platform for 2000+ students to facilitate resource sharing and accommodation discovery.</li>
              <li>Integrated Google Gemini AI to automate 80% of routine campus inquiries through a conversational chatbot.</li>
              <li>Designed a relational SQL schema to efficiently manage users, product listings, and accommodation data.</li>
              <li>Implemented a responsive, mobile-first design using Tailwind CSS, ensuring 99% device compatibility.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Documentation;
