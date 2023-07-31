import { Rate } from "antd";

export default function Rating({ value }) {
  return <Rate className="mx-auto" disabled defaultValue={value} />;
}
