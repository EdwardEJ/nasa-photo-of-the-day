import React from 'react'
import { useSearch } from '../hooks/useSearch'
import { Button, Input, AppBar, FormLabel, Typography, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    '& div': {
      flexDirection: 'inherit',
    },
    '& h1': {
      textAlign: 'center',
      fontFamily: 'Helvetica',
    },
    '& label': {
      textAlign: 'center',
    },
    '& Input': {
      fontSize: '1.5rem',
      // height: '3rem',
    },
    '& Button': {
      fontSize: '2rem'
    },
    '@media (max-width:450px)': {
      '& h1': {
        fontSize: '3.2rem',
      },
      '& Button': {
        fontSize: '1.5rem'
      }
    },
  }
})

const initialValue = {
  searchDate: ''
}

const Searchbar = ({ onDate }) => {
  const classes = useStyles()
  const [values, handleChanges] = useSearch(initialValue)

  const handleSubmit = e => {
    e.preventDefault();
    onDate(values.searchDate)
  }

  return (
    <AppBar className={classes.root} position='static'>
      <Toolbar>
        <Typography variant='h1'>NASA Photo Of The Day</Typography>
        <FormLabel >
          <label htmlFor='searchDate'>
            <Input
              type='date'
              name='searchDate'
              onChange={handleChanges}
              value={values.searchDate || ''}
            />
            <Button onClick={handleSubmit}>Search This Date</Button>
          </label>
        </FormLabel>
      </Toolbar>
    </AppBar>
  )
}

export default Searchbar