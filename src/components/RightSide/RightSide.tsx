import React from 'react';
import { InputAdornment, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { Tags } from './Tags/Tags';
import { Users } from './Users/Users';
import { SearchTextField } from '../SearchTextField/SearchTextField';
const useStyles = makeStyles({
  grayLine: {
    height: 12,
    backgroundColor: '#E6ECF0',
  },
  rightSide: {
    position: 'sticky',
    top: '5px',
    maxWidth: '350px',
    width: '100%',
    marginLeft: '15px',
  },

  '@media(max-width: 1000px)': {
    addForm: {
      display: 'none',
    },
    rightSide: {
      display: 'none',
    },
  },
});
interface RightSideProps {}
export const RightSide: React.FC<RightSideProps> =
  (): React.ReactElement | null => {
    const classes = useStyles();
    return (
      <div className={classes.rightSide}>
        <SearchTextField
          variant="outlined"
          placeholder="Поиск по Твиттеру"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          fullWidth
        />
        <Users />
        <Tags />
      </div>
    );
  };
