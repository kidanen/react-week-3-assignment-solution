import React, { useMemo, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Button from './Button';
import Card from './Card';

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [text, setText] = useState('');
  const [filter, setFilter] = useState('All');

  const addTask = () => {
    if (!text.trim()) return;
    const newTask = { id: Date.now(), text: text.trim(), completed: false };
    setTasks([...tasks, newTask]);
    setText('');
  };

  const toggle = (id) => {
    setTasks(tasks.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const remove = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filtered = useMemo(() => {
    if (filter === 'All') return tasks;
    if (filter === 'Active') return tasks.filter(t => !t.completed);
    return tasks.filter(t => t.completed);
  }, [tasks, filter]);

  return (
    <Card>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTask()}
            placeholder="Add task"
            className="flex-1 border rounded p-2 bg-white dark:bg-gray-900"
          />
          <Button onClick={addTask}>Add</Button>
        </div>

        <div className="flex gap-2">
          {['All', 'Active', 'Completed'].map(f => (
            <button
              key={f}
              className={`px-3 py-1 rounded ${filter === f ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700'}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <ul className="space-y-2">
          {filtered.length === 0 && <li className="text-sm text-gray-500">No tasks</li>}
          {filtered.map(task => (
            <li key={task.id} className="flex items-center justify-between p-2 rounded border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <input type="checkbox" checked={task.completed} onChange={() => toggle(task.id)} />
                <span className={task.completed ? 'line-through text-gray-500' : ''}>{task.text}</span>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => toggle(task.id)} className="text-sm px-2 py-1 border rounded">Toggle</button>
                <button onClick={() => remove(task.id)} className="text-sm px-2 py-1 border rounded text-red-600">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
