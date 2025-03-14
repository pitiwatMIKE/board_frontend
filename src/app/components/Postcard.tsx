import clsx from "clsx";
import { highlightText } from "../utils/highlightText";
import Avatar from "./Avatar";
import Badge from "./Badge";
import CommentBadge from "./CommentBadge";
import Image from "next/image";

interface PostcardProps {
  title: string;
  content: string;
  avatarImage: string;
  username: string;
  category: string;
  commentCount: number;
  search?: string;
  isShowAction?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function Postcard(props: PostcardProps) {
  return (
    <div className="border-grey-100 relative border-b-1 bg-white p-5">
      <div
        className={clsx(
          "absolute top-5 right-5 flex gap-3",
          !props.isShowAction && "hidden",
        )}
      >
        <Image
          className="cursor-pointer"
          src="/edit-pen-icon.svg"
          alt="edit"
          width={18}
          height={18}
          onClick={(event: React.MouseEvent) => {
            event.stopPropagation();
            props.onEdit?.();
          }}
        />
        <Image
          className="cursor-pointer"
          src="/trash.svg"
          alt="edit"
          width={18}
          height={18}
          onClick={(event: React.MouseEvent) => {
            event.stopPropagation();
            props.onDelete?.();
          }}
        />
      </div>

      <div className="mb-4 flex items-center gap-2">
        <Avatar src={props.avatarImage} alt="avatar" />
        <div className="text-grey-300">{props.username}</div>
      </div>
      <Badge className="mb-3" text={props.category} />
      <h1 className="text-text text-base font-semibold">
        {
          <span
            dangerouslySetInnerHTML={{
              __html: highlightText(props.title, props.search || ""),
            }}
          />
        }
      </h1>
      <p className="text-text line-clamp-2 text-xs">{props.content}</p>
      <CommentBadge className="mt-3" count={props.commentCount} />
    </div>
  );
}
