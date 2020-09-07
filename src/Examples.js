import React from "react";
import s from "./Examples.module.css";

const Examples = () => {
  return (
    <div className={s.banner}>
      <div className={s.content1}>
        <div className={s.photo}></div>
        <div className={s.info}>
          <h2>Work example 1</h2>
          <h2 className={s.dop_text}>
            and a very brief description of the work in large bold letters
            followed by
          </h2>
        </div>
        <div className={s.text}>
          <p>
            Maecenas at volutpat nisl. Integer iaculis sem hendrerit libero
            luctus pellentesque. Morbi vulputate dolor est, lacinia lobortis
            urna semper volutpat.
          </p>
          <p>
            Cras consequat, ex at scelerisque convallis, odio nulla egestas sem,
            et aliquam nunc est at nulla. Vivamus a sodales est, quis tristique
            velit. Proin vel dui velit. Fusce lacinia condimentum tempus.
            Praesent malesuada nisi tristique efficitur aliquet. Phasellus
            consequat lorem rutrum interdum venenatis. Nunc dapibus ligula id
            massa venenatis, non ullamcorper nibh rhoncus.
          </p>
        </div>
      </div>
      <div className={s.content2}>
        <div className={s.photo}></div>
        <div className={s.info}>
          <h2>Work example 2</h2>
          <h2 className={s.dop_text}>
            and a very brief description of the work in large bold letters
            followed by
          </h2>
        </div>
        <div className={s.text}>
          <p>
            Maecenas at volutpat nisl. Integer iaculis sem hendrerit libero
            luctus pellentesque. Morbi vulputate dolor est, lacinia lobortis
            urna semper volutpat.
          </p>
          <p>
            Cras consequat, ex at scelerisque convallis, odio nulla egestas sem,
            et aliquam nunc est at nulla. Vivamus a sodales est, quis tristique
            velit. Proin vel dui velit. Fusce lacinia condimentum tempus.
            Praesent malesuada nisi tristique efficitur aliquet. Phasellus
            consequat lorem rutrum interdum venenatis. Nunc dapibus ligula id
            massa venenatis, non ullamcorper nibh rhoncus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Examples;
