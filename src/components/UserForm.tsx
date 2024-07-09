import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TextField, Button, Container, Typography, Alert } from '@mui/material'

const UserForm: React.FC = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate inputs
    if (!name.trim()) {
      setError('Please enter your name.')
      return
    }
    if (!phone.trim() || !/^\d{10}$/.test(phone.trim())) {
      setError('Please enter a valid 10-digit phone number.')
      return
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.')
      return
    }

    // If all inputs are valid, proceed
    localStorage.setItem('userDetails', JSON.stringify({ name, phone, email }))
    navigate('/second-page')
  }

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        User Details
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  )
}

export default UserForm
