import React from "react";
import { FloatButton } from "antd";
import { GiftOutlined, FlagOutlined, MenuOutlined, HomeOutlined, InfoCircleOutlined } from "@ant-design/icons";

const Navbar = () => {
    

    return (
        <>
            <div className="nav_container">
                <FloatButton.Group trigger="click"
                  shape="square"
                  type="primary"
                  style={{right: 24}}
                  icon={<MenuOutlined/>}
                >
                    <a href="/"><FloatButton tooltip={<div>Home</div>} icon={<HomeOutlined/>}></FloatButton></a>
                    {/* <a href="/about"><FloatButton tooltip={<div>About</div>} icon={<InfoCircleOutlined/>}></FloatButton></a>*/}
                    <a href="/races"><FloatButton tooltip={<div>Races</div>} icon={<FlagOutlined/>}></FloatButton></a>
                    <a href="/sweepstakes"><FloatButton tooltip={<div>Sweepstakes</div>} icon={<GiftOutlined/>}></FloatButton></a>
                </FloatButton.Group>
            </div>
        </>
    )
};

export default Navbar;