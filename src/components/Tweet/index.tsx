import React from 'react';
import { Avatar, IconButton, Paper } from '@material-ui/core';

import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ShareOutlined';
import classNames from 'classnames';
import styles from './Tweet.module.css';
import { Link } from 'react-router-dom';

interface TweetProps {
  _id: string;
  text: string;
  user: { username: string; fullname: string; avatarUrl: string };
}

export const Tweet: React.FC<TweetProps> = ({
  text,
  user,
  _id,
}: TweetProps): React.ReactElement => {
  return (
    <div>
      <Paper className={styles['tweet']} variant="outlined">
        <Avatar
          className={styles['user__avatar']}
          alt="Аватар пользователя"
          src={user.avatarUrl}
        />
        <div className="tweet__body">
          <Link className={styles['tweetWrapper']} to={`/home/tweet/${_id}`}>
            <div className={styles['user__name']}>
              {user.fullname} <span>@{user.username + ' · '}1ч</span>
            </div>
            <p className={styles['tweet__text']}>{text}</p>{' '}
          </Link>
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
        </div>
      </Paper>
    </div>
  );
};
