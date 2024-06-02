import Link from "next/link";

interface OAuthButtonProps {
  name: string;
  icon: React.ReactElement;
  borderColour: string;
  register: boolean;
  className?: string;
}

export function OAuthButton({
  name,
  icon,
  borderColour,
  register,
  className,
}: OAuthButtonProps) {
  return (
    <Link
      href={`/api/auth/${name}`}
      prefetch={false}
      className={`group hover:text-white flex flex-row gap-1.5 items-center text-lg border-2 py-5 px-7 rounded w-full ${className} ${borderColour} transition`}
    >
      <span className="text-5xl pr-4">{icon}</span>
      {register ? <span>Register using</span> : <span>Sign in with</span>}
      {name}
    </Link>
  );
}
