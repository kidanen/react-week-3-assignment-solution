import React, { useEffect, useState, useMemo } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const perPage = 6;

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => setError(err.message || 'Error'))
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    return users.filter(u => {
      const q = query.trim().toLowerCase();
      if (!q) return true;
      return u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || u.username.toLowerCase().includes(q);
    });
  }, [users, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const current = filtered.slice((page - 1) * perPage, page * perPage);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [totalPages, page]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Users (JSONPlaceholder)</h1>

      <Card>
        <div className="flex gap-2 mb-4">
          <input className="flex-1 p-2 border rounded" placeholder="Search by name, email, username" value={query} onChange={(e) => { setQuery(e.target.value); setPage(1); }} />
        </div>

        {loading && <div className="py-6 text-center">Loading...</div>}
        {error && <div className="py-6 text-center text-red-500">Error: {error}</div>}

        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {current.map(u => (
                <div key={u.id} className="p-4 border rounded bg-white dark:bg-gray-800 dark:border-gray-700">
                  <h3 className="font-semibold">{u.name}</h3>
                  <p className="text-sm">{u.email}</p>
                  <p className="text-xs text-gray-500">{u.company?.name}</p>
                  <div className="mt-2">
                    <a href={`mailto:${u.email}`} className="text-sm underline">Send email</a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm">Showing {filtered.length} result(s)</div>
              <div className="flex items-center gap-2">
                <Button variant="secondary" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page <= 1}>Prev</Button>
                <div>Page {page} / {totalPages}</div>
                <Button variant="secondary" onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page >= totalPages}>Next</Button>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}
