import { Form, useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  console.log(params);
  const house = await fetch("http://localhost:8080/house/"+params.houseId);
  if (!house) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { house };
}

export default function House() {
  const house = useLoaderData();

  //fetch("http://localhost:8080/house/")

  return (
    <div id="house">
        <h1>{house.description}</h1>

        {/* <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div> */}
    </div>
  );
}

// function Favorite({ house }) {
//   // yes, this is a `let` for later
//   let favorite = house.favorite;
//   return (
//     <Form method="post">
//       <button
//         name="favorite"
//         value={favorite ? "false" : "true"}
//         aria-label={
//           favorite
//             ? "Remove from favorites"
//             : "Add to favorites"
//         }
//       >
//         {favorite ? "★" : "☆"}
//       </button>
//     </Form>
//   );
// }