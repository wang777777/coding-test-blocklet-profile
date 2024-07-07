import type { Rule } from 'antd/lib/form';
import { UserProfile } from '../../types';

export type UserField = {
  label: string;
  name: keyof UserProfile;
  rules: Rule[];
  inputProps: { placeholder: string; maxLength?: number };
};

export const userFieldList: UserField[] = [
  {
    label: '用户名',
    name: 'username',
    rules: [{ required: true, message: '请输入用户名！' }],
    inputProps: { placeholder: '请输入用户名' },
  },
  {
    label: '邮箱',
    name: 'email',
    rules: [
      { required: true, message: '请输入邮箱！' },
      { type: 'email', message: '邮箱格式不正确！' },
    ],
    inputProps: { placeholder: '请输入邮箱' },
  },
  {
    label: '手机号',
    name: 'phone',
    rules: [
      { required: true, message: '请输入手机号！' },
      { pattern: /^1[3456789]\d{9}$/, message: '手机号格式不正确！' },
    ],
    inputProps: { placeholder: '请输入手机号', maxLength: 11 },
  },
];
