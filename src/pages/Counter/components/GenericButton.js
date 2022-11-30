// export const GenericButton = (props) => {
//   return (
//     <button
//       onClick={() =>
//         props.onCalculateClick(
//           props.wartoscDoSkalkulowania,
//           props.znakMatematyczny
//         )
//       }
//     >
//       {props.znakMatematyczny}
//       {props.wartoscDoSkalkulowania}
//     </button>
//   );
// };

export const GenericButton = (props) => {
  const { onCalculateClick, znakMatematyczny, wartoscDoSkalkulowania } = props;
  return (
    <button
      onClick={() => onCalculateClick(wartoscDoSkalkulowania, znakMatematyczny)}
    >
      {znakMatematyczny}
      {wartoscDoSkalkulowania}
    </button>
  );
};
