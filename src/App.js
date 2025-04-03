import React, { useState } from 'react';

// Données des questions par acte
const questionsByAct = {
  "Acte I": [
    { question: "Que semble penser le Comte de Don Rodrigue?", citation: true },
    { question: "Quels adjectifs pouvez-vous attribuer à l’Infante dans cette scène? Pourquoi?", citation: true },
    { question: "Pourquoi cette scène est-elle capitale?", citation: true },
    { question: "Comment Don Rodrigue réagit-il face à la demande de son père? Quelle est-elle?", citation: true },
    { question: "Quelle est la décision que prend Don Rodrigue? Auriez-vous fait pareil? Développez.", citation: true }
  ],
  "Acte II": [
    { question: "Que veut dire Don Rodrigue lorsqu’il dit : 'Je suis jeune, il est vrai, mais aux âmes bien nées / la valeur n’attend pas le nombre des années' ?", citation: true },
    { question: "Dans cette scène, l’infante décide d’aider Chimène alors qu’elle aime Rodrigue. Qu’auriez-vous fait à la place?", citation: true },
    { question: "Que confie l’infante à Leonor? Pensez-vous qu’elle soit réellement amie avec Chimène pour réagir ainsi?", citation: true },
    { question: "Le débat entre Rodrigue et Chimène a-t-il une issue? Que demande Chimène au roi?", citation: true }
  ],
  "Acte III": [
    { question: "Que signifie la phrase : 'Mon juge est mon amour, mon juge est ma Chimène' ?", citation: true },
    { question: "Que pensez-vous de Don Sanche? Est-il selon vous un opportuniste?", citation: true },
    { question: "Expliquez la phrase de Chimène : 'La moitié de ma vie a mis l’autre au tombeau'.", citation: true },
    { question: "Peut-elle continuer d’aimer Rodrigue après avoir dit : 'Va, je ne te hais point' ?", citation: true },
    { question: "Êtes-vous d’accord avec la réplique de Don Diègue : 'L’amour n’est qu’un plaisir et l’honneur un devoir.' ? Justifiez votre réponse.", citation: true }
  ],
  "Acte IV": [
    { question: "Que signifie la phrase de Chimène : 'Et son bras valeureux n’est funeste qu’à moi' ?", citation: true },
    { question: "L’infante supplie Chimène de ne pas demander la mort de Rodrigue. Que feriez-vous à sa place?", citation: true },
    { question: "Quel stratagème imagine le roi pour que Chimène abandonne son désir de vengeance?", citation: true },
    { question: "Quelle est la réaction de Chimène lorsqu’elle apprend que Rodrigue n’est pas mort?", citation: true },
    { question: "Que décide d’organiser le roi?", citation: true }
  ],
  "Acte V": [
    { question: "Qu’annonce Rodrigue à Chimène? Que lui demande-t-elle?", citation: true },
    { question: "Que réalise l’Infante au cours de son monologue?", citation: true },
    { question: "Que cherche à expliquer Don Sanche à Chimène? Comme elle ne le laisse pas parler, que croit-elle?", citation: true },
    { question: "Qui a gagné le duel? Qu’explique finalement le roi à Chimène?", citation: true },
    { question: "Résume cette scène en quelques lignes. Donne ton avis sur ce dénouement. A quoi d’autre aurais-tu pu t’attendre?", citation: true }
  ]
};

// Badges originales en style fantasy (premières versions générées)
function BadgeLameNaissante() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #f7d794, #f8c291)',
      boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
      border: '4px solid #e55039',
      margin: '10px'
    }}>
      <div style={{
        fontSize: '3rem',
        color: '#e55039',
        textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
      }}>
        ⚔️
      </div>
      <div style={{
        marginTop: '10px',
        fontWeight: 'bold',
        fontSize: '0.9rem',
        color: '#2d3436',
        textAlign: 'center'
      }}>
        Lame Naissante
      </div>
    </div>
  );
}

function BadgeEpeeEnFeu() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #f0932b, #eb4d4b)',
      boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
      border: '4px solid #e17055',
      margin: '10px'
    }}>
      <div style={{
        fontSize: '3rem',
        color: '#fff',
        textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
      }}>
        🔥
      </div>
      <div style={{
        marginTop: '10px',
        fontWeight: 'bold',
        fontSize: '0.9rem',
        color: '#fff',
        textAlign: 'center'
      }}>
        Épée en feu
      </div>
    </div>
  );
}

function BadgeCoeurDeLion() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #f6e58d, #f9ca24)',
      boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
      border: '4px solid #f9ca24',
      margin: '10px'
    }}>
      <div style={{
        fontSize: '3rem',
        color: '#e58e26',
        textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
      }}>
        🦁
      </div>
      <div style={{
        marginTop: '10px',
        fontWeight: 'bold',
        fontSize: '0.9rem',
        color: '#2d3436',
        textAlign: 'center'
      }}>
        Cœur de Lion
      </div>
    </div>
  );
}

