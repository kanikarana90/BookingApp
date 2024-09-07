import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  
  // Get the navigate function using useNavigate
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Redirect to dashboard after successful sign-in
      navigate('/hero');
    } catch (error) {
      setError(error.message); // Set error message if sign-in fails
    }
  };

  return (
    <div className="auth_back">
    <div className="signin-container">
      <h2>Sign In</h2>
      <form className="signin-form" onSubmit={signIn}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button className="signin-button" type="submit">Sign In</button>
      </form>
      <p className="signup-link">Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
    </div>
  );
};

export default SignIn;
