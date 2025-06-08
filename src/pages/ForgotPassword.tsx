import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect back to login page
    navigate('/login');
  }, [navigate]);

  return null;
};

export default ForgotPassword; 