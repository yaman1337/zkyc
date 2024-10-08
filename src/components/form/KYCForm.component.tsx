import React from 'react';
import { Form, Input, Button, DatePicker, Select } from 'antd';
import { UserOutlined, IdcardOutlined, HomeOutlined } from '@ant-design/icons';
import type { FormInstance } from 'antd/es/form';


interface KYCFormProps {
  sendTransaction: () => {},
  isLoading: boolean
}

const { Option } = Select;

export const KYCForm: React.FC<KYCFormProps> = ({ sendTransaction, isLoading }) => {
  const formRef = React.createRef<FormInstance>();

  const onFinish = (values: any) => {
    console.log('Form values:', values);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Fill KYC Information</h2>

        <Form
          ref={formRef}
          name="fillKyc"
          onFinish={onFinish}
          layout="vertical"
          className="space-y-4"
        >
          <Form.Item
            name="fullName"
            label="Full Name"
            rules={[{ required: true, message: 'Please enter your full name' }]}
          >
            <Input 
              prefix={<UserOutlined className="text-gray-400" />} 
              placeholder="Enter your full name"
              className="py-2"
            />
          </Form.Item>

          <Form.Item
            name="dob"
            label="Date of Birth"
            rules={[{ required: true, message: 'Please select your date of birth' }]}
          >
            <DatePicker className="w-full" placeholder="Select your date of birth" />
          </Form.Item>

          <Form.Item
            name="nationality"
            label="Nationality"
            rules={[{ required: true, message: 'Please select your nationality' }]}
          >
            <Select placeholder="Select your nationality">
              <Option value="us">United States</Option>
              <Option value="uk">United Kingdom</Option>
              <Option value="in">India</Option>
              {/* Add more options as needed */}
            </Select>
          </Form.Item>

          <Form.Item
            name="governmentId"
            label="Government ID"
            rules={[{ required: true, message: 'Please enter your government ID number' }]}
          >
            <Input 
              prefix={<IdcardOutlined className="text-gray-400" />} 
              placeholder="Enter your government ID number"
              className="py-2"
            />
          </Form.Item>

          <Form.Item
            name="address"
            label="Residential Address"
            rules={[{ required: true, message: 'Please enter your residential address' }]}
          >
            <Input 
              prefix={<HomeOutlined className="text-gray-400" />} 
              placeholder="Enter your full address"
              className="py-2"
            />
          </Form.Item>

          <Form.Item>
            <Button 
              loading={isLoading}
              onClick={sendTransaction}
              type="primary" 
              htmlType="submit" 
              className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-blue-500 hover:to-purple-600 text-white font-semibold py-3 rounded-lg"
            >
              Submit KYC
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
