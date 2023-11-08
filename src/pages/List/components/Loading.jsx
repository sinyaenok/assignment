import PacmanLoader from "react-spinners/PacmanLoader";

export default function Loading() {
  return (
    <tr>
      <td>
        <PacmanLoader color="#fad1d9" size={16} />
        <span>Loading...</span>
      </td>
      <td>
        <PacmanLoader color="#fad1d9" size={16} />
        <span>Loading...</span>
      </td>
      <td>
        <PacmanLoader color="#fad1d9" size={16} />
        <span>Loading...</span>
      </td>
    </tr>
  );
}
