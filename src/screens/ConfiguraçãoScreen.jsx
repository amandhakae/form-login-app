import React, { useState } from 'react';

const Settings = () => {
  const [username, setUsername] = useState('Jane Doe');
  const [email, setEmail] = useState('jane.doe@example.com');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleSaveProfile = () => {
    // Logica para salvar as alterações do perfil
    alert('Perfil atualizado!');
  };

  const handleChangePassword = () => {
    if (newPassword === confirmNewPassword) {
      // Logica para mudar a senha
      alert('Senha alterada com sucesso!');
    } else {
      alert('As senhas não coincidem!');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Configurações</h1>
      
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Atualizar Perfil</h2>
        <div style={styles.formGroup}>
          <label style={styles.label}>Nome:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>
        <button style={styles.buttonPrimary} onClick={handleSaveProfile}>
          Salvar Perfil
        </button>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Alterar Senha</h2>
        <div style={styles.formGroup}>
          <label style={styles.label}>Senha Atual:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Nova Senha:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Confirmar Nova Senha:</label>
          <input
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <button style={styles.buttonPrimary} onClick={handleChangePassword}>
          Alterar Senha
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '500px',
    margin: '0 auto',
    backgroundColor: '#f0f0f0',
    borderRadius: '15px',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
    height: '100vh',
    overflowY: 'scroll',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  section: {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    marginBottom: '20px',
  },
  sectionTitle: {
    marginBottom: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  buttonPrimary: {
    backgroundColor: '#a547bf',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    display: 'block',
    margin: '0 auto',
  },
};

export default Settings;
