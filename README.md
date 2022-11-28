# 라우팅으로 페이지 나누기
## react-router-dom 모듈 다운
```
yarn add react-router-dom@5.3.0
```

## 최상위 index.js에 Router 추가
```
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <RouterApp />
  </Router>
);

```

## 각 컴포넌트 및 페이지 만들고 패스 나누기
```
<div className="container-wrapper">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/member" component={Member} />
        <Route component={NotFound} />
      </Switch>
    </div>
```