import React from 'react';
import TaskManager from '../components/TaskManager';
import Card from '../components/Card';

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Welcome — React Week 3</h1>

      <Card>
        <h2 className="text-lg font-semibold mb-2">Project Overview</h2>
        <p className="text-sm">This starter includes: routing, a Task Manager (add/toggle/delete/filter), and an API users page with search and pagination. Toggle theme using the button in the navbar.</p>
      </Card>

      <TaskManager />
    </div>
  );
}
