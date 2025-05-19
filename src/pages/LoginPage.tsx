import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:8081/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
  
      if (!response.ok) {
        const data = await response.json();
        alert(data.error || 'Login failed');
        return;
      }
  
      const data = await response.json();
      localStorage.setItem('userId', data.userId);
      navigate('/');
    } catch (err) {
      alert('An error occurred while logging in');
      console.error(err);
    }
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <CardContent>
          <h2 className="text-2xl font-bold mb-6 text-center text-shopee">Login to AsiaMart</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input 
                id="username" 
                type="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
                placeholder="johndoe" 
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                placeholder="Enter your password" 
              />
            </div>
            <Button type="submit" className="w-full bg-shopee text-white">
              Login
            </Button>
          </form>

          {/* Nút Quên mật khẩu */}
          <p className="mt-2 text-center text-sm">
            <button 
              onClick={() => navigate('/forgot-password')} 
              className="text-shopee hover:underline focus:outline-none"
              type="button"
            >
              Forgot Password?
            </button>
          </p>

          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account? <a href="/register" className="text-shopee hover:underline">Register</a>
          </p>
          <Button 
            onClick={handleGoHome} 
            className="w-full mt-4 bg-gray-200 text-gray-800 hover:bg-gray-300"
          >
            Back to Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
