import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';

import styles from './Home.module.css';

import { Tweet } from '../../components/Tweet';
import { SideMenu } from '../../components/SideMenu/SideMenu';

import { AddTweetForm } from '../../components/AddTweetForm/AddTweetForm';

import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import {
  selectIsTweetsLoading,
  selectTweetsItems,
} from '../../store/ducks/tweets/selectors';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fetchTags } from '../../store/ducks/tags/actionCreators';
import { Tags } from '../../components/Tags/Tags';
import { Route } from 'react-router';
import { BackButtom } from '../../components/BackButtom/BackButtom';
import { FullTweet } from './components/FullTweet';
import { fetchTweetData } from '../../store/ducks/tweet/actionCreators';

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

export const Home: React.FC = (): React.ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweetsItems);
  const isTweetLoading = useSelector(selectIsTweetsLoading);
  React.useEffect(() => {
    dispatch(fetchTweets());
    dispatch(fetchTags());
    dispatch(fetchTweetData("6064d7f7893377145397d73c"));
  }, [dispatch]);
  return (
    <section>
      <div className={styles.container}>
        <SideMenu />

        <Paper className={styles['tweets__wrapper']} variant="outlined">
          <Paper className={styles['tweets__header']} variant="outlined">
            <Route path="/home/:any">
              <BackButtom />
            </Route>
            <Route path={['/home', '/home/search']} exact>
              <h1 className={styles['tweets__title']}>Твиты</h1>
            </Route>
            <Route path="/home/tweet">
              <h1 className={styles['tweets__title']}>Твитнуть</h1>
            </Route>
          </Paper>

          <Route path={['/home', '/home/search']} exact>
            <Paper>
              <AddTweetForm />
              <div className={classes.grayLine} />
            </Paper>
          </Route>

          <Route path="/home" exact>
            {isTweetLoading ? (
              <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <CircularProgress />
              </div>
            ) : (
              tweets.map((tweet) => <Tweet {...tweet} key={tweet._id} />)
            )}
          </Route>
          <Route path="/home/tweet/:id" exact component={FullTweet} />
          <div className={classes.grayLine} />
        </Paper>

        <div className={classes.rightSide}>
          <Tags />
        </div>
      </div>
    </section>
  );
};
