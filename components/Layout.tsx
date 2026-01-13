
import React, { useState, useEffect } from 'react';
import { NAVIGATION_LINKS } from '../constants.tsx';

interface User {
  email: string;
  name: string;
  rollNumber?: string;
  department?: string;
  registeredAt?: string;
}

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [isHomePage, setIsHomePage] = useState(window.location.hash === '#/' || window.location.hash === '');

  useEffect(() => {
    const checkHomePage = () => {
      setIsHomePage(window.location.hash === '#/' || window.location.hash === '');
    };

    checkHomePage();
    window.addEventListener('hashchange', checkHomePage);
    return () => window.removeEventListener('hashchange', checkHomePage);
  }, []);

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    if (token && savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
        setIsLoggedIn(true);
      } catch (error) {
        // If parsing fails, clear localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        setIsLoggedIn(false);
      }
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        setUser(data.user);
        setIsLoggedIn(true);
        setShowLoginModal(false);
        setLoginData({ email: '', password: '' });
        alert('Login successful!');
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Network error. Please try again.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setIsLoggedIn(false);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (registerData.password !== registerData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (registerData.password.length < 6) {
      alert('Password must be at least 6 characters long!');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: registerData.name,
          email: registerData.email,
          password: registerData.password,
          rollNumber: registerData.rollNumber,
          department: registerData.department
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        // Update state immediately
        setUser(data.user);
        setIsLoggedIn(true);
        setShowRegisterModal(false);
        setRegisterData({ name: '', email: '', password: '', confirmPassword: '', rollNumber: '', department: 'Data Science' });
        
        // Show success message after a brief delay to ensure UI updates
        setTimeout(() => {
          alert('Registration successful! Welcome to Campus Utility!');
        }, 500);
      } else {
        alert(`Registration failed: ${data.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert(`Network error: ${error.message}. Please check if the server is running.`);
    }
  };

  const handleLoginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleBack = () => {
    window.history.back();
  };
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              {!isHomePage && (
                <button
                  onClick={handleBack}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 p-2 rounded-lg transition-colors mr-2"
                  title="Go Back"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
              <div className="bg-blue-900 p-2 rounded text-white font-bold text-xs leading-tight">
                SVCE<br/>PORTAL
              </div>
              <div>
                <h1 className="text-blue-900 font-bold text-lg hidden md:block">Sri Venkateswara College of Engineering</h1>
                <p className="text-xs text-slate-500 hidden md:block">Department of Data Science</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {NAVIGATION_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.path} 
                  className="text-slate-600 hover:text-blue-900 font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {isLoggedIn && user ? (
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm font-semibold text-slate-800">{user.name}</p>
                  <p className="text-xs text-slate-500">{user.email}</p>
                  {user.rollNumber && (
                    <p className="text-xs text-slate-400">{user.rollNumber} • {user.department}</p>
                  )}
                </div>
                <button 
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-4 py-1.5 rounded-md text-sm font-semibold hover:bg-red-700 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setShowLoginModal(true)}
                className="bg-blue-900 text-white px-4 py-1.5 rounded-md text-sm font-semibold hover:bg-blue-800 transition-colors"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h2 className="text-white font-bold text-2xl mb-2">Campus Utility</h2>
            <p className="text-slate-400">Connecting Students, Sharing Resources, Finding Homes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-t border-slate-800 pt-8">
            <div>
              <h3 className="text-white font-semibold mb-4 underline decoration-blue-500 underline-offset-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>Books</li>
                <li>Calculators</li>
                <li>Drafting Tools</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4 underline decoration-green-500 underline-offset-4">Accommodations</h3>
              <ul className="space-y-2 text-sm">
                <li>PGs near Campus</li>
                <li>Hostel Information</li>
                <li>Roommates</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4 underline decoration-yellow-500 underline-offset-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Safety Guidelines</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-500">
            © 2024 Sri Venkateswara College of Engineering - Final Year Project - Department of Data Science
          </p>
        </div>
      </footer>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-6 text-white">
              <h2 className="text-2xl font-bold text-center">Welcome Back</h2>
              <p className="text-blue-100 text-center text-sm mt-2">Sign in to Campus Utility</p>
            </div>
            <form onSubmit={handleLogin} className="p-6">
              <div className="mb-4">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="student@svce.ac.in"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
                <input 
                  type="password" 
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter your password"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-900 text-white py-3 px-4 rounded-lg hover:bg-blue-800 font-semibold transition-colors shadow-lg"
              >
                Sign In
              </button>
              <div className="flex items-center justify-between mt-4">
                <button 
                  type="button"
                  onClick={() => setShowLoginModal(false)}
                  className="text-slate-500 hover:text-slate-700 text-sm font-medium"
                >
                  Cancel
                </button>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Forgot password?
                </a>
              </div>
              <div className="text-center mt-4">
                <p className="text-slate-600 text-sm">
                  Don't have an account?{' '}
                  <button 
                    type="button"
                    onClick={() => {
                      setShowLoginModal(false);
                      setShowRegisterModal(true);
                    }}
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Register here
                  </button>
                </p>
              </div>
            </form>
            <div className="bg-slate-50 px-6 py-4 border-t">
              <p className="text-xs text-slate-500 text-center">
                Secure authentication with MongoDB database
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {showRegisterModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
            <div className="bg-gradient-to-r from-green-900 to-green-800 p-6 text-white">
              <h2 className="text-2xl font-bold text-center">Join Campus Utility</h2>
              <p className="text-green-100 text-center text-sm mt-2">Create your student account</p>
            </div>
            <form onSubmit={handleRegister} className="p-6">
              <div className="mb-4">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={registerData.name}
                  onChange={handleRegisterInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={registerData.email}
                  onChange={handleRegisterInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="student@svce.ac.in"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Roll Number</label>
                <input 
                  type="text" 
                  name="rollNumber"
                  value={registerData.rollNumber}
                  onChange={handleRegisterInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="21CSR001"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Department</label>
                <select 
                  name="department"
                  value={registerData.department}
                  onChange={handleRegisterInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                >
                  <option value="Data Science">Data Science</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Mechanical">Mechanical Engineering</option>
                  <option value="Electrical">Electrical Engineering</option>
                  <option value="Civil">Civil Engineering</option>
                  <option value="Chemical">Chemical Engineering</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
                <input 
                  type="password" 
                  name="password"
                  value={registerData.password}
                  onChange={handleRegisterInputChange}
                  required
                  minLength={6}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Minimum 6 characters"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Confirm Password</label>
                <input 
                  type="password" 
                  name="confirmPassword"
                  value={registerData.confirmPassword}
                  onChange={handleRegisterInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Re-enter your password"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-green-900 text-white py-3 px-4 rounded-lg hover:bg-green-800 font-semibold transition-colors shadow-lg"
              >
                Create Account
              </button>
              
              <div className="text-center mt-4">
                <button 
                  type="button"
                  onClick={() => {
                    setShowRegisterModal(false);
                    setShowLoginModal(true);
                  }}
                  className="text-green-600 hover:text-green-800 text-sm font-medium"
                >
                  Already have an account? Login here
                </button>
              </div>
            </form>
            <div className="bg-slate-50 px-6 py-4 border-t">
              <p className="text-xs text-slate-500 text-center">
                Your data is securely stored in MongoDB
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
