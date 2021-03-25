import React from 'react';
import {
  createStyles,
  Grid,
  InputBase,
  Paper,
  withStyles,
} from '@material-ui/core';

import { Container } from '@material-ui/core';
import styles from './Home.module.css';

import { Tweet } from '../../components/Tweet';
import { SideMenu } from '../../components/SideMenu/SideMenu';
export const Home: React.FC = (): React.ReactElement => {
  const SearchTextField = withStyles(() =>
    createStyles({
      input: {
        borderRadius: '30px',
        backgroundColor: '#ebeef0',
      },
    }),
  )(InputBase);

  return (
    <section>
      <Container className="wrapper" maxWidth="lg">
        <Grid container spacing={3}>
          <Grid className={styles['sidebar']} item xs={3}>
            <SideMenu />
          </Grid>
          <Grid item xs={6}>
            <Paper className={styles['tweets__wrapper']} variant="outlined">
              <Paper className={styles['tweets__header']} variant="outlined">
                <h1 className={styles['tweets__title']}>Главная</h1>
              </Paper>
              {[
                ...new Array(20).fill(
                  <Tweet
                    user={{
                      nickname: 'ww',
                      userEmail: 'dwd',
                      avatarUrl:
                        'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2133&q=80',
                    }}
                    text={
                      'Lodrem ipsum dolor sit amet, consectetur adipiscing elit. Etitae ligula aliquam lectus lobortis porta non a diam Proinfringilla augue '
                    }
                  />,
                ),
              ]}
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <SearchTextField placeholder="Поиск по твиттеру" fullWidth />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
