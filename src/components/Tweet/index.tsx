import React from 'react';
import { Avatar, IconButton, Paper, makeStyles } from '@material-ui/core';

import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ShareOutlined';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

interface TweetProps {
  _id: string;
  text: string;
  user: { username: string; fullname: string; avatarUrl: string };
}
const useStyles = makeStyles({
  tweet: {
    borderRight: 'none',
    borderLeft: 'none',
    borderBottom: 'none',
    borderRadius: '0',
    padding: '12px 16px 5px',
    display: 'flex',
    alignItems: 'flex-start',
    '&:hover': { background: 'rgb(245, 248, 250)', cursor: 'pointer' },
  },
  tweetWrapper: { textDecoration: 'none', color: 'inherit' },
  tweet__header: { display: 'flex', alignItems: 'top' },

  user__avatar: {
    height: '45px',
    width: '45px',
    marginRight: '10px',
    marginTop: '5px',
  },
  user__name: {
    '& b:hover': {
      textDecoration: 'underline',
    },
    '& span': {
      color: '#5b7083',
      fontWeight: 400,
      lineHeight: '20px',
      fontSize: '15px',
    },
    fontWeight: 700,
  },
  tweet__body: { maxWidth: '500px', width: '100%' },
  tweet__text: {
    lineHeight: '20px',
    fontSize: '15px',
    marginTop: '5px',
    marginBottom: '5px',
    width: '100%',
    wordWrap: 'break-word',
  },
  tweet__btns: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    marginLeft: '-13px',
    flexWrap: 'wrap',
  },
  tweet__btn: {
    fontSize: '13px',
    '& MuiIconButton-root': { marginRight: '5px', padding: '7px' },
  },

  'tweet__btn--blue': {
    '&:hover': {
      '& button': { backgroundColor: 'rgba(29, 161, 242, 0.2)' },
      '& span': { color: 'rgba(29, 161, 242, 1)' },
    },
  },
  'tweet__btn--green': {
    '&:hover': {
      '& button': { backgroundColor: 'rgba(23, 191, 99, 0.2)' },
      '& span': { color: 'rgba(23, 191, 99, 1)' },
    },
  },
  'tweet__btn--red': {
    '&:hover': {
      '& button': {
        backgroundColor: 'rgba(224, 36, 94, 0.2)',
      },
      '& span': { color: 'rgba(224, 36, 94, 1)' },
    },
  },
  'tweet__btn-icon': { fontSize: '18px' },
});

export const Tweet: React.FC<TweetProps> = ({
  text,
  user,
  _id,
}: TweetProps): React.ReactElement => {
  const classes = useStyles();
  return (
    <Paper className={classes['tweet']} variant="outlined">
      <Avatar
        className={classes['user__avatar']}
        alt="Аватар пользователя"
        src={user.avatarUrl}
      />
      <div className={classes.tweet__body}>
        <Link className={classes['tweetWrapper']} to={`/home/tweet/${_id}`}>
          <div className={classes['user__name']}>
            <b>{user.fullname}</b> <span>@{user.username + ' · '}1ч</span>
          </div>
          <p className={classes['tweet__text']}>{text}</p>{' '}
        </Link>
        <div className={classes['tweet__btns']}>
          <div className={classes['tweet__btn' && 'tweet__btn--blue']}>
            <IconButton>
              <CommentIcon className={classes['tweet__btn-icon']} />
            </IconButton>
            <span>1</span>
          </div>
          <div
            className={classnames([
              classes['tweet__btn'],
              classes['tweet__btn--green'],
            ])}>
            <IconButton>
              <RepeatIcon className={classes['tweet__btn-icon']} />
            </IconButton>
          </div>
          <div className={classes['tweet__btn' && 'tweet__btn--red']}>
            <IconButton>
              <LikeIcon className={classes['tweet__btn-icon']} />
            </IconButton>
          </div>
          <div className={classes['tweet__btn' && 'tweet__btn--blue']}>
            <IconButton>
              <ShareIcon className={classes['tweet__btn-icon']} />
            </IconButton>
          </div>
        </div>
      </div>
    </Paper>
  );
};