function BadgeSceauRoyal() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #686de0, #4834d4)',
      boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
      border: '4px solid #30336b',
      margin: '10px'
    }}>
      <div style={{
        fontSize: '3rem',
        color: '#fff',
        textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
      }}>
        👑
      </div>
      <div style={{
        marginTop: '10px',
        fontWeight: 'bold',
        fontSize: '0.9rem',
        color: '#fff',
        textAlign: 'center'
      }}>
        Sceau Royal
      </div>
    </div>
  );
}

function BadgeGloireEternelle() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #ffda79, #ffbe76)',
      boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
      border: '4px solid #f6b93b',
      margin: '10px'
    }}>
      <div style={{
        fontSize: '3rem',
        color: '#f6b93b',
        textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
      }}>
        🌟
      </div>
      <div style={{
        marginTop: '10px',
        fontWeight: 'bold',
        fontSize: '0.9rem',
        color: '#2d3436',
        textAlign: 'center'
      }}>
        Gloire Éternelle
      </div>
    </div>
  );
}

// Mapping des badges par acte
const badgeComponents = {
  "Acte I": <BadgeLameNaissante />,
  "Acte II": <BadgeEpeeEnFeu />,
  "Acte III": <BadgeCoeurDeLion />,
  "Acte IV": <BadgeSceauRoyal />,
  "Acte V": <BadgeGloireEternelle />
};

// Fonction de correcteur automatique (exemple simple)
const autoCorrect = (text) => {
  let corrected = text.replace(/\s\s+/g, ' ');
  corrected = corrected.replace(/teh/g, 'the');
  return corrected;
};

// Composant Quiz (interface Étudiant)
function Quiz({ studentName, onCompleteAct }) {
  const actKeys = Object.keys(questionsByAct);
  const [currentActIndex, setCurrentActIndex] = useState(0);
  const currentAct = actKeys[currentActIndex];
  const questions = questionsByAct[currentAct];
  const [answers, setAnswers] = useState({});
  const [citations, setCitations] = useState({});

  const handleAnswerChange = (index, value) => {
    setAnswers({ ...answers, [index]: value });
  };
  const handleCitationChange = (index, value) => {
    setCitations({ ...citations, [index]: value });
  };

  const validateAct = () => {
    const allValid = questions.every((_, i) => (answers[i] || "").trim().length >= 100);
    if (!allValid) {
      alert("Toutes les réponses doivent faire au moins 100 caractères.");
      return;
    }
    const correctedAnswers = {};
    Object.entries(answers).forEach(([i, text]) => {
      correctedAnswers[i] = autoCorrect(text);
    });
    onCompleteAct(currentAct, { answers: correctedAnswers, citations });
    alert(`Vous avez terminé ${currentAct}. En attente de validation par l'admin pour débloquer le badge.`);
    if (currentActIndex < actKeys.length - 1) {
      setCurrentActIndex(currentActIndex + 1);
      setAnswers({});
      setCitations({});
    } else {
      alert("Vous avez terminé tous les actes !");
    }
  };

  return (
    <div>
      <h2>{currentAct}</h2>
      {questions.map((q, i) => (
        <div key={i} style={{ marginBottom: "20px" }}>
          <p style={{ fontWeight: "bold" }}>{q.question}</p>
          <textarea
            style={{ width: "100%", height: "100px", padding: "8px" }}
            value={answers[i] || ""}
            onChange={(e) => handleAnswerChange(i, e.target.value)}
            onPaste={(e) => e.preventDefault()}
          ></textarea>
          {q.citation && (
            <div style={{ marginTop: "10px" }}>
              <p style={{ fontWeight: "bold" }}>Citez le texte :</p>
              <textarea
                style={{ width: "100%", height: "80px", padding: "8px" }}
                placeholder="Citez le texte ici..."
                value={citations[i] || ""}
                onChange={(e) => handleCitationChange(i, e.target.value)}
                onPaste={(e) => e.preventDefault()}
              ></textarea>
            </div>
          )}
        </div>
      ))}
      <button onClick={validateAct} style={{ padding: "10px 20px", background: "#3498db", color: "#fff", border: "none", borderRadius: "5px" }}>
        Valider cet acte
      </button>
    </div>
  );
}

