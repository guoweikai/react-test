/*
 * @Author: your name
 * @Date: 2023-06-12 16:24:36
 * @LastEditTime: 2023-06-12 16:29:02
 * @LastEditors: localhost
 * @Description: In User Settings Edit
 * @FilePath: /react-test/src/component/MyFunction.js
 */
import { useContext } from "react";
import { ThemeContext } from "../App"
export default function () {
    const theme = useContext(ThemeContext)
    return <div>{theme}</div>;
}