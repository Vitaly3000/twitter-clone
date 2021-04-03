import React from 'react';
import {
  Avatar,
  Button,
  Divider,
  makeStyles,
  Paper,
  InputAdornment,
} from '@material-ui/core';

import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';

import SearchIcon from '@material-ui/icons/Search';

import theme from '../../theme';

import { SearchTextField } from '../../components/SearchTextField/SearchTextField';

import {
  selectIsTagsLoaded,
  selectTagsItems,
} from '../../store/ducks/tags/selectors';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  rightSideBlock: {
    backgroundColor: '#F5F8FA',
    borderRadius: 15,
    marginTop: 20,
    padding: '13px 18px',
  },
  rightSideBlockHeader: {
    backgroundColor: 'transparent',
    borderTop: 0,
    borderBottom: 0,
    borderRight: 0,
    paddingBottom: 15,
    '& b': {
      fontSize: 20,
      fontWeight: 800,
    },
  },
  rightSideBlockItem: {
    cursor: 'pointer',
    fontWeight: 700,
    lineHeight: '20px',
    color: '#0f1419',
    fontSize: 15,
    paddingTop: 5,
    paddingBottom: 5,
    '& a': { textDecoration: 'none', color: 'inherit' },
    '&:hover': {
      backgroundColor: '#EDF3F6',
    },
    '& span': {
      fontWeight: 400,
      lineHeight: '16px',
      color: '#5b7083',
      fontSize: 13,
    },
  },
  rightSideBlockItemAvatar: {
    minWidth: 50,
  },
  rightSideBlockUser: {
    display: 'flex',
    paddingTop: 10,
    paddingBottom: 10,
  },
  rightSideBlockUserAvatar: {
    marginRight: 10,
  },
  rightSideBlockBtnFollow: {
    '& span': {
      color: theme.palette.primary.main,
      fontWeight: 700,
      marginLeft: 5,
    },
    marginLeft: 'auto',
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
export const Tags: React.FC<RightSideProps> = (): React.ReactElement | null => {
  const classes = useStyles();

  const items = useSelector(selectTagsItems);
  const isLoaded = useSelector(selectIsTagsLoaded);
  if (!isLoaded) {
    return null;
  }
  return (
    <>
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
      <Paper className={classes.rightSideBlock}>
        <Paper className={classes.rightSideBlockHeader}>
          <b>Актуальные темы</b>
        </Paper>
        <Divider />

        {items.map((obj) => (
          <React.Fragment key={obj._id}>
            <div className={classes.rightSideBlockItem}>
              <Link to={`/home/search?q=${obj.name}`}>
                <div>{obj.name}</div>
                <span>Твитов:{obj.count}</span>{' '}
              </Link>
            </div>

            <Divider />
          </React.Fragment>
        ))}
      </Paper>
      <Paper className={classes.rightSideBlock}>
        <Paper className={classes.rightSideBlockHeader}>
          <b>Кого читать</b>
        </Paper>
        <Divider />

        <div className={classes.rightSideBlockItem}>
          <div className={classes.rightSideBlockUser}>
            <Avatar
              className={classes.rightSideBlockUserAvatar}
              src="https://images.unsplash.com/photo-1568990545613-aa37e9353eb6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            />

            <div className="rightSideBlockUserName">
              <div>Alex</div>
              <span>@noName</span>
            </div>
            <Button
              className={classes.rightSideBlockBtnFollow}
              variant="outlined"
              color="primary">
              <PersonAddIcon />
              <span>Подписаться</span>
            </Button>
          </div>
        </div>
        <Divider />
      </Paper>
    </>
  );
};
