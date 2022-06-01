import React, { useEffect, useState } from "react";
import { db } from "../../utils/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function getUsers() {
  const [user, setUser] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getData() {
    try {
      const response = await getDocs(collection(db, "user"));
      setUser(
        response.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
      response.docs.map((doc) => {
        // console.log(doc.data());
      })
      setLoading(false);
      setError(null);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return { user, error, loading };
}