import React from "react";
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

const Footer = () => {
    return (
        <div className={cx("footer")}>
            <div className={cx("container")}>
                <div className={cx("row")}>
                    <div className={cx("col-sm-3")}>
                        <div className={cx("footer-content")}>
                            <h4>DỊCH VỤ KHÁCH HÀNG</h4>
                            <p>Trợ giúp</p>
                            <p>Chăm sóc khách hàng</p>
                            <p>Chính sách vận chuyển</p>
                            <p>Hải Quan và Thuế</p>
                            <p>Đánh giá của khách hàng</p>
                        </div>
                    </div>
                    <div className={cx("col-sm-3")}>
                        <div className={cx("footer-content")}>
                            <h4>CÔNG TY</h4>
                            <p>Trợ giúp</p>
                            <p>Chăm sóc khách hàng</p>
                            <p>Chính sách vận chuyển</p>
                            <p>Hải Quan và Thuế</p>
                            <p>Đánh giá của khách hàng</p>
                        </div>
                    </div>
                    <div className={cx("col-sm-3")}>
                        <div className={cx("footer-content")}>
                            <h4>TRUNG TÂM TRỢ GIÚP</h4>
                            <p>Trợ giúp</p>
                            <p>Chăm sóc khách hàng</p>
                            <p>Chính sách vận chuyển</p>
                            <p>Hải Quan và Thuế</p>
                            <p>Đánh giá của khách hàng</p>
                        </div>
                    </div>
                    <div className={cx("col-sm-3")}>
                        <div className={cx("footer-content")}>
                            <h4>CHÍNH SÁCH</h4>
                            <p>Trợ giúp</p>
                            <p>Chăm sóc khách hàng</p>
                            <p>Chính sách vận chuyển</p>
                            <p>Hải Quan và Thuế</p>
                            <p>Đánh giá của khách hàng</p>
                        </div>
                    </div>
                </div>
                <div className={cx("footer-bottom")}>
                    <p>Insidemen © Bản quyền 2023, Inc. Bảo lưu mọi quyền</p>
                    <ul className={cx("footer-bottom-list")}>
                        <li className={cx("footer-bottom-item")}>
                            <Link to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M15.6435 12.8516L16.0581 10.1484H13.4645V8.39419C13.4645 7.65465 13.8268 6.93379 14.9885 6.93379H16.1677V4.63242C16.1677 4.63242 15.0975 4.44977 14.0744 4.44977C11.9383 4.44977 10.5422 5.74439 10.5422 8.08813V10.1484H8.16772V12.8516H10.5422V19.3864C11.0183 19.4611 11.5062 19.5 12.0033 19.5C12.5004 19.5 12.9884 19.4611 13.4645 19.3864V12.8516H15.6435Z" fill="#F9FAFB"/>
                                </svg>
                            </Link>
                        </li>
                        <li className={cx("footer-bottom-item")}>
                            <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12" fill="none">
                                <g clipPath="url(#clip0_449_8106)">
                                    <path d="M12.697 2.90104C12.7055 3.02378 12.7055 3.14652 12.7055 3.27039C12.7055 7.04471 9.83771 11.3976 4.59392 11.3976V11.3954C3.04489 11.3976 1.52803 10.9531 0.223999 10.1148C0.449241 10.142 0.675612 10.1556 0.902547 10.1561C2.18626 10.1573 3.43327 9.7257 4.44319 8.93102C3.22327 8.90783 2.15352 8.11088 1.77981 6.94742C2.20714 7.03 2.64747 7.01303 3.0669 6.89821C1.7369 6.62898 0.780047 5.45817 0.780047 4.09844C0.780047 4.086 0.780047 4.07412 0.780047 4.06224C1.17634 4.28339 1.62005 4.40613 2.07392 4.41971C0.821257 3.58091 0.435128 1.91122 1.19158 0.605793C2.639 2.3903 4.77456 3.47514 7.06706 3.58996C6.83731 2.59787 7.15118 1.55828 7.89182 0.860883C9.04005 -0.220565 10.8459 -0.165135 11.9253 0.984752C12.5638 0.858621 13.1757 0.623892 13.7357 0.291313C13.5229 0.952512 13.0775 1.51416 12.4825 1.87106C13.0475 1.80432 13.5996 1.65274 14.1196 1.4214C13.7368 1.99606 13.2547 2.49663 12.697 2.90104Z" fill="#F9FAFB"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_449_8106">
                                    <rect width="14" height="11.5385" fill="white" transform="translate(0.167969)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            </Link>
                        </li>
                        <li className={cx("footer-bottom-item")}>
                            <Link to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                                    <g clipPath="url(#clip0_449_8110)">
                                        <path d="M7.16746 0.000488281C3.30169 0.000488281 0.167603 3.13458 0.167603 7.00035C0.167603 9.96736 2.01119 12.5023 4.61525 13.522C4.55187 12.9689 4.50002 12.1163 4.63829 11.5114C4.76504 10.9641 5.45638 8.0316 5.45638 8.0316C5.45638 8.0316 5.24898 7.61103 5.24898 6.99458C5.24898 6.02094 5.81358 5.29503 6.51644 5.29503C7.11561 5.29503 7.40367 5.7444 7.40367 6.2802C7.40367 6.87936 7.02343 7.77811 6.82179 8.61348C6.65471 9.31059 7.17322 9.88094 7.8588 9.88094C9.10322 9.88094 10.0596 8.56739 10.0596 6.67772C10.0596 5.00121 8.85549 3.83169 7.13289 3.83169C5.13952 3.83169 3.96999 5.32384 3.96999 6.86784C3.96999 7.467 4.20044 8.11226 4.4885 8.46369C4.54611 8.53282 4.55188 8.5962 4.53459 8.66533C4.48274 8.88426 4.36176 9.36244 4.33871 9.46038C4.3099 9.58712 4.23501 9.61593 4.1025 9.55256C3.2268 9.14351 2.67949 7.87029 2.67949 6.83903C2.67949 4.63249 4.2811 2.60455 7.30573 2.60455C9.73119 2.60455 11.6209 4.33291 11.6209 6.64891C11.6209 9.06285 10.0999 11.0044 7.99131 11.0044C7.28268 11.0044 6.61438 10.6357 6.3897 10.1978C6.3897 10.1978 6.03826 11.5344 5.95185 11.8628C5.79629 12.4735 5.36997 13.234 5.08191 13.7006C5.73868 13.9023 6.43003 14.0117 7.15594 14.0117C11.0217 14.0117 14.1558 10.8776 14.1558 7.01187C14.1673 3.13458 11.0332 0.000488281 7.16746 0.000488281Z" fill="#F9FAFB"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_449_8110">
                                        <rect width="13.9997" height="13.9997" fill="white" transform="translate(0.167603 0.000488281)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                        </li>
                        <li className={cx("footer-bottom-item")}>
                            <Link to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M16.5771 8.26402C16.5771 7.79874 16.2 7.42306 15.7365 7.42306C15.2729 7.42306 14.8955 7.79874 14.8955 8.26402C14.8955 8.72758 15.2729 9.10327 15.7365 9.10327C16.2 9.10327 16.5771 8.72758 16.5771 8.26402Z" fill="#F9FAFB"/>
                                <path d="M17.6974 14.8286C17.6663 15.5111 17.5521 15.882 17.4573 16.1283C17.33 16.4548 17.1781 16.6883 16.9318 16.9333C16.6883 17.1782 16.4548 17.3297 16.1282 17.4556C15.8819 17.5518 15.5097 17.6663 14.8272 17.6988C14.0893 17.7313 13.8706 17.7383 11.9995 17.7383C10.13 17.7383 9.90967 17.7313 9.17178 17.6988C8.48927 17.6663 8.11877 17.5518 7.87245 17.4556C7.54416 17.3297 7.31239 17.1782 7.06747 16.9333C6.82081 16.6883 6.66895 16.4548 6.54337 16.1283C6.44857 15.882 6.3327 15.5111 6.30328 14.8286C6.26732 14.0907 6.26073 13.8686 6.26073 12.0013C6.26073 10.1301 6.26732 9.9097 6.30328 9.17182C6.3327 8.48931 6.44857 8.11881 6.54337 7.87041C6.66895 7.5442 6.82081 7.31207 7.06747 7.06714C7.31239 6.82258 7.54416 6.6707 7.87245 6.54341C8.11877 6.4469 8.48927 6.33411 9.17178 6.3016C9.90967 6.26907 10.13 6.26077 11.9995 6.26077C13.8706 6.26077 14.0893 6.26907 14.8272 6.3016C15.5097 6.33411 15.8819 6.4469 16.1282 6.54341C16.4548 6.6707 16.6883 6.82258 16.9318 7.06714C17.1781 7.31207 17.33 7.5442 17.4573 7.87041C17.5521 8.11881 17.6663 8.48931 17.6974 9.17182C17.7316 9.9097 17.7399 10.1301 17.7399 12.0013C17.7399 13.8686 17.7316 14.0907 17.6974 14.8286ZM18.9577 9.11441C18.9234 8.36856 18.8058 7.85899 18.6311 7.41517C18.4533 6.95472 18.2149 6.56451 17.8247 6.17429C17.4362 5.78581 17.046 5.54745 16.5856 5.36758C16.14 5.1946 15.6321 5.07559 14.886 5.04308C14.1398 5.00709 13.9014 5.00053 11.9995 5.00053C10.0992 5.00053 9.85918 5.00709 9.11299 5.04308C8.36852 5.07559 7.86103 5.1946 7.4134 5.36758C6.95468 5.54745 6.56447 5.78581 6.17599 6.17429C5.78577 6.56451 5.54741 6.95472 5.36787 7.41517C5.1949 7.85899 5.07729 8.36856 5.0413 9.11441C5.00879 9.86059 5.00049 10.0993 5.00049 12.0013C5.00049 13.9015 5.00879 14.1398 5.0413 14.886C5.07729 15.6305 5.1949 16.1397 5.36787 16.5856C5.54741 17.0443 5.78577 17.4363 6.17599 17.8247C6.56447 18.2132 6.95468 18.4533 7.4134 18.6329C7.86103 18.8058 8.36852 18.9234 9.11299 18.9577C9.85918 18.9919 10.0992 19.0002 11.9995 19.0002C13.9014 19.0002 14.1398 18.9919 14.886 18.9577C15.6321 18.9234 16.14 18.8058 16.5856 18.6329C17.046 18.4533 17.4362 18.2132 17.8247 17.8247C18.2149 17.4363 18.4533 17.0443 18.6311 16.5856C18.8058 16.1397 18.9234 15.6305 18.9577 14.886C18.9919 14.1398 19.0002 13.9015 19.0002 12.0013C19.0002 10.0993 18.9919 9.86059 18.9577 9.11441Z" fill="#F9FAFB"/>
                                <path d="M11.9992 14.3325C10.7113 14.3325 9.66624 13.2891 9.66624 12.0012C9.66624 10.7112 10.7113 9.66651 11.9992 9.66651C13.2875 9.66651 14.334 10.7112 14.334 12.0012C14.334 13.2891 13.2875 14.3325 11.9992 14.3325ZM11.9992 8.40454C10.0139 8.40454 8.40601 10.0159 8.40601 12.0012C8.40601 13.9848 10.0139 15.5945 11.9992 15.5945C13.9846 15.5945 15.5942 13.9848 15.5942 12.0012C15.5942 10.0159 13.9846 8.40454 11.9992 8.40454Z" fill="#F9FAFB"/>
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
        
export default Footer;