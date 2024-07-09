// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { TextField, Button, Container, Typography } from '@mui/material'

// const UserForm: React.FC = () => {
//   const [name, setName] = useState('')
//   const [phone, setPhone] = useState('')
//   const [email, setEmail] = useState('')
//   const navigate = useNavigate()

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     if (name && phone && email) {
//       localStorage.setItem('userDetails', JSON.stringify({ name, phone, email }))
//       navigate('/second-page')
//     }
//   }

//   return (
//     <Container>
//       <Typography variant="h4" component="h1" gutterBottom>
//         User Details
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth margin="normal" required />
//         <TextField label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} fullWidth margin="normal" required />
//         <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth margin="normal" required />
//         <Button type="submit" variant="contained" color="primary">
//           Submit
//         </Button>
//       </form>
//     </Container>
//   )
// }

// export default UserForm



import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { TextField, Button, Container, Typography, Alert } from '@mui/material'

const UserForm: React.FC = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const message = location.state?.message

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && phone && email) {
      localStorage.setItem('userDetails', JSON.stringify({ name, phone, email }))
      navigate('/second-page')
    }
  }

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        User Details
      </Typography>
      {message && <Alert severity="warning">{message}</Alert>}
      <form onSubmit={handleSubmit}>
        <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth margin="normal" required />
        <TextField label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} fullWidth margin="normal" required />
        <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth margin="normal" required />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  )
}

export default UserForm
