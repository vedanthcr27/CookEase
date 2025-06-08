import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecipeProvider } from './context/RecipeContext';
import { UserProvider } from './context/UserContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import RecipePage from './pages/RecipePage';
import SavedRecipes from './pages/SavedRecipes';
import AboutPage from './pages/AboutPage';
import Profile from './pages/Profile';
import SearchByIngredient from './pages/SearchByIngredient';
import Recipes from './pages/Recipes';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <UserProvider>
          <RecipeProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipe/:id" element={<RecipePage />} />
                <Route path="/saved-recipes" element={<SavedRecipes />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/search" element={<SearchByIngredient />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
              </Routes>
            </Layout>
          </RecipeProvider>
        </UserProvider>
      </Router>
    </AuthProvider>
  );
};

export default App;