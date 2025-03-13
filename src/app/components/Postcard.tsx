import Avatar from "./Avatar";
import Badge from "./Badge";
import CommentBadge from "./CommentBadge";

interface PostcardProps {
  title: string;
  content: string;
  avatarImage: string;
  username: string;
  category: string;
  commentCount: number;
}

export default function Postcard(props: PostcardProps) {
  return (
    <div className="border-grey-100 border-b-1 bg-white p-5">
      <div className="mb-4 flex items-center gap-2">
        <Avatar src={props.avatarImage} alt="avatar" />
        <div className="text-grey-300">{props.username}</div>
      </div>
      <Badge className="mb-3" text={props.category} />
      <h1 className="text-text text-base font-semibold">{props.title}</h1>
      <p className="text-text line-clamp-2 text-xs">{props.content}</p>
      <CommentBadge className="mt-3" count={props.commentCount} />
    </div>
  );
}
