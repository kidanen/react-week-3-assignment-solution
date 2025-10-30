
import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-gray-200 dark:border-gray-700 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-gray-600 dark:text-gray-400 flex justify-between">
        <div>© {new Date().getFullYear()} ReactWeek3</div>
        <div>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="mr-4">GitHub</a>
          <a href="#" className="mr-4">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
