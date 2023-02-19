import React, { useState } from "react";
import { useRouter } from "next/router";
import store from "@/stores";
import { useDispatch, useSelector } from "react-redux";
import * as profile from "@/stores/reducer/profile";

const Logout = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const store = useSelector((state) => state);
  useState(() => {
    setTimeout(() => {
      dispatch(profile.setProfile(null));
      dispatch(profile.setToken(null));
      router.replace("/");
    }, 1500);
  }, []);

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "40vh" }}
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Please wait...
      </h1>
    </div>
  );
};

export default Logout;
