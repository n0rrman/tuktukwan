"use server";

import { checkUser } from "@/services/api/user-server";
import { z } from "zod";

const linkAccountSchema = z.object({
    username: z.string()
        .min(3, { message: " is too short."})
        .max(32, { message : " is too long."}),
    email: z.string()
        .email({ message: " is not valid."}),
});

interface LinkAccountState {
    errors: {
        username?: string[];
        email?: string[];
    }
    success?: boolean;
    payload?: { username: string; email:string; };
}

export async function linkAccount(formState: LinkAccountState, formData: FormData): Promise<LinkAccountState> {
    const result = linkAccountSchema.safeParse({
        username: formData.get("username"),
        email: formData.get("email"),
    });
    
    let state: LinkAccountState = { errors: {}, success: true }
    if (!result.success) {
        state.errors = result.error.flatten().fieldErrors;
        state.success = false;
    }

    // Check registered
    if (state.success) {
        const registeredUsers = await checkUser(formData.get("username")!.toString(), formData.get("email")!.toString())
        
        if (!registeredUsers.username) {
            state.errors = {...state.errors, username: [" does not exist."]}
            state.success = false;
        }
        if (!registeredUsers.email) {
            state.errors = {...state.errors, email: [" does not exist."]}
            state.success = false;
        }
    }

    state.payload = result.data
    return state
}
