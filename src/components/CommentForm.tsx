import { useState } from "react";
import Button from "./Button";
import TextAreaField from "./TextAreaField";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import useUserTokenStore from "@/store/userToken";

export default function FormComment(
  props: Readonly<{
    postId: number;
    comment: string;
    setComment: (comment: string) => void;
    onPost: () => void;
  }>,
) {
  const router = useRouter();
  const { token } = useUserTokenStore();
  const { comment, setComment, onPost } = props;
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleCancel = () => {
    setIsOpenForm(false);
    setIsOpenModal(false);
  };

  const handlePost = () => {
    setIsOpenForm(false);
    setIsOpenModal(false);
    onPost();
  };

  const handleAddComment = () => {
    setIsOpenForm(true);
    if (!token) {
      router.push(`/sign-in?redirect=/post/${props.postId}`);
    }
  };

  return (
    <>
      {isOpenForm ? null : (
        <div className="hidden lg:block">
          <AddCommentButton onClick={handleAddComment} />
        </div>
      )}
      {isOpenForm && (
        <div className="hidden lg:block">
          <TextAreaField
            placeholder="What’s on your mind..."
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
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
              disabled={!comment?.trim()}
            >
              Post
            </Button>
          </div>
        </div>
      )}

      {/* Modal Form */}
      <div className="block lg:hidden">
        <AddCommentButton onClick={handleAddComment} />
      </div>
      <Modal
        className="max-w-2xl"
        isOpen={isOpenModal}
        setIsOpen={setIsOpenModal}
      >
        <h1 className="text-text mb-4 text-xl">Add Comments</h1>
        <TextAreaField
          placeholder="What’s on your mind..."
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <div className="mt-6 flex flex-col gap-2">
          <Button
            className="h-10 w-full"
            color="success"
            variant="outline"
            rounded="sm"
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            className="h-10 w-full"
            color="success"
            variant="solid"
            rounded="sm"
            onClick={handlePost}
            disabled={!comment?.trim()}
          >
            Post
          </Button>
        </div>
      </Modal>
    </>
  );
}

function AddCommentButton(props: { onClick: () => void }) {
  return (
    <Button
      className="h-10 w-36"
      color="success"
      variant="outline"
      rounded="sm"
      onClick={props.onClick}
    >
      Add Comments
    </Button>
  );
}
