import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import Container from '../container/Container';

function Footer() {
    return (
        <footer className="mt-auto py-6 px-16 bg-gray-800 flex items-center justify-between text-white">
            <p>Copyright 2023, All rights reserved.</p>
            <p>Build with React.js and Appwrite.</p>
        </footer>
    );
}

export default Footer;
