import React from 'react';
import {
  Avatar,
  Button,
  Divider,
  makeStyles,
  Paper,
  InputAdornment,
} from '@material-ui/core';

import styles from './Home.module.css';

import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';

import SearchIcon from '@material-ui/icons/Search';

import { Tweet } from '../../components/Tweet';
import { SideMenu } from '../../components/SideMenu/SideMenu';
import theme from '../../theme';
import { AddTweetForm } from '../../components/AddTweetForm/AddTweetForm';
import { SearchTextField } from '../../components/SearchTextField/SearchTextField';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import {
  selectIsTweetsLoading,
  selectTweetsItems,
} from '../../store/ducks/tweets/selectors';
import CircularProgress from '@material-ui/core/CircularProgress';

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

export const Home: React.FC = (): React.ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweetsItems);
  const isTweetLoading = useSelector(selectIsTweetsLoading);
  React.useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);
  return (
    <section>
      <div className={styles.container}>
        <SideMenu />

        <Paper className={styles['tweets__wrapper']} variant="outlined">
          <Paper className={styles['tweets__header']} variant="outlined">
            <h1 className={styles['tweets__title']}>Главная</h1>
          </Paper>
          <Paper>
            <AddTweetForm />
            <div className={classes.grayLine} />
          </Paper>

          {isTweetLoading ? (
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <CircularProgress />
            </div>
          ) : (
            tweets.map((tweet) => (
              <Tweet key={tweet._id} user={tweet.user} text={tweet.text} />
            ))
          )}
          <div className={classes.grayLine} />
        </Paper>

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
          <Paper className={classes.rightSideBlock}>
            <Paper className={classes.rightSideBlockHeader}>
              <b>Актуальные темы</b>
            </Paper>
            <Divider />

            <div className={classes.rightSideBlockItem}>
              <div>Cанкт-Петербур</div>
              <span>Твитов 1,723</span>
            </div>
            <Divider />
            <div className={classes.rightSideBlockItem}>
              <div>Беларусь</div>
              <span>Твитов 1,723</span>
            </div>
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
        </div>
      </div>
    </section>
  );
};
