"use server";

import { checkUser } from "@/services/api/user-server";
import { z } from "zod";

const newAccountSchema = z.object({
    username: z.string()
        .min(3, { message: " is too short."})
        .max(32, { message : " is too long."}),
    displayName: z.string()
        .min(3, { message: " is too short."})
        .max(64, { message : " is too long."}),
    email: z.string()
        .email({ message: " is not valid."}),
});

interface CreateNewAccountState {
    errors: {
        username?: string[];
        displayName?: string[];
        email?: string[];
        terms?: string[];
        policy?: string[];
    }
    success?: boolean;
    payload?: { username: string; displayName: string; email:string; };
}

export async function createNewAccount(formState: CreateNewAccountState, formData: FormData): Promise<CreateNewAccountState> {
    const result = newAccountSchema.safeParse({
        username: formData.get("username"),
        displayName: formData.get("displayName"),
        email: formData.get("email"),
    });
    
    let state: CreateNewAccountState = { errors: {}, success: true }
    if (!result.success) {
        state.errors = result.error.flatten().fieldErrors;
        state.success = false;
    }

    // Check tickboxes
    if (!formData.get("terms")) {
        state.errors = {...state.errors, terms: [" must be accepted."]}
        state.success = false;
    }
    if (!formData.get("policy")) {
        state.errors = {...state.errors, policy: [" must be accepted."]}
        state.success = false;
    }


    // Check registered
    if (state.success) {
        const registeredUsers = await checkUser(formData.get("username")!.toString(), formData.get("email")!.toString())
        
        if (registeredUsers.username) {
            state.errors = {...state.errors, username: [" already in use."]}
            state.success = false;
        }
        if (registeredUsers.email) {
            state.errors = {...state.errors, email: [" already in use."]}
            state.success = false;
        }
    }

    state.payload = result.data
    return state
}
