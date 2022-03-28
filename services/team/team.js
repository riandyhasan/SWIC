import React, { useEffect, useState } from "react";
import { db } from "../../utils/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function getTeams() {
  const [team, setTeam] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getData() {
    try {
      const response = await getDocs(collection(db, "team"));
      setTeam(
        response.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
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

  return { team, error, loading };
}