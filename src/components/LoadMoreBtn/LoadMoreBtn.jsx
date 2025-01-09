import { Oval } from "react-loader-spinner";
import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ loading, onLoadMoreBtn }) => {
  return (
    <div className={css.loadMoreBtnContainer}>
      <button className={css.loadMoreBtn} type="button" onClick={onLoadMoreBtn}>
        {loading ? (
          <>
            <span>Loading...</span>
            <div className={css.moreBtnLoaderThumb}>
              <Oval
                visible={true}
                height="80"
                width="80"
                color="white"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>
          </>
        ) : (
          <span>Load more</span>
        )}
      </button>
    </div>
  );
};

export default LoadMoreBtn;
