// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { DataGrid, GridColDef } from '@mui/x-data-grid';
// import { Container, Typography } from '@mui/material'
// import DepartmentList from './DepartmentList'

// interface Post {
//   userId: number
//   id: number
//   title: string
//   body: string
// }

// const SecondPage: React.FC = () => {
//   const [posts, setPosts] = useState<Post[]>([])
//   const navigate = useNavigate()

//   useEffect(() => {
//     const userDetails = localStorage.getItem('userDetails')
//     if (!userDetails) {
//       navigate('/')
//       return
//     }

//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => response.json())
//       .then((data) => setPosts(data))
//   }, [navigate])

//   const columns: GridColDef[] = [
//     { field: 'userId', headerName: 'User ID', width: 150 },
//     { field: 'id', headerName: 'ID', width: 150 },
//     { field: 'title', headerName: 'Title', width: 300 },
//     { field: 'body', headerName: 'Body', width: 400 },
//   ]

//   return (
//     <Container>
//       <Typography variant="h4" component="h1" gutterBottom>
//         Posts
//       </Typography>
//       <div style={{ height: 400, width: '100%' }}>
//         <DataGrid rows={posts} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />
//       </div>
//       <DepartmentList />
//     </Container>
//   )
// }

// export default SecondPage;

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Container, Typography } from '@mui/material'
import DepartmentList from './DepartmentList'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

const SecondPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    const userDetails = localStorage.getItem('userDetails')
    if (!userDetails) {
      navigate('/', { state: { message: 'You must enter your details before accessing this page.' } })
      return
    }

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
  }, [navigate])

  const columns: GridColDef[] = [
    { field: 'userId', headerName: 'User ID', width: 150 },
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 400 },
  ]

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Posts
      </Typography>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={posts} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />
      </div>
      <DepartmentList />
    </Container>
  )
}

export default SecondPage;
