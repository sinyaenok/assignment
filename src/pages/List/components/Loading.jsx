//외부 라이브러리
import PacmanLoader from "react-spinners/PacmanLoader";

/**로딩시 스피너를 출력하는 함수 */
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
