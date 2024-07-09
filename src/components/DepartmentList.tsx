import React, { useState } from 'react'
import { List, ListItem, ListItemIcon, ListItemText, Collapse, Checkbox } from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'

interface Department {
  name: string
  subDepartments: string[]
}

const departments: Department[] = [
  { name: 'Customer_Service', subDepartments: ['Support', 'Customer_Success'] },
  { name: 'Department B', subDepartments: ['Graphic_Design', 'Product_Design', 'Web_design'] },
]

const DepartmentList: React.FC = () => {
  const [open, setOpen] = useState<{ [key: string]: boolean }>({})
  const [selected, setSelected] = useState<{ [key: string]: boolean }>({})

  const handleToggle = (name: string) => {
    setOpen((prevOpen) => ({ ...prevOpen, [name]: !prevOpen[name] }))
  }

  const handleSelect = (name: string) => {
    const isSelected = !selected[name]
    setSelected((prevSelected) => {
      const newSelected = { ...prevSelected, [name]: isSelected }
      departments.forEach((department) => {
        if (department.name === name) {
          department.subDepartments.forEach((sub) => {
            newSelected[sub] = isSelected
          })
        }
      })
      return newSelected
    })
  }

  const handleSelectSub = (subName: string, departmentName: string) => {
    const isSelected = !selected[subName]
    setSelected((prevSelected) => {
      const newSelected = { ...prevSelected, [subName]: isSelected }
      const allSubsSelected = departments
        .find((dep) => dep.name === departmentName)!
        .subDepartments.every((sub) => newSelected[sub])
      newSelected[departmentName] = allSubsSelected
      return newSelected
    })
  }

  return (
    <List>
      {departments.map((department) => (
        <React.Fragment key={department.name}>
          <ListItem button onClick={() => handleToggle(department.name)}>
            <ListItemIcon>
              <Checkbox
                checked={selected[department.name] || false}
                onClick={(e) => {
                  e.stopPropagation()
                  handleSelect(department.name)
                }}
              />
            </ListItemIcon>
            <ListItemText primary={department.name} />
            {open[department.name] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open[department.name]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {department.subDepartments.map((sub) => (
                <ListItem
                  key={sub}
                  button
                  onClick={() => handleSelectSub(sub, department.name)}
                  style={{ paddingLeft: '2rem' }}
                >
                  <ListItemIcon>
                    <Checkbox checked={selected[sub] || false} />
                  </ListItemIcon>
                  <ListItemText primary={sub} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  )
}

export default DepartmentList
