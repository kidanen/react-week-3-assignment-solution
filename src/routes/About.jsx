import React from 'react';
import Card from '../components/Card';

export default function About() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">About this Starter</h1>
      <Card>
        <p>This project demonstrates:</p>
        <ul className="list-disc list-inside">
          <li>Vite + React setup</li>
          <li>Tailwind CSS with dark mode</li>
          <li>React Router routing</li>
          <li>Reusable components (Button, Card, Navbar, Footer)</li>
          <li>State management with hooks and localStorage</li>
          <li>API fetch with loading/error and pagination/search</li>
        </ul>
      </Card>
    </div>
  );
}
