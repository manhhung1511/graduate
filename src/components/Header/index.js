import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { Link } from 'react-router-dom';
import Overlay from "../Overlay";
import Login from "../Login";
import Register from "../Register";

const cx = classNames.bind(styles);

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const infor = JSON.parse(localStorage.getItem("user")) ?? "";
    const user = infor ? infor.username : "";
    const [inputSearch, setInputSearch] = useState("")

    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    function handleSearch(e) {
        setInputSearch(e.target.value)
    }

    const handleLogin = () => {
        setShowRegister(false);
        setShowLogin(true);
    }

    const handleLoginClose = () => {
        setShowLogin(false);
      };

    const handleRegister = () => {
        setShowLogin(false);
        setShowRegister(true);
    }
  
    const handleRegisterClose = () => {
          setShowRegister(false);
    };


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
              setScrolled(true);
            } else {
              setScrolled(false);
            }
          };
      
          window.addEventListener('scroll', handleScroll);
      
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
      }, []); // Empty dependency array ensures that the effect runs only once
    
 
      const style = {
        overflow: scrolled ? 'hidden' : '',
        backgroundColor: scrolled ? '#FFF' : '',
        position: scrolled ? 'fixed' : '',
        top: scrolled ? '0' : '',
        width: scrolled ? '100%' : '',
        zIndex:scrolled ? '999' : '',
        boxShadow: scrolled ? '0px 6px 24px 0px rgba(86, 86, 86, 0.15)' : ''
      };

    return (
        <div className={cx("header-all")}>
            <div className={cx("navbar-full")}>
                <div className={cx("container")}>
                    <div className={cx("navbar")}>
                        <ul className={cx("navbar_left")}>
                            <li className={cx("navbar_left_item")}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                        d="M2.5 6.66666L9.0755 11.0503C9.63533 11.4235 10.3647 11.4235 10.9245 11.0503L17.5 6.66666M4.16667 15.8333H15.8333C16.7538 15.8333 17.5 15.0871 17.5 14.1667V5.83332C17.5 4.91285 16.7538 4.16666 15.8333 4.16666H4.16667C3.24619 4.16666 2.5 4.91285 2.5 5.83332V14.1667C2.5 15.0871 3.24619 15.8333 4.16667 15.8333Z"
                                        stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p>contact@insidemen.com</p>
                            </li>
                            <li className={cx("navbar_left_item")}>
                                <span>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M2.5 4.16667C2.5 3.24619 3.24619 2.5 4.16667 2.5H6.89937C7.25806 2.5 7.57651 2.72953 7.68994 3.06981L8.93811 6.81434C9.06926 7.20777 8.89115 7.63776 8.52022 7.82322L6.63917 8.76375C7.55771 10.801 9.19898 12.4423 11.2363 13.3608L12.1768 11.4798C12.3622 11.1088 12.7922 10.9307 13.1857 11.0619L16.9302 12.3101C17.2705 12.4235 17.5 12.7419 17.5 13.1006V15.8333C17.5 16.7538 16.7538 17.5 15.8333 17.5H15C8.09644 17.5 2.5 11.9036 2.5 5V4.16667Z"
                                                    stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <p>
                                    1800.808.88
                                </p>
                            </li>
                        </ul>
                        <ul className={cx("navbar_right")}>
                            <li className={cx("navbar_right-item")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none">
                                            <path
                                                d="M15.6435 12.8517L16.0581 10.1485H13.4645V8.39425C13.4645 7.65471 13.8268 6.93385 14.9885 6.93385H16.1677V4.63248C16.1677 4.63248 15.0975 4.44983 14.0744 4.44983C11.9383 4.44983 10.5421 5.74445 10.5421 8.08819V10.1485H8.16769V12.8517H10.5421V19.3865C11.0182 19.4612 11.5062 19.5001 12.0033 19.5001C12.5004 19.5001 12.9884 19.4612 13.4645 19.3865V12.8517H15.6435Z"
                                                fill="#F9FAFB" />
                                </svg>
                            </li>
                            <li className={cx("navbar_right-item")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12"
                                            fill="none">
                                            <g clipPath="url(#clip0_442_2823)">
                                                <path
                                                    d="M12.697 2.90101C12.7054 3.02375 12.7054 3.14649 12.7054 3.27036C12.7054 7.04468 9.83768 11.3976 4.59389 11.3976V11.3954C3.04486 11.3976 1.528 10.953 0.223969 10.1148C0.44921 10.142 0.675581 10.1555 0.902517 10.1561C2.18623 10.1572 3.43324 9.72567 4.44316 8.93099C3.22324 8.9078 2.15348 8.11085 1.77977 6.94739C2.20711 7.02997 2.64744 7.013 3.06687 6.89818C1.73687 6.62895 0.780017 5.45814 0.780017 4.09841C0.780017 4.08597 0.780017 4.07409 0.780017 4.06221C1.17631 4.28336 1.62002 4.4061 2.07389 4.41968C0.821227 3.58088 0.435098 1.91119 1.19155 0.605762C2.63897 2.39026 4.77453 3.47511 7.06703 3.58993C6.83728 2.59784 7.15115 1.55825 7.89179 0.860853C9.04002 -0.220595 10.8459 -0.165165 11.9253 0.984722C12.5637 0.85859 13.1757 0.623862 13.7357 0.291283C13.5228 0.952482 13.0774 1.51413 12.4824 1.87103C13.0475 1.80429 13.5996 1.65271 14.1195 1.42137C13.7368 1.99603 13.2547 2.4966 12.697 2.90101Z"
                                                    fill="#F9FAFB" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_442_2823">
                                                    <rect width="14" height="11.5385" fill="white"
                                                        transform="translate(0.167938)" />
                                                </clipPath>
                                            </defs>
                                </svg>
                            </li>
                            <li className={cx("navbar_right-item")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14"
                                            fill="none">
                                            <g clipPath="url(#clip0_442_2827)">
                                                <path
                                                    d="M7.16743 0.000366211C3.30166 0.000366211 0.167572 3.13446 0.167572 7.00022C0.167572 9.96724 2.01116 12.5022 4.61522 13.5219C4.55184 12.9688 4.49999 12.1162 4.63826 11.5112C4.76501 10.9639 5.45635 8.03148 5.45635 8.03148C5.45635 8.03148 5.24895 7.61091 5.24895 6.99446C5.24895 6.02082 5.81355 5.29491 6.51641 5.29491C7.11558 5.29491 7.40364 5.74428 7.40364 6.28007C7.40364 6.87924 7.0234 7.77799 6.82176 8.61336C6.65468 9.31046 7.17319 9.88082 7.85877 9.88082C9.10319 9.88082 10.0596 8.56727 10.0596 6.6776C10.0596 5.00109 8.85546 3.83156 7.13286 3.83156C5.13949 3.83156 3.96996 5.32371 3.96996 6.86772C3.96996 7.46688 4.20041 8.11213 4.48847 8.46357C4.54608 8.5327 4.55184 8.59608 4.53456 8.66521C4.48271 8.88414 4.36172 9.36231 4.33868 9.46025C4.30987 9.587 4.23498 9.61581 4.10247 9.55243C3.22677 9.14339 2.67945 7.87016 2.67945 6.83891C2.67945 4.63237 4.28107 2.60443 7.3057 2.60443C9.73116 2.60443 11.6208 4.33279 11.6208 6.64879C11.6208 9.06273 10.0999 11.0043 7.99128 11.0043C7.28265 11.0043 6.61435 10.6355 6.38967 10.1977C6.38967 10.1977 6.03823 11.5343 5.95182 11.8627C5.79626 12.4734 5.36994 13.2338 5.08187 13.7005C5.73865 13.9021 6.43 14.0116 7.15591 14.0116C11.0217 14.0116 14.1558 10.8775 14.1558 7.01175C14.1673 3.13446 11.0332 0.000366211 7.16743 0.000366211Z"
                                                    fill="#F9FAFB" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_442_2827">
                                                    <rect width="13.9997" height="13.9997" fill="white"
                                                        transform="translate(0.167572 0.000366211)" />
                                                </clipPath>
                                            </defs>
                                    </svg>
                            </li>
                            <li className={cx("navbar_right-item")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none">
                                            <path
                                                d="M16.5772 8.26396C16.5772 7.79868 16.2001 7.423 15.7366 7.423C15.273 7.423 14.8956 7.79868 14.8956 8.26396C14.8956 8.72752 15.273 9.10321 15.7366 9.10321C16.2001 9.10321 16.5772 8.72752 16.5772 8.26396Z"
                                                fill="#F9FAFB" />
                                            <path
                                                d="M17.6975 14.8284C17.6663 15.5109 17.5522 15.8818 17.4574 16.1281C17.3301 16.4547 17.1782 16.6882 16.9319 16.9331C16.6884 17.178 16.4549 17.3295 16.1283 17.4554C15.882 17.5516 15.5097 17.6661 14.8272 17.6986C14.0893 17.7312 13.8707 17.7381 11.9995 17.7381C10.1301 17.7381 9.90973 17.7312 9.17184 17.6986C8.48933 17.6661 8.11883 17.5516 7.87251 17.4554C7.54422 17.3295 7.31245 17.178 7.06753 16.9331C6.82087 16.6882 6.66901 16.4547 6.54344 16.1281C6.44863 15.8818 6.33276 15.5109 6.30334 14.8284C6.26738 14.0905 6.26079 13.8684 6.26079 12.0011C6.26079 10.1299 6.26738 9.90952 6.30334 9.17164C6.33276 8.48912 6.44863 8.11863 6.54344 7.87023C6.66901 7.54402 6.82087 7.31188 7.06753 7.06696C7.31245 6.8224 7.54422 6.67052 7.87251 6.54323C8.11883 6.44671 8.48933 6.33393 9.17184 6.30142C9.90973 6.26889 10.1301 6.26058 11.9995 6.26058C13.8707 6.26058 14.0893 6.26889 14.8272 6.30142C15.5097 6.33393 15.882 6.44671 16.1283 6.54323C16.4549 6.67052 16.6884 6.8224 16.9319 7.06696C17.1782 7.31188 17.3301 7.54402 17.4574 7.87023C17.5522 8.11863 17.6663 8.48912 17.6975 9.17164C17.7317 9.90952 17.74 10.1299 17.74 12.0011C17.74 13.8684 17.7317 14.0905 17.6975 14.8284ZM18.9577 9.11422C18.9235 8.36837 18.8058 7.85881 18.6311 7.41499C18.4533 6.95454 18.215 6.56432 17.8248 6.17411C17.4363 5.78563 17.0461 5.54727 16.5856 5.36739C16.1401 5.19442 15.6322 5.0754 14.886 5.04289C14.1398 5.00691 13.9015 5.00034 11.9995 5.00034C10.0993 5.00034 9.85924 5.00691 9.11305 5.04289C8.36858 5.0754 7.86109 5.19442 7.41346 5.36739C6.95475 5.54727 6.56453 5.78563 6.17605 6.17411C5.78583 6.56432 5.54748 6.95454 5.36793 7.41499C5.19496 7.85881 5.07735 8.36837 5.04136 9.11422C5.00885 9.86041 5.00055 10.0991 5.00055 12.0011C5.00055 13.9013 5.00885 14.1396 5.04136 14.8858C5.07735 15.6303 5.19496 16.1395 5.36793 16.5854C5.54748 17.0441 5.78583 17.4361 6.17605 17.8246C6.56453 18.213 6.95475 18.4531 7.41346 18.6327C7.86109 18.8056 8.36858 18.9233 9.11305 18.9575C9.85924 18.9918 10.0993 19.0001 11.9995 19.0001C13.9015 19.0001 14.1398 18.9918 14.886 18.9575C15.6322 18.9233 16.1401 18.8056 16.5856 18.6327C17.0461 18.4531 17.4363 18.213 17.8248 17.8246C18.215 17.4361 18.4533 17.0441 18.6311 16.5854C18.8058 16.1395 18.9235 15.6303 18.9577 14.8858C18.992 14.1396 19.0003 13.9013 19.0003 12.0011C19.0003 10.0991 18.992 9.86041 18.9577 9.11422Z"
                                                fill="#F9FAFB" />
                                            <path
                                                d="M11.9993 14.3324C10.7113 14.3324 9.66627 13.289 9.66627 12.0011C9.66627 10.7111 10.7113 9.66639 11.9993 9.66639C13.2876 9.66639 14.334 10.7111 14.334 12.0011C14.334 13.289 13.2876 14.3324 11.9993 14.3324ZM11.9993 8.40441C10.0139 8.40441 8.40604 10.0158 8.40604 12.0011C8.40604 13.9847 10.0139 15.5944 11.9993 15.5944C13.9846 15.5944 15.5942 13.9847 15.5942 12.0011C15.5942 10.0158 13.9846 8.40441 11.9993 8.40441Z"
                                                fill="#F9FAFB" />
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
             </div>
             <div style={style}>
                <div className={cx("container")}>
                    <div className={cx("header")}>
                        <div className={cx("header_left")}>
                            <div className={cx("header_logo")}>
                                <img src="./images/Brand.png" alt=""/>
                            </div>
                            <ul className={cx("header_menu")}>
                                <li className={cx("header_menu-list")}>
                                    <Link to={"/"} className={cx("header_menu-link")}>
                                        Trang chủ
                                    </Link>
                                </li>
                                <li className={cx("header_menu-list")}>
                                    <Link to={"/"} className={cx("header_menu-link")}>
                                        Sản phẩm
                                    </Link>
                                </li>
                                <li className={cx("header_menu-list")}>
                                    <Link to={"/"} className={cx("header_menu-link")}>
                                        Liên hệ
                                    </Link>
                                </li>
                                <li className={cx("header_menu-list")}>
                                    <Link to={"/"} className={cx("header_menu-link")}>
                                        Tin tức
                                    </Link>
                                </li>
                                <li className={cx("header_menu-list")}>
                                    <Link to={"/"} className={cx("header_menu-link")}>
                                        Giới thiệu
                                    </Link>
                                </li> 
                            </ul>
                        </div>
                        <div className={cx("header_right")}>
                            <div className={cx("header_right-search")}>
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm"
                                    value={inputSearch}
                                    onChange={handleSearch}
                                />

                            </div>
                            <ul className={cx("header_right-list")}>
                                <li className={cx("header_right-item")}>
                                    <Link to={"/"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9938 5.91615C10.1944 3.81913 7.19377 3.25504 4.93923 5.17528C2.68468 7.09552 2.36727 10.3061 4.13778 12.5771C5.60984 14.4654 10.0648 18.4478 11.5249 19.7368C11.6882 19.881 11.7699 19.9531 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9531 12.2994 19.881 12.4628 19.7368C13.9229 18.4478 18.3778 14.4654 19.8499 12.5771C21.6204 10.3061 21.3417 7.07532 19.0484 5.17528C16.7551 3.27524 13.7933 3.81913 11.9938 5.91615Z" stroke="#081C66" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </Link>
                                </li>
                                <li className={cx("header_right-item")}>
                                    <Link to={"/cart"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M3 4H3.60632C4.62694 4 5.48384 4.7685 5.59452 5.78311L6.40548 13.2169C6.51616 14.2315 7.37306 15 8.39368 15H17.046C17.9602 15 18.7581 14.3801 18.984 13.4942L20.3639 8.08311C20.6864 6.81854 19.731 5.58889 18.426 5.58889H6.6M6.62476 18.6249H7.37476M6.62476 19.3749H7.37476M17.6248 18.6249H18.3748M17.6248 19.3749H18.3748M8 19C8 19.5523 7.55229 20 7 20C6.44772 20 6 19.5523 6 19C6 18.4477 6.44772 18 7 18C7.55229 18 8 18.4477 8 19ZM19 19C19 19.5523 18.5523 20 18 20C17.4477 20 17 19.5523 17 19C17 18.4477 17.4477 18 18 18C18.5523 18 19 18.4477 19 19Z" stroke="#081C66" stroke-width="1.5" stroke-linecap="round"/>
                                        </svg>
                                    </Link>
                                </li>
                                <li className={cx("header_right-item")}>
                                {user ? (
                                        <Link to="/infor" style={{ textDecoration: 'none', color: '#081C66'}}>{user}</Link>   
                                        ) : (
                                        <button type="button" onClick={handleLogin}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 14C14.7614 14 17 11.7614 17 9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9C7 11.7614 9.23858 14 12 14ZM12 14C7.58172 14 4 16.6863 4 20M12 14C16.4183 14 20 16.6863 20 20" stroke="#081C66" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                        <span>Đăng nhập</span>
                                        </button>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
             </div>
            {
                showLogin && (
                    <Overlay >
                        <Login onClose={handleLoginClose} onRegister={handleRegister}/>
                    </Overlay>
                )
            }
            {
                showRegister && (
                    <Overlay >
                        <Register onClose={handleRegisterClose} onLogin={handleLogin}/>
                    </Overlay>
                )
            }

        </div>
    );
}

export default Header