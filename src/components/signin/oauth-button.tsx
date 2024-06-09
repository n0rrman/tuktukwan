interface OAuthButtonProps {
  name: string;
  icon: React.ReactElement;
  borderColour: string;
  register: boolean;
  className: string;
  clicked: React.Dispatch<React.SetStateAction<boolean>>;
}

export function OAuthButton({
  name,
  icon,
  borderColour,
  register,
  className,
  clicked,
}: OAuthButtonProps) {
  return (
    <a
      onClick={() => clicked(true)}
      href={`${process.env.NEXT_PUBLIC_HOST_URL}/api/auth/${name}`}
      className={`group hover:text-white flex flex-row gap-1.5 items-center text-base sm:text-lg border-2 py-5 px-7 rounded w-full ${className} ${borderColour} transition`}
    >
      <span className="text-4xl sm:text-5xl pr-4">{icon}</span>
      {register ? <span>Register using</span> : <span>Sign in with</span>}
      {name}
    </a>
  );
}
