import AuthOptions from "@/components/profile/auth-options";

export default function ProfilePage() {
  return (
    <div className="w-full flex flex-row gap-5">
      <div className="bg-slate-200 p-10 w-full">Profile page</div>
      <div className="bg-slate-200 p-10">
        <AuthOptions />
      </div>
    </div>
  );
}
