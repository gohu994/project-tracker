"use client";
import React, { useState } from 'react';

export default function PhaseForm({ onSubmit }: { onSubmit: (data: { title: string }) => void }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Ajouter une phase</h2>
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
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Ajouter
      </button>
    </form>
  );
}
