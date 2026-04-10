import { useState } from "react";
import { submitSurvey } from "./api/surveyApi";
import "./styles.css";
import AnalyticsPage from "./pages/AnalyticsPage.jsx";

import Header      from "./components/Header.jsx";
import Dashboard   from "./pages/Dashboard.jsx";
import SurveyPage1 from "./pages/SurveyPage1.jsx";
import SurveyPage2 from "./pages/SurveyPage2.jsx";
import SuccessPage from "./pages/SuccessPage.jsx";

const VIEWS = {
  DASHBOARD: "dashboard",
  PAGE1:     "page1",
  PAGE2:     "page2",
  SUCCESS:   "success",
  ANALYTICS: "analytics",
};

export default function App() {
  const [view,       setView]       = useState(VIEWS.DASHBOARD);
  const [surveys,    setSurveys]    = useState([]);
  const [form,       setForm]       = useState({});
  const [submitting, setSubmitting] = useState(false);

  const setField = (key, val) => setForm(f => ({ ...f, [key]: val }));

  const handleStart = () => {
    setForm({});
    setView(VIEWS.PAGE1);
  };

  const handleComplete = async () => {
    setSubmitting(true);
    try {
      const result = await submitSurvey(form);
      if (result.success) {
        const today = new Date().toLocaleDateString("en-PK", {
          day: "numeric", month: "short", year: "numeric",
        });
        setSurveys(prev => [
          {
            id:       Date.now(),
            category: form.respondentCategory || "—",
            area:     form.area               || "—",
            date:     today,
          },
          ...prev,
        ]);
        setView(VIEWS.SUCCESS);
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error! Is the API server running on port 8013?");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Header />

      {view === VIEWS.DASHBOARD && (
        <Dashboard onStart={handleStart} onAnalytics={() => setView(VIEWS.ANALYTICS)} />
      )}

      {view === VIEWS.PAGE1 && (
        <SurveyPage1
          form={form}
          onSet={setField}
          onNext={() => setView(VIEWS.PAGE2)}
          onBack={() => setView(VIEWS.DASHBOARD)}
        />
      )}

      {view === VIEWS.PAGE2 && (
        <SurveyPage2
          form={form}
          onSet={setField}
          onBack={() => setView(VIEWS.PAGE1)}
          onComplete={handleComplete}
          submitting={submitting}
        />
      )}

      {view === VIEWS.SUCCESS && (
        <SuccessPage
          totalCount={surveys.length}
          onAnother={handleStart}
          onDashboard={() => setView(VIEWS.DASHBOARD)}
        />
      )}

      {view === VIEWS.ANALYTICS && (
        <AnalyticsPage onBack={() => setView(VIEWS.DASHBOARD)} />
      )}
    </div>
  );
}