import { CircularProgress } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Tweet } from '../../../components/Tweet';
import {
  fetchTweetData,
  setTweetData,
} from '../../../store/ducks/tweet/actionCreators';
import {
  selectIsTweetLoading,
  selectTweetData,
} from '../../../store/ducks/tweet/selectors';

export const FullTweet: React.FC = (): React.ReactElement | null => {
  const params: { id: string } = useParams();
  const id = params.id;
  const tweetData = useSelector(selectTweetData);
  const isLoading = useSelector(selectIsTweetLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(fetchTweetData(id));
    }
    return () => {
      dispatch(setTweetData(undefined));
    };
  }, [dispatch, id]);
  if (isLoading) {
    return (
      <div
        style={{
          textAlign: 'center',
          marginTop: '30px',
          marginBottom: '30px',
        }}>
        <CircularProgress />
      </div>
    );
  }
  if (tweetData) {
    return <Tweet {...tweetData} />;
  }
  return null;
};
