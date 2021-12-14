import React from "react";
import { Form, TextArea, Button } from "semantic-ui-react";

const EditPost = () => {
  return (
    <Form className="add-post-input">
      <Form.Field>
        <input placeholder="Title" name="title" type="text" />
      </Form.Field>
      <Form.Field>
        <input
          placeholder="Give a short description"
          name="description"
          type="text"
        />
      </Form.Field>
      <Form.Field>
        <TextArea
          rows={2}
          name="text_content"
          placeholder="Tell us your story"
          style={{ minHeight: 100 }}
        />
      </Form.Field>

      <Button primary style={{ marginTop: "10px" }}>
        Add Post
      </Button>
    </Form>
  );
};
export default EditPost;
