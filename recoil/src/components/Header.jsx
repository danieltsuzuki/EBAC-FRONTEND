import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="app-header">
      <div className="header-badge">
        <Sparkles size={14} className="badge-icon" />
        <span>Gerenciamento Global com Recoil</span>
      </div>
      <div className="header-title-container">
        <div className="logo-icon">
          <CheckCircle2 size={32} />
        </div>
        <div>
          <h1 className="header-title">TaskFlow</h1>
          <p className="header-subtitle">
            Organize suas tarefas diárias com a agilidade dos átomos e seletores Recoil
          </p>
        </div>
      </div>
    </header>
  );
}
