// import React from "react";

// interface SHProps {
//   name: string
// }
// const SayHello = ({name}: SHProps): JSX.Element=> {
//   return (
//     <div>Hey1 {name}, say hello to TypeScript.</div>
//   );
// }
// export default SayHello


import React from "react";

const SayHello = ({ name }: { name: string }): JSX.Element => (
  <div>Hey {name}, say hello to TypeScript.</div>
);
export default SayHello;