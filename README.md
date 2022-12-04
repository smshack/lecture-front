# 7. useContext
- https://ko.reactjs.org/docs/hooks-reference.html#usecontext
- ' context를 이용하면 단계마다 일일이 props를 넘겨주지 않고도 컴포넌트 트리 전체에 데이터를 제공할 수 있습니다
- React 어플리케이션에서 데이터는 props를 통해서 부모에서 자식에게 전달
- 어플리케이션 안의 여러 컴포넌트들에게 props를 전달해줘야 하는 경우 context를 이용하면 명시적으로 props를 넘겨주지 않아도 값을 공유할 수 있게 해주는 것

## context API를 사용하기 위해서는 Provider , Consumer , createContext 이렇게 세가지 개념을 알고 있으면 된다.
- createContext : context 객체를 생성한다.
- Provider : 생성한 context를 하위 컴포넌트에게 전달하는 역할을 한다.
- Consumer : context의 변화를 감시하는 컴포넌트이다.(컴포넌트 전체를 감싸서 사용하지만 보통 useContext정도만 사용해도 됨)