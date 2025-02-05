import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { useEffect, useState } from "react";

import PropTypes from "prop-types";

import AuthContext from "../Context/AuthContext";
import auth from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // sign in with google
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // log out
  const logOut = async () => {
    setLoading(true);
    return signOut(auth);
  };

  // observer from firebase
  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  if (loading) {
    return <div className="text-center font-bold h-screen">Loading ...</div>;
  }

  // props
  const authInfo = {
    signInWithGoogle,
    logOut,
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
