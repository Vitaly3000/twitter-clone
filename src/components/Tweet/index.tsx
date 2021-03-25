import React from 'react';
import { Avatar, Grid, IconButton, Paper } from '@material-ui/core';

import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ShareOutlined';
import classNames from 'classnames';
import styles from './Tweet.module.css';
interface TweetProps {
  text: string;
  user: { nickname: string; userEmail: string; avatarUrl: string };
}

export const Tweet: React.FC<TweetProps> = ({
  text,
  user,
}: TweetProps): React.ReactElement => {
  return (
    <div>
      <Paper className={styles['tweet']} variant="outlined">
        <Grid container spacing={2}>
          <Grid item xs={1}>
            <Avatar
              className={styles['user__avatar']}
              alt="Аватар пользователя"
              src={user.avatarUrl}
            />
          </Grid>
          <Grid item xs={11}>
            <div className={styles['user__name']}>
              {user.nickname} <span>{user.userEmail + ' · '}1ч</span>
            </div>
            <p className={styles['tweet__text']}>{text}</p>
            <div className={styles['tweet__btns']}>
              <div
                className={classNames(
                  styles['tweet__btn'],
                  styles['tweet__btn--blue'],
                )}>
                <IconButton>
                  <CommentIcon className={styles['tweet__btn-icon']} />
                </IconButton>
                <span>1</span>
              </div>
              <div
                className={classNames(
                  styles['tweet__btn'],
                  styles['tweet__btn--green'],
                )}>
                <IconButton>
                  <RepeatIcon className={styles['tweet__btn-icon']} />
                </IconButton>
              </div>
              <div
                className={classNames(
                  styles['tweet__btn'],
                  styles['tweet__btn--red'],
                )}>
                <IconButton>
                  <LikeIcon className={styles['tweet__btn-icon']} />
                </IconButton>
              </div>
              <div
                className={classNames(
                  styles['tweet__btn'],
                  styles['tweet__btn--blue'],
                )}>
                <IconButton>
                  <ShareIcon className={styles['tweet__btn-icon']} />
                </IconButton>
              </div>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
