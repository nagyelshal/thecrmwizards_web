import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { ContactPage } from './pages/ContactPage';
import { LeadershipPage } from './pages/LeadershipPage';
import { InsightsPage } from './pages/InsightsPage';
import { SalesforceArchitecturePage } from './pages/services/SalesforceArchitecturePage';
import { AIReceptionistPage } from './pages/services/AIReceptionistPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/case-studies" element={<CaseStudiesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/leadership" element={<LeadershipPage />} />
      <Route path="/insights" element={<InsightsPage />} />
      <Route path="/services/salesforce-architecture" element={<SalesforceArchitecturePage />} />
      <Route path="/services/ai-receptionist" element={<AIReceptionistPage />} />
    </Routes>
  )
}

export default App
