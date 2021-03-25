import React from 'react';
import { Button, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import TwitterIcon from '@material-ui/icons/Twitter';
import NotificationIcon from '@material-ui/icons/NotificationsNone';
import MessageIcon from '@material-ui/icons/MailOutline';
import BookmarkIcon from '@material-ui/icons/BookmarkBorder';
import ListIcon from '@material-ui/icons/ListAlt';
import UserIcon from '@material-ui/icons/PersonOutline';

import styles from './SideMenu.module.css';

interface SideMenuProps {}
export const SideMenu: React.FC<SideMenuProps> = (): React.ReactElement => {
  return (
    <ul style={{ padding: 0 }}>
      <li>
        <IconButton aria-label="delete" color="primary">
          <TwitterIcon style={{ fontSize: '30px' }} color="primary" />
        </IconButton>
      </li>
      <li>
        <IconButton className={styles['sidebar__btn']} aria-label="delete">
          <SearchIcon className={styles['sidebar__btn-icon']} />
          <span>Поиск</span>
        </IconButton>
      </li>
      <li>
        <IconButton className={styles['sidebar__btn']} aria-label="delete">
          <NotificationIcon className={styles['sidebar__btn-icon']} />
          <span>Уведомление</span>
        </IconButton>
      </li>
      <li>
        <IconButton className={styles['sidebar__btn']} aria-label="delete">
          <MessageIcon className={styles['sidebar__btn-icon']} />
          <span>Сообщения</span>
        </IconButton>
      </li>
      <li>
        <IconButton
          color="primary"
          className={styles['sidebar__btn']}
          aria-label="delete">
          <BookmarkIcon className={styles['sidebar__btn-icon']} />
          <span>Закладки</span>
        </IconButton>
      </li>
      <li>
        <IconButton className={styles['sidebar__btn']} aria-label="delete">
          <ListIcon className={styles['sidebar__btn-icon']} />
          <span>Список</span>
        </IconButton>
      </li>
      <li>
        <IconButton className={styles['sidebar__btn']} aria-label="delete">
          <UserIcon className={styles['sidebar__btn-icon']} />
          <span>Профиль</span>
        </IconButton>
      </li>
      <li>
        <Button
          style={{ padding: '15px', marginTop: '40px',width:'230px' }}
          fullWidth
          color="primary"
          variant="contained">
          Твитнуть
        </Button>
      </li>
    </ul>
  );
};
