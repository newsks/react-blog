import { Link } from "react-router-dom";

export default function PostDetail() {
  return (
    <>
      <div className="post__detail">
        <div className="post__box">
          <div className="post__title">
            Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit, amet
            consectetur
          </div>
          <div className="post__profile-box">
            <div className="post__profile" />
            <div className="post__author-name">test@test.com</div>
            <div className="post__date">2023.09.15 금요일</div>
          </div>
          <div className="post__utils-box">
            <div className="post__edit">
              <Link to={`/posts/edit/1`}>수정</Link>
            </div>
            <div className="post__delete">삭제</div>
          </div>
          <div className="post__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
            odit vitae eos maiores laudantium eligendi eius quia illo sapiente
            dolore blanditiis enim modi quaerat earum suscipit hic asperiores,
            sit consequatur.
          </div>
        </div>
      </div>
    </>
  );
}
