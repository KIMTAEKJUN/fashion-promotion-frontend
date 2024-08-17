import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      userName?: string | null;
      email?: string | null;
      profileImage?: string | null;
    };
    tokens: {
      accessToken: string;
      refreshToken: string;
      expiresIn: number;
    };
  }
}
