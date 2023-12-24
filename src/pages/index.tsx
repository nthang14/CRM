export default function Dashboard() {
  return <div>index</div>;
}

// export async function getServerSideProps(context: any) {
//   if (!context?.req?.cookies?.accessToken) {
//     return {
//       redirect: {
//         destination: "/auth/login",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: {},
//   };
// }
