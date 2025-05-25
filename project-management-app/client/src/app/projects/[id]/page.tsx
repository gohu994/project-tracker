"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getProjectById } from '../../../services/projectService';
import PhaseForm from '../../../components/PhaseForm';
import MacroTaskForm from '../../../components/MacroTaskForm';

export default function ProjectDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    if (id) getProjectById(id).then(setProject);
  }, [id]);

  const handleAddPhase = (phaseData: any) => {
    // Implémenter l'ajout de phase via l'API
  };

  const handleAddMacroTask = (phaseId: string, taskData: any) => {
    // Implémenter l'ajout de macro-tâche via l'API
  };

  if (!project) return <div>Chargement...</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
      <p className="mb-4">{project.description}</p>

      <PhaseForm onSubmit={handleAddPhase} />

      {project.phases?.map((phase: any) => (
        <div key={phase._id} className="mt-6">
          <h3 className="text-xl font-semibold">{phase.title}</h3>
          <MacroTaskForm onSubmit={(taskData) => handleAddMacroTask(phase._id, taskData)} />
          <ul className="mt-2">
            {phase.macroTasks?.map((task: any) => (
              <li key={task._id} className="ml-4">
                - {task.title} ({task.status})
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
