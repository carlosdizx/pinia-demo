import firebase from "firebase/compat";
import { AUTH } from "../../app/firebaseConfig";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from "firebase/auth";

export class AuthService {
  public static singUp = async (
    email: string,
    password: string
  ): Promise<void> => {
    const result = await createUserWithEmailAndPassword(AUTH, email, password);
    if (result.user) await this.sendEmailVerification(result.user);
  };

  public static singIn = async (
    email: string,
    password: string
  ): Promise<void> => {
    await signInWithEmailAndPassword(AUTH, email, password);
  };

  private static sendEmailVerification = async (user: any): Promise<void> => {
    await sendEmailVerification(user);
  };

  public static logout = async () => await signOut(AUTH);

  public static currentEmailUser = () => AUTH.currentUser?.email;
}
