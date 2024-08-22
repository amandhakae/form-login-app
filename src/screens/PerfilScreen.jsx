import React from 'react';
import { FaCog, FaArrowLeft } from 'react-icons/fa'; // Importando ícones de engrenagem e seta

const Profile = () => {
  return (
    <div style={styles.container}>
      <div style={styles.profileHeader}>
        <div style={styles.headerBar}>
          <button style={styles.backButton} onClick={() => alert('Voltar para Home')}>
            <FaArrowLeft size={20} />
          </button>
          <button style={styles.settingsButton} onClick={() => alert('Abrir configurações')}>
            <FaCog size={20} />
          </button>
        </div>
        <img
          src="https://via.placeholder.com/150/FFC0CB/000000?text=Jane+Doe"
          alt="Profile"
          style={styles.profileImage}
        />
        <h2 style={styles.username}>Jane Doe</h2>
        <p style={styles.bio}>UX/UI Designer | Traveler | Avid Reader</p>
      </div>
      <div style={styles.statsContainer}>
        <div style={styles.statItem}>
          <h4 style={styles.statNumber}>256</h4>
          <p style={styles.statLabel}>Posts</p>
        </div>
        <div style={styles.statItem}>
          <h4 style={styles.statNumber}>1.2k</h4>
          <p style={styles.statLabel}>Followers</p>
        </div>
        <div style={styles.statItem}>
          <h4 style={styles.statNumber}>325</h4>
          <p style={styles.statLabel}>Following</p>
        </div>
      </div>
      <div style={styles.buttonsContainer}>
        <button style={styles.buttonPrimary}>Follow</button>
        <button style={styles.buttonSecondary}>Message</button>
      </div>
      <div style={styles.infoSection}>
        <h3 style={styles.sectionTitle}>About Me</h3>
        <p style={styles.infoText}>
          I'm a creative UX/UI Designer with 5+ years of experience in designing
          user-friendly interfaces for web and mobile applications. I'm
          passionate about crafting intuitive and delightful user experiences.
          In my free time, I love to travel and explore new cultures, as well as
          get lost in a good book.
        </p>
      </div>
      <div style={styles.gallerySection}>
        <h3 style={styles.sectionTitle}>Recent Photos</h3>
        <div style={styles.gallery}>
          <img src="https://via.placeholder.com/100" alt="Gallery1" style={styles.galleryImage} />
          <img src="https://via.placeholder.com/100" alt="Gallery2" style={styles.galleryImage} />
          <img src="https://via.placeholder.com/100" alt="Gallery3" style={styles.galleryImage} />
        </div>
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
    position: 'relative',
  },
  profileHeader: {
    textAlign: 'center',
    marginBottom: '20px',
    position: 'relative', // Para a barra de cabeçalho ficar em cima da imagem
  },
  headerBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: '10px',
    left: '0',
    right: '0',
    padding: '0 20px',
    zIndex: 1,
  },
  backButton: {
    backgroundColor: '#fff', // Cor de fundo branca
    color: '#a547bf', // Cor da seta
    border: 'none',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '20px',
    boxShadow: '0 0 5px rgba(0,0,0,0.2)',
  },
  settingsButton: {
    backgroundColor: '#fff', // Cor de fundo branca
    color: '#a547bf', // Cor do ícone
    border: 'none',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '20px',
    boxShadow: '0 0 5px rgba(0,0,0,0.2)',
  },
  profileImage: {
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    marginTop: '50px', // Ajusta a posição da imagem para baixo
  },
  username: {
    margin: '15px 0 5px 0',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  bio: {
    color: '#888',
    fontStyle: 'italic',
    marginBottom: '20px',
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
  },
  statItem: {
    textAlign: 'center',
  },
  statNumber: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#666',
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  buttonPrimary: {
    backgroundColor: '#a547bf', // Cor atualizada
    color: '#fff',
    border: 'none',
    padding: '10px 30px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  buttonSecondary: {
    backgroundColor: '#a547bf', // Cor atualizada
    color: '#fff',
    border: 'none',
    padding: '10px 30px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  infoSection: {
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
  infoText: {
    color: '#333',
    lineHeight: '1.6',
  },
  gallerySection: {
    marginBottom: '20px',
  },
  gallery: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  galleryImage: {
    width: '100px',
    height: '100px',
    borderRadius: '10px',
    objectFit: 'cover',
  },
};

export default Profile;
