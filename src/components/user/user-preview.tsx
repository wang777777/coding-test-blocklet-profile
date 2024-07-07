import { memo } from 'react';
import { Row, Col, theme, Button } from 'antd';
import { userFieldList } from './constants';
import type { UserProfile } from '../../types';

type UserPreviewProps = {
  userProfile: UserProfile;
  onChangeIsEdit: (isEdit: boolean) => void;
};

function UserPreview(props: UserPreviewProps) {
  const { token } = theme.useToken();
  const { userProfile, onChangeIsEdit } = props;

  return (
    <>
      {userFieldList.map((field) => (
        <Row key={field.name} className="mb-6 h-8">
          <Col span={8} style={{ color: token.Form?.labelColor }} className="flex justify-end items-center">
            {field.label}：
          </Col>
          <Col span={16} className="flex justify-start items-center">
            {userProfile[field.name]}
          </Col>
        </Row>
      ))}
      <Row>
        <Col offset={8}>
          <Button type="primary" htmlType="submit" onClick={() => onChangeIsEdit(true)}>
            编辑
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default memo(UserPreview);
