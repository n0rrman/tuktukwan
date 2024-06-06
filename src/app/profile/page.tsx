import AuthOptions from "@/components/profile/auth-options";

export default function ProfilePage() {
  return (
    <div className="w-full flex flex-row gap-5">
      <div className="bg-slate-200 p-10">
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="rounded-full w-32 h-32 bg-slate-400"></div>
          <div>lotrguy</div>
          <div className="flex flex-row w-max gap-1">
            <div>Peter Jackson</div>
            <div>edit</div>
          </div>
          <div className="flex flex-row w-max gap-1">
            <div>pj@isengard.com</div>
            <div>edit</div>
          </div>
        </div>
      </div>
      <div className="bg-slate-200 p-10 w-full">
        delete account, member since, streak, follows, followed by
      </div>
      <div className="bg-slate-200 p-6">
        <div className="">Linked accounts</div>
        <AuthOptions />
        <div>unlink account</div>
        <div>link account</div>
      </div>
    </div>
  );
}
