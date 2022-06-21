import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const Articles = () => {

  const navigate = useNavigate();

  const goBack = () => {
    // 이전 페이지로 이동
    navigate(-1);
  };

  const goArticles = () => {
    // articles 경로로 이동
    navigate('/articles');
  };
  return (
    <div>
        <Button type='primary' onClick={goBack}>뒤로가기</Button>
        <Button onClick={goArticles}>게시글 목록</Button>
        <ul>
        <li>
            <Link to="/articles/1">게시글 1</Link>
        </li>
        <li>
            <Link to="/articles/2">게시글 2</Link>
        </li>
        <li>
            <Link to="/articles/3">게시글 3</Link>
        </li>
        </ul>
        <Outlet />
    </div>
  );
};

export default Articles;