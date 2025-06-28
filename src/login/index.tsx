import { Input } from "@/components/ui/input";
import Logo from "../common/Logo";
import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <div>
      <Logo />
      <p className="font-medium text-xl pt-52 pb-10 text-center">
        Google 계정으로 로그인
      </p>
      <div className="w-md flex flex-col gap-2">
        <Input placeholder="이메일 주소" className="h-14" />
        <Input placeholder="비밀번호" className="h-14" />
        <Button className="h-14">로그인</Button>
      </div>
      <div>
        <p className="text-muted-foreground text-sm p-8 text-center">
          비밀번호를 잊으셨나요?
        </p>
        <p className="text-muted-foreground text-sm p-8 text-center">또는</p>
        <Button className="w-full bg-white h-14 flex gap-4 justify-center border border--muted-foreground">
          <img src="/google-search.png" className="w-6 h-6" />
          <span className="text-muted-foreground">Google로 계속</span>
        </Button>
      </div>
    </div>
  );
};

export default Login;
