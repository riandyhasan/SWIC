import React, { useEffect, useState } from "react";
import { db } from "../../utils/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export default function getProfile() {
  const [profile, setProfile] = useState({ data: null, loading: true });
  const auth = getAuth();

  async function getData() {
    const user = auth.currentUser;
    const loc = doc(db, "user", user.uid);
    const userData = await getDoc(loc);
    if (userData.exists) {
      setProfile({
        data: user,
        displayName: user.displayName,
        userID: user.uid,
        profiles: userData.data(),
        loading: false,
      });
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getData();
      } else {
        setProfile({ data: null, loading: false });
      }
    });
  }, []);

  return profile;
}