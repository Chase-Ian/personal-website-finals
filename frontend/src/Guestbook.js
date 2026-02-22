import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const ADMIN_KEY = process.env.REACT_APP_ADMIN_SECRET_KEY;

const Guestbook = () => {
  const [entries, setEntries] = useState([]);
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const fetchEntries = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setEntries(response.data);
      setError(null);
    } catch (err) {
      setError("The server is waking up... please wait a moment.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, formData);
        setEditingId(null);
      } else {
        await axios.post(API_URL, formData);
      }
      setFormData({ name: '', message: '' });
      fetchEntries();
    } catch (err) {
      alert("Failed to save entry.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      try {
        await axios.delete(`${API_URL}/${id}`, {
          headers: { "X-Admin-Key": ADMIN_KEY }
        });
        fetchEntries();
      } catch (err) {
        alert("Unauthorized: You don't have permission to delete this.");
      }
    }
  };

  const startEdit = (entry) => {
    setEditingId(entry.id);
    setFormData({ name: entry.name, message: entry.message });
  };

  return (
    <section id="guestbook">
      <h2>Guestbook</h2>
      
      {/* FORM SECTION */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
        <input 
          type="text" 
          placeholder="> YOUR_NAME" // Thematic Placeholder
          className="pixel-input"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
        <textarea 
          placeholder="> LEAVE_A_MESSAGE..." // Thematic Placeholder
          value={formData.message}
          className="pixel-input"
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          required
          style={{ height: '100px' }}
        />
        <button type="submit" className="post-btn">
          {editingId ? "UPDATE_LOG" : "SIGN_GUESTBOOK"}
        </button>
        {editingId && (
          <button onClick={() => setEditingId(null)} className="post-btn" style={{ backgroundColor: '#666', marginTop: '10px' }}>
            CANCEL
          </button>
        )}
      </form>

      <hr />

      {/* ENTRIES SECTION */}
      {loading ? (
        <div className="card">
          <p className="loading-text">SYSTEM_BOOTING: Waking up server...</p>
        </div>
      ) : error ? (
        <p style={{ color: 'orange', fontFamily: "'Press Start 2P'", fontSize: '10px' }}>{error}</p>
      ) : (
        <div className="entries">
          {entries.length === 0 && <p>No entries yet. Be the first to log!</p>}
          {entries.map((entry) => (
            <div key={entry.id} className="entry-card">
              <div className="entry-header">
                {/* We apply the entry-user class here for the pixel font */}
                <span className="entry-user">{entry.name}</span>
              </div>
              <div className="entry-body">
                <p className="entry-text">{entry.message}</p>
              </div>
              
              {/* Admin Actions */}
              <div className="entry-actions">
                <button onClick={() => startEdit(entry)} className="admin-btn">EDIT</button>
                <button onClick={() => handleDelete(entry.id)} className="admin-btn delete">DELETE</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Guestbook;