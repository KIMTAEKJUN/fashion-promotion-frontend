import NextAuth from "next-auth";
import { authOptions } from "@/app/utils/auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

/*
    [...nextauth] 와 같이 대괄호로 묶인 디렉토리 이름은 Next.js의 동적 라우팅 기능을 활용한 특별한 형태의 폴더 이름이며,
    인증 관련 API 라우트를 처리하는 데 중요한 역할을 한다.

    /api/auth/signin, /api/auth/signout, /api/auth/login 등 NextAuth.js가 
    필요로 하는 모든 인증 관련 엔드포인트를 하나의 파일에서 처리할 수 있게 해줍니다.
*/
