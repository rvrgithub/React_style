import styled from "styled-components";

// export const  Button = ({children,onClick})=>{
//     return <button onClick={onClick} className="btn">Text:{children}</button>
// }
 const Button =styled.button `
 background:${(props) => (props.theme === "light" ? "#007bff" :"#ff9c01")};
 color:${(props) =>(props.theme==="light" ? "#ff9c01":"#007bff" )};
margin:auto;
/* margin-left: 40%; */
height:50px;
width: 200px;
cursor: pointer;
/* width: 100px; */
 `;

 export {Button}