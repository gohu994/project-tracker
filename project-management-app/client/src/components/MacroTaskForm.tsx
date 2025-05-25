"use client";
import React, { useState } from 'react';

export default function MacroTaskForm({ onSubmit }: { onSubmit: (data: { title: string; status: string }) => void }) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('todo');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, status });
    setTitle('');
    setStatus('todo');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Ajouter une macro-tâche</h2>
      <div className="mb-2">
        <label className="block text-sm font-medium">Titre</label>
        <input
          type="text"
          className="w-full border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium">Statut</label>
        <select
          className="w-full border p-2 rounded"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="todo">À faire</option>
          <option value="in-progress">En cours</option>
          <option value="done">Terminé</option>
        </select>
      </div>
      <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded">
        Ajouter
      </button>
    </form>
  );
}
