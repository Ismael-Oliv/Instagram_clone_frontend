import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   *{
      box-sizing: border-box;
      margin: 0;
      padding:0;
      outline:0 ;
   }

   body{
      background: #fafafa;
      /* color: #FFF; */
      -webkit-font-smoothing: antialiased;
   }

   body, input, button{
      font-family: 'Roboto Slab', serif;
      font-size: 14px;
   }

   button{
      cursor: pointer;
   }
`;
