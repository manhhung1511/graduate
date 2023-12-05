import React, { useState } from "react";
import styles from "./Product.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import products from "../../../data/product.json";

const cx = classNames.bind(styles);
const Product = () => {
    const [inputSearch, setInputSearch] = useState("")

    function handleSearch(e) {
        setInputSearch(e.target.value)
    }

    return (
        <>
    <div className={cx("product")}>
        <div className={cx("order_summary")}>
            <div className={cx("order_title")} >
                <h3>Tất cả sản phẩm</h3>
            </div>

            <div className={cx("order_search")} >
            <div className={cx("navbar_search")}>
                    <input
                    type="text"
                    placeholder="Tìm kiếm sản phẩm"
                    value={inputSearch}
                    onChange={handleSearch}
                />
                <Link to="/admin/add-product">
                <button>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M9.9987 3.33325V16.6666M16.6654 9.99992L3.33203 9.99992" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    Thêm sản phẩm
                </button>
                </Link>
                </div>
            </div>
        </div>

        <table className={cx("styled-table")}>
            <thead>
                <tr>
                <th>Mã sản phẩm</th>
                <th>Sản phẩm</th>
                <th>Số lượng</th>
                <th>Giá bán</th>
                <th>Hành động</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((item, index) => (
                        <tr>
                        <td>{item.id}</td>
                        <td>
                            <Link to={`/admin/detail-order/${item.id}`} className={cx("order_name")}>
                                <img style={{width: "75px", height: "80px"}} src={item.img} alt="" />
                                {item.name}
                            </Link>
                        </td>
                        <td>{item.number}</td>
                        <td>{item.price}</td>
                        <td>
                            <button className={cx("button-cut")}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M10.75 10C10.75 9.58579 10.4142 9.25 10 9.25C9.58579 9.25 9.25 9.58579 9.25 10H10.75ZM9.25 18C9.25 18.4142 9.58579 18.75 10 18.75C10.4142 18.75 10.75 18.4142 10.75 18H9.25ZM14.75 10C14.75 9.58579 14.4142 9.25 14 9.25C13.5858 9.25 13.25 9.58579 13.25 10H14.75ZM13.25 18C13.25 18.4142 13.5858 18.75 14 18.75C14.4142 18.75 14.75 18.4142 14.75 18H13.25ZM7.09202 20.782L7.43251 20.1138H7.43251L7.09202 20.782ZM6.21799 19.908L6.88624 19.5675H6.88624L6.21799 19.908ZM17.782 19.908L17.1138 19.5675V19.5675L17.782 19.908ZM16.908 20.782L16.5675 20.1138H16.5675L16.908 20.782ZM5 6.25C4.58579 6.25 4.25 6.58579 4.25 7C4.25 7.41421 4.58579 7.75 5 7.75V6.25ZM19 7.75C19.4142 7.75 19.75 7.41421 19.75 7C19.75 6.58579 19.4142 6.25 19 6.25V7.75ZM7.75 7C7.75 7.41421 8.08579 7.75 8.5 7.75C8.91421 7.75 9.25 7.41421 9.25 7H7.75ZM14.75 7C14.75 7.41421 15.0858 7.75 15.5 7.75C15.9142 7.75 16.25 7.41421 16.25 7H14.75ZM9.25 10V18H10.75V10H9.25ZM13.25 10V18H14.75V10H13.25ZM17.25 7V17.8H18.75V7H17.25ZM14.8 20.25H9.2V21.75H14.8V20.25ZM5.25 7V17.8H6.75V7H5.25ZM9.2 20.25C8.62757 20.25 8.24336 20.2494 7.94748 20.2252C7.66035 20.2018 7.52307 20.1599 7.43251 20.1138L6.75153 21.4503C7.08879 21.6221 7.44545 21.6892 7.82533 21.7203C8.19646 21.7506 8.65232 21.75 9.2 21.75V20.25ZM5.25 17.8C5.25 18.3477 5.24942 18.8035 5.27974 19.1747C5.31078 19.5546 5.37789 19.9112 5.54973 20.2485L6.88624 19.5675C6.8401 19.4769 6.79822 19.3396 6.77476 19.0525C6.75058 18.7566 6.75 18.3724 6.75 17.8H5.25ZM7.43251 20.1138C7.19731 19.9939 7.00608 19.8027 6.88624 19.5675L5.54973 20.2485C5.81338 20.7659 6.23408 21.1866 6.75153 21.4503L7.43251 20.1138ZM17.25 17.8C17.25 18.3724 17.2494 18.7566 17.2252 19.0525C17.2018 19.3396 17.1599 19.4769 17.1138 19.5675L18.4503 20.2485C18.6221 19.9112 18.6892 19.5546 18.7203 19.1747C18.7506 18.8035 18.75 18.3477 18.75 17.8H17.25ZM14.8 21.75C15.3477 21.75 15.8035 21.7506 16.1747 21.7203C16.5546 21.6892 16.9112 21.6221 17.2485 21.4503L16.5675 20.1138C16.4769 20.1599 16.3396 20.2018 16.0525 20.2252C15.7566 20.2494 15.3724 20.25 14.8 20.25V21.75ZM17.1138 19.5675C16.9939 19.8027 16.8027 19.9939 16.5675 20.1138L17.2485 21.4503C17.7659 21.1866 18.1866 20.7659 18.4503 20.2485L17.1138 19.5675ZM5 7.75H6V6.25H5V7.75ZM6 7.75H18V6.25H6V7.75ZM18 7.75H19V6.25H18V7.75ZM9.25 6.2C9.25 4.90875 10.4165 3.75 12 3.75V2.25C9.71746 2.25 7.75 3.95663 7.75 6.2H9.25ZM12 3.75C13.5835 3.75 14.75 4.90875 14.75 6.2H16.25C16.25 3.95663 14.2825 2.25 12 2.25V3.75ZM7.75 6.2V7H9.25V6.2H7.75ZM14.75 6.2V7H16.25V6.2H14.75Z" fill="#FC4343"/>
                                </svg>
                            </button>
                            <button className={cx("button-cut")}> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M11 5H6C4.89543 5 4 5.89543 4 7V18C4 19.1046 4.89543 20 6 20H17C18.1046 20 19 19.1046 19 18V13M17.5858 3.58579C18.3668 2.80474 19.6332 2.80474 20.4142 3.58579C21.1953 4.36683 21.1953 5.63316 20.4142 6.41421L11.8284 15H9L9 12.1716L17.5858 3.58579Z" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            </button>
                        </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
        </>
    );
}

export default Product;