// Interface Admin pour consulter et valider les réponses par élève et par acte
function AdminPanel({ allResponses, validations, onValidateAct }) {
  return (
    <div>
      <h2>Interface Admin - Réponses des élèves</h2>
      {Object.keys(allResponses).length === 0 ? (
        <p>Aucune réponse enregistrée.</p>
      ) : (
        Object.entries(allResponses).map(([student, acts], idx) => (
          <div key={idx} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "20px" }}>
            <h3>{student}</h3>
            {Object.entries(acts).map(([act, data], j) => (
              <div key={j} style={{ marginBottom: "10px" }}>
                <h4>{act}</h4>
                {Object.entries(data.answers).map(([qIndex, answer]) => (
                  <div key={qIndex} style={{ marginBottom: "5px" }}>
                    <p><strong>Question {parseInt(qIndex) + 1} :</strong> {questionsByAct[act][qIndex].question}</p>
                    <p><strong>Réponse :</strong> {answer}</p>
                    {data.citations[qIndex] && <p><strong>Citation :</strong> {data.citations[qIndex]}</p>}
                  </div>
                ))}
                {validations[student] && validations[student].includes(act) ? (
                  <div style={{ marginTop: "5px", color: "green", fontWeight: "bold" }}>Acte validé - Badge débloqué</div>
                ) : (
                  <button onClick={() => onValidateAct(student, act)} style={{ padding: "5px 10px", background: "#e67e22", color: "#fff", border: "none", borderRadius: "5px", marginTop: "10px" }}>
                    Valider cet acte
                  </button>
                )}
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}

// Composant AdminLogin qui demande un mot de passe pour accéder à l'interface admin
function AdminLogin({ onLogin }) {
  const [password, setPassword] = useState("");
  const adminPassword = "admin123"; // Change ici le mot de passe admin si besoin

  const handleSubmit = () => {
    if (password === adminPassword) {
      onLogin();
    } else {
      alert("Mot de passe incorrect !");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Connexion Admin</h2>
      <input
        type="password"
        placeholder="Mot de passe admin"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: "8px", width: "300px" }}
      />
      <button onClick={handleSubmit} style={{ padding: "10px 20px", marginLeft: "10px", background: "#c0392b", color: "#fff", border: "none", borderRadius: "5px" }}>
        Se connecter
      </button>
    </div>
  );
}

// Composant principal App
function App() {
  const [studentName, setStudentName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [adminAuthenticated, setAdminAuthenticated] = useState(false);
  const [allResponses, setAllResponses] = useState({});
  // validations : objet de la forme { studentName: [liste des actes validés] }
  const [validations, setValidations] = useState({});
  const [view, setView] = useState("quiz"); // "quiz" ou "admin"

  const handleLogin = () => {
    if (studentName.trim() === "") {
      alert("Veuillez entrer votre nom et prénom.");
      return;
    }
    setLoggedIn(true);
  };

  const handleCompleteAct = (act, data) => {
    setAllResponses(prev => {
      const studentData = prev[studentName] || {};
      return { ...prev, [studentName]: { ...studentData, [act]: data } };
    });
  };

  const handleValidateAct = (student, act) => {
    setValidations(prev => {
      const current = prev[student] || [];
      if (!current.includes(act)) {
        return { ...prev, [student]: [...current, act] };
      }
      return prev;
    });
    alert(`L'acte ${act} de ${student} a été validé.`);
  };

  return (
    <div style={{ padding: "20px" }}>
      {!loggedIn ? (
        <div style={{ marginBottom: "20px" }}>
          <h2>Connexion Étudiant</h2>
          <input
            type="text"
            placeholder="Nom et Prénom"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            style={{ padding: "8px", width: "300px" }}
          />
          <button onClick={handleLogin} style={{ padding: "10px 20px", marginLeft: "10px", background: "#27ae60", color: "#fff", border: "none", borderRadius: "5px" }}>
            Se connecter
          </button>
        </div>
      ) : (
        <div>
          <div style={{ marginBottom: "20px" }}>
            <button onClick={() => setView("quiz")} style={{ padding: "8px 16px", marginRight: "10px" }}>Quiz</button>
            <button onClick={() => setView("admin")} style={{ padding: "8px 16px" }}>Admin Panel</button>
          </div>
          {view === "quiz" ? (
            <div>
              <Quiz studentName={studentName} onCompleteAct={handleCompleteAct} />
              <div style={{ marginTop: "30px" }}>
                <h3>Badges</h3>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {Object.keys(questionsByAct).map((act, idx) => (
                    <div key={idx}>
                      {validations[studentName] && validations[studentName].includes(act)
                        ? badgeComponents[act]
                        : (
                          <div style={{
                            width: "150px", height: "150px", borderRadius: "50%",
                            background: "#ccc", display: "flex", alignItems: "center", justifyContent: "center",
                            fontWeight: "bold", color: "#555"
                          }}>
                            {act}
                          </div>
                        )
                      }
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            !adminAuthenticated ? (
              <AdminLogin onLogin={() => setAdminAuthenticated(true)} />
            ) : (
              <AdminPanel allResponses={allResponses} validations={validations} onValidateAct={handleValidateAct} />
            )
          )}
        </div>
      )}
    </div>
  );
}

export default App;
