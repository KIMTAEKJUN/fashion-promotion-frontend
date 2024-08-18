import SocialLoginButton from "@/app/components/SocialLoginButton";

export default function SocialLoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <SocialLoginButton />
        </div>
      </div>
    </div>
  );
}

/* 
    (auth) 와 같은 괄호로 묶인 디렉토리 이름은 Next.js 13 이후 버전에서 도입된 "Route Groups" 기능의 일부이며,
    URL 구조에 영향을 주지 않고 파일과 폴더를 정리할 수 있게 해준다.

    이 괄호는 해당 폴더가 URL 경로의 일부가 아님을 나타내며,
    (auth)/login/page.tsx 는 /auth/login이 아니라 /login으로 라우팅된다.
*/
