import React, { useState } from "react";
import styles from "./SidebarNav.module.scss";
import overview from "../../../assets/icons/overview.svg";
import markets from "../../../assets/icons/markets.svg";
import transactions from "../../../assets/icons/transactions.svg";
import settings from "../../../assets/icons/settings.svg";
import logout from "../../../assets/icons/logout.svg";
import { NavLink, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/slices/auth/authSlice";

const SidebarNav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(logOut());

    toast.success("You've succesfully logout!");
  };
  return (
    <nav>
      {/* //! GENERAL LIST */}
      <ul className={styles.generalList}>
        <h2 className={styles.sectionTitle}>
          General
          <span>
            <hr className={styles.divider} />
          </span>
        </h2>
        <NavLink to="/account">
          {({ isActive }) => (
            <li className={isActive ? styles.active : styles.listItem}>
              <img src={overview} alt="overview" />
              Overview
            </li>
          )}
        </NavLink>
        <NavLink to="/markets">
          {({ isActive }) => (
            <li className={isActive ? styles.active : styles.listItem}>
              <img src={markets} alt="markets" />
              Markets
            </li>
          )}
        </NavLink>
        <NavLink to="/stock-transactions">
          {({ isActive }) => (
            <li className={isActive ? styles.active : styles.listItem}>
              <img src={transactions} alt="transactions" /> Stock Transactions
            </li>
          )}
        </NavLink>
      </ul>
      {/* //! SUPPORT LIST */}
      <ul className={styles.supportList}>
        <h2 className={styles.sectionTitle}>
          Support
          <span>
            <hr className={styles.divider} />
          </span>
        </h2>
        <NavLink to="/settings">
          <li className={styles.listItem}>
            <img src={settings} alt="settings" />
            Settings
          </li>
        </NavLink>
        <NavLink onClick={logOutHandler} to="/">
          <li className={styles.listItem} id="logout">
            <img src={logout} alt="logout" />
            Log out
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default SidebarNav;
