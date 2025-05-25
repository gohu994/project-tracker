"use client";
import React, { useEffect, useState } from 'react';
import { getProjects, createProject } from '../../services/projectService';
import ProjectForm from '../../components/ProjectForm';
import Link from 'next/link';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  const handleCreate = async (data: any) => {
    const newProject = await createProject(data);
    setProjects([...projects, newProject]);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Projets</h1>
      <ProjectForm onSubmit={handleCreate} />
      <ul className="mt-4">
        {projects.map((p) => (
          <li key={p._id} className="mb-2">
            <Link href={`/projects/${p._id}`} className="text-blue-600 hover:underline">
              {p.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
