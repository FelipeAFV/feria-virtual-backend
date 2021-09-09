import { compare, hash} from "bcrypt";

export async function encrypt(plainPassword: string): Promise<string | undefined> {
    let encryptedPassword = await hash(plainPassword, 10);

    if (encryptedPassword) {
        return encryptedPassword;
    } else {
        return undefined;
    }
}


export async function compareHashedPassword(plainPassword: string, hashedPassword: string) {
    let isValid =  await compare(plainPassword, hashedPassword);

    return isValid;
}


