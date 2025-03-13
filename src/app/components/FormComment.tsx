import { useState } from "react";
import Button from "./Button";
import TextAreaField from "./TextAreaField";

export default function FormComment() {
  const [isOpenForm, setIsOpenForm] = useState(false);

  const handleCancel = () => {
    setIsOpenForm(false);
  };

  const handlePost = () => {
    setIsOpenForm(false);
  };

  if (!isOpenForm) {
    return (
      <Button
        className="h-10 w-36"
        color="success"
        variant="outline"
        rounded="sm"
        onClick={() => {
          setIsOpenForm(true);
        }}
      >
        Add Comments
      </Button>
    );
  }
  return (
    <div className="hidden lg:block">
      <TextAreaField placeholder="What’s on your mind..." rows={4} />
      <div className="mt-4 flex items-center justify-end gap-2">
        <Button
          className="h-10 w-28"
          color="success"
          variant="outline"
          rounded="sm"
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button
          className="h-10 w-28"
          color="success"
          variant="solid"
          rounded="sm"
          onClick={handlePost}
        >
          Post
        </Button>
      </div>
    </div>
  );
}
