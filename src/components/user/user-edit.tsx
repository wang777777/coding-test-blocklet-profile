import { memo, useState } from 'react';
import { Button, Form, Input, Space } from 'antd';
import { userFieldList } from './constants';
import type { UserField } from './constants';
import type { UserProfile } from '../../types';

type UserEditProps = {
  userProfile: UserProfile;
  submitting: boolean;
  onSave: (user: UserProfile) => void;
  onChangeIsEdit: (isEdit: boolean) => void;
};

const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailLayout = {
  wrapperCol: {
    xs: { justify: 'center', span: 24 },
    sm: { offset: 8, span: 14 },
  },
};

function UserEdit(props: UserEditProps) {
  const [form] = Form.useForm();
  const { userProfile, submitting, onSave, onChangeIsEdit } = props;
  const [user] = useState<UserProfile>(userProfile);

  const onCancel = () => {
    form.resetFields();
    onChangeIsEdit(false);
  };

  return (
    <Form form={form} name="user_form" {...formItemLayout} initialValues={user} onFinish={onSave}>
      {userFieldList.map((field: UserField) => (
        <FormItem key={field.name} label={field.label} name={field.name} rules={field.rules}>
          <Input {...field.inputProps} />
        </FormItem>
      ))}
      <FormItem {...tailLayout} className="mb-0">
        <Space>
          <Button type="primary" htmlType="submit" loading={submitting}>
            保存
          </Button>
          <Button htmlType="button" onClick={onCancel} disabled={submitting || !userProfile.id}>
            取消
          </Button>
        </Space>
      </FormItem>
    </Form>
  );
}

export default memo(UserEdit);
