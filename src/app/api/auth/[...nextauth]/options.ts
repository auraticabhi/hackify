import type { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions={
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username: ",
                    type: "text",
                    placeholder: "your_username"
                },
                password: {
                    label: "Password: ",
                    type: "password",
                    placeholder: "your_password"
                },
            },
            async authorize(credentials: { username: string; password: string; }){
                const user = {id: "77", name: "abhijeet", password: "hackify"}
                if(credentials?.username === user.name && credentials?.password === user.password){
                    return user
                }else{
                    return null
                }
            }
        })
    ],
    
}