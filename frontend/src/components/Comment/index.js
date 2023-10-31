import { Avatar, Space } from "antd";
import React from "react";

const Comment = ({ comment }) => {
  const { author, image, body } = comment;
  return (
    <div
      key={1}
      className="flex gap-3 items-center mb-5 pb-3 border-b-2 border-[#0B666A]"
    >
      <Space wrap size={16}>
        <Avatar size={50} src={image} />
      </Space>
      <div>
        <p className="text-sm text-gray-400">{author}</p>
        <p className="text-md text-gray-700">{body}</p>
      </div>
    </div>
  );
};

export default Comment;
