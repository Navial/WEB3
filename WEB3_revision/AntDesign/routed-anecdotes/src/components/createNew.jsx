/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Form } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

const CreateNew = (props) => {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [info, setInfo] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    props.addNew({
      content,
      author,
      info,
      votes: 0,
    });
    props.setNotification(`a new anecdote ${content} created!`);
    navigate("/");
    setTimeout(() => {
      props.setNotification("");
    }, 5000);
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <Form onFinish={handleSubmit}>
        {/* <div>
          <Input
            placeholder="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div> */}
        {/* <div> */}

        <Form.Item
          label="Content"
          name="content"
          rules={[{ required: true, message: "Please input some content !" }]}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Author"
          name="author"
          rules={[{ required: true, message: "Please input the author !" }]}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <Input />
        </Form.Item>
        {/* <Input
            placeholder="author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <br/> */}
        <Form.Item
          label="Info"
          name="info"
          value={info}
          onChange={(e) => setInfo(e.target.value)}
        >
          <Input />
        </Form.Item>
        {/* <div>
          <Input
            placeholder="info"
            name="info"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          />
        </div> */}
        <br />
        <Button type="primary" htmlType="submit">
          <PlusCircleOutlined />
          Create
        </Button>
      </Form>
    </div>
  );
};

export default CreateNew;
