"use client";
import { store } from '@/redux/store';
import React from 'react';
import { Provider } from 'react-redux';
import NavBar from '../../components/NavBar';

const App: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Provider store={store}>
            <NavBar setShowCart={() => {}} /> {/* Dummy function since showCart is not used */}
            {children}
        </Provider>
    );
};

export default App;
