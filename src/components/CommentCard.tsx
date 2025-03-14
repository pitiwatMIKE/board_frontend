import Avatar from "./Avatar";

interface CommentCardProps {
  username: string;
  avatar: string;
  date: string;
  comment: string;
}

export default function CommentCard(props: CommentCardProps) {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2">
        <Avatar src={props.avatar} alt="avatar" className="!h-10 !w-10" />
        <div className="test text-text text-sm">{props.username}</div>
        <div className="text-grey-300 text-xs">{props.date}</div>
      </div>
      <p className="text-text pl-12 text-xs">{props.comment}</p>
    </div>
  );
}
