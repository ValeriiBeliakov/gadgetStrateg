import ReactLoading from 'react-loading';
import s from "./Loading.module.scss";

export function Loading() {
  return (
    <div className={s.loading}>
      <ReactLoading type="spinningBubbles" color="#FFCA00" height={100} width={100} />
    </div>
  );
}
