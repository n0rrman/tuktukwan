"use server";

import { z } from "zod";

const newAccountSchema = z.object({
    username: z.string()
        .min(3)
        .max(40),
    displayName: z.string()
        .min(3)
        .max(40),
    email: z.string()
        .min(3)
        .max(40),
});

interface CreateNewAccountState {
    errors: {
        username?: string[];
        displayName?: string[];
        email?: string[];
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


    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors,
            success: false,
        }
    }
    
    
    return {
        errors: {},
        payload: result.data,
        success: true,
    }
}
