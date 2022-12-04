# React Hook 사용하기

## useState
https://ko.reactjs.org/docs/hooks-reference.html#usestate

## useEffect
https://ko.reactjs.org/docs/hooks-reference.html#useeffect

### useMemo와 useCallback을 배우기 전에 알아야 하는 것
- 함수형 컴포넌트는 그냥 함수다. 다시 한 번 강조하자면 함수형 컴포넌트는 단지 jsx를 반환하는 함수이다.

- 컴포넌트가 렌더링 된다는 것은 누군가가 그 함수(컴포넌트)를 호출하여서 실행되는 것을 말한다. 함수가 실행될 때마다 내부에 선언되어 있던 표현식(변수, 또다른 함수 등)도 매번 다시 선언되어 사용된다.

- 컴포넌트는 자신의 state가 변경되거나, 부모에게서 받는 props가 변경되었을 때마다 리렌더링 된다. (심지어 하위 컴포넌트에 최적화 설정을 해주지 않으면 부모에게서 받는 props가 변경되지 않았더라도 리렌더링 되는게 기본이다. )
## useMemo
- https://ko.reactjs.org/docs/hooks-reference.html#usememo
- 메모리제이션(동일한 계산을 반복해야 할 때, 이전에 계산한 값을 메모리에 저장함으로써 동일한 계산의 반복 수행을 제거하여 프로그램 실행 속도를 빠르게 하는 기술)된 값을 반환
-  useMemo를 사용하지 않고도 동작할 수 있도록 코드를 작성하고 그것을 추가하여 성능을 최적화하는게 더 좋긴 함

## useCallback
https://ko.reactjs.org/docs/hooks-reference.html#usecallback
