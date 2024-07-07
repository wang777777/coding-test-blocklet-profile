import { useCallback, useEffect, useState } from 'react';
import { Card, theme } from 'antd';
import UserEdit from '../components/user/user-edit';
import UserPreview from '../components/user/user-preview';
import type { UserProfile } from '../types';
import axios from '../libs/api';

import './home.css';

function Home() {
  const { token } = theme.useToken();
  const [userProfile, setUserProfile] = useState<UserProfile>({ username: '', email: '', phone: '' });
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const getUser = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get('/api/user-profile');
      if (!res.data) {
        setIsEdit(true);
        return;
      }

      setUserProfile(res.data);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);

  const onSave = async (userInfo: UserProfile) => {
    setSubmitting(true);
    try {
      if (userProfile.id) {
        await axios.put(`/api/user-profile/${userProfile.id}`, userInfo);
        setIsEdit(false);
        setUserProfile({ ...userProfile, ...userInfo });
        return;
      }

      const res = await axios.post('/api/user-profile', userInfo);
      setIsEdit(false);
      setUserProfile(res.data);
    } finally {
      setSubmitting(false);
    }
  };

  const onChangeIsEdit = (edit: boolean) => {
    setIsEdit(edit);
  };

  return (
    <Card
      className="w-72"
      bordered={false}
      title="用户信息"
      styles={{ header: { color: token.colorPrimary } }}
      loading={loading}>
      {isEdit ? (
        <UserEdit userProfile={userProfile} submitting={submitting} onSave={onSave} onChangeIsEdit={onChangeIsEdit} />
      ) : (
        <UserPreview userProfile={userProfile} onChangeIsEdit={onChangeIsEdit} />
      )}
    </Card>
  );
}

export default Home;
