import React from "react";
import { Dropdown, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

import Link from "next/link";

export function DashboardDropContentWithSignOut({ signOut, size = "large" }) {
  const items = [
    {
      label: (
        <Link href={"/dashboard"} className="text-md">
          Dashboard
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <button
          onClick={() => signOut()}
          className="bg-red-500 text-[#fff] hover:bg-[#2b6777] px-2 py-1 transition-transform active:scale-95 hover:opacity-75 rounded shadow"
        >
          Sign Out
        </button>
      ),
      key: "4",
    },
  ];

  return (
    <Dropdown
      menu={{
        items,
      }}
    >
      <span
        className="cursor-pointer hover:text-[#2b6777]"
        onClick={(e) => e.preventDefault()}
      >
        <Space>
          <Avatar
            size={size}
            icon={<UserOutlined />}
            className="cursor-pointer"
          />
        </Space>
      </span>
    </Dropdown>
  );
}

export function DashboardDropContentWithLogout({ logout }) {
  const items = [
    {
      label: (
        <Link className="text-md" href={"/dashboard"}>
          Dashboard
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <button
          onClick={() => logout()}
          className="bg-red-500 text-[#fff] hover:bg-[#2b6777] px-2 py-1 transition-transform active:scale-95 hover:opacity-75 rounded shadow"
        >
          Sign Out
        </button>
      ),
      key: "4",
    },
  ];

  return (
    <Dropdown
      menu={{
        items,
      }}
    >
      <a
        className="cursor-pointer hover:text-[#2b6777]"
        onClick={(e) => e.preventDefault()}
      >
        <Space>
          <Avatar
            size="large"
            icon={<UserOutlined />}
            className="cursor-pointer"
          />
        </Space>
      </a>
    </Dropdown>
  );
}
