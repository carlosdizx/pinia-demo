import firebase from "firebase/compat";
import { AUTH } from "../../app/firebaseConfig";
import User = firebase.User;

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from "firebase/auth";

export class AuthService {
  public singUp = async (email: string, password: string): Promise<void> => {
    const result = await createUserWithEmailAndPassword(AUTH, email, password);
    if (result.user) await this.sendEmailVerification(result.user);
  };

  public singIn = async (email: string, password: string): Promise<void> => {
    await signInWithEmailAndPassword(AUTH, email, password);
  };

  private sendEmailVerification = async (user: User | any): Promise<void> => {
    await sendEmailVerification(user);
  };

  public logout = async () => await signOut(AUTH);

  public currentEmailUser = () => AUTH.currentUser?.email;
}
