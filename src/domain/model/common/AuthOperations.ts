import firebase from "firebase/compat";
import UserCredential = firebase.auth.UserCredential;
import User = firebase.User;

export interface AuthOperations {
  singUp(email: string, password: string): Promise<UserCredential>;

  singIn(email: string, password: string): Promise<UserCredential>;

  sendEmailVerification(user: User): Promise<void>;
}
